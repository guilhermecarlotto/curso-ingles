/* Índice do curso, renderização dos blocos de conteúdo, exercícios, seleção/tradução e banco do Anki. */
(function () {
  'use strict';
  const EN = window.EN, S = EN.S, save = EN.save;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const md = s => esc(s).replace(/\{(y|b|g|r|t):([^}]*)\}/g, '<span class="m-$1">$2</span>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
  const plain = s => String(s == null ? '' : s).replace(/\{(?:y|b|g|r|t):([^}]*)\}/g, '$1').replace(/\*\*/g, '');
  const norm = s => String(s).toLowerCase().replace(/[‘’´`]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
  const strip = s => norm(s).replace(/[.,!?;:"()…]/g, '').replace(/\s+/g, ' ').trim();
  const key = s => strip(plain(s));
  const COLORS = ['coral', 'teal', 'blue', 'violet', 'amber', 'green', 'rose'];
  const col = c => COLORS.includes(c) ? c : 'blue';

  const C = EN.C = {
    course: null, LEX: new Map(), LEXLIST: [], DECK: new Map(), GL: new Map(), PRON: new Map(), ITEMS: {}, BLOCKS: {}, SES: {}, MOD: {}, ORDER: [], VIDEOS: {}, PRODS: {},
    esc, md, plain, norm, strip, key, col
  };

  /* ───────────── índice ───────────── */
  function addLex(en, pt, pron) {
    const k = key(en); if (!k || !pt) return;
    if (!C.LEX.has(k)) { const e = { en: plain(en), pt: plain(pt), pron: pron || '', k }; C.LEX.set(k, e); C.LEXLIST.push(e); }
    else if (pron && !C.LEX.get(k).pron) C.LEX.get(k).pron = pron;
  }
  function addGloss(str) { String(str || '').split(';').forEach(p => { const i = p.indexOf('='); if (i > 0) C.GL.set(norm(p.slice(0, i)), p.slice(i + 1).trim()); }); }
  const iid = (b, i) => b.id + '.' + (b.items[i].id != null ? b.items[i].id : i);
  C.iid = iid;

  function walk(blocks, s, m) {
    blocks.forEach((b, bi) => {
      if (!b.id && ['ex', 'video', 'prod', 'roteiro', 'vocab'].includes(b.t)) b.id = `${b.t}-${s ? s.id : m.id}-${bi}`;
      if (b.t === 'vocab') b.items.forEach(([n, en, pr, pt]) => { addLex(en, pt, pr); C.DECK.set(key(en), { n, deck: (m.anki && m.anki.deck) || b.deck || '' }); });
      if (b.t === 'table' && b.pairs) b.rows.forEach(r => b.pairs.forEach(([i, j]) => addLex(r[i], r[j])));
      if (b.t === 'example') b.lines.forEach(l => addLex(l[1], l[2]));
      if (b.t === 'reading') { b.sents.forEach(x => addLex(x[0], x[1])); (b.glossario || []).forEach(([w, t]) => C.GL.set(norm(w), t)); }
      if (b.t === 'listen') b.frases.forEach(f => addLex(f[0], f[1]));
      if (b.t === 'ex') { C.BLOCKS[b.id] = b; b.items.forEach((it, i) => { C.ITEMS[iid(b, i)] = { b, it, i, s, m }; }); }
      if (b.t === 'video') C.VIDEOS[b.id] = { b, s, m };
      if (b.t === 'prod') C.PRODS[b.id] = { b, s, m };
    });
  }
  C.index = course => {
    C.course = course;
    ['LEX', 'DECK', 'GL'].forEach(k => C[k].clear()); C.LEXLIST.length = 0;
    ['ITEMS', 'BLOCKS', 'SES', 'MOD', 'VIDEOS', 'PRODS'].forEach(k => { Object.keys(C[k]).forEach(x => delete C[k][x]); });
    C.ORDER.length = 0;
    if (!course) return;
    C.PRON.clear(); const pr = window.CURSO_PRON || {}; Object.keys(pr).forEach(w => C.PRON.set(key(w), pr[w]));
    addGloss(course.gloss); (course.lex || []).forEach(x => addLex(x[0], x[1]));
    course.modulos.forEach(m => {
      C.MOD[m.id] = m; addGloss(m.gloss); (m.lex || []).forEach(x => addLex(x[0], x[1]));
      walk(m.blocos || [], null, m);
      (m.sessoes || []).forEach(s => { C.SES[s.id] = { s, m }; C.ORDER.push(s.id); walk(s.blocos || [], s, m); });
    });
  };
  const gl = w => {
    const k = norm(w).replace(/\.+$/, '');
    for (const x of [k, k.replace(/ies$/, 'y'), k.replace(/es$/, ''), k.replace(/s$/, ''), k.replace(/ing$/, ''), k.replace(/ed$/, '')]) if (C.GL.has(x)) return C.GL.get(x);
    return null;
  };
  const deckHit = k => { const b = k.replace(/^to /, ''); for (const c of [k, 'to ' + b, b]) if (C.DECK.has(c)) return C.DECK.get(c); return null; };
  const cursoCfg = () => (C.course && C.course.curso && C.course.curso.anki) || {};
  C.deckName = () => S.settings.deck || cursoCfg().selecionadas || 'Inglês::Selecionadas';
  C.deckTag = () => cursoCfg().tag || 'curso';

  /* ───────────── utilidades ───────────── */
  C.ask = (html, btns) => new Promise(res => {
    const d = $('#dlg');
    d.innerHTML = `<form method="dialog"><div class="dbody">${html}</div><div class="dbtn">${btns.map((b, i) => `<button value="${i}" class="btn ${b.cls || ''}">${esc(b.label)}</button>`).join('')}</div></form>`;
    d.returnValue = ''; d.onclose = () => { if (d.open) return; /* ignora o "close" atrasado de um diálogo anterior */ res(d.returnValue === '' ? -1 : +d.returnValue); };
    d.showModal();
  });
  C.download = (name, text, type) => {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: (type || 'text/plain') + ';charset=utf-8' })); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  };
  /* fala + destaque da palavra que está sendo pronunciada (evento "boundary"; sem ele, estimativa por tempo) */
  const HL = { id: 0, els: [], words: [], tm: null };
  function hlClear() {
    clearTimeout(HL.tm); HL.els.forEach(el => { if (el._orig != null) { el.textContent = el._orig; delete el._orig; } });
    HL.els = []; HL.words = [];
  }
  function hlMark(i) { HL.words.forEach((w, k) => w.classList.toggle('on', k === i)); const w = HL.words[i]; if (w && w.getBoundingClientRect) { const r = w.getBoundingClientRect(); if (r.top < 70 || r.bottom > innerHeight - 20) w.scrollIntoView({ block: 'center', behavior: 'smooth' }); } }
  function hlPrep(els, text) {
    const flat = s => String(s).replace(/\s+/g, ' ').trim();
    if (!els || !els.length || !els.every(el => el && el.children.length === 0 && el.isConnected)) return false;
    if (flat(els.map(e => e.textContent).join(' ')) !== flat(text)) return false;
    els.forEach(el => {
      el._orig = el.textContent;
      el.innerHTML = el.textContent.split(/(\s+)/).map(p => !p || /^\s+$/.test(p) ? esc(p) : `<span class="w">${esc(p)}</span>`).join('');
      HL.words.push(...el.querySelectorAll('.w'));
    });
    HL.els = els; return true;
  }
  C.speak = (t, slow, els) => {
    if (!('speechSynthesis' in window)) { EN.toast('Este navegador não tem voz embutida.'); return; }
    // iPhone/Safari: cancel() seguido de speak() no mesmo instante engole a fala; só cancela se houver algo falando e dá um respiro
    const busy = speechSynthesis.speaking || speechSynthesis.pending;
    if (busy) speechSynthesis.cancel();
    hlClear();
    const id = ++HL.id, text = String(t).replace(/\s+/g, ' ').trim(), rate = (slow || S.settings.slow) ? 0.65 : 0.92;
    const u = new SpeechSynthesisUtterance(text.replace(/[“”]/g, ' ').replace(/\//g, ',')); u.lang = 'en-US'; u.rate = rate;
    const v = speechSynthesis.getVoices().find(v => /^en[-_]US/i.test(v.lang)); if (v) u.voice = v;
    const toks = []; u.text.replace(/\S+/g, (m, o) => { toks.push({ s: o, e: o + m.length, w: m.length + 2 }); return m; });
    if (hlPrep(els, text) && HL.words.length === toks.length) {
      let gotB = false, t0 = 0;
      const at = ci => { let k = 0; for (let j = 0; j < toks.length; j++) if (toks[j].s <= ci) k = j; return k; };
      u.onstart = () => {
        t0 = Date.now();
        HL.tm = setTimeout(() => { // a voz não envia "boundary": estima pelo tempo
          if (gotB || HL.id !== id) return;
          const tot = toks.reduce((a, x) => a + x.w, 0), ms = text.length * (slow || S.settings.slow ? 105 : 78), cum = []; let acc = 0;
          toks.forEach(x => { acc += x.w / tot * ms; cum.push(acc); });
          const step = () => { if (HL.id !== id) return; const el = Date.now() - t0; let k = cum.findIndex(c => c > el); if (k < 0) k = toks.length - 1; hlMark(k); HL.tm = setTimeout(step, 90); };
          step();
        }, 800);
      };
      u.onboundary = e => { if (HL.id !== id) return; gotB = true; clearTimeout(HL.tm); hlMark(at(e.charIndex)); };
      const fin = () => { if (HL.id === id) hlClear(); };
      u.onend = fin; u.onerror = fin;
    } else hlClear();
    C._u = u; // guarda a referência: no Safari/Chrome a fala some se o objeto for coletado antes de terminar
    u.volume = 1;
    const go = () => { if (HL.id !== id) return; try { if (speechSynthesis.paused) speechSynthesis.resume(); speechSynthesis.speak(u); } catch (_) { } };
    if (busy) setTimeout(go, 90); else go();
    S.c.plays++; if (S.c.plays % 5 === 0) { save(); EN.checkBadges(); }
  };
  C._hl = { prep: hlPrep, mark: hlMark, clear: hlClear };
  function targetsOne(btn) {
    const line = btn.closest('.line'); if (line) return [line.querySelector(':scope > span')];
    const li = btn.closest('.listen .li'); if (li) return [li.querySelector('.tx > span')];
    const td = btn.closest('td'); if (td && td.querySelector('b') && btn.closest('.tw')) return [td.querySelector('b')];
    return null;
  }
  function targetsAll(btn) {
    const rd = btn.closest('.rdg'); if (rd) return $$('.snt', rd);
    const ex = btn.closest('.exm'); if (ex) return $$('.line > span', ex);
    return null;
  }
  const safeSrc = s => /^(data:image\/(png|jpe?g|gif|webp);|https:\/\/|\.{0,2}\/?[\w\-\/.]+\.(png|jpe?g|gif|webp|svg)$)/i.test(s) ? s : '';
  const safeUrl = s => /^https?:\/\//i.test(s || '') ? s : '';

  /* ───────────── blocos ───────────── */
  const secId = (ctx, b) => 'sec-' + (ctx.s ? ctx.s.id : ctx.m.id) + '-' + (b.n || b.title.replace(/[^\w]+/g, '-').slice(0, 24));
  C.secId = secId;
  function tbl(head, rows, o) {
    o = o || {};
    return '<div class="tw"><table>' + (o.title ? `<caption>${md(o.title)}</caption>` : '') +
      (head ? '<tr>' + head.map(c => `<th>${md(c)}</th>`).join('') + '</tr>' : '') +
      rows.map(r => '<tr>' + r.map((c, i) => `<td class="${o.firstCol && i === 0 ? 'fc' : ''}">${md(c)}</td>`).join('') + '</tr>').join('') + '</table></div>';
  }
  function ptBox(id, en, pt) {
    const open = S.settings.showPT;
    return `<div class="box en"><b class="lb">EN</b>${md(en)}</div>` +
      (open ? '' : `<button class="ptbtn" data-act="pt" data-k="${esc(id)}">PT ▾ mostrar em português</button>`) +
      `<div class="box pt ptx${open ? ' on' : ''}" lang="pt-BR" ${open ? '' : 'hidden'}><b class="lb">PT</b>${md(pt)}</div>`;
  }
  /* botão de ouvir (🔊) sempre acompanhado do botão da tartaruga (🐢), que toca o mesmo texto mais devagar */
  const spk = (t, extra) => `<button class="spk" data-say="${esc(t)}" title="Ouvir" ${extra || ''}>🔊</button><button class="spk" data-say="${esc(t)}" data-slow="1" title="Ouvir devagar" aria-label="Ouvir devagar">🐢</button>`;
  C.blocksHTML = (blocks, ctx) => blocks.map(b => C.blockHTML(b, ctx)).join('');
  C.blockHTML = (b, ctx) => {
    switch (b.t) {
      case 'h': return `<h2 class="sec" id="${secId(ctx, b)}">${b.n ? `<span class="n">${esc(b.n)}</span>` : ''}<span>${md(b.title)}</span></h2>`;
      case 'p': return `<p class="txt">${md(b.s)}</p>`;
      case 'bullets': return `<ul class="bl">${b.items.map(i => `<li>${md(i)}</li>`).join('')}</ul>`;
      case 'enpt': return ptBox('enpt:' + (b.id || b.en.slice(0, 20)), b.en, b.pt);
      case 'table': return tbl(b.head, b.rows, b);
      case 'tip': return `<div class="tip"><div class="tt">💡 ${esc(b.title || 'PULO DO GATO')}</div><div>${md(b.s)}</div></div>`;
      case 'q': return `<div class="qa"><div class="q">${md(b.q)}</div><div>${md(b.a)}</div></div>`;
      case 'errors': return `<details class="errs" open><summary class="eh">${esc(b.title || 'ERROS COMUNS')}</summary>${b.items.map(([w, r]) => `<div class="er"><span class="x">✗</span> <span class="w">${esc(w)}</span><span class="ar">→</span><span class="ok">✓</span> <span class="r">${esc(r)}</span></div>`).join('')}</details>`;
      case 'decision': return `<div class="dec"><div class="dq">${md(b.q)}</div><div class="cols">` + [b.yes, b.no].map(c => `<div class="col"><h4>${esc(c.k)}</h4>${c.ex.map(([e, n]) => `<div>${esc(e)} <small>${esc(n || '')}</small></div>`).join('')}</div>`).join('') + '</div></div>';
      case 'callout': { const k = ['info', 'ok', 'warn', 'goal', 'err'].includes(b.kind) ? b.kind : 'info', ic = { info: 'ℹ️', ok: '✅', warn: '⚠️', goal: '🎯', err: '❌' }[k]; return `<div class="callout ${k}"><div class="ci">${esc(b.icone || ic)}</div><div>${b.titulo ? `<b class="ct">${md(b.titulo)}</b>` : ''}${md(b.s || '')}</div></div>`; }
      case 'cards': return `<div class="fcards">${b.items.map(i => { const c = col(i.cor); return `<div class="fcard" style="background:var(--p-${c});border-color:var(--c-${c})"><div class="fi">${esc(i.icone || '')}</div><b>${md(i.titulo || '')}</b><p>${md(i.texto || '')}</p></div>`; }).join('')}</div>`;
      case 'compare': return `<div class="cmp">${b.cols.map(c => `<div class="cc"><div class="ch" style="background:var(--c-${col(c.cor)})">${md(c.titulo)}</div><ul>${(c.itens || []).map(i => `<li>${md(i)}</li>`).join('')}</ul></div>`).join('')}</div>`;
      case 'timeline': return `<div class="tl">${b.passos.map(p => `<div class="st"><b>${md(p.titulo)}</b>${md(p.texto || '')}</div>`).join('')}</div>`;
      case 'image': { const src = b.svg ? 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(b.svg) : safeSrc(b.src || ''); return src ? `<figure class="fig"><img src="${esc(src)}" alt="${esc(b.alt || '')}" loading="lazy">${b.legenda ? `<figcaption>${esc(b.legenda)}</figcaption>` : ''}</figure>` : ''; }
      case 'legend': return `<div class="fcards"><div class="fcard" style="background:var(--p-amber)"><span class="m-y">Marca-texto amarelo</span><p>Termo-chave. É o que você precisa saber de cor.</p></div><div class="fcard" style="background:var(--p-blue)"><span class="m-b">Marca-texto azul</span><p>Estrutura gramatical ou fórmula.</p></div><div class="fcard" style="background:var(--p-green)"><span class="m-g">Marca-texto verde</span><p>Expressão pronta, para usar como está.</p></div><div class="fcard" style="background:var(--p-violet)"><span class="m-t">Texto azul</span><p>Regra ou afirmação importante.</p></div><div class="fcard" style="background:var(--p-coral)"><span class="m-r">Texto vermelho</span><p>Exceção, restrição ou erro a evitar.</p></div><div class="fcard" style="background:var(--p-teal)"><b>Caixa EN / PT</b><p>Leia o EN primeiro; abra o PT só se precisar.</p></div></div>`;
      case 'etapa': return `<section class="etapa e${b.n}" id="sec-${esc(ctx.s ? ctx.s.id : '')}-${esc(b.id || 'etapa-' + b.n)}"><span class="en-n">${esc(b.n)}</span><div class="en-t"><small>ETAPA ${esc(b.n)} · ${esc(b.min)} MIN</small><h2>${md(b.titulo)}</h2>${b.desc ? `<p>${md(b.desc)}</p>` : ''}</div></section>`;
      case 'roteiro': { const nd = b.rows.filter((_, i) => S.rot[b.id + '.' + i]).length; return `<details class="rot" open><summary><b>Roteiro da sessão</b><span class="rsum">${esc(b.titulo || '40 MIN')} · ${nd}/${b.rows.length} etapas</span></summary>${b.rows.map((r, i) => { const k = b.id + '.' + i, on = !!S.rot[k]; return `<div class="rr ${on ? 'done' : ''}"><input type="checkbox" data-act="rot" data-k="${esc(k)}" ${on ? 'checked' : ''} aria-label="Etapa feita"><span class="mn" style="background:var(--c-${COLORS[i % 7]})">${esc(r[0])} min</span><div class="rt"><b>${r[3] && ctx.s ? `<a href="#/a/${esc(ctx.s.id)}/${esc(r[3])}">${esc(r[1])}</a>` : esc(r[1])}</b><span>${md(r[2])}</span></div></div>`; }).join('')}</details>`; }
      case 'vocab': { const train = S.settings.train; return `<div class="vtool"><button class="btn sm ${train ? 'pri' : ''}" data-act="train">🎯 Modo treino: esconder o português</button><span class="small muted">toque na célula para revelar</span></div><div class="tw ${train ? 'train' : ''}"><table><tr><th>#</th><th>Inglês</th><th>Pronúncia</th><th>Português</th></tr>${b.items.map(([n, en, pr, pt]) => `<tr><td class="n">${n}</td><td><b>${esc(en)}</b> ${spk(en)}</td><td class="pr">${esc(pr)}</td><td class="ptc" data-act="reveal">${esc(pt)}</td></tr>`).join('')}</table></div>`; }
      case 'example': { const id = 'exm:' + (b.titulo || b.title); return `<div class="exm"><div class="eh">${esc(b.titulo || b.title)} <button class="spk" data-say-all="${esc(b.lines.map(l => l[1]).join(' '))}" title="Ouvir tudo">▶ ouvir tudo</button> <button class="spk" data-say-all="${esc(b.lines.map(l => l[1]).join(' '))}" data-slow="1" title="Ouvir tudo devagar">🐢 devagar</button></div>${b.lines.map(l => `<div class="line"><b>${esc(l[0])}:</b> <span>${esc(l[1])}</span> ${spk(l[1])}</div>`).join('')}<button class="ptbtn" data-act="ptline" data-k="${esc(id)}">PT ▾ mostrar tradução</button><div class="ptx" lang="pt-BR">${b.lines.map(l => `<div>${esc(l[2])}</div>`).join('')}</div></div>`; }
      case 'reading': { const id = 'rd:' + (b.titulo || b.title); return `<div class="rdg ${b.boxed ? 'boxed' : 'exm'}"><div class="eh">${esc(b.titulo || b.title)} <button class="spk" data-say-all="${esc(b.sents.map(s => s[0]).join(' '))}" title="Ouvir o texto">▶ ouvir texto</button> <button class="spk" data-say-all="${esc(b.sents.map(s => s[0]).join(' '))}" data-slow="1" title="Ouvir o texto devagar">🐢 devagar</button></div><div class="txt">${b.sents.map(s => `<span class="snt">${esc(s[0])}</span>`).join(' ')}</div><button class="ptbtn" data-act="ptline" data-k="${esc(id)}">PT ▾ mostrar tradução</button><div class="ptx" lang="pt-BR">${b.sents.map(s => esc(s[1])).join(' ')}</div>${b.glossario ? tbl(['Palavra', 'Tradução'], b.glossario) : ''}</div>`; }
      case 'listen': return `<div class="listen"><div class="lh">🎧 ${esc(b.titulo || 'Ouça e repita')}</div>${b.frases.map((f, i) => `<div class="li"><div class="tx"><span>${esc(f[0])}</span>${f[1] ? `<span class="tr" lang="pt-BR" hidden>${esc(f[1])}</span>` : ''}</div><button data-say="${esc(f[0])}" title="Ouvir">🔊</button><button data-say="${esc(f[0])}" data-slow="1" title="Ouvir devagar">🐢</button>${f[1] ? '<button data-act="trline" title="Ver tradução">👁</button>' : ''}</div>`).join('')}</div>`;
      case 'ex': return exHTML(b, ctx);
      case 'video': { const v = S.video[b.id] || {}, lic = (b.licoes || []).filter(l => l && (safeUrl(l.embed) || safeUrl(l.url))), u = safeUrl(b.url || (lic.length ? '' : C.course.curso && C.course.curso.videoUrl));
        /* "licoes": várias lições para escolher; cada uma abre o player (ou a página) da lição exata, nunca a lista geral */
        const licHTML = lic.length ? `<div class="vlics">${lic.map(l => `<details class="vlic"><summary>▶ ${esc(l.titulo)}</summary>${safeUrl(l.embed) ? `<div class="vframe"><button class="vplay" data-act="vplay" data-src="${esc(safeUrl(l.embed))}" data-title="${esc(plain(l.titulo))}"><span>▶</span>Assistir aqui no curso<small>${esc(plain(l.titulo))}</small></button></div>` : ''}${safeUrl(l.url) ? `<a class="btn sm" href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">↗ Abrir a página da lição</a>` : ''}</details>`).join('')}</div>` : '';
        return `<div class="vid"><b>🎬 ${esc(b.titulo)}</b>${b.passos ? `<ol>${b.passos.map(s => `<li>${md(s)}</li>`).join('')}</ol>` : ''}${licHTML}${safeUrl(b.embed) ? `<div class="vframe"><button class="vplay" data-act="vplay" data-src="${esc(safeUrl(b.embed))}" data-title="${esc(plain(b.titulo))}"><span>▶</span>Assistir aqui no curso<small>${esc(plain(b.titulo))}</small></button></div>` : ''}<div class="row">${u ? `<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${safeUrl(b.embed) ? '↗ Abrir a página do vídeo' : '▶ Abrir o vídeo'}</a>` : ''}<label class="small">Compreensão sem legenda (0–10): <input type="number" min="0" max="10" data-act="vscore" data-k="${esc(b.id)}" value="${v.score != null ? v.score : ''}"></label></div><label class="small muted">Frases que você ouviu e repetiu:</label><textarea rows="3" data-act="vsent" data-k="${esc(b.id)}" placeholder="1. …">${esc(v.sents || '')}</textarea>${aiBox('video', b.id)}</div>`; }
      case 'prod': return `<div class="box en"><b class="lb">TAREFA</b>${md(b.prompt)}</div><textarea data-act="prod" data-k="${esc(b.id)}" placeholder="1. …\n2. …\n3. …">${esc(S.prod[b.id] || '')}</textarea><div class="small muted">Salvo automaticamente. Vai no relatório; a correção é feita pelo Claude (botão abaixo).</div>${aiBox('prod', b.id)}`;
      case 'testintro': return `<div class="callout warn"><div class="ci">🧪</div><div><b class="ct">Sem consultar</b>Responda de memória. Se não souber, escreva <b>não sei</b>: é honesto e útil para a IA. O gabarito do mini-teste fica com a IA; aqui só guardamos as respostas para o relatório. (A tradução por seleção fica desligada.)<br><label style="display:inline-flex;gap:8px;margin-top:8px"><input type="checkbox" data-act="noconsult" data-k="${esc(ctx.m.id)}" ${S.notes['nc:' + ctx.m.id] ? 'checked' : ''}> Fiz sem consultar nada.</label></div></div>`;
      case 'srs': return EN.srs ? EN.srs.blockHTML(ctx) : '';
      case 'revref': return C.revrefHTML ? C.revrefHTML(ctx) : '';
      case 'report': return `<div class="callout goal"><div class="ci">📤</div><div><b class="ct">${esc(b.titulo || 'Enviar para a IA')}</b>${md(b.s || 'Suas respostas, produções, notas dos vídeos e o desempenho são reunidos automaticamente no relatório.')}<br><a class="btn pri sm" href="#/relatorio/${esc(ctx.m.id)}" style="margin-top:8px">Gerar relatório →</a></div></div>`;
    }
    return `<div class="callout warn"><div class="ci">❓</div><div>Bloco desconhecido: <code>${esc(b.t)}</code> (atualize o app ou o JSON).</div></div>`;
  };

  /* ───────────── exercícios ───────────── */
  const kindOf = it => it.opts ? 'choice' : it.q.includes('___') ? 'blank' : it.sub ? 'sub' : 'line';
  const CONTR = [["i'm", 'i am'], ["you're", 'you are'], ["he's", 'he is'], ["she's", 'she is'], ["it's", 'it is'], ["we're", 'we are'], ["they're", 'they are'], ["isn't", 'is not'], ["aren't", 'are not'], ["doesn't", 'does not'], ["don't", 'do not'], ["what's", 'what is'], ["where's", 'where is'], ["can't", 'can not'], ["won't", 'will not']];
  const canon = (s, strict) => { let t = strip(s); if (!strict) for (const [a, b] of CONTR) t = t.split(a).join(b); return t; };
  const match = (v, acc, strict) => { if (!v || !v.trim()) return false; const c = canon(v, strict); return [].concat(acc).some(a => canon(a, strict) === c); };
  function evalItem(it, vals) {
    const k = kindOf(it); let det;
    if (k === 'choice') det = [norm(vals[0] || '') === norm(it.a)];
    else if (k === 'blank' || k === 'sub') det = it.a.map((acc, i) => match(vals[i], acc, it.strict));
    else det = [match(vals[0], it.a, it.strict)];
    return { ok: det.every(Boolean), det };
  }
  function answerText(it) {
    const k = kindOf(it);
    if (k === 'choice') return it.a;
    if (k === 'blank') return it.a.map(x => [].concat(x)[0]).join(' / ');
    if (k === 'sub') return it.a.map((x, i) => `${it.sub[i]}: ${[].concat(x)[0]}`).join(' · ');
    return it.a[0];
  }
  C.answerText = answerText;

  /* ───────────── correção com o Claude: pedido pronto + devolutiva guardada no app ───────────── */
  const AI_RULES = ['Responda em português do Brasil; exemplos em inglês americano.',
    'Para cada frase ou resposta: diga se está certa; se não estiver, dê a versão correta, o PORQUÊ (a regra, em 1 ou 2 linhas) e o tipo do erro (ortografia, gramática, ordem das palavras, vocabulário ou “ouvi errado”).',
    'Se eu escrevi “não sei” ou deixei em branco, é uma resposta honesta: não critique, ensine.',
    'Seja breve: no máximo 3 pontos para eu treinar, sem despejar teoria. Termine com 2 frases novas para eu repetir em voz alta.',
    'Feche com um bloco chamado DEVOLUTIVA, de até 6 linhas (nota de 0 a 10, 2 acertos, 2 pontos a melhorar e o próximo passo), para eu colar de volta no app.'];
  function aiBox(kind, id) {
    const v = S.notes['ai:' + id] || '';
    return `<div class="aibox"><button type="button" class="btn sm" data-act="ai-ask" data-kind="${kind}" data-k="${esc(id)}">🤖 Pedir correção ao Claude</button><span class="small muted">monta o pedido pronto, com as suas respostas</span><details class="aid" ${v ? 'open' : ''}><summary class="small">📥 Devolutiva do Claude ${v ? '✔' : '(cole aqui depois)'}</summary><textarea rows="4" data-act="ainote" data-k="${esc(id)}" placeholder="Cole aqui o bloco DEVOLUTIVA que o Claude escreveu…">${esc(v)}</textarea></details></div>`;
  }
  C.aiBox = aiBox;
  function aiPrompt(kind, id) {
    const L = [], hd = (s, m) => `Módulo ${m.n != null ? m.n : '?'} · ${s.tipo === 'pratica' ? 'Prática' : 'Sessão'} ${s.n != null ? s.n : '?'} · ${plain(s.titulo)}`;
    const head = (what, s, m) => { L.push(`Olá, Claude! Sou brasileiro estudando inglês do zero (nível A1 → A2, inglês americano) em um curso próprio. Corrija ${what}.`, '', 'ATIVIDADE', hd(s, m)); };
    if (kind === 'video') {
      const { b, s, m } = C.VIDEOS[id], v = S.video[id] || {}, u = safeUrl(b.url || (C.course.curso && C.course.curso.videoUrl));
      head('a minha atividade de INPUT (vídeo)', s, m);
      L.push(`Vídeo: “${plain(b.titulo)}”${u ? ' · ' + u : ''}`, `Nota que dei à minha compreensão SEM legenda (0 a 10): ${v.score != null && v.score !== '' ? v.score : '(não dei)'}`);
      if (b.passos && b.passos.length) { L.push('', 'O que a atividade pedia:'); b.passos.forEach((p, i) => L.push(`${i + 1}. ${plain(p)}`)); }
      L.push('', 'MINHAS FRASES (do jeito que escrevi, sem consertar):', (v.sents || '').trim() || '(não escrevi nada)', '', 'TRANSCRIÇÃO OFICIAL DA LIÇÃO (colei aqui para você comparar; se estiver vazia, NÃO invente: peça que eu cole):', '[cole a transcrição aqui]');
      L.push('', 'COMO CORRIGIR'); AI_RULES.forEach(r => L.push('• ' + r));
      L.push('• Se a transcrição estiver colada, compare frase a frase com o que anotei e mostre o que ouvi diferente (palavras que soam parecidas, contrações como I’m / I am, sons finais). Se eu anotei só frases soltas, corrija o inglês delas.');
    } else if (kind === 'prod') {
      const { b, s, m } = C.PRODS[id];
      head('a minha PRODUÇÃO escrita', s, m);
      L.push('', 'TAREFA PEDIDA:', plain(b.prompt), '', 'MEU TEXTO (do jeito que escrevi, sem consertar):', (S.prod[id] || '').trim() || '(não escrevi nada)', '', 'COMO CORRIGIR'); AI_RULES.forEach(r => L.push('• ' + r));
      L.push('• Mostre a versão corrigida de cada frase logo abaixo da minha, destacando só o que mudou.');
    } else {
      const { s, m } = C.SES[id]; head('os meus exercícios desta sessão', s, m);
      const items = [];
      (s.blocos || []).filter(b => b.t === 'ex' && !b.teste).forEach(b => b.items.forEach((it, i) => { const e = S.ex[iid(b, i)]; if (e && e.st && e.st !== 'retry' && (e.st !== 'ok' || e.tries > 1)) items.push(`• [${{ wrong: 'errei', idk: 'não sei', ok: 'acertei na 2ª tentativa', self: 'marquei como certo' }[e.st]}] ${plain(b.titulo || '')} #${i + 1}: “${plain(it.q)}” → respondi: “${(e.v || []).join(' | ') || '—'}” · gabarito do app: “${answerText(it)}”`); }));
      L.push('', 'ONDE ERREI OU HESITEI NOS EXERCÍCIOS (o app já corrigiu; quero entender o porquê):', items.length ? items.join('\n') : '(nenhum erro registrado)');
      const pr = (s.blocos || []).filter(b => b.t === 'prod').map(b => (S.prod[b.id] || '').trim()).filter(Boolean), vd = (s.blocos || []).filter(b => b.t === 'video').map(b => { const v = S.video[b.id] || {}; return `“${plain(b.titulo)}” · nota ${v.score != null && v.score !== '' ? v.score : '—'} · frases: ${(v.sents || '').trim().replace(/\n/g, ' / ') || '—'}`; });
      L.push('', 'MINHA PRODUÇÃO:', pr.join('\n') || '(não escrevi)', '', 'MEU VÍDEO:', vd.join('\n') || '(sem anotação)', '', 'COMO CORRIGIR'); AI_RULES.forEach(r => L.push('• ' + r));
      L.push('• Para os erros do app, explique a regra de forma diferente da que o curso usou (outro exemplo, outra analogia).');
    }
    return L.join('\n');
  }
  C.aiPrompt = aiPrompt;
  async function aiAsk(kind, id) {
    const text = aiPrompt(kind, id); let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) { }
    await C.ask(`<h3>🤖 Pedido para o Claude</h3><p class="small muted">${ok ? '<b>Copiado ✔.</b> Abra a conversa com o Claude, cole (Ctrl+V), complete a transcrição se houver e envie.' : 'Não consegui copiar sozinho: selecione o texto abaixo, copie (Ctrl+C) e cole na conversa com o Claude.'} Depois cole o bloco <b>DEVOLUTIVA</b> dele na caixa “Devolutiva do Claude” deste bloco.</p><textarea id="aiTxt" readonly rows="14" style="width:100%;font:12.5px ui-monospace,Consolas,monospace">${esc(text)}</textarea>`, [{ label: 'Fechar' }, { label: 'Copiar de novo', cls: 'pri' }]).then(r => { if (r === 1) { try { navigator.clipboard.writeText(text); EN.toast('Copiado. ✔'); } catch (e) { EN.toast('Selecione o texto e use Ctrl+C.'); } } });
  }
  function refLink(ref, ctx) {
    if (!ref) return '';
    const [a, b] = ref.includes('/') ? ref.split('/') : [ctx && ctx.s ? ctx.s.id : '', ref];
    return a ? ` <a href="#/a/${esc(a)}/${esc(b)}">Rever a regra (${esc(b)})</a>` : '';
  }
  /* itens podem ser feitos na aula (id normal) ou no caderno de erros (id "rv:<id>", estado separado em S.rv) */
  const isRv = id => id.startsWith('rv:');
  const baseId = id => isRv(id) ? id.slice(3) : id;
  const itemOf = id => C.ITEMS[baseId(id)];
  const stOf = id => isRv(id) ? S.rv[id.slice(3)] : S.ex[id];
  const stSet = (id, v) => { if (isRv(id)) S.rv[id.slice(3)] = v; else S.ex[id] = v; };
  const stDel = id => { if (isRv(id)) delete S.rv[id.slice(3)]; else delete S.ex[id]; };
  C.rvItemHTML = id => { const x = C.ITEMS[id]; return x ? itemHTML(x.b, x.it, x.i, true) : ''; };
  function fbHTML(id) {
    const { b, it, s, m } = itemOf(id), st = stOf(id); if (b.teste || !st || !st.st) return '';
    const ans = esc(answerText(it)), why = it.why ? md(it.why) : '', rl = refLink(it.ref || b.ref, { s, m });
    const redo = '<div class="act"><button class="btn sm" data-act="redo">↻ Refazer</button></div>';
    const self = (kindOf(it) === 'line' || kindOf(it) === 'sub') ? '<div class="act"><button class="btn sm" data-act="self">Minha resposta também está certa</button></div>' : '';
    switch (st.st) {
      case 'ok': return `<div class="fb good">✔ Correto${st.tries > 1 ? ' (na 2ª tentativa)' : ''}. ${why}${isRv(id) ? '<br><b>Corrigido!</b> Este erro sai do caderno.' : ''}</div>`;
      case 'retry': return `<div class="fb warn">✖ Ainda não. Tente mais uma vez.${rl}</div>`;
      case 'wrong': return `<div class="fb bad">✖ Resposta: <b>${ans}</b><br>${why}${rl}</div>` + self + redo;
      case 'idk': return `<div class="fb idk">“Não sei” é uma resposta honesta. Resposta: <b>${ans}</b><br>${why}${rl}</div>` + redo;
      case 'self': return `<div class="fb good">✔ Você marcou como correta. Modelo: <b>${ans}</b></div>` + redo;
    }
    return '';
  }
  function itemHTML(b, it, i, rv) {
    const id = (rv ? 'rv:' : '') + iid(b, i), st = stOf(id) || {}, v = st.v || [], k = kindOf(it), det = st.det || [];
    const cls = n => (det.length && st.st) ? (det[n] ? 'good' : 'bad') : '';
    const at = 'autocomplete="off" autocapitalize="off" spellcheck="false"';
    const say = it.say ? `<div class="act" style="margin:0 0 6px"><button class="btn sm pri" data-say="${esc(it.say)}">🔊 Ouvir</button><button class="btn sm" data-say="${esc(it.say)}" data-slow="1">🐢 Devagar</button></div>` : '';
    let body = '';
    if (k === 'blank') {
      const parts = it.q.split('___'), wide = !b.teste && it.a.some(x => [].concat(x).some(y => /\s/.test(y)));
      body = '<div class="q">' + parts.map((p, n) => esc(p) + (n < parts.length - 1 ? `<input class="blank ${wide ? 'w' : ''} ${cls(n)}" data-k="${n}" ${at} value="${esc(v[n] || '')}">` : '')).join('') + '</div>';
    } else if (k === 'choice') {
      body = `<div class="q">${esc(it.q)}</div><div class="chips">` + it.opts.map(o => `<label class="chipc"><input type="radio" name="r${id}" value="${esc(o)}" ${v[0] === o ? 'checked' : ''}>${esc(o)}</label>`).join('') + '</div>';
    } else if (k === 'sub') {
      body = `<div class="q">${esc(it.q)}</div>` + it.sub.map((l, n) => `<label class="sub"><span>${esc(l)}</span><input class="line ${cls(n)}" data-k="${n}" ${at} value="${esc(v[n] || '')}"></label>`).join('');
    } else {
      body = `${say}<div class="q">${esc(it.q)}</div><input class="line ${cls(0)}" data-k="0" placeholder="${b.teste ? 'Sua resposta (ou: não sei)' : 'Sua resposta'}" ${at} value="${esc(v[0] || '')}">`;
    }
    if (k !== 'line' && it.say) body = say + body;
    const fin = st.st && st.st !== 'retry';
    const acts = b.teste ? '' : ((fin || st.st === 'ok') ? '' : '<div class="act"><button class="btn pri sm" data-act="check">Verificar</button><button class="btn sm" data-act="idk">Não sei</button></div>');
    return `<div class="it" data-id="${esc(id)}"><span class="num">${i + 1}</span><div>${body}${acts}<div class="fbw">${fbHTML(id)}</div></div></div>`;
  }
  const scoreText = b => {
    if (b.teste) { const n = b.items.filter((_, i) => ((S.ex[iid(b, i)] || {}).v || []).some(x => x && x.trim())).length; return `${n}/${b.items.length} respondidas`; }
    const ok = b.items.filter((_, i) => ['ok', 'self'].includes((S.ex[iid(b, i)] || {}).st)).length; return `${ok}/${b.items.length} certas`;
  };
  function exHTML(b) {
    return `<section class="ex ${b.teste ? 'test no-lookup' : ''}" data-bid="${esc(b.id)}"><h3>✎ ${esc(b.titulo || b.title)}<span class="sc">${scoreText(b)}</span></h3>${b.intro ? `<p class="small muted">${md(b.intro)}</p>` : ''}${b.items.map((it, i) => itemHTML(b, it, i)).join('')}` +
      (b.teste ? '' : '<div class="exf"><button class="btn pri sm" data-act="checkall">Verificar todas</button><button class="btn sm" data-act="redoall">↻ Refazer o exercício</button></div>') + '</section>';
  }
  function refreshItem(id) {
    const { b, it, i } = itemOf(id), el = $(`.it[data-id="${CSS.escape(id)}"]`); if (!el) return;
    const t = document.createElement('div'); t.innerHTML = itemHTML(b, it, i, isRv(id)); el.replaceWith(t.firstElementChild);
    const sc = $(`.ex[data-bid="${CSS.escape(b.id)}"] .sc`); if (sc && !isRv(id)) sc.textContent = scoreText(b);
    if (EN.onUpdate) EN.onUpdate('exercise');
  }
  const readVals = el => { const ch = $('input[type=radio]:checked', el); if (ch) return [ch.value]; return $$('input.blank,input.line', el).sort((a, b) => +a.dataset.k - +b.dataset.k).map(x => x.value); };
  function checkItem(id, quiet) {
    const { it } = itemOf(id), el = $(`.it[data-id="${CSS.escape(id)}"]`), vals = readVals(el), rv = isRv(id);
    if (vals.every(v => !String(v).trim())) { if (!quiet) EN.toast('Escreva uma resposta (ou use “Não sei”).'); return false; }
    const st = stOf(id) || { tries: 0 }; if (['ok', 'wrong', 'idk', 'self'].includes(st.st)) return false;
    st.v = vals; st.tries = (st.tries || 0) + 1; const r = evalItem(it, vals); st.det = r.det; st.at = new Date().toISOString();
    st.st = r.ok ? 'ok' : (st.tries >= 2 ? 'wrong' : 'retry'); stSet(id, st);
    let xp = 0;
    if (st.st === 'ok' && !st.xp) {
      if (rv) xp = st.xp = 5;
      else { xp = st.xp = st.tries === 1 ? 10 : 5; S.c.correct++; if (st.tries === 1) S.c.firstTry++; }
    }
    if (!rv && st.st === 'wrong') delete S.rv[id];
    save(); refreshItem(id); if (xp) EN.gain(xp);
    return true;
  }
  function setItem(id, status) {
    const rv = isRv(id), st = stOf(id) || { tries: 0 }, el = $(`.it[data-id="${CSS.escape(id)}"]`); if (el) st.v = readVals(el);
    st.st = status; st.at = new Date().toISOString(); stSet(id, st); let xp = 0;
    if (!rv && status === 'idk' && !st.xp) { xp = st.xp = 2; S.c.idk++; }
    if (!rv && status === 'self' && !st.xp) { xp = st.xp = 5; S.c.correct++; }
    if (!rv && status === 'idk') delete S.rv[id];
    save(); refreshItem(id); if (xp) EN.gain(xp);
  }
  /* erros ainda por corrigir (o que foi refeito certo no caderno sai da lista) */
  C.errorList = () => Object.keys(C.ITEMS).filter(id => { const st = S.ex[id], fx = S.rv[id]; return st && !(fx && fx.st === 'ok') && !C.ITEMS[id].b.teste && (st.st === 'wrong' || st.st === 'idk' || ((st.st === 'ok' || st.st === 'self') && st.tries > 1)); });
  C.fixedList = () => Object.keys(S.rv).filter(id => S.rv[id] && S.rv[id].st === 'ok' && C.ITEMS[id]);

  /* ───────────── eventos do conteúdo (#view) ───────────── */
  const view = $('#view');
  view.addEventListener('click', e => {
    const sayAll = e.target.closest('[data-say-all]'); if (sayAll) { C.speak(sayAll.dataset.sayAll, !!sayAll.dataset.slow, targetsAll(sayAll)); return; }
    const say = e.target.closest('[data-say]'); if (say) { C.speak(say.dataset.say, !!say.dataset.slow, targetsOne(say)); return; }
    const a = e.target.closest('[data-act]'); if (!a) return; const act = a.dataset.act;
    if (act === 'pt') { const box = a.nextElementSibling; box.hidden = false; box.classList.add('on'); S.ptOpens[a.dataset.k] = (S.ptOpens[a.dataset.k] || 0) + 1; a.remove(); save(); }
    else if (act === 'ptline') { const box = a.nextElementSibling, on = box.classList.toggle('on'); a.textContent = on ? 'PT ▴ esconder tradução' : 'PT ▾ mostrar tradução'; if (on) { S.ptOpens[a.dataset.k] = (S.ptOpens[a.dataset.k] || 0) + 1; save(); } }
    else if (act === 'ai-ask') aiAsk(a.dataset.kind, a.dataset.k);
    else if (act === 'trline') { const tr = a.closest('.li').querySelector('.tr'); tr.hidden = !tr.hidden; }
    else if (act === 'train') { S.settings.train = !S.settings.train; save(); EN.rerender(); }
    else if (act === 'vplay') { /* vídeo dentro da página: o player só é carregado ao clicar (nada é baixado antes) */
      const box = a.closest('.vframe'), src = safeUrl(a.dataset.src); if (!box || !src) return;
      const f = document.createElement('iframe'); f.src = src; f.title = a.dataset.title || 'Vídeo'; f.setAttribute('allow', 'fullscreen; autoplay'); f.setAttribute('referrerpolicy', 'no-referrer');
      a.replaceWith(f);
    }
    else if (act === 'reveal') a.classList.toggle('shown');
    else if (act === 'check') checkItem(a.closest('.it').dataset.id);
    else if (act === 'idk') setItem(a.closest('.it').dataset.id, 'idk');
    else if (act === 'self') setItem(a.closest('.it').dataset.id, 'self');
    else if (act === 'redo') { const id = a.closest('.it').dataset.id; stDel(id); save(); refreshItem(id); }
    else if (act === 'checkall') { const b = C.BLOCKS[a.closest('.ex').dataset.bid]; let n = 0; b.items.forEach((_, i) => { if (checkItem(iid(b, i), true)) n++; }); if (!n) EN.toast('Nada novo para verificar.'); }
    else if (act === 'redoall') { const b = C.BLOCKS[a.closest('.ex').dataset.bid]; b.items.forEach((_, i) => delete S.ex[iid(b, i)]); save(); a.closest('.ex').outerHTML = exHTML(b); if (EN.onUpdate) EN.onUpdate('exercise'); }
  });
  view.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('.it input[type=text],.it input:not([type])')) { e.preventDefault(); const it = e.target.closest('.it'); if (!itemOf(it.dataset.id).b.teste) checkItem(it.dataset.id); } });
  view.addEventListener('change', e => {
    const t = e.target, a = t.dataset.act;
    if (t.matches('.it input[type=radio]')) { const it = t.closest('.it'); if (!itemOf(it.dataset.id).b.teste) checkItem(it.dataset.id, true); return; }
    if (a === 'rot') { S.rot[t.dataset.k] = t.checked; t.closest('.rr').classList.toggle('done', t.checked); save(); if (t.checked) EN.gainOnce('rot-' + t.dataset.k, 5); }
    if (a === 'vscore') { const k = t.dataset.k; S.video[k] = Object.assign(S.video[k] || {}, { score: t.value === '' ? '' : Math.max(0, Math.min(10, +t.value)) }); save(); if (t.value !== '') EN.gainOnce('vid-' + k, 5); }
    if (a === 'noconsult') { S.notes['nc:' + t.dataset.k] = t.checked; save(); }
  });
  view.addEventListener('input', e => {
    const t = e.target, a = t.dataset.act;
    if (a === 'vsent') { const k = t.dataset.k; S.video[k] = Object.assign(S.video[k] || {}, { sents: t.value }); save(); }
    if (a === 'ainote') { const k = t.dataset.k; S.notes['ai:' + k] = t.value; save(); if (t.value.trim().length >= 20) EN.gainOnce('ai-' + k, 5); const sm = t.closest('details').querySelector('summary'); sm.textContent = '📥 Devolutiva do Claude ' + (t.value.trim() ? '✔' : '(cole aqui depois)'); }
    if (a === 'prod') { S.prod[t.dataset.k] = t.value; save(); if (t.value.split('\n').filter(x => x.trim()).length >= 3) EN.gainOnce('prod-' + t.dataset.k, 15); }
    const it = t.closest && t.closest('.it');
    if (it && t.matches('input.blank,input.line')) {
      const id = it.dataset.id, st = stOf(id) || (stSet(id, { tries: 0 }), stOf(id)); st.v = readVals(it);
      const bb = itemOf(id).b;
      if (bb.teste) { const sc = $(`.ex[data-bid="${CSS.escape(bb.id)}"] .sc`); if (sc) sc.textContent = scoreText(bb); }
      save();
    }
  });

  /* ───────────── seleção, tradução em camadas e pop ───────────── */
  const pop = $('#pop'); let cur = null, pinned = false, selT;
  function selInfo() {
    const s = getSelection(); if (!s || !s.rangeCount || s.isCollapsed) return null;
    const text = s.toString().replace(/[\u{1F300}-\u{1FAFF}☀-➿]/gu, '').replace(/\s+/g, ' ').trim();
    if (!text || text.length > 300 || !/[A-Za-z]/.test(text)) return null;
    const r = s.getRangeAt(0), an = r.commonAncestorContainer, el = an.nodeType === 1 ? an : an.parentElement;
    if (!el || !el.closest('#view') || el.closest('.no-lookup,.ptx,.ptc,button,textarea,input,caption,.rot,.hero,.lrow,.mcard,.cal')) return null;
    return { text, rect: r.getBoundingClientRect(), el };
  }
  function ctxOf(el, text) {
    if (el.closest('.ex,.qa,.tip,.errs,.vid,.legend,.callout,.fcard')) return { ctx: '', ctxPt: '' };
    const blk = el.closest('p,li,td,.line,.q,.er,.txt,.box,.dec .col div') || el;
    const t = blk.textContent.replace(/[\u{1F300}-\u{1FAFF}]/gu, '').replace(/\s+/g, ' ').trim();
    const sents = (t.match(/[^.!?]+[.!?]*/g) || [t]).map(x => x.trim().replace(/^[A-Z]:\s*/, '')), k = norm(text), hit = sents.find(x => norm(x).includes(k));
    if (!hit || key(hit) === key(text) || hit.length > 220) return { ctx: '', ctxPt: '' };
    const e = C.LEX.get(key(hit)); return { ctx: hit, ctxPt: e ? e.pt : '' };
  }
  function lookup(text) {
    const k = key(text), multi = /\s/.test(text.trim()), full = C.LEX.get(k) || null; let part = null;
    if (!full && multi) part = C.LEXLIST.find(e => (' ' + e.k + ' ').includes(' ' + k + ' ')) || null;
    const seen = new Set(), hints = [];
    (text.match(/[A-Za-z]+(?:['’][A-Za-z]+)*/g) || []).forEach(w => { const l = norm(w); if (seen.has(l)) return; seen.add(l); const g = gl(w); if (g) hints.push({ w, pt: g }); });
    return { full, part, hints, multi };
  }
  /* pronúncia escrita de uma palavra: do vocabulário do curso, de variações simples (plural, -ing, -ed) ou dos seus cartões */
  function pronOf(text) {
    const k = key(text), forms = [k, k.replace(/ies$/, 'y'), k.replace(/es$/, ''), k.replace(/s$/, ''), k.replace(/ing$/, ''), k.replace(/ed$/, '')];
    for (const f of forms) { const e = C.LEX.get(f); if (e && e.pron) return e.pron; }
    for (const f of forms) if (C.PRON.has(f)) return C.PRON.get(f);
    const b = (S.bank || []).find(x => x.pron && forms.includes(key(x.front || ''))); return b ? b.pron : '';
  }
  /* conteúdo do bloco de tradução: palavra única = tradução + pronúncia; trecho = dicas palavra a palavra (a frase inteira continua sob demanda) */
  function transHTML(text) {
    const r = lookup(text); let h = '';
    if (!r.multi) {
      const g = r.full ? r.full.pt : gl(text), pr = (r.full && r.full.pron) || pronOf(text);
      h = g ? `<div><b>${esc(text)}</b> = ${esc(g)}</div>${pr ? `<div class="pr">${esc(pr)}</div>` : ''}` : `<div class="none">Sem tradução embutida para “${esc(text)}”.${pronOf(text) ? ` Pronúncia: <span class="pr">${esc(pronOf(text))}</span>.` : ''} Pergunte à IA ou use ➕ Cartão e escreva o seu palpite.</div>`;
    } else {
      h = r.hints.length ? '<div>' + r.hints.slice(0, 14).map(x => `<span class="chip2"><b>${esc(x.w)}</b> ${esc(x.pt)}</span>`).join('') + '</div>' : '<div class="none">Sem dicas de palavras para este trecho.</div>';
      const t = r.full || r.part;
      h += t ? `<button class="btn sm" style="margin-top:6px" data-p="full">👁 ${r.full ? 'Mostrar a tradução' : 'Ver a frase completa'}</button><div class="full" hidden>${r.part && !r.full ? `<div><i>${esc(t.en)}</i></div>` : ''}<div>${esc(t.pt)}</div></div>` : '<div class="none" style="margin-top:4px">Sem tradução completa embutida. Tente com as dicas e, se precisar, pergunte à IA.</div>';
    }
    return h;
  }
  function showPopAt(info, x, y) {
    cur = info; pinned = false; $('.pout', pop).innerHTML = ''; pop.hidden = false;
    /* palavra única: a janela já abre com a tradução e a pronúncia (o botão 🔍 só serve para trechos) */
    const single = !/\s/.test(String(info.text || '').trim()), trb = $('[data-p="tr"]', pop);
    if (trb) trb.style.display = single ? 'none' : '';
    if (single) $('.pout', pop).innerHTML = transHTML(info.text);
    const w = pop.offsetWidth, h = pop.offsetHeight; let top = y;
    if (top + h > innerHeight - 8) top = Math.max(8, (info.rect ? info.rect.top : y) - h - 10);
    pop.style.left = Math.max(8, Math.min(x, innerWidth - w - 8)) + 'px'; pop.style.top = top + 'px';
  }
  const hidePop = () => { pop.hidden = true; cur = null; pinned = false; };
  C.hidePop = hidePop;
  C.showPopFor = (text, rect) => { if (!/[A-Za-z]/.test(text)) return; showPopAt({ text, rect, ctx: '', ctxPt: '' }, rect.left, rect.bottom + 8); pinned = true; };
  function onSel() {
    if (pinned) return; const i = selInfo(); if (!i) { if (!pop.hidden) hidePop(); return; }
    const c = ctxOf(i.el, i.text); i.ctx = c.ctx; i.ctxPt = c.ctxPt; showPopAt(i, i.rect.left, i.rect.bottom + 10);
  }
  document.addEventListener('selectionchange', () => { clearTimeout(selT); selT = setTimeout(onSel, 320); });
  document.addEventListener('contextmenu', e => {
    if (!matchMedia('(pointer:fine)').matches) return; const i = selInfo(); if (!i) return;
    e.preventDefault(); const c = ctxOf(i.el, i.text); i.ctx = c.ctx; i.ctxPt = c.ctxPt; showPopAt(i, e.clientX, e.clientY + 6);
  });
  pop.addEventListener('pointerdown', () => { pinned = true; });
  document.addEventListener('pointerdown', e => { if (!pop.hidden && !pop.contains(e.target)) { pinned = false; hidePop(); } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hidePop(); });
  pop.addEventListener('click', e => {
    const bt = e.target.closest('button[data-p]'); if (!bt || !cur) return; const p = bt.dataset.p, out = $('.pout', pop);
    if (p === 'say') C.speak(cur.text);
    if (p === 'slow') C.speak(cur.text, true);
    if (p === 'tr') {
      out.innerHTML = transHTML(cur.text);
      const rr = pop.getBoundingClientRect(); if (rr.bottom > innerHeight - 8) pop.style.top = Math.max(8, innerHeight - 8 - rr.height) + 'px';
    }
    if (p === 'full') { const f = $('.full', pop); if (f) { f.hidden = false; bt.hidden = true; } }
    if (p === 'anki') addFromSel();
  });
  /* ➕ Cartão: abre o formulário (baralho, frente, tradução e exemplo); a palavra ou o trecho selecionado já vem preenchido */
  async function addFromSel() {
    const text = cur.text, r = lookup(text), back = (r.full ? r.full.pt : (!r.multi ? gl(text) || '' : '')) || '';
    const ctx = cur.ctx, ctxPt = cur.ctxPt, pron = r.full ? r.full.pron || '' : '';
    hidePop(); try { getSelection().removeAllRanges(); } catch (_) { }
    await EN.srs.addCard({ front: text, back, ex: ctx, exPt: ctxPt, pron, hints: r.multi || !back ? r.hints : [] });
  }
  C.key = key; C.deckHit = deckHit; C.lookup = lookup;
})();
