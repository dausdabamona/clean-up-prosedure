// ==========================================================================
// 14 DAYS FREE FROM RESISTANCE - APP LOGIC
// Sedona Method - Releasing Resistance Program
// ==========================================================================

// API URL
const RESISTANCE_API_URL = 'https://script.google.com/macros/s/AKfycbxyql2BYExoYNXm-TwYibkw7jDXozNbWqeeoOmw-TNuX8gqMyW7P4Q4qD2iBFpM8odDZQ/exec';

// Storage Key
const STORAGE_KEY = '14days_resistance_data';

// ==========================================================================
// DATA STRUCTURES
// ==========================================================================

const defaultData = {
  currentDay: 1,
  startDate: null,
  sessions: [],
  dayProgress: {},
  settings: {
    timerDuration: 60,
    autoAdvance: true,
    theme: 'light'
  },
  stats: {
    totalSessions: 0,
    lastActiveDate: null,
    streak: 0,
    bestStreak: 0
  }
};

const sessionTemplate = {
  id: '',
  date: '',
  day: 1,
  area: '',
  description: '',
  resistanceToDoRating: 0,
  resistanceNotToDoRating: 0,
  beforeRating: 0,
  afterRating: 0,
  notes: '',
  completed: false,
  duration: 0
};

// ==========================================================================
// CONTENT DATA
// ==========================================================================

const quotes = [
  "Apapun yang kamu tolak akan menolak balik.",
  "Effort is ego in action. — Lester Levenson",
  "Cintai, cintai, cintai, dan kamu akan bahagia, sehat, dan sejahtera. — Lester",
  "Tidak ada yang salah dengan saat ini, kecuali kamu memikirkannya. — Sailor Bob",
  "Resistensi hanya perasaan. Tidak perlu dipercayai, dijalani, diatasi, atau menghambat.",
  "Semakin kamu menolak, semakin fokus pikiran pada hal itu, semakin besar bertahan.",
  "Pikiran adalah majikan yang buruk, tapi pelayan yang luar biasa.",
  "Yang kamu tolak akan bertahan. Yang kamu terima akan larut.",
  "Kebebasan adalah sifat alami kita. Resistensi hanya awan yang menutupi matahari.",
  "Lepaskan kebutuhan untuk mengontrol, dan temukan kedamaian.",
  "Kesadaran tidak terpengaruh oleh apapun yang muncul di dalamnya.",
  "Tidak ada yang perlu diperbaiki. Hanya perlu dilepaskan."
];

const areas = [
  { id: 'general', name: 'Umum', icon: '🌟', description: 'Resistensi umum dalam kehidupan sehari-hari' },
  { id: 'uang', name: 'Uang', icon: '💰', day: 3, description: 'Resistensi terhadap keuangan, kemakmuran, kelimpahan' },
  { id: 'hubungan', name: 'Hubungan', icon: '💑', day: 4, description: 'Resistensi dalam relasi, komunikasi, kedekatan' },
  { id: 'tubuh', name: 'Tubuh', icon: '🧘', day: 5, description: 'Resistensi terhadap kesehatan, penampilan, sensasi fisik' },
  { id: 'pikiran', name: 'Pikiran', icon: '🧠', day: 6, description: 'Resistensi terhadap pikiran, kepercayaan, mental' },
  { id: 'kebiasaan', name: 'Kebiasaan', icon: '🔄', day: 8, description: 'Resistensi terhadap perubahan kebiasaan, pola' },
  { id: 'usaha', name: 'Usaha', icon: '💪', day: 10, description: 'Resistensi terhadap effort, perjuangan, kerja keras' },
  { id: 'waktu', name: 'Waktu', icon: '⏰', day: 12, description: 'Resistensi terhadap waktu, deadline, menunggu' },
  { id: 'cinta', name: 'Cinta', icon: '❤️', day: 13, description: 'Resistensi terhadap memberi/menerima cinta' }
];

const daysContent = [
  {
    day: 1,
    title: 'Pengenalan Resistensi (Part 1)',
    focus: 'general',
    description: 'Memahami apa itu resistensi dan bagaimana ia muncul dalam kehidupan kita.',
    keyPoints: [
      'Resistensi adalah penolakan terhadap apa yang ada',
      'Resistensi = Keinginan mengontrol',
      'Apa yang ditolak akan bertahan'
    ]
  },
  {
    day: 2,
    title: 'Pengenalan Resistensi (Part 2)',
    focus: 'general',
    description: 'Mendalami mekanisme resistensi dan cara melepaskannya.',
    keyPoints: [
      'Resistensi muncul di KEDUA sisi (melakukan & tidak melakukan)',
      'Apa yang diterima akan larut',
      'Keberadaan tidak terpengaruh oleh resistensi'
    ]
  },
  {
    day: 3,
    title: 'Resistensi terhadap Uang',
    focus: 'uang',
    description: 'Melepaskan resistensi terhadap keuangan dan kelimpahan.',
    keyPoints: [
      'Resistensi terhadap memiliki uang',
      'Resistensi terhadap tidak memiliki uang',
      'Menyambut kelimpahan sebagai sifat alami'
    ]
  },
  {
    day: 4,
    title: 'Resistensi dalam Hubungan',
    focus: 'hubungan',
    description: 'Melepaskan resistensi dalam relasi dan koneksi dengan orang lain.',
    keyPoints: [
      'Resistensi terhadap kedekatan',
      'Resistensi terhadap jarak',
      'Menerima orang lain apa adanya'
    ]
  },
  {
    day: 5,
    title: 'Resistensi terhadap Tubuh',
    focus: 'tubuh',
    description: 'Melepaskan resistensi terhadap tubuh dan sensasi fisik.',
    keyPoints: [
      'Resistensi terhadap sensasi tidak nyaman',
      'Resistensi terhadap penyakit/kesehatan',
      'Menyambut tubuh apa adanya'
    ]
  },
  {
    day: 6,
    title: 'Resistensi terhadap Pikiran',
    focus: 'pikiran',
    description: 'Melepaskan resistensi terhadap pikiran dan aktivitas mental.',
    keyPoints: [
      'Pikiran bukanlah musuh',
      'Tidak perlu mengontrol pikiran',
      'Membiarkan pikiran datang dan pergi'
    ]
  },
  {
    day: 7,
    title: 'Menyambut Kemudahan',
    focus: 'general',
    description: 'Mengintegrasikan kemudahan dan pertanyaan powerful.',
    keyPoints: [
      'Kemudahan adalah sifat alami',
      'Pertanyaan powerful untuk pembebasan',
      'Istirahat sebagai keberadaan'
    ]
  },
  {
    day: 8,
    title: 'Resistensi terhadap Kebiasaan',
    focus: 'kebiasaan',
    description: 'Melepaskan resistensi terhadap kebiasaan dengan Holistic Release.',
    keyPoints: [
      'Kebiasaan adalah pola yang tersimpan',
      'Holistic releasing approach',
      'Melepaskan kebutuhan untuk berubah'
    ]
  },
  {
    day: 9,
    title: 'Menyadari Aliran',
    focus: 'general',
    description: 'Group coaching - menyadari aliran kehidupan.',
    keyPoints: [
      'Kehidupan mengalir dengan sendirinya',
      'Tidak ada yang perlu dipaksa',
      'Menyerah pada aliran'
    ]
  },
  {
    day: 10,
    title: 'Resistensi terhadap Usaha',
    focus: 'usaha',
    description: 'Melepaskan resistensi terhadap usaha dan perjuangan.',
    keyPoints: [
      'Effort is ego in action',
      'Melepaskan kebutuhan untuk berjuang',
      'Tindakan tanpa resistensi'
    ]
  },
  {
    day: 11,
    title: 'Integrasi Pertengahan',
    focus: 'general',
    description: 'Group coaching - integrasi pembelajaran.',
    keyPoints: [
      'Review perjalanan sejauh ini',
      'Mengintegrasikan insight',
      'Memperdalam praktik'
    ]
  },
  {
    day: 12,
    title: 'Resistensi terhadap Waktu',
    focus: 'waktu',
    description: 'Melepaskan resistensi terhadap waktu.',
    keyPoints: [
      'Waktu adalah konsep pikiran',
      'Hanya ada saat ini',
      'Melepaskan urgency dan waiting'
    ]
  },
  {
    day: 13,
    title: 'Cinta sebagai Sifat Alami',
    focus: 'cinta',
    description: 'Menemukan cinta sebagai sifat alami keberadaan.',
    keyPoints: [
      'Cinta adalah dasar keberadaan',
      'Melepaskan resistensi terhadap cinta',
      'Memberi dan menerima cinta tanpa syarat'
    ]
  },
  {
    day: 14,
    title: 'Integrasi & Penutup',
    focus: 'general',
    description: 'Integrasi akhir dan melanjutkan perjalanan.',
    keyPoints: [
      'Merayakan perjalanan',
      'Integrasi semua pembelajaran',
      'Melanjutkan praktik sehari-hari'
    ]
  }
];

const principles = [
  {
    title: 'Resistensi = Keinginan Mengontrol',
    description: 'Setiap resistensi pada dasarnya adalah keinginan untuk mengontrol - mengontrol apa yang terjadi, apa yang dirasakan, atau apa yang dipikirkan.',
    icon: '🎮'
  },
  {
    title: 'Apa yang Ditolak Bertahan',
    description: 'Semakin kita menolak sesuatu, semakin besar energi yang kita berikan padanya, dan semakin ia bertahan.',
    icon: '🔄'
  },
  {
    title: 'Apa yang Diterima Larut',
    description: 'Ketika kita menyambut dan menerima apa yang ada, ia kehilangan kekuatannya dan secara alami larut.',
    icon: '💧'
  },
  {
    title: 'Resistensi Ada di Kedua Sisi',
    description: 'Resistensi muncul baik terhadap melakukan sesuatu MAUPUN tidak melakukannya. Periksa kedua sisi.',
    icon: '⚖️'
  },
  {
    title: 'Keberadaan Tidak Terpengaruh',
    description: 'Siapa yang kita sebenarnya (kesadaran/keberadaan) tidak pernah terpengaruh oleh resistensi yang muncul.',
    icon: '✨'
  }
];

// ==========================================================================
// STORAGE FUNCTIONS
// ==========================================================================

function getData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultData, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Error loading data:', e);
  }
  return { ...defaultData };
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving data:', e);
  }
}

function resetData() {
  localStorage.removeItem(STORAGE_KEY);
  return { ...defaultData };
}

// ==========================================================================
// SESSION MANAGEMENT
// ==========================================================================

function createSession(day) {
  return {
    ...sessionTemplate,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    day: day
  };
}

function saveSession(session) {
  const data = getData();
  session.completed = true;
  data.sessions.push(session);
  data.stats.totalSessions++;
  data.stats.lastActiveDate = session.date;

  // Update streak
  updateStreak(data);

  saveData(data);
  return session;
}

function updateDayProgress(day, status) {
  const data = getData();
  data.dayProgress[`day${day}`] = status;

  // Update currentDay if completing
  if (status === 'completed' && day >= data.currentDay) {
    data.currentDay = Math.min(day + 1, 14);
  }

  saveData(data);
}

function getDayProgress(day) {
  const data = getData();
  return data.dayProgress[`day${day}`] || 'not-started';
}

function getSessionsForDay(day) {
  const data = getData();
  return data.sessions.filter(s => s.day === day);
}

// ==========================================================================
// STATS & STREAK
// ==========================================================================

function updateStreak(data) {
  const today = new Date().toDateString();
  const lastActive = data.stats.lastActiveDate ? new Date(data.stats.lastActiveDate).toDateString() : null;

  if (!lastActive) {
    data.stats.streak = 1;
  } else if (lastActive === today) {
    // Same day, no change
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastActive === yesterday.toDateString()) {
      data.stats.streak++;
    } else {
      data.stats.streak = 1;
    }
  }

  if (data.stats.streak > data.stats.bestStreak) {
    data.stats.bestStreak = data.stats.streak;
  }
}

function getStats() {
  const data = getData();
  const completedDays = Object.values(data.dayProgress).filter(s => s === 'completed').length;

  return {
    totalSessions: data.stats.totalSessions,
    completedDays: completedDays,
    currentDay: data.currentDay,
    streak: data.stats.streak,
    bestStreak: data.stats.bestStreak,
    lastActiveDate: data.stats.lastActiveDate,
    progressPercentage: Math.round((completedDays / 14) * 100)
  };
}

// ==========================================================================
// UI RENDERING FUNCTIONS
// ==========================================================================

function renderDayCards(containerId = 'days-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = getData();

  container.innerHTML = daysContent.map(dayInfo => {
    const status = data.dayProgress[`day${dayInfo.day}`] || 'not-started';
    const area = areas.find(a => a.id === dayInfo.focus);
    const icon = area ? area.icon : '📖';

    let statusClass = '';
    let statusText = '⭕ Belum Dimulai';
    let buttonText = 'Mulai Sesi';

    if (status === 'completed') {
      statusClass = 'completed';
      statusText = '✅ Selesai';
      buttonText = 'Ulangi Sesi';
    } else if (status === 'in-progress') {
      statusClass = 'in-progress';
      statusText = '🔄 Sedang Berlangsung';
      buttonText = 'Lanjutkan';
    }

    const sessionsCount = getSessionsForDay(dayInfo.day).length;

    return `
      <div class="day-card ${statusClass}" data-day="${dayInfo.day}">
        <div class="day-header">
          <span class="day-icon">${icon}</span>
          <span class="day-number">Hari ${dayInfo.day}</span>
        </div>
        <h3 class="day-title">${dayInfo.title}</h3>
        <p class="day-description">${dayInfo.description}</p>
        <div class="day-footer">
          <span class="day-status">${statusText}</span>
          ${sessionsCount > 0 ? `<span class="sessions-count">${sessionsCount}x sesi</span>` : ''}
        </div>
        <button onclick="startSession(${dayInfo.day})" class="btn btn-primary btn-block">
          ${buttonText}
        </button>
      </div>
    `;
  }).join('');
}

function renderProgress(barId = 'progress-bar', textId = 'progress-text') {
  const stats = getStats();

  const bar = document.getElementById(barId);
  const text = document.getElementById(textId);

  if (bar) {
    bar.style.width = `${stats.progressPercentage}%`;
  }

  if (text) {
    text.textContent = `${stats.completedDays}/14 hari selesai (${stats.progressPercentage}%)`;
  }
}

function renderStats(containerId = 'stats-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const stats = getStats();

  container.innerHTML = `
    <div class="stat-item">
      <div class="stat-value">${stats.completedDays}</div>
      <div class="stat-label">Hari Selesai</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${stats.totalSessions}</div>
      <div class="stat-label">Total Sesi</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${stats.streak}</div>
      <div class="stat-label">Streak Hari</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${stats.bestStreak}</div>
      <div class="stat-label">Best Streak</div>
    </div>
  `;
}

function renderQuote(elementId = 'quote') {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = `"${getRandomQuote()}"`;
  }
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// ==========================================================================
// NAVIGATION
// ==========================================================================

function startSession(day) {
  sessionStorage.setItem('currentSessionDay', day);
  updateDayProgress(day, 'in-progress');
  window.location.href = 'resistance-session.html';
}

function goToMain() {
  window.location.href = '14-days-resistance.html';
}

function goToHome() {
  window.location.href = 'sedona-app.html';
}

// ==========================================================================
// TIMER FUNCTIONS
// ==========================================================================

let timerInterval = null;
let timerSeconds = 60;
let timerCallback = null;

function startTimer(duration, onComplete) {
  stopTimer();
  timerSeconds = duration;
  timerCallback = onComplete;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 0) {
      stopTimer();
      if (timerCallback) timerCallback();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function pauseTimer() {
  stopTimer();
}

function resumeTimer(onComplete) {
  if (timerSeconds > 0) {
    timerCallback = onComplete;
    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();

      if (timerSeconds <= 0) {
        stopTimer();
        if (timerCallback) timerCallback();
      }
    }, 1000);
  }
}

function updateTimerDisplay() {
  const timerElement = document.getElementById('timer');
  if (timerElement) {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}

function skipTimer() {
  stopTimer();
  timerSeconds = 0;
  updateTimerDisplay();
  if (timerCallback) timerCallback();
}

// ==========================================================================
// SESSION WIZARD
// ==========================================================================

let currentStep = 1;
const totalSteps = 8;
let currentSession = null;
let sessionStartTime = null;

function initSessionWizard() {
  const day = parseInt(sessionStorage.getItem('currentSessionDay')) || 1;
  const dayInfo = daysContent.find(d => d.day === day);

  currentSession = createSession(day);
  sessionStartTime = Date.now();

  // Update UI
  const titleEl = document.getElementById('session-title');
  if (titleEl && dayInfo) {
    titleEl.textContent = `Hari ${day}: ${dayInfo.title}`;
  }

  const descEl = document.getElementById('session-description');
  if (descEl && dayInfo) {
    descEl.textContent = dayInfo.description;
  }

  // Render area options for this day
  renderAreaOptions(dayInfo.focus);

  // Show first step
  showStep(1);
}

function renderAreaOptions(defaultFocus) {
  const container = document.getElementById('area-options');
  if (!container) return;

  container.innerHTML = areas.map(area => `
    <label class="area-option ${area.id === defaultFocus ? 'selected' : ''}" data-area="${area.id}">
      <input type="radio" name="area" value="${area.id}" ${area.id === defaultFocus ? 'checked' : ''}>
      <span class="area-icon">${area.icon}</span>
      <span class="area-name">${area.name}</span>
    </label>
  `).join('');

  // Add click handlers
  container.querySelectorAll('.area-option').forEach(option => {
    option.addEventListener('click', function() {
      container.querySelectorAll('.area-option').forEach(o => o.classList.remove('selected'));
      this.classList.add('selected');
      this.querySelector('input').checked = true;
    });
  });
}

function showStep(step) {
  // Hide all steps
  document.querySelectorAll('.wizard-step').forEach(el => {
    el.classList.remove('active');
    el.style.display = 'none';
  });

  // Show current step
  const stepEl = document.getElementById(`step-${step}`);
  if (stepEl) {
    stepEl.classList.add('active');
    stepEl.style.display = 'block';
  }

  // Update progress indicator
  updateStepIndicator(step);

  currentStep = step;

  // Step-specific initialization
  initStepContent(step);
}

function updateStepIndicator(step) {
  const indicator = document.getElementById('step-indicator');
  if (indicator) {
    indicator.textContent = `Langkah ${step} dari ${totalSteps}`;
  }

  // Update progress dots
  document.querySelectorAll('.step-dot').forEach((dot, index) => {
    dot.classList.remove('active', 'completed');
    if (index + 1 < step) {
      dot.classList.add('completed');
    } else if (index + 1 === step) {
      dot.classList.add('active');
    }
  });
}

function initStepContent(step) {
  const data = getData();
  const timerDuration = data.settings.timerDuration || 60;

  switch(step) {
    case 1: // STOP
      startTimer(timerDuration, () => {
        enableNextButton(1);
      });
      break;

    case 4: // SAMBUT
      showQuestionsSequentially('step-4');
      break;

    case 5: // LEPASKAN
      showQuestionsSequentially('step-5');
      break;

    case 6: // ISTIRAHAT
      startTimer(timerDuration, () => {
        enableNextButton(6);
      });
      break;

    case 7: // INQUIRY
      showQuestionsSequentially('step-7');
      break;

    case 8: // HASIL
      updateResultsComparison();
      break;
  }
}

function enableNextButton(step) {
  const btn = document.querySelector(`#step-${step} .btn-next`);
  if (btn) {
    btn.disabled = false;
    btn.classList.add('pulse');
  }
}

function showQuestionsSequentially(stepId) {
  const stepEl = document.getElementById(stepId);
  if (!stepEl) return;

  const questions = stepEl.querySelectorAll('.question-reveal');
  let index = 0;

  // Hide all first
  questions.forEach(q => {
    q.style.opacity = '0';
    q.style.transform = 'translateY(20px)';
  });

  const showNext = () => {
    if (index < questions.length) {
      const q = questions[index];
      q.style.transition = 'all 0.5s ease';
      q.style.opacity = '1';
      q.style.transform = 'translateY(0)';
      index++;
      setTimeout(showNext, 3000);
    }
  };

  setTimeout(showNext, 500);
}

function nextStep() {
  // Save current step data
  saveStepData(currentStep);

  if (currentStep < totalSteps) {
    showStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 1) {
    stopTimer();
    showStep(currentStep - 1);
  }
}

function saveStepData(step) {
  switch(step) {
    case 2: // FOKUS
      const areaInput = document.querySelector('input[name="area"]:checked');
      if (areaInput) {
        currentSession.area = areaInput.value;
      }
      currentSession.description = document.getElementById('focus-description')?.value || '';
      currentSession.beforeRating = parseInt(document.getElementById('before-rating')?.value) || 5;
      break;

    case 3: // KEDUA SISI
      currentSession.resistanceToDoRating = parseInt(document.getElementById('resistance-to-do')?.value) || 0;
      currentSession.resistanceNotToDoRating = parseInt(document.getElementById('resistance-not-to-do')?.value) || 0;
      break;
  }
}

function updateResultsComparison() {
  const beforeEl = document.getElementById('result-before');
  const afterInput = document.getElementById('after-rating');

  if (beforeEl) {
    beforeEl.textContent = currentSession.beforeRating || 5;
  }

  if (afterInput) {
    afterInput.value = Math.max(1, (currentSession.beforeRating || 5) - 2);
  }
}

function completeSession() {
  // Save final data
  currentSession.afterRating = parseInt(document.getElementById('after-rating')?.value) || 0;
  currentSession.notes = document.getElementById('session-notes')?.value || '';
  currentSession.duration = Math.round((Date.now() - sessionStartTime) / 1000);

  // Save to storage
  saveSession(currentSession);
  updateDayProgress(currentSession.day, 'completed');

  // Show completion message
  showToast('Sesi selesai! Progress tersimpan.', 'success');

  // Redirect after delay
  setTimeout(() => {
    window.location.href = '14-days-resistance.html';
  }, 1500);
}

function repeatSession() {
  // Reset and start over
  currentSession = createSession(currentSession.day);
  sessionStartTime = Date.now();
  showStep(1);
}

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================

function showToast(message, type = 'info') {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => toast.classList.add('show'), 10);

  // Remove after delay
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function updateSliderValue(sliderId, displayId) {
  const slider = document.getElementById(sliderId);
  const display = document.getElementById(displayId);
  if (slider && display) {
    display.textContent = slider.value;
  }
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Main page initialization
  if (document.getElementById('days-container')) {
    renderDayCards();
    renderProgress();
    renderStats();
    renderQuote();
  }

  // Session page initialization
  if (document.getElementById('session-wizard')) {
    initSessionWizard();
  }
});

// Export for use in HTML
window.ResistanceApp = {
  getData,
  saveData,
  getStats,
  startSession,
  goToMain,
  goToHome,
  nextStep,
  prevStep,
  completeSession,
  repeatSession,
  skipTimer,
  updateSliderValue,
  showToast,
  areas,
  daysContent,
  principles,
  quotes
};
