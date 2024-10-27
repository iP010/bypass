self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('stc-cache').then(cache => {
      return cache.addAll([
        'https://xlmnxp.github.io/ikhd/STC.html',
		'https://xlmnxp.github.io/ikhd/index.html',
		'https://xlmnxp.github.io/ikhd/GO.html',
		'https://xlmnxp.github.io/ikhd/ITC.html',
		'https://xlmnxp.github.io/ikhd/Mobily.html',
		'https://xlmnxp.github.io/ikhd/ZAIN.html',
		'/manifest.json',
        '/manifest-Zain.json',
        '/manifest-Mobily.json',
        '/manifest-ITC.json',
        '/manifest-GO.json',
        '/manifest-STC.json',
        '/styles.css',
        '/app.js'
        // أضف المزيد من الملفات حسب الحاجة
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
