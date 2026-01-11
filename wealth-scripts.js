// ============================================================================
// WEALTH PROTOCOL SCRIPTS - Installing Rp 3 Miliar Target
// Integrating Sedona + NLP + Silva + Atomic Habits
// ============================================================================

const wealthScripts = {

  // ==================== FULL SEDONA CLEARING ====================
  'sedonaClearingFull': {
    title: 'Full Sedona Clearing - Rp 3 Miliar',
    description: 'Complete resistance clearing session',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks. Siapkan diri untuk transformasi.', duration: 5000 },
      { type: 'instruction', text: 'FULL SEDONA CLEARING', subtext: 'Release semua emotional blocks terhadap Rp 3 miliar', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... tahan... hembuskan...', duration: 8000 },

      // Identify
      { type: 'instruction', text: 'Tutup mata. Katakan dalam hati:', subtext: '"Rp 3 miliar"', duration: 8000 },
      { type: 'instruction', text: 'Notice sensasi yang muncul...', subtext: 'Di mana di tubuh? Dada? Perut? Tenggorokan?', duration: 10000 },
      { type: 'input', text: 'Apa yang kamu RASAKAN tentang "Rp 3 miliar"?', placeholder: 'Excitement? Fear? Doubt? Heavy? Light?' },
      { type: 'choice', text: 'Rating 1-10: Seberapa COMFORTABLE dengan angka ini?', options: ['1-2 (Sangat Tidak Nyaman)', '3-4 (Tidak Nyaman)', '5-6 (Netral)', '7-8 (Nyaman)', '9-10 (Sangat Nyaman)'] },

      // Round 1: Fear/Doubt
      { type: 'instruction', text: '=== ROUND 1: FEAR/DOUBT ===', duration: 4000 },
      { type: 'instruction', text: 'Could I WELCOME the feeling of DOUBT...', subtext: 'that I can achieve Rp 3 miliar?', duration: 10000 },
      { type: 'instruction', text: 'Notice the doubt in your body...', subtext: 'Welcome it fully. Let it be there.', duration: 10000 },
      { type: 'instruction', text: 'Could I LET GO of the doubt?', subtext: 'Yes or no, doesn\'t matter. Just asking.', duration: 10000 },
      { type: 'instruction', text: 'Notice if it loosens...', duration: 8000 },
      { type: 'instruction', text: 'Repeat: Could I let go of this doubt?', duration: 10000 },
      { type: 'instruction', text: 'And again... Could I let go?', duration: 10000 },

      // Round 2: Unworthiness
      { type: 'instruction', text: '=== ROUND 2: UNWORTHINESS ===', duration: 4000 },
      { type: 'instruction', text: 'Could I WELCOME the feeling that Rp 3 miliar is "too much" for me?', duration: 10000 },
      { type: 'instruction', text: 'Notice beliefs like:', subtext: '"Itu untuk orang lain, bukan untuk saya"', duration: 10000 },
      { type: 'instruction', text: 'Welcome the smallness...', duration: 8000 },
      { type: 'instruction', text: 'Could I LET GO of believing I\'m not WORTHY of Rp 3 miliar?', duration: 10000 },
      { type: 'instruction', text: 'And again... let go of unworthiness...', duration: 10000 },

      // Round 3: Identity Conflict
      { type: 'instruction', text: '=== ROUND 3: IDENTITY CONFLICT ===', duration: 4000 },
      { type: 'instruction', text: 'Could I WELCOME the conflict between...', subtext: '"PNS yang sederhana" dan "punya Rp 3 miliar"', duration: 10000 },
      { type: 'instruction', text: 'Notice the split:', subtext: '"Pengabdi negara kok tajir?" "Imam kok materialistis?"', duration: 12000 },
      { type: 'instruction', text: 'Could I LET GO of needing to CHOOSE between being spiritual AND wealthy?', duration: 12000 },
      { type: 'instruction', text: 'Allow BOTH to coexist...', duration: 10000 },

      // Round 4: Safety Concerns
      { type: 'instruction', text: '=== ROUND 4: SAFETY CONCERNS ===', duration: 4000 },
      { type: 'instruction', text: 'Could I WELCOME the fear that Rp 3 miliar akan bring PROBLEMS?', duration: 10000 },
      { type: 'instruction', text: 'Fear of: LHKPN, curiga orang, family minta-minta, tanggung jawab berat...', duration: 12000 },
      { type: 'instruction', text: 'Could I LET GO of the belief that wealth = problem?', duration: 10000 },
      { type: 'instruction', text: 'Let go of needing wealth to be dangerous...', duration: 10000 },

      // Round 5: Impossible Story
      { type: 'instruction', text: '=== ROUND 5: THE IMPOSSIBLE STORY ===', duration: 4000 },
      { type: 'instruction', text: 'Could I WELCOME the belief that Rp 3 miliar is IMPOSSIBLE for someone in my position?', duration: 12000 },
      { type: 'instruction', text: 'Could I LET GO of the story that "PNS tidak bisa achieve this"?', duration: 10000 },
      { type: 'instruction', text: 'Let go of limiting the possibilities...', duration: 10000 },

      // Holistic
      { type: 'instruction', text: '=== HOLISTIC RELEASING ===', duration: 4000 },
      { type: 'instruction', text: 'Apakah saya ingin Rp 3 miliar ini? (WANTING)', duration: 8000 },
      { type: 'instruction', text: 'Could I let go of WANTING Rp 3 miliar?', subtext: 'This removes desperation', duration: 10000 },
      { type: 'instruction', text: 'Apakah saya ingin CONTROL proses menuju Rp 3 miliar?', duration: 8000 },
      { type: 'instruction', text: 'Could I let go of needing to control HOW it happens?', duration: 10000 },
      { type: 'instruction', text: 'Apakah saya ingin KEAMANAN di posisi sekarang?', duration: 8000 },
      { type: 'instruction', text: 'Could I let go of needing to STAY SAFE?', duration: 10000 },

      // Ultimate
      { type: 'instruction', text: '=== ULTIMATE RELEASING ===', duration: 4000 },
      { type: 'instruction', text: 'Could I ALLOW Rp 3 miliar to HAPPEN?', duration: 10000 },
      { type: 'instruction', text: 'Could I ALLOW myself to HAVE Rp 3 miliar?', duration: 10000 },
      { type: 'instruction', text: 'Could I ALLOW myself to BE someone who has Rp 3 miliar?', duration: 10000 },

      { type: 'choice', text: 'Rating sekarang: Seberapa COMFORTABLE dengan Rp 3M?', options: ['1-2', '3-4', '5-6', '7-8', '9-10'] },

      { type: 'completion', text: 'Sedona Clearing Selesai!', subtext: 'Rp 3 miliar sekarang lebih netral/light.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Rating before/after, apa yang terasa berbeda...' }
    ]
  },

  // ==================== SEDONA: IDENTIFY FEELINGS ====================
  'sedonaIdentify': {
    title: 'Identify Feelings tentang Rp 3 Miliar',
    description: 'Notice sensasi & perasaan',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'IDENTIFY CURRENT FEELINGS', subtext: 'Tentang "Rp 3 miliar"', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', duration: 6000 },

      { type: 'instruction', text: 'Tutup mata.', duration: 4000 },
      { type: 'instruction', text: 'Katakan dalam hati: "Rp 3 miliar"', duration: 8000 },
      { type: 'instruction', text: 'Notice sensasi yang muncul...', duration: 10000 },

      { type: 'choice', text: 'Di mana sensasinya di tubuh?', options: ['Dada', 'Perut', 'Tenggorokan', 'Kepala', 'Seluruh tubuh', 'Tidak terasa'] },
      { type: 'choice', text: 'Apa feelingnya?', options: ['Excitement', 'Fear', 'Doubt', 'Heavy', 'Light', 'Netral', 'Campuran'] },
      { type: 'choice', text: 'Rating 1-10: Seberapa comfortable?', options: ['1-2 (Sangat Tidak Nyaman)', '3-4 (Tidak Nyaman)', '5-6 (Netral)', '7-8 (Nyaman)', '9-10 (Sangat Nyaman)'] },

      { type: 'input', text: 'Ketika saya bilang "saya punya Rp 3 miliar", saya merasa...', placeholder: 'Tulis perasaan yang muncul' },
      { type: 'input', text: 'Ketika saya bayangkan rekening saya Rp 3 miliar, yang muncul adalah...', placeholder: 'Thoughts, images, feelings' },

      { type: 'completion', text: 'Identification Selesai!', subtext: 'Sekarang lanjut ke releasing.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Summary perasaan yang ditemukan...' }
    ]
  },

  // ==================== SEDONA: RELEASE FEAR/DOUBT ====================
  'sedonaReleaseFear': {
    title: 'Release Fear/Doubt',
    description: 'Round 1: Keraguan achieve Rp 3M',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'ROUND 1: RELEASE FEAR/DOUBT', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      { type: 'instruction', text: 'Could I WELCOME the feeling of DOUBT...', subtext: 'that I can achieve Rp 3 miliar?', duration: 10000 },
      { type: 'instruction', text: 'Notice the doubt in your body...', duration: 10000 },
      { type: 'instruction', text: 'Where is it? How does it feel?', duration: 8000 },
      { type: 'instruction', text: 'Welcome it fully. Let it be there.', duration: 10000 },

      { type: 'instruction', text: 'Could I LET GO of the doubt?', subtext: 'Yes or no, doesn\'t matter.', duration: 10000 },
      { type: 'instruction', text: 'Notice if it loosens...', duration: 8000 },
      { type: 'instruction', text: 'Could I let go of this doubt?', duration: 8000 },
      { type: 'instruction', text: 'And again... Could I let go?', duration: 8000 },
      { type: 'instruction', text: 'Once more... let it go...', duration: 8000 },
      { type: 'instruction', text: 'And again...', duration: 8000 },

      { type: 'yesno', text: 'Apakah doubt terasa lebih ringan?', highlight: 'Ya' },

      { type: 'completion', text: 'Round 1 Selesai!', subtext: 'Fear/Doubt telah di-release.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Perubahan yang dirasakan...' }
    ]
  },

  // ==================== SEDONA: RELEASE UNWORTHINESS ====================
  'sedonaReleaseUnworthy': {
    title: 'Release Unworthiness',
    description: 'Round 2: Belief "terlalu banyak"',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'ROUND 2: RELEASE UNWORTHINESS', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      { type: 'instruction', text: 'Could I WELCOME the feeling that Rp 3 miliar is "too much" for me?', duration: 10000 },
      { type: 'instruction', text: 'Notice beliefs like:', subtext: '"Itu untuk orang lain, bukan untuk saya"', duration: 10000 },
      { type: 'instruction', text: 'Welcome the smallness... the unworthiness...', duration: 10000 },
      { type: 'instruction', text: 'Let it be there fully...', duration: 8000 },

      { type: 'instruction', text: 'Could I LET GO of believing I\'m not WORTHY of Rp 3 miliar?', duration: 10000 },
      { type: 'instruction', text: 'Let go of the unworthiness...', duration: 8000 },
      { type: 'instruction', text: 'And again... let it go...', duration: 8000 },
      { type: 'instruction', text: 'Once more...', duration: 8000 },
      { type: 'instruction', text: 'And again...', duration: 8000 },

      { type: 'instruction', text: 'Notice: Angka Rp 3 miliar terasa lebih netral sekarang?', duration: 10000 },

      { type: 'completion', text: 'Round 2 Selesai!', subtext: 'Unworthiness telah di-release.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Perubahan yang dirasakan...' }
    ]
  },

  // ==================== SEDONA: RELEASE IDENTITY CONFLICT ====================
  'sedonaReleaseIdentity': {
    title: 'Release Identity Conflict',
    description: 'Round 3: PNS vs Wealthy',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'ROUND 3: RELEASE IDENTITY CONFLICT', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      { type: 'instruction', text: 'Could I WELCOME the conflict between...', subtext: '"PNS yang sederhana" dan "punya Rp 3 miliar"?', duration: 12000 },
      { type: 'instruction', text: 'Notice the split:', duration: 6000 },
      { type: 'instruction', text: '"Pengabdi negara kok tajir?"', duration: 8000 },
      { type: 'instruction', text: '"Imam kok materialistis?"', duration: 8000 },
      { type: 'instruction', text: 'Welcome the conflict... the contradiction...', duration: 10000 },

      { type: 'instruction', text: 'Could I LET GO of needing to CHOOSE...', subtext: 'between being spiritual AND wealthy?', duration: 12000 },
      { type: 'instruction', text: 'What if both can coexist?', duration: 8000 },
      { type: 'instruction', text: 'Let go of the need to choose...', duration: 8000 },
      { type: 'instruction', text: 'Allow BOTH to be true...', duration: 10000 },
      { type: 'instruction', text: 'Spiritual AND wealthy... both possible...', duration: 10000 },

      { type: 'completion', text: 'Round 3 Selesai!', subtext: 'Identity conflict telah di-integrate.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Insight tentang identity...' }
    ]
  },

  // ==================== SEDONA: RELEASE SAFETY ====================
  'sedonaReleaseSafety': {
    title: 'Release Safety Concerns',
    description: 'Round 4: Wealth = Problems',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'ROUND 4: RELEASE SAFETY CONCERNS', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      { type: 'instruction', text: 'Could I WELCOME the fear that Rp 3 miliar akan bring PROBLEMS?', duration: 10000 },
      { type: 'instruction', text: 'Fear of LHKPN...', duration: 6000 },
      { type: 'instruction', text: 'Fear of orang curiga...', duration: 6000 },
      { type: 'instruction', text: 'Fear of family minta-minta...', duration: 6000 },
      { type: 'instruction', text: 'Fear of tanggung jawab berat...', duration: 6000 },
      { type: 'instruction', text: 'Welcome ALL these fears...', duration: 10000 },

      { type: 'instruction', text: 'Could I LET GO of the belief that wealth = problem?', duration: 10000 },
      { type: 'instruction', text: 'What if wealth could be EASY?', duration: 8000 },
      { type: 'instruction', text: 'What if wealth could be SAFE?', duration: 8000 },
      { type: 'instruction', text: 'Let go of needing wealth to be dangerous...', duration: 10000 },
      { type: 'instruction', text: 'Allow wealth to be safe and beneficial...', duration: 10000 },

      { type: 'completion', text: 'Round 4 Selesai!', subtext: 'Safety concerns telah di-release.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Perubahan perspective tentang safety...' }
    ]
  },

  // ==================== SEDONA: RELEASE IMPOSSIBLE ====================
  'sedonaReleaseImpossible': {
    title: 'Release "Impossible" Story',
    description: 'Round 5: PNS tidak bisa achieve',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'ROUND 5: RELEASE THE IMPOSSIBLE STORY', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      { type: 'instruction', text: 'Could I WELCOME the belief that Rp 3 miliar is IMPOSSIBLE...', subtext: 'for someone in my position?', duration: 12000 },
      { type: 'instruction', text: 'Notice the story: "PNS tidak bisa achieve this"', duration: 10000 },
      { type: 'instruction', text: 'Welcome that limiting story...', duration: 8000 },

      { type: 'instruction', text: 'Could I LET GO of the story that "PNS tidak bisa achieve this"?', duration: 10000 },
      { type: 'instruction', text: 'What if there are PNS who HAVE achieved this?', duration: 8000 },
      { type: 'instruction', text: 'What if YOU could be one of them?', duration: 8000 },
      { type: 'instruction', text: 'Let go of limiting the possibilities...', duration: 10000 },
      { type: 'instruction', text: 'Open to the POSSIBILITY...', duration: 10000 },

      { type: 'completion', text: 'Round 5 Selesai!', subtext: 'Impossible story telah di-release.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Possibilities yang terbuka...' }
    ]
  },

  // ==================== SEDONA: HOLISTIC RELEASING ====================
  'sedonaHolistic': {
    title: 'Holistic Releasing - Wanting-Control-Security',
    description: 'Release 3 core wants around Rp 3M',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'HOLISTIC RELEASING', subtext: 'The Wanting-Control-Security Triangle', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      // Wanting
      { type: 'instruction', text: '=== WANTING ===', duration: 4000 },
      { type: 'instruction', text: 'Apakah saya INGIN Rp 3 miliar ini?', duration: 8000 },
      { type: 'instruction', text: 'Notice kalau ada wanting yang strong...', subtext: 'Desperately wanting...', duration: 10000 },
      { type: 'instruction', text: 'Could I LET GO of WANTING Rp 3 miliar?', subtext: 'Paradoxically, this removes desperation', duration: 12000 },
      { type: 'instruction', text: 'Let go of the desperate wanting...', duration: 8000 },
      { type: 'instruction', text: 'Allow it to come without desperately needing it...', duration: 10000 },

      // Control
      { type: 'instruction', text: '=== CONTROL ===', duration: 4000 },
      { type: 'instruction', text: 'Apakah saya ingin APPROVE/CONTROL proses menuju Rp 3 miliar?', duration: 10000 },
      { type: 'instruction', text: 'Notice need untuk tahu "HOW" dan "WHEN"...', duration: 10000 },
      { type: 'instruction', text: 'Could I LET GO of needing to CONTROL how it happens?', duration: 10000 },
      { type: 'instruction', text: 'Let go of needing to know the how and when...', duration: 8000 },
      { type: 'instruction', text: 'Trust the process...', duration: 8000 },

      // Security
      { type: 'instruction', text: '=== SECURITY ===', duration: 4000 },
      { type: 'instruction', text: 'Apakah saya ingin KEAMANAN di posisi sekarang?', duration: 10000 },
      { type: 'instruction', text: 'Notice kalau ada "takut rugi" atau "takut change"...', duration: 10000 },
      { type: 'instruction', text: 'Could I LET GO of needing to STAY SAFE?', duration: 10000 },
      { type: 'instruction', text: 'Let go of clinging to current comfort zone...', duration: 8000 },
      { type: 'instruction', text: 'Open to growth and change...', duration: 8000 },

      { type: 'instruction', text: 'Repeat this triangle until Rp 3 miliar feels NEUTRAL/LIGHT...', duration: 10000 },

      { type: 'completion', text: 'Holistic Releasing Selesai!', subtext: 'The 3 core wants telah di-release.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Mana yang paling strong? Wanting/Control/Security?' }
    ]
  },

  // ==================== SEDONA: ULTIMATE RELEASING ====================
  'sedonaUltimate': {
    title: 'Ultimate Releasing Questions',
    description: 'Allow Rp 3M to happen, have, BE',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'ULTIMATE RELEASING QUESTIONS', subtext: 'The deepest level of allowing', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... rileks sepenuhnya...', duration: 8000 },

      { type: 'instruction', text: 'When Rp 3 miliar starts to feel more comfortable...', duration: 8000 },

      { type: 'instruction', text: 'Could I ALLOW Rp 3 miliar to HAPPEN?', duration: 12000 },
      { type: 'instruction', text: 'Just... allow it... to happen...', duration: 10000 },

      { type: 'instruction', text: 'Could I ALLOW myself to HAVE Rp 3 miliar?', duration: 12000 },
      { type: 'instruction', text: 'Allow yourself... to have it...', duration: 10000 },

      { type: 'instruction', text: 'Could I ALLOW myself to BE someone who HAS Rp 3 miliar?', duration: 12000 },
      { type: 'instruction', text: 'Allow yourself... to BE that person...', duration: 10000 },

      { type: 'instruction', text: 'Feel the allowing... the openness... the possibility...', duration: 12000 },

      { type: 'choice', text: 'Rating sekarang: Seberapa COMFORTABLE dengan Rp 3M?', options: ['1-2', '3-4', '5-6', '7-8', '9-10'] },

      { type: 'completion', text: 'Ultimate Releasing Selesai!', subtext: 'Target: 7-8/10 comfortable.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Rating before/after session...' }
    ]
  },

  // ==================== NLP: SUBMODALITIES SHIFT ====================
  'nlpSubmodalities': {
    title: 'Submodalities Mapping & Shift',
    description: 'Ubah representasi internal',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'NLP SUBMODALITIES SHIFT', subtext: 'Mengubah representasi internal tentang Rp 3 miliar', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      // Current Belief
      { type: 'instruction', text: '=== CURRENT BELIEF ===', subtext: '"Rp 3 miliar is far/impossible"', duration: 6000 },
      { type: 'instruction', text: 'Tutup mata. Visualize "Rp 3 miliar"...', duration: 8000 },

      { type: 'choice', text: 'Gambarnya BLACK & WHITE atau COLOR?', options: ['Black & White', 'Sedikit Color', 'Full Color', 'Vivid Color'] },
      { type: 'choice', text: 'Gambarnya BRIGHT atau DIM?', options: ['Sangat Dim', 'Dim', 'Sedang', 'Bright', 'Sangat Bright'] },
      { type: 'choice', text: 'Gambarnya FAR atau CLOSE?', options: ['Sangat Jauh', 'Jauh', 'Sedang', 'Dekat', 'Sangat Dekat'] },
      { type: 'choice', text: 'Gambarnya BIG atau SMALL?', options: ['Sangat Kecil', 'Kecil', 'Sedang', 'Besar', 'Sangat Besar'] },
      { type: 'choice', text: 'MOVIE atau STILL image?', options: ['Still/Foto', 'Sedikit Gerak', 'Movie Pelan', 'Movie Normal'] },
      { type: 'input', text: 'Ada VOICE? Suara siapa? Tone-nya?', placeholder: 'Deskripsi suara internal' },
      { type: 'input', text: 'FEELING di mana di body? Heavy atau light?', placeholder: 'Lokasi dan quality sensasi' },

      // Strong Belief Reference
      { type: 'instruction', text: '=== STRONG BELIEF REFERENCE ===', duration: 4000 },
      { type: 'instruction', text: 'Pikirkan sesuatu yang SANGAT kamu yakini benar...', subtext: 'Contoh: "Nama saya..." atau "Saya tinggal di..."', duration: 10000 },
      { type: 'instruction', text: 'Notice submodalities belief yang STRONG ini...', duration: 8000 },
      { type: 'choice', text: 'Bagaimana gambar belief kuat ini?', options: ['Terang', 'Besar', 'Dekat', 'Jelas', 'Berwarna Vivid'] },

      // Swap
      { type: 'instruction', text: '=== SWAP SUBMODALITIES ===', duration: 4000 },
      { type: 'instruction', text: 'Take "Rp 3 miliar" image...', duration: 6000 },
      { type: 'instruction', text: 'Make it the SAME as your strong belief:', duration: 6000 },
      { type: 'instruction', text: 'If far → bring it CLOSER...', duration: 6000 },
      { type: 'instruction', text: 'If dim → make it BRIGHTER...', duration: 6000 },
      { type: 'instruction', text: 'If small → make it BIGGER...', duration: 6000 },
      { type: 'instruction', text: 'If black & white → add COLOR...', duration: 6000 },
      { type: 'instruction', text: 'If still → make it MOVIE...', duration: 6000 },

      { type: 'instruction', text: 'Notice how it FEELS different now...', duration: 10000 },
      { type: 'instruction', text: 'Repeat this shift 5x...', duration: 20000 },

      { type: 'completion', text: 'Submodalities Shift Selesai!', subtext: 'Ulangi sampai feels as real as strong belief.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Perubahan representasi yang terjadi...' }
    ]
  },

  // ==================== NLP: BELIEF INSTALLATION ====================
  'nlpBeliefInstall': {
    title: 'Belief Installation',
    description: 'Install "Saya memiliki Rp 3 miliar"',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'BELIEF INSTALLATION', subtext: 'Installing new empowering belief', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      { type: 'instruction', text: 'Say this out loud:', duration: 4000 },
      { type: 'instruction', text: '"Saya, [nama], memiliki net worth Rp 3 miliar."', subtext: 'Katakan dengan penuh keyakinan', duration: 10000 },

      { type: 'instruction', text: 'Notice:', duration: 4000 },
      { type: 'yesno', text: 'Apakah terasa CONGRUENT? (Body says yes?)', highlight: 'Ya' },

      { type: 'instruction', text: 'Jika ada RESISTANCE/counter-voice...', subtext: 'Go back to Sedona, release, then return', duration: 10000 },

      { type: 'instruction', text: 'Jika CONGRUENT...', duration: 4000 },
      { type: 'instruction', text: 'Repeat the affirmation:', duration: 4000 },
      { type: 'instruction', text: '"Saya memiliki net worth Rp 3 miliar"', duration: 6000 },
      { type: 'instruction', text: 'Again...', duration: 5000 },
      { type: 'instruction', text: 'Again... dengan lebih yakin...', duration: 5000 },
      { type: 'instruction', text: 'Again... feel it as TRUE...', duration: 5000 },
      { type: 'instruction', text: 'Again...', duration: 5000 },

      { type: 'instruction', text: 'Protocol: Repeat 21x, morning & night, untuk 21 hari', subtext: 'Neural pathway formation', duration: 10000 },

      { type: 'completion', text: 'Belief Installation Selesai!', subtext: 'Lanjutkan 21 hari untuk permanent installation.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Tingkat congruence dan any resistance...' }
    ]
  },

  // ==================== NLP: FUTURE PACING ====================
  'nlpFuturePace': {
    title: 'Future Pacing - Mental Rehearsal',
    description: 'Visualisasi momen achievement',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'FUTURE PACING', subtext: 'Mental rehearsal momen achievement', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... rileks...', duration: 8000 },

      // Scene 1: Moment of Achievement
      { type: 'instruction', text: '=== SCENE 1: THE MOMENT OF ACHIEVEMENT ===', duration: 4000 },
      { type: 'instruction', text: 'Tutup mata...', duration: 4000 },
      { type: 'instruction', text: 'Imagine: Buka laptop/HP, check portfolio...', duration: 10000 },
      { type: 'instruction', text: 'Lihat angka: Rp 3,000,000,000', subtext: 'Biarkan angka itu nyata di layar', duration: 12000 },
      { type: 'instruction', text: 'FEEL IT: Chest expand... smile... calm confidence...', duration: 12000 },
      { type: 'instruction', text: 'What do you say? "Alhamdulillah, it\'s done"', duration: 10000 },
      { type: 'input', text: 'Siapa yang pertama kamu beritahu?', placeholder: 'Istri? Orang tua? Sahabat?' },
      { type: 'instruction', text: 'Rehearse this feeling... this moment... VIVIDLY...', duration: 15000 },

      // Scene 2: Living as 3M Person
      { type: 'instruction', text: '=== SCENE 2: LIVING AS "3 MILIAR PERSON" ===', duration: 4000 },
      { type: 'instruction', text: 'Morning: Wake up KNOWING you have Rp 3M...', duration: 10000 },
      { type: 'instruction', text: 'Check phone: Passive income masuk...', duration: 8000 },
      { type: 'instruction', text: 'Decision making: "I can afford this" (no stress)...', duration: 10000 },
      { type: 'instruction', text: 'Interactions: Dermawan, generous, relaxed...', duration: 10000 },
      { type: 'instruction', text: 'Bedtime: Syukur, calm, secure...', duration: 10000 },
      { type: 'instruction', text: 'Feel this DAY in your life as wealthy person...', duration: 15000 },

      { type: 'completion', text: 'Future Pacing Selesai!', subtext: 'Rehearse Scene 1 daily, Scene 2 weekly.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Bagaimana rasanya menjadi "3M person"...' }
    ]
  },

  // ==================== NLP: ANCHORING ====================
  'nlpAnchoring': {
    title: 'Create Wealth State Anchor',
    description: 'Pasang anchor untuk wealth state',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'WEALTH STATE ANCHORING', subtext: 'Create trigger untuk akses wealth state', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      // Recall Peak State
      { type: 'instruction', text: '=== RECALL PEAK STATE ===', duration: 4000 },
      { type: 'instruction', text: 'Recall a time Anda felt:', duration: 6000 },
      { type: 'instruction', text: '• Calm confidence', duration: 5000 },
      { type: 'instruction', text: '• Abundant', duration: 5000 },
      { type: 'instruction', text: '• Grateful', duration: 5000 },
      { type: 'instruction', text: '• Secure', duration: 5000 },
      { type: 'input', text: 'Pengalaman apa yang membuat Anda merasakan ini?', placeholder: 'Contoh: Jadi PPK, khutbah bagus, project selesai' },

      // Amplify
      { type: 'instruction', text: '=== AMPLIFY ===', duration: 4000 },
      { type: 'instruction', text: 'Masuk ke pengalaman itu sepenuhnya...', duration: 8000 },
      { type: 'instruction', text: 'Lihat apa yang kamu lihat saat itu...', duration: 8000 },
      { type: 'instruction', text: 'Dengar apa yang kamu dengar...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan apa yang kamu rasakan...', duration: 8000 },
      { type: 'instruction', text: 'Make it 10/10 INTENSITY...', duration: 10000 },
      { type: 'instruction', text: 'Feel it throughout your entire body...', duration: 10000 },

      // Set Anchor
      { type: 'instruction', text: '=== SET ANCHOR ===', duration: 4000 },
      { type: 'instruction', text: 'Saat state di PEAK...', duration: 6000 },
      { type: 'instruction', text: 'TEKAN ibu jari ke buku jari telunjuk...', subtext: 'Atau touch heart area', duration: 10000 },
      { type: 'instruction', text: 'HOLD 5-10 seconds selama peak...', duration: 10000 },
      { type: 'instruction', text: 'Release perlahan...', duration: 6000 },

      // Test
      { type: 'instruction', text: '=== TEST ===', duration: 4000 },
      { type: 'instruction', text: 'Break state - pikirkan hal netral...', duration: 8000 },
      { type: 'instruction', text: 'Now: PRESS anchor again...', duration: 8000 },
      { type: 'instruction', text: 'Feeling should RETURN...', duration: 10000 },
      { type: 'yesno', text: 'Apakah state kembali?', highlight: 'Ya' },

      // Install Context
      { type: 'instruction', text: '=== INSTALL CONTEXT ===', duration: 4000 },
      { type: 'instruction', text: 'While pressing anchor...', duration: 6000 },
      { type: 'instruction', text: 'Say: "Rp 3 miliar"', duration: 8000 },
      { type: 'instruction', text: 'Link calm-confidence dengan the number...', duration: 10000 },
      { type: 'instruction', text: 'Feel wealthy... feel abundant... Rp 3 miliar...', duration: 12000 },

      { type: 'instruction', text: 'Practice: Press anchor 3x per day', subtext: 'Each time, say "Rp 3 miliar" dan feel calm confidence', duration: 10000 },

      { type: 'completion', text: 'Wealth Anchor Selesai!', subtext: 'Use daily untuk strengthen.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Gesture yang digunakan, kekuatan anchor...' }
    ]
  },

  // ==================== SILVA: ALPHA SESSION ====================
  'silvaAlphaSession': {
    title: 'Daily Silva Alpha Session',
    description: 'Countdown ke alpha + visualization',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'SILVA ALPHA SESSION', subtext: 'Daily 10-15 menit programming', duration: 6000 },
      { type: 'instruction', text: 'Best time: Setelah bangun tidur atau sebelum tidur', subtext: 'Brain naturally in alpha', duration: 8000 },

      // Countdown to Alpha
      { type: 'instruction', text: '=== COUNTDOWN TO ALPHA ===', duration: 4000 },
      { type: 'instruction', text: 'Duduk atau berbaring nyaman...', duration: 6000 },
      { type: 'instruction', text: 'Tutup mata...', duration: 4000 },
      { type: 'breathing', text: 'Tarik napas dalam... 1', duration: 4000 },
      { type: 'breathing', text: 'Tarik napas dalam... 2', duration: 4000 },
      { type: 'breathing', text: 'Tarik napas dalam... 3', duration: 4000 },

      { type: 'instruction', text: '3... going deeper...', subtext: 'Rilekskan seluruh tubuh', duration: 8000 },
      { type: 'instruction', text: '2... deeply relaxed...', subtext: 'Mind calm and peaceful', duration: 8000 },
      { type: 'instruction', text: '1... alpha level...', subtext: 'Body relaxed, mind alert', duration: 8000 },
      { type: 'instruction', text: 'You are now at ALPHA LEVEL...', duration: 8000 },

      // Mental Screen
      { type: 'instruction', text: '=== MENTAL SCREEN VISUALIZATION ===', duration: 4000 },
      { type: 'instruction', text: 'Imagine a mental screen di depanmu...', subtext: 'Like a movie screen', duration: 8000 },

      { type: 'instruction', text: 'Project image: BANK STATEMENT', subtext: 'Showing Rp 3,000,000,000', duration: 12000 },
      { type: 'instruction', text: 'See logo bank... your name... tanggal...', duration: 10000 },
      { type: 'instruction', text: 'Zoom in on the number: Rp 3,000,000,000', duration: 10000 },
      { type: 'instruction', text: 'Feel: "This is mine. This is real."', duration: 10000 },

      { type: 'instruction', text: 'Project image: PROPERTY PORTFOLIO', duration: 6000 },
      { type: 'instruction', text: 'See 3-4 properties... tenants paying rent... appreciating value...', duration: 15000 },

      { type: 'instruction', text: 'Project image: INVESTMENT DASHBOARD', duration: 6000 },
      { type: 'instruction', text: 'Stocks growing... passive income flowing...', duration: 12000 },

      { type: 'instruction', text: 'Project image: YOU IN THE FUTURE', duration: 6000 },
      { type: 'instruction', text: 'See yourself: Calm, generous, free...', duration: 10000 },
      { type: 'instruction', text: 'Helping family... sedekah... building masjid...', duration: 10000 },
      { type: 'instruction', text: 'Still imam, but also wealthy...', duration: 10000 },

      // Affirmations
      { type: 'instruction', text: '=== AFFIRMATIONS IN ALPHA ===', duration: 4000 },
      { type: 'instruction', text: 'Say dalam hati:', duration: 4000 },
      { type: 'instruction', text: '"Setiap hari, dalam segala hal, kekayaan saya bertambah."', duration: 8000 },
      { type: 'instruction', text: '"Uang mengalir kepada saya dari berbagai sumber yang halal dan baik."', duration: 8000 },
      { type: 'instruction', text: '"Net worth saya adalah Rp 3 miliar, dan ini terasa natural bagi saya."', duration: 8000 },
      { type: 'instruction', text: '"Saya menggunakan kekayaan ini untuk kebaikan diri, keluarga, dan umat."', duration: 8000 },
      { type: 'instruction', text: '"Saya adalah steward yang amanah atas rezeki yang Allah berikan."', duration: 8000 },

      // Return
      { type: 'instruction', text: '=== RETURN TO BETA ===', duration: 4000 },
      { type: 'instruction', text: '1... becoming more alert...', duration: 6000 },
      { type: 'instruction', text: '2... feeling energized...', duration: 6000 },
      { type: 'instruction', text: '3... eyes open, fully awake!', duration: 6000 },

      { type: 'completion', text: 'Silva Alpha Session Selesai!', subtext: 'Do daily, 10-15 minutes.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Visualizations yang paling kuat...' }
    ]
  },

  // ==================== SILVA: MENTAL SCREEN ====================
  'silvaMentalScreen': {
    title: 'Wealth Visualization',
    description: 'Mental screen projection',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'MENTAL SCREEN VISUALIZATION', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... rileks...', duration: 8000 },

      { type: 'instruction', text: 'Quick entry to alpha: 3... 2... 1...', duration: 8000 },
      { type: 'instruction', text: 'Imagine mental screen di depanmu...', duration: 8000 },

      { type: 'instruction', text: '=== SCENE 1: BANK STATEMENT ===', duration: 4000 },
      { type: 'instruction', text: 'Project: Bank statement dengan nama Anda', duration: 8000 },
      { type: 'instruction', text: 'Balance: Rp 3,000,000,000', duration: 10000 },
      { type: 'instruction', text: 'Make it VIVID - logo, warna, font...', duration: 10000 },
      { type: 'instruction', text: 'Feel: "This is mine. This is real."', duration: 10000 },

      { type: 'instruction', text: '=== SCENE 2: PORTFOLIO ===', duration: 4000 },
      { type: 'instruction', text: 'Properties... investments... passive income...', duration: 12000 },
      { type: 'instruction', text: 'All growing... all appreciating...', duration: 10000 },

      { type: 'instruction', text: '=== SCENE 3: FUTURE SELF ===', duration: 4000 },
      { type: 'instruction', text: 'See yourself living wealthy life...', duration: 10000 },
      { type: 'instruction', text: 'Generous... peaceful... abundant...', duration: 10000 },
      { type: 'instruction', text: 'This is WHO YOU ARE...', duration: 10000 },

      { type: 'instruction', text: '1... 2... 3... eyes open, fully awake!', duration: 6000 },

      { type: 'completion', text: 'Mental Screen Selesai!', subtext: 'Images now in subconscious.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Scenes yang paling powerful...' }
    ]
  },

  // ==================== SILVA: AFFIRMATIONS ====================
  'silvaAffirmations': {
    title: 'Wealth Affirmations in Alpha',
    description: 'Powerful affirmations di alpha state',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'ALPHA AFFIRMATIONS', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam...', duration: 6000 },

      { type: 'instruction', text: 'Quick alpha entry: 3... 2... 1...', duration: 8000 },
      { type: 'instruction', text: 'Body relaxed... mind alert...', duration: 6000 },

      { type: 'instruction', text: 'Repeat each affirmation 3x in your mind:', duration: 6000 },

      { type: 'instruction', text: '"Setiap hari, dalam segala hal, kekayaan saya BERTAMBAH."', duration: 10000 },
      { type: 'instruction', text: 'Again...', duration: 8000 },
      { type: 'instruction', text: 'Once more...', duration: 8000 },

      { type: 'instruction', text: '"Uang mengalir kepada saya dari berbagai sumber yang HALAL dan BAIK."', duration: 10000 },
      { type: 'instruction', text: 'Again...', duration: 8000 },
      { type: 'instruction', text: 'Once more...', duration: 8000 },

      { type: 'instruction', text: '"Net worth saya adalah Rp 3 miliar, dan ini terasa NATURAL bagi saya."', duration: 10000 },
      { type: 'instruction', text: 'Again...', duration: 8000 },
      { type: 'instruction', text: 'Once more...', duration: 8000 },

      { type: 'instruction', text: '"Saya menggunakan kekayaan ini untuk KEBAIKAN diri, keluarga, dan umat."', duration: 10000 },
      { type: 'instruction', text: 'Again...', duration: 8000 },
      { type: 'instruction', text: 'Once more...', duration: 8000 },

      { type: 'instruction', text: '"Saya adalah steward yang AMANAH atas rezeki yang Allah berikan."', duration: 10000 },
      { type: 'instruction', text: 'Again...', duration: 8000 },
      { type: 'instruction', text: 'Once more...', duration: 8000 },

      { type: 'instruction', text: '1... 2... 3... eyes open!', duration: 6000 },

      { type: 'completion', text: 'Alpha Affirmations Selesai!', subtext: 'Repeat daily for deep programming.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Affirmation yang paling powerful...' }
    ]
  },

  // ==================== HABITS: IDENTITY ====================
  'habitsIdentity': {
    title: 'Identity-Based Goals',
    description: 'Define siapa yang punya Rp 3M',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'IDENTITY-BASED GOALS', subtext: 'James Clear: BECOME the person who has Rp 3M', duration: 6000 },

      { type: 'instruction', text: 'Goal is NOT to have Rp 3M...', duration: 6000 },
      { type: 'instruction', text: 'Goal is to BECOME the person who HAS Rp 3M', duration: 8000 },

      { type: 'instruction', text: 'Question: Siapa jenis orang yang punya net worth Rp 3 miliar?', duration: 10000 },

      { type: 'instruction', text: 'Someone who...', duration: 4000 },
      { type: 'instruction', text: '• Invests CONSISTENTLY', duration: 5000 },
      { type: 'instruction', text: '• Builds MULTIPLE income streams', duration: 5000 },
      { type: 'instruction', text: '• Thinks LONG-TERM', duration: 5000 },
      { type: 'instruction', text: '• Is DISCIPLINED dengan money', duration: 5000 },
      { type: 'instruction', text: '• LEARNS tentang finance', duration: 5000 },
      { type: 'instruction', text: '• Takes CALCULATED risks', duration: 5000 },
      { type: 'instruction', text: '• Is GENEROUS & amanah', duration: 5000 },

      { type: 'instruction', text: 'Pick your TOP 3 identity statements:', duration: 6000 },
      { type: 'input', text: '"Saya adalah orang yang..." (Identity 1)', placeholder: 'Contoh: ...invests 30% of income every month' },
      { type: 'input', text: '"Saya adalah orang yang..." (Identity 2)', placeholder: 'Contoh: ...continuously builds income streams' },
      { type: 'input', text: '"Saya adalah orang yang..." (Identity 3)', placeholder: 'Contoh: ...uses wealth untuk kebaikan' },

      { type: 'instruction', text: 'These ARE your identities now.', duration: 8000 },
      { type: 'instruction', text: 'Your habits will follow your identity.', duration: 8000 },

      { type: 'completion', text: 'Identity Declaration Selesai!', subtext: 'Now build habits that support this identity.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Your 3 core wealth identities...' }
    ]
  },

  // ==================== HABITS: TINY HABITS ====================
  'habitsTiny': {
    title: 'Create Micro-Habits',
    description: 'Setup habit stacking',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks.', duration: 5000 },
      { type: 'instruction', text: 'TINY HABITS SETUP', subtext: '1% Better Every Day', duration: 6000 },

      { type: 'instruction', text: 'Template: "After [CURRENT HABIT], I will [NEW HABIT]"', duration: 8000 },

      { type: 'instruction', text: '=== FINANCIAL HABITS ===', duration: 4000 },

      { type: 'instruction', text: 'Habit 1: Morning Finance Check (2 menit)', duration: 6000 },
      { type: 'instruction', text: 'After shalat Subuh → Check portfolio 2 menit', duration: 8000 },
      { type: 'yesno', text: 'Commit to this habit?', highlight: 'Ya' },

      { type: 'instruction', text: 'Habit 2: Auto-Invest (Set & Forget)', duration: 6000 },
      { type: 'instruction', text: 'Day 1-2 setiap bulan → Auto-transfer ke investment', duration: 8000 },
      { type: 'yesno', text: 'Commit to this habit?', highlight: 'Ya' },

      { type: 'instruction', text: 'Habit 3: Weekly Finance Review (15 menit)', duration: 6000 },
      { type: 'instruction', text: 'After shalat Jumat → Review keuangan 15 menit', duration: 8000 },
      { type: 'yesno', text: 'Commit to this habit?', highlight: 'Ya' },

      { type: 'instruction', text: '=== LEARNING HABITS ===', duration: 4000 },

      { type: 'instruction', text: 'Habit 4: Daily Financial Education (10 menit)', duration: 6000 },
      { type: 'instruction', text: 'After lunch/dinner → Read 1 article atau watch 1 video', duration: 8000 },
      { type: 'yesno', text: 'Commit to this habit?', highlight: 'Ya' },

      { type: 'instruction', text: '=== IDENTITY HABITS ===', duration: 4000 },

      { type: 'instruction', text: 'Habit 5: Wealth Affirmation (1 menit)', duration: 6000 },
      { type: 'instruction', text: 'After setiap shalat (5x) → "Saya adalah orang yang kaya, amanah, dan murah hati"', duration: 10000 },
      { type: 'yesno', text: 'Commit to this habit?', highlight: 'Ya' },

      { type: 'completion', text: 'Tiny Habits Setup Selesai!', subtext: 'Start tomorrow. Don\'t miss twice.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Habits yang di-commit dan trigger-nya...' }
    ]
  },

  // ==================== HABITS: CHECKLIST ====================
  'habitsChecklist': {
    title: 'Today\'s Wealth Habits',
    description: 'Check & track daily habits',
    steps: [
      { type: 'instruction', text: 'DAILY WEALTH HABITS CHECKLIST', duration: 6000 },

      { type: 'yesno', text: 'Morning Finance Check (2 menit setelah Subuh)?', highlight: 'Ya' },
      { type: 'yesno', text: 'Affirmation setelah Subuh?', highlight: 'Ya' },
      { type: 'yesno', text: 'Affirmation setelah Dzuhur?', highlight: 'Ya' },
      { type: 'yesno', text: 'Affirmation setelah Ashar?', highlight: 'Ya' },
      { type: 'yesno', text: 'Affirmation setelah Maghrib?', highlight: 'Ya' },
      { type: 'yesno', text: 'Affirmation setelah Isya?', highlight: 'Ya' },
      { type: 'yesno', text: 'Anchoring 3x hari ini?', highlight: 'Ya' },
      { type: 'yesno', text: 'Financial education (10 menit)?', highlight: 'Ya' },
      { type: 'yesno', text: 'Silva Alpha Session (morning atau night)?', highlight: 'Ya' },

      { type: 'instruction', text: 'Count your YES answers...', duration: 6000 },
      { type: 'choice', text: 'Berapa habits yang completed hari ini?', options: ['1-3 (Keep going!)', '4-6 (Good progress!)', '7-8 (Great!)', '9 (Excellent!)'] },

      { type: 'completion', text: 'Daily Checklist Selesai!', subtext: 'Consistency builds wealth identity.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Score hari ini dan yang perlu improve...' }
    ]
  }
};

// ==================== INITIALIZE SCRIPTS ====================
function initWealthScripts() {
  if (typeof ReleasingEngine !== 'undefined') {
    Object.keys(wealthScripts).forEach(function(key) {
      ReleasingEngine.getScripts()[key] = wealthScripts[key];
    });
    console.log('Wealth scripts loaded:', Object.keys(wealthScripts).length);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWealthScripts);
} else {
  initWealthScripts();
}
