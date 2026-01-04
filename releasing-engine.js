// ============================================================================
// RELEASING ENGINE - Shared Module for Sedona Method Releasing
// ============================================================================
// Used by: letting-go.html, manifesting-workbook.html
// ============================================================================

const ReleasingEngine = (function() {
  'use strict';

  // ==================== GUIDED SCRIPTS ====================
  const guidedScripts = {
    'fondasi': {
      title: 'Releasing Dasar',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks dulu.', duration: 4000 },
        { type: 'instruction', text: 'Izinkan saat ini menjadi seperti apa adanya...', subtext: 'Tanpa perlu diubah.', duration: 5000 },
        { type: 'input', text: 'Pikirkan satu situasi yang rasanya mengganggu kamu...', subtext: 'Satu aja ya, jangan bikin list.', placeholder: 'Tuliskan situasi yang mengganggu...' },
        { type: 'choice', text: 'Perhatikan emosi apa yang muncul?', options: ['😠 Marah', '😢 Sedih', '😔 Kecewa', '😰 Cemas', '😨 Takut', '🔮 Lainnya'] },
        { type: 'choice', text: 'Di mana kamu merasakannya di tubuh?', options: ['💗 Dada', '🫄 Perut', '🧠 Kepala', '💪 Pundak', '😮‍💨 Sesak', '🎯 Lainnya'] },
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
      wantingType: 'control',
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
        { type: 'completion', text: '🎯 Wanting Control Released!', subtext: 'Semakin lepas kontrol, semakin merasa memegang kendali.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'wanting-approval': {
      title: 'Release Wanting Approval',
      wantingType: 'approval',
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
        { type: 'completion', text: '💝 Wanting Approval Released!', subtext: 'Sumber cinta sudah ada di dalam diri kamu.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'wanting-security': {
      title: 'Release Wanting Security',
      wantingType: 'security',
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
        { type: 'completion', text: '🛡️ Wanting Security Released!', subtext: 'Keamanan absolut datangnya dari dalam.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'wanting-separation': {
      title: 'Release Wanting Separation',
      wantingType: 'separation',
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
        { type: 'completion', text: '🔮 Wanting Separation Released!', subtext: 'Kamu sudah pulang ke rumah yang tidak pernah ditinggalkan.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'wanting-oneness': {
      title: 'Release Wanting Oneness',
      wantingType: 'oneness',
      steps: [
        { type: 'instruction', text: 'Izinkan diri kamu merasakan koneksi...', duration: 4000 },
        { type: 'input', text: 'Di mana kamu ingin MENYATU atau TERHUBUNG?', subtext: 'Atau takut kehilangan koneksi?', placeholder: 'Tuliskan situasi...' },
        { type: 'instruction', text: 'Bisakah kamu hadir dengan keinginan itu?', subtext: 'Keinginan untuk menyatu...', duration: 5000 },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },
        { type: 'instruction', text: 'Fokus lagi...', duration: 3000 },
        { type: 'yesno', text: 'Bisakah kamu membebaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },
        { type: 'instruction', text: 'Perhatikan bahwa koneksi SUDAH ada...', subtext: 'Tidak perlu dicari di luar.', duration: 5000 },
        { type: 'completion', text: '☯️ Wanting Oneness Released!', subtext: 'Kamu sudah terhubung dengan segalanya.' },
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
        { type: 'completion', text: '🌟 Semua Wanting Released!', subtext: 'Semakin lepas keinginan, semakin MEMILIKI.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'triple': {
      title: 'Triple Welcoming',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Izinkan saat ini apa adanya.', duration: 4000 },
        { type: 'input', text: 'Fokus pada situasi yang mengganggu...', placeholder: 'Tuliskan situasi...' },
        { type: 'choice', text: 'Layer 1: Emosi apa yang muncul?', options: ['😠 Marah', '😢 Sedih', '😨 Takut', '😔 Kecewa', '😰 Cemas', '🔮 Lainnya'] },
        { type: 'instruction', text: 'Izinkan emosi itu hadir...', subtext: 'Sambut aja.', duration: 4000 },
        { type: 'choice', text: 'Layer 2: Wanting apa yang ada?', options: ['🎯 Control', '💝 Approval', '🛡️ Security', '🔮 Separation'] },
        { type: 'instruction', text: 'Izinkan wanting itu hadir...', duration: 4000 },
        { type: 'yesno', text: 'Layer 3: Apakah ada RASA KEAKUAN?', subtext: 'Ini tentang KAMU?' },
        { type: 'instruction', text: 'Izinkan rasa keakuan itu hadir...', duration: 4000 },
        { type: 'instruction', text: 'Biarkan ketiganya hadir bersamaan...', subtext: 'Emosi, Wanting, Keakuan.', duration: 5000 },
        { type: 'instruction', text: 'Sekarang, MUNDUR selangkah...', subtext: 'Biarkan terurai sendiri.', duration: 5000 },
        { type: 'yesno', text: 'Bisakah kamu melepaskan semuanya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },
        { type: 'instruction', text: 'Apakah kamu EMOSI itu, atau yang SADAR akan emosi?', duration: 5000 },
        { type: 'completion', text: '🎊 Triple Welcoming Selesai!', subtext: 'Kesadaran tidak sama dengan emosi.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'story': {
      title: 'Melepas Cerita',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', duration: 4000 },
        { type: 'input', text: 'Cerita apa yang kamu ceritakan ke diri sendiri?', subtext: 'Yang tidak kamu sukai atau menghambat.', placeholder: 'Tuliskan cerita...' },
        { type: 'instruction', text: 'Bisakah kamu menyambutnya?', subtext: 'Hadir saja dengan cerita itu.', duration: 5000 },
        { type: 'choice', text: 'Ada wanting apa di situ?', options: ['🎯 Control', '💝 Approval', '🛡️ Security', '🔮 Separation'] },
        { type: 'instruction', text: 'Izinkan wanting itu hadir...', duration: 4000 },
        { type: 'yesno', text: 'Apakah itu terasa seperti CERITA KAMU?', subtext: 'Tentang kamu?' },
        { type: 'instruction', text: 'Izinkan rasa keakuan itu hadir...', duration: 4000 },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk PERCAYA cerita itu?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk JADI ORANG dalam cerita?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk MEMBUAT CERITA itu NYATA?' },
        { type: 'when', text: 'Kapan?' },
        { type: 'instruction', text: 'Apakah kamu orang di cerita itu?', subtext: 'Atau hanya ada KEBERADAAN?', duration: 5000 },
        { type: 'completion', text: '📖 Cerita Dilepaskan!', subtext: 'Cerita bukan fakta. Cerita tidak terjadi saat ini.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'knowing': {
      title: 'Melepas "Tahu"',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', duration: 4000 },
        { type: 'input', text: 'Apa yang kamu pikir kamu TAHU?', subtext: 'Tentang masalah atau diri kamu.', placeholder: 'Tuliskan apa yang kamu tahu...' },
        { type: 'instruction', text: 'Bisakah kamu menyambut rasa tahu itu?', duration: 5000 },
        { type: 'choice', text: 'Ada wanting apa?', options: ['🎯 Control', '💝 Approval', '🛡️ Security', '🔮 Separation'] },
        { type: 'instruction', text: 'Izinkan wanting itu hadir...', duration: 4000 },
        { type: 'yesno', text: 'Apakah ada SESEORANG yang tahu?', subtext: 'Rasa keakuan?' },
        { type: 'instruction', text: 'Izinkan itu hadir...', duration: 4000 },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk TAHU?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk MEMAHAMI?' },
        { type: 'when', text: 'Kapan?' },
        { type: 'instruction', text: 'Bisakah kamu terbuka pada KETIDAKTAHUAN?', subtext: 'Kamu tidak perlu tahu.', duration: 5000 },
        { type: 'instruction', text: 'Apakah ada seseorang yang tahu?', subtext: 'Atau hanya ada INI — keberadaan?', duration: 5000 },
        { type: 'completion', text: '🧠 "Tahu" Dilepaskan!', subtext: 'Semakin sedikit tahu, semakin natural dan bebas.' },
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
        { type: 'completion', text: '✅ Release Selesai!', subtext: 'Sederhana kan?' }
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
        { type: 'completion', text: '💪 Kamu berhasil!', subtext: 'Kamu lebih kuat dari yang kamu pikir.' }
      ]
    },

    'discover-release': {
      title: 'Release Keinginan',
      steps: [
        { type: 'instruction', text: 'Fokus pada keinginan/hasrat yang sudah kamu identifikasi...', subtext: 'Biarkan hadir sepenuhnya.', duration: 4000 },
        { type: 'yesno', text: 'Bisakah kamu mengizinkan keinginan ini hadir sepenuhnya?', subtext: 'Jangan dorong, jangan ubah. Biarkan saja.' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan ini?', subtext: 'Ingat, ini hanya pertanyaan. Jawab jujur.' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?', subtext: 'Lebih baik pegangan terus atau bebas?' },
        { type: 'when', text: 'Kapan?' },
        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Biarkan semua terurai...', duration: 5000 },
        { type: 'completion', text: '🌊 Keinginan Dilepaskan!', subtext: 'Semakin lepas, semakin memiliki.' }
      ]
    },

    'goal-release': {
      title: 'Release dengan Pertanyaan Dasar',
      steps: [
        { type: 'instruction', text: 'Fokus pada perasaan yang muncul saat memikirkan goal ini...', subtext: 'Biarkan hadir sepenuhnya.', duration: 4000 },
        { type: 'yesno', text: 'Bisakah kamu mengizinkan perasaan ini hadir sepenuhnya?', subtext: 'Jangan dorong, jangan ubah. Sambut saja.' },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?', subtext: 'Ingat, ini hanya pertanyaan.' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?', subtext: 'Mendingan pegangan terus atau bebas?' },
        { type: 'when', text: 'Kapan?' },
        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Lepaskan...', duration: 5000 },
        { type: 'instruction', text: 'Apakah kamu itu perasaan ini?', subtext: 'Atau kamu yang MENYADARI perasaan ini?', duration: 5000 },
        { type: 'completion', text: '🌟 Release Selesai!', subtext: 'Kesadaran bukan perasaan. Perasaan datang dan pergi.' }
      ]
    }
  };

  // Map wanting types to script IDs
  const wantingToScript = {
    'control': 'wanting-control',
    'approval': 'wanting-approval',
    'security': 'wanting-security',
    'separation': 'wanting-separation',
    'oneness': 'wanting-oneness'
  };

  // ==================== STATE ====================
  let currentSession = null;
  let sequentialQueue = [];
  let sequentialIndex = 0;
  let modalElement = null;
  let callbacks = {};

  // ==================== INITIALIZATION ====================
  function init(options) {
    options = options || {};
    callbacks = {
      onComplete: options.onComplete || function() {},
      onRelease: options.onRelease || function() {},
      onInsight: options.onInsight || function() {},
      onSequenceComplete: options.onSequenceComplete || function() {}
    };

    // Create or use existing modal
    if (options.modalId) {
      modalElement = document.getElementById(options.modalId);
    }

    if (!modalElement) {
      createModal();
    }
  }

  // ==================== MODAL CREATION ====================
  function createModal() {
    // Check if modal already exists
    if (document.getElementById('releasing-engine-modal')) {
      modalElement = document.getElementById('releasing-engine-modal');
      return;
    }

    const modalHTML = `
      <div class="releasing-modal" id="releasing-engine-modal">
        <div class="releasing-modal-content">
          <div class="releasing-modal-header">
            <h3 id="re-modal-title">Releasing</h3>
            <button class="releasing-modal-close" onclick="ReleasingEngine.closeModal()">&times;</button>
          </div>
          <div class="releasing-modal-progress">
            <div class="releasing-progress-bar">
              <div class="releasing-progress-fill" id="re-modal-progress"></div>
            </div>
            <span class="releasing-progress-text" id="re-modal-progress-text">Step 1</span>
          </div>
          <div class="releasing-modal-body" id="re-modal-body">
            <!-- Dynamic content -->
          </div>
          <div class="releasing-modal-footer">
            <button class="releasing-btn releasing-btn-secondary" id="re-btn-prev" onclick="ReleasingEngine.prevStep()">← Sebelumnya</button>
            <button class="releasing-btn releasing-btn-primary" id="re-btn-next" onclick="ReleasingEngine.nextStep()">Lanjut →</button>
          </div>
          <div class="releasing-sequence-indicator" id="re-sequence-indicator" style="display:none;">
            <span id="re-sequence-text"></span>
          </div>
        </div>
      </div>
    `;

    // Add modal styles if not present
    if (!document.getElementById('releasing-engine-styles')) {
      const styles = document.createElement('style');
      styles.id = 'releasing-engine-styles';
      styles.textContent = getModalStyles();
      document.head.appendChild(styles);
    }

    // Add modal to DOM
    const container = document.createElement('div');
    container.innerHTML = modalHTML;
    document.body.appendChild(container.firstElementChild);
    modalElement = document.getElementById('releasing-engine-modal');
  }

  function getModalStyles() {
    return `
      .releasing-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        z-index: 10000;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }
      .releasing-modal.active {
        display: flex;
      }
      .releasing-modal-content {
        background: #fff;
        border-radius: 16px;
        width: 100%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      }
      .releasing-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid #eee;
        background: linear-gradient(135deg, #5D4E6D, #8B7355);
        color: #fff;
        border-radius: 16px 16px 0 0;
      }
      .releasing-modal-header h3 {
        margin: 0;
        font-size: 1.2rem;
      }
      .releasing-modal-close {
        background: none;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.2s;
      }
      .releasing-modal-close:hover {
        opacity: 1;
      }
      .releasing-modal-progress {
        padding: 1rem 1.5rem;
        background: #f8f8f8;
      }
      .releasing-progress-bar {
        height: 6px;
        background: #e0e0e0;
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: 0.5rem;
      }
      .releasing-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #5D4E6D, #8B7355);
        width: 0%;
        transition: width 0.3s ease;
      }
      .releasing-progress-text {
        font-size: 0.85rem;
        color: #666;
      }
      .releasing-modal-body {
        padding: 2rem 1.5rem;
        min-height: 200px;
        text-align: center;
      }
      .releasing-modal-footer {
        display: flex;
        gap: 1rem;
        padding: 1rem 1.5rem;
        border-top: 1px solid #eee;
        background: #f8f8f8;
        border-radius: 0 0 16px 16px;
      }
      .releasing-btn {
        flex: 1;
        padding: 0.85rem 1.25rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .releasing-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .releasing-btn-primary {
        background: linear-gradient(135deg, #5D4E6D, #8B7355);
        color: #fff;
      }
      .releasing-btn-primary:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(93, 78, 109, 0.3);
      }
      .releasing-btn-secondary {
        background: #e0e0e0;
        color: #333;
      }
      .releasing-btn-secondary:hover:not(:disabled) {
        background: #d0d0d0;
      }
      .releasing-step-text {
        font-size: 1.3rem;
        color: #2D2A26;
        margin-bottom: 0.75rem;
        line-height: 1.4;
      }
      .releasing-step-subtext {
        font-size: 0.95rem;
        color: #666;
        margin-top: 0.5rem;
      }
      .releasing-step-input textarea {
        width: 100%;
        padding: 1rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        resize: vertical;
        margin-top: 1rem;
        font-family: inherit;
      }
      .releasing-step-input textarea:focus {
        outline: none;
        border-color: #5D4E6D;
      }
      .releasing-option-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
        margin-top: 1rem;
      }
      .releasing-option-btn {
        padding: 0.85rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        background: #fff;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 1rem;
      }
      .releasing-option-btn:hover {
        border-color: #5D4E6D;
        background: #f8f5ff;
      }
      .releasing-option-btn.selected {
        border-color: #5D4E6D;
        background: #5D4E6D;
        color: #fff;
      }
      .releasing-answer-group {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1.5rem;
      }
      .releasing-answer-btn {
        padding: 1rem 2rem;
        border: 2px solid #e0e0e0;
        border-radius: 12px;
        background: #fff;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: 600;
        transition: all 0.2s;
        min-width: 100px;
      }
      .releasing-answer-btn:hover {
        border-color: #5D4E6D;
        transform: translateY(-2px);
      }
      .releasing-answer-btn.highlight {
        background: linear-gradient(135deg, #5D4E6D, #8B7355);
        color: #fff;
        border-color: transparent;
      }
      .releasing-breathing-animation {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #5D4E6D, #8B7355);
        margin: 2rem auto;
        animation: breathe 4s ease-in-out infinite;
      }
      @keyframes breathe {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.3); opacity: 1; }
      }
      .releasing-completion-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
      }
      .releasing-completion-title {
        font-size: 1.5rem;
        color: #2D2A26;
        margin-bottom: 0.5rem;
      }
      .releasing-sequence-indicator {
        text-align: center;
        padding: 0.75rem;
        background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
        color: #2e7d32;
        font-size: 0.85rem;
        font-weight: 600;
      }
    `;
  }

  // ==================== START RELEASING ====================
  function startReleasing(scriptId, options) {
    options = options || {};
    const script = guidedScripts[scriptId];

    if (!script) {
      console.error('Script not found:', scriptId);
      return false;
    }

    // Initialize if needed
    if (!modalElement) {
      init(options);
    }

    // Update callbacks if provided
    if (options.onComplete) callbacks.onComplete = options.onComplete;
    if (options.onRelease) callbacks.onRelease = options.onRelease;
    if (options.onInsight) callbacks.onInsight = options.onInsight;

    currentSession = {
      scriptId: scriptId,
      script: script,
      currentStep: 0,
      responses: [],
      startTime: Date.now(),
      context: options.context || null
    };

    document.getElementById('re-modal-title').textContent = script.title;
    modalElement.classList.add('active');

    // Update sequence indicator if in sequential mode
    updateSequenceIndicator();

    renderStep(0);
    return true;
  }

  // ==================== SEQUENTIAL RELEASING ====================
  function startSequentialReleasing(wantings, options) {
    options = options || {};

    if (!wantings || wantings.length === 0) {
      console.error('No wantings provided');
      return false;
    }

    // Convert wanting types to script IDs
    sequentialQueue = wantings.map(function(w) {
      return wantingToScript[w] || w;
    }).filter(function(scriptId) {
      return guidedScripts[scriptId];
    });

    if (sequentialQueue.length === 0) {
      console.error('No valid scripts found for wantings:', wantings);
      return false;
    }

    sequentialIndex = 0;

    // Store sequence complete callback
    if (options.onSequenceComplete) {
      callbacks.onSequenceComplete = options.onSequenceComplete;
    }

    // Start first script
    return startReleasing(sequentialQueue[0], options);
  }

  function updateSequenceIndicator() {
    const indicator = document.getElementById('re-sequence-indicator');
    const text = document.getElementById('re-sequence-text');

    if (sequentialQueue.length > 1) {
      indicator.style.display = 'block';
      text.textContent = 'Releasing ' + (sequentialIndex + 1) + ' dari ' + sequentialQueue.length + ' wanting';
    } else {
      indicator.style.display = 'none';
    }
  }

  function proceedToNextInSequence() {
    sequentialIndex++;

    if (sequentialIndex < sequentialQueue.length) {
      // Start next script
      setTimeout(function() {
        startReleasing(sequentialQueue[sequentialIndex]);
      }, 500);
    } else {
      // All done
      sequentialQueue = [];
      sequentialIndex = 0;
      callbacks.onSequenceComplete({
        totalReleased: sequentialQueue.length,
        timestamp: new Date().toISOString()
      });
    }
  }

  // ==================== STEP RENDERING ====================
  function renderStep(index) {
    const step = currentSession.script.steps[index];
    const body = document.getElementById('re-modal-body');
    const totalSteps = currentSession.script.steps.length;

    // Update progress
    const progress = ((index + 1) / totalSteps) * 100;
    document.getElementById('re-modal-progress').style.width = progress + '%';
    document.getElementById('re-modal-progress-text').textContent = 'Step ' + (index + 1) + ' of ' + totalSteps;

    // Update buttons
    document.getElementById('re-btn-prev').disabled = index === 0;

    let html = '';

    switch(step.type) {
      case 'instruction':
        html = '<p class="releasing-step-text">' + step.text + '</p>';
        if (step.subtext) html += '<p class="releasing-step-subtext">' + step.subtext + '</p>';
        document.getElementById('re-btn-next').textContent = 'Lanjut →';
        if (step.duration) {
          setTimeout(function() {
            if (currentSession && currentSession.currentStep === index) {
              nextStep();
            }
          }, step.duration);
        }
        break;

      case 'input':
        html = '<p class="releasing-step-text">' + step.text + '</p>';
        if (step.subtext) html += '<p class="releasing-step-subtext">' + step.subtext + '</p>';
        html += '<div class="releasing-step-input"><textarea id="re-step-input" placeholder="' + (step.placeholder || 'Tuliskan...') + '" rows="4"></textarea></div>';
        document.getElementById('re-btn-next').textContent = 'Lanjut →';
        break;

      case 'choice':
        html = '<p class="releasing-step-text">' + step.text + '</p>';
        if (step.subtext) html += '<p class="releasing-step-subtext">' + step.subtext + '</p>';
        html += '<div class="releasing-option-grid">';
        step.options.forEach(function(opt) {
          html += '<button class="releasing-option-btn" onclick="ReleasingEngine.selectOption(this)">' + opt + '</button>';
        });
        html += '</div>';
        document.getElementById('re-btn-next').textContent = 'Lanjut →';
        break;

      case 'yesno':
        html = '<p class="releasing-step-text">' + step.text + '</p>';
        if (step.subtext) html += '<p class="releasing-step-subtext">' + step.subtext + '</p>';
        html += '<div class="releasing-answer-group">';
        html += '<button class="releasing-answer-btn" onclick="ReleasingEngine.selectAnswer(\'ya\')">Ya</button>';
        html += '<button class="releasing-answer-btn" onclick="ReleasingEngine.selectAnswer(\'tidak\')">Tidak</button>';
        html += '</div>';
        html += '<p class="releasing-step-subtext" style="margin-top:1rem;font-size:0.85rem;">Kedua jawaban valid. Yang penting jujur.</p>';
        document.getElementById('re-btn-next').textContent = 'Lanjut →';
        break;

      case 'when':
        html = '<p class="releasing-step-text">' + step.text + '</p>';
        html += '<div class="releasing-answer-group">';
        html += '<button class="releasing-answer-btn highlight" onclick="ReleasingEngine.selectAnswer(\'sekarang\')">🌟 Sekarang</button>';
        html += '<button class="releasing-answer-btn" onclick="ReleasingEngine.selectAnswer(\'nanti\')">⏰ Nanti</button>';
        html += '</div>';
        document.getElementById('re-btn-next').textContent = 'Lanjut →';
        break;

      case 'breathing':
        html = '<p class="releasing-step-text">' + step.text + '</p>';
        if (step.subtext) html += '<p class="releasing-step-subtext">' + step.subtext + '</p>';
        html += '<div class="releasing-breathing-animation"></div>';
        document.getElementById('re-btn-next').textContent = 'Lanjut →';
        if (step.duration) {
          setTimeout(function() {
            if (currentSession && currentSession.currentStep === index) {
              nextStep();
            }
          }, step.duration);
        }
        break;

      case 'completion':
        html = '<div class="releasing-completion-icon">🎉</div>';
        html += '<h3 class="releasing-completion-title">' + step.text + '</h3>';
        html += '<p class="releasing-step-subtext">' + (step.subtext || '') + '</p>';

        // Change button text based on sequence
        if (sequentialQueue.length > 0 && sequentialIndex < sequentialQueue.length - 1) {
          document.getElementById('re-btn-next').textContent = 'Lanjut ke Wanting Berikutnya →';
        } else {
          document.getElementById('re-btn-next').textContent = 'Selesai ✓';
        }

        // Trigger release callback
        callbacks.onRelease({
          scriptId: currentSession.scriptId,
          wantingType: currentSession.script.wantingType || null,
          timestamp: new Date().toISOString()
        });
        break;

      case 'insight':
        html = '<p class="releasing-step-text">' + step.text + '</p>';
        html += '<div class="releasing-step-input"><textarea id="re-insight-input" placeholder="' + (step.placeholder || 'Tulis insight...') + '" rows="3"></textarea></div>';

        // Change button text based on sequence
        if (sequentialQueue.length > 0 && sequentialIndex < sequentialQueue.length - 1) {
          document.getElementById('re-btn-next').textContent = 'Lanjut ke Wanting Berikutnya →';
        } else {
          document.getElementById('re-btn-next').textContent = 'Selesai ✓';
        }
        break;
    }

    body.innerHTML = html;
  }

  // ==================== USER INTERACTIONS ====================
  function selectOption(btn) {
    document.querySelectorAll('.releasing-option-btn').forEach(function(b) {
      b.classList.remove('selected');
    });
    btn.classList.add('selected');
    currentSession.responses.push(btn.textContent);
  }

  function selectAnswer(answer) {
    currentSession.responses.push(answer);
    setTimeout(function() { nextStep(); }, 300);
  }

  function nextStep() {
    if (!currentSession) return;

    const step = currentSession.script.steps[currentSession.currentStep];

    // Save input if present
    if (step.type === 'input') {
      const input = document.getElementById('re-step-input');
      if (input) currentSession.responses.push(input.value);
    }

    // Save insight and finish
    if (step.type === 'insight') {
      const input = document.getElementById('re-insight-input');
      const insightText = input ? input.value.trim() : '';

      if (insightText) {
        callbacks.onInsight({
          scriptId: currentSession.scriptId,
          insight: insightText,
          timestamp: new Date().toISOString()
        });
      }

      // Complete this session
      callbacks.onComplete({
        scriptId: currentSession.scriptId,
        wantingType: currentSession.script.wantingType || null,
        responses: currentSession.responses,
        duration: Date.now() - currentSession.startTime,
        insight: insightText,
        timestamp: new Date().toISOString()
      });

      // Check if more in sequence
      if (sequentialQueue.length > 0 && sequentialIndex < sequentialQueue.length - 1) {
        proceedToNextInSequence();
      } else {
        // All done
        closeModal();

        if (sequentialQueue.length > 0) {
          const totalReleased = sequentialQueue.length;
          sequentialQueue = [];
          sequentialIndex = 0;
          callbacks.onSequenceComplete({
            totalReleased: totalReleased,
            timestamp: new Date().toISOString()
          });
        }
      }
      return;
    }

    // Handle completion step - finish session
    if (step.type === 'completion') {
      // Complete this session
      callbacks.onComplete({
        scriptId: currentSession.scriptId,
        wantingType: currentSession.script.wantingType || null,
        responses: currentSession.responses,
        duration: Date.now() - currentSession.startTime,
        timestamp: new Date().toISOString()
      });

      // Check if more in sequence
      if (sequentialQueue.length > 0 && sequentialIndex < sequentialQueue.length - 1) {
        proceedToNextInSequence();
      } else {
        // All done
        closeModal();

        if (sequentialQueue.length > 0) {
          const totalReleased = sequentialQueue.length;
          sequentialQueue = [];
          sequentialIndex = 0;
          callbacks.onSequenceComplete({
            totalReleased: totalReleased,
            timestamp: new Date().toISOString()
          });
        }
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
    if (modalElement) {
      modalElement.classList.remove('active');
    }
    currentSession = null;
  }

  // ==================== UTILITY ====================
  function getScripts() {
    return guidedScripts;
  }

  function getScript(scriptId) {
    return guidedScripts[scriptId] || null;
  }

  function getWantingScriptId(wantingType) {
    return wantingToScript[wantingType] || null;
  }

  // ==================== PUBLIC API ====================
  return {
    init: init,
    startReleasing: startReleasing,
    startSequentialReleasing: startSequentialReleasing,
    nextStep: nextStep,
    prevStep: prevStep,
    closeModal: closeModal,
    selectOption: selectOption,
    selectAnswer: selectAnswer,
    getScripts: getScripts,
    getScript: getScript,
    getWantingScriptId: getWantingScriptId
  };

})();
