// Letting Go App - Sedona Method Implementation
// Uses ReleasingEngine for guided releasing

// ==================== STATE ====================
let stats = {
  sessions: 0,
  releases: 0,
  streak: 0,
  insights: 0,
  lastDate: null
};

let returnContext = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
  loadStats();
  updateStatsDisplay();
  initTabNavigation();
  loadDailyChecklist();
  initReleasingEngine();
  checkQuickReleaseMode();
});

// ==================== RELEASING ENGINE INIT ====================
function initReleasingEngine() {
  ReleasingEngine.init({
    onComplete: function(data) {
      console.log('Releasing complete:', data);
    },
    onRelease: function(data) {
      stats.releases++;
      saveStats();
      updateStatsDisplay();
    },
    onInsight: function(data) {
      if (data.insight) {
        stats.insights++;
        saveStats();
        updateStatsDisplay();
      }
    },
    onSequenceComplete: function(data) {
      showToast('🎉 Semua wanting berhasil di-release!', 'success');

      // Return to manifesting if came from there
      if (returnContext) {
        setTimeout(function() {
          if (confirm('Kembali ke Manifesting Workbook?')) {
            localStorage.removeItem('lettingGo_returnContext');
            window.location.href = returnContext.returnUrl || 'manifesting-workbook.html';
          }
        }, 500);
      }
    }
  });
}

// ==================== TAB NAVIGATION ====================
function initTabNavigation() {
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var tabId = this.dataset.tab;
      if (tabId) switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.tab-content').forEach(function(content) {
    content.classList.remove('active');
  });

  var btn = document.querySelector('.tab-btn[data-tab="' + tabId + '"]');
  var content = document.getElementById(tabId);

  if (btn) btn.classList.add('active');
  if (content) content.classList.add('active');
}

// ==================== GUIDED RELEASING (uses engine) ====================
function startGuidedReleasing(scriptId) {
  var success = ReleasingEngine.startReleasing(scriptId, {
    onComplete: function(data) {
      showToast('Releasing selesai! 🎉', 'success');

      // Return to manifesting if came from there
      if (returnContext) {
        setTimeout(function() {
          if (confirm('Kembali ke Manifesting Workbook?')) {
            localStorage.removeItem('lettingGo_returnContext');
            window.location.href = returnContext.returnUrl || 'manifesting-workbook.html';
          }
        }, 500);
      }
    },
    onRelease: function(data) {
      stats.releases++;
      saveStats();
      updateStatsDisplay();
    },
    onInsight: function(data) {
      if (data.insight) {
        stats.insights++;
        saveStats();
        updateStatsDisplay();
      }
    }
  });

  if (!success) {
    showToast('Script tidak ditemukan', 'error');
  }
}

// ==================== STATS ====================
function loadStats() {
  try {
    var saved = localStorage.getItem('lettingGo_stats');
    if (saved) {
      stats = JSON.parse(saved);
    }

    // Check and update streak
    var today = new Date().toDateString();
    if (stats.lastDate !== today) {
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (stats.lastDate !== yesterday.toDateString()) {
        stats.streak = 0;
      }
    }
  } catch (e) {
    console.error('Error loading stats:', e);
  }
}

function saveStats() {
  stats.lastDate = new Date().toDateString();
  localStorage.setItem('lettingGo_stats', JSON.stringify(stats));
}

function updateStatsDisplay() {
  var el;
  el = document.getElementById('stat-sessions');
  if (el) el.textContent = stats.sessions;
  el = document.getElementById('stat-releases');
  if (el) el.textContent = stats.releases;
  el = document.getElementById('stat-streak');
  if (el) el.textContent = stats.streak;
  el = document.getElementById('stat-insights');
  if (el) el.textContent = stats.insights;
}

// ==================== DAILY CHECKLIST ====================
function loadDailyChecklist() {
  var today = new Date().toDateString();
  var saved = localStorage.getItem('lettingGo_dailyChecklist');

  if (saved) {
    var data = JSON.parse(saved);
    if (data.date === today) {
      var morning = document.getElementById('daily-morning');
      var afternoon = document.getElementById('daily-afternoon');
      var evening = document.getElementById('daily-evening');

      if (morning) morning.checked = data.morning;
      if (afternoon) afternoon.checked = data.afternoon;
      if (evening) evening.checked = data.evening;
    }
  }
}

function updateDailyChecklist() {
  var today = new Date().toDateString();
  var morning = document.getElementById('daily-morning');
  var afternoon = document.getElementById('daily-afternoon');
  var evening = document.getElementById('daily-evening');

  var data = {
    date: today,
    morning: morning ? morning.checked : false,
    afternoon: afternoon ? afternoon.checked : false,
    evening: evening ? evening.checked : false
  };

  localStorage.setItem('lettingGo_dailyChecklist', JSON.stringify(data));

  // Update streak if all checked
  if (data.morning && data.afternoon && data.evening) {
    if (stats.lastDate !== today) {
      stats.streak++;
      stats.sessions++;
      saveStats();
      updateStatsDisplay();
      showToast('🔥 Streak bertambah!', 'success');
    }
  }
}

// ==================== QUICK RELEASE MODE ====================
function checkQuickReleaseMode() {
  var urlParams = new URLSearchParams(window.location.search);
  var mode = urlParams.get('mode');
  var type = urlParams.get('type');
  var wantings = urlParams.get('wantings');

  if (mode === 'quick-release') {
    try {
      var contextStr = localStorage.getItem('lettingGo_returnContext');
      if (contextStr) {
        returnContext = JSON.parse(contextStr);
        showReturnBanner();

        // If wantings specified, start sequential releasing
        if (wantings) {
          var wantingList = wantings.split(',');
          setTimeout(function() {
            ReleasingEngine.startSequentialReleasing(wantingList, {
              onRelease: function(data) {
                stats.releases++;
                saveStats();
                updateStatsDisplay();
              },
              onInsight: function(data) {
                if (data.insight) {
                  stats.insights++;
                  saveStats();
                  updateStatsDisplay();
                }
              },
              onSequenceComplete: function(data) {
                showToast('🎉 Semua wanting berhasil di-release!', 'success');

                setTimeout(function() {
                  if (confirm('Kembali ke Manifesting Workbook?')) {
                    localStorage.removeItem('lettingGo_returnContext');
                    window.location.href = returnContext.returnUrl || 'manifesting-workbook.html';
                  }
                }, 500);
              }
            });
          }, 500);
        } else if (type === 'wanting') {
          switchTab('wanting');
        } else if (type === 'story') {
          switchTab('story');
        }
      }
    } catch (e) {
      console.error('Error loading return context:', e);
    }
  }
}

function showReturnBanner() {
  if (!returnContext) return;

  var banner = document.createElement('div');
  banner.className = 'return-banner';
  banner.innerHTML = '<div class="return-banner-content">' +
    '<span>🔗 Release dari: <strong>Manifesting Workbook</strong></span>' +
    '<span class="return-context">' + (returnContext.content || '') + '</span>' +
    '</div>' +
    '<button onclick="returnToManifesting()" class="btn-return">← Kembali</button>';

  var header = document.querySelector('.header');
  if (header) {
    header.insertAdjacentElement('afterend', banner);
  }
}

function returnToManifesting() {
  localStorage.removeItem('lettingGo_returnContext');
  window.location.href = returnContext && returnContext.returnUrl ? returnContext.returnUrl : 'manifesting-workbook.html';
}

// ==================== TOAST ====================
function showToast(message, type) {
  type = type || 'info';
  var toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.className = 'toast show' + (type === 'success' ? ' success' : '');

  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000);
}
