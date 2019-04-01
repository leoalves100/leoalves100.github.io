//Nome do cache
var cacheName = 'v1:static';

// Durante a fase de instalação, você geralmente deseja armazenar em cache os arquivos estáticos.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Cache armazenado');
            //Arquivos que serão armazenados no cache
            return cache.addAll([
                '/',
                '/offline.html',
                '/main.js'
            ]).then(function() {
                //Força a atualização do Service Worker
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker ativado.');
  });