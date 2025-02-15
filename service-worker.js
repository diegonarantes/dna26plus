self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('dna26plus-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/service-worker.js',
                '/favicon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
