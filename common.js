// ==========================================================================
// SEDONA METHOD - SHARED JAVASCRIPT
// Common utilities for all HTML pages
// ==========================================================================

// ==========================================================================
// API CONFIGURATION
// ==========================================================================
const API_URL = 'https://script.google.com/macros/s/AKfycbxyql2BYExoYNXm-TwYibkw7jDXozNbWqeeoOmw-TNuX8gqMyW7P4Q4qD2iBFpM8odDZQ/exec';

// Get API URL from localStorage or fallback
function getApiUrl() {
  return localStorage.getItem('cleanupApiUrl') || API_URL;
}

// Get Default Name from localStorage or fallback
function getDefaultName() {
  return localStorage.getItem('cleanupDefaultName') || 'Firdaus Dabamona';
}

// Check if debug mode is enabled
function isDebugMode() {
  return localStorage.getItem('cleanupDebugMode') === 'true';
}

// Debug log
function debugLog(...args) {
  if (isDebugMode()) {
    console.log('[Sedona Debug]', ...args);
  }
}

// ==========================================================================
// API CALLS
// ==========================================================================
async function apiCall(action, data = null, extraParams = '') {
  const apiUrl = getApiUrl();

  if (!apiUrl || apiUrl === 'YOUR_WEBAPP_URL_HERE') {
    showToast('API belum dikonfigurasi! Buka Settings untuk konfigurasi.', 'error');
    return null;
  }

  let url = `${apiUrl}?action=${action}`;
  if (data) url += `&data=${encodeURIComponent(JSON.stringify(data))}`;
  if (extraParams) url += extraParams;

  debugLog('API Call:', action, data);

  try {
    const response = await fetch(url);
    const result = await response.json();
    debugLog('API Response:', result);
    return result;
  } catch (error) {
    console.error('API Error:', error);
    debugLog('API Error:', error);
    showToast('Gagal koneksi ke server', 'error');
    return null;
  }
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = 'info') {
  // Get or create container
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// ==========================================================================
// SIDEBAR TOGGLE (for sedona-app.html)
// ==========================================================================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.overlay');

  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('show');
}

// Close sidebar when clicking outside
document.addEventListener('click', function(e) {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.querySelector('.mobile-toggle');

  if (sidebar && toggle && window.innerWidth <= 768 &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target) &&
      sidebar.classList.contains('open')) {
    toggleSidebar();
  }
});

// ==========================================================================
// STORAGE HELPERS
// ==========================================================================
function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Storage save error:', e);
    return false;
  }
}

function loadFromStorage(key, defaultValue = null) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (e) {
    console.error('Storage load error:', e);
    return defaultValue;
  }
}

function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error('Storage remove error:', e);
    return false;
  }
}

// ==========================================================================
// DATE & TIME HELPERS
// ==========================================================================
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function formatDateTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

// ==========================================================================
// SESSION ID GENERATOR
// ==========================================================================
function generateSessionId(prefix = 'SM') {
  const now = new Date();
  return prefix + '-' +
    now.getFullYear().toString().substr(-2) +
    ('0' + (now.getMonth() + 1)).slice(-2) +
    ('0' + now.getDate()).slice(-2) + '-' +
    ('0' + now.getHours()).slice(-2) +
    ('0' + now.getMinutes()).slice(-2) +
    ('0' + now.getSeconds()).slice(-2);
}

// ==========================================================================
// INTENSITY STATUS HELPER
// ==========================================================================
function getIntensityStatus(val) {
  if (val <= 1) return '✅';
  if (val <= 3) return '⚠️';
  if (val <= 6) return '🔶';
  return '❌';
}

// ==========================================================================
// EMOTION DATA
// ==========================================================================
const EMOTIONS = {
  1: { name: 'Apathy', emoji: '😶', indo: 'Putus Asa' },
  2: { name: 'Grief', emoji: '😢', indo: 'Sedih' },
  3: { name: 'Fear', emoji: '😰', indo: 'Takut' },
  4: { name: 'Lust', emoji: '😤', indo: 'Nafsu' },
  5: { name: 'Anger', emoji: '😠', indo: 'Marah' },
  6: { name: 'Pride', emoji: '😏', indo: 'Ego' },
  7: { name: 'Courage', emoji: '💪', indo: 'Berani' },
  8: { name: 'Acceptance', emoji: '😌', indo: 'Ikhlas' },
  9: { name: 'Peace', emoji: '🕊️', indo: 'Damai' }
};

const WANTINGS = {
  Control: { indo: 'keinginan untuk mengontrol', description: 'Kecenderungan untuk mengontrol situasi' },
  Approval: { indo: 'keinginan untuk diakui', description: 'Kebutuhan untuk diakui dan diterima' },
  Security: { indo: 'keinginan untuk aman', description: 'Pencarian rasa aman dan stabil' },
  Worth: { indo: 'keinginan untuk merasa berharga', description: 'Kebutuhan merasa berharga' },
  Freedom: { indo: 'keinginan untuk bebas', description: 'Keinginan untuk bebas' },
  Separation: { indo: 'keinginan untuk berbeda', description: 'Kebutuhan untuk berbeda' },
  Oneness: { indo: 'keinginan untuk menyatu', description: 'Keinginan untuk menyatu' }
};

// ==========================================================================
// TIMER UTILITIES
// ==========================================================================
let globalTimerInterval = null;

function startTimer(seconds, displayId, onComplete) {
  stopTimer();
  let remaining = seconds;
  const display = document.getElementById(displayId);

  const updateDisplay = () => {
    if (!display) return;
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  updateDisplay();
  display?.classList.add('running');

  globalTimerInterval = setInterval(() => {
    remaining--;
    updateDisplay();

    if (remaining <= 0) {
      stopTimer();
      if (display) {
        display.textContent = '✅ Selesai';
        display.classList.remove('running');
      }
      if (onComplete) onComplete();
    }
  }, 1000);

  return globalTimerInterval;
}

function stopTimer() {
  if (globalTimerInterval) {
    clearInterval(globalTimerInterval);
    globalTimerInterval = null;
  }
}

// ==========================================================================
// SETTINGS MANAGEMENT
// ==========================================================================
function loadSettings() {
  return {
    apiUrl: localStorage.getItem('cleanupApiUrl') || API_URL,
    defaultName: localStorage.getItem('cleanupDefaultName') || 'Firdaus Dabamona',
    debugMode: localStorage.getItem('cleanupDebugMode') === 'true',
    showGrounding: localStorage.getItem('cleanupShowGrounding') !== 'false',
    showWelcoming: localStorage.getItem('cleanupShowWelcoming') !== 'false',
    quickMode: localStorage.getItem('cleanupQuickMode') === 'true'
  };
}

function saveSettings(settings) {
  if (settings.apiUrl) localStorage.setItem('cleanupApiUrl', settings.apiUrl);
  if (settings.defaultName) localStorage.setItem('cleanupDefaultName', settings.defaultName);
  if (settings.debugMode !== undefined) localStorage.setItem('cleanupDebugMode', settings.debugMode ? 'true' : 'false');
  if (settings.showGrounding !== undefined) localStorage.setItem('cleanupShowGrounding', settings.showGrounding ? 'true' : 'false');
  if (settings.showWelcoming !== undefined) localStorage.setItem('cleanupShowWelcoming', settings.showWelcoming ? 'true' : 'false');
  if (settings.quickMode !== undefined) localStorage.setItem('cleanupQuickMode', settings.quickMode ? 'true' : 'false');
}

// ==========================================================================
// EXPORT FOR GLOBAL ACCESS
// ==========================================================================
window.SedonaCommon = {
  API_URL,
  getApiUrl,
  getDefaultName,
  isDebugMode,
  debugLog,
  apiCall,
  showToast,
  toggleSidebar,
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
  formatDate,
  formatDateTime,
  formatTime,
  getTodayKey,
  generateSessionId,
  getIntensityStatus,
  EMOTIONS,
  WANTINGS,
  startTimer,
  stopTimer,
  loadSettings,
  saveSettings
};

// Also expose common functions globally for backward compatibility
window.showToast = showToast;
window.toggleSidebar = toggleSidebar;
window.getApiUrl = getApiUrl;
window.apiCall = apiCall;
window.debugLog = debugLog;
