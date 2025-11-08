const CACHE_NAME = 'almeto-cache-v3';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  '/pdf-watermark.html',
  '/img-to-pdf.html',
  '/split-pdf.html',
  '/merge-pdf.html'
];

// Instalasi awal: cache file penting
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Aktivasi: hapus cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch handler: cache dinamis + offline fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // 1️⃣ Jika sudah di-cache → tampilkan dari cache
      if (response) return response;

      // 2️⃣ Jika belum → fetch dan simpan otomatis
      return fetch(event.request)
        .then(networkResponse => {
          if (
            event.request.url.startsWith(self.location.origin) &&
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            const resClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // 3️⃣ Jika offline dan file tidak ada di cache
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
    })
  );
});
