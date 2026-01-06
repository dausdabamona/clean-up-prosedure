// ==========================================================================
// AREA SESSION - JavaScript Logic
// Guided releasing per resistance area
// ==========================================================================

(function() {
  'use strict';

  // Storage key for session data
  const STORAGE_KEY = 'area_session_data';

  // Current area data
  let currentArea = null;
  let sessionData = {};

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================

  function init() {
    // Get area ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const areaId = urlParams.get('area');

    if (!areaId) {
      showToast('Area tidak ditemukan', 'error');
      setTimeout(() => {
        window.location.href = '14-days-resistance.html';
      }, 1500);
      return;
    }

    // Get area data
    if (typeof ResistanceAreasData === 'undefined') {
      showToast('Data area tidak tersedia', 'error');
      return;
    }

    currentArea = ResistanceAreasData.getAreaById(areaId);

    if (!currentArea) {
      showToast('Area tidak ditemukan: ' + areaId, 'error');
      setTimeout(() => {
        window.location.href = '14-days-resistance.html';
      }, 1500);
      return;
    }

    // Load session data
    loadSessionData();

    // Set area color
    document.documentElement.style.setProperty('--area-color', currentArea.color);

    // Render UI
    renderHeader();
    renderDefinition();
    renderAnalogies();
    renderChecklist();
    renderTechniques();
    renderInquiries();
    renderQuotes();
    renderTestimonials();
    updateProgress();

    // Initialize ReleasingEngine
    if (typeof ReleasingEngine !== 'undefined') {
      ReleasingEngine.init({
        onComplete: onReleaseComplete,
        onRelease: onReleaseComplete,
        onInsight: onInsightSaved
      });
    }
  }

  // ==========================================================================
  // STORAGE
  // ==========================================================================

  function loadSessionData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        sessionData = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading session data:', e);
      sessionData = {};
    }

    // Initialize area data if not exists
    if (!sessionData[currentArea.id]) {
      sessionData[currentArea.id] = {
        checkedItems: [],
        releasedItems: [],
        completedTechniques: [],
        totalReleases: 0,
        lastSession: null
      };
    }
  }

  function saveSessionData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));
    } catch (e) {
      console.error('Error saving session data:', e);
    }
  }

  function getAreaData() {
    return sessionData[currentArea.id] || {
      checkedItems: [],
      releasedItems: [],
      completedTechniques: [],
      totalReleases: 0,
      lastSession: null
    };
  }

  // ==========================================================================
  // RENDERING
  // ==========================================================================

  function renderHeader() {
    document.getElementById('areaIcon').textContent = currentArea.icon;
    document.getElementById('areaName').textContent = 'Resistensi ' + currentArea.name;
    document.getElementById('areaSubtitle').textContent = 'Hari ' + currentArea.day + ' - Guided Releasing';
    document.title = 'Resistensi ' + currentArea.name + ' - Sedona Method';
  }

  function renderDefinition() {
    document.getElementById('defineAreaName').textContent = currentArea.name;
    document.getElementById('definitionText').textContent = currentArea.definition;
    document.getElementById('keyInsightText').textContent = currentArea.keyInsight;
  }

  function renderAnalogies() {
    const container = document.getElementById('analogiesContainer');
    container.innerHTML = currentArea.analogies.map(analogy => `
      <div class="analogy-card">
        <div class="analogy-title">${analogy.title}</div>
        <p class="analogy-text">${analogy.description}</p>
      </div>
    `).join('');
  }

  function renderChecklist() {
    const container = document.getElementById('checklistContainer');
    const areaData = getAreaData();

    container.innerHTML = currentArea.resistanceChecklist.map(item => {
      const isChecked = areaData.checkedItems.includes(item.id);
      const isReleased = areaData.releasedItems.includes(item.id);

      return `
        <div class="checklist-item" data-id="${item.id}">
          <div class="checklist-checkbox ${isChecked ? 'checked' : ''}" onclick="toggleChecklistItem('${item.id}')">
            ${isChecked ? '✓' : ''}
          </div>
          <span class="checklist-text ${isChecked ? 'checked' : ''}">${item.question}</span>
          ${isChecked && !isReleased ? `<button class="checklist-release-btn" onclick="releaseChecklistItem('${item.id}')">Release</button>` : ''}
          ${isReleased ? '<span style="color: #22c55e; font-size: 0.85rem; margin-left: auto;">✓ Released</span>' : ''}
        </div>
      `;
    }).join('');
  }

  function renderTechniques() {
    const container = document.getElementById('techniquesContainer');

    container.innerHTML = currentArea.techniques.map((technique, index) => `
      <div class="technique-card">
        <div class="technique-name">${technique.name}</div>
        <ol class="technique-steps">
          ${technique.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        <button class="start-technique-btn" onclick="startTechnique(${index})">
          Mulai ${technique.name}
        </button>
      </div>
    `).join('');
  }

  function renderInquiries() {
    const container = document.getElementById('inquiriesContainer');
    container.innerHTML = currentArea.inquiries.map(inquiry => `
      <li class="inquiry-item">${inquiry}</li>
    `).join('');
  }

  function renderQuotes() {
    const container = document.getElementById('quotesContainer');
    container.innerHTML = currentArea.quotes.map(quote => `
      <div class="quote-card">
        <p class="quote-text">"${quote.text}"</p>
        <p class="quote-author">— ${quote.author}</p>
      </div>
    `).join('');
  }

  function renderTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    container.innerHTML = currentArea.testimonials.map(testimonial => `
      <div class="testimonial-card">
        <p class="testimonial-text">"${testimonial.text}"</p>
        <p class="testimonial-author"><strong>${testimonial.name}</strong>, ${testimonial.location}</p>
      </div>
    `).join('');
  }

  function updateProgress() {
    const areaData = getAreaData();
    const total = currentArea.resistanceChecklist.length;
    const checked = areaData.checkedItems.length;
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;

    document.getElementById('progressCount').textContent = `${checked}/${total} resistensi dicheck`;
    document.getElementById('progressFill').style.width = percentage + '%';
  }

  // ==========================================================================
  // TAB NAVIGATION
  // ==========================================================================

  window.switchTab = function(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById('tab-' + tabId).classList.add('active');
  };

  // ==========================================================================
  // CHECKLIST INTERACTIONS
  // ==========================================================================

  window.toggleChecklistItem = function(itemId) {
    const areaData = getAreaData();
    const index = areaData.checkedItems.indexOf(itemId);

    if (index === -1) {
      areaData.checkedItems.push(itemId);
    } else {
      areaData.checkedItems.splice(index, 1);
      // Also remove from released if unchecking
      const releasedIndex = areaData.releasedItems.indexOf(itemId);
      if (releasedIndex !== -1) {
        areaData.releasedItems.splice(releasedIndex, 1);
      }
    }

    saveSessionData();
    renderChecklist();
    updateProgress();
  };

  window.releaseChecklistItem = function(itemId) {
    const item = currentArea.resistanceChecklist.find(i => i.id === itemId);
    if (!item) return;

    // Start releasing with the question as context
    if (typeof ReleasingEngine !== 'undefined') {
      ReleasingEngine.startReleasing('fondasi', {
        context: {
          type: 'checklist-item',
          itemId: itemId,
          question: item.question
        },
        onComplete: (result) => {
          const areaData = getAreaData();
          if (!areaData.releasedItems.includes(itemId)) {
            areaData.releasedItems.push(itemId);
            areaData.totalReleases++;
            areaData.lastSession = new Date().toISOString();
            saveSessionData();
            renderChecklist();
            showToast('Resistensi dilepaskan! 🎉', 'success');
          }
        }
      });
    }
  };

  // ==========================================================================
  // TECHNIQUE INTERACTIONS
  // ==========================================================================

  window.startTechnique = function(index) {
    const technique = currentArea.techniques[index];
    if (!technique) return;

    // Start appropriate releasing based on technique
    if (typeof ReleasingEngine !== 'undefined') {
      // Map technique to script
      let scriptId = 'fondasi';

      if (technique.name.toLowerCase().includes('kedua sisi')) {
        scriptId = 'wanting-all';
      } else if (technique.name.toLowerCase().includes('approval')) {
        scriptId = 'wanting-approval';
      } else if (technique.name.toLowerCase().includes('control')) {
        scriptId = 'wanting-control';
      } else if (technique.name.toLowerCase().includes('security')) {
        scriptId = 'wanting-security';
      } else if (technique.name.toLowerCase().includes('body') || technique.name.toLowerCase().includes('tubuh')) {
        scriptId = 'fondasi';
      } else if (technique.name.toLowerCase().includes('inquiry')) {
        scriptId = 'knowing';
      } else if (technique.name.toLowerCase().includes('triple')) {
        scriptId = 'triple';
      }

      ReleasingEngine.startReleasing(scriptId, {
        context: {
          type: 'technique',
          techniqueName: technique.name,
          areaId: currentArea.id
        },
        onComplete: (result) => {
          const areaData = getAreaData();
          areaData.totalReleases++;
          areaData.lastSession = new Date().toISOString();
          if (!areaData.completedTechniques.includes(index)) {
            areaData.completedTechniques.push(index);
          }
          saveSessionData();
          showToast('Teknik selesai! 🎉', 'success');
        }
      });
    }
  };

  // ==========================================================================
  // QUICK ACTIONS
  // ==========================================================================

  window.startQuickRelease = function() {
    if (typeof ReleasingEngine !== 'undefined') {
      ReleasingEngine.startReleasing('quick-basic', {
        context: {
          type: 'quick-release',
          areaId: currentArea.id
        },
        onComplete: (result) => {
          const areaData = getAreaData();
          areaData.totalReleases++;
          areaData.lastSession = new Date().toISOString();
          saveSessionData();
          showToast('Quick Release selesai! ⚡', 'success');
        }
      });
    }
  };

  window.startGuidedSession = function() {
    if (typeof ReleasingEngine !== 'undefined') {
      // For guided session, use triple welcoming
      ReleasingEngine.startReleasing('triple', {
        context: {
          type: 'guided-session',
          areaId: currentArea.id,
          areaName: currentArea.name
        },
        onComplete: (result) => {
          const areaData = getAreaData();
          areaData.totalReleases++;
          areaData.lastSession = new Date().toISOString();
          saveSessionData();
          showToast('Guided Session selesai! 🧘', 'success');
        }
      });
    }
  };

  // ==========================================================================
  // CALLBACKS
  // ==========================================================================

  function onReleaseComplete(result) {
    const areaData = getAreaData();
    areaData.totalReleases++;
    areaData.lastSession = new Date().toISOString();
    saveSessionData();
  }

  function onInsightSaved(data) {
    // Could save insights to a separate storage if needed
    console.log('Insight saved:', data.insight);
  }

  // ==========================================================================
  // UTILITY
  // ==========================================================================

  function showToast(message, type) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ==========================================================================
  // INITIALIZE ON DOM READY
  // ==========================================================================

  document.addEventListener('DOMContentLoaded', init);

})();
