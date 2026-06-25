// ============================================================================
// GAIN BOOK — catat "gain" (manfaat/insight/pergeseran positif) ala Sedona
// Tersimpan ke Google Sheets (via common.js apiCall) + cache lokal.
// Pengingat 2x/hari: Notifikasi + jadwal saat app terbuka + Periodic Background
// Sync (best-effort utk PWA terpasang) + banner saat app dibuka bila terlewat.
// ============================================================================
(function () {
  'use strict';

  const LOCAL_KEY = 'gainBook_local';
  const SETTINGS_KEY = 'gainBook_reminderSettings';
  let gains = [];
  let reminderTimers = [];

  const CATEGORIES = ['Releasing', 'Hubungan', 'Kesehatan/Tubuh', 'Pekerjaan/Karir', 'Keuangan', 'Diri Sendiri', 'Spiritual', 'Lainnya'];

  function defaultReminder() { return { enabled: false, times: ['09:00', '21:00'] }; }
  function loadReminder() {
    try { return Object.assign(defaultReminder(), JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')); }
    catch (e) { return defaultReminder(); }
  }
  function saveReminder(s) { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }
  let reminder = loadReminder();

  function todayKey() { return new Date().toISOString().split('T')[0]; }
  function saveLocal() { saveToStorage(LOCAL_KEY, gains); }
  function loadLocal() { gains = loadFromStorage(LOCAL_KEY, []) || []; }

  // ==================== SAVE / LOAD ====================
  async function addGain() {
    const txtEl = document.getElementById('gainText');
    const txt = (txtEl.value || '').trim();
    if (!txt) { showToast('Tulis gain-nya dulu ya 🌟', 'error'); return; }
    const g = {
      id: 'GAIN-' + Date.now(),
      gain: txt,
      category: document.getElementById('gainCategory').value || '',
      mood: document.getElementById('gainMood').value || '',
      note: (document.getElementById('gainNote').value || '').trim(),
      date: todayKey(),
      timestamp: new Date().toISOString(),
      source: 'gain-book'
    };
    gains.unshift(g);
    saveLocal();
    renderGains();
    renderTodayCount();
    txtEl.value = '';
    document.getElementById('gainNote').value = '';
    showToast('Gain tersimpan 🌟', 'success');
    dismissBanner();
    try {
      const r = await apiCall('saveGain', g);
      if (!r || !r.success) showToast('Tersimpan lokal (server belum sinkron)', 'info');
    } catch (e) { /* kept local */ }
  }

  async function loadGains() {
    loadLocal();
    renderGains();
    renderTodayCount();
    try {
      const r = await apiCall('getGains');
      if (r && r.success && Array.isArray(r.data)) {
        gains = r.data;
        saveLocal();
        renderGains();
        renderTodayCount();
      }
    } catch (e) { /* offline → local only */ }
  }

  async function delGain(id) {
    if (!confirm('Hapus gain ini?')) return;
    gains = gains.filter(function (g) { return g.id !== id; });
    saveLocal();
    renderGains();
    renderTodayCount();
    try { await apiCall('deleteGain', null, '&id=' + encodeURIComponent(id)); } catch (e) {}
  }

  // ==================== RENDER ====================
  function fmtTime(iso) {
    try { return new Date(iso).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; }
  }
  function fmtDateLabel(d) {
    const today = todayKey();
    const y = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (d === today) return 'Hari ini';
    if (d === y) return 'Kemarin';
    try { return new Date(d).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return d; }
  }
  function esc(s) { const d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }

  function renderGains() {
    const box = document.getElementById('gainList');
    if (!box) return;
    if (!gains.length) {
      box.innerHTML = '<div class="gb-empty"><div class="gb-empty-icon">📖</div><p>Belum ada gain. Mulai catat hal positif sekecil apa pun!</p></div>';
      return;
    }
    // group by date
    const groups = {};
    gains.forEach(function (g) { const d = g.date || (g.timestamp || '').split('T')[0]; (groups[d] = groups[d] || []).push(g); });
    const dates = Object.keys(groups).sort().reverse();
    box.innerHTML = dates.map(function (d) {
      const items = groups[d].map(function (g) {
        return '<div class="gb-item">' +
          '<div class="gb-item-top">' +
            '<span class="gb-time">' + fmtTime(g.timestamp) + (g.mood ? ' · ' + esc(g.mood) : '') + '</span>' +
            (g.category ? '<span class="gb-cat">' + esc(g.category) + '</span>' : '') +
            '<button class="gb-del" onclick="GainBook.delGain(\'' + g.id + '\')" title="Hapus">×</button>' +
          '</div>' +
          '<div class="gb-text">' + esc(g.gain) + '</div>' +
          (g.note ? '<div class="gb-note">' + esc(g.note) + '</div>' : '') +
        '</div>';
      }).join('');
      return '<div class="gb-group"><div class="gb-date">' + fmtDateLabel(d) + ' · ' + groups[d].length + ' gain</div>' + items + '</div>';
    }).join('');
  }

  function renderTodayCount() {
    const el = document.getElementById('gbTodayCount');
    if (!el) return;
    const today = todayKey();
    const n = gains.filter(function (g) { return (g.date || (g.timestamp || '').split('T')[0]) === today; }).length;
    el.textContent = n;
    const wrap = document.getElementById('gbTodayWrap');
    if (wrap) wrap.className = 'gb-today ' + (n >= 2 ? 'done' : (n === 1 ? 'partial' : 'none'));
    const msg = document.getElementById('gbTodayMsg');
    if (msg) msg.textContent = n >= 2 ? '✅ Target harian tercapai!' : (n === 1 ? 'Satu lagi untuk capai target 2×/hari' : 'Target: minimal 2 gain hari ini');
  }

  // ==================== REMINDERS ====================
  function clearTimers() { reminderTimers.forEach(clearTimeout); reminderTimers = []; }

  function nextOccurrence(hhmm) {
    const parts = hhmm.split(':');
    const now = new Date();
    const t = new Date();
    t.setHours(parseInt(parts[0], 10) || 0, parseInt(parts[1], 10) || 0, 0, 0);
    if (t.getTime() <= now.getTime()) t.setDate(t.getDate() + 1);
    return t.getTime() - now.getTime();
  }

  function notify(body) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const opts = { body: body, icon: 'icons/icon.svg', tag: 'gain-reminder', renotify: true };
    // Prefer SW notification (works even if tab backgrounded); fall back to page.
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then(function (reg) {
        reg.showNotification('🌟 Waktunya catat Gain', opts).catch(function () { try { new Notification('🌟 Waktunya catat Gain', opts); } catch (e) {} });
      });
    } else { try { new Notification('🌟 Waktunya catat Gain', opts); } catch (e) {} }
  }

  function scheduleReminders() {
    clearTimers();
    if (!reminder.enabled) return;
    reminder.times.forEach(function (hhmm) {
      const fire = function () {
        notify('Sudah catat gain hari ini? Tulis satu hal positif sekarang.');
        reminderTimers.push(setTimeout(fire, 24 * 60 * 60 * 1000)); // besok di jam yang sama
      };
      reminderTimers.push(setTimeout(fire, nextOccurrence(hhmm)));
    });
  }

  function registerPeriodicSync() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.ready.then(function (reg) {
      if (reg.periodicSync && reg.periodicSync.register) {
        reg.periodicSync.register('gain-reminder', { minInterval: 12 * 60 * 60 * 1000 }).catch(function () {});
      }
    }).catch(function () {});
  }

  async function enableReminders() {
    if (!('Notification' in window)) { showToast('Browser tidak mendukung notifikasi', 'error'); return; }
    let perm = Notification.permission;
    if (perm !== 'granted') perm = await Notification.requestPermission();
    if (perm !== 'granted') { showToast('Izin notifikasi ditolak', 'error'); return; }
    reminder.enabled = true;
    saveReminder(reminder);
    syncReminderUI();
    scheduleReminders();
    registerPeriodicSync();
    showToast('Pengingat aktif ⏰', 'success');
  }

  function saveReminderSettings() {
    const t1 = document.getElementById('gbTime1').value || '09:00';
    const t2 = document.getElementById('gbTime2').value || '21:00';
    reminder.times = [t1, t2];
    saveReminder(reminder);
    if (reminder.enabled) scheduleReminders();
    showToast('Jam pengingat disimpan', 'success');
  }

  function disableReminders() {
    reminder.enabled = false;
    saveReminder(reminder);
    clearTimers();
    syncReminderUI();
    showToast('Pengingat dimatikan', 'info');
  }

  function syncReminderUI() {
    const badge = document.getElementById('gbReminderStatus');
    if (badge) {
      badge.textContent = reminder.enabled ? 'AKTIF' : 'MATI';
      badge.className = 'gb-badge ' + (reminder.enabled ? 'on' : 'off');
    }
    const enBtn = document.getElementById('gbEnableBtn');
    const disBtn = document.getElementById('gbDisableBtn');
    if (enBtn) enBtn.style.display = reminder.enabled ? 'none' : '';
    if (disBtn) disBtn.style.display = reminder.enabled ? '' : 'none';
  }

  // Banner kalau app dibuka & sudah lewat jam pengingat tapi belum cukup gain.
  function checkOverdueBanner() {
    if (!reminder.enabled) return;
    const now = new Date();
    const nowMin = now.getHours() * 60 + now.getMinutes();
    const passed = reminder.times.some(function (hhmm) {
      const p = hhmm.split(':'); return (parseInt(p[0], 10) * 60 + parseInt(p[1], 10)) <= nowMin;
    });
    const today = todayKey();
    const n = gains.filter(function (g) { return (g.date || (g.timestamp || '').split('T')[0]) === today; }).length;
    if (passed && n < 2) showBanner();
  }
  function showBanner() {
    const b = document.getElementById('gbBanner');
    if (b) b.style.display = 'flex';
  }
  function dismissBanner() {
    const b = document.getElementById('gbBanner');
    if (b) b.style.display = 'none';
  }

  // ==================== INIT ====================
  function initUI() {
    // categories
    const sel = document.getElementById('gainCategory');
    if (sel) {
      CATEGORIES.forEach(function (c) { const o = document.createElement('option'); o.value = c; o.textContent = c; sel.appendChild(o); });
    }
    // reminder inputs
    const t1 = document.getElementById('gbTime1'); if (t1) t1.value = reminder.times[0] || '09:00';
    const t2 = document.getElementById('gbTime2'); if (t2) t2.value = reminder.times[1] || '21:00';
    syncReminderUI();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initUI();
    loadGains().then(function () { checkOverdueBanner(); });
    if (reminder.enabled) { scheduleReminders(); registerPeriodicSync(); }
  });

  window.GainBook = {
    addGain: addGain,
    delGain: delGain,
    enableReminders: enableReminders,
    disableReminders: disableReminders,
    saveReminderSettings: saveReminderSettings,
    dismissBanner: dismissBanner
  };
})();
