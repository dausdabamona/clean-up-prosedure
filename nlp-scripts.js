// ============================================================================
// NLP SCRIPTS - Neuro-Linguistic Programming Techniques
// ============================================================================

// ==================== SUBMODALITIES CHECKLIST ====================
const SUBMODALITIES = {
  visual: {
    name: 'Visual (Penglihatan)',
    emoji: '👁️',
    items: [
      { id: 'brightness', label: 'Kecerahan', scale: ['Gelap', 'Terang'] },
      { id: 'size', label: 'Ukuran', scale: ['Kecil', 'Besar'] },
      { id: 'distance', label: 'Jarak', scale: ['Jauh', 'Dekat'] },
      { id: 'location', label: 'Lokasi', scale: ['Kiri/Bawah', 'Kanan/Atas'] },
      { id: 'focus', label: 'Fokus', scale: ['Blur', 'Tajam'] },
      { id: 'color', label: 'Warna', scale: ['Hitam-Putih', 'Berwarna'] },
      { id: 'movement', label: 'Gerakan', scale: ['Diam', 'Bergerak'] },
      { id: 'dimension', label: 'Dimensi', scale: ['2D/Flat', '3D/Depth'] },
      { id: 'frame', label: 'Bingkai', scale: ['Berbingkai', 'Panorama'] },
      { id: 'associated', label: 'Perspektif', scale: ['Dissociated (lihat diri)', 'Associated (dari mata sendiri)'] }
    ]
  },
  auditory: {
    name: 'Auditory (Pendengaran)',
    emoji: '👂',
    items: [
      { id: 'volume', label: 'Volume', scale: ['Pelan', 'Keras'] },
      { id: 'pitch', label: 'Pitch/Nada', scale: ['Rendah', 'Tinggi'] },
      { id: 'tempo', label: 'Tempo', scale: ['Lambat', 'Cepat'] },
      { id: 'rhythm', label: 'Ritme', scale: ['Monoton', 'Berirama'] },
      { id: 'tone', label: 'Tone', scale: ['Kasar', 'Halus'] },
      { id: 'location_a', label: 'Lokasi Suara', scale: ['Dari luar', 'Dari dalam'] },
      { id: 'direction', label: 'Arah', scale: ['Satu arah', 'Surround'] },
      { id: 'clarity', label: 'Kejelasan', scale: ['Samar', 'Jelas'] }
    ]
  },
  kinesthetic: {
    name: 'Kinesthetic (Perasaan)',
    emoji: '✋',
    items: [
      { id: 'intensity', label: 'Intensitas', scale: ['Lemah', 'Kuat'] },
      { id: 'temperature', label: 'Suhu', scale: ['Dingin', 'Hangat'] },
      { id: 'texture', label: 'Tekstur', scale: ['Halus', 'Kasar'] },
      { id: 'pressure', label: 'Tekanan', scale: ['Ringan', 'Berat'] },
      { id: 'location_k', label: 'Lokasi di Tubuh', scale: ['Menyebar', 'Terpusat'] },
      { id: 'movement_k', label: 'Gerakan', scale: ['Diam', 'Bergerak'] },
      { id: 'duration', label: 'Durasi', scale: ['Sebentar', 'Berkelanjutan'] },
      { id: 'shape', label: 'Bentuk', scale: ['Tidak berbentuk', 'Berbentuk jelas'] }
    ]
  }
};

// ==================== NLP SCRIPTS ====================
const nlpScripts = {

  // ==================== STATE MODELING/COPYING ====================
  'stateModeling': {
    title: 'State Modeling - Copy State Orang Lain',
    description: 'Teknik NLP untuk meng-copy state/kondisi mental seseorang yang excellence',
    level: 'intermediate',
    steps: [
      { type: 'instruction', text: 'STATE MODELING', subtext: 'Teknik untuk meng-copy state excellence dari orang lain', duration: 8000 },
      { type: 'instruction', text: 'Duduk dengan nyaman...', subtext: 'Rilekskan tubuh, buka pikiran', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... tahan... hembuskan...', duration: 8000 },

      // Step 1: Identify the Model
      { type: 'instruction', text: '=== STEP 1: IDENTIFIKASI MODEL ===', duration: 4000 },
      { type: 'input', text: 'Siapa orang yang state-nya ingin kamu copy?', subtext: 'Bisa orang nyata, tokoh, atau versi terbaik dirimu', placeholder: 'Nama orang/tokoh' },
      { type: 'input', text: 'State APA yang ingin kamu copy dari orang itu?', subtext: 'Contoh: Percaya diri, tenang, fokus, karismatik, dll', placeholder: 'State yang diinginkan' },
      { type: 'input', text: 'Dalam situasi apa orang itu menunjukkan state tersebut?', placeholder: 'Situasi spesifik' },

      // Step 2: Observe & Elicit
      { type: 'instruction', text: '=== STEP 2: OBSERVASI MODEL ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan orang itu di depanmu...', subtext: 'Dalam state excellence yang ingin kamu copy', duration: 10000 },
      { type: 'instruction', text: 'PHYSIOLOGY - Perhatikan tubuhnya:', subtext: 'Postur, cara berdiri/duduk, gerakan', duration: 10000 },
      { type: 'input', text: 'Bagaimana POSTUR tubuhnya?', placeholder: 'Tegak, rileks, condong ke depan, dll' },
      { type: 'input', text: 'Bagaimana EKSPRESI wajahnya?', placeholder: 'Senyum, tenang, fokus, dll' },
      { type: 'input', text: 'Bagaimana cara dia BERNAPAS?', placeholder: 'Dalam, pelan, dari perut, dll' },
      { type: 'input', text: 'Bagaimana GERAKAN tubuhnya?', placeholder: 'Smooth, tegas, rileks, dll' },

      // Step 3: Internal State
      { type: 'instruction', text: '=== STEP 3: STATE INTERNAL ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang masuk ke dalam pikiran orang itu...', subtext: 'Bayangkan kamu bisa merasakan apa yang dia rasakan', duration: 10000 },
      { type: 'input', text: 'Apa yang dia PIKIRKAN saat dalam state itu?', placeholder: 'Belief, self-talk, fokus pikiran' },
      { type: 'input', text: 'Apa yang dia YAKINI tentang dirinya?', placeholder: 'Beliefs tentang kemampuan, nilai diri' },
      { type: 'input', text: 'Apa yang dia FOKUSKAN perhatiannya?', placeholder: 'Fokus internal/eksternal, detail/big picture' },

      // Step 4: Submodalities Elicitation
      { type: 'instruction', text: '=== STEP 4: SUBMODALITIES ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang kita akan meng-elicit submodalities...', subtext: 'Detail representasi internal dari state tersebut', duration: 8000 },
      { type: 'instruction', text: 'Tekan tombol di bawah untuk mengisi checklist submodalities', duration: 6000 },
      { type: 'choice', text: 'Lanjut ke Submodalities Checklist?', options: ['Ya, Lanjutkan'] },

      // Submodalities Checklist - Visual
      { type: 'instruction', text: '=== CHECKLIST: VISUAL (Penglihatan) ===', subtext: 'Perhatikan representasi visual dari state model', duration: 5000 },
      { type: 'instruction', text: 'Bayangkan orang itu dalam state excellence...', subtext: 'Perhatikan gambar internal yang muncul', duration: 6000 },
      { type: 'choice', text: 'Gambar internal: TERANG atau GELAP?', options: ['Sangat Gelap', 'Gelap', 'Sedang', 'Terang', 'Sangat Terang'] },
      { type: 'choice', text: 'Ukuran gambar: BESAR atau KECIL?', options: ['Sangat Kecil', 'Kecil', 'Sedang', 'Besar', 'Sangat Besar'] },
      { type: 'choice', text: 'Jarak gambar: JAUH atau DEKAT?', options: ['Sangat Jauh', 'Jauh', 'Sedang', 'Dekat', 'Sangat Dekat'] },
      { type: 'choice', text: 'BERWARNA atau HITAM-PUTIH?', options: ['Hitam-Putih', 'Sedikit Warna', 'Berwarna', 'Warna Vivid'] },
      { type: 'choice', text: 'FOKUS/TAJAM atau BLUR?', options: ['Sangat Blur', 'Blur', 'Sedang', 'Tajam', 'Kristal Clear'] },
      { type: 'choice', text: 'BERGERAK atau DIAM?', options: ['Diam/Foto', 'Sedikit Gerak', 'Bergerak Pelan', 'Bergerak Normal', 'Film Cepat'] },
      { type: 'choice', text: 'Dimensi: 2D FLAT atau 3D DEPTH?', options: ['2D Flat', 'Sedikit Depth', '3D Normal', '3D Immersive'] },
      { type: 'choice', text: 'BERBINGKAI atau PANORAMA?', options: ['Berbingkai Kecil', 'Berbingkai', 'Tanpa Bingkai', 'Panorama Luas'] },
      { type: 'input', text: 'LOKASI gambar (atas/bawah, kiri/kanan)?', placeholder: 'Contoh: Depan agak kanan, sedikit di atas' },

      // Submodalities Checklist - Auditory
      { type: 'instruction', text: '=== CHECKLIST: AUDITORY (Pendengaran) ===', subtext: 'Perhatikan representasi suara dari state model', duration: 5000 },
      { type: 'choice', text: 'Apakah ada SUARA/DIALOG internal?', options: ['Tidak Ada', 'Samar', 'Ada', 'Jelas', 'Sangat Jelas'] },
      { type: 'choice', text: 'VOLUME suara?', options: ['Sangat Pelan', 'Pelan', 'Sedang', 'Keras', 'Sangat Keras'] },
      { type: 'choice', text: 'PITCH/NADA suara?', options: ['Sangat Rendah', 'Rendah', 'Sedang', 'Tinggi', 'Sangat Tinggi'] },
      { type: 'choice', text: 'TEMPO bicara?', options: ['Sangat Lambat', 'Lambat', 'Sedang', 'Cepat', 'Sangat Cepat'] },
      { type: 'choice', text: 'TONE suara?', options: ['Kasar/Tegas', 'Netral', 'Halus/Lembut', 'Hangat'] },
      { type: 'choice', text: 'Suara dari DALAM kepala atau LUAR?', options: ['Dari Dalam', 'Campuran', 'Dari Luar'] },
      { type: 'choice', text: 'ARAH suara?', options: ['Satu Arah', 'Stereo', 'Surround'] },
      { type: 'input', text: 'Apa KATA-KATA yang terdengar (jika ada)?', placeholder: 'Self-talk atau dialog yang terdengar' },

      // Submodalities Checklist - Kinesthetic
      { type: 'instruction', text: '=== CHECKLIST: KINESTHETIC (Perasaan) ===', subtext: 'Perhatikan sensasi tubuh dari state model', duration: 5000 },
      { type: 'choice', text: 'INTENSITAS perasaan?', options: ['Sangat Lemah', 'Lemah', 'Sedang', 'Kuat', 'Sangat Kuat'] },
      { type: 'choice', text: 'SUHU sensasi?', options: ['Dingin', 'Sejuk', 'Netral', 'Hangat', 'Panas'] },
      { type: 'choice', text: 'TEKANAN/BERAT?', options: ['Sangat Ringan', 'Ringan', 'Netral', 'Berat', 'Sangat Berat'] },
      { type: 'choice', text: 'TEKSTUR sensasi?', options: ['Halus', 'Netral', 'Kasar'] },
      { type: 'choice', text: 'Sensasi MENYEBAR atau TERPUSAT?', options: ['Sangat Terpusat', 'Terpusat', 'Agak Menyebar', 'Menyebar Luas', 'Seluruh Tubuh'] },
      { type: 'choice', text: 'Sensasi DIAM atau BERGERAK?', options: ['Diam', 'Berdenyut', 'Bergerak Pelan', 'Mengalir', 'Berputar/Spiral'] },
      { type: 'input', text: 'Di mana LOKASI sensasi di tubuh?', placeholder: 'Contoh: Dada, perut, solar plexus' },
      { type: 'input', text: 'Jika sensasi punya BENTUK, seperti apa?', placeholder: 'Contoh: Bola cahaya, gelombang, api' },

      { type: 'instruction', text: 'Checklist Submodalities SELESAI!', subtext: 'Informasi ini akan membantu kamu meng-copy state dengan presisi', duration: 5000 },

      // Step 5: Step Into
      { type: 'instruction', text: '=== STEP 5: STEP INTO THE MODEL ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang, MASUK ke dalam tubuh orang itu...', subtext: 'Bayangkan kamu menjadi dia', duration: 10000 },
      { type: 'instruction', text: 'Adopt POSTUR yang sama...', subtext: 'Tegakkan tubuh seperti dia', duration: 8000 },
      { type: 'instruction', text: 'Adopt EKSPRESI yang sama...', subtext: 'Wajah, mata, senyum', duration: 8000 },
      { type: 'instruction', text: 'Adopt NAPAS yang sama...', subtext: 'Bernapas seperti dia bernapas', duration: 8000 },
      { type: 'instruction', text: 'Adopt GERAKAN yang sama...', subtext: 'Gerakkan tubuh seperti dia', duration: 8000 },
      { type: 'instruction', text: 'Adopt PIKIRAN yang sama...', subtext: 'Pikirkan apa yang dia pikirkan', duration: 10000 },
      { type: 'instruction', text: 'RASAKAN state itu mengalir di tubuhmu...', subtext: 'Biarkan sensasi itu menguat', duration: 12000 },

      // Step 6: Amplify
      { type: 'instruction', text: '=== STEP 6: AMPLIFY ===', duration: 4000 },
      { type: 'instruction', text: 'PERKUAT state ini...', subtext: 'Buat lebih terang, lebih kuat, lebih intens', duration: 10000 },
      { type: 'instruction', text: 'Jika ada suara internal, buat lebih JELAS dan YAKIN...', duration: 8000 },
      { type: 'instruction', text: 'Jika ada perasaan, buat lebih KUAT dan MENYEBAR...', duration: 8000 },
      { type: 'instruction', text: 'DOUBLE intensitasnya sekarang...', duration: 8000 },

      // Step 7: Anchor
      { type: 'instruction', text: '=== STEP 7: ANCHOR ===', duration: 4000 },
      { type: 'instruction', text: 'Saat state ini di PUNCAK...', subtext: 'Buat anchor dengan gesture unik', duration: 8000 },
      { type: 'instruction', text: 'TEKAN ibu jari dan jari tengahmu bersama...', subtext: 'Atau gesture lain yang kamu pilih', duration: 10000 },
      { type: 'instruction', text: 'Tahan tekanan itu selama state masih kuat...', duration: 10000 },
      { type: 'instruction', text: 'Lepaskan perlahan saat state mulai menurun...', duration: 8000 },

      // Step 8: Test
      { type: 'instruction', text: '=== STEP 8: TEST ANCHOR ===', duration: 4000 },
      { type: 'instruction', text: 'Break state - pikirkan hal netral sejenak...', subtext: 'Warna dinding, angka random', duration: 8000 },
      { type: 'instruction', text: 'Sekarang AKTIFKAN anchor...', subtext: 'Tekan gesture yang sama', duration: 8000 },
      { type: 'instruction', text: 'Rasakan state itu kembali...', duration: 10000 },
      { type: 'yesno', text: 'Apakah state berhasil muncul kembali?', highlight: 'Ya' },

      { type: 'completion', text: 'State Modeling Selesai!', subtext: 'Praktikkan anchor ini secara regular untuk memperkuatnya.' },
      { type: 'insight', text: 'Catatan tentang state yang di-copy:', placeholder: 'Tulis insight dan pengalamanmu...' }
    ]
  },

  // ==================== SUBMODALITIES MAPPING ====================
  'submodalitiesMapping': {
    title: 'Submodalities Mapping',
    description: 'Pemetaan detail submodalities dari sebuah state',
    level: 'basic',
    steps: [
      { type: 'instruction', text: 'SUBMODALITIES MAPPING', subtext: 'Memetakan representasi internal secara detail', duration: 6000 },
      { type: 'input', text: 'State/pengalaman apa yang ingin kamu petakan?', placeholder: 'Contoh: Percaya diri, motivasi, kenangan indah' },
      { type: 'instruction', text: 'Hadirkan state/pengalaman itu sekarang...', subtext: 'Rasakan seolah terjadi sekarang', duration: 10000 },

      // Visual
      { type: 'instruction', text: '=== VISUAL (Apa yang DILIHAT) ===', duration: 4000 },
      { type: 'instruction', text: 'Perhatikan gambar internal yang muncul...', duration: 8000 },
      { type: 'choice', text: 'Gambarnya TERANG atau GELAP?', options: ['Gelap', 'Sedang', 'Terang', 'Sangat Terang'] },
      { type: 'choice', text: 'Ukurannya BESAR atau KECIL?', options: ['Sangat Kecil', 'Kecil', 'Sedang', 'Besar', 'Sangat Besar'] },
      { type: 'choice', text: 'Jaraknya DEKAT atau JAUH?', options: ['Sangat Jauh', 'Jauh', 'Sedang', 'Dekat', 'Sangat Dekat'] },
      { type: 'choice', text: 'BERWARNA atau HITAM-PUTIH?', options: ['Hitam-Putih', 'Sedikit Warna', 'Berwarna', 'Warna Vivid'] },
      { type: 'choice', text: 'FOKUS/TAJAM atau BLUR?', options: ['Sangat Blur', 'Blur', 'Sedang', 'Tajam', 'Kristal'] },
      { type: 'choice', text: 'BERGERAK atau DIAM?', options: ['Diam/Foto', 'Sedikit Gerak', 'Bergerak', 'Film Cepat'] },
      { type: 'choice', text: 'Kamu MELIHAT dari matamu sendiri atau MELIHAT dirimu dari luar?', options: ['Dari mata sendiri (Associated)', 'Melihat diri dari luar (Dissociated)'] },
      { type: 'input', text: 'LOKASI gambar (atas/bawah, kiri/kanan, depan)?', placeholder: 'Contoh: Depan agak kanan, sedikit di atas' },

      // Auditory
      { type: 'instruction', text: '=== AUDITORY (Apa yang DIDENGAR) ===', duration: 4000 },
      { type: 'instruction', text: 'Perhatikan suara yang muncul...', subtext: 'Dialog internal atau suara eksternal', duration: 8000 },
      { type: 'choice', text: 'Apakah ada SUARA/DIALOG?', options: ['Tidak ada', 'Samar', 'Jelas', 'Sangat Jelas'] },
      { type: 'choice', text: 'Volume suara?', options: ['Sangat Pelan', 'Pelan', 'Sedang', 'Keras', 'Sangat Keras'] },
      { type: 'choice', text: 'Nada suara (pitch)?', options: ['Sangat Rendah', 'Rendah', 'Sedang', 'Tinggi', 'Sangat Tinggi'] },
      { type: 'choice', text: 'Tempo bicara?', options: ['Sangat Lambat', 'Lambat', 'Sedang', 'Cepat', 'Sangat Cepat'] },
      { type: 'choice', text: 'Suara dari DALAM atau LUAR?', options: ['Dari dalam kepala', 'Dari luar'] },
      { type: 'input', text: 'Apa yang DIKATAKAN suara itu?', placeholder: 'Self-talk atau dialog yang terdengar' },

      // Kinesthetic
      { type: 'instruction', text: '=== KINESTHETIC (Apa yang DIRASAKAN) ===', duration: 4000 },
      { type: 'instruction', text: 'Perhatikan sensasi di tubuh...', duration: 8000 },
      { type: 'choice', text: 'Intensitas perasaan?', options: ['Sangat Lemah', 'Lemah', 'Sedang', 'Kuat', 'Sangat Kuat'] },
      { type: 'choice', text: 'Sensasi HANGAT atau DINGIN?', options: ['Dingin', 'Sejuk', 'Netral', 'Hangat', 'Panas'] },
      { type: 'choice', text: 'Perasaan RINGAN atau BERAT?', options: ['Sangat Ringan', 'Ringan', 'Netral', 'Berat', 'Sangat Berat'] },
      { type: 'choice', text: 'Sensasi MENYEBAR atau TERPUSAT?', options: ['Terpusat di satu titik', 'Agak menyebar', 'Menyebar luas'] },
      { type: 'input', text: 'Di mana LOKASI sensasi di tubuh?', placeholder: 'Contoh: Dada, perut, seluruh tubuh' },
      { type: 'input', text: 'Jika sensasi ini punya BENTUK, seperti apa?', placeholder: 'Contoh: Bola cahaya, gelombang, spiral' },

      { type: 'completion', text: 'Submodalities Mapping Selesai!', subtext: 'Data ini bisa digunakan untuk State Modeling atau Swish Pattern.' },
      { type: 'insight', text: 'Catatan tambahan:', placeholder: 'Insight tentang submodalities state ini...' }
    ]
  },

  // ==================== SWISH PATTERN ====================
  'swishPattern': {
    title: 'Swish Pattern',
    description: 'Mengganti state/perilaku tidak diinginkan dengan yang diinginkan',
    level: 'basic',
    steps: [
      { type: 'instruction', text: 'SWISH PATTERN', subtext: 'Mengganti representasi internal secara cepat', duration: 6000 },

      // Identify Cue
      { type: 'instruction', text: '=== STEP 1: CUE IMAGE ===', duration: 4000 },
      { type: 'input', text: 'Perilaku/state APA yang ingin kamu ubah?', placeholder: 'Contoh: Nervous saat presentasi, malas, overthinking' },
      { type: 'instruction', text: 'Bayangkan PEMICU (cue) yang memulai state itu...', subtext: 'Apa yang kamu lihat tepat sebelum state tidak diinginkan muncul?', duration: 10000 },
      { type: 'input', text: 'Apa CUE IMAGE-nya? (apa yang dilihat sebelum state muncul)', placeholder: 'Contoh: Melihat layar presentasi, melihat pekerjaan menumpuk' },
      { type: 'instruction', text: 'Buat gambar cue itu BESAR dan TERANG di depanmu...', duration: 8000 },

      // Desired State
      { type: 'instruction', text: '=== STEP 2: DESIRED SELF IMAGE ===', duration: 4000 },
      { type: 'input', text: 'Bagaimana versi IDEAL dirimu yang sudah berubah?', placeholder: 'Contoh: Percaya diri, energik, tenang dan fokus' },
      { type: 'instruction', text: 'Bayangkan DIRIMU dalam state ideal itu...', subtext: 'Lihat dirimu dari luar (dissociated)', duration: 10000 },
      { type: 'instruction', text: 'Lihat ekspresi wajahmu... postur tubuhmu... energimu...', duration: 10000 },
      { type: 'instruction', text: 'Buat gambar ini di pojok kiri bawah... KECIL dan GELAP...', duration: 8000 },

      // The Swish
      { type: 'instruction', text: '=== STEP 3: THE SWISH ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang kita akan melakukan SWISH...', subtext: 'Cue image besar di depan, Desired image kecil di pojok', duration: 8000 },
      { type: 'instruction', text: 'Dalam hitungan SWISH...', subtext: 'Gambar kecil akan MEMBESAR dan MENERANG', duration: 6000 },
      { type: 'instruction', text: 'Sementara gambar cue akan MENGECIL dan MEMUDAR...', duration: 6000 },
      { type: 'instruction', text: '3... 2... 1... SWIIIIISH!', subtext: 'Lakukan sekarang dalam pikiranmu!', duration: 8000 },
      { type: 'instruction', text: 'Lihat dirimu yang ideal sekarang BESAR dan TERANG!', duration: 6000 },

      // Clear & Repeat
      { type: 'instruction', text: 'Buka mata, lihat sekeliling, BERSIHKAN pikiran...', duration: 6000 },
      { type: 'instruction', text: 'Tutup mata lagi... Kembalikan cue image BESAR di depan...', duration: 8000 },
      { type: 'instruction', text: 'Desired image KECIL di pojok...', duration: 4000 },
      { type: 'instruction', text: '3... 2... 1... SWIIIIISH!', duration: 6000 },

      { type: 'instruction', text: 'Bersihkan... dan ulangi SWISH 3x lagi...', duration: 15000 },

      // Test
      { type: 'instruction', text: '=== STEP 4: TEST ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang coba bayangkan cue image lagi...', duration: 6000 },
      { type: 'instruction', text: 'Apa yang terjadi? Apakah langsung berubah ke desired image?', duration: 8000 },
      { type: 'yesno', text: 'Apakah swish berhasil (cue otomatis berubah ke desired)?', highlight: 'Ya' },

      { type: 'completion', text: 'Swish Pattern Selesai!', subtext: 'Ulangi setiap hari selama seminggu untuk memperkuat.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Insight dan pengalamanmu...' }
    ]
  },

  // ==================== ANCHORING ====================
  'anchoring': {
    title: 'Anchoring - Pasang Jangkar State',
    description: 'Membuat trigger untuk mengakses state tertentu kapan saja',
    level: 'basic',
    steps: [
      { type: 'instruction', text: 'ANCHORING', subtext: 'Membuat jangkar untuk mengakses state kapan saja', duration: 6000 },

      { type: 'input', text: 'State APA yang ingin kamu anchor?', placeholder: 'Contoh: Percaya diri, tenang, fokus, powerful' },

      // Recall Experience
      { type: 'instruction', text: '=== STEP 1: RECALL EXPERIENCE ===', duration: 4000 },
      { type: 'instruction', text: 'Ingat saat kamu pernah merasakan state itu dengan KUAT...', subtext: 'Cari memori yang paling intens', duration: 10000 },
      { type: 'input', text: 'Kapan dan di mana pengalaman itu?', placeholder: 'Waktu dan tempat spesifik' },

      // Relive
      { type: 'instruction', text: '=== STEP 2: RELIVE ===', duration: 4000 },
      { type: 'instruction', text: 'Masuk ke dalam pengalaman itu sepenuhnya...', subtext: 'Lihat dari matamu sendiri (associated)', duration: 8000 },
      { type: 'instruction', text: 'Lihat apa yang kamu lihat saat itu...', duration: 8000 },
      { type: 'instruction', text: 'Dengar apa yang kamu dengar saat itu...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan apa yang kamu rasakan saat itu...', duration: 8000 },
      { type: 'instruction', text: 'Biarkan state itu menguat... menguat... menguat...', duration: 10000 },

      // Amplify
      { type: 'instruction', text: '=== STEP 3: AMPLIFY ===', duration: 4000 },
      { type: 'instruction', text: 'Buat gambarnya lebih TERANG...', duration: 6000 },
      { type: 'instruction', text: 'Buat suaranya lebih JELAS...', duration: 6000 },
      { type: 'instruction', text: 'Buat perasaannya lebih INTENS...', duration: 6000 },
      { type: 'instruction', text: 'DOUBLE intensitasnya sekarang!', duration: 6000 },
      { type: 'instruction', text: 'Biarkan state ini mencapai PUNCAKNYA...', duration: 10000 },

      // Set Anchor
      { type: 'instruction', text: '=== STEP 4: SET ANCHOR ===', duration: 4000 },
      { type: 'instruction', text: 'Tepat saat state di PUNCAK...', subtext: 'Lakukan gesture unik sekarang!', duration: 6000 },
      { type: 'instruction', text: 'TEKAN ibu jari ke buku jari telunjuk...', subtext: 'Atau gesture lain yang kamu pilih', duration: 10000 },
      { type: 'instruction', text: 'TAHAN tekanan selama state masih tinggi...', duration: 10000 },
      { type: 'instruction', text: 'Lepaskan PERLAHAN saat state menurun...', duration: 8000 },

      // Break & Test
      { type: 'instruction', text: '=== STEP 5: BREAK & TEST ===', duration: 4000 },
      { type: 'instruction', text: 'Buka mata, lihat sekeliling, hitung 1-10 mundur...', duration: 8000 },
      { type: 'instruction', text: 'Break state sepenuhnya...', duration: 6000 },
      { type: 'instruction', text: 'Sekarang AKTIFKAN anchor... tekan gesture yang sama!', duration: 8000 },
      { type: 'instruction', text: 'Rasakan state itu kembali...', duration: 10000 },
      { type: 'yesno', text: 'Apakah state muncul kembali?', highlight: 'Ya' },

      // Stack (optional)
      { type: 'instruction', text: '=== STEP 6: STACK (Opsional) ===', duration: 4000 },
      { type: 'instruction', text: 'Untuk anchor lebih kuat, STACK dengan memori lain...', duration: 6000 },
      { type: 'instruction', text: 'Ingat pengalaman LAIN dengan state yang sama...', duration: 10000 },
      { type: 'instruction', text: 'Masuk ke pengalaman itu, biarkan state menguat...', duration: 10000 },
      { type: 'instruction', text: 'Di puncak, tekan anchor yang SAMA...', duration: 10000 },
      { type: 'instruction', text: 'Tahan... dan lepaskan perlahan...', duration: 8000 },

      { type: 'completion', text: 'Anchoring Selesai!', subtext: 'Anchor ini akan menguat dengan penggunaan. Gunakan secara regular!' },
      { type: 'insight', text: 'Catatan tentang anchor:', placeholder: 'Gesture yang digunakan, kekuatan anchor, dll' }
    ]
  },

  // ==================== CIRCLE OF EXCELLENCE ====================
  'circleOfExcellence': {
    title: 'Circle of Excellence',
    description: 'Membuat lingkaran imajiner berisi state-state powerful',
    level: 'basic',
    steps: [
      { type: 'instruction', text: 'CIRCLE OF EXCELLENCE', subtext: 'Membuat lingkaran berisi state-state terbaikmu', duration: 6000 },

      { type: 'instruction', text: 'Bayangkan sebuah LINGKARAN di lantai di depanmu...', subtext: 'Diameter sekitar 1 meter', duration: 8000 },
      { type: 'instruction', text: 'Beri lingkaran itu WARNA favoritmu...', subtext: 'Warna yang melambangkan kekuatan', duration: 8000 },
      { type: 'input', text: 'Warna apa yang kamu pilih?', placeholder: 'Contoh: Emas, biru elektrik, merah api' },

      // First State
      { type: 'instruction', text: '=== STATE 1 ===', duration: 4000 },
      { type: 'input', text: 'State PERTAMA yang ingin kamu masukkan ke lingkaran?', placeholder: 'Contoh: Percaya diri' },
      { type: 'instruction', text: 'Ingat saat kamu pernah merasakan state itu sangat kuat...', duration: 10000 },
      { type: 'instruction', text: 'Lihat, dengar, rasakan pengalaman itu sepenuhnya...', duration: 12000 },
      { type: 'instruction', text: 'Saat state di puncak... MELANGKAH MASUK ke lingkaran!', duration: 8000 },
      { type: 'instruction', text: 'Rasakan state itu mengisi lingkaran... menyatu denganmu...', duration: 10000 },
      { type: 'instruction', text: 'Melangkah KELUAR dari lingkaran...', duration: 6000 },

      // Second State
      { type: 'instruction', text: '=== STATE 2 ===', duration: 4000 },
      { type: 'input', text: 'State KEDUA yang ingin kamu tambahkan?', placeholder: 'Contoh: Tenang' },
      { type: 'instruction', text: 'Ingat pengalaman dengan state itu...', duration: 10000 },
      { type: 'instruction', text: 'Biarkan state menguat... di puncak, MELANGKAH MASUK!', duration: 10000 },
      { type: 'instruction', text: 'Rasakan kedua state bergabung... lebih powerful...', duration: 10000 },
      { type: 'instruction', text: 'Melangkah KELUAR...', duration: 6000 },

      // Third State
      { type: 'instruction', text: '=== STATE 3 ===', duration: 4000 },
      { type: 'input', text: 'State KETIGA?', placeholder: 'Contoh: Fokus' },
      { type: 'instruction', text: 'Ingat pengalaman...', duration: 10000 },
      { type: 'instruction', text: 'State menguat... MELANGKAH MASUK!', duration: 10000 },
      { type: 'instruction', text: 'Tiga state bergabung menjadi satu kekuatan...', duration: 10000 },
      { type: 'instruction', text: 'Melangkah KELUAR...', duration: 6000 },

      // Final Activation
      { type: 'instruction', text: '=== AKTIVASI PENUH ===', duration: 4000 },
      { type: 'instruction', text: 'Lihat lingkaran itu sekarang... berisi semua state terbaikmu...', duration: 8000 },
      { type: 'instruction', text: 'Saat kamu siap... MELANGKAH MASUK dengan penuh keyakinan!', duration: 10000 },
      { type: 'instruction', text: 'RASAKAN semua state itu mengalir ke dalam dirimu...', duration: 12000 },
      { type: 'instruction', text: 'Kamu sekarang MEMILIKI semua resource ini...', duration: 8000 },
      { type: 'instruction', text: 'Kapanpun kamu butuh, cukup bayangkan lingkaran ini dan melangkah masuk...', duration: 10000 },

      { type: 'completion', text: 'Circle of Excellence Selesai!', subtext: 'Gunakan kapan saja kamu butuh akses ke state-state ini.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'State-state dalam lingkaranmu dan bagaimana rasanya...' }
    ]
  },

  // ==================== PERCEPTUAL POSITIONS ====================
  'perceptualPositions': {
    title: 'Perceptual Positions',
    description: 'Melihat situasi dari 3 perspektif berbeda',
    level: 'intermediate',
    steps: [
      { type: 'instruction', text: 'PERCEPTUAL POSITIONS', subtext: 'Melihat situasi dari berbagai sudut pandang', duration: 6000 },

      { type: 'input', text: 'Situasi atau hubungan APA yang ingin kamu eksplorasi?', placeholder: 'Contoh: Konflik dengan atasan, komunikasi dengan pasangan' },
      { type: 'input', text: 'Siapa orang lain yang terlibat?', placeholder: 'Nama orang' },

      // First Position - Self
      { type: 'instruction', text: '=== POSISI 1: DIRI SENDIRI ===', duration: 4000 },
      { type: 'instruction', text: 'Kamu ada di posisi dirimu sendiri...', subtext: 'Melihat dari matamu, merasakan apa yang kamu rasakan', duration: 8000 },
      { type: 'instruction', text: 'Bayangkan situasi itu terjadi sekarang...', duration: 8000 },
      { type: 'input', text: 'Apa yang kamu LIHAT dari posisi ini?', placeholder: 'Apa yang terlihat di depanmu' },
      { type: 'input', text: 'Apa yang kamu RASAKAN dari posisi ini?', placeholder: 'Emosi dan sensasi tubuh' },
      { type: 'input', text: 'Apa yang kamu INGINKAN?', placeholder: 'Kebutuhan dan keinginanmu' },

      // Second Position - Other
      { type: 'instruction', text: '=== POSISI 2: ORANG LAIN ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang PINDAH ke posisi orang lain...', subtext: 'Masuk ke dalam tubuh dan pikiran mereka', duration: 10000 },
      { type: 'instruction', text: 'Lihat dari MATA mereka... rasakan apa yang MEREKA rasakan...', duration: 10000 },
      { type: 'input', text: 'Dari posisi orang ini, apa yang DILIHAT?', placeholder: 'Apa yang mereka lihat tentangmu' },
      { type: 'input', text: 'Apa yang orang ini RASAKAN?', placeholder: 'Emosi mereka' },
      { type: 'input', text: 'Apa yang orang ini BUTUHKAN?', placeholder: 'Kebutuhan dan keinginan mereka' },
      { type: 'input', text: 'Apa NIAT POSITIF di balik perilaku orang ini?', placeholder: 'Niat baik yang mungkin tidak terlihat' },

      // Third Position - Observer
      { type: 'instruction', text: '=== POSISI 3: PENGAMAT NETRAL ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang mundur ke POSISI PENGAMAT...', subtext: 'Lihat kalian berdua dari luar, seperti menonton film', duration: 10000 },
      { type: 'instruction', text: 'Dari sini, kamu bisa melihat kedua pihak dengan NETRAL...', duration: 8000 },
      { type: 'input', text: 'Apa yang TERLIHAT dari sudut pandang netral ini?', placeholder: 'Pola, dinamika, hal yang tidak disadari kedua pihak' },
      { type: 'input', text: 'Apa ADVICE yang akan kamu berikan kepada kedua pihak?', placeholder: 'Saran bijak dari pengamat netral' },
      { type: 'input', text: 'Apa yang bisa dilakukan untuk WIN-WIN solution?', placeholder: 'Solusi yang menguntungkan kedua pihak' },

      // Integration
      { type: 'instruction', text: '=== INTEGRASI ===', duration: 4000 },
      { type: 'instruction', text: 'Kembali ke posisi dirimu sendiri...', duration: 6000 },
      { type: 'instruction', text: 'Bawa semua insight dari ketiga posisi...', duration: 8000 },
      { type: 'instruction', text: 'Bagaimana perasaanmu SEKARANG tentang situasi ini?', duration: 10000 },
      { type: 'input', text: 'Insight utama yang kamu dapat:', placeholder: 'Pembelajaran dari 3 posisi' },
      { type: 'input', text: 'Apa yang akan kamu lakukan BERBEDA?', placeholder: 'Action plan' },

      { type: 'completion', text: 'Perceptual Positions Selesai!', subtext: 'Gunakan teknik ini kapan saja ada konflik atau ketidakpahaman.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Insight dan rencana aksi...' }
    ]
  },

  // ==================== NEW BEHAVIOR GENERATOR ====================
  'newBehaviorGenerator': {
    title: 'New Behavior Generator',
    description: 'Memprogram perilaku baru dengan visualisasi',
    level: 'intermediate',
    steps: [
      { type: 'instruction', text: 'NEW BEHAVIOR GENERATOR', subtext: 'Memprogram perilaku baru ke dalam sistem sarafmu', duration: 6000 },

      { type: 'input', text: 'Perilaku BARU apa yang ingin kamu miliki?', placeholder: 'Contoh: Berani speak up, konsisten olahraga, sabar' },
      { type: 'input', text: 'Dalam SITUASI apa perilaku ini dibutuhkan?', placeholder: 'Situasi spesifik' },

      // Step 1: Observe Role Model
      { type: 'instruction', text: '=== STEP 1: ROLE MODEL ===', duration: 4000 },
      { type: 'input', text: 'Siapa yang sudah MAHIR melakukan perilaku ini?', placeholder: 'Nama orang (nyata atau fiksi)' },
      { type: 'instruction', text: 'Bayangkan orang itu melakukan perilaku tersebut...', subtext: 'Lihat seperti menonton film', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan DETAIL perilakunya...', subtext: 'Gerakan, ekspresi, kata-kata, sikap', duration: 12000 },

      // Step 2: Replace with Self
      { type: 'instruction', text: '=== STEP 2: GANTI DENGAN DIRIMU ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang ganti orang itu dengan DIRIMU...', subtext: 'Lihat dirimu melakukan perilaku yang sama', duration: 10000 },
      { type: 'instruction', text: 'Lihat dirimu melakukannya dengan SEMPURNA...', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan ekspresimu... gerakanmu... kepercayaan dirimu...', duration: 10000 },

      // Step 3: Step In
      { type: 'instruction', text: '=== STEP 3: MASUK KE DALAM ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang MASUK ke dalam dirimu di film itu...', subtext: 'Lihat dari matamu sendiri', duration: 10000 },
      { type: 'instruction', text: 'RASAKAN bagaimana rasanya melakukan perilaku ini...', duration: 10000 },
      { type: 'instruction', text: 'Dengar apa yang kamu katakan pada dirimu sendiri...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan KEPERCAYAAN DIRI mengalir...', duration: 10000 },

      // Step 4: Future Pace
      { type: 'instruction', text: '=== STEP 4: FUTURE PACE ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan situasi SPESIFIK di masa depan...', subtext: 'Di mana kamu akan menggunakan perilaku ini', duration: 10000 },
      { type: 'instruction', text: 'Lihat, dengar, rasakan dirimu melakukan perilaku baru ini...', duration: 12000 },
      { type: 'instruction', text: 'Bayangkan REAKSI positif dari orang sekitar...', duration: 10000 },
      { type: 'instruction', text: 'Rasakan KEPUASAN setelah berhasil...', duration: 10000 },

      // Step 5: Repeat
      { type: 'instruction', text: '=== STEP 5: ULANGI ===', duration: 4000 },
      { type: 'instruction', text: 'Ulangi visualisasi ini 3x lebih cepat...', duration: 20000 },

      { type: 'completion', text: 'New Behavior Generator Selesai!', subtext: 'Ulangi setiap hari selama 21 hari untuk instalasi permanen.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Bagaimana rasanya dan rencana praktikmu...' }
    ]
  },

  // ==================== DEEP TRANCE IDENTIFICATION ====================
  'deepTraceId': {
    title: 'Deep Trance Identification (Simplified)',
    description: 'Menjadi satu dengan model untuk menyerap kemampuannya',
    level: 'advanced',
    steps: [
      { type: 'instruction', text: 'DEEP TRANCE IDENTIFICATION', subtext: 'Teknik advance untuk menyerap kemampuan model', duration: 6000 },

      { type: 'instruction', text: 'PERINGATAN: Teknik ini sangat powerful.', subtext: 'Gunakan hanya untuk menyerap kualitas positif.', duration: 8000 },

      { type: 'input', text: 'Siapa MODEL yang kemampuannya ingin kamu serap?', placeholder: 'Nama orang yang excellence' },
      { type: 'input', text: 'KEMAMPUAN spesifik apa yang ingin kamu serap?', placeholder: 'Kemampuan tertentu dari model' },

      // Relaxation
      { type: 'instruction', text: '=== RELAKSASI DALAM ===', duration: 4000 },
      { type: 'instruction', text: 'Tutup mata... tarik napas dalam...', duration: 8000 },
      { type: 'breathing', text: 'Tarik napas... 4 detik', duration: 4000 },
      { type: 'breathing', text: 'Tahan... 4 detik', duration: 4000 },
      { type: 'breathing', text: 'Hembuskan... 6 detik', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan seluruh tubuh dari kepala sampai kaki...', duration: 15000 },
      { type: 'instruction', text: 'Masuk lebih dalam... lebih rileks... lebih tenang...', duration: 10000 },

      // Observe Model
      { type: 'instruction', text: '=== OBSERVASI MODEL ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan model berdiri di depanmu...', duration: 8000 },
      { type: 'instruction', text: 'Lihat detail wajahnya... posturnya... auranya...', duration: 12000 },
      { type: 'instruction', text: 'Lihat dia melakukan kemampuan yang ingin kamu serap...', duration: 12000 },
      { type: 'instruction', text: 'Perhatikan SETIAP DETAIL...', subtext: 'Gerakan, ekspresi, energi, presence', duration: 15000 },

      // Merge
      { type: 'instruction', text: '=== PENYATUAN ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang, perlahan MENDEKATI model itu...', duration: 8000 },
      { type: 'instruction', text: 'Semakin dekat... semakin dekat...', duration: 8000 },
      { type: 'instruction', text: 'Sekarang MASUK ke dalam tubuh model itu...', subtext: 'Menjadi satu dengannya', duration: 10000 },
      { type: 'instruction', text: 'Kamu ADALAH dia sekarang...', duration: 8000 },
      { type: 'instruction', text: 'Lihat dari MATANYA...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan dari TUBUHNYA...', duration: 8000 },
      { type: 'instruction', text: 'Pikirkan dengan PIKIRANNYA...', duration: 8000 },
      { type: 'instruction', text: 'SERAP semua kemampuan, belief, dan state-nya...', duration: 15000 },
      { type: 'instruction', text: 'Biarkan semua itu menjadi bagian dari DIRIMU...', duration: 12000 },

      // Integration
      { type: 'instruction', text: '=== INTEGRASI ===', duration: 4000 },
      { type: 'instruction', text: 'Perlahan, KELUAR dari tubuh model...', duration: 10000 },
      { type: 'instruction', text: 'Tapi BAWA semua yang sudah kamu serap...', duration: 8000 },
      { type: 'instruction', text: 'Kemampuan itu sekarang MILIKMU...', duration: 8000 },
      { type: 'instruction', text: 'Terintegrasi dengan siapa dirimu...', duration: 10000 },

      // Future Pace
      { type: 'instruction', text: '=== FUTURE PACE ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan dirimu di masa depan...', subtext: 'Menggunakan kemampuan yang baru kamu serap', duration: 10000 },
      { type: 'instruction', text: 'Lihat dirimu melakukannya dengan natural...', duration: 10000 },
      { type: 'instruction', text: 'Rasakan betapa ALAMI kemampuan itu sekarang...', duration: 10000 },

      { type: 'instruction', text: 'Perlahan kembali ke ruangan ini... buka mata saat siap...', duration: 10000 },

      { type: 'completion', text: 'Deep Trance Identification Selesai!', subtext: 'Kemampuan model sekarang terintegrasi dengan dirimu.' },
      { type: 'insight', text: 'Catatan pengalaman:', placeholder: 'Apa yang kamu rasakan dan insights yang muncul...' }
    ]
  },

  // ==================== TIMELINE THERAPY ====================
  'timelineTherapy': {
    title: 'Timeline Therapy',
    description: 'Mengubah hubungan dengan masa lalu dan masa depan',
    level: 'intermediate',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks. Izinkan saat ini apa adanya.', duration: 5000 },
      { type: 'instruction', text: 'TIMELINE THERAPY', subtext: 'Teknik untuk mengubah hubungan dengan waktu', duration: 6000 },

      { type: 'input', text: 'Isu/emosi negatif APA yang ingin kamu selesaikan?', placeholder: 'Contoh: Takut ditolak, trauma masa lalu, kecemasan' },
      { type: 'instruction', text: 'Tutup mata... rilekskan tubuh...', duration: 8000 },
      { type: 'breathing', text: 'Tarik napas dalam... tahan... hembuskan...', duration: 8000 },

      // Elicit Timeline
      { type: 'instruction', text: '=== STEP 1: TEMUKAN TIMELINE ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan garis waktu hidupmu...', subtext: 'MASA LALU di satu sisi, MASA DEPAN di sisi lain', duration: 10000 },
      { type: 'choice', text: 'Masa LALU ada di sebelah mana?', options: ['Kiri', 'Kanan', 'Belakang', 'Depan'] },
      { type: 'choice', text: 'Masa DEPAN ada di sebelah mana?', options: ['Kiri', 'Kanan', 'Belakang', 'Depan'] },
      { type: 'instruction', text: 'Lihat garis waktu itu membentang...', subtext: 'Dari masa lalu hingga masa depan', duration: 10000 },

      // Float Above
      { type: 'instruction', text: '=== STEP 2: NAIK KE ATAS TIMELINE ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang, bayangkan dirimu NAIK ke atas...', subtext: 'Melayang di atas timeline-mu', duration: 10000 },
      { type: 'instruction', text: 'Dari atas sini, kamu bisa melihat seluruh timeline...', duration: 8000 },
      { type: 'instruction', text: 'Lihat masa lalu... SEKARANG... dan masa depan...', duration: 10000 },

      // Find Root Cause
      { type: 'instruction', text: '=== STEP 3: TEMUKAN AKAR MASALAH ===', duration: 4000 },
      { type: 'instruction', text: 'Terbang ke arah MASA LALU...', subtext: 'Cari KEJADIAN PERTAMA yang memulai isu ini', duration: 10000 },
      { type: 'instruction', text: 'Biarkan alam bawah sadar membawamu ke sana...', duration: 12000 },
      { type: 'instruction', text: 'BERHENTI tepat DI ATAS kejadian itu...', subtext: 'Jangan masuk ke dalamnya, tetap di atas', duration: 10000 },
      { type: 'input', text: 'Kira-kira BERAPA usia kamu saat kejadian itu?', placeholder: 'Perkiraan usia' },

      // Learn the Lesson
      { type: 'instruction', text: '=== STEP 4: AMBIL PELAJARAN ===', duration: 4000 },
      { type: 'instruction', text: 'Dari posisi di atas ini, dengan kebijaksanaan dewasamu...', duration: 8000 },
      { type: 'instruction', text: 'Apa PELAJARAN positif dari kejadian ini?', subtext: 'Yang perlu dipelajari agar bisa move on', duration: 12000 },
      { type: 'input', text: 'Tuliskan pelajaran/hikmah yang bisa diambil:', placeholder: 'Pelajaran positif dari kejadian itu' },
      { type: 'instruction', text: 'Sekarang KIRIMKAN pelajaran itu ke dirimu yang lebih muda...', duration: 10000 },
      { type: 'instruction', text: 'Lihat dirimu yang muda MENERIMA pelajaran itu...', duration: 10000 },

      // Release
      { type: 'instruction', text: '=== STEP 5: LEPASKAN EMOSI ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang terbang LEBIH JAUH ke masa lalu...', subtext: 'SEBELUM kejadian itu terjadi', duration: 10000 },
      { type: 'instruction', text: 'Dari sini, LIHAT ke arah masa depan...', duration: 8000 },
      { type: 'instruction', text: 'Perhatikan... apakah emosi negatif itu masih ada?', duration: 10000 },
      { type: 'yesno', text: 'Apakah emosi negatif sudah berkurang atau hilang?', highlight: 'Ya' },

      // Return
      { type: 'instruction', text: '=== STEP 6: KEMBALI KE SEKARANG ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang terbang kembali ke SEKARANG...', subtext: 'Bawa semua pelajaran dan perubahan', duration: 10000 },
      { type: 'instruction', text: 'Turun perlahan kembali ke tubuhmu...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan perubahan yang terjadi...', duration: 10000 },

      { type: 'completion', text: 'Timeline Therapy Selesai!', subtext: 'Hubunganmu dengan masa lalu telah berubah.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Pelajaran dan perubahan yang kamu rasakan...' }
    ]
  },

  // ==================== META MODEL QUESTIONS ====================
  'metaModel': {
    title: 'Meta Model Questions',
    description: 'Menggali lebih dalam dengan pertanyaan presisi',
    level: 'intermediate',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks. Buka pikiran.', duration: 5000 },
      { type: 'instruction', text: 'META MODEL QUESTIONS', subtext: 'Teknik bertanya untuk menggali kebenaran', duration: 6000 },
      { type: 'instruction', text: 'Meta Model membantu menantang DISTORSI, DELETION, dan GENERALISASI dalam pikiran', duration: 8000 },

      { type: 'input', text: 'Tuliskan PIKIRAN/BELIEF yang ingin kamu eksplorasi:', placeholder: 'Contoh: "Saya tidak bisa sukses", "Dia selalu mengabaikan saya"' },

      // Deletions
      { type: 'instruction', text: '=== DELETION (Penghapusan) ===', duration: 4000 },
      { type: 'instruction', text: 'Cek apakah ada INFORMASI yang hilang dari pikiran itu...', duration: 6000 },
      { type: 'input', text: 'SIAPA spesifiknya? (Who specifically?)', placeholder: 'Siapa yang dimaksud?' },
      { type: 'input', text: 'APA spesifiknya? (What specifically?)', placeholder: 'Apa tepatnya yang dimaksud?' },
      { type: 'input', text: 'BAGAIMANA tepatnya? (How specifically?)', placeholder: 'Bagaimana cara kerjanya?' },
      { type: 'input', text: 'KAPAN spesifiknya?', placeholder: 'Kapan tepatnya ini terjadi?' },
      { type: 'input', text: 'DI MANA spesifiknya?', placeholder: 'Di situasi mana?' },

      // Distortions
      { type: 'instruction', text: '=== DISTORSI (Penyimpangan) ===', duration: 4000 },
      { type: 'instruction', text: 'Cek apakah ada ASUMSI yang belum terbukti...', duration: 6000 },
      { type: 'input', text: 'Bagaimana kamu TAHU itu benar?', placeholder: 'Apa buktinya?' },
      { type: 'input', text: 'Apa yang membuat X berarti Y?', placeholder: 'Hubungan sebab-akibatnya?' },
      { type: 'input', text: 'Siapa yang bilang begitu?', placeholder: 'Sumber informasinya?' },
      { type: 'input', text: 'Apakah pernah ada PENGECUALIAN?', placeholder: 'Kapan ini tidak benar?' },

      // Generalizations
      { type: 'instruction', text: '=== GENERALISASI ===', duration: 4000 },
      { type: 'instruction', text: 'Cek apakah ada kata SELALU, TIDAK PERNAH, SEMUA, TIDAK ADA...', duration: 6000 },
      { type: 'input', text: 'SELALU? TIDAK PERNAH? Benar-benar selalu/tidak pernah?', placeholder: 'Tantang generalisasi' },
      { type: 'input', text: 'SEMUA orang? TIDAK ADA yang bisa? Benar?', placeholder: 'Tantang generalisasi' },
      { type: 'input', text: 'Apa yang akan terjadi jika kamu BISA?', placeholder: 'Bayangkan kemungkinannya' },
      { type: 'input', text: 'Apa yang MENCEGAH kamu?', placeholder: 'Hambatan spesifik' },

      // Integration
      { type: 'instruction', text: '=== INTEGRASI ===', duration: 4000 },
      { type: 'instruction', text: 'Setelah menjawab pertanyaan-pertanyaan ini...', duration: 6000 },
      { type: 'input', text: 'Bagaimana PIKIRAN BARU yang lebih akurat?', placeholder: 'Reformulasi pikiran yang lebih sehat' },
      { type: 'instruction', text: 'Rasakan perbedaan antara pikiran lama dan pikiran baru...', duration: 10000 },

      { type: 'completion', text: 'Meta Model Selesai!', subtext: 'Kamu telah menggali kebenaran lebih dalam.' },
      { type: 'insight', text: 'Insight utama:', placeholder: 'Apa yang kamu temukan...' }
    ]
  },

  // ==================== SIX-STEP REFRAMING ====================
  'sixStepReframing': {
    title: 'Six-Step Reframing',
    description: 'Mengubah perilaku tidak diinginkan dengan memenuhi niat positifnya',
    level: 'intermediate',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks. Buka komunikasi dengan alam bawah sadar.', duration: 5000 },
      { type: 'instruction', text: 'SIX-STEP REFRAMING', subtext: 'Teknik klasik NLP untuk perubahan perilaku', duration: 6000 },
      { type: 'instruction', text: 'Premis: Setiap perilaku punya NIAT POSITIF', subtext: 'Kita akan menemukan cara baru yang lebih baik', duration: 8000 },

      { type: 'input', text: 'Perilaku/kebiasaan APA yang ingin kamu ubah?', placeholder: 'Contoh: Prokrastinasi, makan berlebihan, merokok' },

      // Step 1: Identify
      { type: 'instruction', text: '=== STEP 1: IDENTIFIKASI ===', duration: 4000 },
      { type: 'instruction', text: 'Fokus pada perilaku yang ingin diubah...', duration: 8000 },
      { type: 'instruction', text: 'Beri nama pada BAGIAN dirimu yang melakukan perilaku ini...', subtext: 'Contoh: "Si Penunda", "Bagian yang lapar"', duration: 10000 },
      { type: 'input', text: 'Apa NAMA untuk bagian ini?', placeholder: 'Nama untuk bagian itu' },

      // Step 2: Establish Communication
      { type: 'instruction', text: '=== STEP 2: BUKA KOMUNIKASI ===', duration: 4000 },
      { type: 'instruction', text: 'Dalam hati, minta izin untuk berkomunikasi dengan bagian itu...', duration: 8000 },
      { type: 'instruction', text: '"Bagian yang melakukan [perilaku], maukah berkomunikasi denganku?"', duration: 8000 },
      { type: 'instruction', text: 'Perhatikan SINYAL apa yang muncul...', subtext: 'Bisa berupa perasaan, gambar, suara, atau sensasi', duration: 10000 },
      { type: 'yesno', text: 'Apakah kamu merasakan sinyal/respon?', highlight: 'Ya' },

      // Step 3: Find Positive Intention
      { type: 'instruction', text: '=== STEP 3: TEMUKAN NIAT POSITIF ===', duration: 4000 },
      { type: 'instruction', text: 'Tanyakan kepada bagian itu...', duration: 6000 },
      { type: 'instruction', text: '"Apa NIAT POSITIF-mu dengan melakukan perilaku ini?"', subtext: '"Apa yang ingin kamu LINDUNGI atau CAPAI untukku?"', duration: 12000 },
      { type: 'instruction', text: 'Dengarkan dengan terbuka... tanpa menghakimi...', duration: 10000 },
      { type: 'input', text: 'Apa NIAT POSITIF dari bagian ini?', placeholder: 'Contoh: Melindungi dari stres, mencari kenyamanan' },
      { type: 'instruction', text: 'Ucapkan terima kasih kepada bagian itu untuk niat baiknya...', duration: 8000 },

      // Step 4: Access Creative Part
      { type: 'instruction', text: '=== STEP 4: AKSES BAGIAN KREATIF ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang akses BAGIAN KREATIF dirimu...', subtext: 'Bagian yang bisa menciptakan solusi baru', duration: 8000 },
      { type: 'instruction', text: 'Minta bagian kreatif untuk menciptakan 3 ALTERNATIF baru...', subtext: 'Yang bisa memenuhi niat positif dengan cara lebih sehat', duration: 10000 },
      { type: 'input', text: 'Alternatif 1:', placeholder: 'Cara baru untuk memenuhi niat positif' },
      { type: 'input', text: 'Alternatif 2:', placeholder: 'Cara baru lainnya' },
      { type: 'input', text: 'Alternatif 3:', placeholder: 'Cara baru lainnya lagi' },

      // Step 5: Ask Part to Accept
      { type: 'instruction', text: '=== STEP 5: MINTA PERSETUJUAN ===', duration: 4000 },
      { type: 'instruction', text: 'Kembali ke bagian yang melakukan perilaku lama...', duration: 8000 },
      { type: 'instruction', text: 'Tanyakan: "Apakah kamu bersedia MENCOBA alternatif-alternatif ini?"', duration: 10000 },
      { type: 'instruction', text: 'Dengarkan responnya...', duration: 8000 },
      { type: 'yesno', text: 'Apakah bagian itu setuju mencoba alternatif baru?', highlight: 'Ya' },

      // Step 6: Ecology Check
      { type: 'instruction', text: '=== STEP 6: CEK EKOLOGI ===', duration: 4000 },
      { type: 'instruction', text: 'Tanyakan ke SELURUH dirimu...', duration: 6000 },
      { type: 'instruction', text: '"Apakah ada bagian lain yang KEBERATAN dengan perubahan ini?"', duration: 10000 },
      { type: 'instruction', text: 'Jika ada keberatan, negosiasikan dengan bagian tersebut...', duration: 8000 },
      { type: 'yesno', text: 'Apakah semua bagian setuju dengan perubahan ini?', highlight: 'Ya' },

      { type: 'instruction', text: 'Komitmenkan dirimu untuk menggunakan alternatif baru...', duration: 8000 },

      { type: 'completion', text: 'Six-Step Reframing Selesai!', subtext: 'Kamu telah membuat kesepakatan baru dengan alam bawah sadarmu.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Niat positif dan alternatif yang ditemukan...' }
    ]
  },

  // ==================== PARTS INTEGRATION ====================
  'partsIntegration': {
    title: 'Parts Integration',
    description: 'Mengintegrasikan bagian-bagian yang berkonflik',
    level: 'intermediate',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks dan buka kesadaran.', duration: 5000 },
      { type: 'instruction', text: 'PARTS INTEGRATION', subtext: 'Menyatukan bagian-bagian diri yang berkonflik', duration: 6000 },
      { type: 'instruction', text: 'Teknik ini untuk saat kamu merasa "terpecah" atau punya konflik internal', duration: 8000 },

      { type: 'input', text: 'Apa KONFLIK INTERNAL yang kamu rasakan?', placeholder: 'Contoh: Ingin maju tapi takut gagal, ingin sehat tapi malas olahraga' },

      // Identify Parts
      { type: 'instruction', text: '=== STEP 1: IDENTIFIKASI DUA BAGIAN ===', duration: 4000 },
      { type: 'input', text: 'Bagian PERTAMA ingin apa?', placeholder: 'Keinginan satu sisi' },
      { type: 'input', text: 'Bagian KEDUA ingin apa?', placeholder: 'Keinginan sisi yang bertentangan' },

      // Place in Hands
      { type: 'instruction', text: '=== STEP 2: TEMPATKAN DI KEDUA TANGAN ===', duration: 4000 },
      { type: 'instruction', text: 'Buka kedua telapak tanganmu, menghadap ke atas...', duration: 8000 },
      { type: 'instruction', text: 'Bayangkan bagian PERTAMA ada di tangan KANAN...', duration: 10000 },
      { type: 'instruction', text: 'Bagaimana bentuknya? Warnanya? Ukurannya?', duration: 8000 },
      { type: 'input', text: 'Deskripsi bagian pertama (di tangan kanan):', placeholder: 'Bentuk, warna, ukuran' },
      { type: 'instruction', text: 'Bayangkan bagian KEDUA ada di tangan KIRI...', duration: 10000 },
      { type: 'input', text: 'Deskripsi bagian kedua (di tangan kiri):', placeholder: 'Bentuk, warna, ukuran' },

      // Find Positive Intentions
      { type: 'instruction', text: '=== STEP 3: TEMUKAN NIAT POSITIF ===', duration: 4000 },
      { type: 'instruction', text: 'Tanyakan ke bagian di tangan KANAN...', duration: 6000 },
      { type: 'instruction', text: '"Apa niat positifmu? Apa yang ingin kamu capai?"', duration: 10000 },
      { type: 'input', text: 'Niat positif bagian KANAN:', placeholder: 'Apa yang ingin dicapai' },
      { type: 'instruction', text: '"Dan apa yang akan kamu dapat jika itu tercapai?"', subtext: 'Terus tanyakan sampai ke nilai tertinggi', duration: 10000 },
      { type: 'input', text: 'Nilai TERTINGGI bagian kanan:', placeholder: 'Nilai inti: kebahagiaan, kedamaian, cinta, dll' },

      { type: 'instruction', text: 'Sekarang tanyakan ke bagian di tangan KIRI hal yang sama...', duration: 8000 },
      { type: 'input', text: 'Niat positif bagian KIRI:', placeholder: 'Apa yang ingin dicapai' },
      { type: 'input', text: 'Nilai TERTINGGI bagian kiri:', placeholder: 'Nilai inti' },

      // Recognize Common Ground
      { type: 'instruction', text: '=== STEP 4: TEMUKAN KESAMAAN ===', duration: 4000 },
      { type: 'instruction', text: 'Perhatikan bahwa KEDUA bagian sebenarnya ingin hal yang SAMA...', subtext: 'Di level yang lebih tinggi', duration: 10000 },
      { type: 'instruction', text: 'Mereka berdua menginginkan kebaikanmu...', duration: 8000 },
      { type: 'instruction', text: 'Biarkan kedua bagian MENYADARI ini...', duration: 10000 },
      { type: 'instruction', text: 'Apakah mereka mulai bisa saling menghargai?', duration: 10000 },

      // Integration
      { type: 'instruction', text: '=== STEP 5: INTEGRASI ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang, jika terasa benar, biarkan kedua tangan PERLAHAN mendekat...', duration: 10000 },
      { type: 'instruction', text: 'Biarkan kedua bagian mulai bersatu...', subtext: 'Dengan kecepatan yang terasa natural', duration: 12000 },
      { type: 'instruction', text: 'Perhatikan apa yang terjadi saat mereka mendekat...', duration: 10000 },
      { type: 'instruction', text: 'Saat tangan menyatu, biarkan kedua bagian menjadi SATU...', duration: 12000 },
      { type: 'instruction', text: 'Satu bagian baru yang lebih UTUH dan SEIMBANG...', duration: 10000 },
      { type: 'instruction', text: 'Bawa kesatuan ini ke dalam DADA-mu...', subtext: 'Integrasikan ke seluruh dirimu', duration: 12000 },

      { type: 'completion', text: 'Parts Integration Selesai!', subtext: 'Bagian-bagian yang berkonflik sekarang bersatu.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Bagaimana rasanya sekarang...' }
    ]
  },

  // ==================== BELIEF CHANGE PATTERN ====================
  'beliefChange': {
    title: 'Belief Change Pattern',
    description: 'Mengubah limiting belief menjadi empowering belief',
    level: 'advanced',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks. Siapkan diri untuk transformasi.', duration: 5000 },
      { type: 'instruction', text: 'BELIEF CHANGE PATTERN', subtext: 'Teknik untuk mengubah belief yang membatasi', duration: 6000 },

      { type: 'input', text: 'Apa LIMITING BELIEF yang ingin kamu ubah?', placeholder: 'Contoh: "Saya tidak cukup pintar", "Saya tidak layak sukses"' },
      { type: 'input', text: 'Apa EMPOWERING BELIEF penggantinya?', placeholder: 'Contoh: "Saya terus belajar dan berkembang", "Saya layak sukses"' },

      // Step 1: Find Submodalities of Old Belief
      { type: 'instruction', text: '=== STEP 1: SUBMODALITIES BELIEF LAMA ===', duration: 4000 },
      { type: 'instruction', text: 'Pikirkan limiting belief itu...', duration: 8000 },
      { type: 'instruction', text: 'Bagaimana representasi internalnya?', duration: 6000 },
      { type: 'choice', text: 'Gambarnya TERANG atau GELAP?', options: ['Sangat Gelap', 'Gelap', 'Sedang', 'Terang', 'Sangat Terang'] },
      { type: 'choice', text: 'Ukurannya?', options: ['Sangat Kecil', 'Kecil', 'Sedang', 'Besar', 'Sangat Besar'] },
      { type: 'choice', text: 'Lokasinya di mana?', options: ['Kiri Atas', 'Tengah', 'Kanan Atas', 'Kiri Bawah', 'Kanan Bawah'] },
      { type: 'choice', text: 'Perasaannya?', options: ['Berat', 'Tidak Nyaman', 'Netral'] },

      // Step 2: Find Something You Used to Believe
      { type: 'instruction', text: '=== STEP 2: BELIEF YANG SUDAH TIDAK DIPERCAYA ===', duration: 4000 },
      { type: 'instruction', text: 'Pikirkan sesuatu yang DULU kamu percaya, tapi SEKARANG TIDAK lagi...', subtext: 'Contoh: Sinterklas itu nyata, monster di bawah tempat tidur', duration: 12000 },
      { type: 'input', text: 'Apa belief yang sudah tidak kamu percaya?', placeholder: 'Sesuatu yang dulu dipercaya, sekarang tidak' },
      { type: 'instruction', text: 'Perhatikan SUBMODALITIES-nya...', duration: 6000 },
      { type: 'choice', text: 'Gambarnya?', options: ['Sangat Gelap', 'Blur', 'Samar', 'Jauh'] },
      { type: 'instruction', text: 'Ini adalah "MUSEUM BELIEF LAMA"...', subtext: 'Tempat belief yang sudah tidak berlaku', duration: 8000 },

      // Step 3: Find Strongly Held Belief
      { type: 'instruction', text: '=== STEP 3: BELIEF YANG SANGAT KUAT ===', duration: 4000 },
      { type: 'instruction', text: 'Pikirkan sesuatu yang SANGAT kamu yakini benar...', subtext: 'Contoh: Matahari terbit besok, nama sendiri', duration: 10000 },
      { type: 'input', text: 'Apa belief yang sangat kuat?', placeholder: 'Sesuatu yang 100% kamu yakini' },
      { type: 'instruction', text: 'Perhatikan SUBMODALITIES belief kuat ini...', duration: 8000 },
      { type: 'choice', text: 'Gambarnya?', options: ['Terang', 'Besar', 'Dekat', 'Jelas', 'Berwarna Vivid'] },
      { type: 'instruction', text: 'Ini adalah "RUANG BELIEF KUAT"...', duration: 6000 },

      // Step 4: Transfer
      { type: 'instruction', text: '=== STEP 4: TRANSFER ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang ambil LIMITING BELIEF...', duration: 8000 },
      { type: 'instruction', text: 'PINDAHKAN ke MUSEUM BELIEF LAMA...', subtext: 'Buat submodalities-nya sama dengan belief yang sudah tidak dipercaya', duration: 12000 },
      { type: 'instruction', text: 'Biarkan limiting belief itu menjadi MASA LALU...', duration: 10000 },

      { type: 'instruction', text: 'Sekarang ambil EMPOWERING BELIEF...', duration: 8000 },
      { type: 'instruction', text: 'PINDAHKAN ke RUANG BELIEF KUAT...', subtext: 'Buat submodalities-nya sama dengan belief yang sangat kuat', duration: 12000 },
      { type: 'instruction', text: 'Biarkan empowering belief itu menjadi SANGAT NYATA...', duration: 10000 },

      // Future Pace
      { type: 'instruction', text: '=== STEP 5: FUTURE PACE ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan dirimu besok, minggu depan, bulan depan...', duration: 8000 },
      { type: 'instruction', text: 'DENGAN empowering belief baru ini...', duration: 8000 },
      { type: 'instruction', text: 'Bagaimana hidupmu BERBEDA?', duration: 10000 },
      { type: 'instruction', text: 'Rasakan KEPASTIAN belief baru ini...', duration: 10000 },

      { type: 'completion', text: 'Belief Change Pattern Selesai!', subtext: 'Belief baru sekarang terinstall.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Perubahan yang kamu rasakan...' }
    ]
  },

  // ==================== CORE TRANSFORMATION ====================
  'coreTransformation': {
    title: 'Core Transformation',
    description: 'Menemukan dan mengakses Core State terdalam',
    level: 'advanced',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar...', subtext: 'Rileks sepenuhnya.', duration: 5000 },
      { type: 'instruction', text: 'CORE TRANSFORMATION', subtext: 'Teknik advance untuk menemukan Core State terdalam', duration: 6000 },
      { type: 'instruction', text: 'Dikembangkan oleh Connirae Andreas', subtext: 'Salah satu teknik NLP paling powerful', duration: 8000 },

      { type: 'input', text: 'Apa perilaku/perasaan/respon yang ingin kamu transformasi?', placeholder: 'Contoh: Kemarahan, kecemasan, kebiasaan buruk' },

      // Step 1: Welcome the Part
      { type: 'instruction', text: '=== STEP 1: SAMBUT BAGIAN ===', duration: 4000 },
      { type: 'instruction', text: 'Fokus pada perilaku/perasaan itu...', duration: 8000 },
      { type: 'instruction', text: 'Di mana kamu merasakannya di TUBUH?', duration: 8000 },
      { type: 'input', text: 'Lokasi di tubuh:', placeholder: 'Dada, perut, tenggorokan, dll' },
      { type: 'instruction', text: 'SAMBUT bagian ini dengan penuh kasih sayang...', duration: 10000 },
      { type: 'instruction', text: '"Terima kasih sudah berusaha melindungiku..."', duration: 8000 },

      // Step 2: Outcome Chain
      { type: 'instruction', text: '=== STEP 2: OUTCOME CHAIN ===', duration: 4000 },
      { type: 'instruction', text: 'Tanyakan kepada bagian itu...', duration: 6000 },
      { type: 'instruction', text: '"Apa yang kamu INGINKAN?"', duration: 10000 },
      { type: 'input', text: 'Jawaban pertama:', placeholder: 'Apa yang diinginkan bagian ini' },
      { type: 'instruction', text: '"Dan jika kamu SUDAH PUNYA itu sepenuhnya..."', duration: 8000 },
      { type: 'instruction', text: '"Apa yang kamu dapat dari situ yang LEBIH PENTING?"', duration: 10000 },
      { type: 'input', text: 'Jawaban berikutnya:', placeholder: 'Apa yang lebih dalam' },
      { type: 'instruction', text: '"Dan jika kamu SUDAH PUNYA itu sepenuhnya..."', duration: 8000 },
      { type: 'instruction', text: '"Apa yang kamu dapat yang LEBIH PENTING lagi?"', duration: 10000 },
      { type: 'input', text: 'Terus gali:', placeholder: 'Semakin dalam...' },
      { type: 'instruction', text: 'Terus tanyakan sampai kamu mencapai CORE STATE...', subtext: 'Core States: Being, Peace, Love, Okness, Oneness', duration: 12000 },
      { type: 'input', text: 'CORE STATE yang ditemukan:', placeholder: 'Peace, Love, Being, Oneness, Okness, dll' },

      // Step 3: Experience Core State
      { type: 'instruction', text: '=== STEP 3: ALAMI CORE STATE ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang, ALAMI Core State itu sepenuhnya...', duration: 10000 },
      { type: 'instruction', text: 'Biarkan Core State itu mengisi seluruh tubuhmu...', duration: 12000 },
      { type: 'instruction', text: 'Dari ujung kepala sampai ujung kaki...', duration: 10000 },
      { type: 'instruction', text: 'Memancar ke luar dari setiap selmu...', duration: 10000 },
      { type: 'instruction', text: 'PERKUAT pengalaman ini...', duration: 12000 },

      // Step 4: Reverse the Chain
      { type: 'instruction', text: '=== STEP 4: BALIK RANTAI ===', duration: 4000 },
      { type: 'instruction', text: 'Dengan Core State ini SUDAH hadir sepenuhnya...', duration: 8000 },
      { type: 'instruction', text: 'Bagaimana ini mengubah perilaku/perasaan awal?', duration: 10000 },
      { type: 'instruction', text: 'Biarkan Core State meresapi SEMUA level...', duration: 12000 },
      { type: 'instruction', text: 'Transformasi terjadi secara otomatis...', duration: 10000 },

      // Step 5: Timeline Integration
      { type: 'instruction', text: '=== STEP 5: INTEGRASI TIMELINE ===', duration: 4000 },
      { type: 'instruction', text: 'Bawa Core State ini ke MASA LALU...', subtext: 'Ke momen ketika bagian ini pertama terbentuk', duration: 12000 },
      { type: 'instruction', text: 'Biarkan dirimu yang muda menerima Core State ini...', duration: 12000 },
      { type: 'instruction', text: 'Sekarang maju melalui timeline...', subtext: 'Dengan Core State hadir di setiap momen', duration: 12000 },
      { type: 'instruction', text: 'Sampai ke SEKARANG...', duration: 8000 },
      { type: 'instruction', text: 'Dan terus ke MASA DEPAN...', duration: 10000 },
      { type: 'instruction', text: 'Dengan Core State ini selalu hadir...', duration: 10000 },

      { type: 'completion', text: 'Core Transformation Selesai!', subtext: 'Core State sekarang terintegrasi di seluruh hidupmu.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Core State dan transformasi yang terjadi...' }
    ]
  }
};

// ==================== NLP QUOTES ====================
const nlpQuotes = [
  { text: "The map is not the territory.", author: "Alfred Korzybski" },
  { text: "The meaning of your communication is the response you get.", author: "NLP Presupposition" },
  { text: "There is no failure, only feedback.", author: "NLP Presupposition" },
  { text: "If one person can do something, anyone can learn to do it.", author: "NLP Presupposition" },
  { text: "The mind and body are parts of the same system.", author: "NLP Presupposition" },
  { text: "People have all the resources they need to succeed.", author: "NLP Presupposition" },
  { text: "Every behavior has a positive intention.", author: "NLP Presupposition" },
  { text: "Respect for the other person's model of the world.", author: "NLP Presupposition" },
  { text: "The person with the most flexibility will control the system.", author: "Law of Requisite Variety" },
  { text: "Choice is better than no choice.", author: "NLP Presupposition" }
];

// ==================== INITIALIZE SCRIPTS ====================
function initNLPScripts() {
  if (typeof ReleasingEngine !== 'undefined') {
    Object.keys(nlpScripts).forEach(function(key) {
      ReleasingEngine.getScripts()[key] = nlpScripts[key];
    });
    console.log('NLP scripts loaded:', Object.keys(nlpScripts).length);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNLPScripts);
} else {
  initNLPScripts();
}

// ==================== START NLP FUNCTION ====================
function startNLP(scriptId) {
  if (typeof ReleasingEngine !== 'undefined') {
    if (!ReleasingEngine.getScript(scriptId)) {
      ReleasingEngine.getScripts()[scriptId] = nlpScripts[scriptId];
    }

    ReleasingEngine.init({
      onComplete: function(result) {
        showToast('Sesi ' + nlpScripts[scriptId].title + ' selesai!', 'success');
      }
    });

    ReleasingEngine.startReleasing(scriptId);
  } else {
    showToast('ReleasingEngine tidak tersedia', 'error');
  }
}

// ==================== RANDOM NLP QUOTE ====================
function getRandomNLPQuote() {
  return nlpQuotes[Math.floor(Math.random() * nlpQuotes.length)];
}
