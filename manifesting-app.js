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
const ACTION_DRAFT_KEY = 'manifesting_action_draft';

function getActionDraft() {
  return {
    goalId: document.getElementById('actionGoalSelect').value,
    actions: [
      document.getElementById('action1').value,
      document.getElementById('action2').value,
      document.getElementById('action3').value
    ],
    actionWantings: getSelectedWantings('actionWantingTags'),
    limitingBeliefs: [
      document.getElementById('limiting1').value,
      document.getElementById('limiting2').value,
      document.getElementById('limiting3').value
    ],
    limitingWantings: getSelectedWantings('limitingWantingTags'),
    empoweringBeliefs: [
      document.getElementById('empowering1').value,
      document.getElementById('empowering2').value,
      document.getElementById('empowering3').value
    ],
    savedAt: new Date().toISOString()
  };
}

function autoSaveAction() {
  const draft = getActionDraft();
  // Only save if there's some content
  const hasContent = draft.actions.some(a => a) ||
                     draft.limitingBeliefs.some(b => b) ||
                     draft.empoweringBeliefs.some(b => b) ||
                     draft.actionWantings.length > 0 ||
                     draft.limitingWantings.length > 0;

  if (hasContent) {
    localStorage.setItem(ACTION_DRAFT_KEY, JSON.stringify(draft));
  }
}

function loadActionDraft() {
  const saved = localStorage.getItem(ACTION_DRAFT_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return null;
    }
  }
  return null;
}

function restoreActionDraft(draft) {
  if (!draft) return;

  // Restore goal selection
  if (draft.goalId) {
    document.getElementById('actionGoalSelect').value = draft.goalId;
  }

  // Restore actions
  if (draft.actions) {
    document.getElementById('action1').value = draft.actions[0] || '';
    document.getElementById('action2').value = draft.actions[1] || '';
    document.getElementById('action3').value = draft.actions[2] || '';
  }

  // Restore action wantings
  if (draft.actionWantings) {
    draft.actionWantings.forEach(w => {
      const btn = document.querySelector(`#actionWantingTags [data-wanting="${w}"]`);
      if (btn) btn.classList.add('selected');
    });
  }

  // Restore limiting beliefs
  if (draft.limitingBeliefs) {
    document.getElementById('limiting1').value = draft.limitingBeliefs[0] || '';
    document.getElementById('limiting2').value = draft.limitingBeliefs[1] || '';
    document.getElementById('limiting3').value = draft.limitingBeliefs[2] || '';
  }

  // Restore limiting wantings
  if (draft.limitingWantings) {
    draft.limitingWantings.forEach(w => {
      const btn = document.querySelector(`#limitingWantingTags [data-wanting="${w}"]`);
      if (btn) btn.classList.add('selected');
    });
  }

  // Restore empowering beliefs
  if (draft.empoweringBeliefs) {
    document.getElementById('empowering1').value = draft.empoweringBeliefs[0] || '';
    document.getElementById('empowering2').value = draft.empoweringBeliefs[1] || '';
    document.getElementById('empowering3').value = draft.empoweringBeliefs[2] || '';
  }

  showToast('📝 Draft action dilanjutkan', 'info');
}

function clearActionDraft() {
  localStorage.removeItem(ACTION_DRAFT_KEY);
}

function checkActionDraft() {
  const draft = loadActionDraft();
  if (draft) {
    // Show resume modal
    const modal = document.getElementById('resumeActionModal');
    if (modal) {
      // Format saved time
      const savedDate = new Date(draft.savedAt);
      const timeAgo = formatTimeAgo(savedDate);
      document.getElementById('draftTimeAgo').textContent = timeAgo;

      // Show preview
      let preview = '';
      if (draft.actions && draft.actions.filter(a => a).length > 0) {
        preview += 'Actions: ' + draft.actions.filter(a => a).join(', ') + '\n';
      }
      if (draft.limitingBeliefs && draft.limitingBeliefs.filter(b => b).length > 0) {
        preview += 'Limiting: ' + draft.limitingBeliefs.filter(b => b).length + ' beliefs\n';
      }
      document.getElementById('draftPreview').textContent = preview || 'Data tersimpan';

      modal.classList.add('show');
    }
  }
}

function resumeActionDraft() {
  const draft = loadActionDraft();
  restoreActionDraft(draft);
  document.getElementById('resumeActionModal').classList.remove('show');
  // Switch to Action tab
  switchTab('action');
}

function discardActionDraft() {
  clearActionDraft();
  document.getElementById('resumeActionModal').classList.remove('show');
  showToast('Draft dihapus', 'info');
}

function formatTimeAgo(date) {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Baru saja';
  if (minutes < 60) return minutes + ' menit yang lalu';
  if (hours < 24) return hours + ' jam yang lalu';
  return days + ' hari yang lalu';
}

function initActionAutoSave() {
  // Auto-save on input changes
  const actionInputs = ['action1', 'action2', 'action3',
                        'limiting1', 'limiting2', 'limiting3',
                        'empowering1', 'empowering2', 'empowering3',
                        'actionGoalSelect'];

  actionInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', autoSaveAction);
      el.addEventListener('change', autoSaveAction);
    }
  });

  // Auto-save on wanting tag click
  ['actionWantingTags', 'limitingWantingTags'].forEach(containerId => {
    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener('click', function(e) {
        if (e.target.classList.contains('wanting-tag')) {
          setTimeout(autoSaveAction, 100);
        }
      });
    }
  });
}

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
    clearActionDraft(); // Clear the auto-saved draft
    resetActionForm();
  }
}

function resetActionForm() {
  ['action1', 'action2', 'action3', 'limiting1', 'limiting2', 'limiting3',
   'empowering1', 'empowering2', 'empowering3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('actionGoalSelect').value = '';
  clearWantingTags('actionWantingTags');
  clearWantingTags('limitingWantingTags');
  clearActionDraft();
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

// ===== TECHNIQUE MODALS =====
const techniqueReleaseStatus = {
  goalProcess: false,
  wantingChecker: { control: false, approval: false, security: false, separation: false },
  holisticRelease: { advantages: false, disadvantages: false, advNot: false, disadvNot: false },
  actionBrainstorm: false,
  beliefClearing: { limiting: false, empowering: false },
  turnItOver: false,
  releaseDoer: false,
  freeway: false,
  allPower: false,
  worldAsDream: false
};

function openTechniqueModal(techniqueId) {
  const modalId = techniqueId + 'Modal';
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    // Init sliders in modal
    initTechniqueSliders(modal);
    // Init wanting tags in modal
    initTechniqueWantingTags(modal);
  }
}

function closeTechniqueModal(techniqueId) {
  const modalId = techniqueId + 'Modal';
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function initTechniqueSliders(modal) {
  modal.querySelectorAll('.slider').forEach(slider => {
    const displayId = slider.id + 'Value';
    const display = document.getElementById(displayId);
    if (display) {
      slider.addEventListener('input', function() {
        display.textContent = this.value;
      });
    }
  });
}

function initTechniqueWantingTags(modal) {
  modal.querySelectorAll('.wanting-tags').forEach(container => {
    container.querySelectorAll('.wanting-tag').forEach(tag => {
      // Remove existing listener to avoid duplicates
      tag.removeEventListener('click', toggleWantingTag);
      tag.addEventListener('click', toggleWantingTag);
    });
  });
}

function toggleWantingTag() {
  this.classList.toggle('selected');
}

function doTechniqueRelease(techniqueId, releaseType) {
  // Use the ReleasingEngine for quick release
  ReleasingEngine.startReleasing('quick-basic', {
    onComplete: function(data) {
      // Update status based on technique
      updateTechniqueReleaseStatus(techniqueId, releaseType);
      showToast('🌊 Release selesai!', 'success');
    }
  });
}

function updateTechniqueReleaseStatus(techniqueId, releaseType) {
  switch (techniqueId) {
    case 'goalProcess':
      techniqueReleaseStatus.goalProcess = true;
      const gpStatus = document.getElementById('gp-release-status');
      if (gpStatus) gpStatus.style.display = 'block';
      break;

    case 'holisticRelease':
      if (releaseType === 'advantages') techniqueReleaseStatus.holisticRelease.advantages = true;
      if (releaseType === 'disadvantages') techniqueReleaseStatus.holisticRelease.disadvantages = true;
      if (releaseType === 'adv-not') techniqueReleaseStatus.holisticRelease.advNot = true;
      if (releaseType === 'disadv-not') techniqueReleaseStatus.holisticRelease.disadvNot = true;
      break;

    case 'beliefClearing':
      if (releaseType === 'limiting') techniqueReleaseStatus.beliefClearing.limiting = true;
      if (releaseType === 'empowering') techniqueReleaseStatus.beliefClearing.empowering = true;
      break;

    case 'turnItOver':
      techniqueReleaseStatus.turnItOver = true;
      const tioStatus = document.getElementById('tio-release-status');
      if (tioStatus) tioStatus.style.display = 'block';
      break;

    case 'releaseDoer':
      techniqueReleaseStatus.releaseDoer = true;
      const rdStatus = document.getElementById('rd-release-status');
      if (rdStatus) rdStatus.style.display = 'block';
      break;

    case 'freeway':
      techniqueReleaseStatus.freeway = true;
      break;

    case 'allPower':
      techniqueReleaseStatus.allPower = true;
      const apStatus = document.getElementById('ap-release-status');
      if (apStatus) apStatus.style.display = 'block';
      break;

    case 'worldAsDream':
      techniqueReleaseStatus.worldAsDream = true;
      break;
  }
}

// For 4 Wanting Checker
function doWantingRelease(wantingType) {
  ReleasingEngine.startReleasing('wanting-' + wantingType, {
    onComplete: function(data) {
      techniqueReleaseStatus.wantingChecker[wantingType] = true;
      const statusEl = document.getElementById('wc-' + wantingType + '-status');
      if (statusEl) statusEl.style.display = 'block';

      // Check if all 4 are done
      const wc = techniqueReleaseStatus.wantingChecker;
      if (wc.control && wc.approval && wc.security && wc.separation) {
        const allStatus = document.getElementById('wc-all-status');
        if (allStatus) allStatus.style.display = 'block';
      }

      showToast('🌊 w/' + wantingType.charAt(0) + ' released!', 'success');
    }
  });
}

// For Action Brainstorm wanting release
function releaseActionBrainstormWanting() {
  const container = document.getElementById('ab-wantingTags');
  if (!container) return;

  const selected = [];
  container.querySelectorAll('.wanting-tag.selected').forEach(tag => {
    selected.push(tag.dataset.wanting);
  });

  if (selected.length === 0) {
    showToast('Pilih minimal satu wanting', 'warning');
    return;
  }

  ReleasingEngine.startSequentialReleasing(selected, {
    onRelease: function(data) {
      showToast('🌊 Wanting released!', 'success');
    },
    onSequenceComplete: function(data) {
      showToast('🎉 Semua wanting dari actions released!', 'success');
      // Clear selected
      container.querySelectorAll('.wanting-tag.selected').forEach(tag => {
        tag.classList.remove('selected');
      });
    }
  });
}

async function saveTechniqueSession(techniqueId) {
  let data = {
    technique: techniqueId,
    timestamp: new Date().toISOString()
  };

  // Collect data based on technique
  switch (techniqueId) {
    case 'goalProcess':
      data.goal = document.getElementById('gp-goal')?.value || '';
      data.feeling = document.getElementById('gp-feeling')?.value || '';
      data.intensity = document.getElementById('gp-intensity')?.value || 5;
      data.released = techniqueReleaseStatus.goalProcess;
      break;

    case 'wantingChecker':
      data.goal = document.getElementById('wc-goal')?.value || '';
      data.releasedWantings = techniqueReleaseStatus.wantingChecker;
      break;

    case 'holisticRelease':
      data.goal = document.getElementById('hr-goal')?.value || '';
      data.advantages = document.getElementById('hr-advantages')?.value || '';
      data.disadvantages = document.getElementById('hr-disadvantages')?.value || '';
      data.advNot = document.getElementById('hr-adv-not')?.value || '';
      data.disadvNot = document.getElementById('hr-disadv-not')?.value || '';
      data.intensity = document.getElementById('hr-intensity')?.value || 5;
      data.releasedParts = techniqueReleaseStatus.holisticRelease;
      break;

    case 'actionBrainstorm':
      data.goal = document.getElementById('ab-goal')?.value || '';
      data.actions = [
        document.getElementById('ab-action1')?.value || '',
        document.getElementById('ab-action2')?.value || '',
        document.getElementById('ab-action3')?.value || ''
      ].filter(a => a);
      data.finalAction = document.getElementById('ab-finalAction')?.value || '';
      break;

    case 'beliefClearing':
      data.goal = document.getElementById('bc-goal')?.value || '';
      data.limitingBeliefs = [
        document.getElementById('bc-limiting1')?.value || '',
        document.getElementById('bc-limiting2')?.value || '',
        document.getElementById('bc-limiting3')?.value || ''
      ].filter(b => b);
      data.empoweringBeliefs = [
        document.getElementById('bc-empowering1')?.value || '',
        document.getElementById('bc-empowering2')?.value || '',
        document.getElementById('bc-empowering3')?.value || ''
      ].filter(b => b);
      data.insight = document.getElementById('bc-insight')?.value || '';
      data.releasedParts = techniqueReleaseStatus.beliefClearing;
      break;

    case 'turnItOver':
      data.goal = document.getElementById('tio-goal')?.value || '';
      data.burden = document.getElementById('tio-burden')?.value || '';
      data.intensity = document.getElementById('tio-intensity')?.value || 5;
      data.insight = document.getElementById('tio-insight')?.value || '';
      data.released = techniqueReleaseStatus.turnItOver;
      break;

    case 'releaseDoer':
      data.goal = document.getElementById('rd-goal')?.value || '';
      data.doer = document.getElementById('rd-doer')?.value || '';
      data.freeAction = document.getElementById('rd-freeAction')?.value || '';
      data.released = techniqueReleaseStatus.releaseDoer;
      break;

    case 'freeway':
      data.goal = document.getElementById('fw-goal')?.value || '';
      data.intensity = document.getElementById('fw-intensity')?.value || 5;
      data.insight = document.getElementById('fw-insight')?.value || '';
      data.released = techniqueReleaseStatus.freeway;
      break;

    case 'allPower':
      data.goal = document.getElementById('ap-goal')?.value || '';
      data.powerGiven = document.getElementById('ap-powerGiven')?.value || '';
      data.intensity = document.getElementById('ap-intensity')?.value || 5;
      data.insight = document.getElementById('ap-insight')?.value || '';
      data.released = techniqueReleaseStatus.allPower;
      break;

    case 'worldAsDream':
      data.goal = document.getElementById('wad-goal')?.value || '';
      data.awareness = document.getElementById('wad-awareness')?.value || '';
      data.intensity = document.getElementById('wad-intensity')?.value || 5;
      data.insight = document.getElementById('wad-insight')?.value || '';
      data.released = techniqueReleaseStatus.worldAsDream;
      break;
  }

  // Save to API
  const result = await callManifestingApi('saveTechniqueSession', data);
  if (result && result.success) {
    showToast('Sesi ' + getTechniqueName(techniqueId) + ' tersimpan!', 'success');
    closeTechniqueModal(techniqueId);
    resetTechniqueForm(techniqueId);
  } else {
    // Save locally if API fails
    saveTechniqueLocally(data);
    showToast('Sesi tersimpan lokal', 'info');
    closeTechniqueModal(techniqueId);
    resetTechniqueForm(techniqueId);
  }
}

function getTechniqueName(techniqueId) {
  const names = {
    goalProcess: 'Goal Process',
    wantingChecker: '4 Wanting Checker',
    holisticRelease: 'Holistic Release',
    actionBrainstorm: 'Action Brainstorm',
    beliefClearing: 'Belief Clearing',
    turnItOver: 'Turn It Over',
    releaseDoer: 'Release the Doer',
    freeway: 'Freeway',
    allPower: 'All Power',
    worldAsDream: 'World as Dream'
  };
  return names[techniqueId] || techniqueId;
}

function saveTechniqueLocally(data) {
  const key = 'manifesting_technique_sessions';
  let sessions = JSON.parse(localStorage.getItem(key) || '[]');
  sessions.push(data);
  localStorage.setItem(key, JSON.stringify(sessions));
}

function resetTechniqueForm(techniqueId) {
  // Reset status
  switch (techniqueId) {
    case 'goalProcess':
      techniqueReleaseStatus.goalProcess = false;
      const gpStatus = document.getElementById('gp-release-status');
      if (gpStatus) gpStatus.style.display = 'none';
      break;

    case 'wantingChecker':
      techniqueReleaseStatus.wantingChecker = { control: false, approval: false, security: false, separation: false };
      ['control', 'approval', 'security', 'separation'].forEach(w => {
        const el = document.getElementById('wc-' + w + '-status');
        if (el) el.style.display = 'none';
      });
      const wcAll = document.getElementById('wc-all-status');
      if (wcAll) wcAll.style.display = 'none';
      break;

    case 'holisticRelease':
      techniqueReleaseStatus.holisticRelease = { advantages: false, disadvantages: false, advNot: false, disadvNot: false };
      break;

    case 'beliefClearing':
      techniqueReleaseStatus.beliefClearing = { limiting: false, empowering: false };
      break;

    case 'turnItOver':
      techniqueReleaseStatus.turnItOver = false;
      const tioStatus = document.getElementById('tio-release-status');
      if (tioStatus) tioStatus.style.display = 'none';
      break;

    case 'releaseDoer':
      techniqueReleaseStatus.releaseDoer = false;
      const rdStatus = document.getElementById('rd-release-status');
      if (rdStatus) rdStatus.style.display = 'none';
      break;

    case 'allPower':
      techniqueReleaseStatus.allPower = false;
      const apStatus = document.getElementById('ap-release-status');
      if (apStatus) apStatus.style.display = 'none';
      break;

    default:
      // Reset other techniques
      techniqueReleaseStatus[techniqueId] = false;
  }

  // Clear form fields in the modal
  const modal = document.getElementById(techniqueId + 'Modal');
  if (modal) {
    modal.querySelectorAll('input[type="text"], textarea').forEach(el => {
      el.value = '';
    });
    modal.querySelectorAll('.slider').forEach(el => {
      el.value = 5;
      const displayId = el.id + 'Value';
      const display = document.getElementById(displayId);
      if (display) display.textContent = '5';
    });
    modal.querySelectorAll('.wanting-tag.selected').forEach(tag => {
      tag.classList.remove('selected');
    });
  }
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

  // Init action auto-save
  initActionAutoSave();

  // Check for saved action draft
  checkActionDraft();

  // Load initial data
  loadDashboard();
});
