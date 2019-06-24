export const serviceworker = `
const cacheName = 'cache-v1';
const resourcesToPrecahe = [
    '/',
    'index.html',
    'style.css',
    'single-portfolio.html',
    'single-portfolio2.html'
];

self.addEventListener('install', event => {
\tconsole.log('Here service worker install event!');
\tevent.waitUntil(
\t\tcaches.open(cacheName)
\t\t.then(cache => {
\t\t\treturn cache.addAll(resourcesToPrecahe);
\t\t})
\t);
});

self.addEventListener('fetch', event => {
\tevent.respondWith(caches.match(event.request)
\t\t.then(cachedResponse => {
\t\t\treturn cachedResponse || fetch(event.request);
\t\t})
\t);
});

`;