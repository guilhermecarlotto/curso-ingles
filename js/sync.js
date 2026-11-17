/* Sincronização do progresso com a nuvem (Firebase: login por e-mail e senha + Firestore), SEM o SDK do Firebase.
   Usa a API REST do Firebase (fetch), que funciona também com o index.html aberto direto do arquivo (file://),
   coisa que o SDK oficial recusa.
   Só o PROGRESSO (EN.S) vai para a nuvem; o programa e o material ficam no computador.
   Como funciona: o progresso é guardado como um texto JSON em progresso/<seu-uid>. Ao abrir, e depois de cada
   alteração (com uma pequena espera), o app lê o que está na nuvem, MESCLA com o que há neste aparelho
   (EN.mergeStates, a mesma mesclagem do botão 🔄) e grava o resultado dos dois lados. Assim nenhum aparelho
   apaga o trabalho do outro. A gravação só vale se o documento não mudou desde a leitura (senão repete a
   leitura e a mesclagem). Sem configuração ou sem internet, tudo continua local. */
(function () {
  'use strict';
  const EN = window.EN;
  /* Um documento do Firestore aceita até 1 MiB (1.048.576 bytes). O progresso inteiro é UM documento; usamos 900 KB
     como teto, para sobrar margem para o restante do documento. O espaço total gratuito (1 GiB) não é a restrição. */
  const LAST = 'ingles.sync.last', AUTHK = 'ingles.sync.auth', WAIT = 8000, MAXJSON = 900 * 1024;
  const bytes = s => (window.TextEncoder ? new TextEncoder().encode(s).length : String(s).length);
  const sy = EN.sync = { status: 'off', user: null, msg: '', info: false, last: null, onChange: null };
  let tok = { id: null, exp: 0, refresh: null }, busy = false, again = false, tm = null, applying = false, retry = null;

  const cfg = () => { const c = window.FIREBASE_CONFIG; return c && c.apiKey && c.projectId ? c : null; };
  /* forma "canônica" só para COMPARAR estados: chaves e listas de itens (por k/id) sem depender da ordem */
  const ident = x => (x && typeof x === 'object' ? (x.k !== undefined ? x.k : x.id) : x);
  const canon = o => JSON.stringify(o, (k, v) => {
    if (Array.isArray(v)) return v.every(x => typeof x === 'string' || (x && typeof x === 'object' && ident(x) !== undefined)) ? v.slice().sort((a, b) => String(ident(a)) < String(ident(b)) ? -1 : 1) : v;
    return v && typeof v === 'object' ? Object.keys(v).sort().reduce((r, x) => { r[x] = v[x]; return r; }, {}) : v;
  });
  const clone = o => JSON.parse(JSON.stringify(o));
  try { sy.last = localStorage.getItem(LAST); } catch (e) { }

  function set(status, msg, info) {
    sy.status = status; sy.msg = msg || ''; sy.info = !!info;
    const b = document.getElementById('btnSync');
    if (b) { b.dataset.s = status; b.title = 'Sincronização e backup do progresso · ' + sy.label(); }
    if (sy.onChange) { try { sy.onChange(); } catch (e) { } }
  }
  sy.label = () => ({
    off: 'nuvem não configurada', teste: sy.user ? 'conectado · perfil de teste (não sincroniza)' : 'perfil de teste (não sincroniza)',
    carregando: 'conectando…', deslogado: 'não conectado', sincronizando: 'sincronizando…', ok: 'sincronizado', offline: 'sem conexão', erro: 'erro na sincronização'
  }[sy.status] || sy.status);
  /* houve sincronização neste aparelho nos últimos n dias? (usado para não cobrar a exportação manual) */
  sy.recent = days => { try { const t = localStorage.getItem(LAST); return !!t && (Date.now() - new Date(t)) < days * 864e5; } catch (e) { return false; } };
  /* quanto do limite de um documento o progresso ocupa (total em bytes e as partes, para mostrar o que pesa mais) */
  sy.usage = () => {
    const parts = {}; Object.keys(EN.S).forEach(k => { parts[k] = bytes(JSON.stringify(EN.S[k])); });
    return { total: bytes(JSON.stringify(EN.S)), limit: MAXJSON, parts };
  };

  /* ───────────── chamadas à API do Firebase (REST) ───────────── */
  const codeOf = (status, body) => {
    const e = (body && body.error) || {}, m = String(e.message || ''), s = String(e.status || '');
    if (/^(EMAIL_NOT_FOUND|INVALID_PASSWORD|INVALID_LOGIN_CREDENTIALS)/.test(m)) return 'badcred';
    if (/^EMAIL_EXISTS/.test(m)) return 'exists';
    if (/^WEAK_PASSWORD/.test(m)) return 'weak';
    if (/^(INVALID_EMAIL|MISSING_EMAIL)/.test(m)) return 'bademail';
    if (/^MISSING_PASSWORD/.test(m)) return 'nopass';
    if (/^OPERATION_NOT_ALLOWED/.test(m)) return 'notallowed';
    if (/^TOO_MANY_ATTEMPTS/.test(m)) return 'toomany';
    if (/^(TOKEN_EXPIRED|USER_DISABLED|INVALID_REFRESH_TOKEN|USER_NOT_FOUND|INVALID_GRANT_TYPE|CREDENTIAL_TOO_OLD|MISSING_REFRESH_TOKEN)/.test(m)) return 'session';
    if (/API key not valid|API_KEY_INVALID|API_KEY_/i.test(m) || /API key/i.test(JSON.stringify(e).slice(0, 400))) return 'apikey';
    if (s === 'PERMISSION_DENIED' || status === 403) return 'denied';
    if (s === 'NOT_FOUND' || status === 404) return 'notfound';
    if (s === 'FAILED_PRECONDITION' || s === 'ABORTED' || s === 'ALREADY_EXISTS' || status === 409) return 'conflict';
    if (s === 'RESOURCE_EXHAUSTED' || status === 429) return 'quota';
    if (s === 'UNAUTHENTICATED' || status === 401) return 'session';
    return 'other';
  };
  async function api(url, opt) {
    let res;
    try { res = await fetch(url, opt); }
    catch (e) { const x = new Error('offline'); x.code = 'offline'; throw x; }
    let body = null; try { body = await res.json(); } catch (e) { }
    if (!res.ok) { const x = new Error((body && body.error && body.error.message) || ('HTTP ' + res.status)); x.status = res.status; x.code = codeOf(res.status, body); throw x; }
    return body || {};
  }
  const friendly = e => {
    const c = (e && e.code) || '';
    const T = {
      offline: 'Sem conexão com a internet.',
      badcred: 'E-mail ou senha incorretos. Se ainda não tem conta, use "Criar conta".',
      exists: 'Já existe uma conta com esse e-mail. Use "Entrar".',
      weak: 'A senha precisa ter pelo menos 6 caracteres.',
      bademail: 'Esse e-mail não parece válido.',
      nopass: 'Preencha a senha.',
      notallowed: 'O login por e-mail e senha não está ativado no console (Authentication → Método de login → E-mail/senha).',
      toomany: 'Muitas tentativas seguidas. Espere alguns minutos e tente de novo.',
      session: 'A sessão expirou. Entre de novo com o e-mail e a senha.',
      apikey: 'A chave (apiKey) em firebase-config.js não é aceita pelo Firebase. Confira se foi copiada inteira.',
      denied: 'Sem permissão no Firestore. Confira as regras de segurança (NUVEM.md, passo 4) e se o banco foi criado.',
      notfound: 'O banco do Firestore não foi encontrado. Confira se ele foi criado (NUVEM.md, passo 3) e se o projectId em firebase-config.js está certo.',
      quota: 'O limite gratuito diário do Firebase foi atingido. Tente de novo mais tarde.',
      conflict: 'Conflito ao gravar na nuvem. Vou tentar de novo.'
    };
    if (T[c]) return T[c];
    if (!navigator.onLine) return T.offline;
    return (e && e.message) || 'erro desconhecido';
  };
  const isOffline = e => (e && e.code === 'offline') || !navigator.onLine;

  const authUrl = path => 'https://identitytoolkit.googleapis.com/v1/accounts:' + path + '?key=' + encodeURIComponent(cfg().apiKey);
  const post = (url, obj) => api(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obj) });
  const fsBase = () => 'https://firestore.googleapis.com/v1/projects/' + encodeURIComponent(cfg().projectId) + '/databases/(default)/documents';
  const docPath = () => 'progresso/' + encodeURIComponent(sy.user.uid);

  const saveAuth = () => { try { localStorage.setItem(AUTHK, JSON.stringify({ uid: sy.user.uid, email: sy.user.email, refresh: tok.refresh })); } catch (e) { } };
  const clearAuth = () => { try { localStorage.removeItem(AUTHK); } catch (e) { } };
  /* o "id token" dura 1 hora: renova com o refresh token guardado neste navegador */
  async function token() {
    if (tok.id && Date.now() < tok.exp - 60000) return tok.id;
    if (!tok.refresh) { const x = new Error('sessão'); x.code = 'session'; throw x; }
    const d = await api('https://securetoken.googleapis.com/v1/token?key=' + encodeURIComponent(cfg().apiKey), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(tok.refresh) });
    tok = { id: d.id_token, exp: Date.now() + (+d.expires_in || 3600) * 1000, refresh: d.refresh_token || tok.refresh };
    saveAuth(); return tok.id;
  }
  const bearer = async () => ({ Authorization: 'Bearer ' + await token() });

  /* lê o documento do progresso: { exists, json, updateTime } */
  async function getDoc() {
    try {
      const d = await api(fsBase() + '/' + docPath(), { headers: await bearer() });
      return { exists: true, json: d.fields && d.fields.json && d.fields.json.stringValue, updateTime: d.updateTime };
    } catch (e) { if (e.code === 'notfound') return { exists: false }; throw e; }
  }
  /* grava só se o documento ainda é o que foi lido (updateTime); se não existia, só se continua não existindo */
  async function putDoc(json, updateTime) {
    const name = 'projects/' + cfg().projectId + '/databases/(default)/documents/' + docPath();
    const h = Object.assign({ 'Content-Type': 'application/json' }, await bearer());
    return api(fsBase() + ':commit', { method: 'POST', headers: h, body: JSON.stringify({ writes: [{
      update: { name, fields: { json: { stringValue: json }, at: { stringValue: new Date().toISOString() }, v: { integerValue: '2' } } },
      currentDocument: updateTime ? { updateTime } : { exists: false }
    }] }) });
  }

  /* grava o resultado da mesclagem no estado local, sem disparar outra sincronização */
  function apply(state) {
    applying = true; try { EN.setState(state); } finally { applying = false; }
    if (EN.onRemoteApplied) { try { EN.onRemoteApplied(); } catch (e) { } }
  }

  function signedOut(msg) {
    clearTimeout(tm); tm = null; clearTimeout(retry); tok = { id: null, exp: 0, refresh: null }; sy.user = null; clearAuth();
    set('deslogado', msg);
  }

  /* lê a nuvem, mescla com o estado local e grava o resultado */
  async function run() {
    if (!sy.user || sy.disabled || !cfg() || EN.profile === 'teste') return; /* o perfil de teste continua conectado, mas nada é lido nem gravado na nuvem */
    if (busy) { again = true; return; }
    busy = true; clearTimeout(tm); tm = null; clearTimeout(retry); set('sincronizando');
    try {
      const before = canon(EN.S); let merged = null;
      for (let n = 0; ; n++) {
        const doc = await getDoc(); let remote = null;
        if (doc.exists) { try { remote = EN.readExport(JSON.parse(doc.json)); } catch (e) { remote = null; } if (!remote) throw new Error('Os dados na nuvem estão ilegíveis. Nada foi alterado.'); }
        merged = remote ? EN.mergeStates(EN.S, remote) : clone(EN.S);
        if (!remote || canon(remote) !== canon(merged)) {
          const json = JSON.stringify(merged);
          if (bytes(json) > MAXJSON) throw new Error('O progresso ficou grande demais para a nuvem (limite do Firestore). Exporte um backup em arquivo e me avise para dividir os dados.');
          try { await putDoc(json, doc.updateTime); }
          catch (e) { if (e.code === 'conflict' && n < 4) continue; throw e; }
        }
        break;
      }
      /* o que mudou aqui enquanto a gravação rodava entra por cima e vai na próxima rodada */
      if (canon(EN.S) !== before) { merged = EN.mergeStates(EN.S, merged); again = true; }
      const changed = canon(merged) !== canon(EN.S);
      if (changed) apply(merged);
      sy.last = new Date().toISOString(); try { localStorage.setItem(LAST, sy.last); } catch (e) { }
      sy.pulled = changed; set('ok');
    } catch (e) {
      again = false;
      if (e.code === 'session') signedOut(friendly(e));
      else { set(isOffline(e) ? 'offline' : 'erro', friendly(e)); clearTimeout(retry); retry = setTimeout(run, 60000); }
    } finally {
      busy = false;
      if (again) { again = false; setTimeout(run, 400); }
    }
  }
  sy.now = run;

  /* qualquer salvamento local agenda uma sincronização (no máximo uma a cada WAIT ms) */
  EN.onSave = () => {
    if (applying || !sy.user || sy.disabled || tm || EN.profile === 'teste') return;
    tm = setTimeout(() => { tm = null; run(); }, WAIT);
  };

  /* ───────────── conta: e-mail e senha (a senha nunca é guardada: só vai ao Firebase) ───────────── */
  const cred = (email, pass) => {
    email = String(email || '').trim();
    if (!email || !pass) { set('deslogado', 'Preencha o e-mail e a senha.'); return null; }
    return { email, pass: String(pass) };
  };
  async function enter(path, email, pass) {
    const c = cred(email, pass); if (!c || !cfg()) return;
    try {
      set('carregando');
      const d = await post(authUrl(path), { email: c.email, password: c.pass, returnSecureToken: true });
      tok = { id: d.idToken, exp: Date.now() + (+d.expiresIn || 3600) * 1000, refresh: d.refreshToken };
      sy.user = { uid: d.localId, email: d.email || c.email }; saveAuth();
      if (EN.profile === 'teste') set('teste'); else run();
    } catch (e) { set('deslogado', friendly(e)); }
  }
  sy.login = (email, pass) => enter('signInWithPassword', email, pass);
  sy.signup = (email, pass) => enter('signUp', email, pass);
  sy.resetPassword = async email => {
    email = String(email || '').trim();
    if (!email) { set('deslogado', 'Escreva o seu e-mail no campo acima e clique de novo.'); return; }
    try { await post(authUrl('sendOobCode'), { requestType: 'PASSWORD_RESET', email }); set('deslogado', 'Enviei um e-mail para redefinir a senha (olhe também o spam).', true); }
    catch (e) { set('deslogado', friendly(e)); }
  };
  sy.logout = async () => { signedOut(''); };
  /* apaga o progresso da nuvem (usado em "Apagar todo o progresso") e impede novas gravações nesta página */
  sy.wipeCloud = async () => {
    if (!sy.user) return;
    sy.disabled = true; clearTimeout(tm); tm = null;
    try { await api(fsBase() + '/' + docPath(), { method: 'DELETE', headers: await bearer() }); }
    catch (e) { sy.disabled = false; throw e; }
    try { localStorage.removeItem(LAST); } catch (e) { }
  };

  /* início: sem configuração, fica desligado; com sessão guardada, sincroniza; senão, pede o login */
  sy.init = () => {
    if (!cfg()) return set('off');
    let saved = null; try { saved = JSON.parse(localStorage.getItem(AUTHK) || 'null'); } catch (e) { }
    if (saved && saved.uid && saved.refresh) {
      tok = { id: null, exp: 0, refresh: saved.refresh }; sy.user = { uid: saved.uid, email: saved.email };
      if (EN.profile === 'teste') set('teste'); else run(); /* no perfil de teste a conta fica conectada, mas sem sincronizar */
    } else set('deslogado');
  };

  addEventListener('online', () => { if (sy.user && (sy.status === 'offline' || sy.status === 'erro')) run(); });
  document.addEventListener('visibilitychange', () => {
    if (!sy.user || sy.disabled || EN.profile === 'teste') return;
    if (document.visibilityState === 'hidden') { if (tm) run(); }
    else if (!sy.last || Date.now() - new Date(sy.last) > 3 * 60000) run();
  });
})();
