// Letting Go App - Sedona Method Implementation
// Complete Guided Releasing System

// ==================== STATE ====================
let stats = {
  sessions: 0,
  releases: 0,
  streak: 0,
  insights: 0,
  lastDate: null
};

let currentSession = null;
let returnContext = null;

// ==================== GUIDED SCRIPTS ====================
const guidedScripts = {
  'fondasi': {
    title: 'Releasing Dasar',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks dulu.', duration: 4000 },
      { type: 'instruction', text: 'Izinkan saat ini menjadi seperti apa adanya...', subtext: 'Tanpa perlu diubah.', duration: 5000 },
      { type: 'input', text: 'Pikirkan satu situasi yang rasanya mengganggu kamu...', subtext: 'Satu aja ya, jangan bikin list.', placeholder: 'Tuliskan situasi yang mengganggu...' },
      { type: 'choice', text: 'Perhatikan emosi apa yang muncul?', options: ['😠 Marah', '😢 Sedih', '😞 Kecewa', '😰 Cemas', '😨 Takut', '🤔 Lainnya'] },
      { type: 'choice', text: 'Di mana kamu merasakannya di tubuh?', options: ['💗 Dada', '🫄 Perut', '🧠 Kepala', '💪 Pundak', '🫁 Sesak', '❓ Lainnya'] },
      { type: 'instruction', text: 'Bisakah kamu hanya memperhatikannya saja?', subtext: 'Jangan dorong, jangan ubah. Perhatikan saja.', duration: 5000 },
      { type: 'instruction', text: 'Bisakah kamu menyambutnya? Mengizinkannya hadir?', subtext: 'Biarkan perasaan itu ada di sini.', duration: 5000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya?', subtext: 'Ingat, ini pertanyaan. Jawab jujur.' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?', subtext: 'Mendingan pegangan terus atau bebas?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Biarkan semua terurai...', duration: 6000 },
      { type: 'instruction', text: 'Perhatikan apa yang kamu rasakan sekarang.', subtext: 'Mungkin lebih ringan.', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya lagi?', subtext: 'Ulangi sekali lagi.' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: '🎉 Selamat!', subtext: 'Kamu telah menyelesaikan satu sesi releasing.' },
      { type: 'insight', text: 'Ada insight yang ingin dicatat?', placeholder: 'Tulis insight kamu...' }
    ]
  },

  'wanting-control': {
    title: 'Release Wanting Control',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Izinkan saat ini apa adanya.', duration: 4000 },
      { type: 'input', text: 'Pikirkan sesuatu yang ingin kamu KONTROL...', subtext: 'Atau di mana kamu merasa DIKONTROL.', placeholder: 'Tuliskan situasi...' },
      { type: 'instruction', text: 'Bisakah kamu menyambut keinginan itu?', subtext: 'Keinginan untuk mengontrol atau dikontrol...', duration: 5000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk mengontrol?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Fokus lagi pada hal yang sama...', subtext: 'Di mana kamu ingin mengontrol...', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekali lagi...', duration: 3000 },
      { type: 'yesno', text: 'Bisakah kamu membiarkannya pergi?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: '🎉 Wanting Control Released!', subtext: 'Semakin lepas kontrol, semakin merasa memegang kendali.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  'wanting-approval': {
    title: 'Release Wanting Approval',
    steps: [
      { type: 'instruction', text: 'Izinkan diri kamu melihat interaksi sosial kamu...', duration: 4000 },
      { type: 'input', text: 'Di mana kamu menginginkan CINTA atau PERSETUJUAN?', subtext: 'Atau menghindari cinta?', placeholder: 'Tuliskan situasi...' },
      { type: 'instruction', text: 'Bisakah kamu hadir dengan itu?', subtext: 'Keinginan untuk dicintai/disetujui...', duration: 5000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Fokus lagi...', duration: 3000 },
      { type: 'yesno', text: 'Bisakah kamu membebaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Perhatikan di mana cinta SUDAH kamu miliki...', subtext: 'Untuk diri sendiri dan orang lain...', duration: 5000 },
      { type: 'instruction', text: 'Izinkan semuanya MELUAS...', duration: 4000 },
      { type: 'completion', text: '🎉 Wanting Approval Released!', subtext: 'Sumber cinta sudah ada di dalam diri kamu.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  'wanting-security': {
    title: 'Release Wanting Security',
    steps: [
      { type: 'instruction', text: 'Saat ini...', subtext: 'Bisakah kamu menyambut keinginan untuk KEAMANAN?', duration: 4000 },
      { type: 'input', text: 'Pikirkan situasi yang memunculkan rasa takut/cemas...', placeholder: 'Tuliskan situasi...' },
      { type: 'instruction', text: 'Bisakah kamu menyambut keinginan untuk keamanan?', subtext: 'Atau keinginan untuk mati...', duration: 5000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Fokus lagi...', duration: 3000 },
      { type: 'yesno', text: 'Bisakah kamu membebaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekali lagi...', duration: 3000 },
      { type: 'yesno', text: 'Bisakah kamu membiarkannya pergi?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: '🎉 Wanting Security Released!', subtext: 'Keamanan absolut datangnya dari dalam.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  'wanting-separation': {
    title: 'Release Wanting Separation',
    steps: [
      { type: 'instruction', text: 'Izinkan diri kamu meninjau dunia dan pikiran...', duration: 4000 },
      { type: 'input', text: 'Di mana kamu ingin BERPISAH atau MENYATU?', placeholder: 'Tuliskan situasi...' },
      { type: 'instruction', text: 'Bisakah kamu hadir dengannya?', duration: 5000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Fokus lagi...', duration: 3000 },
      { type: 'yesno', text: 'Bisakah kamu membebaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekali lagi...', duration: 3000 },
      { type: 'yesno', text: 'Bisakah kamu membiarkannya pergi?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: '🎉 Wanting Separation Released!', subtext: 'Kamu sudah pulang ke rumah yang tidak pernah ditinggalkan.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  'wanting-all': {
    title: 'Release Semua Wanting',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 4000 },
      { type: 'input', text: 'Pikirkan situasi yang mengganggu...', placeholder: 'Tuliskan situasi...' },
      { type: 'instruction', text: 'Apakah ada keinginan untuk MENGONTROL?', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan wanting control?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Apakah ada keinginan untuk DICINTAI/DISETUJUI?', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan wanting approval?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Apakah ada keinginan untuk AMAN/SELAMAT?', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan wanting security?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Apakah ada keinginan untuk BERPISAH/MENYATU?', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan wanting separation?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', duration: 5000 },
      { type: 'completion', text: '🎉 Semua Wanting Released!', subtext: 'Semakin lepas keinginan, semakin MEMILIKI.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  'triple': {
    title: 'Triple Welcoming',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Izinkan saat ini apa adanya.', duration: 4000 },
      { type: 'input', text: 'Fokus pada situasi yang mengganggu...', placeholder: 'Tuliskan situasi...' },
      { type: 'choice', text: 'Layer 1: Emosi apa yang muncul?', options: ['😠 Marah', '😢 Sedih', '😨 Takut', '😞 Kecewa', '😰 Cemas', '🤔 Lainnya'] },
      { type: 'instruction', text: 'Izinkan emosi itu hadir...', subtext: 'Sambut aja.', duration: 4000 },
      { type: 'choice', text: 'Layer 2: Wanting apa yang ada?', options: ['🎮 Control', '❤️ Approval', '🛡️ Security', '🔗 Separation'] },
      { type: 'instruction', text: 'Izinkan wanting itu hadir...', duration: 4000 },
      { type: 'yesno', text: 'Layer 3: Apakah ada RASA KEAKUAN?', subtext: 'Ini tentang KAMU?' },
      { type: 'instruction', text: 'Izinkan rasa keakuan itu hadir...', duration: 4000 },
      { type: 'instruction', text: 'Biarkan ketiganya hadir bersamaan...', subtext: 'Emosi, Wanting, Keakuan.', duration: 5000 },
      { type: 'instruction', text: 'Sekarang, MUNDUR selangkah...', subtext: 'Biarkan terurai sendiri.', duration: 5000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan semuanya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Apakah kamu EMOSI itu, atau yang SADAR akan emosi?', duration: 5000 },
      { type: 'completion', text: '🎉 Triple Welcoming Selesai!', subtext: 'Kesadaran tidak sama dengan emosi.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  'story': {
    title: 'Melepas Cerita',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', duration: 4000 },
      { type: 'input', text: 'Cerita apa yang kamu ceritakan ke diri sendiri?', subtext: 'Yang tidak kamu sukai atau menghambat.', placeholder: 'Tuliskan cerita...' },
      { type: 'instruction', text: 'Bisakah kamu menyambutnya?', subtext: 'Hadir saja dengan cerita itu.', duration: 5000 },
      { type: 'choice', text: 'Ada wanting apa di situ?', options: ['🎮 Control', '❤️ Approval', '🛡️ Security', '🔗 Separation'] },
      { type: 'instruction', text: 'Izinkan wanting itu hadir...', duration: 4000 },
      { type: 'yesno', text: 'Apakah itu terasa seperti CERITA KAMU?', subtext: 'Tentang kamu?' },
      { type: 'instruction', text: 'Izinkan rasa keakuan itu hadir...', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk PERCAYA cerita itu?' },
      { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk JADI ORANG dalam cerita?' },
      { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk MEMBUAT CERITA itu NYATA?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Apakah kamu orang di cerita itu?', subtext: 'Atau hanya ada KEBERADAAN?', duration: 5000 },
      { type: 'completion', text: '🎉 Cerita Dilepaskan!', subtext: 'Cerita bukan fakta. Cerita tidak terjadi saat ini.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  'knowing': {
    title: 'Melepas "Tahu"',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', duration: 4000 },
      { type: 'input', text: 'Apa yang kamu pikir kamu TAHU?', subtext: 'Tentang masalah atau diri kamu.', placeholder: 'Tuliskan apa yang kamu tahu...' },
      { type: 'instruction', text: 'Bisakah kamu menyambut rasa tahu itu?', duration: 5000 },
      { type: 'choice', text: 'Ada wanting apa?', options: ['🎮 Control', '❤️ Approval', '🛡️ Security', '🔗 Separation'] },
      { type: 'instruction', text: 'Izinkan wanting itu hadir...', duration: 4000 },
      { type: 'yesno', text: 'Apakah ada SESEORANG yang tahu?', subtext: 'Rasa keakuan?' },
      { type: 'instruction', text: 'Izinkan itu hadir...', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk TAHU?' },
      { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk MEMAHAMI?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Bisakah kamu terbuka pada KETIDAKTAHUAN?', subtext: 'Kamu tidak perlu tahu.', duration: 5000 },
      { type: 'instruction', text: 'Apakah ada seseorang yang tahu?', subtext: 'Atau hanya ada INI — keberadaan?', duration: 5000 },
      { type: 'completion', text: '🎉 "Tahu" Dilepaskan!', subtext: 'Semakin sedikit tahu, semakin natural dan bebas.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  'quick-basic': {
    title: '3 Pertanyaan Dasar',
    steps: [
      { type: 'input', text: 'Apa yang mengganggu kamu saat ini?', placeholder: 'Tuliskan...' },
      { type: 'instruction', text: 'Rasakan emosinya...', subtext: 'Izinkan hadir.', duration: 4000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: '🎉 Release Selesai!', subtext: 'Sederhana kan?' }
    ]
  },

  'quick-emergency': {
    title: 'Emergency Release',
    steps: [
      { type: 'breathing', text: 'STOP. Tarik napas dalam...', subtext: 'Hembuskan perlahan...', duration: 5000 },
      { type: 'instruction', text: 'Kamu AMAN saat ini.', subtext: 'Apapun yang terjadi, saat ini kamu aman.', duration: 4000 },
      { type: 'instruction', text: 'Izinkan perasaan ini hadir...', subtext: 'Jangan lawan. Biarkan saja.', duration: 5000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'breathing', text: 'Tarik napas lagi...', duration: 5000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskannya lagi?' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Kamu bukan emosi itu.', subtext: 'Kamu adalah yang SADAR akan emosi.', duration: 5000 },
      { type: 'completion', text: '🎉 Kamu berhasil!', subtext: 'Kamu lebih kuat dari yang kamu pikir.' }
    ]
  }
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
  loadStats();
  updateStatsDisplay();
  initTabNavigation();
  loadDailyChecklist();
  checkQuickReleaseMode();
});

// ==================== TAB NAVIGATION ====================
function initTabNavigation() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      if (tabId) switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  const btn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  const content = document.getElementById(tabId);

  if (btn) btn.classList.add('active');
  if (content) content.classList.add('active');
}

// ==================== GUIDED RELEASING ====================
function startGuidedReleasing(scriptId) {
  const script = guidedScripts[scriptId];
  if (!script) {
    showToast('Script tidak ditemukan', 'error');
    return;
  }

  currentSession = {
    scriptId: scriptId,
    script: script,
    currentStep: 0,
    responses: [],
    startTime: Date.now()
  };

  document.getElementById('modal-title').textContent = script.title;
  document.getElementById('releasing-modal').classList.add('active');

  renderStep(0);
}

function renderStep(index) {
  const step = currentSession.script.steps[index];
  const body = document.getElementById('modal-body');
  const totalSteps = currentSession.script.steps.length;

  // Update progress
  const progress = ((index + 1) / totalSteps) * 100;
  document.getElementById('modal-progress').style.width = progress + '%';
  document.getElementById('modal-progress-text').textContent = `Step ${index + 1} of ${totalSteps}`;

  // Update buttons
  document.getElementById('btn-prev').disabled = index === 0;

  let html = '';

  switch(step.type) {
    case 'instruction':
      html = `
        <p class="step-text">${step.text}</p>
        ${step.subtext ? `<p class="step-subtext">${step.subtext}</p>` : ''}
      `;
      document.getElementById('btn-next').textContent = 'Lanjut →';
      if (step.duration) {
        setTimeout(() => {
          if (currentSession && currentSession.currentStep === index) {
            nextStep();
          }
        }, step.duration);
      }
      break;

    case 'input':
      html = `
        <p class="step-text">${step.text}</p>
        ${step.subtext ? `<p class="step-subtext">${step.subtext}</p>` : ''}
        <div class="step-input">
          <textarea id="step-input" placeholder="${step.placeholder || 'Tuliskan...'}" rows="4"></textarea>
        </div>
      `;
      document.getElementById('btn-next').textContent = 'Lanjut →';
      break;

    case 'choice':
      html = `
        <p class="step-text">${step.text}</p>
        ${step.subtext ? `<p class="step-subtext">${step.subtext}</p>` : ''}
        <div class="option-grid">
          ${step.options.map(opt => `<button class="option-btn" onclick="selectOption(this)">${opt}</button>`).join('')}
        </div>
      `;
      document.getElementById('btn-next').textContent = 'Lanjut →';
      break;

    case 'yesno':
      html = `
        <p class="step-text">${step.text}</p>
        ${step.subtext ? `<p class="step-subtext">${step.subtext}</p>` : ''}
        <div class="answer-group">
          <button class="answer-btn" onclick="selectAnswer('ya')">Ya</button>
          <button class="answer-btn" onclick="selectAnswer('tidak')">Tidak</button>
        </div>
        <p class="step-subtext" style="margin-top:1rem;">Kedua jawaban valid. Yang penting jujur.</p>
      `;
      document.getElementById('btn-next').textContent = 'Lanjut →';
      break;

    case 'when':
      html = `
        <p class="step-text">${step.text}</p>
        <div class="answer-group">
          <button class="answer-btn highlight" onclick="selectAnswer('sekarang')">🌟 Sekarang</button>
          <button class="answer-btn" onclick="selectAnswer('nanti')">⏰ Nanti</button>
        </div>
      `;
      document.getElementById('btn-next').textContent = 'Lanjut →';
      break;

    case 'breathing':
      html = `
        <p class="step-text">${step.text}</p>
        ${step.subtext ? `<p class="step-subtext">${step.subtext}</p>` : ''}
        <div class="breathing-animation"></div>
      `;
      document.getElementById('btn-next').textContent = 'Lanjut →';
      if (step.duration) {
        setTimeout(() => {
          if (currentSession && currentSession.currentStep === index) {
            nextStep();
          }
        }, step.duration);
      }
      break;

    case 'completion':
      html = `
        <div class="completion-icon">🕊️</div>
        <h3 class="completion-title">${step.text}</h3>
        <p class="step-subtext">${step.subtext || ''}</p>
      `;
      document.getElementById('btn-next').textContent = 'Lanjut →';
      stats.releases++;
      saveStats();
      updateStatsDisplay();
      break;

    case 'insight':
      html = `
        <p class="step-text">${step.text}</p>
        <div class="step-input">
          <textarea id="insight-input" placeholder="${step.placeholder || 'Tulis insight...'}" rows="3"></textarea>
        </div>
      `;
      document.getElementById('btn-next').textContent = 'Selesai ✓';
      break;
  }

  body.innerHTML = html;
}

function selectOption(btn) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  currentSession.responses.push(btn.textContent);
}

function selectAnswer(answer) {
  currentSession.responses.push(answer);
  setTimeout(() => nextStep(), 300);
}

function nextStep() {
  if (!currentSession) return;

  const step = currentSession.script.steps[currentSession.currentStep];

  // Save input if present
  if (step.type === 'input') {
    const input = document.getElementById('step-input');
    if (input) currentSession.responses.push(input.value);
  }

  // Save insight
  if (step.type === 'insight') {
    const input = document.getElementById('insight-input');
    if (input && input.value.trim()) {
      stats.insights++;
      saveStats();
      updateStatsDisplay();
    }
    closeModal();
    showToast('Releasing selesai! 🎉', 'success');

    // Return to manifesting if came from there
    if (returnContext) {
      setTimeout(() => {
        if (confirm('Kembali ke Manifesting Workbook?')) {
          localStorage.removeItem('lettingGo_returnContext');
          window.location.href = returnContext.returnUrl || 'manifesting-workbook.html';
        }
      }, 500);
    }
    return;
  }

  // Move to next step
  if (currentSession.currentStep < currentSession.script.steps.length - 1) {
    currentSession.currentStep++;
    renderStep(currentSession.currentStep);
  }
}

function prevStep() {
  if (!currentSession || currentSession.currentStep === 0) return;
  currentSession.currentStep--;
  renderStep(currentSession.currentStep);
}

function closeModal() {
  document.getElementById('releasing-modal').classList.remove('active');
  currentSession = null;
}

// ==================== STATS ====================
function loadStats() {
  try {
    const saved = localStorage.getItem('lettingGo_stats');
    if (saved) {
      stats = JSON.parse(saved);
    }

    // Check and update streak
    const today = new Date().toDateString();
    if (stats.lastDate !== today) {
      const yesterday = new Date();
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
  document.getElementById('stat-sessions').textContent = stats.sessions;
  document.getElementById('stat-releases').textContent = stats.releases;
  document.getElementById('stat-streak').textContent = stats.streak;
  document.getElementById('stat-insights').textContent = stats.insights;
}

// ==================== DAILY CHECKLIST ====================
function loadDailyChecklist() {
  const today = new Date().toDateString();
  const saved = localStorage.getItem('lettingGo_dailyChecklist');

  if (saved) {
    const data = JSON.parse(saved);
    if (data.date === today) {
      document.getElementById('daily-morning').checked = data.morning;
      document.getElementById('daily-afternoon').checked = data.afternoon;
      document.getElementById('daily-evening').checked = data.evening;
    }
  }
}

function updateDailyChecklist() {
  const today = new Date().toDateString();
  const data = {
    date: today,
    morning: document.getElementById('daily-morning').checked,
    afternoon: document.getElementById('daily-afternoon').checked,
    evening: document.getElementById('daily-evening').checked
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
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode');
  const type = urlParams.get('type');

  if (mode === 'quick-release') {
    try {
      const contextStr = localStorage.getItem('lettingGo_returnContext');
      if (contextStr) {
        returnContext = JSON.parse(contextStr);
        showReturnBanner();

        if (type === 'wanting') {
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

  const banner = document.createElement('div');
  banner.className = 'return-banner';
  banner.innerHTML = `
    <div class="return-banner-content">
      <span>📍 Release dari: <strong>Manifesting Workbook</strong></span>
      <span class="return-context">${returnContext.content || ''}</span>
    </div>
    <button onclick="returnToManifesting()" class="btn-return">← Kembali</button>
  `;

  const header = document.querySelector('.header');
  if (header) {
    header.insertAdjacentElement('afterend', banner);
  }
}

function returnToManifesting() {
  localStorage.removeItem('lettingGo_returnContext');
  window.location.href = returnContext?.returnUrl || 'manifesting-workbook.html';
}

// ==================== TOAST ====================
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show' + (type === 'success' ? ' success' : '');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
