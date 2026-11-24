/* Service worker: deixa o app abrir offline. O site (index, css, js) e o material do curso (pasta material/) entram no cache. */
const CACHE = 'ingles-v18';
const SITE = ['./', 'index.html', 'css/style.css', 'js/store.js', 'js/game.js', 'js/blocks.js', 'js/srs.js', 'js/jogar.js', 'js/conversar.js', 'firebase-config.js', 'js/sync.js', 'js/app.js', 'manifest.webmanifest', 'logo.png', 'icon-192.png', 'icon-512.png', 'img/mascote-1.png', 'img/mascote-2.png', 'material/indice.js'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(SITE.map(f => c.add(f).catch(() => { })));
    // o que estiver listado em material/indice.js (scripts e imagens) também vai para o cache
    try {
      const txt = await (await fetch('material/indice.js', { cache: 'no-store' })).text();
      const nomes = [...txt.matchAll(/'([^']+\.(?:js|svg|png|jpg|jpeg|webp))'/g)].map(m => 'material/' + m[1]);
      await Promise.all(nomes.map(f => c.add(f).catch(() => { })));
    } catch (_) { }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* rede primeiro (pega as atualizações do GitHub), cache como reserva offline */
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r).then(m => m || caches.match('index.html'))));
});
