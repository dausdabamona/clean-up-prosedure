// ============================================================================
// RELEASING ENGINE - Shared Module for Sedona Method Releasing
// ============================================================================
// Used by: letting-go.html, manifesting-workbook.html
// ============================================================================

const ReleasingEngine = (function() {
  'use strict';

  // ==================== TIMING CONSTANTS ====================
  // Timing based on Coach Lia Adelia's pacing (in milliseconds)
  const TIMING = {
    // Grounding & Setup
    GROUNDING: 5000,           // "Stop dulu sebentar" - 5 detik
    GROUNDING_DEEP: 7000,      // Grounding lebih dalam - 7 detik

    // Menghadirkan & Merasakan
    BRING_UP_SITUATION: 10000, // Waktu hadirkan situasi - 10 detik
    FEEL_IN_BODY: 12000,       // Rasakan di tubuh - 12 detik
    FEEL_EMOTION: 10000,       // Rasakan emosi - 10 detik

    // Welcoming
    WELCOME_SHORT: 8000,       // Sambut singkat - 8 detik
    WELCOME_STANDARD: 10000,   // Sambut standar - 10 detik
    WELCOME_DEEP: 12000,       // Sambut mendalam - 12 detik

    // After Answer
    POST_ANSWER: 3000,         // Jeda setelah jawab - 3 detik
    POST_ANSWER_LONG: 5000,    // Jeda lebih lama - 5 detik

    // Breathing
    BREATH_SHORT: 8000,        // Napas singkat - 8 detik
    BREATH_STANDARD: 10000,    // Napas standar - 10 detik
    BREATH_DEEP: 12000,        // Napas dalam - 12 detik

    // Perspective Shift
    STEP_BACK: 12000,          // Mundur/step back - 12 detik
    AWARENESS_SHIFT: 15000,    // Shift ke kesadaran - 15 detik
    VORTEX_RELEASE: 18000,     // Vortex terurai - 18 detik

    // Check & Transition
    CHECK_FEELING: 6000,       // Check perasaan - 6 detik
    TRANSITION: 4000,          // Transisi antar bagian - 4 detik

    // Triple Welcoming
    TRIPLE_LAYER: 8000,        // Per layer - 8 detik
    TRIPLE_COMBINE: 12000,     // Gabung ketiganya - 12 detik
    TRIPLE_DISSOLVE: 15000     // Biarkan terurai - 15 detik
  };

  // ==================== GUIDED SCRIPTS ====================
  const guidedScripts = {
    'fondasi': {
      title: 'Releasing Dasar',
      steps: [
        // GROUNDING (Total: ~12 detik)
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },
        { type: 'instruction', text: 'Izinkan saat ini menjadi seperti apa adanya...', subtext: 'Tanpa perlu diubah.', duration: TIMING.GROUNDING_DEEP },

        // BRING UP ISSUE (User input - no auto advance)
        { type: 'input', text: 'Pikirkan satu situasi yang mengganggu kamu...', subtext: 'Satu saja. Jangan bikin list.', placeholder: 'Tuliskan situasi yang mengganggu...' },

        // IDENTIFY EMOTION
        { type: 'choice', text: 'Perhatikan emosi apa yang muncul?', options: ['😠 Marah', '😢 Sedih', '😔 Kecewa', '😰 Cemas', '😨 Takut', '🔮 Lainnya'] },

        // FEEL IN BODY
        { type: 'choice', text: 'Di mana kamu merasakannya di tubuh?', options: ['💗 Dada', '🫄 Perut', '🧠 Kepala', '💪 Pundak', '😮‍💨 Tenggorokan', '🎯 Lainnya'] },

        // WELCOME - Fase penting, perlu waktu
        { type: 'instruction', text: 'Bisakah kamu hanya memperhatikannya saja?', subtext: 'Jangan dorong, jangan ubah. Perhatikan saja.', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Bisakah kamu menyambutnya?', subtext: 'Izinkan perasaan itu hadir sepenuhnya. Sambut seperti tamu.', duration: TIMING.WELCOME_DEEP },

        // 3 QUESTIONS - Round 1
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?', subtext: 'Ingat, ini pertanyaan. Jawab jujur — ya atau tidak, keduanya valid.' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?', subtext: 'Lebih enak pegangan terus atau bebas?' },
        { type: 'when', text: 'Kapan?' },

        // BREATHING - Beri waktu untuk proses
        { type: 'breathing', text: 'Tarik napas dalam...', subtext: 'Hembuskan perlahan... Biarkan semua terurai...', duration: TIMING.BREATH_STANDARD },

        // CHECK
        { type: 'instruction', text: 'Perhatikan apa yang kamu rasakan sekarang.', subtext: 'Mungkin lebih ringan, mungkin masih ada sisa.', duration: TIMING.CHECK_FEELING },

        // 3 QUESTIONS - Round 2
        { type: 'instruction', text: 'Kita ulangi sekali lagi...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // FINAL CHECK
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        // COMPLETION
        { type: 'completion', text: '🎉 Selamat!', subtext: 'Kamu telah menyelesaikan satu sesi releasing.' },
        { type: 'insight', text: 'Ada insight yang ingin dicatat?', placeholder: 'Tulis insight kamu...' }
      ]
    },

    'wanting-control': {
      title: 'Release Wanting Control',
      wantingType: 'control',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Izinkan saat ini apa adanya.', duration: TIMING.GROUNDING },

        // BRING UP
        { type: 'input', text: 'Pikirkan sesuatu yang ingin kamu KONTROL...', subtext: 'Situasi, orang, atau hasil yang ingin kamu atur.', placeholder: 'Tuliskan situasi...' },

        // FEEL
        { type: 'instruction', text: 'Rasakan energi wanting control itu...', subtext: 'Rasa maksa, dorong-dorongan, resistensi, keras...', duration: TIMING.FEEL_EMOTION },

        // WELCOME
        { type: 'instruction', text: 'Bisakah kamu menyambut keinginan untuk mengontrol ini?', subtext: 'Jangan lawan. Biarkan hadir.', duration: TIMING.WELCOME_STANDARD },

        // RELEASE WANTING CONTROL - Round 1
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk mengontrol?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // CHECK
        { type: 'instruction', text: 'Perhatikan rasanya sekarang...', duration: TIMING.CHECK_FEELING },

        // RELEASE WANTING CONTROL - Round 2
        { type: 'instruction', text: 'Fokus lagi pada hal yang sama...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya lagi?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // === OPPOSITE: WANTING TO BE CONTROLLED ===
        { type: 'instruction', text: 'Sekarang perhatikan LAWANNYA...', subtext: 'Di mana kamu ingin DIKONTROL? Menunggu orang lain tentukan? Beku tidak bertindak?', duration: TIMING.BRING_UP_SITUATION },
        { type: 'instruction', text: 'Bisakah kamu menyambut keinginan untuk dikontrol?', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk dikontrol?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // FINAL ROUND - Both
        { type: 'instruction', text: 'Sekali lagi, untuk keduanya...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting control DAN wanting to be controlled?' },
        { type: 'when', text: 'Kapan?' },

        // BREATHING
        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', duration: TIMING.BREATH_STANDARD },

        // CHECK
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        { type: 'completion', text: '🎮 Wanting Control Released!', subtext: 'Paradoks: Semakin lepas kontrol, semakin merasa memegang kendali.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'wanting-approval': {
      title: 'Release Wanting Approval',
      wantingType: 'approval',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', duration: TIMING.GROUNDING },
        { type: 'input', text: 'Di mana kamu menginginkan CINTA atau PERSETUJUAN?', subtext: 'Dari siapa? Dalam situasi apa?', placeholder: 'Tuliskan situasi...' },

        // FEEL
        { type: 'instruction', text: 'Rasakan energi wanting approval...', subtext: 'Rasa ngarep, rapuh, butuh validasi, takut ditolak...', duration: TIMING.FEEL_EMOTION },

        // WELCOME & RELEASE
        { type: 'instruction', text: 'Bisakah kamu menyambut keinginan untuk dicintai/disetujui ini?', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // Round 2
        { type: 'instruction', text: 'Fokus lagi...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu membebaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // === OPPOSITE 1: WANTING DISAPPROVAL ===
        { type: 'instruction', text: 'Sekarang perhatikan lawannya...', subtext: 'Di mana kamu ingin DITOLAK? Ingin rebel? Ingin beda dari orang lain?', duration: TIMING.BRING_UP_SITUATION },
        { type: 'instruction', text: 'Bisakah kamu menyambut keinginan untuk ditolak/disapproval?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting disapproval?' },
        { type: 'when', text: 'Kapan?' },

        // === OPPOSITE 2: WANTING TO LOVE ===
        { type: 'instruction', text: 'Dan ada satu lagi...', subtext: 'Di mana kamu ingin MEMBERI cinta? Wanting to love?', duration: TIMING.BRING_UP_SITUATION },
        { type: 'instruction', text: 'Bisakah kamu menyambut keinginan untuk mencintai?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting to love?' },
        { type: 'when', text: 'Kapan?' },

        // INSIGHT from Lester
        { type: 'instruction', text: 'Perhatikan di mana cinta SUDAH ada di dalam dirimu...', subtext: '"Seseorang yang hanya punya cinta di hati akan melakukan lebih banyak kebaikan daripada semua orang yang mencoba melakukan kebaikan." — Lester', duration: TIMING.AWARENESS_SHIFT },

        // CHECK
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        { type: 'completion', text: '💝 Wanting Approval Released!', subtext: 'Sumber cinta sudah ada di dalam diri kamu.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'wanting-security': {
      title: 'Release Wanting Security',
      wantingType: 'security',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', duration: TIMING.GROUNDING },
        { type: 'input', text: 'Pikirkan situasi yang memunculkan rasa TAKUT atau CEMAS...', subtext: 'Tentang keamanan, kelangsungan hidup, atau hal buruk yang mungkin terjadi.', placeholder: 'Tuliskan situasi...' },

        // FEEL
        { type: 'instruction', text: 'Rasakan energi wanting security...', subtext: 'Takut, cemas, gelisah, tidak aman, terancam...', duration: TIMING.FEEL_EMOTION },

        // WELCOME & RELEASE
        { type: 'instruction', text: 'Bisakah kamu menyambut keinginan untuk aman/selamat ini?', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // Round 2
        { type: 'instruction', text: 'Fokus lagi...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu membebaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // === OPPOSITE: WANTING TO DIE (halus) ===
        { type: 'instruction', text: 'Sekarang perhatikan lawannya...', subtext: 'Ini yang halus. Bukan ingin bunuh diri, tapi energi menyerah.', duration: TIMING.TRANSITION },
        { type: 'instruction', text: 'Apakah ada rasa malas hidup? Malas bangun pagi?', subtext: 'Capek dengan semuanya? Ingin menghilang sebentar?', duration: TIMING.BRING_UP_SITUATION },
        { type: 'instruction', text: 'Ini adalah "wanting to die" yang halus...', subtext: 'Energi pasrah, menyerah, tidak mau berpartisipasi dalam hidup.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting to die?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // Round 3 - Both
        { type: 'instruction', text: 'Sekali lagi...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting security DAN wanting to die?' },
        { type: 'when', text: 'Kapan?' },

        // BREATHING
        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Kamu aman saat ini.', duration: TIMING.BREATH_DEEP },

        // CHECK
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        { type: 'completion', text: '🛡️ Wanting Security Released!', subtext: 'Keamanan absolut datangnya dari dalam, bukan dari luar.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
        { type: 'completion', text: '🌟 Semua Wanting Released!', subtext: 'Semakin lepas keinginan, semakin MEMILIKI.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'triple': {
      title: 'Triple Welcoming',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Izinkan saat ini apa adanya.', duration: TIMING.GROUNDING },

        // BRING UP
        { type: 'input', text: 'Fokus pada situasi yang mengganggu...', placeholder: 'Tuliskan situasi...' },

        // LAYER 1: EMOSI
        { type: 'instruction', text: '🔴 LAYER 1: EMOSI', subtext: 'Perhatikan emosi apa yang muncul...', duration: TIMING.TRANSITION },
        { type: 'choice', text: 'Emosi apa yang hadir?', options: ['😠 Marah', '😢 Sedih', '😨 Takut', '😔 Kecewa', '😰 Cemas', '🔮 Campur aduk'] },
        { type: 'instruction', text: 'Izinkan emosi itu hadir sepenuhnya...', subtext: 'Jangan lawan. Sambut saja seperti tamu.', duration: TIMING.TRIPLE_LAYER },

        // LAYER 2: WANTING
        { type: 'instruction', text: '🟠 LAYER 2: WANTING', subtext: 'Gali lebih dalam... keinginan apa yang ada di bawah emosi ini?', duration: TIMING.TRANSITION },
        { type: 'choice', text: 'Wanting apa yang ada?', multiSelect: true, options: ['🎮 Control (ingin mengontrol)', '❤️ Approval (ingin dicintai/disetujui)', '🛡️ Security (ingin aman)', '🔗 Separation (ingin terpisah/menyatu)'] },
        { type: 'instruction', text: 'Izinkan wanting itu hadir...', subtext: 'Tidak perlu diubah. Biarkan saja ada.', duration: TIMING.TRIPLE_LAYER },

        // LAYER 3: KEAKUAN
        { type: 'instruction', text: '🟣 LAYER 3: RASA KEAKUAN', subtext: 'Perhatikan... ini tentang KAMU kan?', duration: TIMING.TRANSITION },
        { type: 'instruction', text: 'Ada rasa "ini tentang AKU"...', subtext: '"AKU yang mengalami ini." "Ini identitas AKU."', duration: TIMING.TRIPLE_LAYER },
        { type: 'instruction', text: 'Izinkan rasa keakuan itu hadir juga...', subtext: 'Sambut. Biarkan ada.', duration: TIMING.TRIPLE_LAYER },

        // COMBINE ALL THREE
        { type: 'instruction', text: 'Sekarang, biarkan KETIGANYA hadir bersamaan...', subtext: 'Emosi... Wanting... Keakuan... Semua sekaligus.', duration: TIMING.TRIPLE_COMBINE },

        // STEP BACK - Fase krusial
        { type: 'instruction', text: 'MUNDUR selangkah...', subtext: 'Jadi penonton saja. Jangan masuk ke dalam kumparan.', duration: TIMING.STEP_BACK },

        // VORTEX RELEASE - Beri waktu cukup
        { type: 'instruction', text: 'Biarkan ketiganya punya momentum sendiri...', subtext: 'Seperti kucing dan anjing berantem — kamu hanya lihat debu puyuh. Biarkan terurai sendiri.', duration: TIMING.VORTEX_RELEASE },

        // 3 QUESTIONS
        { type: 'yesno', text: 'Bisakah kamu melepaskan semuanya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // AWARENESS PERSPECTIVE
        { type: 'instruction', text: 'Apakah kamu EMOSI itu...', subtext: 'Atau kamu adalah yang SADAR bahwa emosi itu ada?', duration: TIMING.AWARENESS_SHIFT },

        // CHECK
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        { type: 'completion', text: '🌀 Triple Welcoming Selesai!', subtext: 'Kamu bukan emosi. Kamu adalah kesadaran yang mengamati.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
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
        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },
        { type: 'completion', text: '🌟 Release Selesai!', subtext: 'Kesadaran bukan perasaan. Perasaan datang dan pergi.' }
      ]
    },

    // ==================== SPECIAL TECHNIQUE SCRIPTS ====================

    'wanting-figure-out': {
      title: 'Melepas Keinginan untuk Memahami',
      category: 'special',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', duration: TIMING.GROUNDING },

        // EXPERIENCE "KNOWING"
        { type: 'instruction', text: 'Pikirkan satu hal yang kamu SUDAH TAHU jawabannya...', subtext: 'Misalnya: apa yang ingin kamu makan, atau apa rencana besok.', duration: TIMING.BRING_UP_SITUATION },
        { type: 'instruction', text: 'Perhatikan RASANYA ketika kamu tahu...', subtext: 'Ada kepastian (certainty). Jawaban datang tanpa dicari. Tenang.', duration: TIMING.FEEL_EMOTION },

        // EXPERIENCE "WANTING TO KNOW"
        { type: 'input', text: 'Sekarang, pikirkan sesuatu yang TIDAK kamu tahu dan penasaran jawabannya...', placeholder: 'Apa yang ingin kamu pahami/ketahui?' },
        { type: 'instruction', text: 'Perhatikan energinya...', subtext: 'Seperti mencari-cari keluar. Gelisah. Tidak nyaman. Ini adalah "wanting to figure it out".', duration: TIMING.FEEL_EMOTION },

        // RELEASE
        { type: 'instruction', text: 'Bisakah kamu menyambut keinginan untuk mencari tahu ini?', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk memahami?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // Round 2
        { type: 'instruction', text: 'Sekali lagi...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting to figure it out?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // OPEN TO INTUITION
        { type: 'instruction', text: 'Tanpa perlu tahu bagaimana caranya...', subtext: 'Bisakah kamu terbuka pada intuisi? Pada pengetahuan batin yang sudah menyediakan jawaban?', duration: TIMING.AWARENESS_SHIFT },

        { type: 'breathing', text: 'Tarik napas... hembuskan...', subtext: 'Biarkan jawaban datang sendiri.', duration: TIMING.BREATH_STANDARD },

        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        { type: 'completion', text: '💡 Wanting to Figure It Out Released!', subtext: 'Dengan melepas keinginan untuk tahu, kamu menjadi tahu. Jawaban sudah tersedia.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'release-resistance': {
      title: 'Melepas Resistensi (Saat Stuck)',
      category: 'special',
      steps: [
        { type: 'instruction', text: 'Kamu mungkin merasa stuck...', subtext: 'Bingung, capek, atau tidak bisa release. Itu wajar.', duration: TIMING.GROUNDING_DEEP },

        { type: 'choice', text: 'Apa yang kamu rasakan sekarang?', options: ['😵 Bingung', '😩 Capek/Lelah', '😤 Frustrasi', '😶 Mati rasa', '🌀 Overwhelmed', '🤷 Tidak tahu'] },

        { type: 'instruction', text: 'Apapun yang kamu rasakan itu valid.', subtext: 'Itu hanya pikiran dan perasaan. Tidak perlu diubah.', duration: TIMING.WELCOME_STANDARD },

        // RELEASE WANTING TO CHANGE IT
        { type: 'instruction', text: 'Perhatikan: ada KEINGINAN untuk MENGUBAH perasaan ini...', subtext: 'Itu yang sebenarnya bikin stuck. Bukan perasaannya.', duration: TIMING.FEEL_EMOTION },
        { type: 'yesno', text: 'Bisakah kamu melepaskan KEINGINAN untuk MENGUBAH perasaan ini?', subtext: 'Bukan melepas perasaannya — tapi melepas keinginan untuk mengubahnya.' },
        { type: 'yesno', text: 'Maukah kamu membiarkan perasaan stuck ini ada, tanpa perlu diubah?' },
        { type: 'when', text: 'Kapan?' },

        // Round 2
        { type: 'instruction', text: 'Sekali lagi...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk mengontrol keadaan ini?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Biarkan semuanya apa adanya.', duration: TIMING.BREATH_DEEP },

        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        { type: 'completion', text: '🌊 Resistensi Dilepaskan!', subtext: 'Resistensi terhadap resistensi = lebih banyak resistensi. Dengan menerima, kamu bebas.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'awareness-perspective': {
      title: 'Perspektif Kesadaran',
      category: 'special',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', duration: TIMING.GROUNDING },
        { type: 'input', text: 'Pikirkan situasi yang mengganggu...', placeholder: 'Tuliskan situasi...' },

        { type: 'choice', text: 'Emosi apa yang muncul?', options: ['😠 Marah', '😢 Sedih', '😨 Takut', '😰 Cemas', '😔 Kecewa', '🔮 Lainnya'] },

        { type: 'instruction', text: 'Rasakan emosi itu sepenuhnya...', subtext: 'Biarkan hadir. Jangan lawan.', duration: TIMING.FEEL_EMOTION },

        // AWARENESS SHIFT - Ini inti teknik ini
        { type: 'instruction', text: 'Sekarang, perhatikan...', subtext: 'Apakah kamu ADALAH emosi itu?', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Atau kamu adalah yang SADAR bahwa emosi itu ada?', subtext: 'Siapa yang mengamati emosi ini?', duration: TIMING.AWARENESS_SHIFT },

        { type: 'instruction', text: 'Perhatikan: ada emosi... dan ada KESADARAN yang mengamati emosi.', subtext: 'Kamu yang mana?', duration: TIMING.STEP_BACK },

        { type: 'instruction', text: 'Sebagai kesadaran...', subtext: 'Apakah kesadaran terpengaruh oleh emosi ini?', duration: TIMING.AWARENESS_SHIFT },

        { type: 'instruction', text: 'Kesadaran seperti langit.', subtext: 'Emosi seperti awan yang numpang lewat. Langit tidak terpengaruh awan.', duration: TIMING.WELCOME_DEEP },

        { type: 'yesno', text: 'Dari perspektif kesadaran, bisakah kamu membiarkan emosi itu lewat?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        { type: 'completion', text: '🌌 Perspektif Kesadaran!', subtext: 'Kamu bukan emosi. Kamu adalah kesadaran yang mengamati emosi.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'absolute-security': {
      title: 'Keamanan Absolut',
      category: 'special',
      steps: [
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Kamu aman saat ini. Detik ini.', duration: TIMING.GROUNDING_DEEP },

        { type: 'input', text: 'Apa yang membuatmu merasa tidak aman atau sangat cemas?', placeholder: 'Tuliskan...' },

        // CHECK REALITY
        { type: 'instruction', text: 'Perhatikan cerita di pikiranmu...', subtext: 'Apakah itu terjadi SAAT INI? Atau hanya pikiran tentang masa lalu/depan?', duration: TIMING.FEEL_EMOTION },
        { type: 'yesno', text: 'Apakah ancaman itu terjadi SAAT INI, detik ini?', subtext: 'Bukan nanti. Bukan kemarin. Detik ini.' },

        // ANCHOR TO NOW
        { type: 'instruction', text: 'Saat ini. Detik ini. Kamu AMAN.', subtext: 'Kamu bernapas. Kamu ada di sini. Sekarang.', duration: TIMING.GROUNDING_DEEP },

        // ACCESS ABSOLUTE SECURITY
        { type: 'instruction', text: 'Di dalam dirimu ada keamanan absolut...', subtext: 'Yang tidak pernah terancam oleh apapun. Yang selalu utuh.', duration: TIMING.AWARENESS_SHIFT },
        { type: 'instruction', text: 'Akses keamanan absolut itu sekarang...', subtext: 'Ia selalu ada di latar belakang. Jadikan latar depan.', duration: TIMING.AWARENESS_SHIFT },

        { type: 'yesno', text: 'Bisakah kamu merasakan keamanan absolut dari dalam?' },

        { type: 'instruction', text: 'Dari perspektif keamanan absolut...', subtext: 'Lihat cerita ketakutan itu. Terpengaruh tidak?', duration: TIMING.STEP_BACK },

        // RELEASE
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk merasa tidak aman?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting security?' },
        { type: 'when', text: 'Kapan?' },

        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Kamu aman. Sekarang. Selalu.', duration: TIMING.BREATH_DEEP },

        { type: 'completion-check', text: 'Apakah kamu merasa sudah lepas?', subtext: 'Cek di dalam diri kamu.' },

        { type: 'completion', text: '🛡️ Keamanan Absolut!', subtext: 'Keamanan sejati datang dari dalam. Tidak ada yang bisa mengancamnya.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    // ==================== HEALING JOURNEY SCRIPTS ====================

    'healing-body-love': {
      title: 'Kasih Love ke Tubuh',
      category: 'healing',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Tarik napas dalam. Rileks.', duration: TIMING.GROUNDING },
        { type: 'instruction', text: 'Izinkan dirimu hadir di sini, saat ini...', subtext: 'Bersama tubuhmu.', duration: TIMING.CHECK_FEELING },

        // CONNECT WITH BODY
        { type: 'instruction', text: 'Sekarang, perhatikan tubuhmu...', subtext: 'Dari kepala sampai kaki. Rasakan kehadirannya.', duration: TIMING.WELCOME_SHORT },
        { type: 'choice', text: 'Bagian mana yang terasa tidak nyaman atau sakit?', options: ['🧠 Kepala', '💗 Dada', '🫄 Perut', '🦴 Punggung', '🦵 Kaki/Tangan', '🌀 Seluruh tubuh', '🎯 Bagian lain'] },

        // ACKNOWLEDGE THE STRUGGLE
        { type: 'instruction', text: 'Perhatikan bagian itu...', subtext: 'Tanpa menghakimi. Tanpa kesal. Hanya perhatikan.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Sadari bahwa tubuhmu sudah BERUSAHA KERAS...', subtext: 'Selama ini, tubuhmu terus bekerja untukmu.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Sistem imunmu bekerja 24 jam sehari...', subtext: 'Sel-selmu terus beregenerasi. Tubuhmu selalu berusaha kembali seimbang.', duration: TIMING.BRING_UP_SITUATION },

        // RELEASE RESISTANCE TO BODY
        { type: 'instruction', text: 'Mungkin selama ini kamu kesal dengan tubuhmu...', subtext: 'Frustrasi. Menyalahkan. Merasa dikhianati.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu menyambut perasaan itu?', subtext: 'Kekesalan, frustrasi terhadap tubuh...' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk MELAWAN tubuhmu?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // GIVE LOVE TO BODY - Inti teknik Coach Lia
        { type: 'instruction', text: 'Sekarang...', subtext: 'Bisakah kamu memberi APRESIASI ke tubuhmu?', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: 'Terima kasih, tubuh...', subtext: 'Kamu sudah berusaha keras mendukungku.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Terima kasih sudah terus bekerja...', subtext: 'Bahkan ketika aku tidak menyadarinya.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Terima kasih sudah berusaha menyembuhkan diri sendiri...', subtext: 'Aku melihat usahamu.', duration: TIMING.WELCOME_SHORT },

        // SEND LOVE
        { type: 'instruction', text: 'Sekarang, kirimkan CINTA ke bagian yang sakit...', subtext: 'Bayangkan cahaya hangat atau energi penyembuhan mengalir ke sana.', duration: TIMING.STEP_BACK },
        { type: 'breathing', text: 'Tarik napas... kirim cinta ke tubuh...', subtext: 'Hembuskan... lepaskan resistensi...', duration: TIMING.BREATH_STANDARD },

        // RELEASE WANTING
        { type: 'instruction', text: 'Bisakah kamu melepaskan keinginan untuk MENGONTROL tubuhmu?', duration: TIMING.GROUNDING },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting control terhadap penyembuhan?' },
        { type: 'when', text: 'Kapan?' },

        // SECOND ROUND OF LOVE
        { type: 'instruction', text: 'Sekali lagi, kirim cinta ke tubuhmu...', subtext: 'Biarkan dia tahu kamu bersamanya, bukan melawannya.', duration: TIMING.BRING_UP_SITUATION },
        { type: 'breathing', text: 'Tarik napas dalam... isi dengan cinta...', subtext: 'Hembuskan... serahkan pada tubuh untuk menyembuhkan dirinya...', duration: TIMING.BREATH_STANDARD },

        // CHECK
        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan di tubuh dan perasaanmu.' },

        { type: 'completion', text: '💗 Cinta Terkirim ke Tubuh', subtext: 'Tubuhmu mendengar. Penyembuhan terjadi ketika kita berhenti melawan dan mulai mencintai.' },
        { type: 'insight', text: 'Ada pesan dari tubuhmu?', placeholder: 'Tulis apa yang kamu rasakan atau dengar dari tubuh...' }
      ]
    },

    'healing-chronic': {
      title: 'Melepas Beban Kondisi Kronis',
      category: 'healing',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },

        // IDENTIFY
        { type: 'input', text: 'Kondisi apa yang sudah kamu alami cukup lama?', subtext: 'Bisa fisik atau emosional.', placeholder: 'Tuliskan kondisi/penyakit...' },
        { type: 'input', text: 'Sudah berapa lama kamu mengalami ini?', placeholder: 'Contoh: 5 tahun, sejak kecil, dll...' },

        // ACKNOWLEDGE THE JOURNEY
        { type: 'instruction', text: 'Perjalanan yang panjang...', subtext: 'Kamu sudah melewati banyak hal.', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: 'Mungkin sudah banyak yang dicoba...', subtext: 'Dokter, obat, terapi, berbagai cara.', duration: TIMING.CHECK_FEELING },

        // SURFACE EMOTIONS
        { type: 'choice', text: 'Emosi apa yang paling sering muncul soal kondisi ini?', options: ['😩 Lelah/Capek', '😤 Frustrasi', '😢 Sedih', '😰 Takut', '😔 Putus asa', '😶 Mati rasa'] },
        { type: 'instruction', text: 'Izinkan emosi itu hadir sepenuhnya...', subtext: 'Jangan lawan. Wajar kamu merasakan itu.', duration: TIMING.WELCOME_STANDARD },

        // WELCOME
        { type: 'yesno', text: 'Bisakah kamu menyambut perasaan ini?', subtext: 'Semua lelah, frustrasi, kesedihan...' },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // WANTING LAYER
        { type: 'instruction', text: 'Gali lebih dalam...', subtext: 'Di balik emosi ini, ada keinginan apa?', duration: TIMING.GROUNDING },
        { type: 'choice', text: 'Wanting apa yang paling terasa?', options: ['🎮 Control - ingin mengontrol kondisi ini', '❤️ Approval - ingin dipahami/diperhatikan', '🛡️ Security - takut tidak sembuh/mati', '🔗 Separation - merasa berbeda dari orang lain'] },

        { type: 'instruction', text: 'Izinkan wanting itu hadir...', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting ini?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // IDENTITY ATTACHMENT
        { type: 'instruction', text: 'Sekarang perhatikan sesuatu yang lebih dalam...', subtext: 'Apakah kondisi ini sudah menjadi bagian dari IDENTITASMU?', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: '"Aku adalah orang yang sakit..."', subtext: '"Aku adalah penderita X..." Apakah ada label seperti ini?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan IDENTITAS sebagai "orang sakit"?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // GIVE LOVE TO BODY
        { type: 'instruction', text: 'Sekarang, berikan cinta ke tubuhmu...', subtext: 'Yang sudah berjuang bersamamu selama ini.', duration: TIMING.WELCOME_SHORT },
        { type: 'breathing', text: 'Tarik napas... kirim cinta dan apresiasi...', subtext: 'Hembuskan... lepaskan semua resistensi...', duration: TIMING.BREATH_STANDARD },

        // OPEN TO HEALING
        { type: 'instruction', text: 'Bisakah kamu terbuka pada kemungkinan penyembuhan?', subtext: 'Tanpa harus tahu caranya.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk TAHU bagaimana sembuh?' },
        { type: 'when', text: 'Kapan?' },

        // CHECK
        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan.' },

        { type: 'completion', text: '🌱 Beban Kronis Dilepaskan', subtext: 'Setiap release membuka ruang untuk penyembuhan. Tubuhmu tahu caranya sembuh.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'healing-alone': {
      title: 'Melepas Rasa Sendirian',
      category: 'healing',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },

        // IDENTIFY
        { type: 'input', text: 'Dalam hal apa kamu merasa sendirian?', subtext: 'Perjuangan, pengobatan, masalah, atau situasi apa?', placeholder: 'Tuliskan...' },

        // SURFACE THE FEELING
        { type: 'instruction', text: 'Rasakan perasaan sendirian itu...', subtext: 'Biarkan hadir sepenuhnya.', duration: TIMING.WELCOME_SHORT },
        { type: 'choice', text: 'Di mana kamu merasakannya di tubuh?', options: ['💗 Dada (kosong)', '🫄 Perut (hampa)', '😮‍💨 Tenggorokan (tercekik)', '🧠 Kepala (berat)', '🎯 Tempat lain'] },
        { type: 'instruction', text: 'Izinkan sensasi itu hadir...', subtext: 'Jangan lawan.', duration: TIMING.WELCOME_SHORT },

        // WELCOME
        { type: 'yesno', text: 'Bisakah kamu menyambut perasaan sendirian ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // WANTING APPROVAL
        { type: 'instruction', text: 'Di balik rasa sendirian...', subtext: 'Biasanya ada keinginan untuk DIPAHAMI, DIPERHATIKAN, DICINTAI.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Wanting Approval...', subtext: 'Ingin ada yang peduli. Ingin tidak sendirian.', duration: TIMING.CHECK_FEELING },
        { type: 'yesno', text: 'Bisakah kamu menyambut wanting approval ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk DIPAHAMI orang lain?' },
        { type: 'when', text: 'Kapan?' },

        // OPPOSITE - WANTING DISAPPROVAL
        { type: 'instruction', text: 'Perhatikan juga lawannya...', subtext: 'Apakah ada bagian dari dirimu yang INGIN sendirian? Yang memisahkan diri?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk TERPISAH?' },
        { type: 'when', text: 'Kapan?' },

        // SELF-LOVE
        { type: 'instruction', text: 'Sekarang, perhatikan sesuatu...', subtext: 'Ada SATU orang yang selalu bersamamu.', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: 'Dirimu sendiri.', subtext: 'Kamu tidak pernah benar-benar sendirian.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Bisakah kamu memberi cinta ke dirimu sendiri?', subtext: 'Yang sudah berjuang selama ini?', duration: TIMING.WELCOME_SHORT },
        { type: 'breathing', text: 'Tarik napas... kirim cinta ke diri sendiri...', subtext: 'Hembuskan... terima cinta itu...', duration: TIMING.BREATH_STANDARD },

        // SECOND ROUND
        { type: 'instruction', text: 'Sekali lagi...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting approval?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting separation?' },
        { type: 'when', text: 'Kapan?' },

        // CHECK
        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan.' },

        { type: 'completion', text: '🤗 Kamu Tidak Sendirian', subtext: 'Sumber cinta dan dukungan sudah ada di dalam dirimu. Kamu selalu bersama dirimu sendiri.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'healing-hurtful-words': {
      title: 'Melepas Trauma Perkataan Menyakitkan',
      category: 'healing',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Kita akan melakukan releasing yang mungkin intens. Kamu aman di sini.', duration: TIMING.CHECK_FEELING },
        { type: 'breathing', text: 'Tarik napas dalam...', subtext: 'Hembuskan perlahan... Grounding.', duration: TIMING.BREATH_SHORT },

        // IDENTIFY
        { type: 'input', text: 'Perkataan menyakitkan apa yang masih kamu ingat?', subtext: 'Bisa dari siapa saja — teman, keluarga, guru, siapapun.', placeholder: 'Tuliskan kata-kata itu...' },
        { type: 'input', text: 'Siapa yang mengatakannya? Kapan?', placeholder: 'Contoh: Teman SD, waktu kelas 4...' },

        // ACKNOWLEDGE IT HURT
        { type: 'instruction', text: 'Kata-kata itu menyakitkan...', subtext: 'Wajar kalau sampai sekarang masih terasa.', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: 'Kata-kata punya kekuatan...', subtext: 'Mereka bisa meninggalkan luka yang dalam.', duration: TIMING.CHECK_FEELING },

        // SURFACE EMOTIONS
        { type: 'choice', text: 'Emosi apa yang muncul ketika mengingat itu?', options: ['😢 Sedih', '😠 Marah', '😔 Malu', '💔 Sakit hati', '😨 Takut', '😶 Mati rasa'] },
        { type: 'choice', text: 'Di mana kamu merasakannya di tubuh?', options: ['💗 Dada', '😮‍💨 Tenggorokan', '🫄 Perut', '🧠 Kepala', '🎯 Lainnya'] },

        // WELCOME
        { type: 'instruction', text: 'Izinkan emosi itu hadir sepenuhnya...', subtext: 'Jangan lawan. Kamu aman.', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Bisakah kamu menyambut perasaan ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // WANTING APPROVAL - Core untuk trauma kata-kata
        { type: 'instruction', text: 'Di balik luka dari kata-kata...', subtext: 'Biasanya ada keinginan untuk DITERIMA, DIAKUI, DICINTAI.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Kata-kata itu menyakitkan karena kamu PEDULI...', subtext: 'Peduli apa yang orang lain pikirkan tentangmu.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu menyambut wanting approval ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk DISETUJUI orang itu?' },
        { type: 'when', text: 'Kapan?' },

        // RELEASE THE BELIEF
        { type: 'instruction', text: 'Sekarang perhatikan sesuatu penting...', subtext: 'Apakah kamu PERCAYA kata-kata itu?', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: 'Apakah kata-kata itu menjadi KEBENARAN tentang dirimu?', subtext: 'Atau hanya OPINI seseorang di masa lalu?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk PERCAYA kata-kata itu?' },
        { type: 'when', text: 'Kapan?' },

        // RELEASE IDENTITY FORMED
        { type: 'instruction', text: 'Apakah kata-kata itu membentuk identitasmu?', subtext: '"Aku memang tidak layak", "Aku memang bodoh", dll?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan IDENTITAS yang terbentuk dari kata-kata itu?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // COMPASSION FOR YOUNGER SELF
        { type: 'instruction', text: 'Sekarang, bayangkan dirimu yang lebih muda...', subtext: 'Yang mendengar kata-kata itu untuk pertama kali.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Dia tidak tahu harus bagaimana...', subtext: 'Dia hanya anak kecil/remaja yang terluka.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Bisakah kamu memberi CINTA ke diri yang lebih muda itu?', subtext: 'Katakan: "Kamu tidak salah. Kamu baik-baik saja. Kamu layak dicintai."', duration: TIMING.STEP_BACK },
        { type: 'breathing', text: 'Tarik napas... kirim cinta ke diri yang lebih muda...', subtext: 'Hembuskan... lepaskan luka...', duration: TIMING.BREATH_STANDARD },

        // FINAL RELEASE
        { type: 'yesno', text: 'Bisakah kamu melepaskan SEMUA yang terkait kata-kata itu?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // CHECK
        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan.' },

        { type: 'completion', text: '💚 Luka Kata-kata Dilepaskan', subtext: 'Kata-kata itu bukan kebenaran tentangmu. Kamu sudah dan selalu layak dicintai.' },
        { type: 'insight', text: 'Ada pesan untuk dirimu yang lebih muda?', placeholder: 'Tulis pesan cinta untuk dirimu...' }
      ]
    },

    'healing-complete-journey': {
      title: 'Healing Journey Lengkap',
      category: 'healing',
      description: 'Sesi mendalam seperti Coach Lia dengan Bella (~15-20 menit)',
      steps: [
        // ==================== FASE 1: GROUNDING ====================
        { type: 'instruction', text: '🌿 HEALING JOURNEY', subtext: 'Sesi mendalam untuk penyembuhan. Siapkan waktu 15-20 menit.', duration: TIMING.GROUNDING },
        { type: 'breathing', text: 'Tarik napas dalam...', subtext: 'Hembuskan perlahan... Rilekskan tubuh.', duration: TIMING.BREATH_SHORT },
        { type: 'instruction', text: 'Kamu aman di sini...', subtext: 'Ini ruang untuk menyembuhkan.', duration: TIMING.GROUNDING },

        // ==================== FASE 2: IDENTIFY KONDISI ====================
        { type: 'input', text: 'Apa yang ingin kamu sembuhkan hari ini?', subtext: 'Bisa kondisi fisik, emosional, atau keduanya.', placeholder: 'Tuliskan kondisi/situasi...' },
        { type: 'input', text: 'Sudah berapa lama kamu mengalami ini?', placeholder: 'Contoh: 5 tahun, sejak remaja, dll...' },

        // ==================== FASE 3: SURFACE EMOTIONS ====================
        { type: 'instruction', text: 'Pikirkan kondisi itu sekarang...', subtext: 'Biarkan perasaan muncul.', duration: TIMING.WELCOME_SHORT },
        { type: 'choice', text: 'Emosi apa yang paling kuat?', multiSelect: true, options: ['😩 Lelah', '😤 Frustrasi', '😢 Sedih', '😠 Marah', '😰 Takut/Cemas', '😔 Putus asa', '😶 Mati rasa'] },
        { type: 'choice', text: 'Di mana kamu merasakannya di tubuh?', options: ['💗 Dada', '🫄 Perut', '😮‍💨 Tenggorokan', '🧠 Kepala', '💪 Pundak/Leher', '🌀 Seluruh tubuh'] },

        // WELCOME & RELEASE EMOTIONS - Round 1
        { type: 'instruction', text: 'Izinkan emosi itu hadir sepenuhnya...', subtext: 'Jangan lawan. Jangan tekan. Biarkan saja.', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Bisakah kamu menyambut semua perasaan ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // ==================== FASE 4: MERASA SENDIRIAN ====================
        { type: 'instruction', text: 'Sekarang perhatikan sesuatu...', subtext: 'Dalam perjalanan ini, apakah kamu merasa SENDIRIAN?', duration: TIMING.CHECK_FEELING },
        { type: 'yesno', text: 'Apakah ada rasa sendirian dalam perjuangan ini?', subtext: 'Merasa tidak ada yang benar-benar mengerti?' },
        { type: 'instruction', text: 'Rasakan perasaan sendirian itu...', subtext: 'Biarkan hadir.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu menyambut rasa sendirian ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // ==================== FASE 5: WANTING LAYER ====================
        { type: 'instruction', text: 'Gali lebih dalam...', subtext: 'Di balik emosi dan rasa sendirian, ada KEINGINAN apa?', duration: TIMING.CHECK_FEELING },

        // Wanting Approval (dominan untuk kasus seperti Bella)
        { type: 'instruction', text: 'Apakah ada keinginan untuk DIPAHAMI?', subtext: 'Untuk DIPERHATIKAN? Untuk ADA yang PEDULI?', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Ini adalah Wanting Approval...', subtext: 'Keinginan untuk dicintai, diterima, diakui.', duration: TIMING.CHECK_FEELING },
        { type: 'yesno', text: 'Bisakah kamu menyambut wanting approval ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk DIPAHAMI orang lain?' },
        { type: 'when', text: 'Kapan?' },

        // Wanting Control
        { type: 'instruction', text: 'Apakah ada keinginan untuk MENGONTROL kondisi ini?', subtext: 'Ingin memperbaiki, ingin mengubah, ingin memaksa sembuh?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting control?' },
        { type: 'when', text: 'Kapan?' },

        // Wanting Security
        { type: 'instruction', text: 'Apakah ada KETAKUTAN?', subtext: 'Takut tidak sembuh? Takut sesuatu yang buruk terjadi?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting security?' },
        { type: 'when', text: 'Kapan?' },

        // ==================== FASE 6: TRAUMA MASA LALU ====================
        { type: 'instruction', text: 'Sekarang, perhatikan apakah ada MEMORI MASA LALU...', subtext: 'Yang terkait dengan kondisi ini?', duration: TIMING.CHECK_FEELING },
        { type: 'yesno', text: 'Apakah ada perkataan menyakitkan yang masih kamu ingat?', subtext: 'Dari siapapun — teman, keluarga, orang lain?' },
        { type: 'input', text: 'Jika ada, tuliskan perkataan itu...', subtext: 'Atau "tidak ada" jika tidak relevan.', placeholder: 'Tuliskan kata-kata yang menyakitkan...' },

        // Release trauma if present
        { type: 'instruction', text: 'Jika ada memori itu...', subtext: 'Izinkan hadir sekarang.', duration: TIMING.CHECK_FEELING },
        { type: 'yesno', text: 'Bisakah kamu melepaskan LUKA dari kata-kata itu?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk PERCAYA kata-kata itu?' },
        { type: 'when', text: 'Kapan?' },

        // ==================== FASE 7: RASA KEAKUAN ====================
        { type: 'instruction', text: 'Perhatikan sesuatu yang lebih dalam lagi...', subtext: 'Apakah kondisi ini sudah menjadi IDENTITASMU?', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: '"Aku adalah orang yang sakit..."', subtext: '"Aku adalah penderita X..." "Aku selalu begini..."', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu menyambut rasa KEAKUAN ini?', subtext: 'Identitas yang terbentuk dari kondisi ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan identitas sebagai "orang yang sakit/menderita"?' },
        { type: 'when', text: 'Kapan?' },

        // ==================== FASE 8: TRIPLE WELCOMING ====================
        { type: 'instruction', text: 'Sekarang, kita akan melakukan Triple Welcoming...', subtext: 'Izinkan TIGA hal hadir bersamaan.', duration: TIMING.GROUNDING },
        { type: 'instruction', text: '1️⃣ EMOSI — semua yang kamu rasakan...', subtext: 'Biarkan hadir.', duration: TIMING.TRIPLE_LAYER },
        { type: 'instruction', text: '2️⃣ WANTING — semua keinginan di bawahnya...', subtext: 'Approval, control, security...', duration: TIMING.TRIPLE_LAYER },
        { type: 'instruction', text: '3️⃣ KEAKUAN — "ini tentang AKU"...', subtext: 'Identitas, cerita tentang diri...', duration: TIMING.TRIPLE_LAYER },
        { type: 'instruction', text: 'Biarkan ketiganya hadir BERSAMAAN...', subtext: 'Seperti bola energi yang berputar.', duration: TIMING.TRIPLE_COMBINE },
        { type: 'instruction', text: 'Sekarang, MUNDUR selangkah...', subtext: 'Jadi penonton. Jangan masuk ke dalam kumparan.', duration: TIMING.STEP_BACK },
        { type: 'instruction', text: 'Biarkan energi itu punya momentum sendiri...', subtext: 'Biarkan terurai... biarkan melarutkan diri sendiri...', duration: TIMING.VORTEX_RELEASE },
        { type: 'yesno', text: 'Bisakah kamu melepaskan SEMUANYA?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // ==================== FASE 9: KASIH LOVE KE TUBUH ====================
        { type: 'instruction', text: 'Sekarang, bagian yang sangat penting...', subtext: 'Kita akan memberi CINTA ke tubuh.', duration: TIMING.GROUNDING },
        { type: 'instruction', text: 'Perhatikan tubuhmu...', subtext: 'Yang sudah menemanimu selama ini.', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: 'Tubuhmu sudah BERUSAHA KERAS...', subtext: 'Sistem imun bekerja. Sel-sel beregenerasi. Tubuh selalu berusaha sembuh.', duration: TIMING.BRING_UP_SITUATION },
        { type: 'instruction', text: 'Mungkin selama ini kamu kesal dengan tubuhmu...', subtext: 'Frustrasi. Menyalahkan. Melawan.', duration: TIMING.CHECK_FEELING },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk MELAWAN tubuhmu?' },
        { type: 'when', text: 'Kapan?' },

        // Give Love
        { type: 'instruction', text: 'Sekarang, kirimkan CINTA ke tubuhmu...', duration: TIMING.GROUNDING },
        { type: 'instruction', text: '"Terima kasih, tubuh..."', subtext: '"Kamu sudah berusaha keras mendukungku."', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: '"Terima kasih sudah terus bekerja..."', subtext: '"Bahkan ketika aku tidak menyadarinya."', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: '"Terima kasih sudah berusaha menyembuhkan diri sendiri..."', subtext: '"Aku melihat usahamu. Aku bersamamu."', duration: TIMING.BRING_UP_SITUATION },
        { type: 'breathing', text: 'Tarik napas dalam... isi dengan cinta...', subtext: 'Hembuskan... kirim ke seluruh tubuh...', duration: TIMING.BREATH_DEEP },

        // ==================== FASE 10: KASIH LOVE KE DIRI SENDIRI ====================
        { type: 'instruction', text: 'Dan terakhir...', subtext: 'Kirim cinta ke DIRIMU SENDIRI.', duration: TIMING.GROUNDING },
        { type: 'instruction', text: 'Kamu sudah berjuang...', subtext: 'Selama bertahun-tahun. Kamu kuat.', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: 'Bayangkan dirimu yang lebih muda...', subtext: 'Yang pertama kali mengalami ini. Yang mungkin takut, bingung, sendirian.', duration: TIMING.BRING_UP_SITUATION },
        { type: 'instruction', text: 'Kirim cinta ke diri yang lebih muda itu...', subtext: '"Kamu tidak sendirian. Aku di sini. Kamu baik-baik saja."', duration: TIMING.STEP_BACK },
        { type: 'breathing', text: 'Tarik napas... terima cinta itu untuk dirimu sendiri...', subtext: 'Hembuskan... serahkan semua pada proses penyembuhan...', duration: TIMING.BREATH_DEEP },

        // ==================== FASE 11: FINAL CHECK ====================
        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan di tubuh dan perasaanmu.' },

        // ==================== COMPLETION ====================
        { type: 'completion', text: '🦋 Healing Journey Selesai', subtext: 'Setiap sesi membuka ruang untuk penyembuhan. Tubuh dan jiwamu tahu caranya sembuh. Percayai prosesnya.' },
        { type: 'insight', text: 'Ada insight atau pesan yang ingin dicatat?', placeholder: 'Tulis insight, perasaan, atau pesan dari tubuh/diri...' }
      ]
    },

    // ==================== COACH LIA - SEDONA METHOD EXERCISES ====================
    // Based on Workshop: Melepas Mental Miskin & Mencapai Keberlimpahan

    'mental-miskin': {
      title: 'Melepas Mental Miskin',
      category: 'coach-lia',
      description: 'Teknik dari Coach Lia untuk melepas mental miskin dan membuka keberlimpahan',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },
        { type: 'instruction', text: 'Izinkan saat ini menjadi seperti apa adanya...', subtext: 'Tanpa perlu diubah.', duration: TIMING.GROUNDING_DEEP },

        // BRING UP "MISKIN"
        { type: 'instruction', text: 'Sekarang, dengarkan kata ini: "MISKIN"', subtext: 'Dengarkan saja. Perhatikan apa yang muncul.', duration: TIMING.BRING_UP_SITUATION },
        { type: 'choice', text: 'Apa yang muncul ketika mendengar kata "miskin"?', options: ['💸 Kekurangan', '😔 Kasihan', '😰 Takut', '😤 Tidak mau', '🤔 Rasa bersalah', '🎯 Perasaan lain'] },

        // FEEL IN BODY
        { type: 'choice', text: 'Di mana kamu merasakannya di tubuh?', options: ['💗 Dada (berat)', '🫄 Perut (mulas)', '😮‍💨 Tenggorokan (tercekik)', '💪 Pundak (tegang)', '🧠 Kepala (berat)', '🎯 Tempat lain'] },
        { type: 'instruction', text: 'Izinkan sensasi itu hadir...', subtext: 'Dirasain dulu aja. Diakui kalau itu ada.', duration: TIMING.WELCOME_STANDARD },

        // TEKNIK PINTU TERBUKA
        { type: 'instruction', text: 'Sekarang, bayangkan di lokasi sensasi itu ada PINTU...', subtext: 'Pintu yang bisa dibuka.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Buka pintu itu lebar-lebar...', subtext: 'Izinkan sensasi itu mengalir keluar.', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Mau nggak mengizinkan itu mengalir keluar?', subtext: 'Biarkan saja keluar lewat pintu itu.' },
        { type: 'when', text: 'Kapan?' },

        // EKSPANSI KELEGAAN
        { type: 'instruction', text: 'Sekarang perhatikan kelegaan yang muncul...', subtext: 'Izinkan kelegaan itu hadir secara utuh.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Biarkan kelegaan itu berekspansi...', subtext: 'Melebar... meluas... ke seluruh tubuh.', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Biarkan kelegaan mengalir ke seluruh ruangan...', subtext: 'Sampai tidak terbatas.', duration: TIMING.STEP_BACK },

        // CHECK ULANG
        { type: 'instruction', text: 'Sekarang lihat lagi kata "MISKIN"...', subtext: 'Apa yang muncul sekarang?', duration: TIMING.CHECK_FEELING },

        // RELEASE KONSEP
        { type: 'instruction', text: 'Dari perspektif kelegaan ini...', subtext: 'Bagaimana kalau "miskin" itu cuma KONSEP?', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: '"Miskin" hanya konsep yang digunakan untuk mengatur masyarakat...', subtext: 'Bukan kebenaran absolut tentang dirimu.', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Konsep "miskin" itu dilepas, boleh nggak?' },
        { type: 'yesno', text: 'Mau nggak dilepas?' },
        { type: 'when', text: 'Kapan?' },

        // TERBUKA PADA KEBERLIMPAHAN
        { type: 'instruction', text: 'Sekarang, boleh nggak terbuka pada keberlimpahan?', subtext: 'Kemudahan yang saat ini sudah selalu tersedia?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Mungkin nggak punya uang lebih saat ini?' },
        { type: 'yesno', text: 'Kalau mungkin, mengizinkan nggak?' },
        { type: 'when', text: 'Kapan?' },

        // SURRENDER
        { type: 'instruction', text: 'Apapun tindakan yang perlu dilakukan...', subtext: 'Serahin aja, lepasin aja pada kekuatan yang tahu jalannya.', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Termasuk yang disebut "Aku"...', subtext: 'Lepasin aja. Sampai habis. Sampai kosong.', duration: TIMING.STEP_BACK },
        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Nikmatin kekosongan itu.', duration: TIMING.BREATH_DEEP },

        // FINAL CHECK
        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Ketika tidak butuh apa-apa, justru keajaiban terjadi.' },

        { type: 'completion', text: '💰 Mental Miskin Dilepaskan!', subtext: 'Yang penting bukan jumlah uang, tapi merasa CUKUP. Ketika tidak melekat, pintu keberlimpahan terbuka.' },
        { type: 'insight', text: 'Ada insight yang ingin dicatat?', placeholder: 'Tulis insight kamu...' }
      ]
    },

    'pintu-terbuka': {
      title: 'Teknik Pintu Terbuka',
      category: 'coach-lia',
      description: 'Melepas melalui sensasi tubuh dengan visualisasi pintu',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },

        // BRING UP
        { type: 'input', text: 'Pikirkan satu hal yang mengganggu kamu...', subtext: 'Bisa situasi, orang, atau perasaan.', placeholder: 'Tuliskan...' },

        // FEEL IN BODY
        { type: 'instruction', text: 'Perhatikan di mana kamu merasakannya di tubuh...', subtext: 'Sensasi apa yang muncul?', duration: TIMING.FEEL_IN_BODY },
        { type: 'choice', text: 'Di mana lokasinya?', options: ['💗 Dada', '🫄 Perut', '😮‍💨 Tenggorokan', '💪 Pundak', '🧠 Kepala', '🎯 Tempat lain'] },
        { type: 'choice', text: 'Sensasinya seperti apa?', options: ['⚖️ Berat', '🔥 Panas', '❄️ Dingin', '🌀 Berputar', '⚡ Tegang', '🎯 Lainnya'] },

        // IZINKAN HADIR
        { type: 'instruction', text: 'Izinkan sensasi itu hadir...', subtext: 'Dirasain dulu aja. Diakui kalau itu ada.', duration: TIMING.WELCOME_STANDARD },

        // VISUALISASI PINTU
        { type: 'instruction', text: 'Sekarang, bayangkan di lokasi sensasi itu ada PINTU...', subtext: 'Pintu yang bisa dibuka lebar-lebar.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Buka pintu itu LEBAR-LEBAR...', subtext: 'Semakin lebar, semakin baik.', duration: TIMING.WELCOME_SHORT },

        // RELEASE
        { type: 'yesno', text: 'Boleh nggak sensasi itu mengalir keluar?', subtext: 'Lewat pintu yang sudah terbuka.' },
        { type: 'yesno', text: 'Mau nggak mengizinkan itu mengalir keluar?' },
        { type: 'when', text: 'Kapan?' },

        // CHECK
        { type: 'instruction', text: 'Perhatikan... masih berat atau sudah lega?', subtext: 'Cek sensasinya.', duration: TIMING.CHECK_FEELING },

        // ROUND 2 jika perlu
        { type: 'instruction', text: 'Kalau masih ada sisa, buka pintunya lebih lebar lagi...', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Boleh nggak sisanya juga mengalir keluar?' },
        { type: 'when', text: 'Kapan?' },

        // EKSPANSI KELEGAAN
        { type: 'instruction', text: 'Sekarang izinkan kelegaan untuk hadir secara utuh...', subtext: 'Biarkan kelegaan itu berekspansi, melebar, meluas.', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Biarkan kelegaan mengalir ke seluruh tubuh...', subtext: 'Biarkan mengalir ke seluruh ruangan. Sampai tidak terbatas.', duration: TIMING.STEP_BACK },

        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Nikmati kelegaan ini.', duration: TIMING.BREATH_STANDARD },

        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan.' },

        { type: 'completion', text: '🚪 Release via Pintu Selesai!', subtext: 'Tubuhmu tahu cara melepaskan. Percayai prosesnya.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'ekspansi-kelegaan': {
      title: 'Ekspansi Kelegaan',
      category: 'coach-lia',
      description: 'Memperluas perasaan lega ke seluruh tubuh dan ruangan',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },

        // QUICK RELEASE DULU
        { type: 'input', text: 'Apa yang sedikit mengganggu kamu saat ini?', placeholder: 'Tuliskan...' },
        { type: 'instruction', text: 'Rasakan emosinya...', subtext: 'Izinkan hadir.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskannya?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // FOKUS KE KELEGAAN
        { type: 'instruction', text: 'Sekarang perhatikan kelegaan yang muncul...', subtext: 'Mungkin kecil, mungkin besar. Apapun itu, perhatikan.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Izinkan kelegaan itu hadir secara UTUH...', subtext: 'Jangan batasi. Biarkan datang sepenuhnya.', duration: TIMING.WELCOME_STANDARD },

        // EKSPANSI - Step by step
        { type: 'instruction', text: 'Biarkan kelegaan itu BEREKSPANSI...', subtext: 'Melebar... meluas...', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Biarkan mengalir ke seluruh TUBUH...', subtext: 'Dari kepala sampai kaki.', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Biarkan mengalir ke seluruh RUANGAN...', subtext: 'Memenuhi ruangan ini.', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Biarkan meluas sampai TIDAK TERBATAS...', subtext: 'Tanpa batas. Ekspansi terus.', duration: TIMING.STEP_BACK },

        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Berada di dalam kelegaan tanpa batas.', duration: TIMING.BREATH_DEEP },

        // DARI PERSPEKTIF KELEGAAN
        { type: 'instruction', text: 'Dari perspektif kelegaan tanpa batas ini...', subtext: 'Lihat masalah yang tadi. Bagaimana rasanya?', duration: TIMING.AWARENESS_SHIFT },

        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan perspektif.' },

        { type: 'completion', text: '✨ Ekspansi Kelegaan Selesai!', subtext: 'Kelegaan adalah sifat alami kesadaran. Ia selalu tersedia.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'melepas-konsep': {
      title: 'Melepas Konsep',
      category: 'coach-lia',
      description: 'Melepas konsep/belief yang membatasi',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },

        // IDENTIFIKASI KONSEP
        { type: 'input', text: 'Konsep atau keyakinan apa yang ingin kamu lepas?', subtext: 'Contoh: "Aku tidak layak", "Uang itu susah", "Aku selalu gagal"', placeholder: 'Tuliskan konsep/belief...' },

        // FEEL IT
        { type: 'instruction', text: 'Perhatikan konsep itu...', subtext: 'Rasakan energinya di tubuh.', duration: TIMING.FEEL_EMOTION },
        { type: 'choice', text: 'Di mana kamu merasakannya?', options: ['💗 Dada', '🫄 Perut', '😮‍💨 Tenggorokan', '🧠 Kepala', '🎯 Lainnya'] },

        // WELCOME
        { type: 'instruction', text: 'Izinkan konsep itu hadir...', subtext: 'Jangan lawan. Biarkan saja.', duration: TIMING.WELCOME_STANDARD },

        // PERSPEKTIF BARU
        { type: 'instruction', text: 'Sekarang, perhatikan sesuatu...', subtext: 'Bagaimana kalau konsep itu hanya KONSEP?', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Konsep adalah pikiran...', subtext: 'Pikiran bukan fakta. Pikiran bukan kebenaran absolut.', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Konsep ini mungkin kamu pelajari dari orang lain...', subtext: 'Keluarga, masyarakat, pengalaman. Tapi itu bukan KAMU.', duration: TIMING.AWARENESS_SHIFT },

        // RELEASE
        { type: 'yesno', text: 'Konsep ini dilepas, boleh nggak?', subtext: 'Ingat, kamu tidak melepas kebenaran. Kamu melepas pikiran.' },
        { type: 'yesno', text: 'Mau nggak dilepas?' },
        { type: 'when', text: 'Kapan?' },

        // ROUND 2
        { type: 'instruction', text: 'Sekali lagi...', duration: TIMING.TRANSITION },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk PERCAYA konsep ini?' },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk MENJADI ORANG yang ditentukan konsep ini?' },
        { type: 'when', text: 'Kapan?' },

        // EKSPANSI
        { type: 'instruction', text: 'Biarkan kelegaan meluas...', subtext: 'Ke seluruh tubuh. Ke seluruh ruangan.', duration: TIMING.STEP_BACK },

        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Tanpa konsep itu, siapa kamu?' },

        { type: 'completion', text: '🎈 Konsep Dilepaskan!', subtext: 'Kamu lebih besar dari konsep apapun. Kamu adalah kesadaran yang bebas.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'terbuka-keberlimpahan': {
      title: 'Terbuka pada Keberlimpahan',
      category: 'coach-lia',
      description: 'Membuka diri pada kemudahan dan keberlimpahan',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },
        { type: 'breathing', text: 'Tarik napas dalam...', subtext: 'Hembuskan perlahan...', duration: TIMING.BREATH_SHORT },

        // CHECK CURRENT STATE
        { type: 'instruction', text: 'Perhatikan saat ini seperti apa adanya...', subtext: 'Tanpa perlu diubah.', duration: TIMING.GROUNDING_DEEP },

        // PERTANYAAN KUNCI
        { type: 'instruction', text: 'Bagaimana kalau ini SUDAH keberlimpahan?', subtext: 'Perhatikan reaksi yang muncul.', duration: TIMING.AWARENESS_SHIFT },
        { type: 'yesno', text: 'Ada yang menolak?', subtext: 'Ada suara yang bilang "nggak mungkin"?' },

        // RELEASE RESISTANCE
        { type: 'instruction', text: 'Izinkan resistensi itu hadir...', subtext: 'Jangan lawan apply.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan resistensi terhadap keberlimpahan?' },
        { type: 'yesno', text: 'Maukah kamu melepaskannya?' },
        { type: 'when', text: 'Kapan?' },

        // PERTANYAAN KUNCI 2
        { type: 'instruction', text: 'Bagaimana kalau ini SUDAH kebebasan?', subtext: 'Perhatikan reaksi.', duration: TIMING.AWARENESS_SHIFT },
        { type: 'yesno', text: 'Bisakah kamu terbuka pada kebebasan yang sudah ada?' },
        { type: 'when', text: 'Kapan?' },

        // TERBUKA
        { type: 'instruction', text: 'Boleh nggak terbuka pada keberlimpahan?', subtext: 'Kemudahan yang saat ini sudah selalu tersedia?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Mungkin nggak punya lebih saat ini?' },
        { type: 'yesno', text: 'Kalau mungkin, mengizinkan nggak?' },
        { type: 'when', text: 'Kapan?' },

        // TERBUKA DARI SEGALA ARAH
        { type: 'instruction', text: 'Keberlimpahan bisa datang dari mana saja...', subtext: 'Jangan mengatur "harus dari sini". Bisa dibeli sendiri, bisa dikasih, bisa cara yang tidak terduga.', duration: TIMING.BRING_UP_SITUATION },
        { type: 'yesno', text: 'Bisakah kamu terbuka dari SEGALA ARAH?' },
        { type: 'when', text: 'Kapan?' },

        // SURRENDER
        { type: 'instruction', text: 'Serahin aja pada kekuatan yang tahu jalannya...', subtext: 'Termasuk "Aku". Lepasin aja.', duration: TIMING.STEP_BACK },

        { type: 'breathing', text: 'Tarik napas dalam...', subtext: 'Terima keberlimpahan yang sudah ada.', duration: TIMING.BREATH_STANDARD },

        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Ketika tidak ngarep, justru keajaiban terjadi.' },

        { type: 'completion', text: '🌈 Terbuka pada Keberlimpahan!', subtext: 'Keberlimpahan adalah sifat alami alam semesta. Kamu bagian dari itu.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'surrender-lengkap': {
      title: 'Teknik Menyerahkan (Surrender)',
      category: 'coach-lia',
      description: 'Menyerahkan sepenuhnya pada kekuatan yang lebih besar',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },

        // BRING UP
        { type: 'input', text: 'Apa yang sedang kamu perjuangkan atau inginkan?', subtext: 'Goal, keinginan, atau situasi yang ingin berubah.', placeholder: 'Tuliskan...' },

        // FEEL
        { type: 'instruction', text: 'Rasakan energi keinginan itu...', subtext: 'Mungkin ada dorongan, tekanan, atau kecemasan.', duration: TIMING.FEEL_EMOTION },

        // RELEASE CONTROL
        { type: 'instruction', text: 'Perhatikan: ada keinginan untuk MENGONTROL hasilnya...', subtext: 'Wanting control.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk mengontrol bagaimana ini terjadi?' },
        { type: 'when', text: 'Kapan?' },

        // SURRENDER STEP BY STEP
        { type: 'instruction', text: 'Sekarang, apapun tindakan yang perlu dilakukan...', subtext: 'Serahin aja pada kekuatan yang tahu jalannya.', duration: TIMING.WELCOME_STANDARD },
        { type: 'yesno', text: 'Boleh nggak menyerahkan hasil kepada kekuatan yang lebih besar?' },
        { type: 'when', text: 'Kapan?' },

        // RELEASE "AKU"
        { type: 'instruction', text: 'Termasuk yang disebut "AKU"...', subtext: 'Yang ingin, yang takut, yang berharap.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Lepasin aja...', subtext: 'Sampai habis. Sampai kosong.', duration: TIMING.STEP_BACK },
        { type: 'yesno', text: 'Boleh nggak melepaskan "Aku" yang menginginkan ini?' },
        { type: 'when', text: 'Kapan?' },

        // NIKMATI KEKOSONGAN
        { type: 'instruction', text: 'Nikmatin kekosongan itu...', subtext: 'Tidak ada yang perlu dicari. Tidak ada yang perlu dikejar.', duration: TIMING.AWARENESS_SHIFT },
        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Berada di kekosongan yang damai.', duration: TIMING.BREATH_DEEP },

        // TIDAK MELEKAT
        { type: 'instruction', text: 'Ketika tidak butuh apa-apa...', subtext: 'Justru keajaiban terjadi.', duration: TIMING.WELCOME_STANDARD },
        { type: 'instruction', text: 'Ketika tidak melekat...', subtext: 'Pintu-pintu terbuka.', duration: TIMING.AWARENESS_SHIFT },

        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan kedamaian yang muncul.' },

        { type: 'completion', text: '🙏 Surrender Selesai!', subtext: 'Menyerahkan bukan menyerah. Ini adalah kepercayaan bahwa alam semesta mendukungmu.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'goal-manifestasi': {
      title: 'Goal/Manifestasi dengan Releasing',
      category: 'coach-lia',
      description: 'Proses manifestasi dengan teknik dari Coach Lia',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks. Perhatikan saat ini seperti apa adanya.', duration: TIMING.GROUNDING },

        // PERTANYAAN PEMBUKA
        { type: 'instruction', text: 'Bagaimana kalau ini sudah KEBERLIMPAHAN?', subtext: 'Perhatikan reaksi.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Bagaimana kalau ini sudah KEBEBASAN?', subtext: 'Perhatikan.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Bagaimana kalau ini sudah KEBERADAAN yang utuh?', subtext: 'Terbuka pada itu.', duration: TIMING.AWARENESS_SHIFT },

        // GOAL
        { type: 'input', text: 'Apa goal yang ingin kamu wujudkan?', subtext: 'Contoh: rumah, mobil, penghasilan, kesehatan.', placeholder: 'Tuliskan goal...' },

        // CEK MOTIVASI
        { type: 'instruction', text: 'Cek motivasi kamu...', subtext: 'Apakah benar-benar ingin itu, atau butuh approval?', duration: TIMING.WELCOME_SHORT },
        { type: 'choice', text: 'Wanting apa yang ada?', multiSelect: true, options: ['🎮 Control', '❤️ Approval', '🛡️ Security', '🔗 Separation'] },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting ini?' },
        { type: 'when', text: 'Kapan?' },

        // VISUALISASI
        { type: 'instruction', text: 'Sekarang, bayangkan goal itu SUDAH TERWUJUD...', subtext: 'Detail. Seperti apa orangnya? Hidup seperti apa?', duration: TIMING.BRING_UP_SITUATION },
        { type: 'instruction', text: 'Rasakan sudah MEMILIKI...', subtext: 'Bukan akan punya. Sudah punya sekarang.', duration: TIMING.WELCOME_STANDARD },

        // CEK HAMBATAN
        { type: 'instruction', text: 'Perhatikan: ada yang MERAGUKAN?', subtext: 'Suara yang bilang "nggak mungkin"?', duration: TIMING.CHECK_FEELING },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keraguan itu?' },
        { type: 'when', text: 'Kapan?' },

        { type: 'instruction', text: 'Ada yang MENGHAMBAT?', subtext: 'Belief, ketakutan, atau resistensi?', duration: TIMING.CHECK_FEELING },
        { type: 'yesno', text: 'Bisakah kamu menerima, mengakui, dan melepaskan hambatan itu?' },
        { type: 'when', text: 'Kapan?' },

        // SERAHKAN
        { type: 'instruction', text: 'Sekarang, serahkan goal ini...', subtext: 'Pada kekuatan yang tahu jalannya.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Termasuk "Aku" yang menginginkan ini...', subtext: 'Serahkan. Sampai kosong.', duration: TIMING.STEP_BACK },
        { type: 'yesno', text: 'Boleh nggak menyerahkan sepenuhnya?' },
        { type: 'when', text: 'Kapan?' },

        // CEK PERASAAN
        { type: 'instruction', text: 'Perhatikan perasaan yang muncul...', subtext: 'Mungkin senang. Mungkin bahagia. Mungkin damai.', duration: TIMING.CHECK_FEELING },
        { type: 'instruction', text: 'Biarkan rasa itu melebur...', subtext: 'Melebar ke seluruh tubuh dan ruangan.', duration: TIMING.STEP_BACK },

        // TIDAK MELEKAT
        { type: 'instruction', text: 'Hasil akhir: tidak butuh apa-apa...', subtext: 'Di situlah keajaiban terjadi.', duration: TIMING.AWARENESS_SHIFT },

        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Selesai. Serahkan.', duration: TIMING.BREATH_STANDARD },

        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan.' },

        { type: 'completion', text: '⭐ Manifestasi Selesai!', subtext: 'Jangan magical thinking — tetap ada aksi yang diperlukan. Tapi tanpa melekat, pintu terbuka lebih mudah.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'kesadaran-murni': {
      title: 'Kesadaran Murni (Pure Awareness)',
      category: 'coach-lia',
      description: 'Menyadari bahwa semua terjadi tanpa campur tangan "kita"',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },
        { type: 'breathing', text: 'Tarik napas dalam...', subtext: 'Hembuskan perlahan...', duration: TIMING.BREATH_SHORT },

        // AWARENESS OF SOUND
        { type: 'instruction', text: 'Perhatikan SUARA...', subtext: 'Suara apapun yang ada di sekitar.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Perhatikan bahwa mendengar sudah TERJADI...', subtext: 'Tanpa kamu perlu melakukan apapun. Suara sudah terdengar.', duration: TIMING.AWARENESS_SHIFT },

        // AWARENESS OF SIGHT
        { type: 'instruction', text: 'Perhatikan PENGLIHATAN...', subtext: 'Apa yang terlihat di depanmu.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Perhatikan bahwa melihat sudah TERJADI...', subtext: 'Tanpa ada "kita yang melihat". Melihat terjadi begitu saja.', duration: TIMING.AWARENESS_SHIFT },

        // AWARENESS OF THOUGHTS
        { type: 'instruction', text: 'Perhatikan PIKIRAN...', subtext: 'Pikiran yang datang dan pergi.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Perhatikan bahwa pikiran DATANG dan PERGI...', subtext: 'Tanpa ada "kita yang mikir". Pikiran muncul sendiri.', duration: TIMING.AWARENESS_SHIFT },

        // AWARENESS OF SENSATIONS
        { type: 'instruction', text: 'Perhatikan SENSASI tubuh...', subtext: 'Apapun yang terasa.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Perhatikan bahwa merasa sudah TERJADI...', subtext: 'Tanpa harus "kita ngerasa". Sensasi hadir sendiri.', duration: TIMING.AWARENESS_SHIFT },

        // AWARENESS OF FEELINGS
        { type: 'instruction', text: 'Perhatikan PERASAAN...', subtext: 'Emosi yang mungkin ada.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Perhatikan bahwa perasaan DATANG dan PERGI...', subtext: 'Seperti awan di langit.', duration: TIMING.AWARENESS_SHIFT },

        // AWARENESS OF BREATH
        { type: 'instruction', text: 'Perhatikan NAPAS...', subtext: 'Napas masuk, napas keluar.', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Perhatikan bahwa napas terjadi SENDIRI...', subtext: 'Tanpa diatur. Napas sudah tahu caranya bernapas.', duration: TIMING.AWARENESS_SHIFT },

        // THE KEY INSIGHT
        { type: 'instruction', text: 'Perhatikan bahwa SEMUA sudah terjadi begitu saja...', subtext: 'Tanpa campur tangan "kita".', duration: TIMING.STEP_BACK },
        { type: 'instruction', text: 'Ada yang MENYADARI semua ini...', subtext: 'Siapa atau apa yang menyadari?', duration: TIMING.AWARENESS_SHIFT },
        { type: 'instruction', text: 'Kesadaran itu SELALU HADIR...', subtext: 'Tidak datang dan pergi. Selalu di sini.', duration: TIMING.AWARENESS_SHIFT },

        // REST IN AWARENESS
        { type: 'instruction', text: 'Istirahatlah sebagai kesadaran itu...', subtext: 'Bukan sebagai yang berpikir, merasa, atau mengalami. Sebagai kesadaran murni.', duration: TIMING.VORTEX_RELEASE },

        { type: 'breathing', text: 'Tarik napas...', subtext: 'Kesadaran menyadari napas.', duration: TIMING.BREATH_DEEP },

        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Berada sebagai kesadaran murni.' },

        { type: 'completion', text: '🌌 Kesadaran Murni', subtext: 'Kamu bukan pikiran. Kamu bukan perasaan. Kamu adalah kesadaran yang mengamati semuanya.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
      ]
    },

    'holistic-wanting': {
      title: 'Holistic Releasing - Melepas Wanting',
      category: 'coach-lia',
      description: 'Teknik holistik melepas semua wanting sekaligus termasuk control & dikontrol',
      steps: [
        // GROUNDING
        { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: TIMING.GROUNDING },

        // BRING UP
        { type: 'input', text: 'Pikirkan situasi yang mengganggu...', placeholder: 'Tuliskan situasi...' },

        // WANTING APPROVAL
        { type: 'instruction', text: 'Perhatikan: ada WANTING APPROVAL?', subtext: 'Ingin dianggap keren? Butuh pengakuan? Ingin dicintai?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting approval?' },
        { type: 'when', text: 'Kapan?' },

        // WANTING CONTROL - Both sides
        { type: 'instruction', text: 'Perhatikan: ada WANTING CONTROL?', subtext: 'Ingin mengontrol situasi atau orang?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keinginan untuk mengontrol?' },
        { type: 'when', text: 'Kapan?' },

        { type: 'instruction', text: 'Sekarang perhatikan LAWANNYA...', subtext: 'Apakah kamu ingin DIKONTROL? Menunggu orang lain putuskan?', duration: TIMING.WELCOME_SHORT },
        { type: 'instruction', text: 'Kunci: ketika ingin mengontrol sesuatu...', subtext: 'Kamu sebenarnya DIKONTROL oleh hal itu.', duration: TIMING.AWARENESS_SHIFT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting to be controlled?' },
        { type: 'when', text: 'Kapan?' },

        { type: 'instruction', text: 'Sekarang lepaskan DUA-DUANYA sekaligus...', subtext: 'Wanting control DAN wanting to be controlled.', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan keduanya?' },
        { type: 'when', text: 'Kapan?' },

        // WANTING SECURITY
        { type: 'instruction', text: 'Perhatikan: ada WANTING SECURITY?', subtext: 'Ingin aman? Takut kehilangan?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting security?' },
        { type: 'when', text: 'Kapan?' },

        // WANTING SEPARATION
        { type: 'instruction', text: 'Perhatikan: ada WANTING SEPARATION?', subtext: 'Ingin terpisah? Ingin berbeda?', duration: TIMING.WELCOME_SHORT },
        { type: 'yesno', text: 'Bisakah kamu melepaskan wanting separation?' },
        { type: 'when', text: 'Kapan?' },

        // BREATHING
        { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', subtext: 'Lepaskan semua wanting.', duration: TIMING.BREATH_STANDARD },

        // CHECK
        { type: 'completion-check', text: 'Bagaimana rasanya sekarang?', subtext: 'Perhatikan perubahan.' },

        { type: 'completion', text: '🌟 Holistic Releasing Selesai!', subtext: 'Semakin lepas wanting, semakin memiliki.' },
        { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
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

      case 'completion-check':
        html = '<p class="releasing-step-text">' + step.text + '</p>';
        if (step.subtext) html += '<p class="releasing-step-subtext">' + step.subtext + '</p>';
        html += '<div class="releasing-answer-group">';
        html += '<button class="releasing-answer-btn highlight" onclick="ReleasingEngine.selectAnswer(\'ya\')">✅ Ya, sudah lepas</button>';
        html += '<button class="releasing-answer-btn" onclick="ReleasingEngine.selectAnswer(\'tidak\')">🔄 Belum sepenuhnya</button>';
        html += '</div>';
        html += '<p class="releasing-step-subtext" style="margin-top:1rem;font-size:0.85rem;">Jika belum sepenuhnya, akan dilakukan Triple Welcoming.</p>';
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

    const step = currentSession.script.steps[currentSession.currentStep];

    // Handle completion-check type - if "tidak", do triple welcoming and repeat
    if (step.type === 'completion-check' && answer === 'tidak') {
      // Show triple welcoming steps before repeating
      doTripleWelcoming(function() {
        // After triple welcoming, stay on same step (completion-check)
        renderStep(currentSession.currentStep);
      });
      return;
    }

    setTimeout(function() { nextStep(); }, 300);
  }

  // Triple Welcoming helper
  // Triple Welcoming helper with Coach Lia's timing
  function doTripleWelcoming(onComplete) {
    const tripleSteps = [
      { text: 'Bisakah kamu menyambut EMOSI yang tersisa?', subtext: 'Izinkan hadir sepenuhnya.', duration: TIMING.TRIPLE_LAYER },
      { text: 'Bisakah kamu menyambut WANTING yang ada?', subtext: 'Control, approval, security, atau separation?', duration: TIMING.TRIPLE_LAYER },
      { text: 'Bisakah kamu menyambut RASA KEAKUAN?', subtext: 'Ini tentang "kamu"?', duration: TIMING.TRIPLE_LAYER },
      { text: 'Biarkan ketiganya hadir bersamaan...', subtext: 'Emosi, wanting, keakuan.', duration: TIMING.TRIPLE_COMBINE },
      { text: 'MUNDUR selangkah. Jadi penonton.', subtext: 'Biarkan energi terurai sendiri.', duration: TIMING.VORTEX_RELEASE }
    ];

    let stepIndex = 0;
    const body = document.getElementById('re-modal-body');

    function showTripleStep() {
      if (stepIndex >= tripleSteps.length) {
        // Triple welcoming done, callback
        setTimeout(onComplete, 500);
        return;
      }

      const ts = tripleSteps[stepIndex];
      body.innerHTML = '<p class="releasing-step-text">🔄 Triple Welcoming</p>' +
        '<p class="releasing-step-text">' + ts.text + '</p>' +
        '<p class="releasing-step-subtext">' + ts.subtext + '</p>' +
        '<div class="releasing-breathing-animation"></div>';

      stepIndex++;
      setTimeout(showTripleStep, ts.duration);
    }

    showTripleStep();
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
