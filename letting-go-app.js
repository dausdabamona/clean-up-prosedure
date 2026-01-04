// Letting Go App - JavaScript untuk Modul Letting Go
// Sedona Method Implementation

// ==================== STATE ====================
let currentTab = 'sesi1';
let sessionProgress = {
    sesi1: { completed: false, completedAt: null },
    sesi2: { completed: false, completedAt: null },
    sesi3: { completed: false, completedAt: null },
    sesi4: { completed: false, completedAt: null },
    sesi5: { completed: false, completedAt: null }
};

// Guided Releasing Tool State
let releasingState = {
    currentStep: 1,
    answers: {},
    totalCompleted: 0
};

// 4 Wanting Tool State
let wantingState = {
    selectedWanting: null,
    currentStep: 1,
    totalReleased: 0
};

// Triple Welcoming State
let tripleState = {
    currentStep: 1,
    totalCompleted: 0
};

// Story Release State
let storyState = {
    currentStep: 1,
    totalCompleted: 0
};

// Knowing Release State
let knowingState = {
    currentStep: 1,
    totalCompleted: 0
};

// Journal State
let insights = [];

// Quotes
const quotes = [
    { text: "Semua emosi hanyalah energi yang bisa dilepaskan.", author: "Hale Dwoskin" },
    { text: "Melepaskan adalah cara alami untuk kembali ke ketenangan.", author: "Lester Levenson" },
    { text: "Apa yang kamu tolak akan terus mengejarmu.", author: "Sedona Method" },
    { text: "Kebebasan ada di balik setiap pelepasan.", author: "Hale Dwoskin" },
    { text: "Kamu bukan emosimu, kamu adalah yang merasakannya.", author: "Lester Levenson" },
    { text: "Semakin kamu melepaskan, semakin ringan hidupmu.", author: "Sedona Method" },
    { text: "Welcoming adalah langkah pertama menuju kebebasan.", author: "Hale Dwoskin" },
    { text: "Biarkan pergi, dan lihat apa yang tersisa.", author: "Lester Levenson" }
];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    updateUI();
    updateStats();
    showRandomQuote();

    // Auto-save setiap 30 detik
    setInterval(saveToLocalStorage, 30000);
});

// ==================== LOCAL STORAGE ====================
function loadFromLocalStorage() {
    try {
        const savedProgress = localStorage.getItem('lettingGo_sessionProgress');
        if (savedProgress) {
            sessionProgress = JSON.parse(savedProgress);
        }

        const savedReleasing = localStorage.getItem('lettingGo_releasingState');
        if (savedReleasing) {
            const parsed = JSON.parse(savedReleasing);
            releasingState.totalCompleted = parsed.totalCompleted || 0;
        }

        const savedWanting = localStorage.getItem('lettingGo_wantingState');
        if (savedWanting) {
            const parsed = JSON.parse(savedWanting);
            wantingState.totalReleased = parsed.totalReleased || 0;
        }

        const savedTriple = localStorage.getItem('lettingGo_tripleState');
        if (savedTriple) {
            const parsed = JSON.parse(savedTriple);
            tripleState.totalCompleted = parsed.totalCompleted || 0;
        }

        const savedStory = localStorage.getItem('lettingGo_storyState');
        if (savedStory) {
            const parsed = JSON.parse(savedStory);
            storyState.totalCompleted = parsed.totalCompleted || 0;
        }

        const savedKnowing = localStorage.getItem('lettingGo_knowingState');
        if (savedKnowing) {
            const parsed = JSON.parse(savedKnowing);
            knowingState.totalCompleted = parsed.totalCompleted || 0;
        }

        const savedInsights = localStorage.getItem('lettingGo_insights');
        if (savedInsights) {
            insights = JSON.parse(savedInsights);
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('lettingGo_sessionProgress', JSON.stringify(sessionProgress));
        localStorage.setItem('lettingGo_releasingState', JSON.stringify({ totalCompleted: releasingState.totalCompleted }));
        localStorage.setItem('lettingGo_wantingState', JSON.stringify({ totalReleased: wantingState.totalReleased }));
        localStorage.setItem('lettingGo_tripleState', JSON.stringify({ totalCompleted: tripleState.totalCompleted }));
        localStorage.setItem('lettingGo_storyState', JSON.stringify({ totalCompleted: storyState.totalCompleted }));
        localStorage.setItem('lettingGo_knowingState', JSON.stringify({ totalCompleted: knowingState.totalCompleted }));
        localStorage.setItem('lettingGo_insights', JSON.stringify(insights));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// ==================== UI UPDATE ====================
function updateUI() {
    // Update session tabs completion status
    Object.keys(sessionProgress).forEach(sesi => {
        const tab = document.querySelector(`[onclick="switchTab('${sesi}')"]`);
        if (tab && sessionProgress[sesi].completed) {
            tab.classList.add('completed');
        }
    });

    // Update progress bar
    updateProgressBar();

    // Render insights
    renderInsights();
}

function updateProgressBar() {
    const completedCount = Object.values(sessionProgress).filter(s => s.completed).length;
    const percentage = (completedCount / 5) * 100;

    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
    if (progressText) {
        progressText.textContent = `${completedCount}/5 Sesi Selesai`;
    }
}

function updateStats() {
    const completedSessions = Object.values(sessionProgress).filter(s => s.completed).length;

    document.getElementById('statSessions').textContent = completedSessions;
    document.getElementById('statReleasing').textContent = releasingState.totalCompleted;
    document.getElementById('statInsights').textContent = insights.length;

    // Calculate total tools used
    const totalTools = releasingState.totalCompleted + wantingState.totalReleased +
                       tripleState.totalCompleted + storyState.totalCompleted +
                       knowingState.totalCompleted;
    document.getElementById('statTools').textContent = totalTools;
}

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');

    if (quoteText) quoteText.textContent = `"${quote.text}"`;
    if (quoteAuthor) quoteAuthor.textContent = `- ${quote.author}`;
}

// ==================== TAB NAVIGATION ====================
function switchTab(tabId) {
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Show/hide tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    currentTab = tabId;

    // Scroll to top of content
    activeContent?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==================== SESSION COMPLETION ====================
function markSessionComplete(sessionId) {
    sessionProgress[sessionId] = {
        completed: true,
        completedAt: new Date().toISOString()
    };

    saveToLocalStorage();
    updateUI();
    updateStats();

    showToast(`✅ Sesi ${sessionId.replace('sesi', '')} selesai!`, 'success');

    // Check if all sessions completed
    const allCompleted = Object.values(sessionProgress).every(s => s.completed);
    if (allCompleted) {
        setTimeout(() => {
            showToast('🎉 Selamat! Semua sesi Letting Go telah selesai!', 'success');
        }, 1500);
    }
}

// ==================== GUIDED RELEASING TOOL ====================
function nextReleasingStep() {
    const totalSteps = 7;

    if (releasingState.currentStep < totalSteps) {
        // Hide current step
        document.getElementById(`releasing-step-${releasingState.currentStep}`).classList.remove('active');

        // Show next step
        releasingState.currentStep++;
        document.getElementById(`releasing-step-${releasingState.currentStep}`).classList.add('active');

        // Update progress
        updateReleasingProgress();
    }
}

function prevReleasingStep() {
    if (releasingState.currentStep > 1) {
        // Hide current step
        document.getElementById(`releasing-step-${releasingState.currentStep}`).classList.remove('active');

        // Show previous step
        releasingState.currentStep--;
        document.getElementById(`releasing-step-${releasingState.currentStep}`).classList.add('active');

        // Update progress
        updateReleasingProgress();
    }
}

function updateReleasingProgress() {
    const percentage = (releasingState.currentStep / 7) * 100;
    const progressFill = document.querySelector('#releasing-tool .wizard-progress-fill');
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
}

function selectAnswer(step, answer) {
    releasingState.answers[step] = answer;

    // Visual feedback - highlight selected option
    const stepEl = document.getElementById(`releasing-step-${step}`);
    if (stepEl) {
        stepEl.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (btn.textContent.toLowerCase().includes(answer.toLowerCase())) {
                btn.classList.add('selected');
            }
        });
    }

    // Auto advance after selection
    setTimeout(() => {
        nextReleasingStep();
    }, 500);
}

function completeReleasing() {
    releasingState.totalCompleted++;
    saveToLocalStorage();
    updateStats();

    showToast('🎉 Releasing selesai! Rasakan keringanan dalam dirimu.', 'success');

    // Reset for next use
    setTimeout(() => {
        resetReleasingTool();
    }, 2000);
}

function resetReleasingTool() {
    releasingState.currentStep = 1;
    releasingState.answers = {};

    // Reset UI
    document.querySelectorAll('#releasing-tool .wizard-step').forEach((step, index) => {
        step.classList.remove('active');
        if (index === 0) step.classList.add('active');
    });

    // Reset selected options
    document.querySelectorAll('#releasing-tool .option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    updateReleasingProgress();
}

// ==================== 4 WANTING QUICK RELEASE ====================
function selectWanting(wanting) {
    wantingState.selectedWanting = wanting;

    // Visual feedback
    document.querySelectorAll('.wanting-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');

    // Show release section
    const releaseSection = document.getElementById('wanting-release-section');
    if (releaseSection) {
        releaseSection.style.display = 'block';
        releaseSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Update the wanting name in the release section
    const wantingNames = {
        'control': 'Kontrol',
        'approval': 'Persetujuan',
        'security': 'Keamanan',
        'separation': 'Keterpisahan'
    };

    const wantingDisplay = document.getElementById('selected-wanting-display');
    if (wantingDisplay) {
        wantingDisplay.textContent = wantingNames[wanting] || wanting;
    }
}

function startWantingRelease() {
    wantingState.currentStep = 1;

    // Show wizard
    const wizard = document.getElementById('wanting-wizard');
    if (wizard) {
        wizard.style.display = 'block';
        wizard.scrollIntoView({ behavior: 'smooth' });
    }

    // Show first step
    showWantingStep(1);
}

function showWantingStep(step) {
    document.querySelectorAll('#wanting-wizard .wizard-step').forEach((el, index) => {
        el.classList.remove('active');
        if (index === step - 1) {
            el.classList.add('active');
        }
    });

    // Update progress
    const progressFill = document.querySelector('#wanting-wizard .wizard-progress-fill');
    if (progressFill) {
        progressFill.style.width = ((step / 4) * 100) + '%';
    }
}

function wantingReleaseNext() {
    if (wantingState.currentStep < 4) {
        wantingState.currentStep++;
        showWantingStep(wantingState.currentStep);
    }
}

function wantingReleasePrev() {
    if (wantingState.currentStep > 1) {
        wantingState.currentStep--;
        showWantingStep(wantingState.currentStep);
    }
}

function completeWantingRelease() {
    wantingState.totalReleased++;
    saveToLocalStorage();
    updateStats();

    showToast(`🎉 Keinginan "${wantingState.selectedWanting}" berhasil dilepaskan!`, 'success');

    // Reset
    setTimeout(() => {
        resetWantingTool();
    }, 2000);
}

function resetWantingTool() {
    wantingState.selectedWanting = null;
    wantingState.currentStep = 1;

    // Reset UI
    document.querySelectorAll('.wanting-card').forEach(card => {
        card.classList.remove('selected');
    });

    const releaseSection = document.getElementById('wanting-release-section');
    if (releaseSection) {
        releaseSection.style.display = 'none';
    }

    const wizard = document.getElementById('wanting-wizard');
    if (wizard) {
        wizard.style.display = 'none';
    }

    showWantingStep(1);
}

// ==================== TRIPLE WELCOMING TOOL ====================
function nextTripleStep() {
    const totalSteps = 6;

    if (tripleState.currentStep < totalSteps) {
        document.getElementById(`triple-step-${tripleState.currentStep}`).classList.remove('active');
        tripleState.currentStep++;
        document.getElementById(`triple-step-${tripleState.currentStep}`).classList.add('active');
        updateTripleProgress();
    }
}

function prevTripleStep() {
    if (tripleState.currentStep > 1) {
        document.getElementById(`triple-step-${tripleState.currentStep}`).classList.remove('active');
        tripleState.currentStep--;
        document.getElementById(`triple-step-${tripleState.currentStep}`).classList.add('active');
        updateTripleProgress();
    }
}

function updateTripleProgress() {
    const percentage = (tripleState.currentStep / 6) * 100;
    const progressFill = document.querySelector('#triple-tool .wizard-progress-fill');
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
}

function completeTriple() {
    tripleState.totalCompleted++;
    saveToLocalStorage();
    updateStats();

    showToast('🎉 Triple Welcoming selesai! Anda telah menyambut sepenuhnya.', 'success');

    setTimeout(() => {
        resetTripleTool();
    }, 2000);
}

function resetTripleTool() {
    tripleState.currentStep = 1;

    document.querySelectorAll('#triple-tool .wizard-step').forEach((step, index) => {
        step.classList.remove('active');
        if (index === 0) step.classList.add('active');
    });

    updateTripleProgress();
}

// ==================== STORY RELEASE TOOL ====================
function nextStoryStep() {
    const totalSteps = 5;

    if (storyState.currentStep < totalSteps) {
        document.getElementById(`story-step-${storyState.currentStep}`).classList.remove('active');
        storyState.currentStep++;
        document.getElementById(`story-step-${storyState.currentStep}`).classList.add('active');
        updateStoryProgress();
    }
}

function prevStoryStep() {
    if (storyState.currentStep > 1) {
        document.getElementById(`story-step-${storyState.currentStep}`).classList.remove('active');
        storyState.currentStep--;
        document.getElementById(`story-step-${storyState.currentStep}`).classList.add('active');
        updateStoryProgress();
    }
}

function updateStoryProgress() {
    const percentage = (storyState.currentStep / 5) * 100;
    const progressFill = document.querySelector('#story-tool .wizard-progress-fill');
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
}

function completeStory() {
    storyState.totalCompleted++;
    saveToLocalStorage();
    updateStats();

    showToast('🎉 Cerita berhasil dilepaskan! Anda lebih bebas sekarang.', 'success');

    setTimeout(() => {
        resetStoryTool();
    }, 2000);
}

function resetStoryTool() {
    storyState.currentStep = 1;

    document.querySelectorAll('#story-tool .wizard-step').forEach((step, index) => {
        step.classList.remove('active');
        if (index === 0) step.classList.add('active');
    });

    // Clear textarea
    const textarea = document.querySelector('#story-tool textarea');
    if (textarea) textarea.value = '';

    updateStoryProgress();
}

// ==================== KNOWING RELEASE TOOL ====================
function nextKnowingStep() {
    const totalSteps = 5;

    if (knowingState.currentStep < totalSteps) {
        document.getElementById(`knowing-step-${knowingState.currentStep}`).classList.remove('active');
        knowingState.currentStep++;
        document.getElementById(`knowing-step-${knowingState.currentStep}`).classList.add('active');
        updateKnowingProgress();
    }
}

function prevKnowingStep() {
    if (knowingState.currentStep > 1) {
        document.getElementById(`knowing-step-${knowingState.currentStep}`).classList.remove('active');
        knowingState.currentStep--;
        document.getElementById(`knowing-step-${knowingState.currentStep}`).classList.add('active');
        updateKnowingProgress();
    }
}

function updateKnowingProgress() {
    const percentage = (knowingState.currentStep / 5) * 100;
    const progressFill = document.querySelector('#knowing-tool .wizard-progress-fill');
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
}

function completeKnowing() {
    knowingState.totalCompleted++;
    saveToLocalStorage();
    updateStats();

    showToast('🎉 "Tahu" berhasil dilepaskan! Anda terbuka untuk kemungkinan baru.', 'success');

    setTimeout(() => {
        resetKnowingTool();
    }, 2000);
}

function resetKnowingTool() {
    knowingState.currentStep = 1;

    document.querySelectorAll('#knowing-tool .wizard-step').forEach((step, index) => {
        step.classList.remove('active');
        if (index === 0) step.classList.add('active');
    });

    // Clear textarea
    const textarea = document.querySelector('#knowing-tool textarea');
    if (textarea) textarea.value = '';

    updateKnowingProgress();
}

// ==================== INSIGHT JOURNAL ====================
function addNewInsight() {
    const form = document.getElementById('insight-form');
    if (form) {
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function cancelInsight() {
    const form = document.getElementById('insight-form');
    if (form) {
        form.style.display = 'none';
    }

    // Clear form
    document.getElementById('insight-title').value = '';
    document.getElementById('insight-content').value = '';
    document.getElementById('insight-session').value = '';
}

function saveInsight() {
    const title = document.getElementById('insight-title').value.trim();
    const content = document.getElementById('insight-content').value.trim();
    const session = document.getElementById('insight-session').value;

    if (!title || !content) {
        showToast('Mohon isi judul dan isi insight', 'error');
        return;
    }

    const insight = {
        id: Date.now(),
        title: title,
        content: content,
        session: session,
        createdAt: new Date().toISOString()
    };

    insights.unshift(insight);
    saveToLocalStorage();
    renderInsights();
    updateStats();

    showToast('✅ Insight berhasil disimpan!', 'success');
    cancelInsight();
}

function renderInsights() {
    const container = document.getElementById('insights-list');
    if (!container) return;

    if (insights.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>📝 Belum ada insight yang dicatat.</p>
                <p>Klik "Tambah Insight Baru" untuk mulai mencatat.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = insights.map(insight => `
        <div class="insight-card" data-id="${insight.id}">
            <div class="insight-header">
                <h4>${escapeHtml(insight.title)}</h4>
                <span class="insight-date">${formatDate(insight.createdAt)}</span>
            </div>
            <p class="insight-content">${escapeHtml(insight.content)}</p>
            ${insight.session ? `<span class="insight-session">Sesi: ${insight.session}</span>` : ''}
            <div class="insight-actions">
                <button onclick="deleteInsight(${insight.id})" class="btn-small btn-danger">Hapus</button>
            </div>
        </div>
    `).join('');
}

function deleteInsight(id) {
    if (confirm('Yakin ingin menghapus insight ini?')) {
        insights = insights.filter(i => i.id !== id);
        saveToLocalStorage();
        renderInsights();
        updateStats();
        showToast('Insight dihapus', 'info');
    }
}

function clearAllInsights() {
    if (confirm('Yakin ingin menghapus SEMUA insight? Tindakan ini tidak bisa dibatalkan.')) {
        insights = [];
        saveToLocalStorage();
        renderInsights();
        updateStats();
        showToast('Semua insight dihapus', 'info');
    }
}

// ==================== UTILITY FUNCTIONS ====================
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('id-ID', options);
}

// ==================== NAVIGATION ====================
function goBack() {
    window.location.href = 'sedona-app.html';
}

// ==================== EXPORT FOR TESTING ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sessionProgress,
        releasingState,
        wantingState,
        tripleState,
        storyState,
        knowingState,
        insights
    };
}
