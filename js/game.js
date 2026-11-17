/* Gamificação: XP, níveis, sequência de dias, meta diária, conquistas e calendário. */
(function () {
  'use strict';
  const EN = window.EN, S = EN.S;
  const GOAL = () => S.settings.goal || 40;
  const TITLES = ['Iniciante', 'Curioso', 'Explorador', 'Praticante', 'Dedicado', 'Em evolução', 'Veterano', 'Mestre das palavras', 'Lenda', 'Poliglota'];

  EN.studied = k => { const d = S.log[k]; return !!d && (!!d.manual || d.xp >= GOAL() || (d.ses && d.ses.length > 0)); };
  EN.dayXP = k => (S.log[k] ? S.log[k].xp : 0);
  EN.totalXP = () => Object.values(S.log).reduce((a, d) => a + (d.xp || 0), 0);
  EN.level = xp => {
    xp = xp == null ? EN.totalXP() : xp;
    const L = Math.floor(Math.sqrt(xp / 40)) + 1, lo = 40 * (L - 1) * (L - 1), hi = 40 * L * L;
    return { L, xp, lo, hi, pct: Math.min(100, Math.round((xp - lo) / (hi - lo) * 100)), title: TITLES[Math.min(L - 1, TITLES.length - 1)] };
  };
  EN.streak = () => {
    const t = EN.dkey(); let cur = 0, k = EN.studied(t) ? t : EN.addDays(t, -1);
    while (EN.studied(k)) { cur++; k = EN.addDays(k, -1); }
    const ds = Object.keys(S.log).filter(EN.studied).sort(); let best = 0, run = 0, prev = null;
    ds.forEach(d => { run = (prev && EN.addDays(prev, 1) === d) ? run + 1 : 1; if (run > best) best = run; prev = d; });
    return { current: cur, longest: Math.max(best, cur), today: EN.studied(t), atRisk: !EN.studied(t) && cur > 0 };
  };

  /* ganhar XP */
  EN.gain = (xp, o) => {
    o = o || {};
    const t = EN.dkey(), before = EN.level().L, was = EN.studied(t);
    const d = S.log[t] || (S.log[t] = { xp: 0, ses: [], manual: false });
    d.xp += xp; EN.save();
    if (!o.silent) EN.floatXP('+' + xp + ' XP');
    const lv = EN.level();
    if (lv.L > before) { EN.toast('⭐ Nível ' + lv.L + ': ' + lv.title + '!'); EN.confetti(); }
    else if (!was && EN.studied(t)) { const s = EN.streak(); EN.toast('🔥 Meta do dia batida! Sequência: ' + s.current + (s.current === 1 ? ' dia' : ' dias')); }
    EN.checkBadges(); if (EN.onUpdate) EN.onUpdate();
  };
  EN.gainOnce = (key, xp, o) => { if (S.xpOnce[key]) return false; S.xpOnce[key] = 1; EN.gain(xp, o); return true; };
  EN.markManual = (k, on) => {
    const d = S.log[k] || (S.log[k] = { xp: 0, ses: [], manual: false });
    d.manual = !!on; EN.save();
    if (on) EN.gainOnce('manual-' + k, 20, { silent: k !== EN.dkey() });
    EN.checkBadges(); if (EN.onUpdate) EN.onUpdate();
  };
  EN.completeSession = sid => {
    const t = EN.dkey(), first = !S.done[sid];
    S.done[sid] = new Date().toISOString();
    const d = S.log[t] || (S.log[t] = { xp: 0, ses: [], manual: false });
    if (!d.ses.includes(sid)) d.ses.push(sid);
    EN.save();
    if (first) { EN.gainOnce('ses-' + sid, 50); EN.confetti(); }
    EN.checkBadges(); if (EN.onUpdate) EN.onUpdate();
    return first;
  };

  /* conquistas */
  const BADGES = [
    { id: 'first', i: '🌱', n: 'Primeiro passo', d: 'Estude em 1 dia', t: s => s.days >= 1 },
    { id: 'st3', i: '🔥', n: 'Pegando ritmo', d: '3 dias seguidos', t: s => s.longest >= 3 },
    { id: 'st7', i: '📅', n: 'Semana completa', d: '7 dias seguidos', t: s => s.longest >= 7 },
    { id: 'st14', i: '⚡', n: 'Imparável', d: '14 dias seguidos', t: s => s.longest >= 14 },
    { id: 'st30', i: '👑', n: 'Hábito de ferro', d: '30 dias seguidos', t: s => s.longest >= 30 },
    { id: 'days10', i: '🗓️', n: 'Dez dias', d: '10 dias estudados', t: s => s.days >= 10 },
    { id: 'goal7', i: '🎯', n: 'Meta batida', d: 'Bata a meta diária 7 vezes', t: s => s.goalDays >= 7 },
    { id: 'ses1', i: '🎓', n: 'Primeira sessão', d: 'Conclua 1 sessão', t: s => s.sessions >= 1 },
    { id: 'ses5', i: '📚', n: 'Cinco sessões', d: 'Conclua 5 sessões', t: s => s.sessions >= 5 },
    { id: 'ses20', i: '🏛️', n: 'Vinte sessões', d: 'Conclua 20 sessões', t: s => s.sessions >= 20 },
    { id: 'mod1', i: '🏆', n: 'Módulo completo', d: 'Conclua um módulo inteiro', t: s => s.modules >= 1 },
    { id: 'ex25', i: '✏️', n: 'Mão na massa', d: '25 respostas certas', t: s => s.c.correct >= 25 },
    { id: 'ex100', i: '💪', n: 'Cem acertos', d: '100 respostas certas', t: s => s.c.correct >= 100 },
    { id: 'ft10', i: '🎯', n: 'De primeira', d: '10 acertos de primeira', t: s => s.c.firstTry >= 10 },
    { id: 'honest', i: '🤝', n: 'Honestidade', d: 'Use “não sei” 5 vezes', t: s => s.c.idk >= 5 },
    { id: 'anki10', i: '🃏', n: 'Colecionador', d: '10 palavras salvas nos seus cartões', t: s => s.c.anki >= 10 },
    { id: 'ears', i: '🎧', n: 'Bom ouvinte', d: 'Ouça 50 áudios', t: s => s.c.plays >= 50 },
    { id: 'lvl5', i: '⭐', n: 'Nível 5', d: 'Chegue ao nível 5', t: s => s.level >= 5 }
  ];
  EN.BADGES = BADGES;
  EN.badgeStats = () => {
    const ds = Object.keys(S.log), cs = EN.courseStats ? EN.courseStats() : { sessions: Object.keys(S.done).length, modules: 0 };
    const st = EN.streak();
    return { days: ds.filter(EN.studied).length, longest: st.longest, goalDays: ds.filter(k => S.log[k].xp >= GOAL()).length,
      sessions: cs.sessions, modules: cs.modules, c: S.c, level: EN.level().L };
  };
  EN.checkBadges = () => {
    const st = EN.badgeStats();
    BADGES.forEach(b => { if (!S.badges[b.id] && b.t(st)) { S.badges[b.id] = new Date().toISOString(); EN.save(); EN.toast('🏅 Conquista: ' + b.n); } });
  };

  /* calendário */
  const MES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  EN.calendar = (y, m, o) => {
    o = o || {};
    const first = new Date(y, m, 1), off = (first.getDay() + 6) % 7, n = new Date(y, m + 1, 0).getDate(), today = EN.dkey();
    let cells = '';
    for (let i = 0; i < off; i++) cells += '<span class="cd empty"></span>';
    for (let d = 1; d <= n; d++) {
      const k = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
      const xp = EN.dayXP(k), on = EN.studied(k), lv = on ? 0 : (xp >= GOAL() / 2 ? 2 : (xp > 0 ? 1 : 0));
      cells += `<button class="cd ${on ? 'on' : ''} ${k === today ? 'today' : ''} ${o.sel === k ? 'sel' : ''}" data-day="${k}" data-i="${lv}" title="${xp} XP${on ? ' · estudado' : ''}">${d}</button>`;
    }
    return `<div class="cal ${o.compact ? 'compact' : ''}" data-y="${y}" data-m="${m}"><div class="ch"><button class="btn sm ghost" data-cal="-1" aria-label="Mês anterior">‹</button><b>${MES[m]} ${y}</b><button class="btn sm ghost" data-cal="1" aria-label="Próximo mês">›</button></div>` +
      `<div class="grid7">${['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map(x => `<span class="dw">${x}</span>`).join('')}${cells}</div>` +
      `<div class="legend2"><span><i style="background:var(--c-amber)"></i>dia estudado</span><span><i style="background:color-mix(in srgb,var(--c-amber) 40%,var(--surface2))"></i>começou</span></div></div>`;
  };
  EN.weekStrip = () => {
    const t = EN.dkey(), dow = (EN.parseKey(t).getDay() + 6) % 7, mon = EN.addDays(t, -dow), L = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
    return `<div class="wkrow">${L.map((l, i) => { const k = EN.addDays(mon, i); return `<span>${l}<i class="${EN.studied(k) ? 'on' : ''} ${k === t ? 'today' : ''}">${EN.studied(k) ? '✓' : ''}</i></span>`; }).join('')}</div>`;
  };
  EN.last7 = () => { const t = EN.dkey(); return Array.from({ length: 7 }, (_, i) => { const k = EN.addDays(t, i - 6); return { k, xp: EN.dayXP(k), d: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][EN.parseKey(k).getDay()] }; }); };
})();
