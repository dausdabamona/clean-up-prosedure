// ==========================================================================
// MANIFESTING WORKBOOK - JAVASCRIPT
// ==========================================================================

// Default API URL
const DEFAULT_API_URL = 'https://script.google.com/macros/s/AKfycbxyql2BYExoYNXm-TwYibkw7jDXozNbWqeeoOmw-TNuX8gqMyW7P4Q4qD2iBFpM8odDZQ/exec';

// ===== TAB NAVIGATION =====
function switchTab(tabId) {
  // Deactivate all tabs
  document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  // Activate selected tab
  const tabBtn = document.querySelector(`[data-tab="${tabId}"]`);
  const tabContent = document.getElementById(tabId);

  if (tabBtn) tabBtn.classList.add('active');
  if (tabContent) tabContent.classList.add('active');

  // Load data for specific tabs
  if (tabId === 'beranda') loadDashboard();
  if (tabId === 'goal') loadGoals();
  if (tabId === 'release') populateGoalSelects();
  if (tabId === 'action') populateGoalSelects();
  if (tabId === 'journal') loadJournal();
}

// ===== WANTING TAGS =====
function initWantingTags() {
  document.querySelectorAll('.wanting-tags').forEach(container => {
    container.querySelectorAll('.wanting-tag').forEach(tag => {
      tag.addEventListener('click', function() {
        this.classList.toggle('selected');
      });
    });
  });
}

function getSelectedWantings(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return [];
  const selected = [];
  container.querySelectorAll('.wanting-tag.selected').forEach(tag => {
    selected.push(tag.dataset.wanting);
  });
  return selected;
}

function clearWantingTags(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.wanting-tag').forEach(tag => {
    tag.classList.remove('selected');
  });
}

// ===== COLLAPSIBLE =====
function toggleCollapse(button) {
  const content = button.nextElementSibling;
  content.classList.toggle('show');
  button.textContent = button.textContent.includes('\u25BC')
    ? button.textContent.replace('\u25BC', '\u25B2')
    : button.textContent.replace('\u25B2', '\u25BC');
}

// ===== SLIDER VALUE DISPLAY =====
function initSliders() {
  document.querySelectorAll('.slider').forEach(slider => {
    const displayId = slider.id + 'Value';
    const display = document.getElementById(displayId);
    if (display) {
      slider.addEventListener('input', function() {
        display.textContent = this.value;
      });
    }
  });
}

// ===== API CALLS =====
async function callManifestingApi(action, data = null, params = {}) {
  const apiUrl = localStorage.getItem('apiUrl') || DEFAULT_API_URL;

  // Auto-save default API URL to localStorage if not set
  if (!localStorage.getItem('apiUrl')) {
    localStorage.setItem('apiUrl', DEFAULT_API_URL);
  }

  try {
    let url = `${apiUrl}?action=${action}`;

    // Add additional params
    Object.keys(params).forEach(key => {
      if (params[key]) {
        url += `&${key}=${encodeURIComponent(params[key])}`;
      }
    });

    if (data) {
      url += `&data=${encodeURIComponent(JSON.stringify(data))}`;
    }

    const response = await fetch(url);
    const result = await response.json();

    if (!result.success) {
      console.error('API Error:', result.message);
    }

    return result;
  } catch (error) {
    console.error('Fetch Error:', error);
    showToast('Gagal terhubung ke server', 'error');
    return null;
  }
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== DASHBOARD =====
async function loadDashboard() {
  const stats = await callManifestingApi('getManifestingStats');
  if (stats && stats.success) {
    document.getElementById('statTotalReleases').textContent = stats.stats.totalReleases || 0;
    document.getElementById('statActiveGoals').textContent = stats.stats.totalGoals || 0;
    document.getElementById('statStreakDays').textContent = stats.stats.streakDays || 0;

    // Update progress bar
    const currentDay = stats.stats.currentDay || 0;
    const progress = Math.min((currentDay / 30) * 100, 100);
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Hari ${currentDay} dari 30`;
  }
}

// ===== DISCOVER =====
let discoverReleased = false;

function startDiscoverRelease() {
  ReleasingEngine.startReleasing('discover-release', {
    onComplete: function(data) {
      markDiscoverReleased();
    }
  });
}

function markDiscoverReleased() {
  discoverReleased = true;
  const statusEl = document.getElementById('discoverReleaseStatus');
  if (statusEl) {
    statusEl.style.display = 'block';
  }
  showToast('🌊 Release selesai!', 'success');
}

async function saveDiscoverEntry() {
  const data = {
    desire: document.getElementById('discoverDesire').value,
    wantings: getSelectedWantings('discoverWantingTags'),
    identificationScale: document.getElementById('discoverIdentification').value,
    awarenessInsight: document.getElementById('discoverAwareness').value,
    released: discoverReleased
  };

  if (!data.desire) {
    showToast('Tuliskan keinginan terlebih dahulu', 'warning');
    return;
  }

  const result = await callManifestingApi('saveManifestingDiscover', data);
  if (result && result.success) {
    showToast('Discover entry tersimpan!', 'success');
    // Show next button
    showNextButton();
  }
}

function showNextButton() {
  const nextBtn = document.getElementById('nextBtnContainer');
  if (nextBtn) {
    nextBtn.classList.add('show');
  }
}

function hideNextButton() {
  const nextBtn = document.getElementById('nextBtnContainer');
  if (nextBtn) {
    nextBtn.classList.remove('show');
  }
}

function goToNextPerson() {
  resetDiscoverForm();
  hideNextButton();
  // Scroll to top of the discover tab
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Siap untuk orang/situasi berikutnya!', 'info');
}

function resetDiscoverForm() {
  document.getElementById('discoverDesire').value = '';
  document.getElementById('discoverAwareness').value = '';
  document.getElementById('discoverIdentification').value = 5;
  document.getElementById('discoverIdentificationValue').textContent = '5';
  clearWantingTags('discoverWantingTags');
  discoverReleased = false;
  const statusEl = document.getElementById('discoverReleaseStatus');
  if (statusEl) {
    statusEl.style.display = 'none';
  }
}

// ===== GOALS =====
async function saveGoal() {
  const formatRadio = document.querySelector('input[name="goalFormat"]:checked');
  const format = formatRadio ? formatRadio.value : 'bebas';

  const data = {
    category: document.getElementById('goalCategory').value,
    format: format,
    goalText: document.getElementById('goalText').value,
    status: 'active'
  };

  if (!data.goalText) {
    showToast('Tuliskan goal statement', 'warning');
    return;
  }

  const result = await callManifestingApi('saveManifestingGoal', data);
  if (result && result.success) {
    showToast('Goal tersimpan!', 'success');
    document.getElementById('goalText').value = '';
    document.getElementById('goalCategory').value = '';
    loadGoals();
  }
}

async function loadGoals() {
  const result = await callManifestingApi('getManifestingGoals', null, { status: 'active' });
  const container = document.getElementById('activeGoalsList');

  if (!result || !result.success || !result.goals || result.goals.length === 0) {
    container.innerHTML = '<p class="empty-state">Belum ada goal. Tambahkan goal pertamamu!</p>';
    return;
  }

  container.innerHTML = result.goals.map(goal => `
    <div class="goal-item" data-id="${goal.id}">
      <span class="goal-category">${getCategoryIcon(goal.category)}</span>
      <span class="goal-text">${escapeHtml(goal.goalText)}</span>
      <div class="goal-actions">
        <button onclick="deleteGoal('${goal.id}')" class="btn-icon" title="Hapus">🗑️</button>
      </div>
    </div>
  `).join('');
}

function getCategoryIcon(category) {
  const icons = {
    karier: '💼',
    relasi: '💕',
    kesehatan: '💚',
    spiritual: '🙏',
    lainnya: '📌'
  };
  return icons[category] || '📌';
}

async function deleteGoal(id) {
  if (!confirm('Hapus goal ini?')) return;

  const result = await callManifestingApi('deleteManifestingGoal', { id: id });
  if (result && result.success) {
    showToast('Goal dihapus', 'success');
    loadGoals();
  }
}

function useGoalExample(element) {
  document.getElementById('goalText').value = element.textContent.trim();
}

function checkGoalQuality() {
  const goalText = document.getElementById('goalText').value;
  const feedback = document.getElementById('goalFeedback');
  const issues = [];

  if (!goalText) {
    feedback.innerHTML = '⚠️ Tuliskan goal statement terlebih dahulu';
    feedback.className = 'feedback-box warning';
    feedback.style.display = 'block';
    return;
  }

  // Check for negative words
  const negativeWords = ['tidak', 'bukan', 'jangan', 'tanpa', 'belum'];
  negativeWords.forEach(word => {
    if (goalText.toLowerCase().includes(word)) {
      issues.push(`⚠️ Hindari kata negatif: "${word}"`);
    }
  });

  // Check for wanting words
  const wantingWords = ['ingin', 'mau', 'pengin', 'akan', 'hendak', 'nanti'];
  wantingWords.forEach(word => {
    if (goalText.toLowerCase().includes(word)) {
      issues.push(`⚠️ Hilangkan kata: "${word}" - tulis seolah sudah tercapai`);
    }
  });

  // Check length
  if (goalText.length < 20) {
    issues.push('⚠️ Goal terlalu pendek - tambahkan detail');
  }

  if (issues.length === 0) {
    feedback.innerHTML = '✅ Goal statement sudah bagus!';
    feedback.className = 'feedback-box success';
  } else {
    feedback.innerHTML = issues.join('<br>');
    feedback.className = 'feedback-box warning';
  }

  feedback.style.display = 'block';
}

// ===== RELEASE SESSION =====
let currentReleaseStep = 1;
let goalReleased = false;

function startGoalRelease() {
  ReleasingEngine.startReleasing('goal-release', {
    onComplete: function(data) {
      goalReleased = true;
      // Show status
      const statusEl = document.getElementById('goalReleaseStatus');
      if (statusEl) {
        statusEl.style.display = 'block';
      }
      // Enable next button
      const nextBtn = document.getElementById('btnToStep5');
      if (nextBtn) {
        nextBtn.disabled = false;
      }
      showToast('🌟 Release selesai!', 'success');
    }
  });
}

function goToReleaseStep(step) {
  // Hide all steps
  document.querySelectorAll('.guided-step').forEach(s => s.classList.remove('active'));

  // Show target step
  const targetStep = document.getElementById(`releaseStep${step}`);
  if (targetStep) targetStep.classList.add('active');

  // Update indicators
  document.querySelectorAll('.step-indicator .step').forEach((s, i) => {
    s.classList.remove('active', 'completed');
    if (i + 1 < step) s.classList.add('completed');
    if (i + 1 === step) s.classList.add('active');
  });

  currentReleaseStep = step;
}

async function saveReleaseSession() {
  const goalSelect = document.getElementById('releaseGoalSelect');
  const goalCustom = document.getElementById('releaseGoalCustom');

  const selectedOption = goalSelect.options[goalSelect.selectedIndex];

  const data = {
    goalId: goalSelect.value || '',
    goalText: goalCustom.value || (selectedOption ? selectedOption.text : ''),
    thoughts: document.getElementById('releaseThoughts').value,
    wantings: getSelectedWantings('releaseWantingTags'),
    identificationScale: document.getElementById('releaseIdentification').value,
    awarenessInsight: document.getElementById('releaseAwareness').value,
    emotionBefore: document.getElementById('emotionBefore').value,
    emotionAfter: document.getElementById('emotionAfter').value,
    duration: timerElapsed
  };

  if (!data.goalText && !data.thoughts) {
    showToast('Isi goal atau pikiran terlebih dahulu', 'warning');
    return;
  }

  const result = await callManifestingApi('saveManifestingRelease', data);
  if (result && result.success) {
    showToast('Release session tersimpan!', 'success');
    resetReleaseForm();
  }
}

function resetReleaseForm() {
  document.getElementById('releaseGoalSelect').value = '';
  document.getElementById('releaseGoalCustom').value = '';
  document.getElementById('releaseThoughts').value = '';
  document.getElementById('releaseAwareness').value = '';
  document.getElementById('emotionBefore').value = '';
  document.getElementById('emotionAfter').value = '';
  document.getElementById('releaseIdentification').value = 5;
  document.getElementById('releaseIdentificationValue').textContent = '5';
  clearWantingTags('releaseWantingTags');
  goToReleaseStep(1);
  resetTimer();
}

// ===== TIMER =====
let timerInterval = null;
let timerSeconds = 15 * 60;
let timerElapsed = 0;

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const display = document.getElementById('timerDisplay');
  if (display) {
    display.textContent =
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      timerElapsed++;
      updateTimerDisplay();
    } else {
      pauseTimer();
      showToast('Waktu habis!', 'info');
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  const durationRadio = document.querySelector('input[name="timerDuration"]:checked');
  const duration = durationRadio ? parseInt(durationRadio.value) : 15;
  timerSeconds = duration * 60;
  timerElapsed = 0;
  updateTimerDisplay();
}

// ===== ACTION =====
function releaseActionWanting() {
  const wantings = getSelectedWantings('actionWantingTags');

  if (wantings.length === 0) {
    showToast('Pilih minimal satu wanting terlebih dahulu', 'warning');
    return;
  }

  // Start sequential releasing for selected wantings
  ReleasingEngine.startSequentialReleasing(wantings, {
    onRelease: function(data) {
      showToast('🌊 ' + (data.wantingType || 'Wanting') + ' released!', 'success');
    },
    onSequenceComplete: function(data) {
      showToast('🎉 Semua ' + data.totalReleased + ' wanting berhasil di-release!', 'success');
      clearWantingTags('actionWantingTags');
    }
  });
}

function releaseLimitingBeliefs() {
  const wantings = getSelectedWantings('limitingWantingTags');

  if (wantings.length === 0) {
    showToast('Pilih minimal satu wanting terlebih dahulu', 'warning');
    return;
  }

  // Start sequential releasing for selected wantings
  ReleasingEngine.startSequentialReleasing(wantings, {
    onRelease: function(data) {
      showToast('🌊 Limiting belief released!', 'success');
    },
    onSequenceComplete: function(data) {
      showToast('🎉 Semua limiting beliefs berhasil di-release!', 'success');
      clearWantingTags('limitingWantingTags');
    }
  });
}

function releaseEmpoweringBeliefs() {
  // For empowering beliefs, use the quick-basic script
  // since we want to release attachment to positive beliefs too
  ReleasingEngine.startReleasing('quick-basic', {
    onComplete: function(data) {
      showToast('🎉 Empowering beliefs released - no attachment!', 'success');
    }
  });
}

async function saveActionEntry() {
  const data = {
    goalId: document.getElementById('actionGoalSelect').value,
    actions: [
      document.getElementById('action1').value,
      document.getElementById('action2').value,
      document.getElementById('action3').value
    ].filter(a => a),
    actionWantings: getSelectedWantings('actionWantingTags'),
    limitingBeliefs: [
      document.getElementById('limiting1').value,
      document.getElementById('limiting2').value,
      document.getElementById('limiting3').value
    ].filter(b => b),
    limitingWantings: getSelectedWantings('limitingWantingTags'),
    empoweringBeliefs: [
      document.getElementById('empowering1').value,
      document.getElementById('empowering2').value,
      document.getElementById('empowering3').value
    ].filter(b => b),
    empoweringWantings: []
  };

  if (data.actions.length === 0 && data.limitingBeliefs.length === 0 && data.empoweringBeliefs.length === 0) {
    showToast('Isi minimal satu action atau belief', 'warning');
    return;
  }

  const result = await callManifestingApi('saveManifestingAction', data);
  if (result && result.success) {
    showToast('Action entry tersimpan!', 'success');
    resetActionForm();
  }
}

function resetActionForm() {
  ['action1', 'action2', 'action3', 'limiting1', 'limiting2', 'limiting3',
   'empowering1', 'empowering2', 'empowering3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  clearWantingTags('actionWantingTags');
  clearWantingTags('limitingWantingTags');
}

// ===== JOURNAL =====
async function loadJournal() {
  const type = document.getElementById('filterType').value;
  const goalId = document.getElementById('filterGoal').value;
  const date = document.getElementById('filterDate').value;

  const params = {};
  if (type && type !== 'all') params.type = type;
  if (goalId && goalId !== 'all') params.goalId = goalId;
  if (date) {
    params.fromDate = date;
    params.toDate = date;
  }

  const result = await callManifestingApi('getManifestingJournal', null, params);

  const container = document.getElementById('journalEntries');

  if (!result || !result.success || !result.entries || result.entries.length === 0) {
    container.innerHTML = '<p class="empty-state">Belum ada entri journal.</p>';
    updateJournalStats([]);
    return;
  }

  container.innerHTML = result.entries.map(entry => `
    <div class="journal-entry" data-type="${entry.type}">
      <div class="entry-header">
        <span class="entry-type">${getTypeIcon(entry.type)} ${entry.type}</span>
        <span class="entry-date">${formatDate(entry.timestamp)}</span>
      </div>
      <div class="entry-content">
        ${formatEntryContent(entry)}
      </div>
    </div>
  `).join('');

  updateJournalStats(result.entries);
}

function filterJournal() {
  loadJournal();
}

function updateJournalStats(entries) {
  let releaseCount = 0;
  let discoverCount = 0;
  const uniqueDays = new Set();

  entries.forEach(entry => {
    if (entry.type === 'release') releaseCount++;
    if (entry.type === 'discover') discoverCount++;
    if (entry.timestamp) {
      const day = entry.timestamp.split('T')[0];
      uniqueDays.add(day);
    }
  });

  document.getElementById('journalReleases').textContent = releaseCount;
  document.getElementById('journalActiveDays').textContent = uniqueDays.size;
  document.getElementById('journalInsights').textContent = discoverCount;
}

function getTypeIcon(type) {
  const icons = { discover: '🔍', release: '🌊', action: '⚡', emotion: '💫' };
  return icons[type] || '📝';
}

function formatDate(timestamp) {
  if (!timestamp) return '';
  try {
    return new Date(timestamp).toLocaleString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return timestamp;
  }
}

function formatEntryContent(entry) {
  switch (entry.type) {
    case 'discover':
      return `<p><strong>Keinginan:</strong> ${escapeHtml(entry.content.desire || '')}</p>`;
    case 'release':
      return `<p><strong>Goal:</strong> ${escapeHtml(entry.content.goalText || '')}</p>
              <p><strong>Emosi:</strong> ${entry.content.emotionBefore || '?'} → ${entry.content.emotionAfter || '?'}</p>`;
    case 'action':
      const actions = entry.content.actions || [];
      return `<p><strong>Actions:</strong> ${actions.map(a => escapeHtml(a)).join(', ') || '-'}</p>`;
    case 'emotion':
      return `<p><strong>Emosi:</strong> ${entry.content.emotion || '?'}</p>`;
    default:
      return '';
  }
}

function exportJournalToPDF() {
  showToast('Fitur export PDF akan segera tersedia', 'info');
}

function confirmClearJournal() {
  showToast('Fitur hapus journal akan segera tersedia', 'warning');
}

// ===== EMOTION LOG =====
async function logCurrentEmotion() {
  const emotion = document.getElementById('currentEmotion').value;
  if (!emotion) {
    showToast('Pilih emosi terlebih dahulu', 'warning');
    return;
  }

  const result = await callManifestingApi('logManifestingEmotion', {
    emotion: emotion,
    context: 'daily_check'
  });

  if (result && result.success) {
    showToast('Emosi tercatat!', 'success');
    document.getElementById('currentEmotion').value = '';
  }
}

// ===== POPULATE GOAL SELECTS =====
async function populateGoalSelects() {
  const result = await callManifestingApi('getManifestingGoals', null, { status: 'active' });
  if (!result || !result.success || !result.goals) return;

  const options = result.goals.map(g => {
    const shortText = g.goalText.length > 50 ? g.goalText.substring(0, 50) + '...' : g.goalText;
    return `<option value="${g.id}">${escapeHtml(shortText)}</option>`;
  }).join('');

  const defaultOption = '<option value="">-- Pilih dari goal aktif --</option>';

  ['releaseGoalSelect', 'actionGoalSelect', 'filterGoal'].forEach(id => {
    const select = document.getElementById(id);
    if (select) {
      if (id === 'filterGoal') {
        select.innerHTML = '<option value="all">Semua Goal</option>' + options;
      } else {
        select.innerHTML = defaultOption + options;
      }
    }
  });
}

// ===== SETTINGS =====
function saveApiUrl() {
  const url = document.getElementById('apiUrl').value;
  if (!url) {
    showToast('Masukkan URL API', 'warning');
    return;
  }
  localStorage.setItem('apiUrl', url);
  showToast('API URL tersimpan!', 'success');
}

async function testApiConnection() {
  const status = document.getElementById('apiStatus');
  status.style.display = 'block';
  status.innerHTML = 'Testing...';
  status.className = 'status-indicator';

  const result = await callManifestingApi('ping');

  if (result && result.success) {
    status.innerHTML = '✅ Terhubung!';
    status.className = 'status-indicator success';
  } else {
    status.innerHTML = '❌ Gagal terhubung';
    status.className = 'status-indicator error';
  }
}

function saveUserSettings() {
  const name = document.getElementById('defaultName').value;
  const startDate = document.getElementById('programStartDate').value;

  if (name) localStorage.setItem('manifestingName', name);
  if (startDate) {
    localStorage.setItem('manifestingStartDate', startDate);
    callManifestingApi('initManifestingProgress', { startDate: startDate });
  }

  showToast('Settings tersimpan!', 'success');
}

function clearLocalStorage() {
  if (!confirm('Hapus semua data lokal? Data di server tidak akan terhapus.')) return;
  localStorage.removeItem('manifestingName');
  localStorage.removeItem('manifestingStartDate');
  showToast('Local storage cleared', 'success');
}

function resetAllSettings() {
  if (!confirm('Reset semua settings ke default?')) return;
  localStorage.removeItem('apiUrl');
  localStorage.removeItem('manifestingName');
  localStorage.removeItem('manifestingStartDate');
  document.getElementById('apiUrl').value = '';
  document.getElementById('defaultName').value = '';
  document.getElementById('programStartDate').value = '';
  showToast('Settings reset', 'success');
}

// ===== UTILITY =====
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  // Load saved API URL or use default
  const savedUrl = localStorage.getItem('apiUrl') || DEFAULT_API_URL;
  const apiUrlField = document.getElementById('apiUrl');
  if (apiUrlField) apiUrlField.value = savedUrl;

  // Ensure API URL is saved to localStorage
  if (!localStorage.getItem('apiUrl')) {
    localStorage.setItem('apiUrl', DEFAULT_API_URL);
  }

  // Load saved settings
  const savedName = localStorage.getItem('manifestingName');
  const savedDate = localStorage.getItem('manifestingStartDate');
  if (savedName) {
    const nameField = document.getElementById('defaultName');
    if (nameField) nameField.value = savedName;
  }
  if (savedDate) {
    const dateField = document.getElementById('programStartDate');
    if (dateField) dateField.value = savedDate;
  }

  // Init components
  initWantingTags();
  initSliders();
  resetTimer();

  // Init tab buttons
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', function() {
      switchTab(this.dataset.tab);
    });
  });

  // Init timer duration change
  document.querySelectorAll('input[name="timerDuration"]').forEach(radio => {
    radio.addEventListener('change', resetTimer);
  });

  // Load initial data
  loadDashboard();
});
