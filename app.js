// ==========================================================================
// CLEAN UP TRACKER - WEB APP (JavaScript)
// ==========================================================================

// ==========================================================================
// CONFIGURATION - Stored in localStorage
// ==========================================================================
const FALLBACK_API_URL = 'https://script.google.com/macros/s/AKfycbwC-zuAzqjFki7Gy1zyt0sq6ohWGzADKvCeN4rCr49Pl_0IznTdxzIOyfHkLOxsjteg1A/exec';
const FALLBACK_DEFAULT_NAME = 'Firdaus Dabamona';

// Get API URL from localStorage or fallback
function getApiUrl() {
  return localStorage.getItem('cleanupApiUrl') || FALLBACK_API_URL;
}

// Get Default Name from localStorage or fallback
function getDefaultName() {
  return localStorage.getItem('cleanupDefaultName') || FALLBACK_DEFAULT_NAME;
}

// Check if debug mode is enabled
function isDebugMode() {
  return localStorage.getItem('cleanupDebugMode') === 'true';
}

// Debug log
function debugLog(...args) {
  if (isDebugMode()) {
    console.log('[CleanUp Debug]', ...args);
  }
}

// ==========================================================================
// GLOBAL STATE
// ==========================================================================
let currentTab = 'worksheet';
let drafts = [];
let sessions = [];
let stats = {};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
  initTabs();
  generateSesiId();
  loadSavedName();
  setupIntensityListeners();
  initReleaseTrackers();
  setupFormListeners();
  loadSettings();
  loadSessionSettings();
  setupGroundingTrigger();
  setupWelcomingTriggers();

  const apiUrl = getApiUrl();
  if (apiUrl && apiUrl !== 'YOUR_WEBAPP_URL_HERE') {
    loadDrafts();
    loadTracker();
    loadStats();
  } else {
    console.log('API belum dikonfigurasi. Buka Settings untuk konfigurasi.');
    showApiWarning(true);
  }
});

// ==========================================================================
// TAB NAVIGATION
// ==========================================================================
function initTabs() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      switchTab(this.dataset.tab);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
  
  const fab = document.getElementById('fabContainer');
  fab.style.display = tabId === 'worksheet' ? 'flex' : 'none';
  
  currentTab = tabId;
  
  if (tabId === 'draft') loadDrafts();
  if (tabId === 'tracker') loadTracker();
  if (tabId === 'dashboard') loadStats();
}

// ==========================================================================
// FORM HELPERS
// ==========================================================================
function generateSesiId() {
  const now = new Date();
  const id = 'CU-' + 
    now.getFullYear().toString().substr(-2) +
    ('0' + (now.getMonth() + 1)).slice(-2) +
    ('0' + now.getDate()).slice(-2) + '-' +
    ('0' + now.getHours()).slice(-2) +
    ('0' + now.getMinutes()).slice(-2) +
    ('0' + now.getSeconds()).slice(-2);
  document.getElementById('sesiId').value = id;
  return id;
}

function loadSavedName() {
  const savedName = localStorage.getItem('cleanupUserName') || getDefaultName();
  document.getElementById('nama').value = savedName;
}

function saveName() {
  const nama = document.getElementById('nama').value;
  if (nama) localStorage.setItem('cleanupUserName', nama);
}

function setupIntensityListeners() {
  const input = document.getElementById('surfaceIntensity');
  const status = document.getElementById('surfaceStatus');
  if (input && status) {
    input.addEventListener('input', function() {
      status.textContent = getIntensityStatus(parseInt(this.value) || 0);
    });
  }
}

function getIntensityStatus(val) {
  if (val <= 1) return '✅';
  if (val <= 3) return '⚠️';
  if (val <= 6) return '🔶';
  return '❌';
}

function setupFormListeners() {
  // Listen for changes in form fields to update layer progress
  const formFields = document.querySelectorAll('#tab-worksheet input, #tab-worksheet select, #tab-worksheet textarea');
  formFields.forEach(field => {
    field.addEventListener('change', updateLayerProgress);
    field.addEventListener('input', updateLayerProgress);
  });
}

function updateLayerProgress() {
  // Surface
  const surfaceComplete = !!document.getElementById('surfaceKeyakinan')?.value &&
                          !!document.getElementById('surfaceIntensity')?.value;
  updateProgressItem('progSurface', 'Surface', surfaceComplete, isLayerComplete('surface', 0));

  // Layer 1
  const l1Started = !!document.getElementById('l1Jawaban')?.value;
  const l1Done = isLayerComplete('l1', 10);
  updateProgressItem('progL1', 'L1', l1Started || l1Done, l1Done);

  // Layer 2
  const l2Started = !!document.getElementById('l2Jawaban')?.value;
  const l2Done = isLayerComplete('l2', 10);
  updateProgressItem('progL2', 'L2', l2Started || l2Done, l2Done);

  // Layer 3
  const l3Started = !!document.getElementById('l3Jawaban')?.value;
  const l3Done = isLayerComplete('l3', 10);
  updateProgressItem('progL3', 'L3', l3Started || l3Done, l3Done);

  // ROOT
  const rootStarted = !!document.getElementById('rootWanting')?.value;
  const rootDone = isLayerComplete('root', 20);
  updateProgressItem('progRoot', 'ROOT', rootStarted || rootDone, rootDone);
}

function updateProgressItem(id, label, started, done) {
  const item = document.getElementById(id);
  if (!item) return;

  item.classList.remove('pending', 'active', 'done');

  if (done) {
    item.classList.add('done');
    item.innerHTML = `<span>✅</span> ${label}`;
  } else if (started) {
    item.classList.add('active');
    item.innerHTML = `<span>🔄</span> ${label}`;
  } else {
    item.classList.add('pending');
    item.innerHTML = `<span>⬜</span> ${label}`;
  }
}

// ==========================================================================
// RELEASE TRACKER WITH AUTO-HIDE
// ==========================================================================
const LAYER_ORDER = ['l1', 'l2', 'l3', 'root'];
const LAYER_CARD_IDS = {
  'l1': 'layer1Card',
  'l2': 'layer2Card',
  'l3': 'layer3Card',
  'root': 'rootCard'
};

function initReleaseTrackers() {
  createReleaseTracker('l1ReleaseTracker', 'l1', 10);
  createReleaseTracker('l2ReleaseTracker', 'l2', 10);
  createReleaseTracker('l3ReleaseTracker', 'l3', 10);
  createReleaseTracker('rootReleaseTracker', 'root', 20);

  // Initialize visibility - only show first session of each tracker
  updateTrackerVisibility('l1', 10);
  updateTrackerVisibility('l2', 10);
  updateTrackerVisibility('l3', 10);
  updateTrackerVisibility('root', 20);
}

function createReleaseTracker(containerId, prefix, count) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = '';
  for (let i = 1; i <= count; i++) {
    // First item is visible, others start locked
    const lockedClass = i > 1 ? 'locked' : '';
    html += `
      <div class="release-item ${lockedClass}" id="${prefix}R${i}">
        <span class="r-num">${i}</span>
        <input type="number" id="${prefix}Int${i}" min="0" max="10" placeholder="-"
               onchange="handleReleaseInput('${prefix}', ${i}, ${count})"
               oninput="handleReleaseInput('${prefix}', ${i}, ${count})"
               onfocus="setActiveRelease('${prefix}', ${i})">
        <span class="r-delta" id="${prefix}Delta${i}"></span>
      </div>
    `;
  }
  container.innerHTML = html;
}

function setActiveRelease(prefix, num) {
  const container = document.getElementById(`${prefix}ReleaseTracker`);
  if (container) {
    container.querySelectorAll('.release-item').forEach(item => item.classList.remove('active'));
    const current = document.getElementById(`${prefix}R${num}`);
    if (current && !current.classList.contains('locked') && !current.classList.contains('hidden')) {
      current.classList.add('active');
    }
  }
}

function handleReleaseInput(prefix, num, count) {
  const currentInput = document.getElementById(`${prefix}Int${num}`);
  const currentVal = parseInt(currentInput.value);
  const item = document.getElementById(`${prefix}R${num}`);
  const deltaSpan = document.getElementById(`${prefix}Delta${num}`);

  // Mark as filled if has value
  if (!isNaN(currentVal) && currentVal >= 0) {
    item.classList.add('filled');

    // Check if intensity reached 0-1 (done state)
    if (currentVal <= 1) {
      item.classList.add('done');
      // Hide remaining sessions and mark layer as complete
      hideRemainingSessions(prefix, num, count);
      markLayerComplete(prefix);
      updateLayerProgress();
      // Auto-scroll to next layer after short delay
      setTimeout(() => scrollToNextLayer(prefix), 500);
    } else {
      item.classList.remove('done');
      // Show next session if not done
      unlockNextSession(prefix, num, count);
      // Remove layer complete status if re-editing
      removeLayerComplete(prefix);
      updateLayerProgress();
    }
  } else {
    item.classList.remove('filled', 'done');
  }

  // Calculate delta from previous
  updateDelta(prefix, num, currentVal);

  // Update visibility for all items
  updateTrackerVisibility(prefix, count);
}

function updateDelta(prefix, num, currentVal) {
  const deltaSpan = document.getElementById(`${prefix}Delta${num}`);

  if (num > 1) {
    const prevInput = document.getElementById(`${prefix}Int${num - 1}`);
    const prevVal = parseInt(prevInput.value);

    if (!isNaN(currentVal) && !isNaN(prevVal)) {
      const delta = currentVal - prevVal;
      if (delta < 0) {
        deltaSpan.textContent = `↓${Math.abs(delta)}`;
        deltaSpan.className = 'r-delta down';
      } else if (delta > 0) {
        deltaSpan.textContent = `↑${delta}`;
        deltaSpan.className = 'r-delta up';
      } else {
        deltaSpan.textContent = '=';
        deltaSpan.className = 'r-delta same';
      }
    } else {
      deltaSpan.textContent = '';
      deltaSpan.className = 'r-delta';
    }
  }
}

function updateTrackerVisibility(prefix, count) {
  let foundDone = false;
  let lastFilledIndex = 0;

  // First pass: find if any session is "done" (0-1) and last filled
  for (let i = 1; i <= count; i++) {
    const input = document.getElementById(`${prefix}Int${i}`);
    const val = parseInt(input?.value);

    if (!isNaN(val)) {
      lastFilledIndex = i;
      if (val <= 1) {
        foundDone = true;
        break;
      }
    }
  }

  // Second pass: update visibility
  for (let i = 1; i <= count; i++) {
    const item = document.getElementById(`${prefix}R${i}`);
    if (!item) continue;

    if (foundDone && i > lastFilledIndex) {
      // Hide sessions after done
      item.classList.add('hidden');
      item.classList.remove('locked');
    } else if (i <= lastFilledIndex + 1) {
      // Show filled sessions and next one
      item.classList.remove('hidden', 'locked');
    } else {
      // Lock future sessions
      item.classList.remove('hidden');
      item.classList.add('locked');
    }
  }
}

function unlockNextSession(prefix, currentNum, count) {
  const nextNum = currentNum + 1;
  if (nextNum <= count) {
    const nextItem = document.getElementById(`${prefix}R${nextNum}`);
    if (nextItem) {
      nextItem.classList.remove('locked', 'hidden');
    }
  }
}

function hideRemainingSessions(prefix, fromNum, count) {
  for (let i = fromNum + 1; i <= count; i++) {
    const item = document.getElementById(`${prefix}R${i}`);
    if (item) {
      item.classList.add('hidden');
      item.classList.remove('locked');
      // Clear values in hidden sessions
      const input = document.getElementById(`${prefix}Int${i}`);
      if (input) input.value = '';
    }
  }
}

function markLayerComplete(prefix) {
  const cardId = LAYER_CARD_IDS[prefix];
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.add('layer-complete');
  }
}

function removeLayerComplete(prefix) {
  const cardId = LAYER_CARD_IDS[prefix];
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.remove('layer-complete');
  }
}

function scrollToNextLayer(prefix) {
  const currentIndex = LAYER_ORDER.indexOf(prefix);
  if (currentIndex < LAYER_ORDER.length - 1) {
    const nextPrefix = LAYER_ORDER[currentIndex + 1];
    const nextCardId = LAYER_CARD_IDS[nextPrefix];
    const nextCard = document.getElementById(nextCardId);

    if (nextCard) {
      nextCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      showToast(`Layer ${prefix.toUpperCase()} selesai! Lanjut ke ${nextPrefix.toUpperCase()}`, 'success');

      // Focus on first input of next layer
      setTimeout(() => {
        const firstInput = document.getElementById(`${nextPrefix}Int1`);
        if (firstInput) firstInput.focus();
      }, 600);
    }
  } else {
    // All layers done, scroll to hasil
    const hasilCard = document.querySelector('.card-header.hasil')?.parentElement;
    if (hasilCard) {
      hasilCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      showToast('Semua layer selesai! Isi Hasil Akhir', 'success');
    }
  }
}

function isLayerComplete(prefix, count) {
  // Surface is "complete" when it has keyakinan and intensity filled
  if (prefix === 'surface') {
    const keyakinan = document.getElementById('surfaceKeyakinan')?.value;
    const intensity = document.getElementById('surfaceIntensity')?.value;
    return !!keyakinan && !!intensity;
  }

  // For other layers, check if any release session reached 0-1
  for (let i = 1; i <= count; i++) {
    const input = document.getElementById(`${prefix}Int${i}`);
    const val = parseInt(input?.value);
    if (!isNaN(val) && val <= 1) {
      return true;
    }
  }
  return false;
}

function getReleaseTrackerData(prefix, count) {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const input = document.getElementById(`${prefix}Int${i}`);
    data.push(input ? input.value : '');
  }
  return data;
}

function setReleaseTrackerData(prefix, count, data) {
  if (!data || !Array.isArray(data)) return;
  for (let i = 1; i <= count; i++) {
    const input = document.getElementById(`${prefix}Int${i}`);
    if (input && data[i - 1] !== undefined && data[i - 1] !== '') {
      input.value = data[i - 1];
    }
  }
  // Update visibility after loading data
  updateTrackerVisibility(prefix, count);
  // Check if layer is complete
  if (isLayerComplete(prefix, count)) {
    markLayerComplete(prefix);
  }
}

function getLastIntensity(prefix, count) {
  for (let i = count; i >= 1; i--) {
    const input = document.getElementById(`${prefix}Int${i}`);
    const val = parseInt(input?.value);
    if (!isNaN(val)) return val;
  }
  return null;
}

function resetReleaseTracker(prefix, count) {
  for (let i = 1; i <= count; i++) {
    const input = document.getElementById(`${prefix}Int${i}`);
    const item = document.getElementById(`${prefix}R${i}`);
    const delta = document.getElementById(`${prefix}Delta${i}`);
    if (input) input.value = '';
    if (item) {
      item.classList.remove('filled', 'done', 'active', 'hidden');
      // Lock all except first
      if (i > 1) {
        item.classList.add('locked');
      } else {
        item.classList.remove('locked');
      }
    }
    if (delta) { delta.textContent = ''; delta.className = 'r-delta'; }
  }
  removeLayerComplete(prefix);
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => toast.remove(), 3000);
}

// ==========================================================================
// COLLECT FORM DATA
// ==========================================================================
function collectFormData() {
  saveName();

  return {
    sesiId: document.getElementById('sesiId').value,
    tanggalMulai: new Date().toISOString(),
    nama: document.getElementById('nama').value,
    issue: document.getElementById('issue').value,
    kategori: document.getElementById('kategori').value,

    surfaceKeyakinan: document.getElementById('surfaceKeyakinan').value,
    surfaceLokasi: document.getElementById('surfaceLokasi').value,
    surfaceIntensity: document.getElementById('surfaceIntensity').value,

    l1Pertanyaan: document.getElementById('l1Pertanyaan').value,
    l1Jawaban: document.getElementById('l1Jawaban').value,
    l1Emosi: document.getElementById('l1Emosi').value,
    l1IntensityAwal: document.getElementById('l1IntensityAwal').value,
    l1Bisakah: document.getElementById('l1Bisakah').value,
    l1Mau: document.getElementById('l1Mau').value,
    l1Kapan: document.getElementById('l1Kapan').value,
    l1ReleaseData: getReleaseTrackerData('l1', 10),
    l1IntensityAfter: getLastIntensity('l1', 10),
    l1Resistance: getResistanceData('l1'),
    l1TripleWelcoming: getTripleWelcomingData('l1'),

    l2Pertanyaan: document.getElementById('l2Pertanyaan').value,
    l2Jawaban: document.getElementById('l2Jawaban').value,
    l2Emosi: document.getElementById('l2Emosi').value,
    l2IntensityAwal: document.getElementById('l2IntensityAwal').value,
    l2Bisakah: document.getElementById('l2Bisakah').value,
    l2Mau: document.getElementById('l2Mau').value,
    l2Kapan: document.getElementById('l2Kapan').value,
    l2ReleaseData: getReleaseTrackerData('l2', 10),
    l2IntensityAfter: getLastIntensity('l2', 10),
    l2Resistance: getResistanceData('l2'),
    l2TripleWelcoming: getTripleWelcomingData('l2'),

    l3Pertanyaan: document.getElementById('l3Pertanyaan').value,
    l3Jawaban: document.getElementById('l3Jawaban').value,
    l3Emosi: document.getElementById('l3Emosi').value,
    l3IntensityAwal: document.getElementById('l3IntensityAwal').value,
    l3Bisakah: document.getElementById('l3Bisakah').value,
    l3Mau: document.getElementById('l3Mau').value,
    l3Kapan: document.getElementById('l3Kapan').value,
    l3ReleaseData: getReleaseTrackerData('l3', 10),
    l3IntensityAfter: getLastIntensity('l3', 10),
    l3Resistance: getResistanceData('l3'),
    l3TripleWelcoming: getTripleWelcomingData('l3'),

    rootPertanyaan: document.getElementById('rootPertanyaan').value,
    rootWanting: document.getElementById('rootWanting').value,
    rootIntensityAwal: document.getElementById('rootIntensityAwal').value,
    rootDeskripsi: document.getElementById('rootDeskripsi').value,
    rootBisakah: document.getElementById('rootBisakah').value,
    rootMau: document.getElementById('rootMau').value,
    rootKapan: document.getElementById('rootKapan').value,
    rootReleaseData: getReleaseTrackerData('root', 20),
    rootIntensityAfter: getLastIntensity('root', 20),
    rootResistance: getResistanceData('root'),

    hasilStatus: document.getElementById('hasilStatus').value,
    emotionalState: document.getElementById('emotionalState').value,
    hasilInsight: document.getElementById('hasilInsight').value,
    hasilNextStep: document.getElementById('hasilNextStep').value
  };
}

function loadFormData(data) {
  const fields = [
    'sesiId', 'nama', 'issue', 'kategori',
    'surfaceKeyakinan', 'surfaceLokasi', 'surfaceIntensity',
    'l1Pertanyaan', 'l1Jawaban', 'l1Emosi', 'l1IntensityAwal', 'l1Bisakah', 'l1Mau', 'l1Kapan',
    'l2Pertanyaan', 'l2Jawaban', 'l2Emosi', 'l2IntensityAwal', 'l2Bisakah', 'l2Mau', 'l2Kapan',
    'l3Pertanyaan', 'l3Jawaban', 'l3Emosi', 'l3IntensityAwal', 'l3Bisakah', 'l3Mau', 'l3Kapan',
    'rootPertanyaan', 'rootWanting', 'rootIntensityAwal', 'rootDeskripsi', 'rootBisakah', 'rootMau', 'rootKapan',
    'hasilStatus', 'emotionalState', 'hasilInsight', 'hasilNextStep'
  ];

  fields.forEach(f => {
    const el = document.getElementById(f);
    if (el) el.value = data[f] || '';
  });

  // Load release tracker data
  if (data.l1ReleaseData) setReleaseTrackerData('l1', 10, data.l1ReleaseData);
  if (data.l2ReleaseData) setReleaseTrackerData('l2', 10, data.l2ReleaseData);
  if (data.l3ReleaseData) setReleaseTrackerData('l3', 10, data.l3ReleaseData);
  if (data.rootReleaseData) setReleaseTrackerData('root', 20, data.rootReleaseData);

  // Update surface intensity status
  const surfaceEl = document.getElementById('surfaceIntensity');
  if (surfaceEl) surfaceEl.dispatchEvent(new Event('input'));
}

function resetForm() {
  if (!confirm('Reset semua field?')) return;

  document.querySelectorAll('#tab-worksheet input, #tab-worksheet select, #tab-worksheet textarea').forEach(el => {
    if (el.id !== 'nama' && el.id !== 'sesiId') {
      el.tagName === 'SELECT' ? el.selectedIndex = 0 : el.value = '';
    }
  });

  // Reset release trackers
  resetReleaseTracker('l1', 10);
  resetReleaseTracker('l2', 10);
  resetReleaseTracker('l3', 10);
  resetReleaseTracker('root', 20);

  // Reset resistance panels
  resetResistancePanels('l1');
  resetResistancePanels('l2');
  resetResistancePanels('l3');
  resetResistancePanels('root');

  // Reset welcoming panels
  ['surface', 'l1', 'l2', 'l3', 'root'].forEach(layer => {
    const panel = document.getElementById(`${layer}Welcoming`);
    if (panel) panel.classList.remove('show');
    welcomingCompleted[layer] = false;
  });

  // Reset session state
  sessionStarted = false;

  generateSesiId();
  showToast('Form di-reset', 'success');
}

// ==========================================================================
// API CALLS
// ==========================================================================
async function apiCall(action, data = null, extraParams = '') {
  const apiUrl = getApiUrl();

  if (!apiUrl || apiUrl === 'YOUR_WEBAPP_URL_HERE') {
    showToast('API belum dikonfigurasi! Buka Settings untuk konfigurasi.', 'error');
    showApiWarning(true);
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
// SAVE FUNCTIONS
// ==========================================================================
async function saveDraft() {
  const data = collectFormData();
  
  if (!data.issue) {
    showToast('Issue/Target harus diisi!', 'error');
    return;
  }
  
  data.layerStuck = determineLayerStuck(data);
  data.currentIntensity = data.rootIntensityAfter || data.l3IntensityAfter || data.l2IntensityAfter || data.l1IntensityAfter || data.surfaceIntensity;
  data.status = data.layerStuck === 'DONE' ? 'READY' : 'IN PROGRESS';
  
  const result = await apiCall('saveDraft', data);
  
  if (result && result.success) {
    showToast('💾 Draft tersimpan!', 'success');
    loadDrafts();
  }
}

async function saveComplete() {
  const data = collectFormData();
  
  if (!data.issue) { showToast('Issue/Target harus diisi!', 'error'); return; }
  if (!data.hasilStatus) { showToast('Status Hasil Akhir harus diisi!', 'error'); return; }
  if (!data.emotionalState) { showToast('Emotional State harus diisi!', 'error'); return; }
  
  if (!confirm('Tuntaskan sesi ini?')) return;
  
  const result = await apiCall('saveComplete', data);
  
  if (result && result.success) {
    showToast('✅ Sesi tuntas! Alhamdulillah!', 'success');
    resetForm();
    loadTracker();
    loadStats();
  }
}

function determineLayerStuck(data) {
  const vals = [
    { name: 'ROOT', val: parseInt(data.rootIntensityAfter) || 99 },
    { name: 'L3', val: parseInt(data.l3IntensityAfter) || 99 },
    { name: 'L2', val: parseInt(data.l2IntensityAfter) || 99 },
    { name: 'L1', val: parseInt(data.l1IntensityAfter) || 99 }
  ];
  
  for (let v of vals) {
    if (v.val > 2) return `${v.name} (${v.val})`;
  }
  return 'DONE';
}

// ==========================================================================
// LOAD & RENDER DATA
// ==========================================================================
async function loadDrafts() {
  const result = await apiCall('getDrafts');
  
  if (result && result.success) {
    drafts = result.drafts || [];
    renderDrafts();
    updateDraftBadge();
  }
}

function renderDrafts() {
  const container = document.getElementById('draftList');
  
  if (!drafts.length) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-light)">Tidak ada draft tersimpan.</p>';
    return;
  }
  
  container.innerHTML = drafts.map(d => `
    <div class="draft-item">
      <h4>${d.issue || 'Untitled'}</h4>
      <p><b>Stuck:</b> ${d.layerStuck || '-'} | <b>Root:</b> ${d.rootWanting || '-'}</p>
      <p>Edit: ${d.terakhirEdit ? new Date(d.terakhirEdit).toLocaleString('id-ID') : '-'}</p>
      <div class="draft-actions">
        <button class="btn btn-primary" onclick="continueDraft('${d.sesiId}')">📂 Lanjutkan</button>
        <button class="btn btn-danger" onclick="deleteDraft('${d.sesiId}')">🗑️</button>
      </div>
    </div>
  `).join('');
}

function updateDraftBadge() {
  const badge = document.getElementById('draftBadge');
  if (drafts.length > 0) {
    badge.textContent = drafts.length;
    badge.style.display = 'inline';
  } else {
    badge.style.display = 'none';
  }
}

async function continueDraft(sesiId) {
  const draft = drafts.find(d => d.sesiId === sesiId);
  if (draft && draft.fullData) {
    loadFormData(draft.fullData);
    switchTab('worksheet');
    showToast('Draft dimuat!', 'success');
  }
}

async function deleteDraft(sesiId) {
  if (!confirm('Hapus draft ini?')) return;
  
  const result = await apiCall('deleteDraft', null, `&sesiId=${sesiId}`);
  
  if (result && result.success) {
    showToast('Draft dihapus', 'success');
    loadDrafts();
  }
}

async function loadTracker() {
  const result = await apiCall('getTracker');
  
  if (result && result.success) {
    sessions = result.sessions || [];
    renderTracker();
  }
}

function renderTracker() {
  const tbody = document.getElementById('trackerBody');
  
  if (!sessions.length) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-light)">Belum ada data</td></tr>';
    return;
  }
  
  tbody.innerHTML = sessions.map(s => `
    <tr>
      <td>${s.no}</td>
      <td>${s.timestamp ? new Date(s.timestamp).toLocaleDateString('id-ID') : '-'}</td>
      <td>${(s.issue || '').substring(0, 30)}${s.issue?.length > 30 ? '...' : ''}</td>
      <td>${s.rootWanting || '-'}</td>
      <td>${s.emotionLevel || '-'}</td>
      <td>${s.status || '-'}</td>
    </tr>
  `).join('');
}

async function loadStats() {
  const result = await apiCall('getStats');
  
  if (result && result.success) {
    stats = result.stats || {};
    renderStats();
    renderEmotionScale();
  }
}

function renderStats() {
  // Main stats
  document.getElementById('statTotal').textContent = stats.totalSesi || 0;
  document.getElementById('statSukses').textContent = stats.totalSukses || 0;
  document.getElementById('statRate').textContent = (stats.successRate || 0) + '%';
  document.getElementById('statPending').textContent = stats.pendingDrafts || 0;
  document.getElementById('primaryWanting').textContent = stats.primaryWanting || '-';

  // Intensity stats
  const statAvgIntAwal = document.getElementById('statAvgIntAwal');
  const statAvgIntAkhir = document.getElementById('statAvgIntAkhir');
  const statAvgReduction = document.getElementById('statAvgReduction');

  if (statAvgIntAwal) statAvgIntAwal.textContent = stats.avgIntAwal?.toFixed(1) || '0';
  if (statAvgIntAkhir) statAvgIntAkhir.textContent = stats.avgIntAkhir?.toFixed(1) || '0';
  if (statAvgReduction) {
    const reduction = stats.avgReduction || 0;
    statAvgReduction.textContent = reduction > 0 ? `-${reduction.toFixed(1)}` : '0';
  }

  // Emotion breakdown
  const ec = stats.emotionCount || {};
  const positive = (ec[9] || 0) + (ec[8] || 0) + (ec[7] || 0);
  const neutral = (ec[6] || 0) + (ec[5] || 0) + (ec[4] || 0);
  const negative = (ec[3] || 0) + (ec[2] || 0) + (ec[1] || 0);

  const statPositive = document.getElementById('statPositive');
  const statNeutral = document.getElementById('statNeutral');
  const statNegative = document.getElementById('statNegative');
  if (statPositive) statPositive.textContent = positive;
  if (statNeutral) statNeutral.textContent = neutral;
  if (statNegative) statNegative.textContent = negative;

  // Render sub-components
  renderEfficiency();
  renderResistensiStats();
  renderTripleWelcomingStats();
  renderWantingChart();
  renderRecentSessions();
}

function renderEfficiency() {
  const avgL1 = stats.avgL1Sesi || 0;
  const avgL2 = stats.avgL2Sesi || 0;
  const avgL3 = stats.avgL3Sesi || 0;
  const avgRoot = stats.avgRootSesi || 0;
  const maxBar = 10; // Max for layers, 20 for root

  // L1
  const effL1 = document.getElementById('effL1');
  const effL1Bar = document.getElementById('effL1Bar');
  if (effL1) effL1.textContent = avgL1.toFixed(1);
  if (effL1Bar) effL1Bar.style.width = `${Math.min((avgL1 / maxBar) * 100, 100)}%`;

  // L2
  const effL2 = document.getElementById('effL2');
  const effL2Bar = document.getElementById('effL2Bar');
  if (effL2) effL2.textContent = avgL2.toFixed(1);
  if (effL2Bar) effL2Bar.style.width = `${Math.min((avgL2 / maxBar) * 100, 100)}%`;

  // L3
  const effL3 = document.getElementById('effL3');
  const effL3Bar = document.getElementById('effL3Bar');
  if (effL3) effL3.textContent = avgL3.toFixed(1);
  if (effL3Bar) effL3Bar.style.width = `${Math.min((avgL3 / maxBar) * 100, 100)}%`;

  // Root (max 20)
  const effRoot = document.getElementById('effRoot');
  const effRootBar = document.getElementById('effRootBar');
  if (effRoot) effRoot.textContent = avgRoot.toFixed(1);
  if (effRootBar) effRootBar.style.width = `${Math.min((avgRoot / 20) * 100, 100)}%`;
}

function renderResistensiStats() {
  const totalRes = stats.totalResistensi || 0;
  const avgRes = stats.avgResistensiPerSesi || 0;

  const statTotalResistensi = document.getElementById('statTotalResistensi');
  const statAvgResistensi = document.getElementById('statAvgResistensi');
  if (statTotalResistensi) statTotalResistensi.textContent = totalRes;
  if (statAvgResistensi) statAvgResistensi.textContent = avgRes.toFixed(1);

  // Breakdown per layer
  const res = stats.resistensiByLayer || {};
  const resL1 = document.getElementById('resL1');
  const resL2 = document.getElementById('resL2');
  const resL3 = document.getElementById('resL3');
  const resRoot = document.getElementById('resRoot');
  if (resL1) resL1.textContent = res.l1 || 0;
  if (resL2) resL2.textContent = res.l2 || 0;
  if (resL3) resL3.textContent = res.l3 || 0;
  if (resRoot) resRoot.textContent = res.root || 0;
}

function renderTripleWelcomingStats() {
  const tripleCount = stats.tripleWelcomingCount || 0;
  const total = stats.totalSesi || 1;
  const percent = ((tripleCount / total) * 100).toFixed(0);

  const statTripleCount = document.getElementById('statTripleCount');
  const statTriplePercent = document.getElementById('statTriplePercent');
  if (statTripleCount) statTripleCount.textContent = tripleCount;
  if (statTriplePercent) statTriplePercent.textContent = `${percent}%`;
}

function renderWantingChart() {
  const container = document.getElementById('wantingChart');
  if (!container) return;

  const wantingData = stats.wantingDistribution || {};
  const wantings = ['Control', 'Approval', 'Security', 'Worth', 'Freedom', 'Separation', 'Oneness'];
  const total = Object.values(wantingData).reduce((a, b) => a + b, 0) || 1;

  container.innerHTML = wantings.map(w => {
    const count = wantingData[w] || 0;
    const pct = (count / total) * 100;
    return `
      <div class="wanting-row">
        <span>${w}</span>
        <div class="wanting-bar-wrap"><div class="wanting-bar" style="width:${pct}%"></div></div>
        <span class="wanting-count">${count}</span>
      </div>
    `;
  }).join('');

  // Update primary wanting description
  const primaryWantingDesc = document.getElementById('primaryWantingDesc');
  if (primaryWantingDesc && stats.primaryWanting) {
    const descriptions = {
      'Control': 'Kecenderungan untuk mengontrol situasi',
      'Approval': 'Kebutuhan untuk diakui dan diterima',
      'Security': 'Pencarian rasa aman dan stabil',
      'Worth': 'Kebutuhan merasa berharga',
      'Freedom': 'Keinginan untuk bebas',
      'Separation': 'Kebutuhan untuk berbeda',
      'Oneness': 'Keinginan untuk menyatu'
    };
    primaryWantingDesc.textContent = descriptions[stats.primaryWanting] || '';
  }
}

function renderRecentSessions() {
  const container = document.getElementById('recentSessions');
  if (!container) return;

  const recent = sessions.slice(0, 5);
  if (!recent.length) {
    container.innerHTML = '<p style="padding:1rem;text-align:center;color:var(--text-light)">Belum ada sesi</p>';
    return;
  }

  container.innerHTML = recent.map(s => `
    <div class="recent-item">
      <div>
        <div class="recent-issue">${s.issue || 'Untitled'}</div>
        <div class="recent-meta">${s.rootWanting || '-'} • ${s.timestamp ? new Date(s.timestamp).toLocaleDateString('id-ID') : '-'}</div>
      </div>
      <span class="recent-status ${s.status === 'SUKSES' ? '' : 'pending'}">${s.emotionLevel || '-'}</span>
    </div>
  `).join('');
}

function refreshDashboard() {
  showToast('🔄 Memuat data...', 'info');
  loadStats();
  loadTracker();
}

function renderEmotionScale() {
  const container = document.getElementById('emotionScale');
  const total = stats.totalSesi || 1;
  const ec = stats.emotionCount || {};
  
  const emotions = [
    { level: 9, name: 'PEACE', positive: true },
    { level: 8, name: 'ACCEPTANCE', positive: true },
    { level: 7, name: 'COURAGE', positive: true },
    { level: 0, name: '─── BATAS COURAGE ───', separator: true },
    { level: 6, name: 'PRIDE', positive: false },
    { level: 5, name: 'ANGER', positive: false },
    { level: 4, name: 'LUST', positive: false },
    { level: 3, name: 'FEAR', positive: false },
    { level: 2, name: 'GRIEF', positive: false },
    { level: 1, name: 'APATHY', positive: false }
  ];
  
  container.innerHTML = emotions.map(e => {
    if (e.separator) {
      return `<div class="emotion-row separator">${e.name}</div>`;
    }
    
    const count = ec[e.level] || 0;
    const pct = ((count / total) * 100).toFixed(0);
    const barWidth = Math.min((count / total) * 100, 100);
    
    return `
      <div class="emotion-row ${e.positive ? 'positive' : ''}">
        <div class="emotion-level">${e.level}</div>
        <div>
          <div style="font-weight:600;font-size:0.85rem">${e.name}</div>
          <div class="emotion-bar"><div class="emotion-bar-fill" style="width:${barWidth}%"></div></div>
        </div>
        <div class="emotion-count">${count}</div>
        <div class="emotion-pct">${pct}%</div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// RESISTANCE HANDLING
// ==========================================================================

// Track resistance state
const resistanceState = {
  l1: { Bisakah: false, Mau: false, Kapan: false },
  l2: { Bisakah: false, Mau: false, Kapan: false },
  l3: { Bisakah: false, Mau: false, Kapan: false },
  root: { Bisakah: false, Mau: false, Kapan: false }
};

// Handle emotion change - show Triple Welcoming for Pride
function handleEmosiChange(layer) {
  const emosiEl = document.getElementById(`${layer}Emosi`);
  const twPanel = document.getElementById(`${layer}TripleWelcoming`);

  if (!emosiEl || !twPanel) return;

  const isPride = emosiEl.value.toLowerCase().includes('pride');

  if (isPride) {
    twPanel.classList.add('show');
    showToast('Ego terdeteksi! Gunakan Triple Welcoming', 'warning');
  } else {
    twPanel.classList.remove('show');
  }
}

// Handle resistance - show panel when answer is Tidak/Mungkin
function handleResistance(layer, type) {
  const selectEl = document.getElementById(`${layer}${type}`);
  const panel = document.getElementById(`${layer}${type}Resist`);
  const badge = document.getElementById(`${layer}${type}Badge`);

  if (!selectEl || !panel) return;

  const val = selectEl.value;

  // Check if resistance is needed
  let needsResistance = false;
  if (type === 'Bisakah' || type === 'Mau') {
    needsResistance = (val === 'Tidak' || val === 'Mungkin');
  } else if (type === 'Kapan') {
    needsResistance = (val === 'Nanti' || val === 'Tidak Tahu');
  }

  if (needsResistance) {
    panel.classList.add('show');
    // Hide badge when resistance panel opens
    if (badge) badge.style.display = 'none';
    showToast('Resistensi terdeteksi! Release dulu...', 'warning');
  } else {
    panel.classList.remove('show');
    // If answered Ya/Sekarang after releasing resistance, show badge
    if (resistanceState[layer][type] && badge) {
      badge.style.display = 'inline';
    }
  }
}

// Check if resistance release is complete
function checkResistanceComplete(layer, type) {
  const r1 = document.getElementById(`${layer}${type}R1`)?.value;
  const r2 = document.getElementById(`${layer}${type}R2`)?.value;
  const r3 = document.getElementById(`${layer}${type}R3`)?.value;
  const intAfter = parseInt(document.getElementById(`${layer}${type}RInt`)?.value);
  const statusEl = document.getElementById(`${layer}${type}RStatus`);
  const retryBtn = document.getElementById(`${layer}${type}Retry`);

  // Update status
  if (statusEl && !isNaN(intAfter)) {
    statusEl.textContent = getIntensityStatus(intAfter);
  }

  // Enable retry button if all answered and int is low enough
  const allAnswered = r1 && r2 && r3;
  const intensityLow = !isNaN(intAfter) && intAfter <= 3;

  if (retryBtn) {
    retryBtn.disabled = !(allAnswered && intensityLow);
  }
}

// Retry main question after resistance release
function retryQuestion(layer, type) {
  const panel = document.getElementById(`${layer}${type}Resist`);
  const selectEl = document.getElementById(`${layer}${type}`);
  const badge = document.getElementById(`${layer}${type}Badge`);

  // Mark that this question had resistance released
  resistanceState[layer][type] = true;

  // Hide panel
  if (panel) panel.classList.remove('show');

  // Show badge
  if (badge) badge.style.display = 'inline';

  // Reset main question to empty
  if (selectEl) {
    selectEl.value = '';
    selectEl.focus();
  }

  showToast('Resistensi released! Coba jawab lagi...', 'success');

  // Scroll to question
  if (selectEl) {
    selectEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Get resistance data for a layer
function getResistanceData(layer) {
  const types = ['Bisakah', 'Mau', 'Kapan'];
  const data = {};

  types.forEach(type => {
    const r1 = document.getElementById(`${layer}${type}R1`)?.value;
    const r2 = document.getElementById(`${layer}${type}R2`)?.value;
    const r3 = document.getElementById(`${layer}${type}R3`)?.value;
    const intAfter = document.getElementById(`${layer}${type}RInt`)?.value;

    if (r1 || r2 || r3 || intAfter) {
      data[type] = {
        r1: r1 || '',
        r2: r2 || '',
        r3: r3 || '',
        intAfter: intAfter || '',
        released: resistanceState[layer][type]
      };
    }
  });

  return Object.keys(data).length > 0 ? data : null;
}

// Get Triple Welcoming data for a layer
function getTripleWelcomingData(layer) {
  const tw1 = document.getElementById(`${layer}TW1`)?.value;
  const tw2 = document.getElementById(`${layer}TW2`)?.value;
  const tw3 = document.getElementById(`${layer}TW3`)?.value;
  const twInt = document.getElementById(`${layer}TWInt`)?.value;

  if (tw1 || tw2 || tw3 || twInt) {
    return {
      tw1: tw1 || '',
      tw2: tw2 || '',
      tw3: tw3 || '',
      intAfter: twInt || ''
    };
  }
  return null;
}

// Reset resistance panels for a layer
function resetResistancePanels(layer) {
  const types = ['Bisakah', 'Mau', 'Kapan'];

  types.forEach(type => {
    // Reset dropdowns
    const r1 = document.getElementById(`${layer}${type}R1`);
    const r2 = document.getElementById(`${layer}${type}R2`);
    const r3 = document.getElementById(`${layer}${type}R3`);
    const rInt = document.getElementById(`${layer}${type}RInt`);
    const status = document.getElementById(`${layer}${type}RStatus`);
    const panel = document.getElementById(`${layer}${type}Resist`);
    const badge = document.getElementById(`${layer}${type}Badge`);
    const retry = document.getElementById(`${layer}${type}Retry`);

    if (r1) r1.value = '';
    if (r2) r2.value = '';
    if (r3) r3.value = '';
    if (rInt) rInt.value = '';
    if (status) status.textContent = '';
    if (panel) panel.classList.remove('show');
    if (badge) badge.style.display = 'none';
    if (retry) retry.disabled = true;

    // Reset state
    resistanceState[layer][type] = false;
  });

  // Reset Triple Welcoming
  const tw1 = document.getElementById(`${layer}TW1`);
  const tw2 = document.getElementById(`${layer}TW2`);
  const tw3 = document.getElementById(`${layer}TW3`);
  const twInt = document.getElementById(`${layer}TWInt`);
  const twPanel = document.getElementById(`${layer}TripleWelcoming`);

  if (tw1) tw1.value = '';
  if (tw2) tw2.value = '';
  if (tw3) tw3.value = '';
  if (twInt) twInt.value = '';
  if (twPanel) twPanel.classList.remove('show');
}

// ==========================================================================
// GROUNDING & WELCOMING
// ==========================================================================

// Session settings getters
function isShowGrounding() {
  const quickMode = localStorage.getItem('cleanupQuickMode') === 'true';
  if (quickMode) return false;
  return localStorage.getItem('cleanupShowGrounding') !== 'false';
}

function isShowWelcoming() {
  const quickMode = localStorage.getItem('cleanupQuickMode') === 'true';
  if (quickMode) return false;
  return localStorage.getItem('cleanupShowWelcoming') !== 'false';
}

// Track if session has started (grounding completed)
let sessionStarted = false;
let welcomingCompleted = {
  surface: false,
  l1: false,
  l2: false,
  l3: false,
  root: false
};

// Show grounding panel
function showGrounding() {
  if (!isShowGrounding()) {
    sessionStarted = true;
    checkShowSurfaceWelcoming();
    return;
  }

  const overlay = document.getElementById('groundingOverlay');
  if (overlay) {
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

// Skip grounding
function skipGrounding() {
  completeGrounding();
}

// Complete grounding
function completeGrounding() {
  const overlay = document.getElementById('groundingOverlay');
  if (overlay) {
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  sessionStarted = true;
  checkShowSurfaceWelcoming();
}

// Check if surface welcoming should show
function checkShowSurfaceWelcoming() {
  if (!sessionStarted) return;
  if (welcomingCompleted.surface) return;

  if (isShowWelcoming()) {
    showWelcoming('surface');
  }
}

// Show welcoming for a layer
function showWelcoming(layer) {
  if (!isShowWelcoming()) {
    welcomingCompleted[layer] = true;
    return;
  }

  const panel = document.getElementById(`${layer}Welcoming`);
  if (panel) {
    panel.classList.add('show');

    // Update the issue in the question for surface
    if (layer === 'surface') {
      const issue = document.getElementById('issue')?.value || '[Issue]';
      const questionEl = document.getElementById('surfaceWelcomeQ');
      if (questionEl) {
        questionEl.textContent = `"Apa yang sedang saya rasakan tentang ${issue}?"`;
      }
    }

    // Scroll to panel
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Skip welcoming
function skipWelcoming(layer) {
  completeWelcoming(layer);
}

// Complete welcoming
function completeWelcoming(layer) {
  const panel = document.getElementById(`${layer}Welcoming`);
  if (panel) {
    panel.classList.remove('show');
  }
  welcomingCompleted[layer] = true;
}

// Trigger grounding when issue is filled (first significant input)
function setupGroundingTrigger() {
  const issueField = document.getElementById('issue');
  const kategoriField = document.getElementById('kategori');

  let triggered = false;

  const checkTrigger = () => {
    if (triggered) return;
    if (issueField?.value && kategoriField?.value) {
      triggered = true;
      setTimeout(() => {
        if (!sessionStarted) {
          showGrounding();
        }
      }, 300);
    }
  };

  if (issueField) issueField.addEventListener('change', checkTrigger);
  if (kategoriField) kategoriField.addEventListener('change', checkTrigger);
}

// Setup welcoming triggers for each layer
function setupWelcomingTriggers() {
  // L1 welcoming triggered when surface is filled
  const surfaceIntensity = document.getElementById('surfaceIntensity');
  if (surfaceIntensity) {
    surfaceIntensity.addEventListener('change', () => {
      if (!welcomingCompleted.l1 && surfaceIntensity.value) {
        setTimeout(() => showWelcoming('l1'), 500);
      }
    });
  }

  // L2 welcoming triggered when L1 is complete
  // L3 welcoming triggered when L2 is complete
  // ROOT welcoming triggered when L3 is complete
  // These are triggered by the layer complete logic
}

// Override scrollToNextLayer to show welcoming
const originalScrollToNextLayer = scrollToNextLayer;
scrollToNextLayer = function(prefix) {
  const currentIndex = LAYER_ORDER.indexOf(prefix);
  if (currentIndex < LAYER_ORDER.length - 1) {
    const nextPrefix = LAYER_ORDER[currentIndex + 1];

    // Show welcoming for next layer first
    if (!welcomingCompleted[nextPrefix] && isShowWelcoming()) {
      showWelcoming(nextPrefix);
    }
  }

  // Call original function
  originalScrollToNextLayer(prefix);
};

// Save session settings
function saveSessionSettings() {
  const showGroundingEl = document.getElementById('settingsShowGrounding');
  const showWelcomingEl = document.getElementById('settingsShowWelcoming');
  const quickModeEl = document.getElementById('settingsQuickMode');

  if (showGroundingEl) {
    localStorage.setItem('cleanupShowGrounding', showGroundingEl.checked ? 'true' : 'false');
  }

  if (showWelcomingEl) {
    localStorage.setItem('cleanupShowWelcoming', showWelcomingEl.checked ? 'true' : 'false');
  }

  if (quickModeEl) {
    localStorage.setItem('cleanupQuickMode', quickModeEl.checked ? 'true' : 'false');

    // If quick mode enabled, uncheck and disable others
    if (quickModeEl.checked) {
      if (showGroundingEl) showGroundingEl.checked = false;
      if (showWelcomingEl) showWelcomingEl.checked = false;
    }
  }

  showToast('Pengaturan sesi tersimpan!', 'success');
}

// Load session settings
function loadSessionSettings() {
  const showGroundingEl = document.getElementById('settingsShowGrounding');
  const showWelcomingEl = document.getElementById('settingsShowWelcoming');
  const quickModeEl = document.getElementById('settingsQuickMode');

  if (showGroundingEl) {
    showGroundingEl.checked = localStorage.getItem('cleanupShowGrounding') !== 'false';
  }

  if (showWelcomingEl) {
    showWelcomingEl.checked = localStorage.getItem('cleanupShowWelcoming') !== 'false';
  }

  if (quickModeEl) {
    quickModeEl.checked = localStorage.getItem('cleanupQuickMode') === 'true';
  }
}

// ==========================================================================
// SETTINGS FUNCTIONS
// ==========================================================================

// Show/hide API warning banner
function showApiWarning(show) {
  const banner = document.getElementById('apiWarning');
  if (banner) {
    banner.style.display = show ? 'block' : 'none';
  }
}

// Load settings into Settings panel
function loadSettings() {
  // Load API URL
  const apiUrlInput = document.getElementById('settingsApiUrl');
  if (apiUrlInput) {
    apiUrlInput.value = localStorage.getItem('cleanupApiUrl') || FALLBACK_API_URL;
  }

  // Load Default Name
  const defaultNameInput = document.getElementById('settingsDefaultName');
  if (defaultNameInput) {
    defaultNameInput.value = localStorage.getItem('cleanupDefaultName') || FALLBACK_DEFAULT_NAME;
  }

  // Load Debug Mode
  const debugModeInput = document.getElementById('settingsDebugMode');
  if (debugModeInput) {
    debugModeInput.checked = localStorage.getItem('cleanupDebugMode') === 'true';
  }

  // Update storage info
  updateStorageInfo();

  // Check if API is configured
  const apiUrl = getApiUrl();
  if (!apiUrl || apiUrl === 'YOUR_WEBAPP_URL_HERE') {
    showApiWarning(true);
  }
}

// Save API URL
function saveApiUrl() {
  const apiUrlInput = document.getElementById('settingsApiUrl');
  if (!apiUrlInput) return;

  const url = apiUrlInput.value.trim();

  if (!url) {
    showToast('URL tidak boleh kosong!', 'error');
    return;
  }

  if (!url.startsWith('https://script.google.com/')) {
    showToast('URL harus berupa Google Apps Script URL', 'warning');
  }

  localStorage.setItem('cleanupApiUrl', url);
  showToast('API URL tersimpan!', 'success');
  showApiWarning(false);

  // Reload data with new URL
  loadDrafts();
  loadTracker();
  loadStats();
}

// Test connection to API
async function testConnection() {
  const statusEl = document.getElementById('connectionStatus');
  if (!statusEl) return;

  statusEl.innerHTML = '<span style="color:var(--text-light)">🔄 Testing...</span>';

  const apiUrl = getApiUrl();

  if (!apiUrl || apiUrl === 'YOUR_WEBAPP_URL_HERE') {
    statusEl.innerHTML = '<span style="color:var(--danger)">❌ API URL belum dikonfigurasi</span>';
    return;
  }

  try {
    const startTime = Date.now();
    const response = await fetch(`${apiUrl}?action=getStats`);
    const result = await response.json();
    const latency = Date.now() - startTime;

    if (result && result.success) {
      statusEl.innerHTML = `<span style="color:var(--success)">✅ Terkoneksi! (${latency}ms)</span>`;
      showToast('Koneksi berhasil!', 'success');
    } else {
      statusEl.innerHTML = `<span style="color:var(--warning)">⚠️ Response tidak valid</span>`;
      showToast('Response tidak valid', 'warning');
    }
  } catch (error) {
    console.error('Connection test failed:', error);
    statusEl.innerHTML = `<span style="color:var(--danger)">❌ Gagal koneksi: ${error.message}</span>`;
    showToast('Gagal koneksi ke server', 'error');
  }
}

// Save user settings (default name, debug mode)
function saveUserSettings() {
  const defaultNameInput = document.getElementById('settingsDefaultName');
  const debugModeInput = document.getElementById('settingsDebugMode');

  if (defaultNameInput && defaultNameInput.value.trim()) {
    localStorage.setItem('cleanupDefaultName', defaultNameInput.value.trim());
  }

  if (debugModeInput) {
    localStorage.setItem('cleanupDebugMode', debugModeInput.checked ? 'true' : 'false');
  }

  showToast('Settings tersimpan!', 'success');
  updateStorageInfo();
}

// Clear local storage (except API URL)
function clearLocalStorage() {
  if (!confirm('Hapus semua data lokal (kecuali API URL)?\n\nData yang akan dihapus:\n- Nama tersimpan\n- Debug mode\n\nAPI URL akan tetap tersimpan.')) {
    return;
  }

  const apiUrl = localStorage.getItem('cleanupApiUrl');
  const defaultName = localStorage.getItem('cleanupDefaultName');

  // Clear user-specific data
  localStorage.removeItem('cleanupUserName');
  localStorage.removeItem('cleanupDebugMode');

  showToast('Local storage dibersihkan', 'success');
  updateStorageInfo();

  // Reload settings
  loadSettings();
}

// Reset all settings to default
function resetAllSettings() {
  if (!confirm('Reset SEMUA settings ke default?\n\nIni akan menghapus:\n- API URL (akan kembali ke default)\n- Default Name\n- Debug Mode\n- Nama tersimpan')) {
    return;
  }

  // Clear all cleanup-related items
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('cleanup')) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach(key => localStorage.removeItem(key));

  showToast('Semua settings direset!', 'success');
  updateStorageInfo();

  // Reload settings and page data
  loadSettings();
  loadSavedName();
  showApiWarning(false);

  // Reload data
  loadDrafts();
  loadTracker();
  loadStats();
}

// Update storage info display
function updateStorageInfo() {
  const storageInfoEl = document.getElementById('storageInfo');
  if (!storageInfoEl) return;

  let itemCount = 0;
  let totalSize = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('cleanup')) {
      itemCount++;
      totalSize += (localStorage.getItem(key) || '').length;
    }
  }

  const sizeKB = (totalSize / 1024).toFixed(2);
  storageInfoEl.textContent = `${itemCount} items (${sizeKB} KB)`;
}

// ==========================================================================
// END OF APP.JS
// ==========================================================================
