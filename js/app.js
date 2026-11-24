/* Páginas, navegação, carregamento do curso (JSON), configurações e relatório. */
(function () {
  'use strict';
  const EN = window.EN, S = EN.S, save = EN.save, C = EN.C;
  const { esc, md, col } = C;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const view = $('#view');
  let COURSE = null, cur = { r: '', a: '', b: '' }, cal = { y: new Date().getFullYear(), m: new Date().getMonth(), sel: EN.dkey() };
  const openMods = new Set();
  let modsOpen = false; try { modsOpen = localStorage.getItem('ingles.navmods') === '1'; } catch (_) { }
  const COLS = ['teal', 'coral', 'blue', 'violet', 'amber', 'green', 'rose'];
  const mods = () => (COURSE ? COURSE.modulos : []);
  const modCol = (m, i) => col(m.cor || COLS[i % COLS.length]);
  const cfg = () => (COURSE && COURSE.curso) || {};

  /* ───────────── tema ───────────── */
  function applyTheme() {
    const t = S.settings.theme;
    let eff = t === 'auto' ? (matchMedia('(prefers-color-scheme:dark)').matches ? 'escuro' : 'pastel') : t;
    if (!['pastel', 'escuro', 'dark'].includes(eff)) eff = 'pastel'; // inclui o antigo "claro" azulado, que virou o pastel
    document.documentElement.dataset.theme = eff;
    const mt = $('meta[name=theme-color]'); if (mt) mt.content = { pastel: '#FBF7F2', escuro: '#0C1120', dark: '#000000' }[eff];
  }
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change', () => { if (S.settings.theme === 'auto') { applyTheme(); EN.rerender(); } });

  /* ───────────── progresso ───────────── */
  function sesStats(sid) {
    const { s } = C.SES[sid]; let total = 0, done = 0;
    (s.blocos || []).forEach(b => { if (b.t === 'ex' && !b.teste) b.items.forEach((_, i) => { total++; const st = (S.ex[C.iid(b, i)] || {}).st; if (st && st !== 'retry') done++; }); });
    return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
  }
  function started(sid) {
    if (sesStats(sid).done) return true;
    return (C.SES[sid].s.blocos || []).some(b => (b.t === 'roteiro' && b.rows.some((_, i) => S.rot[b.id + '.' + i])) || (b.t === 'prod' && (S.prod[b.id] || '').trim()));
  }
  const sesState = sid => S.done[sid] ? 'done' : (started(sid) ? 'doing' : 'todo');
  function modStats(m) { const n = (m.sessoes || []).length, d = (m.sessoes || []).filter(s => S.done[s.id]).length; return { n, d, pct: n ? Math.round(d / n * 100) : 0 }; }
  EN.courseStats = () => ({ sessions: Object.keys(S.done).filter(id => C.SES[id]).length, modules: mods().filter(m => (m.sessoes || []).length && m.sessoes.every(s => S.done[s.id])).length });
  function nextSession() {
    if (!C.ORDER.length) return null;
    if (S.last && C.SES[S.last] && !S.done[S.last]) return S.last;
    const start = S.last && C.SES[S.last] ? C.ORDER.indexOf(S.last) + 1 : 0;
    for (let i = 0; i < C.ORDER.length; i++) { const id = C.ORDER[(start + i) % C.ORDER.length]; if (!S.done[id]) return id; }
    return null;
  }
  const isPrat = s => s && s.tipo === 'pratica';
  const sesLabel = s => (isPrat(s) ? `Prática ${s.n} · ` : s.n != null && s.n !== '' ? `Sessão ${s.n} · ` : '') + s.titulo;

  /* ── "onde parei": guarda a seção da sessão que estava na tela, para retomar de lá ── */
  const posOf = sid => { const p = S.pos && S.pos[sid]; return p && p.sec && C.SES[sid] && !S.done[sid] ? p : null; };
  const posHref = sid => '#/a/' + encodeURIComponent(sid) + (posOf(sid) ? '/' + encodeURIComponent(posOf(sid).sec) : '');
  function trackPos() {
    if (cur.r !== 'a' || !C.SES[cur.a] || S.done[cur.a] || scrollY < 200) return;
    const sid = cur.a, pre = 'sec-' + sid + '-'; let hit = null;
    for (const el of view.querySelectorAll('[id^="' + pre + '"]')) { if (el.getBoundingClientRect().top <= 160) hit = el; else break; }
    if (!hit) return;
    const sec = hit.id.slice(pre.length), old = S.pos[sid];
    if (old && old.sec === sec) return;
    const lbl = hit.matches('.etapa') ? 'Etapa ' + (hit.querySelector('.en-n') || {}).textContent + ' · ' + ((hit.querySelector('h2') || {}).textContent || '') : (hit.querySelector('.n') ? 'Seção ' : '') + [...hit.children].map(c => (c.textContent || '').replace(/\s+/g, ' ').trim()).filter(Boolean).join(' · ');
    S.pos[sid] = { sec, lbl: lbl.slice(0, 70), at: new Date().toISOString() }; save();
  }
  let posT = null;
  window.addEventListener('scroll', () => { clearTimeout(posT); posT = setTimeout(trackPos, 1200); }, { passive: true });
  window.addEventListener('pagehide', trackPos);
  document.addEventListener('visibilitychange', () => { if (document.hidden) trackPos(); });
  /* o aviso "você parou em…" usa uma cópia da posição do momento em que a sessão foi aberta (não muda enquanto você lê) */
  let resumeSnap = null;
  const resumeHTML = sid => { const p = resumeSnap && resumeSnap.sid === sid ? resumeSnap : null; return p ? `<div class="resume"><span>📍 Você parou em <b>${esc(p.lbl || p.sec)}</b>${p.at ? ' · ' + EN.fmtDate(p.at) : ''}.</span><a class="btn sm pri" href="#/a/${encodeURIComponent(sid)}/${encodeURIComponent(p.sec)}">Continuar daí</a><button class="btn sm ghost" data-act="pos-clear" data-k="${esc(sid)}">Começar do início</button></div>` : ''; };

  /* ───────────── chrome: topo e menu ───────────── */
  function renderTop() {
    const st = EN.streak(), lv = EN.level();
    $('#chipProf').hidden = EN.profile !== 'teste'; document.body.classList.toggle('prof-teste', EN.profile === 'teste');
    const c = $('#chipStreak'); c.innerHTML = `🔥 ${st.current}`; c.classList.toggle('risk', st.atRisk); c.title = st.atRisk ? 'Estude hoje para manter a sequência!' : `Sequência: ${st.current} dia(s) · recorde ${st.longest}`;
    if (EN.srs && COURSE) EN.srs.badge();
    $('#chipLvl').innerHTML =`⭐ Nv ${lv.L}<span class="xpbar"><i style="width:${lv.pct}%"></i></span>`;
    $('#chipLvl').title = `${lv.title} · ${lv.xp} XP`;
    $('#courseTitle').textContent = cfg().titulo || 'My English School'; $('#courseSub').textContent = cfg().subtitulo || 'do zero à fluência';
  }
  function renderNav() {
    const errN = COURSE ? C.errorList().length : 0, r = cur.r;
    const link = (h, ic, t, on, extra) => `<a class="nav-a ${on ? 'on' : ''}" href="${h}"><span class="em">${ic}</span>${t}${extra || ''}</a>`;
    const dueN = COURSE ? dueReviews().length : 0, srsN = COURSE && EN.srs ? EN.srs.counts(null).due : 0;
    const gmN = COURSE && EN.game ? EN.game.missionsPending() : 0;
    let h = link('#/', '🏠', 'Início', r === '') + (COURSE && COURSE.plano ? link('#/plano', '🗺️', 'Plano de estudos', r === 'plano') : '') + (COURSE && EN.game ? link('#/jogar', '🎮', 'Jogar', r === 'jogar', gmN ? `<span class="cnt" title="Missões prontas para resgatar">${gmN}</span>` : '') : '') + (COURSE && EN.conv ? link('#/conversar', '💬', 'Conversar', r === 'conversar') : '') + link('#/progresso', '📅', 'Progresso e conquistas', r === 'progresso');
    if (COURSE) {
      const inMods = r === 'm' || (r === 'a' && !!C.SES[cur.a]), done = mods().reduce((t, m) => t + modStats(m).d, 0), tot = mods().reduce((t, m) => t + modStats(m).n, 0);
      h += `<details class="modgrp" ${modsOpen ? 'open' : ''}><summary class="nav-a ${inMods ? 'on' : ''}"><span class="em">📚</span>Módulos<span class="cnt grp">${done}/${tot}</span><span class="car">▶</span></summary><div class="modlist">`;
      mods().forEach((m, i) => {
        const c = modCol(m, i), isCur = (r === 'm' && cur.a === m.id) || (r === 'a' && C.SES[cur.a] && C.SES[cur.a].m.id === m.id), ms = modStats(m);
        h += `<details class="mod" data-mid="${esc(m.id)}" ${(isCur || openMods.has(m.id)) ? 'open' : ''}><summary><span class="mi" style="background:var(--p-${c})">${esc(m.icone || '📘')}</span><span class="mt">${md(m.titulo)}<small>${ms.d}/${ms.n} sessões</small></span><span class="car">▶</span></summary><div class="sl"><a class="sess ${r === 'm' && cur.a === m.id ? 'on' : ''}" href="#/m/${esc(m.id)}"><span class="dot"></span>Visão geral</a>` +
          (m.sessoes || []).map(s => { const stt = sesState(s.id); return `<a class="sess ${r === 'a' && cur.a === s.id ? 'on' : ''}" href="#/a/${esc(s.id)}"><span class="dot ${stt}">${stt === 'done' ? '✓' : ''}</span><span>${esc(sesLabel(s))}</span></a>`; }).join('') + '</div></details>';
      });
      h += '</div></details>';
      h += '<div class="nav-sec">Ferramentas</div>' + link('#/cartoes', '🃏', 'Cartões', r === 'cartoes', srsN ? `<span class="cnt">${srsN}</span>` : '') + link('#/revisao', '📖', 'Revisão programada', r === 'revisao', dueN ? `<span class="cnt">${dueN}</span>` : '') + link('#/erros', '📝', 'Caderno de erros', r === 'erros', errN ? `<span class="cnt">${errN}</span>` : '') + link('#/relatorio', '📤', 'Relatório para a IA', r === 'relatorio');
    }
    h += '<div class="nav-sec">Ajuda</div>' + link('#/ajuda', '❓', 'Como usar', r === 'ajuda');
    $('#nav').innerHTML = h;
  }
  $('#nav').addEventListener('toggle', e => {
    const g = e.target.matches && e.target.matches('details.modgrp') ? e.target : null;
    if (g) { modsOpen = g.open; try { localStorage.setItem('ingles.navmods', g.open ? '1' : '0'); } catch (_) { } return; }
    const d = e.target.closest && e.target.closest('details.mod'); if (!d) return; if (d.open) openMods.add(d.dataset.mid); else openMods.delete(d.dataset.mid);
  }, true);
  EN.onUpdate = () => { renderTop(); renderNav(); const bk = $('#bkBanner'); if (cur.r === '' && !document.querySelector('#dlg[open]')) refreshHomeBits(); };
  $('#scrim').onclick = () => document.body.classList.remove('nav-open');
  $('#nav').addEventListener('click', e => { if (e.target.closest('a')) document.body.classList.remove('nav-open'); });

  /* ───────────── páginas ───────────── */
  function welcomeHTML() {
    return '<div class="welcome"><div class="big">EN<i></i></div><h1>Conteúdo não encontrado</h1><p class="muted">Os arquivos da pasta <code>material</code> não foram carregados. Confira se a pasta <code>material</code> está ao lado do index.html.</p></div>';
  }
  function greet() { const h = new Date().getHours(); return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite'; }
  function ringHTML() {
    const xp = EN.dayXP(EN.dkey()), g = S.settings.goal, pct = Math.min(1, xp / g), circ = 2 * Math.PI * 34;
    return `<div class="ring"><svg viewBox="0 0 84 84"><circle class="bg" cx="42" cy="42" r="34"/><circle class="fg" cx="42" cy="42" r="34" stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - pct)}"/></svg><b style="font-size:${xp >= 100 ? 12 : 14}px">${xp}/${g}</b></div>`;
  }
  function statsHTML() {
    const st = EN.streak(), lv = EN.level(), t = EN.dkey();
    return `<div class="grid g3" id="homeStats">
      <div class="card stat">${ringHTML()}<div><div class="big">${EN.studied(t) ? '✅' : '🎯'}</div><div class="lbl">${EN.studied(t) ? 'Meta de hoje batida!' : 'Meta diária de XP'}</div></div></div>
      <div class="card"><div class="stat"><span class="flame">${st.current ? '🔥' : '💤'}</span><div><div class="big">${st.current}</div><div class="lbl">${st.current === 1 ? 'dia seguido' : 'dias seguidos'} · recorde ${st.longest}</div></div></div>${EN.weekStrip()}${st.atRisk ? '<p class="small" style="margin:8px 0 0;color:var(--accent)">⚠ Estude hoje para manter a sequência.</p>' : ''}${!EN.studied(t) ? '<button class="btn sm" data-act="manual-today" style="margin-top:8px">✅ Já estudei hoje (fora do app)</button>' : ''}</div>
      <div class="card"><div class="stat"><span class="flame">⭐</span><div><div class="big">Nv ${lv.L}</div><div class="lbl">${esc(lv.title)}</div></div></div><div class="pbar" style="margin-top:12px"><i style="width:${lv.pct}%;background:linear-gradient(90deg,var(--c-amber),var(--accent))"></i></div><div class="small muted" style="margin-top:4px">${lv.xp} / ${lv.hi} XP para o nível ${lv.L + 1}</div></div></div>`;
  }
  function refreshHomeBits() { const s = $('#homeStats'); if (s) s.outerHTML = statsHTML(); }
  function homeHTML() {
    if (!COURSE) return welcomeHTML();
    const nx = nextSession(), any = Object.keys(S.ex).length || Object.keys(S.done).length;
    const nxS = nx ? C.SES[nx] : null, c = cfg();
    let h = `<div class="hero"><div class="deco">${esc((mods()[0] && mods()[0].icone) || '📘')}</div><div class="small" style="opacity:.8">${greet()}${S.settings.name ? ', ' + esc(S.settings.name) : ''}! 👋</div><h1>${esc(c.titulo || 'Seu curso')}</h1><p>${md(c.descricao || c.subtitulo || '')}</p><div class="row">` +
      (nxS ? `<a class="btn pri lg" href="${posHref(nx)}">${any || posOf(nx) ? '▶ Continuar' : '▶ Começar'}: ${esc(sesLabel(nxS.s))}${posOf(nx) ? ` <small style="font-weight:400;opacity:.85">· de onde parou (${esc(posOf(nx).lbl || '')})</small>` : ''}</a>` : '<span class="btn lg ghost">🎉 Tudo concluído!</span>') + `<a class="btn ghost" href="#/progresso">📅 Meu progresso</a></div></div>`;
    { /* R2 · "Hoje": um caminho principal (Continuar) e atalhos por tempo disponível */
      const tot = C.ORDER.length, dn = C.ORDER.filter(s => S.done[s]).length, curM = nxS ? mods().indexOf(nxS.m) + 1 : mods().length, pctAll = tot ? Math.round(dn / tot * 100) : 0;
      const q = EN.srs.counts(null), errN = C.errorList().length;
      h += `<div class="sectitle">Só tem pouco tempo? Escolha um</div><div class="qk"><a class="qk-i" href="#/cartoes"><span class="qk-t">🃏 Cartões do dia</span><small>${q.due + q.nw} para hoje · cerca de 8 min</small></a>${EN.game ? '<button type="button" class="qk-i" data-quick="rapid"><span class="qk-t">⚡ Rapidinha</span><small>6 perguntas · cerca de 3 min · sem áudio</small></button>' : ''}<a class="qk-i" href="#/erros"><span class="qk-t">📝 Revisar erros</span><small>${errN} no caderno · cerca de 2 min</small></a><a class="qk-i" href="#/conversar"><span class="qk-t">💬 Conversar</span><small>diálogo curto · cerca de 5 min</small></a></div><div class="qk-w"><span>Módulo ${curM} de ${mods().length} · ${dn}/${tot} sessões concluídas</span><div class="pbar"><i style="width:${pctAll}%;background:var(--good)"></i></div></div>`;
    }
    h += `<div class="sectitle">Hoje</div>${statsHTML()}`;
    { const q = EN.srs.counts(null); h += `<a class="due" href="#/cartoes"><span style="font-size:22px">🃏</span><span><b>Cartões de hoje</b><small>${q.due} revisão(ões) · ${q.nw} novo(s) · tudo dentro do curso, sem Anki</small></span><span class="mk">${q.due + q.nw ? '▶ estudar' : '✔ em dia'}</span></a>`; }
    { const due = dueReviews(); if (due.length) h += `<div class="sectitle">Revisão programada <span class="sp"><a href="#/revisao">ver todas</a></span></div>` + due.slice(0, 4).map(dueRow).join(''); }
    if (c.plano) h += `<div class="sectitle">Plano de estudos <span class="sp"><a href="#/plano">abrir o plano</a></span></div>` + phasesMini();
    h += `<div class="sectitle">Módulos do curso <span class="sp muted">${mods().length} módulo${mods().length === 1 ? '' : 's'} · ${C.ORDER.length} sessões</span></div><div class="grid g2">` + mods().map((m, i) => {
      const cc = modCol(m, i), ms = modStats(m);
      return `<a class="mcard" href="#/m/${esc(m.id)}"><div class="top" style="background:var(--p-${cc})"><div class="ic">${esc(m.icone || '📘')}</div><div><div class="ph" style="color:var(--c-${cc})">${esc(m.fase || (m.n != null ? 'Módulo ' + m.n : 'Módulo'))}</div><h3>${md(m.titulo)}</h3></div></div><div class="bd"><p>${md(m.descricao || '')}</p><div class="pbar"><i style="width:${ms.pct}%;background:var(--c-${cc})"></i></div><div class="ft"><span>${ms.d}/${ms.n} sessões concluídas</span><span>${ms.pct}%</span></div></div></a>`;
    }).join('') + '</div>';
    h += `<div class="grid g2" style="margin-top:8px"><div><div class="sectitle">Calendário</div>${EN.calendar(new Date().getFullYear(), new Date().getMonth(), { compact: true })}</div><div><div class="sectitle">Conquistas recentes</div><div class="card">${recentBadges()}<a class="btn sm" href="#/progresso" style="margin-top:10px">Ver todas</a></div></div></div>`;
    return h;
  }
  function recentBadges() {
    const got = EN.BADGES.filter(b => S.badges[b.id]).sort((a, b) => S.badges[b.id] < S.badges[a.id] ? -1 : 1).slice(0, 4);
    return got.length ? got.map(b => `<div style="display:flex;gap:10px;align-items:center;margin:6px 0"><span style="font-size:26px">${b.i}</span><div><b>${esc(b.n)}</b><div class="small muted">${esc(b.d)}</div></div></div>`).join('') : '<p class="muted small" style="margin:0">Estude hoje para desbloquear sua primeira conquista. 🌱</p>';
  }

  function moduleHTML(mid) {
    const m = C.MOD[mid]; if (!m) return notFound();
    const i = mods().indexOf(m), cc = modCol(m, i), ms = modStats(m);
    let h = `<div class="crumbs"><a href="#/">Início</a> › ${md(m.titulo)}</div><div class="lhead" style="background:var(--p-${cc})"><span class="tag" style="background:var(--c-${cc})">${esc(m.fase || (m.n != null ? 'Módulo ' + m.n : 'Módulo'))}</span><h1>${esc(m.icone || '')} ${md(m.titulo)}</h1><p>${md(m.descricao || '')}</p><div class="pbar" style="margin-top:10px"><i style="width:${ms.pct}%;background:var(--c-${cc})"></i></div><div class="small muted" style="margin-top:4px">${ms.d} de ${ms.n} sessões concluídas</div></div>`;
    if (m.objetivos && m.objetivos.length) h += `<div class="callout goal"><div class="ci">🎯</div><div><b class="ct">Objetivos do módulo</b><ul class="bl" style="margin:.2em 0">${m.objetivos.map(o => `<li>${md(o)}</li>`).join('')}</ul></div></div>`;
    if (m.blocos && m.blocos.length) h += C.blocksHTML(m.blocos, { s: null, m });
    h += `<div class="sectitle">Sessões</div>` + (m.sessoes || []).map(s => {
      const stt = sesState(s.id), ss = sesStats(s.id);
      return `<a class="lrow" href="#/a/${esc(s.id)}"><span class="nb" style="background:var(--p-${cc})">${isPrat(s) ? 'P' + esc(s.n) : s.n != null && s.n !== '' ? esc(s.n) : '•'}</span><span class="tt"><b>${md(s.titulo)}</b><span>${esc(s.resumo || '')}${s.duracao ? ' · ' + s.duracao + ' min' : ''}</span></span><span class="st">${stt === 'done' ? '✅ concluída' : stt === 'doing' ? `◐ ${ss.total ? ss.pct + '%' : 'em andamento'}` : '○ não iniciada'}</span></a>`;
    }).join('');
    h += `<div class="lnav"><a class="btn" href="#/revisao/${esc(m.id)}">📖 Revisão do módulo</a><a class="btn" href="#/cartoes">🃏 Estudar cartões</a><button class="btn ghost" data-act="ankimod" data-k="${esc(m.id)}" title="Opcional: só se você quiser usar o Anki">⬇ Exportar para o Anki (opcional)</button><a class="btn" href="#/relatorio/${esc(m.id)}">📤 Relatório deste módulo</a></div>`;
    return h;
  }

  function lessonHTML(sid, sec) {
    const x = C.SES[sid]; if (!x) return notFound();
    const { s, m } = x, i = mods().indexOf(m), cc = modCol(m, i), ss = sesStats(sid), idx = C.ORDER.indexOf(sid), prev = C.ORDER[idx - 1], next = C.ORDER[idx + 1];
    const heads = (s.blocos || []).filter(b => b.t === 'etapa');
    let h = `<div class="lesson"><div class="crumbs"><a href="#/">Início</a> › <a href="#/m/${esc(m.id)}">${md(m.titulo)}</a> › ${esc(sesLabel(s))}</div><div class="lhead" style="background:var(--p-${cc})"><span class="tag" style="background:var(--c-${cc})">${isPrat(s) ? 'Prática ' + esc(s.n) : s.n != null && s.n !== '' ? 'Sessão ' + esc(s.n) : 'Aula'}${s.duracao ? ' · ' + s.duracao + ' min' : ''}</span><h1>${md(s.titulo)}</h1>${s.resumo ? `<p>${md(s.resumo)}</p>` : ''}${ss.total ? `<div class="pbar" style="margin-top:8px"><i style="width:${ss.pct}%;background:var(--c-${cc})"></i></div><div class="small muted" style="margin-top:3px">${ss.done}/${ss.total} exercícios feitos</div>` : ''}${heads.length ? `<div class="toc">${heads.map(b => `<a href="#/a/${esc(sid)}/${esc(b.id || 'etapa-' + b.n)}"><b>${esc(b.n)}</b> ${esc(plainT(b.titulo))}</a>`).join('')}</div>` : ''}${EN.conv ? `<div class="act" style="margin-top:10px"><button type="button" class="btn sm" data-chat="ses" data-k="${esc(sid)}" title="Copia um prompt pronto para colar numa conversa nova do ChatGPT e treinar este tema falando">💬 Treinar conversa com o ChatGPT (copiar prompt)</button></div>` : ''}</div>`;
    h += resumeHTML(sid);
    h += C.blocksHTML(s.blocos || [], { s, m });
    h += finishHTML(sid, next);
    h += `<div class="lnav">${prev ? `<a class="btn" href="#/a/${esc(prev)}">← ${esc(sesLabel(C.SES[prev].s))}</a>` : '<span></span>'}<span style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center"><a class="btn" href="#/revisao/${esc(sid)}">📖 Revisão rápida</a></span>${next ? `<a class="btn pri" href="#/a/${esc(next)}">${esc(sesLabel(C.SES[next].s))} →</a>` : '<span></span>'}</div></div>`;
    return h;
  }
  const plainT = t => C.plain(t);
  function finishHTML(sid, next) {
    const d = S.done[sid];
    return `<div class="finish" id="finish"><div class="act" style="justify-content:center;margin-bottom:10px"><button class="btn sm" data-act="ai-ask" data-kind="ses" data-k="${esc(sid)}">🤖 Corrigir esta sessão com o Claude</button></div>${d ? `<h3>✅ Sessão concluída em ${EN.fmtDate(d)}</h3><p class="muted">Bom trabalho! Continue para manter a sequência.</p><div class="act" style="justify-content:center"><button class="btn sm" data-act="reopen" data-k="${esc(sid)}">Reabrir sessão</button>${next ? `<a class="btn pri" href="#/a/${esc(next)}">Próxima sessão →</a>` : '<a class="btn pri" href="#/">Voltar ao início</a>'}</div>` : `<h3>Terminou esta sessão?</h3><p class="muted">Conclua para ganhar <b>+50 XP</b> e contar o dia na sua sequência.</p><button class="btn coral lg" data-act="finish" data-k="${esc(sid)}">🎉 Concluir sessão</button>`}</div>`;
  }

  function progressHTML() {
    const st = EN.streak(), lv = EN.level(), days = Object.keys(S.log).filter(EN.studied).length, cs = EN.courseStats();
    const l7 = EN.last7(), mx = Math.max(1, ...l7.map(x => x.xp));
    const sel = cal.sel, info = S.log[sel], studied = EN.studied(sel);
    const sess = info && info.ses ? info.ses.map(id => C.SES[id] ? sesLabel(C.SES[id].s) : id) : [];
    let h = `<h1 class="pgtitle">📅 Progresso e conquistas</h1><p class="muted">Seus dias de estudo, sequência e conquistas.</p>
      <div class="xpgrid"><div class="card stat"><span class="flame">🔥</span><div><div class="big">${st.current}</div><div class="lbl">dias seguidos</div></div></div><div class="card stat"><span class="flame">🏅</span><div><div class="big">${st.longest}</div><div class="lbl">maior sequência</div></div></div><div class="card stat"><span class="flame">⭐</span><div><div class="big">${lv.xp}</div><div class="lbl">XP · Nv ${lv.L} ${esc(lv.title)}</div></div></div><div class="card stat"><span class="flame">📆</span><div><div class="big">${days}</div><div class="lbl">dias estudados</div></div></div><div class="card stat"><span class="flame">🎓</span><div><div class="big">${cs.sessions}</div><div class="lbl">sessões concluídas</div></div></div></div>
      <div class="grid g2" style="margin-top:16px"><div id="calbox">${EN.calendar(cal.y, cal.m, { sel })}</div><div class="card"><h3 style="margin-bottom:6px">${EN.parseKey(sel).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</h3><p class="muted" style="margin:.2em 0">${studied ? '✅ Dia estudado' : 'Dia sem estudo registrado'} · <b>${EN.dayXP(sel)} XP</b>${info && info.manual ? ' · marcado manualmente' : ''}</p>${sess.length ? `<p class="small" style="margin:.4em 0"><b>Sessões concluídas:</b><br>${sess.map(esc).join('<br>')}</p>` : ''}<button class="btn sm" data-act="manual-day" data-k="${sel}">${info && info.manual ? '✖ Desmarcar estudo manual' : '✅ Marcar este dia como estudado'}</button><p class="small muted" style="margin:8px 0 0">Use para registrar estudo feito fora do app (ex.: Anki no celular).</p><div class="sectitle" style="font-size:15px;margin:16px 0 4px">Últimos 7 dias (XP)</div><div class="bars">${l7.map(x => `<div title="${x.xp} XP"><i style="height:${Math.round(x.xp / mx * 100)}%"></i>${x.d}</div>`).join('')}</div></div></div>
      <div class="sectitle">Conquistas <span class="sp muted">${Object.keys(S.badges).length}/${EN.BADGES.length}</span></div><div class="bgrid">${EN.BADGES.map(b => `<div class="bdg ${S.badges[b.id] ? 'on' : ''}"><div class="bi">${b.i}</div><b>${esc(b.n)}</b><span>${esc(b.d)}</span>${S.badges[b.id] ? `<div class="small" style="color:var(--good)">✓ ${EN.fmtDate(S.badges[b.id])}</div>` : ''}</div>`).join('')}</div>
      <div class="sectitle">Como ganhar XP</div><div class="card small"><ul class="bl" style="margin:0"><li><b>+10 XP</b> por resposta certa de primeira · <b>+5</b> na 2ª tentativa · <b>+2</b> por um “não sei” honesto</li><li><b>+50 XP</b> ao concluir uma sessão · <b>+15</b> ao escrever a produção · <b>+5</b> por vídeo avaliado ou item do roteiro</li><li><b>+1 XP</b> por cartão respondido (+10 ao concluir o dia de cartões) · <b>+3 XP</b> por palavra salva nos cartões</li><li>🎮 <b>Jogar</b>: <b>+2 XP</b> por acerto, bônus de combo, <b>+6</b> por rodada concluída (+6 se perfeita), missões do dia e baú (até ${100} XP por dia nas rodadas)</li><li>Um dia conta como estudado ao <b>bater a meta de XP</b> (${S.settings.goal}), concluir uma sessão ou marcar manualmente.</li></ul></div>`;
    return h;
  }

  function notFound() { return `<div class="welcome"><h1>Página não encontrada</h1><p class="muted">Esse conteúdo não existe no curso carregado (o material pode ter sido atualizado).</p><a class="btn pri" href="#/">Voltar ao início</a></div>`; }

  /* ── revisão programada (D+1, D+7, D+30) e material de revisão ── */
  const MARKS = [1, 7, 30];
  const daysSince = iso => Math.round((EN.parseKey(EN.dkey()) - EN.parseKey(EN.dkey(new Date(iso)))) / 864e5);
  function dueReviews() {
    const out = [];
    Object.keys(S.done).forEach(sid => {
      if (!C.SES[sid] || isPrat(C.SES[sid].s)) return; /* sessões de prática não agendam D+1/D+7/D+30 */
      const d = daysSince(S.done[sid]), due = MARKS.filter(m => d >= m && !S.rev[sid + ':' + m]);
      if (due.length) out.push({ sid, mark: due[due.length - 1], marks: due, d });
    });
    return out.sort((a, b) => b.d - a.d);
  }
  const dueRow = x => { const { s, m } = C.SES[x.sid]; return `<a class="due" href="#/revisao/${esc(x.sid)}"><span style="font-size:22px">📖</span><span><b>${esc(sesLabel(s))}</b><small>${esc(plainT(m.titulo))} · concluída há ${x.d} dia(s)</small></span><span class="mk">D+${x.mark}</span></a>`; };
  function sessionReview(s) {
    if (s.revisao && s.revisao.length) return { blocks: s.revisao, auto: false };
    return { blocks: (s.blocos || []).filter(b => ['tip', 'errors', 'table', 'decision', 'q'].includes(b.t)).slice(0, 6), auto: true };
  }
  function revisaoHTML(id) {
    if (C.SES[id]) {
      const { s, m } = C.SES[id], rv = sessionReview(s), due = dueReviews().find(x => x.sid === id);
      return `<div class="crumbs"><a href="#/">Início</a> › <a href="#/revisao">Revisão</a> › ${esc(sesLabel(s))}</div><div class="rvhead"><span class="small muted">📖 Revisão rápida · ${esc(plainT(m.titulo))}</span><h1>${esc(sesLabel(s))}</h1><p class="muted" style="margin:0">${rv.auto ? 'Resumo automático das regras, quadros e erros desta sessão.' : 'Material sintético: só o essencial para relembrar em poucos minutos.'}</p></div><div class="rvblock">${C.blocksHTML(rv.blocks, { s, m })}</div><div class="lnav"><a class="btn" href="#/a/${esc(id)}">← Aula completa</a><a class="btn" href="#/erros">📝 Caderno de erros</a>${due ? `<button class="btn coral" data-act="rvdone" data-k="${esc(id)}">✅ Revisei (D+${due.mark})</button>` : '<span class="small muted">Revisões desta sessão em dia ✔</span>'}</div>`;
    }
    if (C.MOD[id]) {
      const m = C.MOD[id];
      return `<div class="crumbs"><a href="#/">Início</a> › <a href="#/revisao">Revisão</a> › ${md(m.titulo)}</div><div class="rvhead"><span class="small muted">📖 Revisão do módulo</span><h1>${esc(m.icone || '')} ${md(m.titulo)}</h1></div>` +
        (m.sessoes || []).map(s => `<h2 class="sec"><span>${esc(sesLabel(s))}</span></h2><div class="rvblock">${C.blocksHTML(sessionReview(s).blocks, { s, m })}</div><div class="act"><a class="btn sm" href="#/a/${esc(s.id)}">Aula completa</a></div>`).join('');
    }
    const due = dueReviews();
    let h = `<h1 class="pgtitle">📖 Revisão programada</h1><p class="muted">Cada sessão concluída volta em <b>D+1</b>, <b>D+7</b> e <b>D+30</b> (curva do esquecimento). Abra o material sintético, releia em voz alta e marque como revisado.</p><div class="sectitle">Para revisar agora <span class="sp muted">${due.length}</span></div>`;
    h += due.length ? due.map(dueRow).join('') : '<div class="card center" style="padding:26px"><div style="font-size:36px">✅</div><p class="muted" style="margin:0">Nenhuma revisão pendente. Conclua sessões para agendar as próximas.</p></div>';
    h += '<div class="sectitle">Material de revisão por módulo</div>' + mods().map((m, i) => `<div class="card" style="margin:10px 0"><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span style="font-size:22px">${esc(m.icone || '📘')}</span><b style="flex:1;min-width:160px">${md(m.titulo)}</b><a class="btn sm" href="#/revisao/${esc(m.id)}">Módulo inteiro</a></div><div class="mods" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">${(m.sessoes || []).map(s => `<a class="btn sm ghost" href="#/revisao/${esc(s.id)}">${S.done[s.id] ? '✓ ' : ''}${esc(isPrat(s) ? 'P' + s.n : s.n != null && s.n !== '' ? 'S' + s.n : 'Início')}</a>`).join('')}</div></div>`).join('');
    return h;
  }

  /* ── etapa 2 da sessão: revisão feita DENTRO da própria sessão (seção 2.1) ── */
  C.revrefHTML = ctx => {
    const sid = ctx.s && ctx.s.id, idx = C.ORDER.indexOf(sid);
    let list = dueReviews().filter(x => x.sid !== sid).slice(0, 3).map(x => ({ sid: x.sid, due: x }));
    const agendadas = list.length > 0;
    if (!list.length) for (let i = idx - 1; i >= 0 && list.length < 2; i--) list.push({ sid: C.ORDER[i] });
    const errs = C.errorList().slice(0, 4), nErr = C.errorList().length;
    let h = `<div class="revref"><p class="small muted" style="margin:0 0 8px">${agendadas ? 'O app agendou estas revisões (curva do esquecimento: D+1, D+7, D+30). Leia em voz alta, depois marque como revisado.' : 'Nenhuma revisão agendada para hoje: releia o resumo das últimas sessões. Cada sessão que você concluir volta aqui em D+1, D+7 e D+30.'}</p>`;
    h += list.length ? list.map((x, i) => {
      const { s, m } = C.SES[x.sid], rv = sessionReview(s);
      return `<details class="rvd" ${i === 0 ? 'open' : ''}><summary><span>📖 ${esc(sesLabel(s))}</span>${x.due ? `<span class="mk">D+${x.due.mark}</span>` : ''}</summary><div class="rvblock">${C.blocksHTML(rv.blocks, { s, m })}</div>${x.due ? `<div class="act"><button class="btn sm coral" data-act="rvdone" data-k="${esc(x.sid)}">✅ Revisei (D+${x.due.mark})</button></div>` : ''}</details>`;
    }).join('') : '<p class="muted">Esta é a primeira sessão: ainda não há o que revisar. ✔</p>';
    h += nErr ? `<div class="sectitle" style="margin-top:14px">📝 Erros para refazer agora <span class="sp muted">${errs.length} de ${nErr} · <a href="#/erros">ver todos</a></span></div>` + errs.map(id => { const { b, i, s, m } = C.ITEMS[id], st = S.ex[id], lab = { wrong: 'errou', idk: 'não sei', ok: '2ª tentativa', self: '2ª tentativa' }[st.st]; return `<div class="errcard"><div class="eh2"><span class="tg2">${lab}</span>${esc(sesLabel(s))} › ${esc(b.titulo || b.title)} · item ${i + 1}</div>${C.rvItemHTML(id)}</div>`; }).join('') : '<p class="small muted" style="margin:12px 0 0">📝 Caderno de erros vazio: nada para refazer. ✔</p>';
    return h + '</div>';
  };

  /* ── caderno de erros (refazer ali mesmo) ── */
  let errFlt = '';
  function errosHTML() {
    const all = C.errorList(), fixed = C.fixedList().length, l = errFlt ? all.filter(id => C.ITEMS[id].m.id === errFlt) : all;
    let h = `<h1 class="pgtitle">📝 Caderno de erros</h1><p class="muted">Refaça aqui as questões que você errou, marcou “não sei” ou acertou só na 2ª tentativa. Acertou? O erro sai da lista e você ganha XP. Ficou em dúvida na regra? Abra o material de revisão.</p>`;
    h += `<div class="fltbar"><span><b>${all.length}</b> para corrigir · <b>${fixed}</b> já corrigidos</span><span style="flex:1"></span><label class="small">Módulo: <select id="errFlt"><option value="">todos</option>${mods().map(m => `<option value="${esc(m.id)}" ${errFlt === m.id ? 'selected' : ''}>${esc(plainT(m.titulo))}</option>`).join('')}</select></label></div>`;
    if (!l.length) return h + `<div class="card center" style="padding:34px"><div style="font-size:42px">🎉</div><p class="muted">${all.length ? 'Nenhum erro neste módulo.' : (fixed ? 'Tudo corrigido! Bom trabalho.' : 'Nenhum erro registrado ainda. Faça os exercícios das sessões.')}</p></div>`;
    return h + l.map(id => {
      const { b, i, s, m } = C.ITEMS[id], st = S.ex[id], lab = { wrong: 'errou', idk: 'não sei', ok: '2ª tentativa', self: '2ª tentativa' }[st.st];
      return `<div class="errcard"><div class="eh2"><span class="tg2">${lab}</span><b>${esc(plainT(m.titulo))}</b> › ${esc(sesLabel(s))} › ${esc(b.titulo || b.title)} · item ${i + 1}</div>${C.rvItemHTML(id)}<div class="foot"><a class="btn sm" href="#/revisao/${esc(s.id)}">📖 Material de revisão</a><a class="btn sm ghost" href="#/a/${esc(s.id)}">↗ Ver na aula</a></div></div>`;
    }).join('');
  }

  /* ── plano de estudos ── */
  function phaseStats(f) {
    const ms = (f.modulos || []).map(id => C.MOD[id]).filter(Boolean), tot = ms.reduce((a, m) => a + (m.sessoes || []).length, 0), d = ms.reduce((a, m) => a + (m.sessoes || []).filter(s => S.done[s.id]).length, 0);
    return { ms, tot, d, pct: tot ? Math.round(d / tot * 100) : 0 };
  }
  function phasesMini() {
    const P = COURSE && COURSE.plano; if (!P) return '';
    return `<div class="grid g2">${(P.fases || []).filter(f => (f.modulos || []).length).map(f => { const st = phaseStats(f), c = col(f.cor); return `<a class="mcard" href="#/plano"><div class="top" style="background:var(--p-${c})"><div class="ic" style="font-weight:700;font-size:15px">${esc(f.nivel)}</div><div><div class="ph" style="color:var(--c-${c})">Fase ${esc(f.n)}</div><h3>${esc(f.nome)}</h3></div></div><div class="bd"><div class="pbar"><i style="width:${st.pct}%;background:var(--c-${c})"></i></div><div class="ft"><span>${st.d}/${st.tot} sessões</span><span>${st.pct}%</span></div></div></a>`; }).join('')}</div>`;
  }
  function planoHTML() {
    const P = COURSE && COURSE.plano; if (!P) return notFound();
    const T = (head, rows, o) => C.blockHTML(Object.assign({ t: 'table', head, rows }, o || {}), {});
    let h = `<h1 class="pgtitle">🗺️ Plano de estudos</h1><p class="muted">${md(P.objetivo || '')}</p>`;
    h += '<div class="sectitle">Onde você está</div>' + (P.fases || []).map(f => {
      const st = phaseStats(f), c = col(f.cor), crit = S.plan.crit[f.id], has = (f.modulos || []).length;
      return `<div class="phase" style="border-left-color:var(--c-${c})"><div class="ph-top"><span class="lvl" style="background:var(--c-${c})">${esc(f.nivel)}</span><h3>Fase ${esc(f.n)} · ${esc(f.nome)}</h3><span class="muted small" style="margin-left:auto">${has ? `${st.d}/${st.tot} sessões · ${st.pct}%` : 'conteúdo futuro'}</span></div>${has ? `<div class="pbar" style="margin-top:8px"><i style="width:${st.pct}%;background:var(--c-${c})"></i></div>` : ''}<p style="margin:.7em 0 0">${md(f.descricao || '')}</p>${has ? `<div class="mods">${st.ms.map(m => { const ms = modStats(m); return `<a class="${ms.pct === 100 ? 'done' : ''}" href="#/m/${esc(m.id)}">${esc(m.icone || '')} ${esc(plainT(m.titulo))} · ${ms.pct}%</a>`; }).join('')}</div>` : ''}<label class="crit"><input type="checkbox" data-act="crit" data-k="${esc(f.id)}" ${crit ? 'checked' : ''}><span><b>Critério para avançar:</b> ${md(f.criterio || '')}${f.marco && C.SES[f.marco] ? `<br><a class="small" href="#/a/${esc(f.marco)}">Ir à sessão-marco →</a>` : ''}<br><span class="small muted">Marque quando cumprir: a fase avança por critério, não por data.</span></span></label></div>`;
    }).join('');
    h += '<div class="sectitle">Perfil e objetivos</div>' + T(['Item', 'Definição'], P.perfil || [], { firstCol: true });
    h += '<div class="sectitle">Método</div><ul class="bl">' + (P.metodo || []).map(([a, b]) => `<li><b>${esc(a)}:</b> ${md(b)}</li>`).join('') + '</ul>';
    h += '<div class="sectitle">A sessão de 40 minutos</div><p class="muted">As sessões guiadas seguem sempre os mesmos 5 blocos: primeiro revisar, depois aprender, depois usar.</p>' + T(['Bloco', 'Min', 'O que fazer'], P.sessao || [], { firstCol: true });
    if (P.pratica) h += `<div class="sectitle">A sessão de prática</div><p class="muted">${md(P.pratica.intro || '')}</p>` + T(['Bloco', 'Min', 'O que fazer'], P.pratica.blocos || [], { firstCol: true });
    h += '<p><b>Pílulas</b> (momentos livres, sem compromisso de tempo):</p><ul class="bl">' + (P.pilulas || []).map(x => `<li>${md(x)}</li>`).join('') + '</ul>';
    h += `<div class="sectitle">Ciclo do módulo</div><p class="muted">${md((P.ciclo && P.ciclo.intro) || '')}</p><ol class="bl">${((P.ciclo && P.ciclo.passos) || []).map(x => `<li>${md(x)}</li>`).join('')}</ol>`;
    h += '<div class="sectitle">Recursos gratuitos</div><div class="tw"><table><tr><th>Recurso</th><th>Fases</th><th>Uso no plano</th></tr>' + (P.recursos || []).map(([n, u, f, uso]) => `<tr><td class="fc">${u ? `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)}</a>` : esc(n)}</td><td>${esc(f)}</td><td>${md(uso)}</td></tr>`).join('') + '</table></div>';
    if (P.nota) h += `<div class="callout info"><div class="ci">ℹ️</div><div>${md(P.nota)}</div></div>`;
    return h;
  }

  /* ── cartões do Anki de um módulo (a partir das tabelas de vocabulário) ── */
  function ankiModule(mid) {
    const m = C.MOD[mid]; if (!m) return;
    const rows = [];
    (m.sessoes || []).forEach(s => (s.blocos || []).forEach(b => { if (b.t === 'vocab') b.items.forEach(([n, en, pr, pt]) => rows.push([n, en, pr, pt])); }));
    rows.sort((a, b) => a[0] - b[0]);
    if (!rows.length) { EN.toast('Este módulo não tem vocabulário.'); return; }
    const tsv = f => /["\t\n]/.test(f) ? '"' + f.replace(/"/g, '""') + '"' : f;
    const deck = (m.anki && m.anki.deck) || ('Inglês::' + plainT(m.titulo)), tag = [C.deckTag(), m.id].join(' ');
    const lines = ['#separator:tab', '#html:true', '#tags column:3', '#columns:Frente\tVerso\tTags', '#deck:' + deck];
    rows.forEach(([n, en, pr, pt]) => lines.push([tsv(esc(en)), tsv(esc(pt) + (pr ? `<br><small>${esc(pr)}</small>` : '')), tsv(tag)].join('\t')));
    C.download(`anki_${m.id}.txt`, lines.join('\n') + '\n');
    EN.toast(`${rows.length} cartões gerados. No Anki: Arquivo → Importar.`);
  }
  function buildReport(mid) {
    const m = C.MOD[mid]; if (!m) return '';
    const L = [], now = new Date(), blocks = [];
    (m.sessoes || []).forEach(s => (s.blocos || []).forEach(b => blocks.push({ b, s })));
    L.push(`RELATÓRIO · ${plainT(m.titulo)}`); L.push(`Gerado em ${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`);
    const st = EN.streak(); L.push(`Estudo: ${Object.keys(S.log).filter(EN.studied).length} dias estudados · sequência atual ${st.current} (recorde ${st.longest}) · ${EN.totalXP()} XP · ${EN.courseStats().sessions} sessões concluídas`); L.push('');
    const tests = blocks.filter(x => x.b.t === 'ex' && x.b.teste);
    if (tests.length) {
      L.push(`1) MINI-TESTE (feito sem consultar: ${S.notes['nc:' + mid] ? 'sim' : 'não informado'})`);
      tests.forEach(({ b }) => { L.push(b.titulo || b.title); b.items.forEach((it, i) => { const v = ((S.ex[C.iid(b, i)] || {}).v || []).map(x => x.trim()); L.push(`  ${i + 1}. ${it.q} → ${v.some(Boolean) ? v.map(x => x || '—').join(' | ') : '(em branco)'}`); }); });
      L.push('');
    }
    const prods = blocks.filter(x => x.b.t === 'prod');
    L.push('2) FRASES DE PRODUÇÃO'); prods.forEach(({ b, s }) => { L.push(`${sesLabel(s)}:`); const t = (S.prod[b.id] || '').trim(); L.push(t ? t.split('\n').map(x => '  ' + x).join('\n') : '  (não escrito)'); }); if (!prods.length) L.push('  (nenhuma tarefa neste módulo)'); L.push('');
    const vids = blocks.filter(x => x.b.t === 'video');
    L.push('3) VÍDEOS (compreensão sem legenda, 0–10)'); vids.forEach(({ b }) => { const v = S.video[b.id] || {}; L.push(`  ${plainT(b.titulo)}: ${v.score != null && v.score !== '' ? v.score : '—'}${v.sents && v.sents.trim() ? '  · frases: ' + v.sents.trim().replace(/\n/g, ' / ') : ''}`); }); if (!vids.length) L.push('  (nenhum)');
    { const ai = Object.keys(S.notes).filter(k => k.indexOf('ai:') === 0 && typeof S.notes[k] === 'string' && S.notes[k].trim() && (C.VIDEOS[k.slice(3)] || C.PRODS[k.slice(3)] || C.SES[k.slice(3)]) && (((C.VIDEOS[k.slice(3)] || C.PRODS[k.slice(3)] || C.SES[k.slice(3)]).m || {}).id === mid)); if (ai.length) { L.push(''); L.push('   Devolutivas que o Claude já me deu:'); ai.forEach(k => L.push(`   • ${k.slice(3)}: ${S.notes[k].trim().replace(/\n+/g, ' / ')}`)); } }
    L.push('');
    L.push('4) DESEMPENHO NOS EXERCÍCIOS (autocorreção do app)');
    const errs = [];
    blocks.filter(x => x.b.t === 'ex' && !x.b.teste).forEach(({ b }) => {
      const c = { ok1: 0, ok2: 0, wrong: 0, idk: 0, self: 0, pend: 0 };
      b.items.forEach((_, i) => { const e = S.ex[C.iid(b, i)]; if (!e || !e.st || e.st === 'retry') c.pend++; else if (e.st === 'ok') (e.tries > 1 ? c.ok2++ : c.ok1++); else c[e.st]++; if (e && (e.st === 'wrong' || e.st === 'idk' || ((e.st === 'ok' || e.st === 'self') && e.tries > 1))) errs.push([b, i, e]); });
      L.push(`  ${b.titulo || b.title}: ${c.ok1} de 1ª, ${c.ok2} de 2ª, ${c.self} marcadas certas por mim, ${c.wrong} erros, ${c.idk} “não sei”, ${c.pend} sem fazer`);
    });
    if (errs.length) { L.push(''); L.push('   Itens para reforçar:'); errs.forEach(([b, i, e]) => L.push(`   • ${b.titulo || b.title} #${i + 1} [${e.st === 'idk' ? 'não sei' : e.st === 'wrong' ? 'errou' : '2ª tentativa'}] "${b.items[i].q}" → respondi: "${(e.v || []).join(' | ')}" · certo: "${C.answerText(b.items[i])}"`)); }
    { const fx = C.fixedList().filter(id => C.ITEMS[id].m.id === mid).length, pend = C.errorList().filter(id => C.ITEMS[id].m.id === mid).length; L.push(`   Caderno de erros deste módulo: ${fx} corrigido(s) · ${pend} ainda por corrigir`); }
    L.push('');
    const hist = Object.values(S.hist), rep = hist.filter(h => h.count > 1);
    { const cs = Object.entries(S.srs.cards), hard = cs.filter(([, c]) => (c.l || 0) >= 2).map(([id]) => { const w = EN.srs && EN.srs.word(id); return w ? `${w} (${S.srs.cards[id].l}x)` : ''; }).filter(Boolean); L.push('5) CARTÕES (do curso) E PALAVRAS QUE EU SELECIONEI'); L.push(`  Cartões: ${cs.length} no total · ${cs.filter(([, c]) => c.i >= 21).length} maduros · ${Object.values(S.srs.stats).reduce((a, x) => a + (x.r || 0), 0)} respostas dadas`); L.push(`  Mais difíceis (esqueci 2+ vezes): ${hard.length ? hard.join(', ') : 'nenhum'}`); }
    L.push(`  Exportadas para o Anki: ${hist.length}${hist.length ? ' → ' + hist.map(h => h.front).join(', ') : ''}`); L.push(`  Ainda no banco: ${S.bank.length}${S.bank.length ? ' → ' + S.bank.map(h => h.front).join(', ') : ''}`); L.push(`  Repetidas / difíceis: ${rep.length ? rep.map(h => `${h.front} (${h.count}x)`).join(', ') : 'nenhuma'}`); L.push('');
    const po = Object.entries(S.ptOpens).filter(([, n]) => n > 0);
    L.push('6) CAIXAS EM PORTUGUÊS ABERTAS'); L.push(`  Total: ${po.reduce((a, [, n]) => a + n, 0)}${po.length ? ' → ' + po.map(([k, n]) => k.replace(/^enpt:|^exm:|^rd:/, '') + ' (' + n + 'x)').join(', ') : ''}`); L.push('');
    if (EN.game) { L.push('6b) JOGO (rodadas de exercícios)'); EN.game.reportLines().forEach(x => L.push(x)); L.push(''); }
    L.push('7) COMO FOI O ESTUDO'); L.push((S.notes['rep:' + mid] || '').trim() || '  (sem comentário)');
    return L.join('\n');
  }
  let repMod = null;
  function relatorioHTML(mid) {
    if (!mods().length) return notFound();
    repMod = C.MOD[mid] ? mid : (repMod && C.MOD[repMod] ? repMod : (S.last && C.SES[S.last] ? C.SES[S.last].m.id : mods()[0].id));
    return `<h1 class="pgtitle">📤 Relatório para a IA</h1><p class="muted">Montado automaticamente com o que você fez no app. Revise, comente e copie para a conversa com a IA.</p><div class="act" style="align-items:center;margin:10px 0"><label class="small">Módulo: <select id="repSel" style="font:inherit;color:var(--text);background:var(--surface);border:1.5px solid var(--border);border-radius:9px;padding:4px 9px">${mods().map(m => `<option value="${esc(m.id)}" ${m.id === repMod ? 'selected' : ''}>${esc(plainT(m.titulo))}</option>`).join('')}</select></label></div><label class="small muted">Como foi o estudo? (o que achou fácil, difícil ou chato)</label><textarea data-act="week" placeholder="…">${esc(S.notes['rep:' + repMod] || '')}</textarea><div class="exf"><button class="btn coral" data-act="copyrep">📋 Copiar relatório</button><button class="btn" data-act="dlrep">⬇ Baixar .txt</button></div><div class="sectitle">Pré-visualização</div><pre class="rep" id="repPre">${esc(buildReport(repMod))}</pre>`;
  }

  /* ── ajuda ── */
  function ajudaHTML() {
    return `<h1 class="pgtitle">❓ Como usar</h1><div class="callout info"><div class="ci">🗺️</div><div><b class="ct">Por onde começar</b>O curso inteiro já vem dentro desta página. Abra o <a href="#/plano">Plano de estudos</a>, entre no <b>Módulo 1</b> e siga as sessões na ordem: cada uma tem um roteiro de 40 minutos (1 cartões, 2 revisão, 3 conteúdo novo, 4 input, 5 produção) e as seções da página seguem esses mesmos números: 1.1, 2.1, 3.1…</div></div><div class="callout warn"><div class="ci">🔄</div><div><b class="ct">Computador e celular</b>O progresso fica <b>neste navegador</b>. Para levar o progresso de um aparelho ao outro: clique em <b>🔄</b> no topo, <b>exporte</b> o arquivo <code>.json</code>, guarde-o onde quiser e <b>importe</b> no outro aparelho (escolha <b>Mesclar</b> para juntar sem perder nada).</div></div>
    <div class="fcards"><div class="fcard" style="background:var(--p-blue)"><div class="fi">🖱️</div><b>Selecione texto</b><p>Palavra ou frase → mini-menu com 🔊 ouvir (🐢 devagar), 🔍 traduzir e ➕ Cartão (botão direito no computador; toque longo no celular).</p></div><div class="fcard" style="background:var(--p-green)"><div class="fi">🔍</div><b>Tradução em camadas</b><p>Primeiro dicas palavra a palavra; a tradução completa só se você pedir. Tudo vem do material, sem tradutor automático.</p></div><div class="fcard" style="background:var(--p-coral)"><div class="fi">🃏</div><b>Cartões do curso</b><p>Cada sessão traz 10 cartões (abra pelo botão da etapa 1). Em <a href="#/cartoes">Cartões</a> você cria baralhos, adiciona, edita e busca cartões, como no Anki. Selecione uma palavra ou um trecho e use ➕ Cartão: preencha a tradução e um exemplo.</p></div><div class="fcard" style="background:var(--p-rose)"><div class="fi">🤖</div><b>Correção com o Claude</b><p>Nos blocos de vídeo e produção há o botão <b>🤖 Pedir correção</b>: ele monta o pedido com as suas respostas. Cole na conversa e traga a devolutiva para o app.</p></div><div class="fcard" style="background:var(--p-amber)"><div class="fi">✏️</div><b>Exercícios</b><p>Digite e verifique. Há 2ª tentativa; “não sei” é válido. Erros vão para o Caderno de erros.</p></div><div class="fcard" style="background:var(--p-teal)"><div class="fi">🔥</div><b>Sequência e XP</b><p>Bata a meta diária de XP, conclua sessões ou marque o dia manualmente (estudo no Anki, por exemplo).</p></div><div class="fcard" style="background:var(--p-violet)"><div class="fi">🎮</div><b>Jogar</b><p>Rodadas rápidas com exercícios variados (lacunas, pares, ditado, montar frase…). Você escolhe os tipos e o conteúdo; o XP, a sequência e as conquistas são os mesmos do curso, e o que você erra volta nos cartões. Com pouco tempo, use a <b>⚡ Rapidinha</b>: 6 perguntas sem áudio e sem fala.</p></div><div class="fcard" style="background:var(--p-blue)"><div class="fi">💬</div><b>Conversar</b><p>Diálogos curtos para escolher ou escrever a sua resposta. Em cada sessão e em cada situação há um botão que copia um <b>prompt pronto</b> para você colar numa conversa nova do ChatGPT e treinar falando.</p></div></div>
    <div class="sectitle">Guia visual dos textos</div>${C.blockHTML({ t: 'legend' }, {})}
    <div class="sectitle">Seus dados</div><div class="callout warn"><div class="ci">💾</div><div>O progresso fica <b>neste navegador</b>. Exporte um arquivo de progresso em 🔄 de vez em quando (o app avisa depois de 7 dias) e guarde-o em um lugar seguro, como o seu Drive ou OneDrive.</div></div>`;
  }

  /* ───────────── roteador ───────────── */
  function route() {
    C.hidePop();
    const p = (location.hash || '#/').replace(/^#\/?/, '').split('/').map(decodeURIComponent);
    const r = p[0] || '', a = p[1] || '', b = p.slice(2).join('/');
    const same = cur.r === r && cur.a === a && cur.b === b; cur = { r, a, b };
    if (!same) resumeSnap = (r === 'a' && !b && COURSE && posOf(a)) ? Object.assign({ sid: a }, posOf(a)) : null;
    if (!same && (r === 'm' || r === 'a')) modsOpen = true; /* ao entrar num módulo ou sessão, o grupo "Módulos" se abre */
    let html, title = cfg().titulo || 'My English School';
    if (EN.game) EN.game.leave(r); /* ao sair do jogo, as escolhas de tipos voltam ao padrão */
    if (!COURSE) html = welcomeHTML();
    else switch (r) {
      case 'jogar': html = EN.game.pageHTML(); title = 'Jogar'; break;
      case 'conversar': html = EN.conv ? EN.conv.pageHTML(a) : notFound(); title = 'Conversar'; break;
      case 'm': html = moduleHTML(a); title = C.MOD[a] ? plainT(C.MOD[a].titulo) : title; break;
      case 'a': html = lessonHTML(a, b); if (C.SES[a]) { title = plainT(C.SES[a].s.titulo); if (S.last !== a) { S.last = a; S.lastAt = new Date().toISOString(); save(); } } break;
      case 'progresso': html = progressHTML(); title = 'Progresso'; break;
      case 'erros': html = errosHTML(); title = 'Caderno de erros'; break;
      case 'plano': html = planoHTML(); title = 'Plano de estudos'; break;
      case 'revisao': html = revisaoHTML(a); title = 'Revisão'; break;
      case 'cartoes': html = EN.srs.pageHTML(a, b); title = 'Cartões'; break;
      case 'relatorio': html = relatorioHTML(a); title = 'Relatório'; break;
      case 'ajuda': html = ajudaHTML(); title = 'Como usar'; break;
      default: html = homeHTML(); cur.r = '';
    }
    view.innerHTML = html; { const base = cfg().titulo || 'My English School'; document.title = (EN.profile === 'teste' ? '🧪 ' : '') + (title === base ? base : title + ' · ' + base); }
    renderNav(); renderTop(); document.body.classList.remove('nav-open');
    if (r === 'a' && b) setTimeout(() => { const el = document.getElementById('sec-' + a + '-' + b); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 40);
    else if (!same) window.scrollTo({ top: 0, behavior: 'instant' });
  }
  view.addEventListener('click', e => { const b = e.target.closest('[data-quick]'); if (b && b.dataset.quick === 'rapid' && EN.game) { e.preventDefault(); EN.game.open({ rapid: true }); } });
  EN.rerender = () => { const y = scrollY; const keep = cur; route(); window.scrollTo({ top: y, behavior: 'instant' }); };
  window.addEventListener('hashchange', route);

  /* ───────────── eventos das páginas ───────────── */
  view.addEventListener('click', async e => {
    const cd = e.target.closest('[data-cal]'); if (cd) { const box = cd.closest('.cal'); let y = +box.dataset.y, m = +box.dataset.m + (+cd.dataset.cal); if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; } cal.y = y; cal.m = m; if (cur.r === 'progresso') $('#calbox').innerHTML = EN.calendar(y, m, { sel: cal.sel }); else { box.outerHTML = EN.calendar(y, m, { compact: true }); } return; }
    const dd = e.target.closest('[data-day]'); if (dd && cur.r === 'progresso') { cal.sel = dd.dataset.day; EN.rerender(); return; }
    const a = e.target.closest('[data-act]'); if (!a) return; const act = a.dataset.act;
    if (act === 'ankimod') ankiModule(a.dataset.k);
    else if (act === 'rvdone') { const sid = a.dataset.k, d = daysSince(S.done[sid] || new Date().toISOString()); MARKS.filter(m => d >= m).forEach(m => { if (!S.rev[sid + ':' + m]) { S.rev[sid + ':' + m] = new Date().toISOString(); EN.gainOnce('rev-' + sid + ':' + m, 5); } }); save(); EN.toast('Revisão registrada. ✔'); EN.rerender(); }
    else if (act === 'manual-today') { EN.markManual(EN.dkey(), true); EN.toast('Hoje marcado como estudado. 🔥'); refreshHomeBits(); }
    else if (act === 'manual-day') { const k = a.dataset.k; EN.markManual(k, !(S.log[k] && S.log[k].manual)); EN.rerender(); }
    else if (act === 'pos-clear') { S.pos[a.dataset.k] = { sec: '', at: new Date().toISOString() }; resumeSnap = null; save(); const rb = a.closest('.resume'); if (rb) rb.remove(); }
    else if (act === 'finish') { S.pos[a.dataset.k] = { sec: '', at: new Date().toISOString() }; const first = EN.completeSession(a.dataset.k); $('#finish').outerHTML = finishHTML(a.dataset.k, C.ORDER[C.ORDER.indexOf(a.dataset.k) + 1]); if (first) EN.toast('🎉 Sessão concluída! +50 XP'); }
    else if (act === 'reopen') { delete S.done[a.dataset.k]; save(); $('#finish').outerHTML = finishHTML(a.dataset.k, C.ORDER[C.ORDER.indexOf(a.dataset.k) + 1]); EN.onUpdate(); }
    else if (act === 'copyrep') { const t = buildReport(repMod); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => EN.toast('Relatório copiado. Cole na conversa com a IA.')).catch(() => { const r = document.createRange(); r.selectNodeContents($('#repPre')); getSelection().removeAllRanges(); getSelection().addRange(r); EN.toast('Selecionei o texto: use Ctrl+C.'); }); }
    else if (act === 'dlrep') C.download(`relatorio_${repMod}_${EN.dkey()}.txt`, buildReport(repMod));
  });
  view.addEventListener('input', e => { if (e.target.dataset.act === 'week') { S.notes['rep:' + repMod] = e.target.value; save(); const p = $('#repPre'); if (p) p.textContent = buildReport(repMod); } });
  view.addEventListener('change', e => {
    if (e.target.id === 'repSel') { repMod = e.target.value; location.hash = '#/relatorio/' + repMod; }
    else if (e.target.id === 'errFlt') { errFlt = e.target.value; EN.rerender(); }
    else if (e.target.dataset.act === 'crit') { S.plan.crit[e.target.dataset.k] = e.target.checked; save(); if (e.target.checked) { EN.gainOnce('crit-' + e.target.dataset.k, 100); EN.toast('🎓 Critério cumprido! +100 XP'); } }
  });

  /* ───────────── carregar curso ───────────── */
  const KNOWN = ['h', 'p', 'bullets', 'enpt', 'table', 'tip', 'q', 'errors', 'decision', 'callout', 'cards', 'compare', 'timeline', 'image', 'legend', 'roteiro', 'vocab', 'example', 'reading', 'listen', 'ex', 'video', 'prod', 'testintro', 'report', 'srs', 'revref', 'etapa'];
  function validate(o) {
    const err = [], warn = [], ids = new Set(), bids = new Set();
    if (!o || typeof o !== 'object' || Array.isArray(o)) return { err: ['O arquivo não é um objeto JSON de curso.'], warn, ok: false };
    if (!Array.isArray(o.modulos) || !o.modulos.length) return { err: ['Faltou o campo "modulos" (lista com pelo menos 1 módulo).'], warn, ok: false };
    const mids = new Set();
    o.modulos.forEach((m, mi) => {
      const mp = `modulos[${mi}]`;
      if (!m.id || typeof m.id !== 'string') err.push(`${mp}: falta "id" (texto).`); else if (mids.has(m.id)) err.push(`${mp}: id de módulo repetido "${m.id}".`); else mids.add(m.id);
      if (!m.titulo) err.push(`${mp}: falta "titulo".`);
      if (!Array.isArray(m.sessoes)) { err.push(`${mp}: falta "sessoes" (lista).`); return; }
      const chk = (blocks, where) => (blocks || []).forEach((b, bi) => {
        const bp = `${where}.blocos[${bi}]`;
        if (!b || typeof b.t !== 'string') { err.push(`${bp}: bloco sem "t" (tipo).`); return; }
        if (!KNOWN.includes(b.t)) warn.push(`${bp}: tipo desconhecido "${b.t}" (será mostrado como aviso).`);
        if (['ex', 'video', 'prod', 'roteiro'].includes(b.t)) { if (!b.id) warn.push(`${bp} (${b.t}): sem "id" — o progresso pode se perder se a ordem mudar.`); else if (bids.has(b.id)) err.push(`${bp}: id de bloco repetido "${b.id}".`); else bids.add(b.id); }
        if (b.t === 'ex') {
          if (!Array.isArray(b.items) || !b.items.length) err.push(`${bp}: exercício sem "items".`);
          else b.items.forEach((it, ii) => {
            if (!it || typeof it.q !== 'string') { err.push(`${bp}.items[${ii}]: falta "q".`); return; }
            if (!b.teste) { if (it.a == null) err.push(`${bp}.items[${ii}]: falta "a" (resposta).`); else if (!it.opts && it.q.includes('___') && it.a.length !== it.q.split('___').length - 1) err.push(`${bp}.items[${ii}]: nº de lacunas (___) diferente do nº de respostas em "a".`); if (it.opts && !it.opts.includes(it.a)) err.push(`${bp}.items[${ii}]: "a" não está em "opts".`); }
          });
        }
        if (b.t === 'vocab' && (!Array.isArray(b.items) || b.items.some(x => !Array.isArray(x) || x.length < 4))) err.push(`${bp}: vocab precisa de itens [n, inglês, pronúncia, português].`);
        if (b.t === 'table' && (!Array.isArray(b.rows))) err.push(`${bp}: tabela sem "rows".`);
          });
      chk(m.blocos, mp);
      m.sessoes.forEach((s, si) => {
        const sp = `${mp}.sessoes[${si}]`;
        if (!s.id || typeof s.id !== 'string') err.push(`${sp}: falta "id".`); else if (ids.has(s.id)) err.push(`${sp}: id de sessão repetido "${s.id}".`); else ids.add(s.id);
        if (!s.titulo) err.push(`${sp}: falta "titulo".`);
        if (!Array.isArray(s.blocos)) err.push(`${sp}: falta "blocos" (lista).`); else chk(s.blocos, sp);
        if (s.revisao && !Array.isArray(s.revisao)) err.push(`${sp}: "revisao" deve ser uma lista de blocos.`);
      });
    });
    return { err, warn, ok: !err.length, mods: o.modulos.length, ses: [...ids].length };
  }
  /* ───────────── sincronização: exportar / importar o progresso (JSON) ───────────── */
  function exportProgress() {
    const now = new Date().toISOString(); S.lastBackup = now; S.lastSync = now; save();
    C.download(`ingles-progresso-${EN.dkey()}.json`, JSON.stringify(EN.exportData()), 'application/json');
    $('#bkBanner').hidden = true; EN.toast('Progresso exportado. Importe o arquivo no outro aparelho.');
  }
  async function importProgress(file) {
    let o = null; try { o = EN.readExport(JSON.parse(await file.text())); } catch (_) { }
    if (!o) { EN.toast('Esse arquivo não é um progresso exportado por este app.'); return; }
    const days = Object.keys(o.log || {}).filter(k => (o.log[k].xp || 0) > 0 || o.log[k].manual).length;
    const r = await C.ask(`<h3>Importar progresso</h3><p>O arquivo tem <b>${Object.keys(o.ex || {}).length}</b> respostas, <b>${days}</b> dias de estudo.</p><p><b>Mesclar</b> junta com o que já existe neste aparelho (recomendado: nada se perde). <b>Substituir</b> troca tudo pelo conteúdo do arquivo.</p>`, [{ label: 'Cancelar' }, { label: 'Substituir', cls: 'dng' }, { label: 'Mesclar', cls: 'pri' }]);
    if (r < 1) return;
    const next = r === 2 ? EN.mergeStates(S, o) : o;
    EN.setState(next); S.lastSync = new Date().toISOString(); save();
    applyTheme(); C.renderBank(); route(); EN.toast(r === 2 ? 'Progresso mesclado.' : 'Progresso substituído.');
  }
  /* parte "nuvem" do diálogo de sincronização (Firebase, ver js/sync.js e NUVEM.md) */
  let syEmailKept = '';
  /* barra de espaço: quanto do limite de um documento do Firestore o progresso ocupa */
  const kb = n => (n < 10240 ? (n / 1024).toFixed(1) : Math.round(n / 1024)).toString().replace('.', ',') + ' KB';
  function sySize() {
    const u = EN.sync.usage(), pct = Math.min(100, Math.round(u.total / u.limit * 100));
    const lv = pct >= 85 ? 'hi' : pct >= 60 ? 'mid' : 'ok';
    const NM = { ex: 'respostas dos exercícios', prod: 'produções escritas', notes: 'anotações e devolutivas', video: 'vídeos', srs: 'estudo dos cartões', bank: 'seus cartões', log: 'histórico diário', hist: 'cartões exportados', rv: 'revisões', rev: 'revisões', ptOpens: 'caixas em português', xpOnce: 'XP único' };
    const top = Object.keys(u.parts).filter(k => u.parts[k] > 1024).sort((a, b) => u.parts[b] - u.parts[a]).slice(0, 3).map(k => `${NM[k] || k} (${kb(u.parts[k])})`);
    const warn = pct >= 85 ? '<p class="small err">Perto do limite. Exporte um backup em arquivo (abaixo) e me avise: dá para dividir o progresso em mais de um documento.</p>' : '';
    return `<div class="sysize"><div class="sy-row"><b>Espaço usado na nuvem</b><span>${kb(u.total)} de ${kb(u.limit)} · ${pct}%</span></div><div class="sybar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="Espaço usado na nuvem"><i class="lv-${lv}" style="width:${Math.max(pct, 1)}%"></i></div><p class="small muted">O Firebase aceita até 1 MB por documento e o seu progresso inteiro cabe em um só; o curso usa ${kb(u.limit)} como teto, para sobrar margem.${top.length ? ' Ocupam mais: ' + esc(top.join(', ')) + '.' : ''}</p>${warn}</div>`;
  }
  function syAcct() {
    const y = EN.sync, st = y.status, u = y.user;
    const when = y.last ? new Date(y.last).toLocaleString('pt-BR') : 'ainda não';
    let h = `<p class="sy-st" data-s="${st}"><b>☁ ${esc(y.label())}</b></p>`;
    if (st === 'off') h += '<p class="small muted">A sincronização pela nuvem ainda não foi ativada. Ela leva o seu progresso (e só ele) de um computador para o outro. O passo a passo está no arquivo <code>NUVEM.md</code>, na pasta <code>app-curso</code>.</p>';
    else if (st === 'carregando') h += '<p class="small muted">Conectando…</p>';
    else if (!u) h += `${EN.profile === 'teste' ? '<p class="small muted">Você está no <b>perfil de teste</b>: entrar aqui só conecta a conta; nada é enviado nem lido da nuvem.</p>' : ''}${y.msg ?`<p class="small ${y.info ? 'muted' : 'err'}">${esc(y.msg)}</p>` : ''}<p class="small muted">Entre com o seu e-mail e senha para guardar o progresso na nuvem e continuar de onde parou em qualquer computador. Na primeira vez, use <b>Criar conta</b>.</p><div class="syform"><input type="email" id="syEmail" placeholder="e-mail" autocomplete="username" value="${esc(syEmailKept)}"><input type="password" id="syPass" placeholder="senha (mínimo 6 caracteres)" autocomplete="current-password"></div><div class="act"><button type="button" class="btn pri" id="syLogin">Entrar</button><button type="button" class="btn" id="sySignup">Criar conta</button><button type="button" class="btn ghost" id="syReset">Esqueci a senha</button></div>`;
    else if (EN.profile === 'teste') h += `<p class="small">Conectado como <b>${esc(u.email || u.displayName || 'sua conta')}</b>.</p><p class="small muted">No <b>perfil de teste</b> a conta continua conectada, mas nada é enviado nem lido da nuvem (o teste é um subperfil: tudo o que você fizer nele some quando ele for fechado). Volte ao perfil principal para sincronizar.</p><div class="act"><button type="button" class="btn ghost" id="syOut">Sair da conta</button></div>`;
    else h += `<p class="small">Conectado como <b>${esc(u.email || u.displayName || 'sua conta')}</b>. Última sincronização: <b>${esc(when)}</b>.</p>${y.msg ? `<p class="small err">${esc(y.msg)}</p>` : ''}<p class="small muted">O progresso é enviado sozinho poucos segundos depois de cada mudança e conferido ao abrir o curso.</p><div class="act"><button type="button" class="btn" id="syNow">Sincronizar agora</button><button type="button" class="btn ghost" id="syOut">Sair da conta</button></div>${sySize()}`;
    return h;
  }
  function bindAcct() {
    const el = $('#syAcct'); if (!el) return;
    const on = (id, f) => { const b = $(id, el); if (b) b.onclick = f; };
    const val = id => { const i = $(id, el); return i ? i.value : ''; };
    const go = fn => () => { syEmailKept = val('#syEmail').trim(); fn(syEmailKept, val('#syPass')); };
    on('#syLogin', go((e, p) => EN.sync.login(e, p))); on('#sySignup', go((e, p) => EN.sync.signup(e, p)));
    on('#syReset', go(e => EN.sync.resetPassword(e))); on('#syNow', () => EN.sync.now()); on('#syOut', () => EN.sync.logout());
    /* Enter nos campos entra na conta (sem isto o formulário do diálogo fecharia a janela) */
    $$('#syEmail,#syPass', el).forEach(i => { i.onkeydown = ev => { if (ev.key === 'Enter') { ev.preventDefault(); const b = $('#syLogin', el); if (b) b.click(); } }; });
  }
  EN.sync.onChange = () => { const el = $('#syAcct'); if (el && $('#dlg').open) { el.innerHTML = syAcct(); bindAcct(); } gateRefresh(); };
  /* perfil (principal ou teste): fica aqui, junto da conta, e não nas configurações */
  function profileHTML() {
    const t = EN.profile === 'teste';
    return `<h4 style="margin:0 0 6px">Perfil</h4><div class="themes" id="profSel"><button type="button" data-prof="main" class="${!t ? 'on' : ''}">👤 Principal</button><button type="button" data-prof="teste" class="${t ? 'on' : ''}">🧪 Teste</button></div><p class="small muted">${t ? 'Você está no <b>perfil de teste</b>: um subperfil onde <b>nada é registrado</b> no seu progresso real (nem na nuvem). A conta continua conectada. <b>Ao fechar o teste, ele volta zerado</b>, como num primeiro acesso.' : 'No <b>perfil de teste</b> você experimenta o curso e o jogo sem mexer na sua evolução. Ele é zerado toda vez que é fechado; a sua conta continua conectada.'}</p>${t ? '<div class="act"><button type="button" class="btn sm" id="profCopy">Copiar o progresso do perfil principal para cá</button></div>' : ''}`;
  }
  function bindProfile(d) {
    $$('[data-prof]', d).forEach(b => b.onclick = () => { if (b.dataset.prof !== EN.profile) EN.setProfile(b.dataset.prof); });
    if ($('#profCopy', d)) $('#profCopy', d).onclick = async () => { const raw = EN.mainRaw(); if (!raw) { EN.toast('O perfil principal ainda não tem progresso.'); return; } d.close(); const r = await C.ask('<h3>Copiar o perfil principal?</h3><p>O progresso do perfil de teste será <b>substituído</b> por uma cópia do principal (até o teste ser fechado). O principal não é alterado.</p>', [{ label: 'Cancelar' }, { label: 'Copiar', cls: 'pri' }]); if (r === 1) { try { EN.setState(JSON.parse(raw)); } catch (_) { return; } location.reload(); } };
  }
  /* ── tela de entrada: aparece ao abrir o app sem conta conectada (login para sincronizar; o conteúdo continua público) ── */
  const SKIPK = 'ingles.gate.skip';
  const gateSkipped = () => { try { return sessionStorage.getItem(SKIPK) === '1'; } catch (e) { return false; } };
  function gateClose() { const g = $('#gate'); if (g) g.remove(); document.body.classList.remove('gate-open'); }
  function gateShow() {
    const y = EN.sync; if (!window.FIREBASE_CONFIG || y.status === 'off' || y.user || gateSkipped() || $('#gate')) return;
    const g = document.createElement('div'); g.id = 'gate'; g.className = 'gate'; g.setAttribute('role', 'dialog'); g.setAttribute('aria-modal', 'true'); g.setAttribute('aria-label', 'Entrar na conta');
    g.innerHTML = `<div class="gate-card"><img class="gate-logo" src="logo.png" alt="" width="84" height="72"><h1>My English School</h1><p class="muted">Entre para estudar em qualquer aparelho: o seu progresso fica guardado na nuvem e continua de onde você parou.</p><div id="gateMsg" class="gate-msg" aria-live="polite"></div><form id="gateForm" autocomplete="on"><input type="email" id="gtEmail" placeholder="e-mail" autocomplete="username" inputmode="email" autocapitalize="off" spellcheck="false" value="${esc(syEmailKept)}"><input type="password" id="gtPass" placeholder="senha (mínimo 6 caracteres)" autocomplete="current-password"><button type="submit" class="btn pri lg" id="gtGo">Entrar</button></form><div class="gate-links"><button type="button" class="linkbtn" id="gtNew">Criar conta</button><span>·</span><button type="button" class="linkbtn" id="gtRst">Esqueci a senha</button></div><div class="gate-sep"><span>ou</span></div><button type="button" class="btn lg" id="gtSkip">Estudar sem entrar</button><p class="small muted">Sem entrar, o progresso fica só neste aparelho e o botão 🔄 do topo fica piscando em vermelho para lembrar.</p></div>`;
    document.body.appendChild(g); document.body.classList.add('gate-open');
    const val = id => g.querySelector(id).value, go = fn => () => { syEmailKept = val('#gtEmail').trim(); fn(syEmailKept, val('#gtPass')); };
    g.querySelector('#gateForm').onsubmit = ev => { ev.preventDefault(); go((e, p) => y.login(e, p))(); };
    g.querySelector('#gtNew').onclick = go((e, p) => y.signup(e, p));
    g.querySelector('#gtRst').onclick = go(e => y.resetPassword(e));
    g.querySelector('#gtSkip').onclick = () => { try { sessionStorage.setItem(SKIPK, '1'); } catch (e) { } gateClose(); };
    gateRefresh(); setTimeout(() => { const i = g.querySelector('#gtEmail'); if (i && !i.value) i.focus(); }, 60);
  }
  function gateRefresh() {
    const g = $('#gate'); if (!g) return;
    const y = EN.sync; if (y.user || y.status === 'off') { gateClose(); return; }
    const busy = y.status === 'carregando', m = g.querySelector('#gateMsg');
    m.className = 'gate-msg ' + (busy || y.info ? 'muted' : y.msg ? 'err' : '');
    m.textContent = busy ? 'Conectando…' : (y.msg || '');
    g.querySelectorAll('button').forEach(b => { b.disabled = busy; });
  }
  function openSync() {
    const d = $('#dlg');
    d.innerHTML = `<form method="dialog"><div class="dbody"><h3>🔄 Conta, perfil e backup</h3><div class="card syacct" id="syAcct">${syAcct()}</div><div class="card" style="margin-top:10px">${profileHTML()}</div><h4 style="margin:16px 0 4px">Backup em arquivo</h4><p class="small muted">Funciona com ou sem a nuvem: um arquivo <code>.json</code> com o seu progresso, para guardar de cópia de segurança ou levar a outro aparelho.</p><div class="syncbox"><div class="card"><b>1. Exportar</b><p class="small muted">Gera um arquivo com o progresso deste aparelho.</p><button type="button" class="btn pri" id="syExp">⬇ Exportar progresso</button></div><div class="card"><b>2. Importar</b><p class="small muted">Escolha o arquivo gerado em outro aparelho.</p><button type="button" class="btn" id="syImp">⬆ Importar progresso</button><input type="file" id="syFile" accept=".json,application/json" hidden></div></div><p class="small muted" style="margin:12px 0 0">Última exportação: <b>${S.lastSync ? EN.fmtDate(S.lastSync) : 'nunca'}</b>. Dica: salve o arquivo no OneDrive ou no Drive e abra no outro aparelho. Prefira <b>Mesclar</b>: ele une os dois históricos.</p></div><div class="dbtn"><button class="btn pri" value="x">Fechar</button></div></form>`;
    d.returnValue = ''; d.onclose = null; d.showModal();
    bindAcct(); bindProfile(d); $('#syExp', d).onclick = exportProgress;
    $('#syImp', d).onclick = () => $('#syFile', d).click();
    $('#syFile', d).onchange = e => { const f = e.target.files[0]; if (f) { d.close(); importProgress(f); } };
  }
  function checkBackup() {
    const b = $('#bkBanner'); b.hidden = true; if (EN.profile === 'teste' || (EN.sync && EN.sync.recent(7))) return;
    const prog = Object.keys(S.ex).length || Object.keys(S.log).length || S.bank.length; if (!prog) return;
    const today = EN.dkey(); if (S.snooze === today) return;
    const days = Math.floor((Date.now() - new Date(S.lastBackup || S.created)) / 864e5); if (days < 7) return;
    b.innerHTML = `💾 ${S.lastBackup ? `Faz ${days} dias que você não exporta o progresso` : 'Você ainda não exportou o seu progresso'}. Ele fica só neste navegador. <button class="btn sm" id="bkNow">Exportar agora</button> <button class="btn sm" id="bkLater">Depois</button>`; b.hidden = false;
    $('#bkNow').onclick = exportProgress; $('#bkLater').onclick = () => { S.snooze = today; save(); b.hidden = true; };
  }
  /* a nuvem trouxe mudanças de outro aparelho: atualiza tema, contadores e a página (sem interromper um estudo de cartões em andamento) */
  EN.onRemoteApplied = () => {
    applyTheme(); C.renderBank(); checkBackup(); EN.onUpdate();
    if (!(EN.srs && EN.srs.isOpen()) && !document.querySelector('#dlg[open]')) route();
    EN.toast('Progresso atualizado com a nuvem.');
  };
  EN.onStoreFail = () => { const b = $('#bkBanner'); b.hidden = false; b.innerHTML = '⚠ Este navegador não está guardando seus dados (modo privado ou bloqueado). Use 🔄 para exportar o progresso e não perdê-lo.'; };

  /* ───────────── menu lateral recolhível ───────────── */
  const NAVK = 'ingles.nav';
  function applyNav() { let c = false; try { c = localStorage.getItem(NAVK) === '1'; } catch (_) { } document.body.classList.toggle('nav-collapsed', c); }
  $('#burger').onclick = () => {
    if (matchMedia('(max-width:980px)').matches) { document.body.classList.toggle('nav-open'); return; }
    const c = !document.body.classList.contains('nav-collapsed'); document.body.classList.toggle('nav-collapsed', c);
    try { localStorage.setItem(NAVK, c ? '1' : '0'); } catch (_) { }
  };

  /* ───────────── tema e configurações ───────────── */
  $('#btnSync').onclick = openSync;
  $('#btnSet').onclick = openSettings;
  function openSettings() {
    const d = $('#dlg'), sw = { auto: 'linear-gradient(90deg,#FBF7F2 50%,#141B2E 50%)', pastel: 'linear-gradient(135deg,#E8E0FF,#FFE3DE,#FFEFC9)', escuro: '#141B2E', dark: '#000' };
    const thNow = ['pastel', 'escuro', 'dark', 'auto'].includes(S.settings.theme) ? S.settings.theme : 'pastel';
    const nS = C.ORDER.length;
    d.innerHTML = `<form method="dialog"><div class="dbody set"><h3>Configurações</h3><div class="small muted">Tema</div><div class="themes">${['auto', 'pastel', 'escuro', 'dark'].map(t => `<button type="button" data-th="${t}" class="${thNow === t ? 'on' : ''}"><i style="background:${sw[t]};border:1px solid var(--border)"></i>${{ auto: 'Automático', pastel: 'Claro', escuro: 'Escuro', dark: 'Dark' }[t]}</button>`).join('')}</div>
      <div class="small muted" style="margin:-4px 0 8px">Claro = cores pastel · Escuro = azul-noite · Dark = preto puro (poupa a bateria e descansa os olhos em telas OLED) · Automático segue o tema do aparelho (claro ou escuro).</div>
      <label class="row">Seu nome (só para a saudação): <input type="text" id="sName" value="${esc(S.settings.name || '')}" maxlength="30" style="flex:1"></label>
      <label class="row">Meta diária de XP: <select id="sGoal">${[20, 40, 60, 100, 150].map(g => `<option ${S.settings.goal === g ? 'selected' : ''}>${g}</option>`).join('')}</select></label>
      <label class="row"><input type="checkbox" id="sPT" ${S.settings.showPT ? 'checked' : ''}> Mostrar sempre as caixas em português</label>
      <label class="row"><input type="checkbox" id="sSlow" ${S.settings.slow ? 'checked' : ''}> Voz mais lenta em todos os áudios (o botão 🐢 ouve devagar só aquele áudio)</label>
      <h3 style="margin-top:14px">Cartões</h3>
      <label class="row"><input type="checkbox" id="sSrsSpeak" ${S.settings.srsSpeak ? 'checked' : ''}> Falar a palavra em inglês automaticamente</label>
      <label class="row">Frente do cartão: <select id="sSrsDir"><option value="en" ${S.settings.srsDir !== 'pt' ? 'selected' : ''}>Inglês (lembrar o significado)</option><option value="pt" ${S.settings.srsDir === 'pt' ? 'selected' : ''}>Português (lembrar a palavra)</option></select></label>
      <label class="row">Palavras selecionadas novas por dia: <select id="sSrsNew">${[3, 5, 10, 15, 20].map(g => `<option ${+S.settings.srsNew === g ? 'selected' : ''}>${g}</option>`).join('')}</select></label>
      <h3 style="margin-top:14px">Conta, perfil e backup</h3><div class="act"><button type="button" class="btn sm" id="stSync">🔄 Conta, perfil de teste, exportar e importar…</button></div><p class="small muted">Nuvem: <b>${esc(EN.sync.label())}</b>. Última exportação em arquivo: <b>${S.lastSync ? EN.fmtDate(S.lastSync) : 'nunca'}</b>.</p>
      <h3 style="margin-top:14px">Curso</h3><p class="small muted">${COURSE ? `${esc(cfg().titulo || 'Curso')} · ${mods().length} módulos · ${nS} sessões${cfg().versao ? ' · versão ' + esc(cfg().versao) : ''}. O conteúdo faz parte da página.` : 'Conteúdo não encontrado.'}</p>
      <div class="act"><button type="button" class="btn sm dng" id="bkRst">Apagar todo o progresso</button></div></div><div class="dbtn"><button class="btn pri" value="x">Fechar</button></div></form>`;
    d.returnValue = ''; d.onclose = null; d.showModal();
    $$('[data-th]', d).forEach(b => b.onclick = () => { S.settings.theme = b.dataset.th; save(); applyTheme(); $$('[data-th]', d).forEach(x => x.classList.toggle('on', x === b)); EN.rerender(); });
    $('#sName', d).onchange = e => { S.settings.name = e.target.value.trim(); save(); EN.rerender(); };
    $('#sGoal', d).onchange = e => { S.settings.goal = +e.target.value; save(); EN.onUpdate(); };
    $('#sPT', d).onchange = e => { S.settings.showPT = e.target.checked; save(); EN.rerender(); };
    $('#sSlow', d).onchange = e => { S.settings.slow = e.target.checked; save(); };
    $('#sSrsSpeak', d).onchange = e => { S.settings.srsSpeak = e.target.checked; save(); };
    $('#sSrsDir', d).onchange = e => { S.settings.srsDir = e.target.value; save(); };
    $('#sSrsNew', d).onchange = e => { S.settings.srsNew = +e.target.value; save(); EN.onUpdate(); };
    $('#stSync', d).onclick = () => { d.close(); openSync(); };
    $('#bkRst', d).onclick = async () => { d.close(); const r = await C.ask(`<h3>Apagar todo o progresso${EN.profile === 'teste' ? ' do perfil de teste' : ''}?</h3><p>Serão apagados <b>XP, nível, sequência, calendário, conquistas, respostas, caderno de erros, cartões, banco de palavras e configurações</b>${EN.profile === 'teste' ? ' deste perfil de teste (o perfil principal não é alterado)' : ' do perfil principal (o perfil de teste não é alterado)'}. O app volta a ficar como no primeiro acesso.${EN.sync && EN.sync.user ? ' <b>A cópia na nuvem também será apagada</b> (sem isso, o progresso voltaria da nuvem ao reabrir).' : ''} <b>Não pode ser desfeito</b> (a menos que você tenha exportado o progresso).</p>`, [{ label: 'Cancelar' }, { label: 'Apagar tudo', cls: 'dng' }]); if (r === 1) { if (EN.sync && EN.sync.user) { try { await EN.sync.wipeCloud(); } catch (e) { EN.toast('Não consegui apagar a cópia na nuvem; nada foi apagado.'); return; } } EN.wipeProfile(); EN.setState(null); EN.wipeProfile(); location.hash = '#/'; location.reload(); } };
  }

  /* ───────────── início ───────────── */
  function assemble() {
    const base = window.CURSO || {}, ms = (window.CURSO_MODULOS || []).slice().sort((a, b) => (a.n || 0) - (b.n || 0));
    return ms.length ? Object.assign({}, base, { modulos: ms }) : null;
  }
  function init() {
    applyTheme(); applyNav(); C.renderBank();
    COURSE = assemble();
    if (COURSE) { C.index(COURSE); const v = validate(COURSE); if (!v.ok) console.warn('Curso com problemas:\n' + v.err.join('\n')); if (S.last && !C.SES[S.last]) S.last = null; }
    route(); checkBackup(); EN.checkBadges();
    EN.sync.init(); gateShow();
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => { });
  }
  /* O conteúdo mora na pasta material/ (separada do site): material/indice.js lista os arquivos a carregar. */
  function loadScript(src, done) {
    const s = document.createElement('script'); s.src = src; s.async = false;
    s.onload = () => done(true); s.onerror = () => { console.warn('Não consegui carregar ' + src); done(false); };
    document.head.appendChild(s);
  }
  function boot() {
    loadScript('material/indice.js', ok => {
      const files = ok && Array.isArray(window.MATERIAL_ARQUIVOS) ? window.MATERIAL_ARQUIVOS : [];
      let left = files.length;
      if (!left) return init();
      files.forEach(f => loadScript('material/' + f, () => { if (!--left) init(); }));
    });
  }
  boot();
})();
