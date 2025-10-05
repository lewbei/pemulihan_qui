// Service Worker for PWA - Offline Functionality
const CACHE_NAME = 'kuiz-mega-v2.1.0';
const urlsToCache = [
  '/',
  '/kuiz_game.html',
  '/kuiz-styles.css',
  '/js/main.js',
  '/js/core/state.js',
  '/js/core/storage.js',
  '/js/core/ui.js',
  '/js/core/utils.js',
  '/js/core/analytics.js',
  '/js/core/performance.js',
  '/js/data/questions.js',
  '/scripts/performance_optimizer.js',
  '/scripts/kuiz_database_enhanced.js',
  '/scripts/yearly_question_tracker.js',
  '/scripts/learning_analytics.js',
  '/manifest.json',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/icons/badge.png',
  '/assets/icons/practice-icon.png',
  '/assets/icons/daily-icon.png'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Network First, Cache Fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response before caching
        const responseToCache = response.clone();
        
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
        
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            
            // Return offline page if no cache
            return new Response(
              '<h1>Offline Mode</h1><p>Please check your connection.</p>',
              {
                headers: { 'Content-Type': 'text/html' }
              }
            );
          });
      })
  );
});

// Background Sync for Score Upload
self.addEventListener('sync', event => {
  if (event.tag === 'sync-scores') {
    event.waitUntil(syncScores());
  }
});

async function syncScores() {
  // Get pending scores from IndexedDB
  const pendingScores = await getPendingScores();
  
  for (const score of pendingScores) {
    try {
      // Upload score to server (when implemented)
      await uploadScore(score);
      // Remove from pending
      await removePendingScore(score.id);
    } catch (error) {
      console.error('Failed to sync score:', error);
    }
  }
}

// Push Notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Time for your daily quiz!',
    icon: '/assets/icons/icon-192.png',
    badge: '/assets/icons/badge.png',
    vibrate: [200, 100, 200],
    actions: [
      { action: 'play', title: 'Play Now' },
      { action: 'later', title: 'Remind Later' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Kuiz Adventure MEGA', options)
  );
});

// Notification Click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'play') {
    event.waitUntil(
      clients.openWindow('/kuiz_game.html?mode=daily')
    );
  } else if (event.action === 'later') {
    // Schedule reminder for 1 hour later
    setTimeout(() => {
      self.registration.showNotification('Reminder: Daily Quiz!', {
        body: 'Don\'t forget your daily quiz!',
        icon: '/assets/icons/icon-192.png'
      });
    }, 3600000);
  }
});

// Helper Functions (placeholders for actual implementation)
async function getPendingScores() {
  // Get from IndexedDB
  return [];
}

async function uploadScore(score) {
  // Upload to server
  return true;
}

async function removePendingScore(id) {
  // Remove from IndexedDB
  return true;
}
