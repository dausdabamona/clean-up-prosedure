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
