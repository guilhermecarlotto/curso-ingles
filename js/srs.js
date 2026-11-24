/* Cartões (repetição espaçada) embutidos no curso, com baralhos e gerenciador de cartões no estilo do Anki.
   Não precisa do Anki nem de nenhum outro programa.
   Cartões: (1) vocabulário das sessões (somente leitura, vem do material) e (2) cartões do aluno, guardados em EN.S.bank
   (cada um com baralho, frente, tradução, exemplo). Estado de estudo: EN.S.srs.cards; baralhos: EN.S.srs.decks; suspensos: EN.S.srs.susp. */
(function () {
  'use strict';
  const EN = window.EN, C = EN.C, save = EN.save, esc = C.esc;
  const $ = (s, r) => (r || document).querySelector(s);
  const today = () => EN.dkey();
  const set = () => EN.S.settings;
  const cards = () => EN.S.srs.cards;
  const susp = () => EN.S.srs.susp;
  const stat = () => { const k = today(), st = EN.S.srs.stats; return st[k] || (st[k] = { r: 0, n: 0 }); };
  const kk = s => (C.key ? C.key(s) : String(s).toLowerCase().trim());

  /* ── baralhos do aluno ── */
  const decks = () => { const d = EN.S.srs.decks; if (!d.some(x => x.id === 'sel')) d.unshift({ id: 'sel', name: 'Selecionadas' }); return d; };
  const deckName = id => { const d = decks().find(x => x.id === id); return d ? d.name : 'Selecionadas'; };
  const bdeck = b => (b.deck && decks().some(d => d.id === b.deck) ? b.deck : 'sel');
  const bankReady = () => EN.S.bank.filter(b => b.back && b.back.trim());
  const userCards = deck => bankReady().filter(b => !deck || bdeck(b) === deck);
  const bankOf = id => EN.S.bank.find(x => 'b:' + x.k === id);
  const nowIso = () => new Date().toISOString();
  /* exclui um cartão do aluno e deixa lápides (para a exclusão valer também em outros aparelhos) */
  const dropCard = b => { const id = 'b:' + b.k; EN.S.bank.splice(EN.S.bank.indexOf(b), 1); delete EN.S.srs.cards[id]; delete EN.S.srs.susp[id]; EN.tomb(id); EN.tomb('s:' + id); };
  const suspend = id => { EN.S.srs.susp[id] = nowIso(); };
  const unsuspend = id => { delete EN.S.srs.susp[id]; EN.tomb('u:' + id); };
  const deckOfId = id => { const b = bankOf(id); return b ? bdeck(b) : null; };

  /* ── índice de cartões: vocabulário das sessões + cartões do aluno ── */
  let IDX = null, IDXN = -1;
  function index() {
    if (IDX && IDXN === C.ORDER.length) return IDX;
    IDX = {}; IDXN = C.ORDER.length;
    C.ORDER.forEach(sid => (C.SES[sid].s.blocos || []).forEach(b => {
      if (b.t === 'vocab') b.items.forEach(([n, en, pr, pt]) => { IDX[sid + '#' + n] = { id: sid + '#' + n, sid, n, en: C.plain(en), pt: C.plain(pt), pron: pr || '' }; });
    }));
    return IDX;
  }
  function info(id) {
    if (id.indexOf('b:') === 0) { const b = bankOf(id); return b && b.back && b.back.trim() ? { id, bank: true, en: b.front, pt: b.back, pron: b.pron || '', ctx: b.ctx || '', ctxPt: b.ctxPt || '', deck: bdeck(b) } : null; }
    return index()[id] || null;
  }
  const sessionDeck = sid => Object.values(index()).filter(c => c.sid === sid);
  const hasDeck = sid => sessionDeck(sid).length > 0;
  const live = id => !susp()[id] && !!info(id);

  /* sessão atual = a primeira ainda não concluída (com cartões) */
  function currentSid() {
    const S = EN.S;
    /* sessão de prática não tem cartões novos, mas conta como "atual": assim os cartões da próxima guiada só entram na hora certa */
    const prat = id => C.SES[id].s.tipo === 'pratica';
    return C.ORDER.find(id => (hasDeck(id) || prat(id)) && !S.done[id]) || C.ORDER.filter(hasDeck).pop() || null;
  }
  const dueIds = deck => Object.keys(cards()).filter(id => cards()[id].due <= today() && live(id) && (!deck || deckOfId(id) === deck)).sort((a, b) => cards()[a].due < cards()[b].due ? -1 : 1);
  const newSession = sid => (sid ? sessionDeck(sid).map(c => c.id).filter(id => !cards()[id] && !susp()[id]) : []);
  function newBank(deck) {
    const t = today(), taken = Object.keys(cards()).filter(id => id.indexOf('b:') === 0 && cards()[id].f === t && (!deck || deckOfId(id) === deck)).length;
    return userCards(deck).map(b => 'b:' + b.k).filter(id => !cards()[id] && !susp()[id]).slice(0, Math.max(0, (+set().srsNew || 10) - taken));
  }
  /* fila: scope = null (revisões de tudo + novos da sessão atual + novos dos cartões do aluno), id de sessão, ou "deck:<id>" */
  function queue(scope) {
    if (scope && scope.indexOf('deck:') === 0) {
      const dk = scope.slice(5), list = dueIds(dk).slice(0, 200).map(id => ({ id, isNew: false }));
      newBank(dk).forEach(id => list.push({ id, isNew: true })); return list;
    }
    const sc = scope || currentSid();
    const list = dueIds().slice(0, 200).map(id => ({ id, isNew: false }));
    newSession(sc).concat(newBank()).forEach(id => list.push({ id, isNew: true }));
    return list;
  }
  const counts = scope => { const q = queue(scope); return { due: q.filter(x => !x.isNew).length, nw: q.filter(x => x.isNew).length }; };
  const userCount = () => EN.S.bank.length;
  function badge() {
    const bd = $('#bankBadge'); if (!bd) return;
    let n = 0; try { const q = counts(null); n = q.due + q.nw; } catch (_) { }
    bd.textContent = n; bd.dataset.n = n;
  }

  /* ── agendamento ── */
  function sched(c, r) {
    const n = Object.assign({ i: 0, e: 2.5, r: 0, l: 0, f: today() }, c), learning = !(n.i > 0);
    n.r = (n.r || 0) + 1;
    if (r === 0) { if (!learning) { n.l = (n.l || 0) + 1; n.e = Math.max(1.3, n.e - 0.2); } n.i = 0; n.due = today(); return n; }
    if (learning) n.i = r === 3 ? 3 : 1;
    else if (r === 1) { n.i = Math.max(n.i + 1, Math.round(n.i * 1.2)); n.e = Math.max(1.3, n.e - 0.15); }
    else if (r === 2) n.i = Math.max(n.i + 1, Math.round(n.i * n.e));
    else { n.i = Math.max(n.i + 2, Math.round(n.i * n.e * 1.3)); n.e = n.e + 0.15; }
    n.i = Math.min(365, n.i); n.due = EN.addDays(today(), n.i);
    return n;
  }
  const lab = d => (d <= 0 ? '< 10 min' : d === 1 ? '1 dia' : d < 30 ? d + ' dias' : d < 365 ? Math.round(d / 30) + ' mes.' : '1 ano');
  const preview = (id, r) => { const c = cards()[id]; return lab(sched(c || {}, r).i); };

  /* ── caixas de diálogo (resolvem no clique, sem depender do evento "close") ── */
  function dlgAsk(html, btns) {
    return new Promise(res => {
      const d = $('#dlg'); let done = false;
      const fin = v => { if (done) return; done = true; if (d.open) d.close(); res(v); };
      d.innerHTML = `<form method="dialog" onsubmit="return false"><div class="dbody">${html}</div><div class="dbtn">${btns.map((b, i) => `<button type="button" data-i="${i}" class="btn ${b.cls || ''}">${esc(b.label)}</button>`).join('')}</div></form>`;
      d.onclose = () => { if (d.open) return; fin(-1); };
      d.oncancel = () => fin(-1);
      d.querySelectorAll('.dbtn button').forEach(b => b.onclick = () => fin(+b.dataset.i));
      d.showModal();
    });
  }
  const deckOptions = sel => decks().map(d => `<option value="${esc(d.id)}" ${d.id === sel ? 'selected' : ''}>${esc(d.name)}</option>`).join('');
  function newDeckPrompt() {
    const nm = (prompt('Nome do novo baralho:', '') || '').trim(); if (!nm) return null;
    const ex = decks().find(d => d.name.toLowerCase() === nm.toLowerCase()); if (ex) { EN.toast('Já existe um baralho com esse nome.'); return ex.id; }
    const d = { id: 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 4), name: nm, created: new Date().toISOString() };
    decks().push(d); save(); return d.id;
  }
  async function pickDeck(title, sel) {
    let chosen = null;
    const r = await new Promise(res => {
      const d = $('#dlg'); let done = false; const fin = v => { if (done) return; done = true; if (d.open) d.close(); res(v); };
      d.innerHTML = `<form method="dialog" onsubmit="return false"><div class="dbody"><h3>${esc(title)}</h3><label class="cf-l">Baralho<span class="cf-dk"><select id="pkDeck">${deckOptions(sel)}</select><button type="button" class="btn sm" id="pkNew">＋ Novo</button></span></label></div><div class="dbtn"><button type="button" class="btn" id="pkNo">Cancelar</button><button type="button" class="btn pri" id="pkOk">Mover</button></div></form>`;
      d.onclose = () => { if (!d.open) fin(null); }; d.oncancel = () => fin(null);
      $('#pkNo', d).onclick = () => fin(null);
      $('#pkNew', d).onclick = () => { const id = newDeckPrompt(); if (id) { $('#pkDeck', d).innerHTML = deckOptions(id); } };
      $('#pkOk', d).onclick = () => fin($('#pkDeck', d).value);
      d.showModal();
    });
    chosen = r; return chosen;
  }

  /* ── formulário do cartão: baralho, frente, tradução e exemplo ── */
  function cardForm(o) {
    o = o || {};
    return new Promise(res => {
      const d = $('#dlg'); let done = false;
      const fin = v => { if (done) return; done = true; if (d.open) d.close(); res(v); };
      const hints = (o.hints || []).slice(0, 12).map(x => `<span class="chip2"><b>${esc(x.w)}</b> ${esc(x.pt)}</span>`).join('');
      d.innerHTML = `<form class="cform" method="dialog" onsubmit="return false"><div class="dbody">
        <h3>${esc(o.title || 'Cartão')}</h3>
        <label class="cf-l">Baralho<span class="cf-dk"><select id="cfDeck">${deckOptions(o.deck || 'sel')}</select><button type="button" class="btn sm" id="cfNewDeck" title="Criar baralho">＋ Novo</button></span></label>
        <label class="cf-l">Frente <small>(em inglês: palavra ou trecho)</small><input type="text" id="cfFront" autocomplete="off"></label>
        <label class="cf-l">Tradução <small>(em português)</small><input type="text" id="cfBack" autocomplete="off" placeholder="o que isso significa?"></label>
        <label class="cf-l">Exemplo <small>(uma frase em inglês com a palavra ou o trecho)</small><textarea id="cfEx" rows="2" placeholder="I like coffee."></textarea></label>
        <details class="cf-more"${o.pron || o.exPt ? ' open' : ''}><summary>Mais campos (opcional): pronúncia e tradução do exemplo</summary>
          <label class="cf-l">Pronúncia<input type="text" id="cfPron" autocomplete="off"></label>
          <label class="cf-l">Tradução do exemplo<input type="text" id="cfExPt" autocomplete="off"></label></details>
        ${hints ? `<div class="cf-hint">Dicas do material: ${hints}</div>` : ''}${o.note ? `<div class="cf-note">${o.note}</div>` : ''}
        <div class="cf-err" id="cfErr" hidden></div></div>
        <div class="dbtn"><button type="button" class="btn" id="cfNo">Cancelar</button>${o.adding ? '<button type="button" class="btn" id="cfMore">Adicionar e continuar</button>' : ''}<button type="button" class="btn pri" id="cfOk">${o.adding ? 'Adicionar' : 'Salvar'}</button></div></form>`;
      $('#cfFront', d).value = o.front || ''; $('#cfBack', d).value = o.back || ''; $('#cfEx', d).value = o.ex || ''; $('#cfPron', d).value = o.pron || ''; $('#cfExPt', d).value = o.exPt || '';
      const take = again => {
        const v = { deck: $('#cfDeck', d).value, front: $('#cfFront', d).value.replace(/\s+/g, ' ').trim(), back: $('#cfBack', d).value.trim(), ex: $('#cfEx', d).value.trim(), exPt: $('#cfExPt', d).value.trim(), pron: $('#cfPron', d).value.trim(), again: !!again };
        const er = $('#cfErr', d);
        if (!v.front) { er.textContent = 'Escreva a frente do cartão (em inglês).'; er.hidden = false; $('#cfFront', d).focus(); return; }
        if (!v.back) { er.textContent = 'Escreva a tradução em português: sem ela o cartão não tem verso.'; er.hidden = false; $('#cfBack', d).focus(); return; }
        fin(v);
      };
      d.onclose = () => { if (!d.open) fin(null); }; d.oncancel = () => fin(null);
      $('#cfNo', d).onclick = () => fin(null);
      $('#cfOk', d).onclick = () => take(false);
      if ($('#cfMore', d)) $('#cfMore', d).onclick = () => take(true);
      $('#cfNewDeck', d).onclick = () => { const id = newDeckPrompt(); if (id) $('#cfDeck', d).innerHTML = deckOptions(id); };
      d.onkeydown = e => { if (e.key === 'Enter' && e.target.tagName === 'INPUT') { e.preventDefault(); take(false); } };
      d.showModal();
      setTimeout(() => { const f = (o.back || !o.front) ? $('#cfFront', d) : $('#cfBack', d); if (f) { f.focus(); } }, 30);
    });
  }
  const ukey = (front, deck) => { const k = kk(front); return !deck || deck === 'sel' ? k : deck + '|' + k; };
  function commitNew(r, extra) {
    const k = ukey(r.front, r.deck);
    if (EN.S.bank.some(b => b.k === k)) { EN.toast('Esse cartão já existe neste baralho.'); return null; }
    const b = Object.assign({ front: r.front, back: r.back, pron: r.pron || '', ctx: r.ex || '', ctxPt: r.exPt || '', hard: false, deck: r.deck, k, added: nowIso(), at: nowIso() }, extra || {});
    EN.S.bank.push(b);
    if (!EN.S.xpOnce['anki-' + k]) EN.S.c.anki++;
    save(); EN.gainOnce('anki-' + k, 3); EN.checkBadges(); badge(); return b;
  }
  function applyEdit(b, r) {
    b.front = r.front; b.back = r.back; b.ctx = r.ex; b.ctxPt = r.exPt; b.pron = r.pron; b.deck = r.deck; b.at = nowIso(); save(); badge();
  }
  /* abre o formulário para um cartão novo (usado ao selecionar texto e nas telas de cartões) */
  async function addCard(o) {
    o = o || {};
    const dn = o.front && C.deckHit ? C.deckHit(kk(o.front)) : null, hh = o.front && EN.S.hist ? EN.S.hist[kk(o.front)] : null;
    const note = dn ? `Esta palavra já é o cartão <b>#${esc(dn.n)}</b> ${dn.deck ? 'do baralho <b>' + esc(dn.deck) + '</b>' : 'do material'}. Se você a está salvando de novo, ela fica marcada como <b>difícil</b>.` : (hh ? 'Você já exportou esta palavra antes: ela fica marcada como <b>difícil</b>.' : '');
    const r = await cardForm(Object.assign({ title: 'Novo cartão', adding: !!o.adding, note }, o));
    if (!r) return null;
    const b = commitNew(r, { hard: !!(dn || hh) });
    if (b) EN.toast(`Cartão salvo em “${deckName(r.deck)}”.`);
    r.saved = b; return r;
  }
  async function editCard(b) {
    const r = await cardForm({ title: 'Editar cartão', deck: bdeck(b), front: b.front, back: b.back, ex: b.ctx, exPt: b.ctxPt, pron: b.pron });
    if (r) { applyEdit(b, r); EN.toast('Cartão atualizado.'); }
    return r;
  }

  /* ── janela de estudo ── */
  let Q = null, ov = null;
  const typing = e => { const t = e.target; return t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) || ($('#dlg') && $('#dlg').open); };
  function ensureOv() {
    if (ov) return ov;
    ov = document.createElement('div'); ov.id = 'srsOv'; ov.className = 'srs-ov'; ov.hidden = true; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', 'Cartões');
    document.body.appendChild(ov);
    ov.addEventListener('click', e => {
      const b = e.target.closest('[data-sa]'); if (!b) return; const a = b.dataset.sa;
      if (a === 'show') show(); else if (a === 'rate') rate(+b.dataset.r); else if (a === 'say') sayCur(); else if (a === 'slow') sayCur(true);
      else if (a === 'dir') { set().srsDir = set().srsDir === 'pt' ? 'en' : 'pt'; save(); Q.shown = false; draw(); }
      else if (a === 'close') close(); else if (a === 'more') { const sc = Q.scope; close(); open(sc); }
      else if (a === 'undo') undo(); else if (a === 'edit') editCur(); else if (a === 'susp') suspCur();
    });
    /* caixa "Leitura automática": liga/desliga o áudio automático (a mesma opção das Configurações) */
    ov.addEventListener('change', e => {
      const t = e.target; if (!t || !t.hasAttribute || !t.hasAttribute('data-sa-auto')) return;
      set().srsSpeak = t.checked; save();
      if (!t.checked) { try { speechSynthesis.cancel(); } catch (_) { } }
      t.blur(); /* devolve as teclas (espaço, 1–4…) ao cartão */
    });
    document.addEventListener('keydown', e => {
      if (!Q || ov.hidden || e.ctrlKey || e.metaKey || e.altKey || typing(e)) return;
      if (e.key === 'Escape') { close(); return; }
      const k = e.key.toLowerCase();
      if (k === 'u') { undo(); return; }
      if (!Q.list.length) return;
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!Q.shown) show(); }
      else if (Q.shown && /^[1-4]$/.test(e.key)) rate(+e.key - 1);
      else if (k === 'r') sayCur(); else if (k === 't') sayCur(true); else if (k === 'e') editCur(); else if (k === 's') suspCur();
    });
    return ov;
  }
  function open(scope, o) {
    const list = queue(scope), isDeck = !!(scope && scope.indexOf('deck:') === 0), sid = scope && !isDeck ? scope : null;
    if (!list.length) { if (!(o && o.quiet)) EN.toast('Nenhum cartão para estudar agora. ✔'); if (sid) markStep(sid); return false; }
    const s = sid && C.SES[sid] ? C.SES[sid].s : null;
    Q = { scope: scope || null, sid, title: isDeck ? 'Baralho: ' + deckName(scope.slice(5)) : s ? (s.tipo === 'pratica' ? `Prática ${s.n}` : `Sessão ${s.n}`) : 'Cartões de hoje', list, done: 0, again: 0, shown: false, total: list.length, newN: list.filter(x => x.isNew).length, last: null };
    ensureOv().hidden = false; document.body.classList.add('srs-open'); draw(); autoSay(false); return true;
  }
  function close() {
    if (!ov || ov.hidden) return;
    ov.hidden = true; document.body.classList.remove('srs-open'); try { speechSynthesis.cancel(); } catch (e) { }
    const done = Q && !Q.list.length; Q = null; badge();
    if (EN.rerender) EN.rerender();
    return done;
  }
  function markStep(sid) {
    const s = C.SES[sid] && C.SES[sid].s, rot = s && (s.blocos || []).find(b => b.t === 'roteiro'); if (!rot) return;
    const k = rot.id + '.0'; if (!EN.S.rot[k]) { EN.S.rot[k] = true; EN.gainOnce('rot-' + k, 5); save(); }
  }
  const cur = () => (Q && Q.list[0] ? Object.assign({}, Q.list[0], { inf: info(Q.list[0].id) }) : null);
  function sayCur(slow) { const c = cur(); if (c && c.inf) C.speak(c.inf.en, !!slow || !!EN.S.settings.slow); }
  function autoSay(afterShow) { if (!set().srsSpeak) return; const pt = set().srsDir === 'pt'; if (pt === !!afterShow) sayCur(); }
  function show() { if (!Q || Q.shown) return; Q.shown = true; draw(); autoSay(true); }
  function rate(r) {
    if (!Q || !Q.shown || !Q.list.length) return;
    const it = Q.list.shift(), old = cards()[it.id], st = stat();
    Q.last = { it, old: old ? JSON.parse(JSON.stringify(old)) : null, r };
    if (!old) st.n++;
    cards()[it.id] = Object.assign(sched(old || {}, r), { at: new Date().toISOString() });
    st.r++;
    if (r === 0) { Q.again++; Q.list.splice(Math.min(Q.list.length, 3), 0, it); } else Q.done++;
    EN.gain(1, { silent: true }); save();
    Q.shown = false;
    if (!Q.list.length) { const bonus = EN.gainOnce('srs-day-' + today(), 10, { silent: true }); Q.bonus = bonus; if (Q.sid) markStep(Q.sid); save(); }
    badge(); /* o número do botão 🃏 acompanha cada resposta */
    draw(); if (Q.list.length) autoSay(false);
  }
  function undo() {
    if (!Q || !Q.last) { if (Q) EN.toast('Nada para desfazer.'); return; }
    const L = Q.last, st = stat(); Q.last = null;
    if (L.old) cards()[L.it.id] = L.old; else { delete cards()[L.it.id]; EN.tomb('s:' + L.it.id); }
    st.r = Math.max(0, st.r - 1); if (!L.old) st.n = Math.max(0, st.n - 1);
    if (L.r === 0) { Q.again = Math.max(0, Q.again - 1); const i = Q.list.findIndex(x => x.id === L.it.id); if (i >= 0) Q.list.splice(i, 1); } else Q.done = Math.max(0, Q.done - 1);
    Q.list.unshift(L.it); Q.shown = false; Q.bonus = false; save(); badge(); draw();
  }
  function suspCur() {
    const c = cur(); if (!Q || !c) return;
    suspend(c.id); Q.list.shift(); Q.shown = false; Q.total = Math.max(Q.done + Q.list.length, 1); Q.last = null; save();
    EN.toast('Cartão suspenso. Para reativar: Cartões → Navegar.'); badge(); draw();
  }
  async function editCur() {
    const c = cur(); if (!Q || !c || !c.inf || !c.inf.bank) { if (Q && c) EN.toast('Só os seus cartões podem ser editados. Os do curso vêm do material.'); return; }
    const b = bankOf(c.id); if (!b) return;
    const r = await editCard(b);
    if (r && r.deck !== c.inf.deck && String(Q.scope || '').indexOf('deck:') === 0) { Q.list.shift(); Q.total = Math.max(Q.done + Q.list.length, 1); }
    if (Q) draw();
  }
  function draw() {
    const el = ensureOv(), c = cur(), pt = set().srsDir === 'pt';
    const pct = Math.round(100 * Q.done / Math.max(1, Q.total));
    let h = `<div class="srs-top"><div class="srs-t"><b>🃏 ${esc(Q.title)}</b><span class="muted small">${Q.list.length ? ` · faltam ${Q.list.length}` : ' · concluído'}</span></div><div class="srs-prog" aria-hidden="true"><i style="width:${pct}%"></i></div><div class="srs-tools"><label class="srs-auto" title="Marcada: o áudio toca sozinho a cada cartão. Desmarcada: só toca quando você clicar em 🔊 ou 🐢."><input type="checkbox" data-sa-auto ${set().srsSpeak ? 'checked' : ''}> Leitura automática</label><button class="btn sm ghost" data-sa="dir" title="Trocar a frente do cartão">🔁 ${pt ? 'PT → EN' : 'EN → PT'}</button><button class="btn sm ghost" data-sa="close">✕ Fechar</button></div></div>`;
    if (!c) {
      const ok = Q.total, n = Q.newN;
      h += `<div class="srs-card center"><div class="srs-big">🎉</div><h2 style="margin:6px 0">Cartões concluídos!</h2><p class="muted" style="margin:0">${ok} cartão(ões) revisados${n ? `, ${n} novo(s)` : ''}${Q.again ? ` · ${Q.again} vez(es) “De novo”` : ''}.${Q.bonus ? ' +10 XP pelo dia de cartões.' : ''}</p>${Q.sid ? '<p class="small muted" style="margin:10px 0 0">A etapa 1 do roteiro foi marcada como feita.</p>' : ''}<div class="srs-act" style="justify-content:center;margin-top:14px">${Q.last ? '<button class="btn" data-sa="undo">↩ Desfazer a última</button>' : ''}<button class="btn pri" data-sa="close">Voltar</button></div></div>`;
      el.innerHTML = h; return;
    }
    const inf = c.inf; if (!inf) { Q.list.shift(); return draw(); }
    const tag = c.isNew ? '<span class="srs-tag n">novo</span>' : cards()[c.id] && cards()[c.id].i === 0 ? '<span class="srs-tag a">de novo</span>' : '<span class="srs-tag">revisão</span>';
    const front = pt ? `<div class="srs-w">${esc(inf.pt)}</div>` : `<div class="srs-w">${esc(inf.en)}<button class="spk" data-sa="say" title="Ouvir (R)">🔊</button><button class="spk" data-sa="slow" title="Ouvir devagar (T)" aria-label="Ouvir devagar">🐢</button></div>`;
    const ctx = inf.ctx ? `<div class="srs-ctx"><i>${esc(inf.ctx)}</i>${inf.ctxPt ? '<br>' + esc(inf.ctxPt) : ''}</div>` : '';
    const back = Q.shown ? `<hr class="srs-hr">${pt ? `<div class="srs-w">${esc(inf.en)}<button class="spk" data-sa="say" title="Ouvir (R)">🔊</button><button class="spk" data-sa="slow" title="Ouvir devagar (T)" aria-label="Ouvir devagar">🐢</button></div>` : `<div class="srs-b">${esc(inf.pt)}</div>`}${inf.pron ? `<div class="srs-p">${esc(inf.pron)}</div>` : ''}${ctx}` : '';
    const acts = Q.shown
      ? `<div class="srs-rate">${[['De novo', 0, 'a'], ['Difícil', 1, 'h'], ['Bom', 2, 'g'], ['Fácil', 3, 'e']].map(([t, r, k]) => `<button class="srs-r ${k}" data-sa="rate" data-r="${r}"><b>${t}</b><small>${preview(c.id, r)}</small><kbd>${r + 1}</kbd></button>`).join('')}</div>`
      : `<div class="srs-act"><button class="btn pri big" data-sa="show">Mostrar resposta <kbd>espaço</kbd></button></div>`;
    const more = `<div class="srs-more"><button class="btn sm ghost" data-sa="undo" ${Q.last ? '' : 'disabled'} title="Desfazer a última resposta (U)">↩ Desfazer <kbd>U</kbd></button>${inf.bank ? '<button class="btn sm ghost" data-sa="edit" title="Editar este cartão (E)">✏️ Editar <kbd>E</kbd></button>' : ''}<button class="btn sm ghost" data-sa="susp" title="Parar de mostrar este cartão (S)">⏸ Suspender <kbd>S</kbd></button></div>`;
    h += `<div class="srs-card">${tag}${front}${back}${acts}</div>${more}<p class="srs-hint small muted">Teclas: espaço mostra · 1 a 4 avaliam · R ouve · T ouve devagar · U desfaz · E edita · S suspende · Esc fecha.</p>`;
    el.innerHTML = h;
  }

  /* ── bloco "Cartões da sessão" ── */
  function blockHTML(ctx) {
    const sid = ctx.s && ctx.s.id; if (!sid) return '';
    const n = hasDeck(sid) ? sessionDeck(sid).length : 0, { due, nw } = counts(sid);
    const seen = sessionDeck(sid).filter(c => cards()[c.id]).length;
    const all = !due && !nw;
    return `<div class="srsb"><div class="srsb-i">🃏</div><div class="srsb-t"><b>${all ? 'Cartões de hoje concluídos ✔' : 'Cartões desta sessão'}</b><span>${n ? `${seen} de ${n} já vistos · ` : ''}<b>${nw}</b> novo(s) · <b>${due}</b> revisão(ões) pendente(s). Clique para estudar quando quiser.</span></div><button class="btn ${all ? '' : 'pri'}" data-act="srs-open" data-k="${esc(sid)}">${all ? 'Rever mesmo assim' : '▶ Abrir cartões'}</button></div>`;
  }

  /* ── página "Cartões": baralhos ── */
  function pageHTML(a, b) {
    if (a === 'navegar') { if (b) { BR.deck = b; BR.sel = new Set(); } return browseHTML(); }
    return homeHTML();
  }
  function homeHTML() {
    const t = today(), all = Object.values(cards()), st = EN.S.srs.stats[t] || { r: 0, n: 0 };
    const q = counts(null), cs = currentSid();
    const lv = [['Novos/aprendendo', all.filter(c => !(c.i > 0)).length], ['Jovens (1–20 dias)', all.filter(c => c.i > 0 && c.i < 21).length], ['Maduros (21+ dias)', all.filter(c => c.i >= 21).length]];
    const tot = Math.max(1, all.length);
    const rows = decks().map(d => {
      const n = EN.S.bank.filter(b => bdeck(b) === d.id).length, due = dueIds(d.id).length, nw = newBank(d.id).length;
      return `<tr><td class="dn"><b>${esc(d.name)}</b>${d.id === 'sel' ? ' <small class="muted">(padrão para o ➕ do texto)</small>' : ''}</td><td class="num ${nw ? 'nw' : 'z'}">${nw}</td><td class="num ${due ? 'du' : 'z'}">${due}</td><td class="num z">${n}</td>
        <td class="ac"><button class="btn sm ${due + nw ? 'pri' : ''}" data-act="srs-open" data-k="deck:${esc(d.id)}" ${due + nw ? '' : 'title="Nada para hoje: estuda mesmo assim só se houver cartões"'}>▶ Estudar</button><button class="btn sm" data-ca="add" data-k="${esc(d.id)}" title="Adicionar cartão neste baralho">➕</button><button class="btn sm" data-ca="browse" data-k="${esc(d.id)}" title="Ver e editar os cartões">🔎</button><button class="btn sm ghost" data-ca="rename" data-k="${esc(d.id)}" title="Renomear">✏️</button><button class="btn sm ghost" data-ca="export" data-k="${esc(d.id)}" title="Exportar para o Anki (.txt)">⬇</button>${d.id === 'sel' ? '' : `<button class="btn sm ghost" data-ca="deldeck" data-k="${esc(d.id)}" title="Excluir baralho">🗑</button>`}</td></tr>`;
    }).join('');
    const mods = (C.course ? C.course.modulos : []).map(m => `<div class="card" style="margin:8px 0"><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span style="font-size:20px">${esc(m.icone || '📘')}</span><b style="flex:1;min-width:150px">${C.md(m.titulo)}</b></div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">${(m.sessoes || []).filter(s => hasDeck(s.id)).map(s => { const d = sessionDeck(s.id), v = d.filter(c => cards()[c.id]).length; return `<button class="btn sm ${v === d.length ? 'ghost' : ''}" data-act="srs-open" data-k="${esc(s.id)}" title="Estudar o baralho da sessão ${s.n}">${v === d.length ? '✓ ' : ''}S${s.n} · ${v}/${d.length}</button>`; }).join('')}</div></div>`).join('');
    return `<h1 class="pgtitle">🃏 Cartões</h1><p class="muted">Seus baralhos e os cartões do curso ficam aqui dentro: o app agenda sozinho a próxima vez que cada cartão deve voltar. Responda <b>De novo</b>, <b>Difícil</b>, <b>Bom</b> ou <b>Fácil</b> conforme lembrar.</p>
<div class="card srs-sum"><div class="srs-n"><b>${q.due}</b><span>revisões para hoje</span></div><div class="srs-n"><b>${q.nw}</b><span>novos disponíveis</span></div><div class="srs-n"><b>${st.r}</b><span>respondidos hoje</span></div><div class="srs-n"><b>${all.length}</b><span>cartões estudados</span></div></div>
<div class="act" style="margin:12px 0"><button class="btn pri" data-act="srs-open" data-k="">▶ Estudar tudo agora${cs ? ` (inclui ${C.SES[cs].s.tipo === 'pratica' ? 'prática' : 'sessão'} ${C.SES[cs].s.n})` : ''}</button><button class="btn" data-ca="add" data-k="">➕ Adicionar cartão</button><button class="btn" data-ca="newdeck">📁 Novo baralho</button><button class="btn" data-ca="browse" data-k="all">🔎 Navegar</button><button class="btn" data-ca="import">⬆ Importar</button></div>
<div class="sectitle">Meus baralhos</div><div class="card" style="padding:6px 10px"><table class="decks"><thead><tr><th>Baralho</th><th class="num">Novos</th><th class="num">Vencidos</th><th class="num">Cartões</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
<p class="small muted" style="margin-top:6px">Para criar um cartão a partir do texto das aulas, selecione uma palavra ou um trecho e escolha <b>➕ Cartão</b>: preencha a tradução e um exemplo. Os baralhos que você criar aparecem na lista de escolha.</p>
<div class="sectitle">Baralhos do curso</div><p class="small muted">Cada sessão tem 10 cartões novos. Clique para estudar o baralho dela (as revisões vencidas vêm junto). Para ver ou suspender os cartões do curso, use <a href="#/cartoes/navegar/curso">Navegar</a>.</p>${mods}
<div class="sectitle">Maturidade dos cartões</div><div class="card"><div class="srs-bars">${lv.map(([n, v], i) => `<div class="srs-bar"><span>${n}</span><div class="tr"><i class="c${i}" style="width:${Math.round(100 * v / tot)}%"></i></div><b>${v}</b></div>`).join('')}</div></div>
<p class="small muted" style="margin-top:10px">O Anki é opcional: o botão ⬇ de cada baralho gera um arquivo que o Anki importa (Arquivo → Importar).</p>`;
  }

  /* ── navegar nos cartões (como o "Navegador" do Anki) ── */
  const BR = { deck: 'all', q: '', st: 'all', sel: new Set() };
  const syid = sid => { const m = /^m(\d+)-s(\d+)$/.exec(sid); return m ? `M${m[1]} · S${m[2]}` : sid; };
  function allRows() {
    const rows = [];
    EN.S.bank.forEach(b => rows.push({ id: 'b:' + b.k, u: true, front: b.front, back: b.back || '', ex: b.ctx || '', deck: bdeck(b), dn: deckName(bdeck(b)), b }));
    Object.values(index()).forEach(c => rows.push({ id: c.id, u: false, front: c.en, back: c.pt, ex: '', deck: 'curso', dn: 'Curso · ' + syid(c.sid) }));
    return rows;
  }
  const norm = s => String(s || '').toLowerCase();
  function filtered() {
    const q = norm(BR.q).trim(), t = today();
    return allRows().filter(r => {
      if (BR.deck !== 'all' && r.deck !== BR.deck) return false;
      const st = cards()[r.id], sp = !!susp()[r.id];
      if (BR.st === 'new' && (st || sp)) return false;
      if (BR.st === 'due' && !(st && st.due <= t && !sp)) return false;
      if (BR.st === 'susp' && !sp) return false;
      if (q && !(norm(r.front).includes(q) || norm(r.back).includes(q) || norm(r.ex).includes(q))) return false;
      return true;
    });
  }
  const nextLab = id => { const st = cards()[id]; if (susp()[id]) return 'suspenso'; if (!st) return 'novo'; if (st.due <= today()) return 'vence hoje'; return 'volta em ' + lab(Math.max(1, Math.round((new Date(st.due) - new Date(today())) / 864e5))); };
  function listHTML() {
    const rows = filtered(), shown = rows.slice(0, 150);
    const head = `<div class="cb-count small muted">${rows.length} cartão(ões)${rows.length > shown.length ? ` · mostrando os primeiros ${shown.length}: refine a busca` : ''}</div>`;
    if (!rows.length) return head + '<div class="empty">Nenhum cartão com esses filtros. Use <b>➕ Adicionar</b> ou selecione texto nas aulas e escolha <b>➕ Cartão</b>.</div>';
    const items = shown.map(r => `<div class="cb-row ${susp()[r.id] ? 'susp' : ''}" data-id="${esc(r.id)}"><label class="cb-ck"><input type="checkbox" data-cb-sel ${BR.sel.has(r.id) ? 'checked' : ''} aria-label="Selecionar"></label><div class="cb-main"><div class="cb-f"><b>${esc(r.front)}</b> <span class="cb-arrow">→</span> ${r.back ? esc(r.back) : '<i class="muted">(sem tradução)</i>'}</div>${r.ex ? `<div class="cb-ex">${esc(r.ex)}</div>` : ''}<div class="cb-meta small muted">${esc(r.dn)} · ${nextLab(r.id)}${r.u && r.b && r.b.hard ? ' · difícil' : ''}</div></div><div class="cb-act"><button class="btn sm ghost" data-ca="say" title="Ouvir">🔊</button><button class="btn sm ghost" data-ca="slow" title="Ouvir devagar" aria-label="Ouvir devagar">🐢</button>${r.u ? '<button class="btn sm ghost" data-ca="edit" title="Editar">✏️</button>' : ''}<button class="btn sm ghost" data-ca="susp" title="${susp()[r.id] ? 'Reativar' : 'Suspender'}">${susp()[r.id] ? '▶' : '⏸'}</button>${cards()[r.id] ? '<button class="btn sm ghost" data-ca="reset" title="Reiniciar o agendamento (volta a ser novo)">↺</button>' : ''}${r.u ? '<button class="btn sm ghost" data-ca="del" title="Excluir">🗑</button>' : ''}</div></div>`).join('');
    return head + items;
  }
  function bulkHTML() {
    const n = BR.sel.size; if (!n) return '';
    return `<div class="cb-bulk"><b>${n} selecionado(s)</b><button class="btn sm" data-ca="bmove">Mover para…</button><button class="btn sm" data-ca="bsusp">⏸ Suspender</button><button class="btn sm" data-ca="bunsusp">▶ Reativar</button><button class="btn sm dng" data-ca="bdel">🗑 Excluir</button><button class="btn sm ghost" data-ca="bclear">Limpar seleção</button></div>`;
  }
  function browseHTML() {
    const opts = [['all', 'Todos os cartões'], ['curso', 'Cartões do curso']].concat(decks().map(d => [d.id, d.name]));
    if (!opts.some(o => o[0] === BR.deck)) BR.deck = 'all';
    return `<h1 class="pgtitle">🔎 Navegar nos cartões</h1><p class="muted"><a href="#/cartoes">← Voltar aos baralhos</a> · procure, edite, mova, suspenda ou exclua cartões. Os cartões do curso só podem ser suspensos ou reiniciados.</p>
<div class="cb-bar"><select id="cbDeck" aria-label="Baralho">${opts.map(([v, t]) => `<option value="${esc(v)}" ${v === BR.deck ? 'selected' : ''}>${esc(t)}</option>`).join('')}</select><input type="search" id="cbQ" placeholder="Buscar por palavra, tradução ou exemplo" value="${esc(BR.q)}"><select id="cbSt" aria-label="Situação">${[['all', 'Todas as situações'], ['new', 'Novos'], ['due', 'Vencidos hoje'], ['susp', 'Suspensos']].map(([v, t]) => `<option value="${v}" ${v === BR.st ? 'selected' : ''}>${t}</option>`).join('')}</select><button class="btn pri" data-ca="add" data-k="${BR.deck !== 'all' && BR.deck !== 'curso' ? esc(BR.deck) : ''}">➕ Adicionar</button></div>
<div id="cbBulk">${bulkHTML()}</div><div class="card cb-list" id="cbList">${listHTML()}</div>`;
  }
  function refreshList() { const l = $('#cbList'); if (l) l.innerHTML = listHTML(); const b = $('#cbBulk'); if (b) b.innerHTML = bulkHTML(); }
  const onBrowse = () => /^#\/cartoes\/navegar/.test(location.hash);
  const refreshAll = () => { badge(); if (onBrowse()) refreshList(); else if (/^#\/cartoes/.test(location.hash) && EN.rerender) EN.rerender(); };

  /* ── importar e exportar ── */
  function parseImport(txt) {
    const out = [], clean = s => String(s || '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/^"|"$/g, '').replace(/""/g, '"').replace(/\s+/g, ' ').trim();
    String(txt || '').split(/\r?\n/).forEach(line => {
      if (!line.trim() || line.trim()[0] === '#') return;
      const parts = line.indexOf('\t') >= 0 ? line.split('\t') : line.indexOf(';') >= 0 ? line.split(';') : line.split(/\s+[-–—=]\s+/);
      const f = clean(parts[0]), b = clean(parts[1]), e = clean(parts[2]);
      if (f && b) out.push({ front: f, back: b, ex: e });
    });
    return out;
  }
  async function importFlow(deck) {
    const r = await new Promise(res => {
      const d = $('#dlg'); let done = false; const fin = v => { if (done) return; done = true; if (d.open) d.close(); res(v); };
      d.innerHTML = `<form method="dialog" onsubmit="return false"><div class="dbody"><h3>⬆ Importar cartões</h3><p class="small muted">Cole uma linha por cartão: <code>frente ; tradução ; exemplo</code> (o exemplo é opcional). Também aceita o arquivo .txt exportado pelo Anki (colunas separadas por tabulação).</p>
        <label class="cf-l">Baralho de destino<span class="cf-dk"><select id="imDeck">${deckOptions(deck || 'sel')}</select><button type="button" class="btn sm" id="imNew">＋ Novo</button></span></label>
        <textarea id="imTxt" rows="7" placeholder="apple ; maçã ; I eat an apple.\nto wake up ; acordar ; I wake up at six."></textarea>
        <label class="cf-l">…ou escolha um arquivo<input type="file" id="imFile" accept=".txt,.csv,.tsv,text/plain"></label><div class="cf-err" id="imErr" hidden></div></div>
        <div class="dbtn"><button type="button" class="btn" id="imNo">Cancelar</button><button type="button" class="btn pri" id="imOk">Importar</button></div></form>`;
      d.onclose = () => { if (!d.open) fin(null); }; d.oncancel = () => fin(null);
      $('#imNo', d).onclick = () => fin(null);
      $('#imNew', d).onclick = () => { const id = newDeckPrompt(); if (id) $('#imDeck', d).innerHTML = deckOptions(id); };
      $('#imFile', d).onchange = e => { const f = e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { $('#imTxt', d).value = String(rd.result || ''); }; rd.readAsText(f, 'utf-8'); };
      $('#imOk', d).onclick = () => { const items = parseImport($('#imTxt', d).value); if (!items.length) { const er = $('#imErr', d); er.textContent = 'Não encontrei nenhum cartão. Use uma linha por cartão: frente ; tradução.'; er.hidden = false; return; } fin({ deck: $('#imDeck', d).value, items }); };
      d.showModal();
    });
    if (!r) return;
    let n = 0, dup = 0;
    r.items.forEach(it => { if (commitNew({ front: it.front, back: it.back, ex: it.ex, exPt: '', pron: '', deck: r.deck })) n++; else dup++; });
    EN.toast(`${n} cartão(ões) importado(s) em “${deckName(r.deck)}”${dup ? ` · ${dup} já existiam` : ''}.`); refreshAll();
  }
  const tsv = f => (/["\t\n]/.test(f) ? '"' + f.replace(/"/g, '""') + '"' : f);
  function exportDeck(id) {
    const list = userCards(id);
    if (!list.length) { EN.toast('Esse baralho ainda não tem cartões com tradução.'); return; }
    const root = (C.course && C.course.curso && C.course.curso.anki && C.course.curso.anki.deck) || 'Inglês', tag = (C.course && C.course.curso && C.course.curso.anki && C.course.curso.anki.tag) || 'curso';
    const now = new Date().toISOString(), lines = ['#separator:tab', '#html:true', '#tags column:3', '#columns:Frente\tVerso\tTags', '#deck:' + root + '::' + deckName(id)];
    list.forEach(b => {
      const f = esc(b.front) + (b.ctx ? `<br><i>${esc(b.ctx)}</i>` : ''), bk = esc(b.back) + (b.pron ? `<br><small>${esc(b.pron)}</small>` : '') + (b.ctxPt ? `<br><i>${esc(b.ctxPt)}</i>` : '');
      lines.push([tsv(f), tsv(bk), tsv([tag, 'meus'].concat(b.hard ? ['dificil'] : []).join(' '))].join('\t'));
      const h = EN.S.hist[b.k]; EN.S.hist[b.k] = { front: b.front, count: (h ? h.count : 0) + 1, first: h ? h.first : now, last: now }; b.exp = true;
    });
    C.download(`anki_${deckName(id).replace(/[^\w-]+/g, '_')}_${now.slice(0, 10)}.txt`, lines.join('\n') + '\n'); save();
    EN.toast(`${list.length} cartão(ões) exportado(s). No Anki: Arquivo → Importar.`);
  }

  /* ── ações das telas de cartões ── */
  async function addFlow(deck) {
    let again = true, n = 0, dk = deck || 'sel';
    while (again) {
      const r = await addCard({ deck: dk, adding: true, title: 'Adicionar cartão' });
      if (!r) break; if (r.saved) n++; dk = r.deck; again = !!r.again;
    }
    if (n) refreshAll();
  }
  async function bulk(kind) {
    const ids = [...BR.sel]; if (!ids.length) return;
    const users = ids.map(id => bankOf(id)).filter(Boolean);
    if (kind === 'bsusp') ids.forEach(id => { suspend(id); });
    else if (kind === 'bunsusp') ids.forEach(id => { unsuspend(id); });
    else if (kind === 'bmove') {
      if (!users.length) { EN.toast('Só os seus cartões podem mudar de baralho.'); return; }
      const d = await pickDeck(`Mover ${users.length} cartão(ões) para…`, 'sel'); if (!d) return; users.forEach(b => { b.deck = d; b.at = nowIso(); });
    } else if (kind === 'bdel') {
      if (!users.length) { EN.toast('Os cartões do curso não podem ser excluídos (use Suspender).'); return; }
      const r = await dlgAsk(`<h3>Excluir ${users.length} cartão(ões)?</h3><p>Eles saem do baralho e o histórico de estudo deles é apagado. Não pode ser desfeito.</p>`, [{ label: 'Cancelar' }, { label: 'Excluir', cls: 'dng' }]); if (r !== 1) return;
      users.forEach(dropCard);
    } else if (kind === 'bclear') { BR.sel = new Set(); }
    if (kind !== 'bclear') BR.sel = new Set(); save(); refreshAll();
  }
  document.addEventListener('click', async e => {
    const o = e.target.closest('[data-act="srs-open"]'); if (o) { open(o.dataset.k || null); return; }
    const a = e.target.closest('[data-ca]'); if (!a) return;
    const ca = a.dataset.ca, k = a.dataset.k, row = a.closest('.cb-row'), id = row && row.dataset.id;
    if (ca === 'add') { addFlow(k || (BR.deck !== 'all' && BR.deck !== 'curso' && onBrowse() ? BR.deck : 'sel')); }
    else if (ca === 'newdeck') { const d = newDeckPrompt(); if (d) { EN.toast('Baralho criado.'); refreshAll(); } }
    else if (ca === 'browse') { location.hash = '#/cartoes/navegar/' + (k || 'all'); }
    else if (ca === 'import') importFlow(k || 'sel');
    else if (ca === 'export') exportDeck(k);
    else if (ca === 'rename') {
      const d = decks().find(x => x.id === k); if (!d) return;
      const nm = (prompt('Novo nome do baralho:', d.name) || '').trim(); if (!nm || nm === d.name) return;
      if (decks().some(x => x.id !== k && x.name.toLowerCase() === nm.toLowerCase())) { EN.toast('Já existe um baralho com esse nome.'); return; }
      d.name = nm; d.at = nowIso(); save(); refreshAll();
    } else if (ca === 'deldeck') {
      const d = decks().find(x => x.id === k); if (!d || d.id === 'sel') return;
      const mine = EN.S.bank.filter(b => bdeck(b) === d.id);
      const r = mine.length ? await dlgAsk(`<h3>Excluir o baralho “${esc(d.name)}”?</h3><p>Ele tem <b>${mine.length}</b> cartão(ões). O que fazer com eles?</p>`, [{ label: 'Cancelar' }, { label: 'Mover para “Selecionadas”' }, { label: 'Excluir com os cartões', cls: 'dng' }]) : 2;
      if (r < 1) return;
      if (r === 1) mine.forEach(b => { b.deck = 'sel'; b.at = nowIso(); });
      else mine.forEach(dropCard);
      EN.tomb('d:' + d.id); EN.S.srs.decks = EN.S.srs.decks.filter(x => x.id !== d.id); if (BR.deck === d.id) BR.deck = 'all'; save(); EN.toast('Baralho excluído.'); refreshAll();
    } else if (id && (ca === 'say' || ca === 'slow')) { const x = allRows().find(r => r.id === id); if (x) C.speak(x.front, ca === 'slow'); }
    else if (id && ca === 'edit') { const b = bankOf(id); if (b) { const r = await editCard(b); if (r) refreshAll(); } }
    else if (id && ca === 'susp') { if (susp()[id]) unsuspend(id); else suspend(id); save(); refreshAll(); }
    else if (id && ca === 'reset') { delete cards()[id]; EN.tomb('s:' + id); save(); refreshAll(); }
    else if (id && ca === 'del') {
      const b = bankOf(id); if (!b) return;
      const r = await dlgAsk(`<h3>Excluir este cartão?</h3><p><b>${esc(b.front)}</b> → ${esc(b.back)}</p><p class="small muted">Não pode ser desfeito.</p>`, [{ label: 'Cancelar' }, { label: 'Excluir', cls: 'dng' }]); if (r !== 1) return;
      dropCard(b); BR.sel.delete(id); save(); refreshAll();
    } else if (/^b(move|susp|unsusp|del|clear)$/.test(ca)) bulk(ca);
  });
  document.addEventListener('input', e => { if (e.target.id === 'cbQ') { BR.q = e.target.value; refreshList(); } });
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.id === 'cbDeck') { BR.deck = t.value; BR.sel = new Set(); refreshList(); const bd = $('#cbBulk'); if (bd) bd.innerHTML = ''; }
    else if (t.id === 'cbSt') { BR.st = t.value; refreshList(); }
    else if (t.matches && t.matches('[data-cb-sel]')) { const id = t.closest('.cb-row').dataset.id; if (t.checked) BR.sel.add(id); else BR.sel.delete(id); const bd = $('#cbBulk'); if (bd) bd.innerHTML = bulkHTML(); }
  });

  EN.srs = { word: id => { const i = info(id); return i ? i.en : ''; }, open, close, queue, counts, blockHTML, pageHTML, currentSid, hasDeck, isOpen: () => !!(ov && !ov.hidden), addCard, badge, userCount, decks };
  C.renderBank = badge;
  C.openDrawer = () => { location.hash = '#/cartoes'; };
})();
