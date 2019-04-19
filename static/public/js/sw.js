import {settings} from './settings/config.js';

const CACHE_NAME = 'hexagon_cash';
const {assets} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches
          .open(CACHE_NAME)
          .then((cache) => {
            return cache.addAll([...assets, './']);
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

            if (!navigator.onLine && !cachedResponse) {
              const url = new URL(event.request.url);
              const apiUrl = new URL(event.request.url);
              const isPage = url.pathname.indexOf('.') === -1;
              const isApiReq = url.host === apiUrl.host;
              console.log(url.host, settings.url);
              if (!isApiReq && isPage) {
                const newUrl = event.request.url.replace(url.pathname, '/');
                const newReq = new Request(newUrl);
                return caches.match(newReq)
                    .then((cachedResponse) => {
                      if (cachedResponse) {
                        return cachedResponse;
                      }

                      return fetch(event.request);
                    });
              }
            }

            return fetch(event.request);
          })
  );
});
