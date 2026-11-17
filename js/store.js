/* Estado do aluno (localStorage) e armazenamento do curso (IndexedDB). */
(function () {
  'use strict';
  const EN = window.EN = {};
  const pad = n => String(n).padStart(2, '0');
  EN.dkey = d => { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  EN.parseKey = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
  EN.addDays = (k, n) => { const d = EN.parseKey(k); d.setDate(d.getDate() + n); return EN.dkey(d); };
  EN.fmtDate = d => new Date(d).toLocaleDateString('pt-BR');
  EN.uid = () => Math.random().toString(36).slice(2, 9);

  /* perfis: o principal (seu progresso real) e o de teste (para experimentar mudanças sem afetar nada) */
  const PKEY = 'ingles.profile', MAIN_KEY = 'ingles.v2';
  EN.profile = (() => { try { return localStorage.getItem(PKEY) === 'teste' ? 'teste' : 'main'; } catch (e) { return 'main'; } })();
  const TKEY = MAIN_KEY + '.teste', LIVE = 'ingles.teste.live';
  const KEY = EN.profile === 'teste' ? TKEY : MAIN_KEY;
  /* o perfil de teste é uma "caixa de areia": a cada vez que é fechado (troca para o principal, ou fecha-se a aba/o app) ele começa zerado, como no primeiro acesso.
     sessionStorage diz se esta aba já abriu o teste; recarregar a página não zera, fechar e abrir de novo, sim. */
  if (EN.profile === 'teste') { try { if (!sessionStorage.getItem(LIVE)) { localStorage.removeItem(TKEY); sessionStorage.setItem(LIVE, '1'); } } catch (e) { } }
  EN.setProfile = p => {
    try {
      localStorage.removeItem(TKEY); /* entrar no teste ou sair dele: o teste sempre recomeça do zero */
      if (p === 'teste') sessionStorage.setItem(LIVE, '1'); else sessionStorage.removeItem(LIVE);
      localStorage.setItem(PKEY, p === 'teste' ? 'teste' : 'main');
    } catch (e) { }
    location.reload();
  };
  EN.mainRaw = () => { try { return localStorage.getItem(MAIN_KEY); } catch (e) { return null; } };
  document.documentElement.dataset.profile = EN.profile;
  EN.storeOk = true;
  /* jogo (menu "Jogar"): força de cada palavra/frase, itens já vistos, pontos fracos, contadores do dia e totais */
  const GDEF = () => ({
    words: {},   /* id → { s: força 0–5, n: tentativas, w: erros, at, due } */
    seen: {},    /* id → data da primeira vez que apareceu no jogo */
    weak: {},    /* id → { n: erros, at, ok: 1 quando já foi refeito certo } */
    day: { k: '', correct: 0, rounds: 0, perfect: 0, combo: 0, newW: 0, audio: 0, xp: 0, types: {}, claimed: {}, chest: 0 },
    stats: { rounds: 0, correct: 0, wrong: 0, perfect: 0, bestCombo: 0, xpDay: {}, types: {} }
  });
  const gameFix = o => {
    const g = o && typeof o === 'object' ? o : {}, d = GDEF();
    const r = { words: g.words || {}, seen: g.seen || {}, weak: g.weak || {}, day: Object.assign(d.day, g.day || {}), stats: Object.assign(d.stats, g.stats || {}) };
    r.day.types = r.day.types || {}; r.day.claimed = r.day.claimed || {}; r.stats.xpDay = r.stats.xpDay || {}; r.stats.types = r.stats.types || {};
    return r;
  };
  const DEF = () => ({
    v: 2,
    settings: { theme: 'auto', name: '', goal: 40, slow: false, deck: '', showPT: false, train: true, trainDef: 2, srsSpeak: false, srsNew: 10, srsDir: 'en', gameSound: true, gameSpeak: true, speakDef: 1, convMode: 'opts' },
    srs: { cards: {}, stats: {}, decks: [], susp: {} },
    ex: {}, ptOpens: {}, video: {}, prod: {}, rot: {}, notes: {}, done: {}, last: null,
    bank: [], hist: {}, lastExport: null,
    log: {}, badges: {}, xpOnce: {},
    c: { correct: 0, firstTry: 0, idk: 0, plays: 0, anki: 0, maps: 0, gRounds: 0, gCorrect: 0, gPerfect: 0, gCombo: 0, gTypes: 0, gMastered: 0, gMissions: 0, gCenX: 0, gCenM: 0, conv: 0 },
    conv: {},   /* diálogos da área "Conversar": { id: { n: vezes concluídas, best: menos erros, at } } */
    game: GDEF(),
    maps: [], created: new Date().toISOString(), lastBackup: null, snooze: null,
    rv: {}, rev: {}, plan: { crit: {} }, lastSync: null,
    gone: {}, lastAt: null,
    pos: {}   /* onde você parou em cada sessão: { sessão: { sec, lbl, at } }; sec vazio = nada pendente */
  });
  const merge = o => {
    o = o || {}; const d = DEF(), r = Object.assign(d, o);
    r.settings = Object.assign(DEF().settings, o.settings || {});
    if (o.settings && o.settings.trainDef !== 2) { r.settings.train = true; r.settings.trainDef = 2; } /* "Modo treino" passou a vir ligado por padrão; quem desligar depois continua desligado */
    if (o.settings && o.settings.speakDef !== 1) { r.settings.srsSpeak = false; r.settings.speakDef = 1; } /* "Falar a palavra automaticamente" passou a vir desligado por padrão; quem ligar depois continua ligado */
    r.pos = (o.pos && typeof o.pos === 'object') ? o.pos : {};
    r.conv = (o.conv && typeof o.conv === 'object') ? o.conv : {};
    r.game = gameFix(o.game);
    r.c = Object.assign(DEF().c, o.c || {});
    r.plan = Object.assign({ crit: {} }, o.plan || {}); r.plan.crit = r.plan.crit || {};
    r.gone = (o.gone && typeof o.gone === 'object') ? o.gone : {};
    r.srs = Object.assign({ cards: {}, stats: {}, decks: [], susp: {} }, o.srs || {}); r.srs.cards = r.srs.cards || {}; r.srs.stats = r.srs.stats || {}; r.srs.decks = Array.isArray(r.srs.decks) ? r.srs.decks : []; r.srs.susp = r.srs.susp || {};
    return r;
  };
  function load() {
    try { const r = localStorage.getItem(KEY); if (r) return merge(JSON.parse(r)); } catch (e) { EN.storeOk = false; }
    return DEF();
  }
  EN.S = load();
  EN.save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(EN.S)); }
    catch (e) { EN.storeOk = false; if (EN.onStoreFail) EN.onStoreFail(); }
    if (EN.onSave) { try { EN.onSave(); } catch (e) { } }
  };
  /* lápide: registra que algo foi excluído (ou reiniciado), para a exclusão também valer em outros aparelhos
     ao sincronizar. Chaves: 'b:'+k cartão, 'd:'+id baralho, 'm:'+id mapa (recurso retirado; a lápide continua aceita), 's:'+id estudo do cartão, 'u:'+id fim da suspensão */
  EN.tomb = key => { EN.S.gone[key] = new Date().toISOString(); };
  EN.setState = o => { const n = merge(o), S = EN.S; Object.keys(S).forEach(k => delete S[k]); Object.assign(S, n); EN.save(); };
  EN.resetState = () => EN.setState(null);
  /* apaga TUDO deste perfil (XP, conquistas, respostas, cartões, configurações), como no primeiro acesso */
  EN.wipeProfile = () => {
    try { localStorage.removeItem(KEY); localStorage.removeItem('ingles.nav'); Object.keys(localStorage).filter(k => k.indexOf('ingles.kv.') === 0).forEach(k => localStorage.removeItem(k)); } catch (e) { }
    try { if (window.indexedDB) indexedDB.deleteDatabase('ingles'); } catch (e) { }
    try { if (window.caches) caches.keys().then(ks => ks.forEach(k => caches.delete(k))); } catch (e) { }
  };

  /* ── sincronização: exportar / importar / mesclar o progresso (JSON) ── */
  const later = (x, y) => ((x || '') >= (y || '') ? x : y);
  const earlier = (x, y) => (!x ? y : !y ? x : (x <= y ? x : y));
  const longer = (x, y) => (String(x || '').length >= String(y || '').length ? x : y);
  EN.exportData = () => ({ app: 'ingles-progresso', v: 2, profile: EN.profile, exportedAt: new Date().toISOString(), data: JSON.parse(JSON.stringify(EN.S)) });
  EN.readExport = o => {
    const d = o && o.app === 'ingles-progresso' && o.data ? o.data : o;
    return d && typeof d === 'object' && 'ex' in d && 'log' in d ? d : null;
  };
  EN.mergeStates = (A, B0) => {
    const R = merge(JSON.parse(JSON.stringify(A))), B = merge(JSON.parse(JSON.stringify(B0)));
    ['ex', 'rv'].forEach(k => Object.keys(B[k]).forEach(id => { const a = R[k][id], b = B[k][id]; if (!a || (b.at || '') > (a.at || '')) R[k][id] = b; }));
    Object.keys(B.ptOpens).forEach(k => { R.ptOpens[k] = Math.max(R.ptOpens[k] || 0, B.ptOpens[k]); });
    Object.keys(B.video).forEach(k => { const a = R.video[k] || {}, b = B.video[k] || {}; R.video[k] = { score: (a.score !== undefined && a.score !== '') ? a.score : b.score, sents: longer(a.sents, b.sents) }; });
    Object.keys(B.prod).forEach(k => { R.prod[k] = longer(R.prod[k], B.prod[k]); });
    Object.keys(B.rot).forEach(k => { R.rot[k] = !!(R.rot[k] || B.rot[k]); });
    Object.keys(B.notes).forEach(k => { const a = R.notes[k], b = B.notes[k]; R.notes[k] = typeof b === 'boolean' || typeof a === 'boolean' ? !!(a || b) : longer(a, b); });
    Object.keys(B.done).forEach(k => { R.done[k] = earlier(R.done[k], B.done[k]); });
    const born = x => (x ? [x.at, x.added, x.created, x.updated].filter(Boolean).sort().pop() : '') || '';
    B.bank.forEach(b => { const i = R.bank.findIndex(x => x.k === b.k); if (i < 0) R.bank.push(b); else if (born(b) > born(R.bank[i])) R.bank[i] = b; });
    Object.keys(B.hist).forEach(k => { const a = R.hist[k], b = B.hist[k]; R.hist[k] = !a ? b : { front: a.front, count: Math.max(a.count, b.count), first: earlier(a.first, b.first), last: later(a.last, b.last) }; });
    if (B.lastExport && (!R.lastExport || B.lastExport.at > R.lastExport.at)) R.lastExport = B.lastExport;
    Object.keys(B.log).forEach(k => { const a = R.log[k], b = B.log[k]; R.log[k] = !a ? b : { xp: Math.max(a.xp || 0, b.xp || 0), ses: Array.from(new Set((a.ses || []).concat(b.ses || []))), manual: !!(a.manual || b.manual) }; });
    Object.keys(B.conv).forEach(k => { const a = R.conv[k], b = B.conv[k]; R.conv[k] = !a ? b : { n: Math.max(a.n || 0, b.n || 0), best: Math.min(a.best == null ? 99 : a.best, b.best == null ? 99 : b.best), at: later(a.at, b.at) }; });
    Object.keys(B.badges).forEach(k => { R.badges[k] = earlier(R.badges[k], B.badges[k]); });
    Object.keys(B.xpOnce).forEach(k => { R.xpOnce[k] = 1; });
    Object.keys(B.c).forEach(k => { R.c[k] = Math.max(R.c[k] || 0, B.c[k] || 0); });
    B.maps.forEach(m => { const i = R.maps.findIndex(x => x.id === m.id); if (i < 0) R.maps.push(m); else if ((m.updated || '') > (R.maps[i].updated || '')) R.maps[i] = m; });
    Object.keys(B.rev).forEach(k => { R.rev[k] = earlier(R.rev[k], B.rev[k]); });
    Object.keys(B.srs.cards).forEach(id => { const a = R.srs.cards[id], b = B.srs.cards[id]; if (!a || (b.at || '') > (a.at || '')) R.srs.cards[id] = b; });
    B.srs.decks.forEach(d => { const i = R.srs.decks.findIndex(x => x.id === d.id); if (i < 0) R.srs.decks.push(d); else if (born(d) > born(R.srs.decks[i])) R.srs.decks[i] = d; });
    /* suspensos: o valor é a data da suspensão (versões antigas guardavam true) */
    const sv = v => (v === true ? '1970-01-01T00:00:00.000Z' : v);
    Object.keys(R.srs.susp).forEach(id => { R.srs.susp[id] = sv(R.srs.susp[id]); });
    Object.keys(B.srs.susp).forEach(id => { R.srs.susp[id] = later(R.srs.susp[id], sv(B.srs.susp[id])); });
    Object.keys(B.srs.stats).forEach(d => { const a = R.srs.stats[d] || {}, b = B.srs.stats[d] || {}; R.srs.stats[d] = { r: Math.max(a.r || 0, b.r || 0), n: Math.max(a.n || 0, b.n || 0) }; });
    Object.keys(B.plan.crit).forEach(k => { R.plan.crit[k] = R.plan.crit[k] || B.plan.crit[k]; });
    R.created = earlier(R.created, B.created);
    if (B.last && (!R.last || (B.lastAt || '') > (R.lastAt || ''))) { R.last = B.last; R.lastAt = B.lastAt || R.lastAt || null; }  /* "Continuar" segue a sessão mais recente de qualquer aparelho */
    Object.keys(B.pos).forEach(k => { const a = R.pos[k], b = B.pos[k]; if (!a || (b.at || '') > (a.at || '')) R.pos[k] = b; });  /* "onde parei": vale o mais recente */
    /* jogo: palavras e pontos fracos valem pelo registro mais recente; contadores, o maior; o dia, o mais novo (no mesmo dia, junta) */
    ['words', 'weak'].forEach(k => Object.keys(B.game[k]).forEach(id => { const a = R.game[k][id], b = B.game[k][id]; if (!a || (b.at || '') > (a.at || '')) R.game[k][id] = b; }));
    Object.keys(B.game.seen).forEach(id => { R.game.seen[id] = earlier(R.game.seen[id], B.game.seen[id]); });
    ['rounds', 'correct', 'wrong', 'perfect', 'bestCombo'].forEach(k => { R.game.stats[k] = Math.max(R.game.stats[k] || 0, B.game.stats[k] || 0); });
    ['xpDay', 'types'].forEach(k => Object.keys(B.game.stats[k]).forEach(x => { R.game.stats[k][x] = Math.max(R.game.stats[k][x] || 0, B.game.stats[k][x] || 0); }));
    { const a = R.game.day, b = B.game.day;
      if ((b.k || '') > (a.k || '')) R.game.day = b;
      else if (b.k && b.k === a.k) {
        ['correct', 'rounds', 'perfect', 'combo', 'newW', 'audio', 'xp', 'chest'].forEach(k => { a[k] = Math.max(a[k] || 0, b[k] || 0); });
        Object.keys(b.types).forEach(x => { a.types[x] = Math.max(a.types[x] || 0, b.types[x] || 0); });
        Object.keys(b.claimed).forEach(x => { a.claimed[x] = 1; });
      } }
    /* exclusões: vale a lápide mais recente, a menos que o item tenha sido criado ou editado depois dela */
    Object.keys(B.gone).forEach(k => { R.gone[k] = later(R.gone[k], B.gone[k]); });
    const g = R.gone, dead = (key, at) => !!g[key] && g[key] >= (at || '');
    R.bank = R.bank.filter(b => !dead('b:' + b.k, born(b)));
    R.srs.decks = R.srs.decks.filter(d => d.id === 'sel' || !dead('d:' + d.id, born(d)));
    R.maps = R.maps.filter(m => !dead('m:' + m.id, born(m)));
    Object.keys(R.srs.cards).forEach(id => { if (dead('s:' + id, R.srs.cards[id].at)) delete R.srs.cards[id]; });
    Object.keys(R.srs.susp).forEach(id => { if (dead('u:' + id, R.srs.susp[id])) delete R.srs.susp[id]; });
    return R;
  };
  try { localStorage.setItem(KEY + '.t', '1'); localStorage.removeItem(KEY + '.t'); } catch (e) { EN.storeOk = false; }

  /* armazenamento do curso: IndexedDB, com localStorage como reserva */
  EN.kv = {
    _db: null,
    open() {
      if (!this._db) this._db = new Promise((res, rej) => {
        if (!window.indexedDB) return rej(new Error('sem IndexedDB'));
        const r = indexedDB.open('ingles', 1);
        r.onupgradeneeded = () => r.result.createObjectStore('kv');
        r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
      });
      return this._db;
    },
    async get(k) {
      try {
        const db = await this.open();
        return await new Promise((res, rej) => { const q = db.transaction('kv').objectStore('kv').get(k); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); });
      } catch (e) { try { const v = localStorage.getItem('ingles.kv.' + k); return v ? JSON.parse(v) : undefined; } catch (_) { return undefined; } }
    },
    async set(k, v) {
      try {
        const db = await this.open();
        await new Promise((res, rej) => { const t = db.transaction('kv', 'readwrite'); t.objectStore('kv').put(v, k); t.oncomplete = res; t.onerror = () => rej(t.error); });
      } catch (e) { try { localStorage.setItem('ingles.kv.' + k, JSON.stringify(v)); } catch (_) { } }
    },
    async del(k) {
      try {
        const db = await this.open();
        await new Promise((res, rej) => { const t = db.transaction('kv', 'readwrite'); t.objectStore('kv').delete(k); t.oncomplete = res; t.onerror = () => rej(t.error); });
      } catch (e) { }
      try { localStorage.removeItem('ingles.kv.' + k); } catch (_) { }
    }
  };

  /* toasts, +XP flutuante e confete (compartilhados) */
  let tt;
  EN.toast = m => { const t = document.getElementById('toast'); if (!t) return; t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 3200); };
  EN.lastPtr = { x: innerWidth / 2, y: innerHeight / 2 };
  addEventListener('pointerdown', e => { EN.lastPtr = { x: e.clientX, y: e.clientY }; }, true);
  EN.floatXP = txt => {
    const e = document.createElement('div'); e.id = 'xpfloat'; e.textContent = txt;
    e.style.left = Math.min(innerWidth - 90, Math.max(8, EN.lastPtr.x - 20)) + 'px'; e.style.top = Math.max(70, EN.lastPtr.y - 30) + 'px';
    document.body.appendChild(e); setTimeout(() => e.remove(), 1200);
  };
  EN.confetti = () => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    const c = document.createElement('canvas'); c.id = 'confetti'; c.width = innerWidth; c.height = innerHeight; document.body.appendChild(c);
    const x = c.getContext('2d'), cols = ['#E8554E', '#0F8B8D', '#FFD23F', '#6EA2FF', '#A78BFA', '#4ADE80'];
    const P = Array.from({ length: 130 }, () => ({ x: Math.random() * c.width, y: -20 - Math.random() * c.height * .5, r: 4 + Math.random() * 5, c: cols[(Math.random() * 6) | 0], vx: -1.5 + Math.random() * 3, vy: 2 + Math.random() * 4, a: Math.random() * 6, va: -.2 + Math.random() * .4 }));
    let t = 0;
    (function f() {
      x.clearRect(0, 0, c.width, c.height);
      P.forEach(p => { p.x += p.vx; p.y += p.vy; p.a += p.va; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); x.restore(); });
      if (++t < 160) requestAnimationFrame(f); else c.remove();
    })();
  };
})();
