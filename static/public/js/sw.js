const CACHE_NAME = 'hexagon_cash';
const {assets} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches
          .open(CACHE_NAME)
          .then((cache) => {
            return cache.addAll([...assets, './']);
          })
          .then(() => {
            console.log('Cached assets: main', [...assets, './']);
          })
          .catch((error) => {
            console.error(error);
            throw error;
          })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches
          .match(event.request)
          .then((cachedResponse) => {
            if (!navigator.onLine && cachedResponse) {
              return cachedResponse;
            }

            return fetch(event.request);
          })
  );
});
