// WordLoop：オフラインで動かすための仕組み（Service Worker）
// アプリを更新したら、下の VERSION の数字を1つ増やしてください（例：v2 → v3）
const VERSION = 'wordloop-v12';
const FILES = [
  './', './index.html', './app.js', './manifest.webmanifest', './privacy-policy.html',
  './icon.png', './favicon.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png',
  './fonts/inter-Regular.woff', './fonts/inter-Medium.woff', './fonts/inter-SemiBold.woff',
  './fonts/inter-Bold.woff', './fonts/inter-ExtraBold.woff'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('wordloop-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// まず端末内の保存分を使い、なければネットから取得（取れたものは保存）
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    } catch (e) {
      if (req.mode === 'navigate') return (await cache.match('./index.html')) || Response.error();
      return Response.error();
    }
  })());
});

// 通知をタップしたらアプリを開く
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (all.length) return all[0].focus();
    return self.clients.openWindow('./');
  })());
});
