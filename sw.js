const CACHE_NAME = 'crumble-co-v1';
const urlsToCache = [
  '/crumble-co/',
  '/crumble-co/app.html',
  '/crumble-co/styles.css',
  '/crumble-co/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(() => {
        return new Response('عدم توفر الإنترنت', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain; charset=UTF-8'
          })
        });
      })
  );
});
