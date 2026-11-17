/* Conversar: (1) diálogos guiados (material/dialogos.js) e (2) prompts prontos para treinar conversa com o ChatGPT. */
(function () {
  'use strict';
  const EN = window.EN, S = EN.S, C = EN.C, esc = C.esc, save = EN.save;
  const $ = (s, r) => (r || document).querySelector(s);
  const rnd = n => Math.floor(Math.random() * n);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const AUDIO_OK = 'speechSynthesis' in window;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const DLG = () => Array.isArray(window.CURSO_DIALOGOS) ? window.CURSO_DIALOGOS.filter(d => d && d.id && Array.isArray(d.turnos) && d.turnos.length) : [];
  const CENS = () => Array.isArray(window.CURSO_CENARIOS) ? window.CURSO_CENARIOS : [];
  const mode = () => (S.settings.convMode === 'type' ? 'type' : 'opts');

  /* ───────────── comparação de respostas ───────────── */
  const CONTR = [["i'm", 'i am'], ["you're", 'you are'], ["he's", 'he is'], ["she's", 'she is'], ["it's", 'it is'], ["we're", 'we are'], ["they're", 'they are'], ["isn't", 'is not'], ["aren't", 'are not'], ["doesn't", 'does not'], ["don't", 'do not'], ["can't", 'can not'], ["what's", 'what is'], ["where's", 'where is'], ["that's", 'that is'], ["there's", 'there is'], ["let's", 'let us']];
  const norm = s => { let t = String(s == null ? '' : s).toLowerCase().replace(/[’‘`]/g, "'").normalize('NFD').replace(/[̀-ͯ]/g, ''); for (const [a, b] of CONTR) t = t.split(a).join(b); return t.replace(/[^a-z0-9' ]+/g, ' ').replace(/'/g, '').replace(/\s+/g, ' ').trim(); };
  function lev(a, b) { const m = a.length, n = b.length; if (!m) return n; if (!n) return m; let p = Array.from({ length: n + 1 }, (_, j) => j); for (let i = 1; i <= m; i++) { const c = [i]; for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = c; } return p[n]; }
  const hit = (v, acc) => { const c = norm(v); return !!c && acc.some(a => norm(a) === c); };
  const near = (v, acc) => { const c = norm(v); return !!c && acc.some(a => { const x = norm(a); return x.length >= 4 && lev(c, x) <= (x.length >= 12 ? 2 : 1); }); };
  /* fala reconhecida: aceita se a maior parte das palavras da resposta aparece no que foi dito */
  const spoken = (v, acc) => { const w = norm(v).split(' ').filter(Boolean); return acc.some(a => { const t = norm(a).split(' ').filter(Boolean); return t.length && t.filter(x => w.includes(x)).length / t.length >= .7; }); };

  /* ───────────── prompts para o ChatGPT ───────────── */
  const lvlOf = m => ((m && m.n) || 1) <= 4 ? 'A1 (iniciante)' : 'A2 (básico)';
  function promptText(c) {
    const L = [];
    L.push(`Você vai ser o meu parceiro de conversação em inglês americano. Sou brasileiro, aprendiz de nível ${c.nivel}, e estou estudando com um curso próprio.`);
    L.push('');
    L.push(`TEMA DE HOJE: ${c.tema}`);
    if (c.resumo) L.push(`Resumo do que estudei: ${c.resumo}`);
    if (c.gramatica && c.gramatica.length) L.push(`Gramática-alvo (use e me faça usar): ${c.gramatica.join('; ')}.`);
    if (c.papel) L.push(`SITUAÇÃO: faça de conta que você é ${c.papel.ia} e eu sou ${c.papel.eu}. Comece a cena você mesmo, de forma natural.`);
    if (c.frases && c.frases.length) { L.push(''); L.push('Frases e vocabulário que quero praticar (traga-os para a conversa):'); c.frases.forEach(f => L.push('- ' + f)); }
    L.push('');
    L.push('COMO CONDUZIR:');
    L.push('1. Faça UMA pergunta ou fala por vez, em inglês, com frases curtas (no máximo 12 palavras) e vocabulário de nível ' + (/^A1/.test(c.nivel) ? 'A1' : 'A2') + '. Espere a minha resposta; nunca responda por mim.');
    L.push('2. Primeiro reaja naturalmente ao que eu disse. Depois, se houver erro, escreva uma linha "💡 Correção:" com a frase corrigida e explique em português, em 1 ou 2 linhas, POR QUE está errado (a regra). Corrija no máximo 2 erros por mensagem.');
    L.push('3. Se eu escrever "não sei", dê uma dica em inglês bem simples (e em português só se precisar) e peça para eu tentar de novo. Não zombe de erro: errar faz parte.');
    L.push('4. Se eu escrever em português, responda em inglês simples e me mostre como dizer aquilo em inglês.');
    L.push('5. Aumente a dificuldade aos poucos, sem sair da gramática e do vocabulário que estudei. Nada de tempos verbais além do meu nível.');
    L.push('6. Só traduza para o português quando eu escrever "pt". Escreva primeiro o inglês e, só se eu pedir, a tradução logo abaixo.');
    L.push('7. Depois de cerca de 10 trocas, pare e faça um resumo: 3 acertos, os 3 erros mais frequentes (com a explicação) e 5 frases para eu revisar.');
    L.push('');
    L.push('Pode começar agora.');
    return L.join('\n');
  }
  function sesCtx(sid) {
    const x = C.SES[sid]; if (!x) return null; const { s, m } = x;
    const bl = s.blocos || [];
    const gram = bl.filter(b => b.t === 'h' && /^3\./.test(String(b.n))).map(b => C.plain(b.title || '').toLowerCase());
    const fr = []; bl.filter(b => b.t === 'vocab').forEach(b => (b.items || []).forEach(i => { if (i && i[1]) fr.push(C.plain(i[1])); }));
    return { tema: C.plain(s.titulo || ''), nivel: lvlOf(m), resumo: C.plain(s.resumo || ''), gramatica: gram, frases: fr.slice(0, 14) };
  }
  function cenCtx(id) {
    const d = DLG().find(x => x.id === id || x.cen === id), c = CENS().find(x => x.id === id); if (!d && !c) return null;
    const it = c ? c.itens.map(i => i[0]).slice(0, 14) : [];
    return { tema: (d ? d.titulo : c.titulo) + (c && d ? ' (' + c.titulo + ')' : ''), nivel: d && d.nivel === 'A2' ? 'A2 (básico)' : 'A1 (iniciante)', resumo: '', gramatica: [], frases: it, papel: d ? { ia: d.npc, eu: d.eu } : null };
  }
  async function copyText(t) {
    try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(t); return true; } } catch (e) { }
    try { const ta = document.createElement('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0'; document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0, t.length); const ok = document.execCommand('copy'); ta.remove(); return !!ok; } catch (e) { return false; }
  }
  async function giveChat(ctx) {
    if (!ctx) { EN.toast('Não encontrei o conteúdo para montar o prompt.'); return; }
    const text = promptText(ctx);
    if (await copyText(text)) EN.toast('Prompt copiado! Abra uma conversa NOVA no ChatGPT e cole (Ctrl+V ou segurar e colar).');
    else C.ask(`<h3>Copie o prompt</h3><p class="small muted">Não consegui copiar sozinho. Selecione o texto abaixo, copie e cole numa conversa nova do ChatGPT.</p><textarea readonly rows="12" style="width:100%;font:13px/1.4 monospace" onfocus="this.select()">${esc(text)}</textarea>`, [{ label: 'Fechar', cls: 'pri' }]);
  }

  /* ───────────── fala (voz do aparelho e microfone) ───────────── */
  const sayBtns = t => AUDIO_OK ? `<button type="button" class="cv-ib" data-cv="say" data-t="${esc(t)}" title="Ouvir" aria-label="Ouvir">🔊</button><button type="button" class="cv-ib" data-cv="say" data-t="${esc(t)}" data-slow="1" title="Ouvir devagar" aria-label="Ouvir devagar">🐢</button>` : '';
  let rec = null;
  const stopRec = () => { try { if (rec) { rec.onresult = rec.onerror = rec.onend = null; rec.abort(); } } catch (e) { } rec = null; };

  /* ───────────── estado de um diálogo ───────────── */
  let DS = null;
  const find = id => DLG().find(d => d.id === id);
  function startDlg(id) {
    const d = find(id); if (!d) { DS = null; return; }
    DS = { id, i: 0, step: 'ask', errs: 0, wrong: new Set(), typed: '', msg: '', heard: '', opts: null, tries: 0, hint: false };
    makeOpts();
  }
  const turn = () => { const d = DS && find(DS.id); return d ? d.turnos[DS.i] : null; };
  function makeOpts() {
    const t = turn(); if (!t) return;
    DS.opts = shuffle([t.r[0]].concat(t.x || []).slice(0, 4)); DS.wrong = new Set();
  }
  const who = d => (d.npc || 'Personagem').replace(/^(um|uma)\s+/i, '').replace(/^./, c => c.toUpperCase());

  /* ───────────── páginas ───────────── */
  function doneCount() { return DLG().filter(d => (S.conv[d.id] || {}).n).length; }
  function indexHTML() {
    const list = DLG(), md = mode();
    const sid = (S.last && C.SES[S.last]) ? S.last : C.ORDER[0];
    return `<h1 class="pgtitle">💬 Conversar</h1>
      <div class="hero cv-hero"><div class="deco">💬</div><div class="small" style="opacity:.85">Situações reais, uma fala de cada vez</div><h1>Treine conversar</h1><p>Ouça o outro personagem, escolha ou escreva a sua resposta e, se quiser, fale em voz alta. Depois, leve a mesma situação para o ChatGPT e converse de verdade.</p>
        <div class="cv-modes" role="group" aria-label="Como responder"><button type="button" class="cv-mode ${md === 'opts' ? 'on' : ''}" data-cv="mode" data-v="opts" aria-pressed="${md === 'opts'}"><b>Escolher a resposta</b><small>3 opções por fala (mais fácil)</small></button><button type="button" class="cv-mode ${md === 'type' ? 'on' : ''}" data-cv="mode" data-v="type" aria-pressed="${md === 'type'}"><b>Escrever em inglês</b><small>sem opções (mais difícil)</small></button></div>
        <label class="cv-auto"><input type="checkbox" id="cvAuto" ${S.settings.convSpeak ? 'checked' : ''}> Falar as falas do personagem sozinho</label></div>
      <div class="sectitle">Diálogos guiados <span class="sp muted">${doneCount()}/${list.length} concluídos</span></div>
      <div class="grid g2">${list.map(d => { const r = S.conv[d.id] || {}; return `<a class="cv-card" href="#/conversar/${esc(d.id)}" style="--cc:var(--p-${C.col(d.cor || 'teal')})"><span class="cv-ci">${esc(d.icone || '💬')}</span><span><b>${esc(d.titulo)}</b><small>${esc(d.nivel || 'A1')} · ${d.turnos.length} falas · você é ${esc(d.eu || 'você')}</small></span><i class="cv-st">${r.n ? (r.best === 0 ? '★★★' : r.best <= 2 ? '★★' : '★') : ''}</i></a>`; }).join('')}</div>
      <div class="sectitle">Conversa livre com o ChatGPT</div>
      <div class="card"><p style="margin-top:0">Quando os diálogos ficarem fáceis, converse com uma IA. Toque num botão: o <b>prompt pronto é copiado</b>. Abra uma <b>conversa nova e vazia</b> no ChatGPT, cole e responda. Ele corrige com explicação, em português.</p>
        ${sid ? `<div class="act"><button type="button" class="btn pri" data-chat="ses" data-k="${esc(sid)}">💬 Sobre a sessão atual: ${esc(C.plain(C.SES[sid].s.titulo))}</button></div>` : ''}
        <p class="small muted" style="margin:12px 0 6px">Ou escolha uma situação:</p><div class="cv-chips">${list.map(d => `<button type="button" class="cv-chip" data-chat="cen" data-k="${esc(d.id)}">${esc(d.icone || '💬')} ${esc(d.titulo)}</button>`).join('')}</div>
        <p class="small muted" style="margin:12px 0 0">Dentro de cada sessão do curso também há o botão <b>💬 Treinar conversa com o ChatGPT</b>, com o tema e as frases daquela sessão.</p></div>`;
  }
  function bubbles(d) {
    let h = '';
    for (let k = 0; k <= DS.i && k < d.turnos.length; k++) {
      const t = d.turnos[k];
      h += `<div class="cv-b npc"><div class="cv-who">${esc(who(d))}</div><p>${esc(t.n)}</p><div class="cv-tools">${sayBtns(t.n)}<details class="cv-pt"><summary>tradução</summary>${esc(t.np || '')}</details></div></div>`;
      if (k < DS.i || DS.step === 'fb' || DS.step === 'end') h += `<div class="cv-b me"><div class="cv-who">Você</div><p>${esc(t.r[0])}</p></div>`;
    }
    return h;
  }
  function actHTML(d) {
    const t = turn(); if (!t) return '';
    if (DS.step === 'fb') {
      const alt = t.r.slice(1, 3).filter(x => norm(x) !== norm(t.r[0]));
      return `<div class="cv-fb ok"><b>✔ Isso aí!</b> Resposta-modelo: <b>${esc(t.r[0])}</b> ${sayBtns(t.r[0])}${alt.length ? `<div class="small muted">Também serve: ${alt.map(a => '“' + esc(a) + '”').join(' · ')}</div>` : ''}</div>
        <div class="cv-mic"><button type="button" class="btn" data-cv="mic" ${SR ? '' : 'disabled title="Este navegador não reconhece fala"'}>🎤 Falar a resposta</button><span class="small ${DS.heardOk ? 'okt' : 'muted'}" id="cvHeard">${SR ? esc(DS.heard) : 'Sem microfone aqui: fale em voz alta e siga em frente.'}</span></div>
        <div class="cv-go"><button type="button" class="btn pri lg" data-cv="next">${DS.i + 1 >= d.turnos.length ? 'Terminar' : 'Continuar'} →</button></div>`;
    }
    if (mode() === 'type') {
      return `<div class="cv-q">Sua vez. Diga em inglês: <b>“${esc(t.rp || '')}”</b></div><div class="cv-type"><input type="text" id="cvIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Escreva em inglês" value="${esc(DS.typed)}"><div class="cv-ta"><button type="button" class="btn ghost" data-cv="idk">Não sei</button><button type="button" class="btn pri" data-cv="check">Verificar</button></div></div>${DS.msg ? `<div class="cv-fb bad">${DS.msg}</div>` : ''}`;
    }
    return `<div class="cv-q">Sua vez. Qual é a melhor resposta?</div><div class="cv-opts">${DS.opts.map((o, i) => `<button type="button" class="cv-opt ${DS.wrong.has(i) ? 'bad' : ''}" data-cv="opt" data-i="${i}" ${DS.wrong.has(i) ? 'disabled' : ''}>${esc(o)}</button>`).join('')}</div>${DS.msg ? `<div class="cv-fb bad">${DS.msg}</div>` : ''}<p class="small muted" style="margin:6px 0 0">Dica em português: <i>${esc(t.rp || '')}</i></p>`;
  }
  function endHTML(d) {
    const stars = DS.errs === 0 ? 3 : DS.errs <= 2 ? 2 : 1, r = S.conv[d.id] || {};
    return `<div class="cv-end"><div class="cv-stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div><h2>${DS.errs === 0 ? 'Conversa perfeita!' : 'Conversa concluída!'}</h2><p class="muted">${DS.errs ? DS.errs + (DS.errs === 1 ? ' erro' : ' erros') + ' nesta vez.' : 'Nenhum erro.'} ${r.n > 1 ? 'Você já fez este diálogo ' + r.n + ' vezes.' : ''}</p>
      <div class="act" style="justify-content:center"><button type="button" class="btn" data-cv="again">↻ Repetir</button><button type="button" class="btn" data-cv="${mode() === 'opts' ? 'harder' : 'easier'}">${mode() === 'opts' ? '✍ Repetir escrevendo' : '☑ Repetir com opções'}</button><a class="btn" href="#/conversar">Outros diálogos</a></div>
      <div class="act" style="justify-content:center"><button type="button" class="btn pri" data-chat="cen" data-k="${esc(d.id)}">💬 Conversar sobre isto com o ChatGPT</button></div></div>`;
  }
  function dialogHTML(id) {
    const d = find(id); if (!d) return `<div class="welcome"><h1>Diálogo não encontrado</h1><a class="btn pri" href="#/conversar">Voltar a Conversar</a></div>`;
    if (!DS || DS.id !== id) startDlg(id);
    return `<div class="crumbs"><a href="#/">Início</a> › <a href="#/conversar">Conversar</a> › ${esc(d.titulo)}</div>
      <div class="lhead cv-dh" style="background:var(--p-${C.col(d.cor || 'teal')})"><span class="tag" style="background:var(--c-${C.col(d.cor || 'teal')})">${esc(d.nivel || 'A1')}</span><h1>${esc(d.icone || '')} ${esc(d.titulo)}</h1><p>Você é <b>${esc(d.eu || 'você')}</b> e conversa com <b>${esc(d.npc || 'um personagem')}</b>.</p><div class="cv-dots" id="cvDots"></div></div>
      <div class="cv-chat" id="cvChat" aria-live="polite"></div><div class="cv-actbox" id="cvAct"></div>`;
  }
  function pageHTML(id) { stopRec(); return id ? dialogHTML(id) : (DS = null, indexHTML()); }

  /* ───────────── desenhar e reagir ───────────── */
  function draw(opts) {
    const d = DS && find(DS.id); const chat = $('#cvChat'), act = $('#cvAct'); if (!d || !chat || !act) return;
    chat.innerHTML = bubbles(d) + (DS.step === 'end' ? '' : '');
    act.className = 'cv-actbox' + (DS.step === 'end' ? ' static' : ''); act.innerHTML = DS.step === 'end' ? endHTML(d) : actHTML(d);
    const dots = $('#cvDots'); if (dots) dots.innerHTML = d.turnos.map((_, k) => `<i class="${k < DS.i || DS.step === 'end' || (k === DS.i && DS.step === 'fb') ? 'on' : k === DS.i ? 'cur' : ''}"></i>`).join('');
    if (!opts || !opts.keep) { const last = chat.lastElementChild; if (last && last.scrollIntoView) last.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
    const inp = $('#cvIn'); if (inp && !(opts && opts.nofocus)) { try { inp.focus({ preventScroll: true }); } catch (e) { } }
  }
  function sayLine() { const t = turn(); if (t && S.settings.convSpeak && AUDIO_OK && DS.step === 'ask') setTimeout(() => { if (turn() === t && DS && DS.step === 'ask') C.speak(t.n); }, 350); }
  function right() {
    const t = turn(); DS.step = 'fb'; DS.heard = ''; DS.heardOk = false; DS.msg = '';
    draw(); if (AUDIO_OK && S.settings.convSpeak) setTimeout(() => C.speak(t.r[0]), 250);
  }
  function wrong(why) { DS.errs++; DS.msg = why; draw({ keep: true, nofocus: true }); }
  function finishDlg() {
    const d = find(DS.id), r = S.conv[d.id] || {}, first = !r.n;
    S.conv[d.id] = { n: (r.n || 0) + 1, best: r.best == null ? DS.errs : Math.min(r.best, DS.errs), at: new Date().toISOString() };
    S.c.conv = DLG().filter(x => (S.conv[x.id] || {}).n).length;
    EN.gainOnce('conv:' + d.id, 12 + (DS.errs === 0 ? 6 : 0), { silent: true }); EN.gainOnce('conv:' + d.id + ':' + EN.dkey(), 3, { silent: true });
    save(); EN.checkBadges(); if (DS.errs === 0 && EN.confetti) EN.confetti();
    if (first) EN.toast('💬 Primeira vez neste diálogo: +' + (12 + (DS.errs === 0 ? 6 : 0)) + ' XP');
    DS.step = 'end'; draw();
    if (EN.onUpdate) EN.onUpdate();
  }
  function micStart() {
    if (!SR || !DS) return; const t = turn(), el = $('#cvHeard'); if (!t || !el) return;
    stopRec(); try { speechSynthesis.cancel(); } catch (e) { }
    try {
      rec = new SR(); rec.lang = 'en-US'; rec.interimResults = false; rec.maxAlternatives = 3;
      el.className = 'small muted'; el.textContent = 'Ouvindo… fale agora.';
      rec.onresult = ev => { const alts = Array.from(ev.results[0] || []).map(a => a.transcript); const ok = alts.some(a => spoken(a, t.r)); DS.heard = (ok ? '✔ ' : '↻ ') + 'Ouvi: “' + (alts[0] || '') + '”' + (ok ? '' : '. Tente de novo.'); DS.heardOk = ok; el.className = 'small ' + (ok ? 'okt' : 'muted'); el.textContent = DS.heard; };
      rec.onerror = ev => { el.className = 'small muted'; el.textContent = ev.error === 'not-allowed' ? 'O microfone foi bloqueado neste navegador.' : ev.error === 'no-speech' ? 'Não ouvi nada. Tente de novo.' : 'Não consegui ouvir. Tente de novo.'; };
      rec.onend = () => { rec = null; };
      rec.start();
    } catch (e) { el.textContent = 'Não consegui ligar o microfone.'; }
  }

  const view = document.getElementById('view');
  const onPage = () => location.hash.indexOf('#/conversar') === 0;
  view.addEventListener('click', e => {
    const ch = e.target.closest('[data-chat]');
    if (ch) { e.preventDefault(); giveChat(ch.dataset.chat === 'ses' ? sesCtx(ch.dataset.k) : cenCtx(ch.dataset.k)); return; }
    if (!onPage()) return;
    const b = e.target.closest('[data-cv]'); if (!b) return; const a = b.dataset.cv;
    if (a === 'say') { C.speak(b.dataset.t, !!b.dataset.slow); return; }
    if (a === 'mode') { S.settings.convMode = b.dataset.v; save(); EN.rerender(); return; }
    if (!DS) return; const t = turn();
    if (a === 'opt' && DS.step === 'ask' && t) {
      const i = +b.dataset.i;
      if (norm(DS.opts[i]) === norm(t.r[0])) right(); else { DS.wrong.add(i); wrong('Essa resposta não combina com a pergunta. Tente outra.'); }
      return;
    }
    if (a === 'check' && DS.step === 'ask' && t) {
      const inp = $('#cvIn'), v = inp ? inp.value : ''; DS.typed = v; if (!v.trim()) return;
      if (hit(v, t.r)) { DS.typed = ''; right(); }
      else if (near(v, t.r)) { DS.msg = 'Quase! Confira a escrita das palavras e tente de novo.'; draw({ keep: true }); }
      else { DS.tries++; wrong(DS.tries >= 2 ? 'Ainda não. Dica: ' + esc(t.r[0].split(' ').slice(0, 2).join(' ')) + '…' : 'Ainda não. Releia a pergunta e tente de novo.'); }
      return;
    }
    if (a === 'idk' && DS.step === 'ask' && t) { DS.errs++; DS.typed = ''; DS.tries = 0; right(); return; }
    if (a === 'mic') { micStart(); return; }
    if (a === 'next') {
      stopRec(); if (DS.i + 1 >= find(DS.id).turnos.length) { finishDlg(); return; }
      DS.i++; DS.step = 'ask'; DS.msg = ''; DS.typed = ''; DS.tries = 0; makeOpts(); draw(); sayLine(); return;
    }
    if (a === 'again') { startDlg(DS.id); draw(); sayLine(); return; }
    if (a === 'harder' || a === 'easier') { S.settings.convMode = a === 'harder' ? 'type' : 'opts'; save(); startDlg(DS.id); draw(); sayLine(); return; }
  });
  view.addEventListener('keydown', e => { if (onPage() && e.key === 'Enter' && e.target.id === 'cvIn') { e.preventDefault(); const b = $('[data-cv="check"]'); if (b) b.click(); } });
  view.addEventListener('change', e => { if (e.target.id === 'cvAuto') { S.settings.convSpeak = e.target.checked; save(); } });
  view.addEventListener('input', e => { if (e.target.id === 'cvIn' && DS) DS.typed = e.target.value; });

  /* conquistas da área */
  [
    { id: 'cv1', i: '💬', n: 'Primeira conversa', d: 'Conclua um diálogo guiado', t: s => (s.c.conv || 0) >= 1 },
    { id: 'cv6', i: '🗣️', n: 'Papo em dia', d: 'Conclua 6 diálogos guiados', t: s => (s.c.conv || 0) >= 6 },
    { id: 'cv12', i: '🌐', n: 'Falante do mundo', d: 'Conclua os 12 diálogos guiados', t: s => (s.c.conv || 0) >= 12 }
  ].forEach(b => { if (!EN.BADGES.some(x => x.id === b.id)) EN.BADGES.push(b); });

  /* depois que a página é desenhada, mostra o diálogo */
  EN.conv = {
    pageHTML(id) { const h = pageHTML(id); if (id && DS) setTimeout(() => { draw({ nofocus: true }); sayLine(); }, 0); return h; },
    promptSession: sid => giveChat(sesCtx(sid)), promptScenario: id => giveChat(cenCtx(id)), promptText
  };
})();
