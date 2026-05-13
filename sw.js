const CACHE = 'salome-v1';
const ASSETS = ['/', '/index.html', '/cardapio.html', '/galeria.html', '/localizacao.html', '/reservas.html', '/app.css'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
