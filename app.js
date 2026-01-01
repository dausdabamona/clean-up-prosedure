// ==========================================================================
// CLEAN UP TRACKER - WEB APP (JavaScript)
// ==========================================================================

// ==========================================================================
// CONFIGURATION - GANTI URL INI DENGAN URL WEB APP KAMU!
// ==========================================================================
const API_URL = 'YOUR_WEBAPP_URL_HERE';
// Setelah deploy Apps Script, ganti dengan URL seperti:
// const API_URL = 'https://script.google.com/macros/s/AKfycbzmfaTBqIO51RH5Yk7Az3b_Dviprw_5z0u-oPI-EaUpbRJjLvrR-I9hJ1EhrgPJQ6eTNg/exec';

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

  if (API_URL !== 'YOUR_WEBAPP_URL_HERE') {
    loadDrafts();
    loadTracker();
    loadStats();
  } else {
    console.log('API belum dikonfigurasi. Set API_URL di app.js');
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
  const savedName = localStorage.getItem('cleanupUserName');
  if (savedName) document.getElementById('nama').value = savedName;
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

// ==========================================================================
// RELEASE TRACKER
// ==========================================================================
function initReleaseTrackers() {
  createReleaseTracker('l1ReleaseTracker', 'l1', 10);
  createReleaseTracker('l2ReleaseTracker', 'l2', 10);
  createReleaseTracker('l3ReleaseTracker', 'l3', 10);
  createReleaseTracker('rootReleaseTracker', 'root', 20);
}

function createReleaseTracker(containerId, prefix, count) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = '';
  for (let i = 1; i <= count; i++) {
    html += `
      <div class="release-item" id="${prefix}R${i}">
        <span class="r-num">${i}</span>
        <input type="number" id="${prefix}Int${i}" min="0" max="10" placeholder="-"
               onchange="updateReleaseDelta('${prefix}', ${i}, ${count})"
               onfocus="setActiveRelease('${prefix}', ${i})">
        <span class="r-delta" id="${prefix}Delta${i}"></span>
      </div>
    `;
  }
  container.innerHTML = html;
}

function setActiveRelease(prefix, num) {
  // Remove active class from all items in this tracker
  const container = document.getElementById(`${prefix}ReleaseTracker`);
  if (container) {
    container.querySelectorAll('.release-item').forEach(item => item.classList.remove('active'));
    const current = document.getElementById(`${prefix}R${num}`);
    if (current) current.classList.add('active');
  }
}

function updateReleaseDelta(prefix, num, count) {
  const currentInput = document.getElementById(`${prefix}Int${num}`);
  const currentVal = parseInt(currentInput.value);
  const item = document.getElementById(`${prefix}R${num}`);
  const deltaSpan = document.getElementById(`${prefix}Delta${num}`);

  // Mark as filled if has value
  if (!isNaN(currentVal) && currentVal >= 0) {
    item.classList.add('filled');
    // Mark as done if intensity is 0 or 1
    if (currentVal <= 1) {
      item.classList.add('done');
    } else {
      item.classList.remove('done');
    }
  } else {
    item.classList.remove('filled', 'done');
  }

  // Calculate delta from previous
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

  // Update next item's delta if exists
  if (num < count) {
    updateReleaseDelta(prefix, num + 1, count);
  }
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
    if (input && data[i - 1] !== undefined) {
      input.value = data[i - 1];
      updateReleaseDelta(prefix, i, count);
    }
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
    if (item) item.classList.remove('filled', 'done', 'active');
    if (delta) { delta.textContent = ''; delta.className = 'r-delta'; }
  }
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

    l2Pertanyaan: document.getElementById('l2Pertanyaan').value,
    l2Jawaban: document.getElementById('l2Jawaban').value,
    l2Emosi: document.getElementById('l2Emosi').value,
    l2IntensityAwal: document.getElementById('l2IntensityAwal').value,
    l2Bisakah: document.getElementById('l2Bisakah').value,
    l2Mau: document.getElementById('l2Mau').value,
    l2Kapan: document.getElementById('l2Kapan').value,
    l2ReleaseData: getReleaseTrackerData('l2', 10),
    l2IntensityAfter: getLastIntensity('l2', 10),

    l3Pertanyaan: document.getElementById('l3Pertanyaan').value,
    l3Jawaban: document.getElementById('l3Jawaban').value,
    l3Emosi: document.getElementById('l3Emosi').value,
    l3IntensityAwal: document.getElementById('l3IntensityAwal').value,
    l3Bisakah: document.getElementById('l3Bisakah').value,
    l3Mau: document.getElementById('l3Mau').value,
    l3Kapan: document.getElementById('l3Kapan').value,
    l3ReleaseData: getReleaseTrackerData('l3', 10),
    l3IntensityAfter: getLastIntensity('l3', 10),

    rootPertanyaan: document.getElementById('rootPertanyaan').value,
    rootWanting: document.getElementById('rootWanting').value,
    rootIntensityAwal: document.getElementById('rootIntensityAwal').value,
    rootDeskripsi: document.getElementById('rootDeskripsi').value,
    rootBisakah: document.getElementById('rootBisakah').value,
    rootMau: document.getElementById('rootMau').value,
    rootKapan: document.getElementById('rootKapan').value,
    rootReleaseData: getReleaseTrackerData('root', 20),
    rootIntensityAfter: getLastIntensity('root', 20),
    
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

  generateSesiId();
  showToast('Form di-reset', 'success');
}

// ==========================================================================
// API CALLS
// ==========================================================================
async function apiCall(action, data = null, extraParams = '') {
  if (API_URL === 'YOUR_WEBAPP_URL_HERE') {
    showToast('API belum dikonfigurasi! Edit API_URL di app.js', 'error');
    return null;
  }
  
  let url = `${API_URL}?action=${action}`;
  if (data) url += `&data=${encodeURIComponent(JSON.stringify(data))}`;
  if (extraParams) url += extraParams;
  
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
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
  document.getElementById('statTotal').textContent = stats.totalSesi || 0;
  document.getElementById('statSukses').textContent = stats.totalSukses || 0;
  document.getElementById('statRate').textContent = (stats.successRate || 0) + '%';
  document.getElementById('statPending').textContent = stats.pendingDrafts || 0;
  document.getElementById('primaryWanting').textContent = stats.primaryWanting || '-';
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
// END OF APP.JS
// ==========================================================================
