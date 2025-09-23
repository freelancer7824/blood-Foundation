// sw.js
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => console.log('Service worker activated'));
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/') // আপনার সাইটের যেই লিংক ওপেন করতে চান
  );
});