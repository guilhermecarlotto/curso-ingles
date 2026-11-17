/* Jogar: rodadas de exercícios variados (estilo Duolingo, sem corações, ligas nem ranking).
   Usa o conteúdo do curso, soma XP/sequência/meta/conquistas do curso e devolve os erros para os cartões.
   Estado em S.game (store.js). Nunca guarde S.game em variável: a nuvem pode trocar o objeto. */
(function () {
  'use strict';
  const EN = window.EN, S = EN.S, C = EN.C, esc = C.esc, save = EN.save;
  if (!C || !EN.gain) return;
  const G = () => S.game;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const today = () => EN.dkey();
  const nowIso = () => new Date().toISOString();
  const rnd = n => Math.floor(Math.random() * n);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (a, k) => shuffle(a).slice(0, k);
  const plain = C.plain;
  const CAP = 100;                         /* teto de XP por dia vindo das rodadas (missões e baú ficam fora do teto) */
  const AUDIO_OK = 'speechSynthesis' in window;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  /* ───────────── tipos de exercício ───────────── */
  const TYPES = [
    { id: 'lacunas', ic: '✏️', n: 'Completar lacunas', d: 'Escolha a palavra que falta na frase', audio: false },
    { id: 'parear', ic: '🔗', n: 'Parear palavras', d: 'Ligue cada palavra à sua tradução', audio: false },
    { id: 'traduzir', ic: '🔤', n: 'Escolher a tradução', d: 'Inglês → português e português → inglês', audio: false },
    { id: 'ouvir', ic: '👂', n: 'Ouvir e escolher', d: 'Toque no que você ouviu', audio: true },
    { id: 'ditado', ic: '⌨️', n: 'Ouvir e escrever', d: 'Ditado: escreva o que ouviu', audio: true },
    { id: 'montar', ic: '🧩', n: 'Montar a frase', d: 'Ordene as palavras em inglês', audio: false },
    { id: 'imagem', ic: '🖼️', n: 'Imagem e palavra', d: 'Figurinhas ligadas às palavras', audio: false },
    { id: 'digitar', ic: '📝', n: 'Escrever a tradução', d: 'Português → inglês, digitando', audio: false },
    { id: 'falar', ic: '🎤', n: 'Falar em voz alta', d: 'Repita a frase (usa o microfone)', audio: true }
  ];
  const TYPE = Object.fromEntries(TYPES.map(t => [t.id, t]));
  const AUDIO_TYPES = ['ouvir', 'ditado', 'falar'];
  const SOURCES = [
    { id: 'estudado', ic: '📚', n: 'O que já estudei', d: 'Sessões concluídas, em andamento e as que têm cartões' },
    { id: 'novo', ic: '🌱', n: 'Repertório novo', d: 'As próximas sessões do curso, com apresentação das palavras' },
    { id: 'erros', ic: '🩹', n: 'Meus erros', d: 'Itens que você errou no jogo ou no caderno de erros' },
    { id: 'cenario', ic: '🗺️', n: 'Lugares e situações', d: 'Restaurante, aeroporto, hospital…: frases e palavras de sobrevivência' },
    { id: 'modulo', ic: '🧱', n: 'Um módulo', d: 'Escolha o módulo' },
    { id: 'tudo', ic: '🌎', n: 'Tudo do curso', d: 'Todas as sessões, inclusive as futuras' }
  ];

  /* escolhas desta visita ao jogo: ficam enquanto você está no jogo e voltam ao padrão quando você sai e volta */
  const ST = { types: null, mod: '', cen: null, cap: { ouvir: 0, falar: 0 } };
  /* "Posso ouvir" / "Posso falar": 0 = neutro · 1 = posso (marca os tipos que usam esse recurso) · 2 = não posso (vermelho: tipos bloqueados) */
  const CAPT = { ouvir: ['ouvir', 'ditado'], falar: ['falar'] };
  const blocked = id => Object.keys(CAPT).some(k => ST.cap[k] === 2 && CAPT[k].includes(id));
  /* cenários (lugares e situações): vêm de material/cenarios.js */
  const CENS = () => Array.isArray(window.CURSO_CENARIOS) ? window.CURSO_CENARIOS.filter(c => c && c.id && Array.isArray(c.itens) && c.itens.length) : [];
  const cenSel = () => { if (!ST.cen) ST.cen = new Set(CENS().slice(0, 1).map(c => c.id)); return ST.cen; };
  const defTypes = () => new Set(TYPES.filter(t => t.id !== 'falar' && (!t.audio || AUDIO_OK) && !blocked(t.id)).map(t => t.id));
  const typesNow = () => { if (!ST.types) ST.types = defTypes(); return ST.types; };
  const src = () => S.settings.gameSrc || 'estudado';
  const roundN = () => [6, 10, 15].includes(+S.settings.gameN) ? +S.settings.gameN : 10;

  /* ───────────── som (gerado na hora; sem trilha sonora) ───────────── */
  const Snd = (() => {
    let ac = null;
    const ok = () => S.settings.gameSound !== false;
    const ctx = () => { if (ac === null) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = false; } } if (ac && ac.state === 'suspended') ac.resume().catch(() => { }); return ac; };
    function tone(f, t, d, type, vol, to) {
      const a = ctx(); if (!a) return; const T = a.currentTime + t, o = a.createOscillator(), g = a.createGain();
      o.type = type || 'sine'; o.frequency.setValueAtTime(f, T); if (to) o.frequency.exponentialRampToValueAtTime(to, T + d);
      g.gain.setValueAtTime(0.0001, T); g.gain.exponentialRampToValueAtTime(vol || 0.16, T + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, T + d);
      o.connect(g); g.connect(a.destination); o.start(T); o.stop(T + d + 0.05);
    }
    const P = {
      start: () => { tone(392, 0, .09, 'triangle', .14); tone(523, .08, .09, 'triangle', .14); tone(784, .16, .18, 'triangle', .14); },
      tap: () => tone(560, 0, .05, 'triangle', .07),
      pick: () => tone(700, 0, .06, 'sine', .09),
      correct: () => { tone(659, 0, .12, 'triangle', .2); tone(988, .09, .26, 'triangle', .2); tone(1319, .09, .26, 'sine', .05); },
      wrong: () => { tone(220, 0, .16, 'triangle', .2, 165); tone(165, .15, .3, 'triangle', .2, 110); tone(110, .15, .3, 'square', .03); },
      match: () => { tone(880, 0, .08, 'triangle', .16); tone(1175, .07, .16, 'triangle', .14); },
      miss: () => tone(190, 0, .14, 'triangle', .16, 140),
      combo: n => { const b = [523, 659, 784, 1047, 1319]; b.slice(0, Math.min(5, 2 + Math.floor(n / 5))).forEach((f, i) => tone(f, i * .07, .14, 'triangle', .14)); },
      done: () => { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * .11, .22, 'triangle', .17)); tone(1047, .46, .5, 'sine', .14); tone(1319, .46, .5, 'sine', .07); },
      sad: () => { tone(330, 0, .2, 'triangle', .13, 262); tone(262, .2, .4, 'triangle', .13, 196); },
      level: () => { [392, 523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * .08, .16, 'triangle', .15)); },
      coin: () => { tone(1319, 0, .07, 'square', .08); tone(1760, .07, .22, 'square', .08); },
      badge: () => { [784, 988, 1175].forEach((f, i) => tone(f, i * .1, .2, 'sine', .16)); },
      chest: () => { [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => tone(f, i * .08, .15, 'triangle', .14)); },
      pop: () => tone(300, 0, .07, 'sine', .12, 600)
    };
    return { play(n, a) { if (!ok()) return; try { P[n](a); } catch (e) { } }, ok };
  })();

  /* os avisos do app (nível, meta do dia, conquista) ganham som enquanto o jogo está aberto */
  const toast0 = EN.toast;
  EN.toast = m => { toast0(m); if (!ov || ov.hidden) return; const s = String(m || ''); if (/^⭐ Nível/.test(s)) Snd.play('level'); else if (/^🏅/.test(s)) Snd.play('badge'); else if (/^🔥 Meta/.test(s)) Snd.play('coin'); };

  /* ───────────── mascote (desenho próprio) ───────────── */
  function mascot(mood, px) {
    const m = mood || 'happy';
    const eyes = {
      happy: '<circle cx="47" cy="50" r="9" fill="#fff"/><circle cx="73" cy="50" r="9" fill="#fff"/><circle cx="49" cy="51" r="4.6" fill="#2b2540"/><circle cx="71" cy="51" r="4.6" fill="#2b2540"/><circle cx="50.6" cy="49.2" r="1.6" fill="#fff"/><circle cx="72.6" cy="49.2" r="1.6" fill="#fff"/>',
      cheer: '<path d="M38 53 Q47 40 56 53" fill="none" stroke="#2b2540" stroke-width="4" stroke-linecap="round"/><path d="M64 53 Q73 40 82 53" fill="none" stroke="#2b2540" stroke-width="4" stroke-linecap="round"/>',
      sad: '<circle cx="47" cy="52" r="9" fill="#fff"/><circle cx="73" cy="52" r="9" fill="#fff"/><circle cx="47.5" cy="55" r="4.6" fill="#2b2540"/><circle cx="72.5" cy="55" r="4.6" fill="#2b2540"/><path d="M36 41 L55 46" stroke="#2b2540" stroke-width="3" stroke-linecap="round"/><path d="M84 41 L65 46" stroke="#2b2540" stroke-width="3" stroke-linecap="round"/><path d="M42 64 q-3 7 0 10 q3 -3 0 -10z" fill="#7FC4FF"/>',
      think: '<circle cx="47" cy="50" r="9" fill="#fff"/><circle cx="73" cy="50" r="9" fill="#fff"/><circle cx="52" cy="47" r="4.6" fill="#2b2540"/><circle cx="78" cy="47" r="4.6" fill="#2b2540"/><path d="M38 38 Q47 33 56 38" fill="none" stroke="#2b2540" stroke-width="3" stroke-linecap="round"/>',
      sleep: '<path d="M38 52 Q47 58 56 52" fill="none" stroke="#2b2540" stroke-width="4" stroke-linecap="round"/><path d="M64 52 Q73 58 82 52" fill="none" stroke="#2b2540" stroke-width="4" stroke-linecap="round"/>'
    }[m] || '';
    const up = m === 'cheer';
    const wings = up
      ? '<path d="M26 66 Q6 50 12 32 Q30 42 35 62Z" fill="#3B9896"/><path d="M94 66 Q114 50 108 32 Q90 42 85 62Z" fill="#3B9896"/>'
      : '<path d="M27 68 Q11 78 19 98 Q34 92 37 74Z" fill="#3B9896"/><path d="M93 68 Q109 78 101 98 Q86 92 83 74Z" fill="#3B9896"/>';
    const beak = (m === 'cheer')
      ? '<path d="M51 60 Q60 51 69 60 Q60 80 51 60Z" fill="#E7A94A"/><ellipse cx="60" cy="68" rx="5.5" ry="4.5" fill="#D9545D"/>'
      : m === 'sad' ? '<path d="M52 63 Q60 57 68 63 Q60 71 52 63Z" fill="#E7A94A"/><path d="M54 70 Q60 66 66 70" fill="none" stroke="#C98A2E" stroke-width="2" stroke-linecap="round"/>'
        : '<path d="M52 59 Q60 53 68 59 Q60 74 52 59Z" fill="#E7A94A"/><path d="M54 62 Q60 67 66 62" fill="none" stroke="#C98A2E" stroke-width="1.6" stroke-linecap="round"/>';
    const extra = m === 'sleep' ? '<text x="88" y="34" font-size="14" font-weight="800" fill="#7C7794">z</text><text x="98" y="22" font-size="11" font-weight="800" fill="#7C7794">z</text>' : '';
    return `<svg class="gm-mascot" viewBox="0 0 120 120" width="${px || 96}" height="${px || 96}" role="img" aria-label="Tico, o mascote">` +
      '<ellipse cx="60" cy="112" rx="26" ry="4" fill="rgba(0,0,0,.12)"/><ellipse cx="46" cy="106" rx="9" ry="4" fill="#E7A94A"/><ellipse cx="74" cy="106" rx="9" ry="4" fill="#E7A94A"/>' +
      wings + '<ellipse cx="60" cy="68" rx="37" ry="38" fill="#4FB0AE"/><ellipse cx="60" cy="84" rx="23" ry="21" fill="#FFEFC9"/>' +
      '<path d="M50 30 Q46 10 56 18 Q58 4 62 17 Q70 8 70 30Z" fill="#E97B73"/><path d="M58 28 Q57 16 61 22 Q64 14 66 28Z" fill="#E7A94A"/>' +
      '<circle cx="37" cy="64" r="5.5" fill="#FF9FB0" opacity=".55"/><circle cx="83" cy="64" r="5.5" fill="#FF9FB0" opacity=".55"/>' + eyes + beak + extra + '</svg>';
  }

  /* ───────────── texto: comparação de respostas ───────────── */
  const CONTR = [["i'm", 'i am'], ["you're", 'you are'], ["he's", 'he is'], ["she's", 'she is'], ["it's", 'it is'], ["we're", 'we are'], ["they're", 'they are'], ["isn't", 'is not'], ["aren't", 'are not'], ["doesn't", 'does not'], ["don't", 'do not'], ["what's", 'what is'], ["where's", 'where is'], ["can't", 'can not'], ["won't", 'will not'], ["there's", 'there is'], ["that's", 'that is'], ["let's", 'let us']];
  const canon = s => { let t = C.strip(plain(String(s == null ? '' : s))); for (const [a, b] of CONTR) t = t.split(a).join(b); return t; };
  const tokens = s => String(s).trim().split(/\s+/).filter(Boolean);
  const baseKey = s => C.key(s).replace(/^(?:a|an|the|to|um|uma|o|os|as|meu|minha)\s+/, '');
  function lev(a, b) {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let p = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) { const c = [i]; for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = c; }
    return p[n];
  }
  const hit = (v, acc) => { const c = canon(v); return !!c && [].concat(acc).some(a => canon(a) === c); };
  const near = (v, acc) => { const c = canon(v); return !!c && [].concat(acc).some(a => { const x = canon(a); return x.length >= 4 && lev(c, x) <= (x.length >= 9 ? 2 : 1); }); };

  /* ───────────── conteúdo: banco de itens ───────────── */
  let POOL = null;
  function emojiOf(en) {
    const EM = window.CURSO_EMOJI || {};
    const b = C.key(en).replace(/^(?:a|an|the|my|your|his|her|our|their|to)\s+/, '');
    return EM[b] || EM[b.replace(/ies$/, 'y')] || EM[b.replace(/es$/, '')] || EM[b.replace(/s$/, '')] || null;
  }
  function buildPool() {
    if (POOL && POOL.n === C.ORDER.length) return POOL;
    const items = [], byId = new Map(), byKey = new Map(), ptCount = new Map(), exAns = [];
    const add = it => {
      if (byId.has(it.id)) return null;
      it.tk = it.en ? tokens(it.en).length : 0; it.emoji = it.emoji || (it.en ? emojiOf(it.en) : null);
      it.multi = /\s[·\/]\s/.test(it.en);   /* “a key / keys”, “red · blue”: só servem para escolher a tradução e parear */
      byId.set(it.id, it); items.push(it); if (it.en && !it.cen) byKey.set(C.key(it.en), it); return it;
    };
    const addSent = (en, pt, sid, mid) => { en = plain(en); const k = C.key(en); if (!k || byKey.has(k)) return; add({ id: 't:' + k, kind: 'sent', en, pt: pt ? plain(pt) : '', pron: '', sid, mid }); };
    C.ORDER.forEach(sid => {
      const { s, m } = C.SES[sid];
      (s.blocos || []).forEach(b => {
        if (b.t === 'vocab') b.items.forEach(([n, en, pr, pt]) => { add({ id: sid + '#' + n, kind: 'vocab', en: plain(en), pt: plain(pt), pron: pr || '', sid, mid: m.id }); });
      });
    });
    C.ORDER.forEach(sid => {
      const { s, m } = C.SES[sid];
      (s.blocos || []).forEach(b => {
        if (b.t === 'listen') b.frases.forEach(f => addSent(f[0], f[1], sid, m.id));
        else if (b.t === 'reading') b.sents.forEach(f => addSent(f[0], f[1], sid, m.id));
        else if (b.t === 'example') b.lines.forEach(l => addSent(l[1], l[2], sid, m.id));
        else if (b.t === 'ex' && !b.teste) b.items.forEach((it, i) => {
          if (it.say && it.a) { addSent(it.say, '', sid, m.id); return; }
          const one = it.q && it.q.includes('___') && (it.q.match(/___/g) || []).length === 1;
          if (it.opts && (one || /\([^)]*\/[^)]*\)/.test(it.q))) {
            const acc = [].concat(it.a);
            add({ id: 'x:' + C.iid(b, i), kind: 'ex', en: '', pt: '', pron: '', sid, mid: m.id, ex: { q: one ? it.q : it.q.replace(/\([^)]*\/[^)]*\)/, '___'), mode: 'choice', opts: it.opts.slice(), acc, why: it.why || '', ref: it.ref || b.ref || '', blk: b.id } });
          } else if (!it.opts && !it.sub && one && Array.isArray(it.a) && it.a.length === 1) {
            const acc = [].concat(it.a[0]).filter(Boolean); if (!acc.length) return;
            add({ id: 'x:' + C.iid(b, i), kind: 'ex', en: '', pt: '', pron: '', sid, mid: m.id, ex: { q: it.q, mode: 'blank', acc, why: it.why || '', ref: it.ref || b.ref || '', blk: b.id } });
            exAns.push({ blk: b.id, a: acc[0], tk: tokens(acc[0]).length });
          }
        });
      });
    });
    /* palavras soltas do glossário que têm figurinha (módulo a módulo) */
    const EM = window.CURSO_EMOJI || {};
    C.course && C.course.modulos.forEach(m => String(m.gloss || '').split(';').forEach(p => {
      const i = p.indexOf('='); if (i < 1) return; const w = p.slice(0, i).trim().toLowerCase(), pt = p.slice(i + 1).trim();
      if (!EM[w] || byKey.has(C.key(w)) || byKey.has(C.key('a ' + w)) || byKey.has(C.key('an ' + w)) || byKey.has(C.key('to ' + w))) return;
      add({ id: 'g:' + w, kind: 'gloss', en: w, pt, pron: C.PRON && C.PRON.get(C.key(w)) || '', sid: null, mid: m.id });
    }));
    /* lugares e situações (material/cenarios.js): não entram nas outras origens, só em "Lugares e situações" e em "Meus erros" */
    CENS().forEach(c => c.itens.forEach((r, i) => {
      const en = plain(r[0] || ''), pt = plain(r[2] || ''); if (!en || !pt) return;
      add({ id: 'c:' + c.id + ':' + i, kind: tokens(en).length > 3 ? 'sent' : 'vocab', en, pt, pron: r[1] || '', emoji: r[3] || null, sid: null, mid: 'cen:' + c.id, cen: c.id });
    }));
    items.forEach(it => { if (it.pt) { const k = C.key(it.pt); ptCount.set(k, (ptCount.get(k) || 0) + 1); } });
    POOL = { n: C.ORDER.length, items, byId, byKey, ptCount, exAns };
    return POOL;
  }

  /* quais sessões "já estudei" / "novas" */
  function studiedSids() {
    const set = new Set(C.ORDER.filter(sid => S.done[sid]));
    if (S.last && C.SES[S.last]) set.add(S.last);
    Object.keys(S.srs.cards).forEach(id => { const sid = id.split('#')[0]; if (C.SES[sid]) set.add(sid); });
    Object.keys(S.pos || {}).forEach(sid => { if (C.SES[sid]) set.add(sid); });
    if (!set.size && C.ORDER[0]) set.add(C.ORDER[0]);
    return set;
  }
  function nextSids() {
    const open = C.ORDER.filter(sid => !S.done[sid]);
    return (open.length ? open : C.ORDER.slice(-2)).slice(0, 2);
  }
  const errSetNow = () => new Set(C.errorList().map(id => 'x:' + id));
  const isWeak = (it, es) => { const w = G().weak[it.id]; return w ? !w.ok : es.has(it.id); };
  function poolFor(source, mod) {
    const all = buildPool().items;
    if (source === 'tudo') return all.filter(i => !i.cen);
    if (source === 'cenario') { const sel = cenSel(); return all.filter(i => i.cen && sel.has(i.cen)); }
    if (source === 'modulo') return all.filter(i => i.mid === mod);
    if (source === 'novo') { const s = new Set(nextSids()); return all.filter(i => i.sid && s.has(i.sid)); }
    if (source === 'erros') { const es = errSetNow(); return all.filter(i => isWeak(i, es)); }
    const s = studiedSids(), mods = new Set(Array.from(s).map(sid => C.SES[sid].m.id));
    return all.filter(i => i.sid ? s.has(i.sid) : mods.has(i.mid));
  }

  /* ───────────── o que cada tipo precisa do item ───────────── */
  const FUNC = {
    be: ['am', 'is', 'are'], bep: ['was', 'were'], aux: ['do', 'does', 'did', "don't", "doesn't", 'can', 'will'], hv: ['have', 'has'],
    pron: ['he', 'she', 'it', 'we', 'they', 'i', 'you'], poss: ['my', 'your', 'his', 'her', 'their', 'our'], prep: ['in', 'on', 'at'],
    wh: ['what', 'where', 'when', 'who', 'how', 'why'], dem: ['this', 'that', 'these', 'those']
  };
  const FUNC_OF = {}; Object.keys(FUNC).forEach(k => FUNC[k].forEach(w => { FUNC_OF[w] = k; }));
  const FILL = ['is', 'are', 'am', 'do', 'does', 'can', 'will', 'have', 'has', 'was', 'in', 'on', 'at', 'he', 'she', 'it', 'we', 'they', 'my', 'your'];
  function clozeInfo(it) {
    if (it._cz !== undefined) return it._cz;
    const out = [];
    tokens(it.en).forEach((w, i) => {
      const b = w.replace(/[^A-Za-z'’]/g, ''); if (b.length < 2 || /['’]/.test(b)) return; const lw = b.toLowerCase();
      if (FUNC_OF[lw]) out.push({ i, w: b, lw, func: true });
      else if (C.GL.has(lw) && lw.length >= 3 && !/^(?:the|and|but|for|with|from|too|also)$/.test(lw)) out.push({ i, w: b, lw, func: false });
    });
    it._cz = out; return out;
  }
  const can = {
    lacunas: it => !!it.ex || (!it.multi && it.tk >= 4 && !!it.pt && clozeInfo(it).length > 0),
    parear: it => it.tk > 0 && it.tk <= 4 && !!it.pt && it.kind !== 'ex',
    traduzir: it => !!it.pt && it.tk > 0,
    ouvir: it => AUDIO_OK && !it.multi && it.tk > 0 && it.tk <= 9,
    ditado: it => AUDIO_OK && !it.multi && it.tk > 0 && it.tk <= 10,
    montar: it => !!it.pt && !it.multi && it.tk >= 3 && it.tk <= 11,
    imagem: it => !!it.emoji && it.tk > 0,
    digitar: it => !!it.pt && !it.multi && it.tk > 0 && it.tk <= 6,
    falar: it => !it.multi && it.tk > 0 && it.tk <= 10
  };
  const canAny = (it, types) => Array.from(types).some(t => can[t] && can[t](it));

  /* ───────────── sorteio de distratores ───────────── */
  function distract(it, field, k, pool, filter) {
    const P = buildPool(), me = baseKey(it[field]), seen = new Set([me]), out = [];
    const same = x => !filter || filter(x);
    for (const arr of [pool, P.items.filter(x => x.mid === it.mid), P.items]) {
      const cand = arr.filter(x => x !== it && x[field] && same(x)).map(x => [x, Math.abs(x[field].length - it[field].length) + Math.random() * 7]).sort((a, b) => a[1] - b[1]);
      for (const [x] of cand) { const kx = baseKey(x[field]); if (!kx || seen.has(kx)) continue; seen.add(kx); out.push(x); if (out.length >= k) return out; }
    }
    return out;
  }
  const isWordish = x => x.tk > 0 && x.tk < 4;

  /* ───────────── construtores das perguntas ───────────── */
  const B = {
    traduzir(it, ctx) {
      const dir = (it.pt && it.tk && Math.random() < .5) ? 'pt2en' : 'en2pt', f = dir === 'en2pt' ? 'pt' : 'en';
      const ds = distract(it, f, 3, ctx.pool, x => !!x[f] && x.tk > 0 && isWordish(x) === isWordish(it));
      if (ds.length < 2) return null;
      return { type: 'traduzir', item: it, dir, opts: shuffle([{ t: it[f], ok: true }].concat(ds.map(x => ({ t: x[f], ok: false })))), sel: -1 };
    },
    ouvir(it, ctx) {
      const ds = distract(it, 'en', 3, ctx.pool, x => x.tk > 0 && x.tk <= 10 && isWordish(x) === isWordish(it));
      if (ds.length < 2) return null;
      return { type: 'ouvir', item: it, opts: shuffle([{ t: it.en, ok: true }].concat(ds.map(x => ({ t: x.en, ok: false })))), sel: -1, say: it.en };
    },
    ditado(it) { return { type: 'ditado', item: it, say: it.en, acc: [it.en], val: '' }; },
    digitar(it) {
      const P = buildPool(), k = C.key(it.pt), acc = [];
      P.items.forEach(x => { if (x.pt && C.key(x.pt) === k && x.en) { acc.push(x.en); const b = x.en.replace(/^(?:a|an|the|to)\s+/i, ''); if (b !== x.en) acc.push(b); } });
      return { type: 'digitar', item: it, acc, val: '' };
    },
    montar(it, ctx) {
      const words = tokens(it.en).map((w, i, a) => (i === a.length - 1 ? w.replace(/[.!?…]+$/, '') : w)).filter(Boolean);
      if (words.length < 3) return null;
      const have = new Set(words.map(w => w.toLowerCase())), extra = [];
      const src = shuffle(buildPool().items.filter(x => x !== it && x.tk >= 2 && x.en && (ctx.ps.has(x) || x.mid === it.mid)));
      for (const x of src) {
        const t = tokens(x.en); const j = rnd(t.length); let w = t[j].replace(/[.,!?…]+$/, '');
        if (!/^[A-Za-z']+$/.test(w)) continue;
        if (j === 0 && w !== 'I') w = w.toLowerCase();
        if (have.has(w.toLowerCase())) continue; have.add(w.toLowerCase()); extra.push(w); if (extra.length >= (words.length >= 5 ? 2 : 1)) break;
      }
      let tiles = words.map((t, i) => ({ id: i, t })).concat(extra.map((t, i) => ({ id: 100 + i, t, extra: true })));
      let tries = 0; do { tiles = shuffle(tiles); tries++; } while (tries < 6 && tiles.filter(x => !x.extra).every((x, i) => x.id === i));
      return { type: 'montar', item: it, tiles, chosen: [], words };
    },
    imagem(it, ctx) {
      const P = buildPool(), mode = Math.random() < .5 ? 'e2w' : 'w2e';
      const used = new Set([it.emoji]), baseOf = x => baseKey(x.en);
      const cand = P.items.filter(x => x !== it && x.emoji && !used.has(x.emoji) && baseOf(x) !== baseOf(it)).map(x => [x, (ctx.ps.has(x) ? 0 : 1) + Math.random() * 1.2]).sort((a, b) => a[1] - b[1]).map(x => x[0]);
      const ds = []; for (const x of cand) { if (used.has(x.emoji)) continue; used.add(x.emoji); ds.push(x); if (ds.length >= 3) break; }
      if (ds.length < 2) return null;
      const opts = shuffle([{ t: mode === 'e2w' ? it.en : it.emoji, ok: true }].concat(ds.map(x => ({ t: mode === 'e2w' ? x.en : x.emoji, ok: false }))));
      return { type: 'imagem', item: it, mode, opts, sel: -1 };
    },
    falar(it) { return { type: 'falar', item: it, say: it.en, state: 'idle', heard: '', score: 0, self: null }; },
    parear(it, ctx) {
      const P = buildPool(), ok = x => can.parear(x) && x !== it, pick = [it], keys = new Set([baseKey(it.pt), baseKey(it.en)]);
      for (const arr of [ctx.pool, P.items.filter(x => x.mid === it.mid), P.items]) {
        for (const x of shuffle(arr.filter(ok))) {
          const a = baseKey(x.pt), b = baseKey(x.en); if (keys.has(a) || keys.has(b)) continue;
          keys.add(a); keys.add(b); pick.push(x); if (pick.length >= 5) break;
        }
        if (pick.length >= 5) break;
      }
      if (pick.length < 4) return null;
      return { type: 'parear', item: it, pairs: pick, left: shuffle(pick.map((_, i) => i)), right: shuffle(pick.map((_, i) => i)), done: new Set(), selL: -1, selR: -1, miss: 0, missed: new Set(), wrongL: -1, wrongR: -1 };
    },
    lacunas(it, ctx) {
      if (it.ex) {
        const x = it.ex; let opts;
        if (x.mode === 'choice') opts = shuffle(x.opts);
        else {
          const P = buildPool(), own = x.acc[0], bad = new Set(x.acc.map(canon)), ds = [];
          const tk = tokens(own).length;
          const lower = /^[a-z]/.test(own), sameCase = e => /^[a-z]/.test(e.a) === lower;   /* não deixa a maiúscula entregar a resposta */
          const sameBlk = shuffle(P.exAns.filter(e => e.blk === x.blk && sameCase(e))), anyTk = shuffle(P.exAns.filter(e => e.tk === tk && sameCase(e)));
          for (const e of sameBlk.concat(anyTk)) { const c = canon(e.a); if (bad.has(c)) continue; bad.add(c); ds.push(e.a); if (ds.length >= 3) break; }
          if (ds.length < 2) return null;
          opts = shuffle([own].concat(ds));
        }
        return { type: 'lacunas', item: it, text: x.q, pt: '', opts, acc: x.acc, sel: -1, why: x.why, ref: x.ref, full: x.q.replace('___', x.acc[0]) };
      }
      const cz = clozeInfo(it); if (!cz.length) return null;
      const fn = cz.filter(c => c.func), ct = cz.filter(c => !c.func), pickC = ((Math.random() < .5 && fn.length) || !ct.length) ? sample(fn, 1)[0] : sample(ct, 1)[0];
      if (!pickC) return null;
      const tk = tokens(it.en); const hidden = tk[pickC.i]; const bare = pickC.w;
      let ds = [];
      if (pickC.func) {
        const cls = FUNC[FUNC_OF[pickC.lw]].filter(w => w !== pickC.lw), fill = FILL.filter(w => w !== pickC.lw && !cls.includes(w) && FUNC_OF[w] !== FUNC_OF[pickC.lw]);
        ds = sample(cls, 3); if (ds.length < 3) ds = ds.concat(sample(fill, 3 - ds.length));
      } else {
        const sfx = w => (/ing$/.test(w) ? 'ing' : /ed$/.test(w) ? 'ed' : /s$/.test(w) ? 's' : '');
        const words = Array.from(C.GL.keys()).filter(w => /^[a-z]{3,}$/.test(w) && !FUNC_OF[w] && w !== pickC.lw && sfx(w) === sfx(pickC.lw) && !it.en.toLowerCase().includes(w) && !/^(?:the|and|but|for|with|from|too|also|not)$/.test(w));
        ds = words.map(w => [w, Math.abs(w.length - pickC.lw.length) + Math.random() * 4]).sort((a, b) => a[1] - b[1]).slice(0, 3).map(x => x[0]);
      }
      if (ds.length < 2) return null;
      const cap = bare[0] === bare[0].toUpperCase() && pickC.i === 0;
      const optText = w => (cap ? w[0].toUpperCase() + w.slice(1) : (pickC.lw === 'i' ? w : w));
      const text = tk.map((w, i) => (i === pickC.i ? w.replace(bare, '___') : w)).join(' ');
      return { type: 'lacunas', item: it, text, pt: it.pt, opts: shuffle([bare].concat(ds.map(optText))), acc: [bare], sel: -1, why: '', ref: '', full: it.en };
    }
  };

  /* ───────────── estado da rodada ───────────── */
  let ov = null, L = null, rec = null;
  const dayNew = () => ({ k: today(), correct: 0, rounds: 0, perfect: 0, combo: 0, newW: 0, audio: 0, xp: 0, types: {}, claimed: {}, chest: 0 });
  const D = () => { if (G().day.k !== today()) G().day = dayNew(); return G().day; };

  function gainGame(xp) {
    const d = D(), room = Math.max(0, CAP - d.xp), g = Math.min(xp, room);
    if (g > 0) { d.xp += g; G().stats.xpDay[today()] = (G().stats.xpDay[today()] || 0) + g; EN.gain(g, { silent: true }); }
    else if (xp > 0 && L && !L.capShown) { L.capShown = true; EN.toast('Você já ganhou o máximo de XP de rodadas hoje. Continue treinando: as palavras seguem ficando mais fortes!'); }
    return g;
  }
  const DUE = [0, 1, 2, 4, 8, 16];
  function touch(it, ok) {
    const g = G(), t = nowIso(), w = g.words[it.id] || (g.words[it.id] = { s: 0, n: 0, w: 0, at: '', due: today() });
    w.n++; if (ok) w.s = Math.min(5, w.s + 1); else { w.w++; w.s = Math.max(0, w.s - 2); }
    w.at = t; w.due = EN.addDays(today(), DUE[w.s]);
    if (!g.seen[it.id]) { g.seen[it.id] = t; D().newW++; }
    const wk = g.weak[it.id];
    if (!ok) g.weak[it.id] = { n: ((wk && wk.n) || 0) + 1, at: t, ok: 0 };
    else if (wk && !wk.ok) g.weak[it.id] = { n: wk.n, at: t, ok: 1 };
    else if (!wk && errSetNow().has(it.id)) g.weak[it.id] = { n: 0, at: t, ok: 1 };
    if (!ok && /#\d+$/.test(it.id)) lapseCard(it.id);
  }
  /* errou no jogo uma palavra que já é cartão do curso: ela volta para a fila de hoje (como "De novo") */
  function lapseCard(id) {
    const c = S.srs.cards[id]; if (!c || (c.due || '') <= today()) return;
    S.srs.cards[id] = Object.assign({}, c, { i: 0, due: today(), l: (c.l || 0) + 1, e: Math.max(1.3, (c.e || 2.5) - 0.2), at: nowIso() });
  }
  const masteredN = () => Object.values(G().words).filter(w => w.s >= 4).length;

  /* ───────────── missões do dia ───────────── */
  const MIS = {
    acertos: { t: g => `Acerte ${g} respostas`, g: 15, r: 10, get: d => d.correct, ic: '🎯' },
    rodadas: { t: g => `Conclua ${g} rodadas`, g: 2, r: 10, get: d => d.rounds, ic: '🔁' },
    combo: { t: g => `Faça ${g} acertos seguidos`, g: 7, r: 10, get: d => d.combo, ic: '🔥' },
    perfeita: { t: () => 'Conclua uma rodada perfeita', g: 1, r: 15, get: d => d.perfect, ic: '💯' },
    tipos: { t: g => `Jogue ${g} tipos de exercício diferentes`, g: 3, r: 10, get: d => Object.keys(d.types).length, ic: '🧩' },
    ouvir: { t: g => `Acerte ${g} exercícios de áudio`, g: 8, r: 10, get: d => d.audio, ic: '👂' },
    novas: { t: g => `Veja ${g} palavras novas`, g: 5, r: 10, get: d => d.newW, ic: '🌱' },
    cartoes: { t: g => `Revise ${g} cartões do curso`, g: 10, r: 10, get: () => (S.srs.stats[today()] || {}).r || 0, ic: '🃏', course: true, link: '#/cartoes', cta: 'Abrir os cartões' },
    sessao: { t: () => 'Conclua uma sessão do curso hoje', g: 1, r: 15, get: () => ((S.log[today()] || {}).ses || []).length, ic: '🎓', course: true, link: '#/', cta: 'Ir ao curso' }
  };
  function todaysMissions() {
    let h = 0; for (const ch of today()) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const r = () => { h = (h * 1664525 + 1013904223) >>> 0; return h / 4294967296; };
    const pickFrom = a => { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; };
    const game = pickFrom(Object.keys(MIS).filter(k => !MIS[k].course)).slice(0, 2), course = pickFrom(Object.keys(MIS).filter(k => MIS[k].course)).slice(0, 1);
    return game.concat(course);
  }
  const misProg = id => Math.min(MIS[id].g, MIS[id].get(D()));
  function claim(id, quiet) {
    const d = D(), m = MIS[id]; if (!m || d.claimed[id] || m.get(d) < m.g) return false;
    d.claimed[id] = 1; S.c.gMissions = (S.c.gMissions || 0) + 1; save();
    EN.gainOnce('gm-' + today() + '-' + id, m.r, { silent: true });
    if (!quiet) { Snd.play('coin'); EN.toast(`🎯 Missão cumprida: ${m.t(m.g)} · +${m.r} XP`); }
    const all = todaysMissions();
    if (all.every(x => d.claimed[x]) && !d.chest) { d.chest = 1; save(); EN.gainOnce('gm-chest-' + today(), 20, { silent: true }); setTimeout(() => { Snd.play('chest'); EN.confetti(); EN.toast('🎁 Baú do dia aberto: todas as missões! +20 XP'); }, quiet ? 0 : 900); }
    EN.checkBadges(); if (EN.onUpdate) EN.onUpdate();
    return true;
  }
  const claimGameMissions = () => todaysMissions().forEach(id => { if (!MIS[id].course) claim(id); });

  /* ───────────── conquistas do jogo ───────────── */
  [
    { id: 'g1', i: '🎮', n: 'Jogador', d: 'Conclua a primeira rodada', t: s => s.c.gRounds >= 1 },
    { id: 'g10', i: '🕹️', n: 'Dez rodadas', d: 'Conclua 10 rodadas', t: s => s.c.gRounds >= 10 },
    { id: 'g50', i: '🏟️', n: 'Cinquenta rodadas', d: 'Conclua 50 rodadas', t: s => s.c.gRounds >= 50 },
    { id: 'gperf', i: '💯', n: 'Rodada perfeita', d: 'Conclua uma rodada sem errar', t: s => s.c.gPerfect >= 1 },
    { id: 'gperf5', i: '🌟', n: 'Cinco perfeitas', d: 'Conclua 5 rodadas perfeitas', t: s => s.c.gPerfect >= 5 },
    { id: 'gcombo10', i: '🔥', n: 'Combo 10', d: '10 acertos seguidos', t: s => s.c.gCombo >= 10 },
    { id: 'gcombo20', i: '⚡', n: 'Combo 20', d: '20 acertos seguidos', t: s => s.c.gCombo >= 20 },
    { id: 'gok200', i: '🎯', n: '200 acertos', d: '200 acertos nas rodadas', t: s => s.c.gCorrect >= 200 },
    { id: 'gok1000', i: '🏆', n: '1000 acertos', d: '1000 acertos nas rodadas', t: s => s.c.gCorrect >= 1000 },
    { id: 'gtypes', i: '🧩', n: 'Eclético', d: 'Jogue 6 tipos de exercício diferentes', t: s => s.c.gTypes >= 6 },
    { id: 'gmast50', i: '📖', n: '50 palavras fortes', d: 'Deixe 50 palavras bem fixadas', t: s => s.c.gMastered >= 50 },
    { id: 'gmast150', i: '🧠', n: '150 palavras fortes', d: 'Deixe 150 palavras bem fixadas', t: s => s.c.gMastered >= 150 },
    { id: 'gmis7', i: '📜', n: 'Missões em dia', d: 'Cumpra 7 missões do dia', t: s => s.c.gMissions >= 7 },
    { id: 'gcen3', i: '🧳', n: 'Viajante', d: 'Pratique 3 lugares e situações (5 palavras de cada)', t: s => s.c.gCenX >= 3 },
    { id: 'gcen1', i: '🗺️', n: 'Cenário dominado', d: 'Deixe 80% de um lugar ou situação bem fixado', t: s => s.c.gCenM >= 1 },
    { id: 'gcen6', i: '🌍', n: 'Cidadão do mundo', d: 'Domine 6 lugares e situações', t: s => s.c.gCenM >= 6 }
  ].forEach(b => { if (!EN.BADGES.some(x => x.id === b.id)) EN.BADGES.push(b); });

  /* ───────────── planejamento da rodada ───────────── */
  function pickItems(pool, types, n, source) {
    const g = G(), t = today(), es = errSetNow();
    const sc = it => {
      const w = g.words[it.id]; let p = Math.random() * 1.3;
      if (!g.seen[it.id]) p += source === 'novo' || source === 'cenario' ? 2.6 : 1.2;
      if (isWeak(it, es)) p += 3;
      if (w) { p += (5 - w.s) * .45; if ((w.due || '') <= t) p += 1.2; else p -= 1.6; if ((w.at || '').slice(0, 10) === t) p -= 1; }
      return p;
    };
    const arr = pool.filter(it => canAny(it, types)).map(it => [it, sc(it)]).sort((a, b) => b[1] - a[1]);
    const out = [], max = source === 'novo' || source === 'cenario' ? 6 : 4; let nw = 0;
    for (const [it] of arr) { const isNew = !g.seen[it.id]; if (isNew && nw >= max) continue; if (isNew) nw++; out.push(it); if (out.length >= n) break; }
    if (out.length < n) for (const [it] of arr) { if (!out.includes(it)) { out.push(it); if (out.length >= n) break; } }
    return shuffle(out);
  }
  function pickType(it, pool) {
    const types = Array.from(typesNow()).filter(t => can[t](it));
    if (!types.length) return null;
    const used = L.used, last = L.lastType;
    let cand = types.filter(t => t !== last); if (!cand.length) cand = types;
    cand = cand.map(t => [t, (used[t] || 0) + Math.random() * 1.5]).sort((a, b) => a[1] - b[1]);
    return cand.map(x => x[0]);
  }
  function makeQ(slot) {
    const pool = L.pool, ps = L.ps || (L.ps = new Set(pool)); let it = slot.item;
    for (let attempt = 0; attempt < 6; attempt++) {
      const order = pickType(it, pool);
      if (order) for (const ty of order) { const q = B[ty](it, { pool, ps }); if (q) { q.slot = slot; return q; } }
      /* nenhum tipo escolhido serve para este item: troca por outro item da rodada que sirva */
      const alt = shuffle(pool.filter(x => x !== it && canAny(x, typesNow())))[0];
      if (!alt) break; it = alt; slot.item = alt;
    }
    /* último recurso: pergunta de tradução (sempre possível se houver tradução) */
    const any = buildPool().items.filter(x => x.pt && x.tk > 0 && !x.ex);
    for (const cand of shuffle([slot.item].concat(sample(pool.filter(x => x.pt && x.tk), 5), sample(any, 4)))) {
      const q = B.traduzir(cand, { pool, ps }); if (q) { q.slot = slot; slot.item = cand; return q; }
    }
    return null;
  }

  /* ───────────── tela do jogo ───────────── */
  const praise = ['Isso aí!', 'Perfeito!', 'Mandou bem!', 'Excelente!', 'Muito bem!', 'Correto!', 'Show!', 'Arrasou!'];
  const comfort = ['Quase! Vamos rever.', 'Errar faz parte: agora você sabe.', 'Boa tentativa! Olhe a resposta.', 'Sem problema, essa volta mais tarde.'];
  const sayBtns = (t, extra) => `<button class="gm-ib" data-gm="say" data-t="${esc(t)}" title="Ouvir" aria-label="Ouvir" ${extra || ''}>🔊</button><button class="gm-ib" data-gm="say" data-t="${esc(t)}" data-slow="1" title="Ouvir devagar" aria-label="Ouvir devagar">🐢</button>`;
  const speakSoon = (t, ms, slow) => { if (S.settings.gameSpeak === false || !t || !AUDIO_OK || (L && L.opts && L.opts.rapid)) return; const id = L && L.id; setTimeout(() => { if (L && L.id === id && !ov.hidden) C.speak(t, !!slow); }, ms == null ? 180 : ms); };
  const gapHTML = (q) => { const parts = q.text.split('___'); return esc(parts[0]) + `<span class="gm-gap ${q.sel >= 0 ? 'on' : ''}">${q.sel >= 0 ? esc(q.opts[q.sel]) : '&nbsp;'}</span>` + esc(parts.slice(1).join('___')); };
  const learnLine = it => it && it.en && it.pt ? `<div class="gm-learn"><b>${esc(it.en)}</b> = ${esc(it.pt)}${it.pron ? ` <small>(${esc(it.pron)})</small>` : ''} ${sayBtns(it.en)}</div>` : '';

  const typeAct = () => L && L.phase === 'ask' ? '<div class="gm-inact"><button class="gm-btn ghost" data-gm="idk">Não sei</button><button class="gm-btn pri" data-gm="check" id="gmCheck" disabled>Verificar</button></div>' : '';
  const isTyping = q => q && (q.type === 'ditado' || q.type === 'digitar');
  const R = {
    traduzir: q => `<h2 class="gm-q">${q.dir === 'en2pt' ? 'Como se diz em português?' : 'Como se diz em inglês?'}</h2><div class="gm-prompt">${q.dir === 'en2pt' && q.item.emoji ? `<span class="gm-emo">${q.item.emoji}</span>` : ''}<span class="gm-sent">${esc(q.dir === 'en2pt' ? q.item.en : q.item.pt)}</span>${q.dir === 'en2pt' ? sayBtns(q.item.en) : ''}</div>${optsHTML(q)}`,
    ouvir: q => `<h2 class="gm-q">Toque no que você ouviu</h2><div class="gm-prompt center"><button class="gm-big" data-gm="say" data-t="${esc(q.say)}" aria-label="Ouvir">🔊</button><button class="gm-big sm" data-gm="say" data-slow="1" data-t="${esc(q.say)}" aria-label="Ouvir devagar">🐢</button></div>${optsHTML(q)}`,
    /* nos exercícios de digitar o "Verificar" fica logo abaixo do campo (o teclado do celular cobriria o rodapé) */
    ditado: q => `<h2 class="gm-q">Escreva o que você ouviu</h2><div class="gm-prompt center"><button class="gm-big" data-gm="say" data-t="${esc(q.say)}" aria-label="Ouvir">🔊</button><button class="gm-big sm" data-gm="say" data-slow="1" data-t="${esc(q.say)}" aria-label="Ouvir devagar">🐢</button></div><input class="gm-in" id="gmIn" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Escreva em inglês" value="${esc(q.val)}">${typeAct()}`,
    digitar: q => `<h2 class="gm-q">Escreva em inglês</h2><div class="gm-prompt">${q.item.emoji ? `<span class="gm-emo">${q.item.emoji}</span>` : ''}<span class="gm-sent">${esc(q.item.pt)}</span></div><input class="gm-in" id="gmIn" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Escreva em inglês" value="${esc(q.val)}">${typeAct()}`,
    montar: q => {
      const chosen = q.chosen.map(id => q.tiles.find(t => t.id === id)), free = q.tiles.filter(t => !q.chosen.includes(t.id));
      return `<h2 class="gm-q">Monte a frase em inglês</h2><div class="gm-prompt"><span class="gm-sent">${esc(q.item.pt)}</span></div><div class="gm-ans">${chosen.map(t => `<button class="gm-tile" data-gm="untile" data-id="${t.id}">${esc(t.t)}</button>`).join('') || '<span class="gm-hint">Toque nas palavras abaixo</span>'}</div><div class="gm-bank">${q.tiles.map(t => q.chosen.includes(t.id) ? `<span class="gm-tile ghost">${esc(t.t)}</span>` : `<button class="gm-tile" data-gm="tile" data-id="${t.id}">${esc(t.t)}</button>`).join('')}</div>`;
    },
    lacunas: q => `<h2 class="gm-q">Complete a frase</h2><div class="gm-prompt col"><span class="gm-sent">${gapHTML(q)}</span>${q.pt ? `<span class="gm-pt">${esc(q.pt)}</span>` : ''}</div>${optsHTML(q, true)}`,
    imagem: q => q.mode === 'e2w'
      ? `<h2 class="gm-q">Que palavra combina com a figurinha?</h2><div class="gm-prompt center"><span class="gm-emo xl">${q.item.emoji}</span></div>${optsHTML(q)}`
      : `<h2 class="gm-q">Qual figurinha é “${esc(q.item.en.replace(/^(?:a|an|the|to)\s+/i, ''))}”?</h2><div class="gm-prompt center">${sayBtns(q.item.en)}</div><div class="gm-grid">${q.opts.map((o, i) => `<button class="gm-opt emo ${q.sel === i ? 'sel' : ''}" data-gm="opt" data-i="${i}"><span>${o.t}</span><kbd>${i + 1}</kbd></button>`).join('')}</div>`,
    falar: q => {
      const body = q.state === 'listening' ? '<div class="gm-mic on">🎤 Ouvindo… fale agora</div>'
        : q.state === 'error' || !SR ? `<div class="gm-hint">${SR ? 'Não consegui usar o microfone. ' : 'Este navegador não reconhece fala. '}Fale em voz alta e diga como foi:</div><div class="gm-self"><button class="gm-btn alt" data-gm="self" data-v="1">✔ Consegui repetir</button><button class="gm-btn alt" data-gm="self" data-v="0">✖ Ainda não</button></div>`
          : `<button class="gm-mic" data-gm="mic">🎤 ${q.heard ? 'Falar de novo' : 'Toque e fale'}</button>${q.heard ? `<div class="gm-heard">Entendi: <b>${esc(q.heard)}</b></div>` : ''}`;
      return `<h2 class="gm-q">Repita em voz alta</h2><div class="gm-prompt col"><span class="gm-sent">${esc(q.item.en)}</span>${q.item.pt ? `<span class="gm-pt">${esc(q.item.pt)}</span>` : ''}<span>${sayBtns(q.item.en)}</span></div>${body}`;
    },
    parear: q => `<h2 class="gm-q">Toque nos pares</h2><div class="gm-pairs"><div class="gm-col">${q.left.map(i => `<button class="gm-pair ${q.done.has(i) ? 'done' : ''} ${q.selL === i ? 'sel' : ''} ${q.wrongL === i ? 'bad' : ''}" data-gm="pl" data-i="${i}" ${q.done.has(i) ? 'disabled' : ''}>${esc(q.pairs[i].en)}</button>`).join('')}</div><div class="gm-col">${q.right.map(i => `<button class="gm-pair ${q.done.has(i) ? 'done' : ''} ${q.selR === i ? 'sel' : ''} ${q.wrongR === i ? 'bad' : ''}" data-gm="pr" data-i="${i}" ${q.done.has(i) ? 'disabled' : ''}>${esc(q.pairs[i].pt)}</button>`).join('')}</div></div>`
  };
  function optsHTML(q, tiles) {
    return `<div class="${tiles ? 'gm-tiles' : 'gm-opts'}">${q.opts.map((o, i) => { const t = typeof o === 'string' ? o : o.t; return `<button class="gm-opt ${tiles ? 'tile' : ''} ${q.sel === i ? 'sel' : ''}" data-gm="opt" data-i="${i}"><span>${esc(t)}</span><kbd>${i + 1}</kbd></button>`; }).join('')}</div>`;
  }

  function buildOv() {
    if (ov) return ov;
    ov = document.createElement('div'); ov.id = 'gmOv'; ov.className = 'gm-ov no-lookup'; ov.hidden = true; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', 'Jogar');
    ov.innerHTML = '<div class="gm-top"><button class="gm-x" data-gm="exit" aria-label="Sair da rodada" title="Sair (Esc)">✕</button><div class="gm-bar"><i></i></div><span class="gm-combo" hidden>🔥 <b>0</b></span><button class="gm-tb" data-gm="set" title="Mudar os tipos de exercício sem sair" aria-label="Tipos de exercício">⚙️</button><button class="gm-tb" data-gm="snd" id="gmSnd" title="Som ligado/desligado" aria-label="Som"></button></div><div class="gm-main"><div class="gm-stage" id="gmStage"></div></div><div class="gm-foot" id="gmFoot"></div><div class="gm-panel" id="gmPanel" hidden></div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', onClick);
    ov.addEventListener('input', e => { if (e.target.id === 'gmIn' && L && L.q) { L.q.val = e.target.value; setReady(!!e.target.value.trim()); } });
    ov.addEventListener('keydown', e => { if (e.target.id === 'gmIn' && e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); primary(); } });
    document.addEventListener('keydown', onKey);
    /* teclado do celular: a tela do jogo acompanha a área realmente visível (acima do teclado) e não "rola" */
    const vv = window.visualViewport;
    if (vv) { vv.addEventListener('resize', fitVV); vv.addEventListener('scroll', fitVV); }
    return ov;
  }
  function fitVV() {
    if (!ov || ov.hidden) return; const vv = window.visualViewport; if (!vv) return;
    ov.style.setProperty('--vvh', Math.round(vv.height) + 'px'); ov.style.setProperty('--vvt', Math.round(vv.offsetTop) + 'px');
    const a = document.activeElement;
    if (a && a.id === 'gmIn') setTimeout(() => { const b = $('#gmCheck', ov); (b || a).scrollIntoView({ block: 'nearest' }); }, 60);
  }
  function onKey(e) {
    if (!ov || ov.hidden || !L || e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.querySelector('#dlg[open]')) return;
    if (e.key === 'Escape') { e.preventDefault(); if (!$('#gmPanel').hidden) { closePanel(); return; } exitAsk(); return; }
    if (!$('#gmPanel').hidden) return;
    const typing = e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
    if (typing) return;
    if (e.key === 'Enter') { e.preventDefault(); primary(); return; }
    if (/^[1-9]$/.test(e.key) && L.q && L.q.opts && L.phase === 'ask') { const b = $(`[data-gm="opt"][data-i="${+e.key - 1}"]`, ov); if (b) b.click(); }
  }
  const stage = () => $('#gmStage', ov), foot = () => $('#gmFoot', ov);

  function drawTop() {
    const total = L.total || 1, pct = Math.round(L.done / total * 100);
    $('.gm-bar i', ov).style.width = pct + '%';
    const c = $('.gm-combo', ov); c.hidden = L.combo < 2; $('b', c).textContent = L.combo; c.classList.toggle('hot', L.combo >= 5);
    $('#gmSnd', ov).textContent = Snd.ok() ? '🔊' : '🔇';
  }
  function footAsk(canIdk) {
    foot().className = 'gm-foot'; foot().innerHTML = `<div class="gm-fi">${canIdk ? '<button class="gm-btn ghost" data-gm="idk">Não sei</button>' : '<span></span>'}<button class="gm-btn pri" data-gm="check" id="gmCheck" disabled>Verificar</button></div>`;
  }
  function setReady(on) { const b = $('#gmCheck', ov); if (b) b.disabled = !on; }
  function readyNow() {
    const q = L.q; if (!q) return false;
    switch (q.type) {
      case 'traduzir': case 'ouvir': case 'imagem': case 'lacunas': return q.sel >= 0;
      case 'ditado': case 'digitar': return !!(q.val || '').trim();
      case 'montar': return q.chosen.length > 0;
      case 'falar': return q.self !== null || q.heard !== '';
      default: return false;
    }
  }
  function drawQ(keepFocus) {
    const q = L.q; L.phase = L.phase === 'fb' ? 'fb' : 'ask';
    stage().innerHTML = `<div class="gm-card ${q.type} ${keepFocus ? 'still' : ''}">${R[q.type](q)}</div>`;   /* só a pergunta nova entra com animação */
    if (L.phase === 'ask' && isTyping(q)) { foot().className = 'gm-foot gone'; foot().innerHTML = ''; setReady(readyNow()); }
    else if (L.phase === 'ask' && q.type !== 'parear') { footAsk(true); setReady(readyNow()); }
    if (q.type === 'parear' && L.phase === 'ask') { foot().className = 'gm-foot'; foot().innerHTML = '<div class="gm-fi"><span class="gm-hint">Toque em uma palavra e depois na tradução dela</span></div>'; }
    const inp = $('#gmIn', ov); if (inp && !keepFocus) setTimeout(() => inp.focus(), 60);
  }

  function showIntro(it) {
    L.phase = 'intro'; L.q = null;
    stage().innerHTML = `<div class="gm-card intro"><div class="gm-new">✨ Palavra nova</div>${it.emoji ? `<div class="gm-emo xl">${it.emoji}</div>` : ''}<div class="gm-intro-en">${esc(it.en)}</div><div class="gm-intro-btns">${sayBtns(it.en)}</div>${it.pron ? `<div class="gm-intro-pr">${esc(it.pron)}</div>` : ''}<div class="gm-intro-pt">${esc(it.pt)}</div></div>`;
    foot().className = 'gm-foot'; foot().innerHTML = '<div class="gm-fi"><span></span><button class="gm-btn pri" data-gm="intro">Entendi</button></div>';
    Snd.play('pop'); speakSoon(it.en, 250);
  }

  function nextStep() {
    drawTop();
    if (!L.queue.length) { finish(); return; }
    const slot = L.queue[0];
    if (needIntro(slot.item)) { L.intros++; L.introduced.add(slot.item.id); showIntro(slot.item); return; }
    const q = makeQ(slot);
    if (!q) { L.queue.shift(); L.total = Math.max(1, L.total - 1); nextStep(); return; }
    L.q = q; L.phase = 'ask'; L.lastType = q.type; L.t0 = Date.now();
    drawQ(); drawTop();
    if (q.type === 'ouvir' || q.type === 'ditado') speakSoon(q.say, 320);
    else if (q.type === 'traduzir' && q.dir === 'en2pt') speakSoon(q.item.en, 320);
    else if (q.type === 'falar') speakSoon(q.item.en, 320);
    else if (q.type === 'imagem' && q.mode === 'w2e') speakSoon(q.item.en, 320);
  }
  function needIntro(it) {
    if (L.introduced.has(it.id) || L.intros >= 5 || G().seen[it.id] || !it.pt || !it.en || it.kind === 'ex' || it.tk > 6) return false;
    return L.source === 'novo' || L.source === 'cenario' || !!(it.sid && !L.studied.has(it.sid));
  }

  /* ── avaliar a resposta ── */
  function evaluate(q) {
    switch (q.type) {
      case 'traduzir': case 'ouvir': case 'imagem': { const o = q.opts[q.sel]; const right = q.opts.find(x => x.ok); return { ok: !!(o && o.ok), ans: right.t }; }
      case 'lacunas': { const v = q.opts[q.sel]; return { ok: hit(v, q.acc), ans: q.acc[0] }; }
      case 'ditado': return { ok: hit(q.val, q.acc), ans: q.acc[0], near: near(q.val, q.acc) };
      case 'digitar': return { ok: hit(q.val, q.acc), ans: q.item.en, near: near(q.val, q.acc) };
      case 'montar': { const mine = q.chosen.map(id => q.tiles.find(t => t.id === id).t).join(' '); return { ok: canon(mine) === canon(q.words.join(' ')), ans: q.item.en, mine }; }
      case 'falar': { if (q.self !== null) return { ok: !!q.self, ans: q.item.en, self: true }; const e = canon(q.item.en).split(' '), h = canon(q.heard).split(' '); const f = e.filter(w => h.includes(w)).length / Math.max(1, e.length); return { ok: f >= (e.length > 6 ? .7 : .85), ans: q.item.en, score: f }; }
    }
    return { ok: false, ans: '' };
  }
  function resolve(ok, res, o) {
    o = o || {};
    const q = L.q, slot = q.slot, first = slot.tries === 0, g = G(), d = D();
    slot.tries++; L.answered++;
    g.stats.types[q.type] = (g.stats.types[q.type] || 0) + 1; d.types[q.type] = (d.types[q.type] || 0) + 1;
    L.usedTypes.add(q.type); L.used[q.type] = (L.used[q.type] || 0) + 1;
    if (ok) {
      L.correct++; L.combo++; if (L.combo > L.best) L.best = L.combo;
      g.stats.correct++; d.correct++; S.c.gCorrect = (S.c.gCorrect || 0) + 1;
      if (AUDIO_TYPES.includes(q.type)) d.audio++;
      if (L.combo > d.combo) d.combo = L.combo; if (L.combo > g.stats.bestCombo) g.stats.bestCombo = L.combo; if (L.combo > (S.c.gCombo || 0)) S.c.gCombo = L.combo;
      const xp = (first ? 2 : 1) + (L.combo >= 5 ? 1 : 0); L.xp += gainGame(xp); L.lastXp = xp;
      if (L.combo >= 5 && L.combo % 5 === 0) Snd.play('combo', L.combo); else Snd.play('correct');
      L.done++;
    } else {
      L.wrong++; L.combo = 0; g.stats.wrong++; L.lastXp = 0; Snd.play('wrong');
      if (!L.missed.some(x => x.id === slot.item.id)) L.missed.push(slot.item);
      if (slot.tries < 2) L.queue.push(slot); else L.done++;   /* errou: volta no fim da rodada, uma vez */
    }
    L.queue.shift();
    if (q.type !== 'parear') touch(slot.item, ok);
    S.c.gTypes = Object.keys(g.stats.types).length; save();
    claimGameMissions(); EN.checkBadges(); drawTop();
  }
  function check(idk) {
    if (!L || L.phase !== 'ask' || !L.q) return;
    const q = L.q; if (!idk && !readyNow()) return;
    if (q.type === 'falar' && q.state === 'listening') return;
    const res = idk ? { ok: false, ans: answerOf(q), idk: true } : evaluate(q);
    resolve(res.ok, res); L.phase = 'fb';
    if (isTyping(q)) {
      const inp = $('#gmIn', ov); if (inp) { inp.blur(); inp.disabled = true; inp.classList.add(res.ok ? 'good' : 'bad'); }   /* fecha o teclado para o aviso de acerto/erro aparecer inteiro */
      const row = $('.gm-inact', ov); if (row) row.remove();
    }
    markOpts(q, res);
    showFb(q, res);
  }
  function answerOf(q) {
    switch (q.type) {
      case 'traduzir': case 'ouvir': case 'imagem': return q.opts.find(x => x.ok).t;
      case 'lacunas': return q.acc[0];
      case 'montar': case 'falar': case 'digitar': return q.item.en;
      case 'ditado': return q.acc[0];
    }
    return '';
  }
  function markOpts(q, res) {
    if (!q.opts) return;
    $$('.gm-opt', ov).forEach((b, i) => {
      const o = q.opts[i], right = typeof o === 'string' ? hit(o, q.acc) : o.ok;
      b.disabled = true; if (right) b.classList.add('good'); else if (i === q.sel) b.classList.add('bad');
    });
  }
  function fullSentence(q) { return q.type === 'lacunas' ? q.full : (q.item.en || ''); }
  function showFb(q, res) {
    const good = res.ok, it = q.item;
    let body = '';
    const lrn = q.type === 'parear' ? '' : learnLine(it);
    if (good) {
      const msg = praise[rnd(praise.length)];
      const sub = q.type === 'lacunas' && q.full ? esc(q.full) + ' ' + sayBtns(q.full) : (!lrn && res.ans && q.type !== 'traduzir' && q.type !== 'ouvir' && q.type !== 'imagem' ? esc(res.ans) : '');
      body = `<div class="gm-fb-h">${mascot('cheer', 54)}<div><b>${msg}</b>${L.combo >= 3 ? ` <span class="gm-chip">🔥 ${L.combo} seguidas</span>` : ''}${L.lastXp ? ` <span class="gm-chip xp">+${L.lastXp} XP</span>` : ''}${sub ? `<div class="gm-fb-s">${sub}</div>` : ''}</div></div>`;
    } else {
      const ans = q.type === 'lacunas' ? q.full : res.ans;
      let extra = '';
      if (q.type === 'digitar' || q.type === 'ditado') extra = res.idk ? '' : `<div class="gm-diff">Você escreveu: <s>${esc(q.val)}</s>${res.near ? ' <i>(quase! confira a grafia)</i>' : ''}</div>`;
      if (q.type === 'montar' && res.mine) extra = `<div class="gm-diff">Você montou: <s>${esc(res.mine)}</s></div>`;
      if (q.type === 'falar' && q.heard) extra = `<div class="gm-diff">Entendi: <s>${esc(q.heard)}</s></div>`;
      const why = q.type === 'lacunas' && q.why ? `<div class="gm-why">${C.md(q.why)}</div>` : '';
      body = `<div class="gm-fb-h">${mascot('sad', 54)}<div><b>${res.idk ? '“Não sei” é uma resposta honesta.' : comfort[rnd(comfort.length)]}</b><div class="gm-fb-t">Resposta correta:</div><div class="gm-fb-a">${esc(ans)}</div>${extra}${why}</div></div>`;
    }
    foot().className = 'gm-foot ' + (good ? 'good' : 'bad');
    foot().innerHTML = `<div class="gm-fi col">${body}${lrn}<button class="gm-btn ${good ? 'pri' : 'dng'}" data-gm="next" id="gmNext">Continuar</button></div>`;
    const sp = q.type === 'ditado' || q.type === 'falar' ? '' : fullSentence(q) || it.en;
    if (good && sp && q.type !== 'ouvir' && q.type !== 'ditado' && q.type !== 'falar' && q.type !== 'parear') speakSoon(sp, 420);
    if (!good && q.type !== 'parear') speakSoon(q.type === 'lacunas' ? q.full : (it.en || ''), 520);
    setTimeout(() => { const b = $('#gmNext', ov); if (b) b.focus(); }, 30);
  }

  /* ── pareamento ── */
  function pairTap(side, i) {
    const q = L.q; if (!q || q.type !== 'parear' || L.phase !== 'ask' || q.done.has(i)) return;
    q.wrongL = q.wrongR = -1;
    if (side === 'L') { q.selL = q.selL === i ? -1 : i; if (q.selL >= 0) { Snd.play('tap'); if (S.settings.gameSpeak !== false && AUDIO_OK) C.speak(q.pairs[i].en, false); } }
    else { q.selR = q.selR === i ? -1 : i; if (q.selR >= 0) Snd.play('tap'); }
    if (q.selL >= 0 && q.selR >= 0) {
      if (q.selL === q.selR) {
        q.done.add(q.selL); q.selL = q.selR = -1; Snd.play('match');
        if (q.done.size === q.pairs.length) { pairFinish(); return; }
      } else {
        q.miss++; q.missed.add(q.selL); q.missed.add(q.selR); q.wrongL = q.selL; q.wrongR = q.selR; q.selL = q.selR = -1; Snd.play('miss');
        L.combo = 0; drawTop();
        setTimeout(() => { if (L && L.q === q) { q.wrongL = q.wrongR = -1; if (L.phase === 'ask') drawQ(true); } }, 480);
      }
    }
    drawQ(true);
  }
  function pairFinish() {
    const q = L.q, ok = q.miss === 0;
    q.pairs.forEach((p, i) => touch(p, !q.missed.has(i)));
    q.pairs.forEach((p, i) => { if (q.missed.has(i) && !L.missed.some(x => x.id === p.id)) L.missed.push(p); });
    /* um pareamento sempre vale: acerto limpo conta combo; com erros só conta como parcial (sem repetir) */
    const slot = q.slot, g = G(), d = D(); slot.tries++; L.answered++;
    g.stats.types.parear = (g.stats.types.parear || 0) + 1; d.types.parear = (d.types.parear || 0) + 1; L.usedTypes.add('parear'); L.used.parear = (L.used.parear || 0) + 1;
    if (ok) {
      L.correct++; L.combo++; if (L.combo > L.best) L.best = L.combo; g.stats.correct++; d.correct++; S.c.gCorrect = (S.c.gCorrect || 0) + 1;
      if (L.combo > d.combo) d.combo = L.combo; if (L.combo > g.stats.bestCombo) g.stats.bestCombo = L.combo; if (L.combo > (S.c.gCombo || 0)) S.c.gCombo = L.combo;
      const xp = 2 + (L.combo >= 5 ? 1 : 0); L.xp += gainGame(xp); L.lastXp = xp;
    } else { L.wrong++; L.combo = 0; g.stats.wrong++; L.lastXp = gainGame(1) ? 1 : 0; L.xp += L.lastXp; }
    L.done++; L.queue.shift(); S.c.gTypes = Object.keys(g.stats.types).length; save(); claimGameMissions(); EN.checkBadges(); drawTop();
    L.phase = 'fb';
    if (ok) { if (L.combo >= 5 && L.combo % 5 === 0) Snd.play('combo', L.combo); else Snd.play('correct'); }
    else Snd.play('sad');
    drawQ(true);
    const txt = ok ? praise[rnd(praise.length)] : `Pares feitos! Errou ${q.miss} vez${q.miss > 1 ? 'es' : ''}.`;
    const list = q.pairs.map(p => `<div class="gm-learn"><b>${esc(p.en)}</b> = ${esc(p.pt)} ${sayBtns(p.en)}</div>`).join('');
    foot().className = 'gm-foot ' + (ok ? 'good' : 'bad');
    foot().innerHTML = `<div class="gm-fi col"><div class="gm-fb-h">${mascot(ok ? 'cheer' : 'happy', 54)}<div><b>${txt}</b>${L.lastXp ? ` <span class="gm-chip xp">+${L.lastXp} XP</span>` : ''}${ok && L.combo >= 3 ? ` <span class="gm-chip">🔥 ${L.combo} seguidas</span>` : ''}</div></div><details class="gm-det"><summary>Ver as traduções</summary>${list}</details><button class="gm-btn ${ok ? 'pri' : 'dng'}" data-gm="next" id="gmNext">Continuar</button></div>`;
    setTimeout(() => { const b = $('#gmNext', ov); if (b) b.focus(); }, 30);
  }

  /* ── microfone ── */
  function stopRec() { try { if (rec) { rec.onresult = rec.onerror = rec.onend = null; rec.abort(); } } catch (e) { } rec = null; }
  function micStart() {
    const q = L.q; if (!q || q.type !== 'falar') return;
    if (!SR) { q.state = 'error'; drawQ(true); return; }
    stopRec(); try { if (AUDIO_OK) speechSynthesis.cancel(); } catch (e) { }
    rec = new SR(); rec.lang = 'en-US'; rec.interimResults = false; rec.maxAlternatives = 3; rec.continuous = false;
    rec.onresult = e => {
      const alts = Array.from(e.results[0] || []).map(a => a.transcript);
      q.heard = alts[0] || ''; q.alts = alts; q.state = 'idle';
      const exp = canon(q.item.en).split(' ');
      let best = alts[0] || ''; let bf = -1; alts.forEach(a => { const h = canon(a).split(' '); const f = exp.filter(w => h.includes(w)).length / exp.length; if (f > bf) { bf = f; best = a; } }); q.heard = best;
      if (L && L.q === q && L.phase === 'ask') { drawQ(true); setReady(true); }
    };
    rec.onerror = ev => { q.state = (ev.error === 'no-speech' || ev.error === 'aborted') ? 'idle' : 'error'; if (ev.error === 'no-speech') EN.toast('Não ouvi nada. Tente de novo, mais perto do microfone.'); if (L && L.q === q && L.phase === 'ask') drawQ(true); };
    rec.onend = () => { if (q.state === 'listening') q.state = 'idle'; if (L && L.q === q && L.phase === 'ask') drawQ(true); };
    q.state = 'listening'; drawQ(true); setReady(false);
    try { rec.start(); } catch (e) { q.state = 'error'; drawQ(true); }
  }

  /* ── cliques dentro do jogo ── */
  function primary() {
    if (!L) return;
    const b = $('#gmNext', ov) || $('[data-gm="intro"]', ov) || $('#gmCheck', ov) || $('[data-gm="again"]', ov);
    if (b && !b.disabled) b.click();
  }
  function onClick(e) {
    const el = e.target.closest('[data-gm]'); if (!el || !L) return; const a = el.dataset.gm, q = L.q;
    if (a === 'say') { C.speak(el.dataset.t, !!el.dataset.slow); return; }
    if (a === 'exit') { exitAsk(); return; }
    if (a === 'snd') { S.settings.gameSound = !Snd.ok(); save(); Snd.play('tap'); drawTop(); return; }
    if (a === 'set') { openPanel(); return; }
    if (a === 'closepanel') { closePanel(); return; }
    if (a === 'intro') { Snd.play('tap'); nextStep(); return; }
    if (a === 'check') { check(false); return; }
    if (a === 'idk') { check(true); return; }
    if (a === 'next') { stopRec(); nextStep(); return; }
    if (a === 'opt' && q && L.phase === 'ask') { q.sel = +el.dataset.i; Snd.play('pick'); drawQ(true); return; }
    if (a === 'tile' && q && L.phase === 'ask') { q.chosen.push(+el.dataset.id); Snd.play('tap'); drawQ(true); return; }
    if (a === 'untile' && q && L.phase === 'ask') { q.chosen = q.chosen.filter(x => x !== +el.dataset.id); Snd.play('tap'); drawQ(true); return; }
    if (a === 'pl') { pairTap('L', +el.dataset.i); return; }
    if (a === 'pr') { pairTap('R', +el.dataset.i); return; }
    if (a === 'mic') { micStart(); return; }
    if (a === 'self' && q && L.phase === 'ask') { q.self = el.dataset.v === '1'; Snd.play('tap'); check(false); return; }
    if (a === 'again') { const o = L.opts; closeGame(true); startRound(o); return; }
    if (a === 'home') { closeGame(true); return; }
    if (a === 'tg' && el.dataset.id) { toggleType(el.dataset.id, true); return; }
    if (a === 'spk') { S.settings.gameSpeak = !(S.settings.gameSpeak !== false); save(); openPanel(); return; }
  }

  /* ── painel para trocar os tipos durante a rodada ── */
  function openPanel() {
    const p = $('#gmPanel', ov); p.hidden = false;
    p.innerHTML = `<div class="gm-sheet"><h3>Tipos de exercício</h3><p class="small muted">Marque quantos quiser. A mudança vale a partir da próxima pergunta.</p><div class="gm-tg">${TYPES.map(t => { const dis = (t.audio && !AUDIO_OK) || blocked(t.id) || (L && L.opts && L.opts.rapid && t.audio); return `<button class="gm-chk ${typesNow().has(t.id) ? 'on' : ''} ${dis ? 'off' : ''} ${blocked(t.id) ? 'blk' : ''}" data-gm="tg" data-id="${t.id}" ${dis ? 'disabled' : ''} ${blocked(t.id) ? 'title="Bloqueado: você marcou que não pode usar este recurso"' : ''}><span>${t.ic}</span><b>${esc(t.n)}</b></button>`; }).join('')}</div><label class="gm-row"><input type="checkbox" ${S.settings.gameSpeak !== false ? 'checked' : ''} data-gm="spk"> Falar as palavras em inglês automaticamente</label><div class="gm-sheet-b"><button class="gm-btn pri" data-gm="closepanel">Pronto</button></div></div>`;
  }
  function closePanel() { $('#gmPanel', ov).hidden = true; applyTypeChange(); }
  function toggleType(id, fromPanel) {
    const s = typesNow(); if (s.has(id)) { if (s.size <= 1) { EN.toast('Deixe pelo menos um tipo marcado.'); return; } s.delete(id); } else s.add(id);
    Snd.play('tap'); if (fromPanel) openPanel();
  }
  function applyTypeChange() {
    if (!L || !L.q || L.phase !== 'ask') return;
    if (typesNow().has(L.q.type)) return;
    const slot = L.q.slot; stopRec(); L.q = null; const q = makeQ(slot); if (!q) return;
    L.q = q; L.lastType = q.type; drawQ(); if (q.type === 'ouvir' || q.type === 'ditado') speakSoon(q.say, 300);
  }
  async function exitAsk() {
    if (!L || L.phase === 'end') { closeGame(true); return; }
    const r = await C.ask('<h3>Sair da rodada?</h3><p>O XP que você já ganhou fica salvo. Esta rodada não será contada nas missões e conquistas.</p>', [{ label: 'Continuar jogando' }, { label: 'Sair', cls: 'dng' }]);
    if (r === 1) closeGame(true);
  }

  /* progresso por cenário: "vistas" = já apareceram no jogo; "fortes" = bem fixadas (força 4 ou mais) */
  function cenStats() {
    const g = G(), P = buildPool(), out = CENS().map(c => {
      const it = P.items.filter(x => x.cen === c.id), seen = it.filter(x => g.words[x.id]).length, strong = it.filter(x => (g.words[x.id] || {}).s >= 4).length;
      return { c, n: it.length, seen, strong };
    });
    return { list: out, explored: out.filter(x => x.seen >= 5).length, mastered: out.filter(x => x.n && x.strong / x.n >= .8).length, total: out.length };
  }

  /* ───────────── fim da rodada ───────────── */
  function finish() {
    L.phase = 'end'; L.q = null; stopRec();
    const g = G(), d = D(), perfect = L.wrong === 0 && L.answered > 0;
    const bonus = gainGame(6 + (perfect ? 6 : 0)); L.xp += bonus; L.bonus = bonus;
    g.stats.rounds++; d.rounds++; S.c.gRounds = (S.c.gRounds || 0) + 1;
    if (perfect) { g.stats.perfect++; d.perfect++; S.c.gPerfect = (S.c.gPerfect || 0) + 1; }
    S.c.gTypes = Object.keys(g.stats.types).length; S.c.gMastered = masteredN();
    const cs = cenStats(); S.c.gCenX = cs.explored; S.c.gCenM = cs.mastered; save();
    claimGameMissions(); EN.checkBadges();
    const acc = L.answered ? Math.round(L.correct / L.answered * 100) : 0, secs = Math.round((Date.now() - L.start) / 1000);
    const mood = acc >= 80 ? 'cheer' : acc >= 50 ? 'happy' : 'think', msg = perfect ? 'Rodada perfeita! 💯' : acc >= 80 ? 'Rodada concluída!' : acc >= 50 ? 'Bom treino!' : 'Treino feito: o erro ensina.';
    Snd.play(acc >= 50 ? 'done' : 'sad'); if (acc >= 80) EN.confetti();
    const lv = EN.level(), st = EN.streak();
    const miss = L.missed.map(it => `<div class="gm-learn"><b>${esc(it.en || (it.ex && it.ex.q.replace('___', it.ex.acc[0])) || '')}</b>${it.pt ? ' = ' + esc(it.pt) : ''}${it.en ? ' ' + sayBtns(it.en) : ''}</div>`).join('');
    const mis = todaysMissions().map(id => { const m = MIS[id], p = misProg(id); return `<div class="gm-mrow ${D().claimed[id] ? 'ok' : ''}"><span>${m.ic}</span><div><b>${esc(m.t(m.g))}</b><div class="gm-mbar"><i style="width:${Math.round(p / m.g * 100)}%"></i></div></div><em>${D().claimed[id] ? '✔' : p + '/' + m.g}</em></div>`; }).join('');
    stage().innerHTML = `<div class="gm-card end">${mascot(mood, 120)}<h2 class="gm-end-t">${msg}</h2><div class="gm-stats"><div class="gm-st x"><b>+${L.xp}</b><span>XP</span></div><div class="gm-st a"><b>${acc}%</b><span>acertos</span></div><div class="gm-st t"><b>${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</b><span>tempo</span></div><div class="gm-st c"><b>${L.best}</b><span>combo máx.</span></div></div>` +
      `<div class="gm-end-meta">Nível <b>${lv.L}</b> · ${esc(lv.title)} · 🔥 ${st.current} ${st.current === 1 ? 'dia' : 'dias'}${bonus ? ` · bônus da rodada +${bonus}` : ''}</div><div class="gm-pbar"><i style="width:${lv.pct}%"></i></div>` +
      `<div class="gm-end-box"><b>Missões de hoje</b>${mis}</div>` +
      (miss ? `<details class="gm-end-box" open><summary><b>Para reforçar (${L.missed.length})</b></summary>${miss}<p class="small muted" style="margin:6px 0 0">As palavras que já são cartões do curso voltam para os cartões de hoje.</p></details>` : '<div class="gm-end-box ok">Nenhum erro nesta rodada. 🎉</div>') + '</div>';
    foot().className = 'gm-foot'; foot().innerHTML = '<div class="gm-fi"><button class="gm-btn ghost" data-gm="home">Voltar ao menu</button><button class="gm-btn pri" data-gm="again">Jogar outra rodada</button></div>';
    drawTop(); $('.gm-bar i', ov).style.width = '100%';
  }

  /* ───────────── abrir / fechar ───────────── */
  /* "Rapidinha": rodada curta para quando há pouco tempo. Nunca usa exercícios de ouvir nem de falar (dá para jogar no silêncio) e começa pelos erros, se houver */
  const RAPID_N = 6;
  function rapidPick(types) {
    for (const s of ['erros', 'estudado', 'tudo']) { const pool = poolFor(s, ''); const items = pickItems(pool, types, RAPID_N, s); if (items.length >= 3) return { source: s, pool, items }; }
    return { source: 'tudo', pool: [], items: [] };
  }
  function startRound(o) {
    o = o || {};
    if (!C.ORDER.length) { EN.toast('O curso ainda não carregou.'); return; }
    const rapid = !!o.rapid;
    let types = typesNow(), source = src(), n = roundN(), pool, items;
    if (rapid) {
      types = new Set(TYPES.filter(t => !t.audio).map(t => t.id)); n = RAPID_N;
      const r = rapidPick(types); source = r.source; pool = r.pool; items = r.items;
    } else {
      pool = poolFor(source, ST.mod || (C.course.modulos[0] || {}).id);
      items = pickItems(pool, types, n, source);
    }
    if (items.length < 3) {
      C.ask(`<h3>Pouco conteúdo para jogar</h3><p>${source === 'erros' ? 'Você ainda não tem erros para reforçar. 🎉 Escolha outra origem do conteúdo.' : 'Com esses tipos de exercício e essa origem, só há ' + items.length + ' item(ns) compatível(is). Marque mais tipos ou escolha “Tudo do curso”.'}</p>`, [{ label: 'Ok', cls: 'pri' }]);
      return;
    }
    if (rapid) { if (!ST.rapidSaved) ST.rapidSaved = { types: ST.types }; ST.types = types; }
    buildOv();
    const slots = items.map(it => ({ item: it, tries: 0 }));
    L = { id: Date.now(), slots, queue: slots.slice(), total: slots.length, done: 0, correct: 0, wrong: 0, answered: 0, combo: 0, best: 0, xp: 0, start: Date.now(), pool, source, studied: studiedSids(), introduced: new Set(), intros: 0, used: {}, usedTypes: new Set(), lastType: '', missed: [], q: null, phase: 'ask', opts: o };
    D(); document.body.classList.add('srs-open', 'gm-open'); ov.hidden = false; $('#gmPanel', ov).hidden = true; fitVV();
    Snd.play('start'); nextStep();
  }
  function closeGame() {
    stopRec(); try { if (AUDIO_OK) speechSynthesis.cancel(); } catch (e) { }
    if (ST.rapidSaved) { ST.types = ST.rapidSaved.types; ST.rapidSaved = null; } /* a rapidinha não mexe nas suas escolhas */
    if (ov) ov.hidden = true; document.body.classList.remove('srs-open', 'gm-open'); L = null;
    if (location.hash.indexOf('#/jogar') === 0 && EN.rerender) EN.rerender();
  }

  /* ───────────── página do jogo (menu lateral) ───────────── */
  const modName = m => plain(m.titulo);
  function typeCounts() { const pool = poolFor(src(), ST.mod || (C.course.modulos[0] || {}).id); return { pool, n: pool.length, ok: pool.filter(it => canAny(it, typesNow())).length }; }
  function missionsHTML() {
    const d = D(), ids = todaysMissions(), done = ids.filter(id => d.claimed[id]).length;
    return `<div class="card gm-missions"><div class="gm-mh"><h3>Missões do dia</h3><span class="chip">${done}/${ids.length}</span></div>` + ids.map(id => {
      const m = MIS[id], p = misProg(id), ok = p >= m.g, cl = !!d.claimed[id];
      return `<div class="gm-mrow ${cl ? 'ok' : ''}"><span class="gm-mi">${m.ic}</span><div><b>${esc(m.t(m.g))}</b><div class="gm-mbar"><i style="width:${Math.round(p / m.g * 100)}%"></i></div><small class="muted">${p}/${m.g} · recompensa +${m.r} XP${m.course ? ' · feita no curso' : ''}</small></div>${cl ? '<em>✔</em>' : ok ? `<button class="btn sm pri" data-g="claim" data-id="${id}">Resgatar</button>` : m.link ? `<a class="btn sm" href="${m.link}">${esc(m.cta)}</a>` : '<em class="muted">' + p + '/' + m.g + '</em>'}</div>`;
    }).join('') + `<div class="gm-chest ${d.chest ? 'open' : ''}">${d.chest ? '🎁 Baú do dia aberto! (+20 XP)' : '🎁 Cumpra as 3 missões para abrir o baú (+20 XP)'}</div></div>`;
  }
  function shelfHTML() {
    const g = G(), P = buildPool(), words = P.items.filter(i => i.kind !== 'ex' && i.tk > 0 && !i.cen), cs = cenStats();
    let nw = 0, lr = 0, st = 0; words.forEach(i => { const w = g.words[i.id]; if (!w) nw++; else if (w.s >= 4) st++; else lr++; });
    const mods = C.course.modulos.map((m, i) => { const it = words.filter(x => x.mid === m.id), s = it.filter(x => (g.words[x.id] || {}).s >= 4).length, any = it.filter(x => g.words[x.id]).length; return { m, i, n: it.length, s, any }; }).filter(x => x.n);
    const es = errSetNow(), weak = P.items.filter(it => isWeak(it, es) && it.en).slice(0, 8);
    return `<div class="sectitle">Sua estante de palavras</div><div class="grid g3 gm-shelf"><div class="card stat"><span class="flame">🌱</span><div><div class="big">${nw}</div><div class="lbl">ainda não vistas</div></div></div><div class="card stat"><span class="flame">📗</span><div><div class="big">${lr}</div><div class="lbl">aprendendo</div></div></div><div class="card stat"><span class="flame">⭐</span><div><div class="big">${st}</div><div class="lbl">bem fixadas</div></div></div></div>` +
      `<div class="card" style="margin-top:12px">${mods.map(x => `<div class="gm-mod"><span class="gm-mod-i" style="background:var(--p-${C.col(x.m.cor || ['teal', 'coral', 'blue', 'violet', 'amber', 'green', 'rose'][x.i % 7])})">${esc(x.m.icone || '📘')}</span><div><b>${esc(modName(x.m))}</b><div class="gm-mbar"><i style="width:${Math.round(x.s / x.n * 100)}%"></i><u style="width:${Math.round(x.any / x.n * 100)}%"></u></div></div><small class="muted">${x.s}/${x.n}</small></div>`).join('')}<p class="small muted" style="margin:8px 0 0">Barra escura = bem fixadas · clara = já apareceram no jogo.</p></div>` +
      (cs.list.length ? `<div class="sectitle">Lugares e situações <span class="sp muted">${cs.mastered}/${cs.total} dominados</span></div><div class="card">${cs.list.map(x => `<div class="gm-mod"><span class="gm-mod-i" style="background:var(--p-${C.col(x.c.cor || 'teal')})">${esc(x.c.icone || '📍')}</span><div><b>${esc(x.c.titulo || x.c.id)}</b><div class="gm-mbar"><i style="width:${Math.round(x.strong / x.n * 100)}%"></i><u style="width:${Math.round(x.seen / x.n * 100)}%"></u></div></div><small class="muted">${x.strong}/${x.n}</small></div>`).join('')}</div>` : '') +
      (weak.length ? `<div class="sectitle">Para reforçar <span class="sp muted">${weak.length} de ${P.items.filter(it => isWeak(it, es)).length}</span></div><div class="card">${weak.map(it => `<div class="gm-learn"><b>${esc(it.en)}</b>${it.pt ? ' = ' + esc(it.pt) : ''} ${sayHub(it.en)}</div>`).join('')}</div>` : '');
  }
  const sayHub = t => `<button class="spk" data-g="say" data-t="${esc(t)}" title="Ouvir">🔊</button>`;
  function capsHTML() {
    const row = (k, ic, nome, txt) => { const v = ST.cap[k], cls = v === 1 ? 'on' : v === 2 ? 'no' : '', say = v === 1 ? txt.on : v === 2 ? txt.no : txt.off; return `<button class="gm-cap ${cls}" data-g="cap" data-k="${k}" aria-pressed="${v === 1}" ${k === 'ouvir' && !AUDIO_OK ? 'disabled' : ''}><span class="gm-cap-i">${ic}</span><span><b>${nome}</b><small>${say}</small></span></button>`; };
    return `<div class="gm-caps">${row('ouvir', '🎧', 'Posso ouvir', { off: 'Toque para marcar os exercícios de áudio', on: 'Marcados: ouvir e escolher, ouvir e escrever', no: 'Sem áudio: esses exercícios ficam bloqueados' })}${row('falar', '🎤', 'Posso falar', { off: 'Toque para marcar o exercício de falar', on: 'Marcado: falar em voz alta (usa o microfone)', no: 'Sem fala: esse exercício fica bloqueado' })}</div><p class="small gm-caps-h">Toque uma vez para marcar, de novo para bloquear (vermelho) e outra vez para voltar ao normal. Isso monta a sua pré-seleção abaixo.</p>`;
  }
  function capClick(k) {
    const s = typesNow(), g = CAPT[k], v = ST.cap[k];
    if (v === 0) {
      if (k === 'ouvir' && !AUDIO_OK) { EN.toast('Este navegador não tem voz embutida.'); return; }
      ST.cap[k] = 1; g.forEach(id => { if (!blocked(id)) s.add(id); });
    } else if (v === 1) {
      ST.cap[k] = 2; g.forEach(id => s.delete(id));
      if (!s.size) s.add(TYPES.find(t => !blocked(t.id) && !(t.audio && !AUDIO_OK)).id);
    } else ST.cap[k] = 0;
    Snd.play('tap'); refreshHub();
  }
  function cenPickHTML() {
    const cs = cenStats(), sel = cenSel();
    if (!cs.list.length) return '<p class="small muted" style="margin:8px 0 0">Nenhum cenário encontrado em material/cenarios.js.</p>';
    return `<div class="sectitle" style="margin-top:12px">Escolha os lugares <span class="sp"><a href="#" data-g="cenall">todos</a> · <a href="#" data-g="cenone">só um</a></span></div><div class="gm-cens">${cs.list.map(x => `<button class="gm-cen ${sel.has(x.c.id) ? 'on' : ''}" data-g="cen" data-id="${esc(x.c.id)}" aria-pressed="${sel.has(x.c.id)}" style="--cc:var(--p-${C.col(x.c.cor || 'teal')})"><span class="gm-cen-i">${esc(x.c.icone || '📍')}</span><span><b>${esc(x.c.titulo || x.c.id)}</b><small>${x.seen}/${x.n} vistas · ${x.strong} fortes</small></span><i class="gm-ck">${sel.has(x.c.id) ? '✓' : ''}</i></button>`).join('')}</div><p class="small muted" style="margin:6px 0 0">${sel.size} ${sel.size === 1 ? 'lugar marcado' : 'lugares marcados'}. As palavras novas aparecem primeiro numa cartinha de apresentação.</p>`;
  }
  function pageHTML() {
    if (!C.ORDER.length) return '<div class="welcome"><h1>Jogar</h1><p class="muted">O curso ainda não carregou.</p></div>';
    D();
    const lv = EN.level(), st = EN.streak(), d = D(), types = typesNow(), cnt = typeCounts(), g = G();
    const mods = C.course.modulos, s = src(), nx = nextSids().map(id => C.SES[id]).filter(Boolean);
    const img = sid => { const b = (C.SES[sid].s.blocos || []).find(x => x.t === 'image' && x.src); return b ? `<img class="gm-thumb" src="${esc(b.src)}" alt="" loading="lazy">` : ''; };
    const warn = cnt.ok < 3 ? `<div class="callout warn"><div class="ci">⚠️</div><div>Poucos itens compatíveis (${cnt.ok}). ${s === 'erros' ? 'Você ainda não tem erros para reforçar.' : 'Marque mais tipos ou mude a origem do conteúdo.'}</div></div>` : '';
    return `<h1 class="pgtitle">🎮 Jogar</h1>
      <div class="hero gm-hero"><div class="gm-hero-m">${mascot('happy', 118)}</div><div><div class="small" style="opacity:.8">Rodadas rápidas, sem corações nem ranking</div><h1>Treine jogando</h1><p>Misture os tipos de exercício, ganhe XP, mantenha a sequência e cumpra as missões. O XP vai para o seu nível e para a meta do dia, como no curso.</p><button class="btn lg gm-rapid" data-g="rapid"><span class="gm-rapid-i">⚡</span><span><b>Rapidinha</b><small>${RAPID_N} perguntas · sem áudio e sem fala · começa pelos seus erros</small></span></button>${capsHTML()}</div></div>
      <div class="grid g2 gm-top2" style="margin-top:16px"><div>
      <div class="sectitle" style="margin-top:6px">1 · Tipos de exercício <span class="sp"><a href="#" data-g="all">marcar todos</a> · <a href="#" data-g="none">só um</a></span></div>
      <div class="gm-types">${TYPES.map(t => { const dis = t.audio && !AUDIO_OK, bl = blocked(t.id); return `<button class="gm-type ${types.has(t.id) ? 'on' : ''} ${bl ? 'blk' : ''}" data-g="type" data-id="${t.id}" aria-pressed="${types.has(t.id)}" ${dis ? 'disabled title="Este navegador não tem voz embutida"' : ''}><span class="gm-ti">${t.ic}</span><span><b>${esc(t.n)}</b><small>${bl ? 'Bloqueado: você marcou que não pode ' + (t.id === 'falar' ? 'falar' : 'ouvir') : esc(t.d) + (t.id === 'falar' && !SR ? ' (sem microfone aqui: você marca “consegui”)' : '')}</small></span><i class="gm-ck">${bl ? '🚫' : types.has(t.id) ? '✓' : ''}</i></button>`; }).join('')}</div>
      <p class="small muted" style="margin:8px 0 0">Suas escolhas ficam marcadas enquanto você estiver no jogo (e também dá para mudar durante a rodada, no ⚙️).</p></div>
      <div><div class="sectitle" style="margin-top:6px">2 · O que praticar</div><div class="gm-srcs">${SOURCES.map(x => `<button class="gm-src ${s === x.id ? 'on' : ''}" data-g="src" data-id="${x.id}" aria-pressed="${s === x.id}"><span class="gm-ti">${x.ic}</span><span><b>${esc(x.n)}</b><small>${esc(x.d)}</small></span>${x.id === 'novo' ? (nx.map(n => img(n.s.id)).find(Boolean) || '') : ''}</button>`).join('')}</div>
      ${s === 'modulo' ? `<label class="row" style="margin-top:8px">Módulo: <select id="gMod">${mods.map(m => `<option value="${esc(m.id)}" ${(ST.mod || mods[0].id) === m.id ? 'selected' : ''}>${esc(modName(m))}</option>`).join('')}</select></label>` : ''}
      ${s === 'novo' && nx.length ? `<p class="small muted" style="margin:8px 0 0">Vai treinar: ${nx.map(x => esc(x.s.titulo)).join(' · ')}.</p>` : ''}
      ${s === 'cenario' ? cenPickHTML() : ''}
      <div class="sectitle" style="margin-top:18px">3 · Tamanho da rodada</div><div class="gm-seg">${[6, 10, 15].map(n => `<button class="${roundN() === n ? 'on' : ''}" data-g="len" data-n="${n}">${n} perguntas</button>`).join('')}</div></div></div>
      ${warn}
      <div class="gm-go"><button class="btn pri lg gm-start" data-g="go" ${cnt.ok < 3 ? 'disabled' : ''}>▶ Começar a rodada</button><span class="small muted">${cnt.ok} itens compatíveis com a sua escolha</span></div>
      <div class="sectitle">Hoje</div>${missionsHTML()}${shelfHTML()}
      <div class="sectitle">Como funciona</div><div class="card small"><ul class="bl" style="margin:0"><li><b>+2 XP</b> por acerto de primeira (+1 na repetição) · <b>+1</b> extra a partir de 5 acertos seguidos · <b>+6</b> ao concluir a rodada e <b>+6</b> se for perfeita. Teto de ${CAP} XP por dia nas rodadas; missões e o baú ficam fora do teto.</li><li>O que você erra volta no fim da rodada. Palavras do curso que você errar voltam para os <a href="#/cartoes">cartões</a> de hoje.</li><li>As palavras ficam mais fortes a cada acerto e voltam a aparecer quando estiverem fracas ou vencidas.</li><li>Tudo conta para o seu nível, sequência, calendário e <a href="#/progresso">conquistas</a>.</li></ul></div>`;
  }

  /* cliques e escolhas na página do jogo */
  const view = document.getElementById('view');
  const onHub = () => location.hash.indexOf('#/jogar') === 0 && (!ov || ov.hidden);
  function refreshHub() { const y = scrollY; view.innerHTML = pageHTML(); window.scrollTo({ top: y, behavior: 'instant' }); }
  view.addEventListener('click', e => {
    if (!onHub()) return; const b = e.target.closest('[data-g]'); if (!b) return; e.preventDefault(); const a = b.dataset.g;
    if (a === 'cap') { capClick(b.dataset.k); return; }
    if (a === 'rapid') { Snd.play('tap'); startRound({ rapid: true }); return; }
    if (a === 'type') { const s = typesNow(), id = b.dataset.id; if (blocked(id)) { EN.toast('Bloqueado: toque em "Posso ' + (id === 'falar' ? 'falar' : 'ouvir') + '" até voltar ao normal.'); return; } if (s.has(id)) { if (s.size <= 1) { EN.toast('Deixe pelo menos um tipo marcado.'); return; } s.delete(id); } else s.add(id); Snd.play('tap'); refreshHub(); }
    else if (a === 'all') { ST.types = new Set(TYPES.filter(t => (!t.audio || AUDIO_OK) && !blocked(t.id)).map(t => t.id)); Snd.play('tap'); refreshHub(); }
    else if (a === 'none') { const f = Array.from(typesNow())[0] || 'lacunas'; ST.types = new Set([f]); refreshHub(); }
    else if (a === 'src') { S.settings.gameSrc = b.dataset.id; save(); Snd.play('tap'); refreshHub(); }
    else if (a === 'cen') { const s = cenSel(), id = b.dataset.id; if (s.has(id)) { if (s.size <= 1) { EN.toast('Deixe pelo menos um lugar marcado.'); return; } s.delete(id); } else s.add(id); Snd.play('tap'); refreshHub(); }
    else if (a === 'cenall') { ST.cen = new Set(CENS().map(c => c.id)); Snd.play('tap'); refreshHub(); }
    else if (a === 'cenone') { ST.cen = new Set(Array.from(cenSel()).slice(0, 1)); refreshHub(); }
    else if (a === 'len') { S.settings.gameN = +b.dataset.n; save(); Snd.play('tap'); refreshHub(); }
    else if (a === 'go') { Snd.play('tap'); startRound(); }
    else if (a === 'claim') { claim(b.dataset.id); refreshHub(); }
    else if (a === 'say') C.speak(b.dataset.t, false);
  });
  view.addEventListener('change', e => { if (onHub() && e.target.id === 'gMod') { ST.mod = e.target.value; refreshHub(); } });

  /* ───────────── ligações com o resto do app ───────────── */
  EN.game = {
    pageHTML,
    leave(route) { if (route !== 'jogar' && (!ov || ov.hidden)) { ST.types = null; ST.mod = ''; ST.cen = null; ST.cap = { ouvir: 0, falar: 0 }; } },
    open: startRound,
    missionsDone: () => { const d = D(); return todaysMissions().filter(id => d.claimed[id]).length; },
    missionsPending: () => { const d = D(); return todaysMissions().filter(id => !d.claimed[id] && MIS[id].get(d) >= MIS[id].g).length; },
    reportLines() {
      const g = G(), P = buildPool(), es = errSetNow(), weak = P.items.filter(it => isWeak(it, es) && it.en).slice(0, 12);
      return [`  Rodadas: ${g.stats.rounds} (${g.stats.perfect} perfeitas) · acertos ${g.stats.correct} · erros ${g.stats.wrong} · maior combo ${g.stats.bestCombo} · palavras bem fixadas ${masteredN()}`,
        `  Tipos mais jogados: ${Object.entries(g.stats.types).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([k, n]) => (TYPE[k] ? TYPE[k].n : k) + ' (' + n + ')').join(', ') || 'nenhum'}`,
        `  Para reforçar no jogo: ${weak.length ? weak.map(it => it.en + (it.pt ? ' = ' + it.pt : '')).join(' · ') : 'nada pendente'}`];
    }
  };
})();
