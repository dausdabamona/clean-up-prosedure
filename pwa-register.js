// ==================== PWA REGISTRATION ====================
// This script registers the service worker and handles PWA installation

(function() {
  'use strict';

  // Check if service workers are supported
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          console.log('[PWA] ServiceWorker registered:', registration.scope);

          // Check for updates
          registration.addEventListener('updatefound', function() {
            const newWorker = registration.installing;
            console.log('[PWA] New service worker installing...');

            newWorker.addEventListener('statechange', function() {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available, show update notification
                showUpdateNotification();
              }
            });
          });
        })
        .catch(function(error) {
          console.error('[PWA] ServiceWorker registration failed:', error);
        });
    });
  }

  // ==================== INSTALL PROMPT ====================
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', function(e) {
    console.log('[PWA] beforeinstallprompt fired');
    e.preventDefault();
    deferredPrompt = e;

    // Show install button after a delay (don't be too aggressive)
    setTimeout(showInstallButton, 5000);
  });

  function showInstallButton() {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return;
    }

    // Create install banner
    const banner = document.createElement('div');
    banner.id = 'pwa-install-banner';
    banner.innerHTML = `
      <div style="
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <div style="flex: 1;">
          <div style="font-weight: 600; margin-bottom: 4px;">Install Sedona Release</div>
          <div style="font-size: 0.85rem; opacity: 0.9;">Akses offline, tanpa internet</div>
        </div>
        <button id="pwa-install-btn" style="
          background: white;
          color: #667eea;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          margin-left: 15px;
        ">Install</button>
        <button id="pwa-dismiss-btn" style="
          background: transparent;
          color: white;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 5px 10px;
          opacity: 0.7;
        ">&times;</button>
      </div>
    `;

    document.body.appendChild(banner);

    // Handle install click
    document.getElementById('pwa-install-btn').addEventListener('click', async function() {
      if (!deferredPrompt) return;

      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('[PWA] User choice:', outcome);

      deferredPrompt = null;
      banner.remove();
    });

    // Handle dismiss
    document.getElementById('pwa-dismiss-btn').addEventListener('click', function() {
      banner.remove();
      // Don't show again for this session
      sessionStorage.setItem('pwa-banner-dismissed', 'true');
    });
  }

  // ==================== UPDATE NOTIFICATION ====================
  function showUpdateNotification() {
    const toast = document.createElement('div');
    toast.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        left: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <div>Update tersedia! Refresh untuk versi terbaru.</div>
        <button onclick="location.reload()" style="
          background: white;
          color: #27ae60;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        ">Refresh</button>
      </div>
    `;
    document.body.appendChild(toast);

    // Auto-hide after 10 seconds
    setTimeout(() => toast.remove(), 10000);
  }

  // ==================== INSTALLED EVENT ====================
  window.addEventListener('appinstalled', function(e) {
    console.log('[PWA] App installed successfully');
    // Remove install banner if present
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.remove();
  });

  // ==================== OFFLINE INDICATOR ====================
  function updateOnlineStatus() {
    const isOnline = navigator.onLine;

    if (!isOnline) {
      let indicator = document.getElementById('offline-indicator');
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'offline-indicator';
        indicator.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #e74c3c;
          color: white;
          text-align: center;
          padding: 8px;
          font-size: 0.85rem;
          z-index: 10001;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;
        indicator.textContent = 'Offline - Data disimpan lokal';
        document.body.appendChild(indicator);
      }
    } else {
      const indicator = document.getElementById('offline-indicator');
      if (indicator) indicator.remove();
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  // Check initial status
  updateOnlineStatus();

})();
