// ============================================================================
// SILVA METHOD SCRIPTS - Progressive Mind Control Techniques
// ============================================================================

// ==================== SILVA QUOTES ====================
const silvaQuotes = [
  { text: "You have the ability to change your life with your mind.", author: "José Silva" },
  { text: "The mind is like a parachute - it works best when it's open.", author: "José Silva" },
  { text: "Every problem has a solution at the Alpha level.", author: "José Silva" },
  { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { text: "What you can conceive and believe, you can achieve.", author: "Napoleon Hill" },
  { text: "Your imagination is your preview of life's coming attractions.", author: "Albert Einstein" },
  { text: "The only limits are the ones you believe in.", author: "José Silva" },
  { text: "At alpha, you have access to both hemispheres of the brain.", author: "José Silva" },
  { text: "Programming at alpha level reaches the subconscious directly.", author: "José Silva" },
  { text: "You are the programmer of your own mind.", author: "José Silva" }
];

// ==================== SILVA SCRIPTS ====================
const silvaScripts = {

  // ==================== LEVEL 1: FOUNDATION ====================

  // 1. Basic Relaxation - 3-to-1 Method
  'basicRelaxation': {
    title: 'Relaksasi Dasar (3-to-1)',
    description: 'Teknik dasar untuk memasuki level Alpha dengan countdown 3-2-1',
    level: 1,
    duration: '10 menit',
    steps: [
      { type: 'instruction', text: 'RELAKSASI DASAR', subtext: 'Metode 3-to-1 untuk memasuki Alpha', duration: 6000 },
      { type: 'instruction', text: 'Duduk dengan nyaman...', subtext: 'Kaki rata di lantai, tangan di pangkuan', duration: 6000 },
      { type: 'instruction', text: 'Tutup matamu...', duration: 4000 },

      // Physical Relaxation (3)
      { type: 'instruction', text: '=== LEVEL 3: RELAKSASI FISIK ===', duration: 4000 },
      { type: 'instruction', text: 'Tarik napas dalam... tahan... hembuskan...', duration: 8000 },
      { type: 'instruction', text: 'Saat menghembuskan napas, rilekskan tubuhmu...', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan kulit kepala dan dahi...', duration: 5000 },
      { type: 'instruction', text: 'Rilekskan otot di sekitar mata...', duration: 5000 },
      { type: 'instruction', text: 'Rilekskan wajah, rahang, dan leher...', duration: 5000 },
      { type: 'instruction', text: 'Rilekskan bahu, lengan, sampai ujung jari...', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan dada, perut, punggung...', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan pinggul, paha, betis, sampai ujung kaki...', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', duration: 8000 },

      // Mental Relaxation (2)
      { type: 'instruction', text: '=== LEVEL 2: RELAKSASI MENTAL ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan angka 3... 3... 3...', subtext: 'Tiga kali di layar mental', duration: 8000 },
      { type: 'instruction', text: 'Tubuhmu semakin rileks...', duration: 5000 },
      { type: 'instruction', text: 'Bayangkan angka 2... 2... 2...', subtext: 'Tiga kali di layar mental', duration: 8000 },
      { type: 'instruction', text: 'Pikiranmu semakin tenang...', duration: 5000 },
      { type: 'instruction', text: 'Bayangkan angka 1... 1... 1...', subtext: 'Tiga kali di layar mental', duration: 8000 },
      { type: 'instruction', text: 'Kamu sekarang di level yang lebih dalam...', duration: 5000 },

      // Alpha Level (1)
      { type: 'instruction', text: '=== LEVEL 1: LEVEL ALPHA ===', duration: 4000 },
      { type: 'instruction', text: 'Kamu sekarang di level Alpha...', subtext: 'Level pikiran yang lebih dalam dan kreatif', duration: 8000 },
      { type: 'instruction', text: 'Di level ini, pikiran sadar dan bawah sadar bekerja bersama...', duration: 8000 },
      { type: 'instruction', text: 'Nikmati ketenangan ini selama beberapa saat...', duration: 15000 },

      // Exit
      { type: 'instruction', text: '=== KEMBALI KE BETA ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang, kamu akan kembali ke kesadaran penuh...', duration: 6000 },
      { type: 'instruction', text: 'Hitung 1... 2... 3...', duration: 6000 },
      { type: 'instruction', text: 'Saat hitungan 3, buka mata...', duration: 4000 },
      { type: 'instruction', text: 'Merasa segar, sehat, dan lebih baik dari sebelumnya.', duration: 6000 },

      { type: 'completion', text: 'Relaksasi Dasar Selesai!', subtext: 'Latih setiap hari untuk memperdalam kemampuan Alpha.' },
      { type: 'insight', text: 'Bagaimana pengalamanmu?', placeholder: 'Catat sensasi dan pengalaman...' }
    ]
  },

  // 2. Countdown Deepening
  'countdownDeepening': {
    title: 'Countdown Deepening (10-1)',
    description: 'Teknik untuk masuk ke level Alpha lebih dalam dengan countdown 10-1',
    level: 1,
    duration: '12 menit',
    steps: [
      { type: 'instruction', text: 'COUNTDOWN DEEPENING', subtext: 'Masuk lebih dalam dengan hitungan 10-1', duration: 6000 },
      { type: 'instruction', text: 'Tutup mata dan rilekskan tubuh...', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... hembuskan...', duration: 8000 },

      // 3-to-1 Quick
      { type: 'instruction', text: 'Bayangkan angka 3... rileks fisik...', duration: 5000 },
      { type: 'instruction', text: 'Bayangkan angka 2... rileks mental...', duration: 5000 },
      { type: 'instruction', text: 'Bayangkan angka 1... level dasar...', duration: 5000 },

      // 10-1 Countdown
      { type: 'instruction', text: '=== COUNTDOWN 10-1 ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang kita akan turun lebih dalam...', duration: 5000 },
      { type: 'instruction', text: '10... rileks lebih dalam...', duration: 4000 },
      { type: 'instruction', text: '9... setiap napas membawa rileks...', duration: 4000 },
      { type: 'instruction', text: '8... tubuh semakin berat dan rileks...', duration: 4000 },
      { type: 'instruction', text: '7... pikiran semakin tenang...', duration: 4000 },
      { type: 'instruction', text: '6... lebih dalam... lebih rileks...', duration: 4000 },
      { type: 'instruction', text: '5... setengah jalan... sangat rileks...', duration: 4000 },
      { type: 'instruction', text: '4... semakin dalam...', duration: 4000 },
      { type: 'instruction', text: '3... hampir di dasar...', duration: 4000 },
      { type: 'instruction', text: '2... sangat dalam dan tenang...', duration: 4000 },
      { type: 'instruction', text: '1... di level paling dalam...', duration: 4000 },

      { type: 'instruction', text: 'Kamu sekarang di level Alpha yang sangat dalam...', subtext: 'Nikmati ketenangan ini', duration: 15000 },

      // Count up
      { type: 'instruction', text: '=== KEMBALI ===', duration: 4000 },
      { type: 'instruction', text: '1... 2... 3... 4... 5...', subtext: 'Perlahan kembali', duration: 8000 },
      { type: 'instruction', text: 'Buka mata, merasa segar dan berenergi.', duration: 5000 },

      { type: 'completion', text: 'Countdown Deepening Selesai!', subtext: 'Semakin sering latihan, semakin mudah masuk Alpha.' },
      { type: 'insight', text: 'Pengalaman di level dalam:', placeholder: 'Catat sensasi...' }
    ]
  },

  // 3. Mental Screen
  'mentalScreen': {
    title: 'Mental Screen (Layar Mental)',
    description: 'Membuat layar visualisasi untuk programming dan problem solving',
    level: 1,
    duration: '15 menit',
    steps: [
      { type: 'instruction', text: 'MENTAL SCREEN', subtext: 'Membuat layar visualisasi di pikiran', duration: 6000 },
      { type: 'instruction', text: 'Tutup mata dan rileks...', duration: 5000 },
      { type: 'instruction', text: '3... 2... 1... masuk Alpha...', duration: 8000 },

      // Create Screen
      { type: 'instruction', text: '=== MEMBUAT LAYAR MENTAL ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan sebuah layar besar di depanmu...', subtext: 'Seperti layar bioskop atau TV besar', duration: 8000 },
      { type: 'instruction', text: 'Layar ini terletak di atas garis mata...', subtext: 'Sekitar 20 derajat ke atas', duration: 8000 },
      { type: 'instruction', text: 'Perhatikan warna layar... bisa putih atau biru...', duration: 6000 },
      { type: 'instruction', text: 'Perhatikan ukurannya... buat sebesar yang kamu mau...', duration: 6000 },
      { type: 'instruction', text: 'Perhatikan jaraknya dari matamu...', duration: 6000 },

      // Practice visualization
      { type: 'instruction', text: '=== LATIHAN VISUALISASI ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan sebuah APEL di layar mental...', duration: 8000 },
      { type: 'instruction', text: 'Lihat warnanya... merah, hijau, atau kuning?', duration: 6000 },
      { type: 'instruction', text: 'Lihat bentuknya... teksturnya...', duration: 6000 },
      { type: 'instruction', text: 'Putar apel itu... lihat dari berbagai sudut...', duration: 8000 },
      { type: 'instruction', text: 'Bagus! Sekarang hapus apel dari layar...', duration: 5000 },

      { type: 'instruction', text: 'Bayangkan sebuah JERUK di layar...', duration: 8000 },
      { type: 'instruction', text: 'Lihat warna orangenya... tekstur kulitnya...', duration: 6000 },
      { type: 'instruction', text: 'Bayangkan aroma jeruk yang segar...', duration: 6000 },
      { type: 'instruction', text: 'Hapus jeruk dari layar...', duration: 5000 },

      { type: 'instruction', text: 'Layar mentalmu siap digunakan...', subtext: 'Untuk visualisasi dan programming', duration: 8000 },

      // Exit
      { type: 'instruction', text: '1... 2... 3... buka mata.', duration: 6000 },

      { type: 'completion', text: 'Mental Screen Selesai!', subtext: 'Gunakan layar ini untuk teknik Silva lainnya.' },
      { type: 'insight', text: 'Bagaimana layar mentalmu?', placeholder: 'Deskripsi layar mental...' }
    ]
  },

  // ==================== LEVEL 2: CORE TECHNIQUES ====================

  // 4. Three Fingers Technique
  'threeFingers': {
    title: 'Three Fingers Technique',
    description: 'Anchor untuk mengakses Alpha level kapan saja dengan cepat',
    level: 2,
    duration: '15 menit',
    steps: [
      { type: 'instruction', text: 'THREE FINGERS TECHNIQUE', subtext: 'Membuat trigger untuk instant Alpha', duration: 6000 },
      { type: 'instruction', text: 'Tutup mata... 3... 2... 1...', duration: 6000 },
      { type: 'instruction', text: '10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', subtext: 'Masuk ke Alpha dalam', duration: 15000 },

      // Programming
      { type: 'instruction', text: '=== PROGRAMMING THREE FINGERS ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang, satukan ibu jari, telunjuk, dan jari tengah...', subtext: 'Tangan yang dominan', duration: 8000 },
      { type: 'instruction', text: 'Tahan posisi ini selama di Alpha...', duration: 6000 },
      { type: 'instruction', text: 'Ucapkan dalam hati:', duration: 4000 },
      { type: 'instruction', text: '"Setiap kali saya menyatukan tiga jari ini..."', duration: 6000 },
      { type: 'instruction', text: '"Pikiran saya langsung ke level Alpha..."', duration: 6000 },
      { type: 'instruction', text: '"Saya bisa berpikir jernih dan kreatif."', duration: 6000 },

      { type: 'instruction', text: 'Ulangi afirmasi ini 3 kali...', duration: 15000 },

      { type: 'instruction', text: 'Lepaskan jari... rileks...', duration: 5000 },
      { type: 'instruction', text: 'Satukan lagi tiga jari... rasakan koneksinya...', duration: 8000 },
      { type: 'instruction', text: 'Lepaskan...', duration: 4000 },

      // Test
      { type: 'instruction', text: '=== TEST ===', duration: 4000 },
      { type: 'instruction', text: 'Buka mata sebentar... lihat sekeliling...', duration: 6000 },
      { type: 'instruction', text: 'Sekarang SATUKAN TIGA JARI...', duration: 6000 },
      { type: 'instruction', text: 'Rasakan pikiran langsung tenang dan fokus...', duration: 8000 },

      { type: 'yesno', text: 'Apakah kamu merasakan perubahan state?', highlight: 'Ya' },

      { type: 'instruction', text: 'Lepaskan jari...', duration: 4000 },
      { type: 'instruction', text: 'Teknik ini semakin kuat dengan latihan.', duration: 6000 },

      { type: 'completion', text: 'Three Fingers Selesai!', subtext: 'Gunakan kapan saja butuh fokus dan ketenangan.' },
      { type: 'insight', text: 'Pengalaman three fingers:', placeholder: 'Catat sensasi saat menggunakan teknik...' }
    ]
  },

  // 5. Alpha Programming
  'alphaProgramming': {
    title: 'Alpha Programming',
    description: 'Memprogram tujuan dan afirmasi di level Alpha',
    level: 2,
    duration: '20 menit',
    steps: [
      { type: 'instruction', text: 'ALPHA PROGRAMMING', subtext: 'Memprogram pikiran bawah sadar', duration: 6000 },
      { type: 'input', text: 'Apa TUJUAN yang ingin kamu program?', subtext: 'Tulis dalam kalimat positif, seolah sudah tercapai', placeholder: 'Contoh: Saya percaya diri saat presentasi' },

      { type: 'instruction', text: 'Tutup mata... 3... 2... 1...', duration: 6000 },
      { type: 'instruction', text: '10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', duration: 15000 },

      // Visualization
      { type: 'instruction', text: '=== VISUALISASI DI LAYAR MENTAL ===', duration: 4000 },
      { type: 'instruction', text: 'Lihat layar mentalmu...', duration: 5000 },
      { type: 'instruction', text: 'Di layar kiri, lihat situasi SAAT INI...', subtext: 'Kondisi yang ingin diubah', duration: 10000 },
      { type: 'instruction', text: 'Geser ke layar kanan...', duration: 5000 },
      { type: 'instruction', text: 'Di layar kanan, lihat HASIL yang diinginkan...', subtext: 'Tujuanmu sudah tercapai', duration: 10000 },
      { type: 'instruction', text: 'Lihat dirimu dalam kondisi ideal...', duration: 8000 },
      { type: 'instruction', text: 'Lihat ekspresi wajahmu... posturmu...', duration: 8000 },
      { type: 'instruction', text: 'Dengar apa yang dikatakan orang tentangmu...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan PERASAAN sukses itu...', duration: 10000 },

      // Affirmation
      { type: 'instruction', text: '=== AFIRMASI ===', duration: 4000 },
      { type: 'instruction', text: 'Ucapkan tujuanmu dalam hati...', subtext: 'Dengan penuh keyakinan', duration: 8000 },
      { type: 'instruction', text: 'Ulangi 3 kali dengan perasaan...', duration: 15000 },
      { type: 'instruction', text: '"Ini atau sesuatu yang lebih baik, akan terwujud..."', duration: 8000 },
      { type: 'instruction', text: '"Untuk kebaikan semua pihak."', duration: 6000 },

      // Exit
      { type: 'instruction', text: '1... 2... 3... 4... 5...', subtext: 'Kembali dengan perasaan yakin', duration: 10000 },
      { type: 'instruction', text: 'Buka mata. Programming selesai.', duration: 5000 },

      { type: 'completion', text: 'Alpha Programming Selesai!', subtext: 'Ulangi programming ini setiap hari selama 21 hari.' },
      { type: 'insight', text: 'Catatan programming:', placeholder: 'Visualisasi dan perasaan...' }
    ]
  },

  // 6. Long Relaxation / Centering Exercise
  'centeringExercise': {
    title: 'Centering Exercise (Long Relaxation)',
    description: 'Latihan relaksasi mendalam untuk penguatan level Alpha',
    level: 2,
    duration: '25 menit',
    steps: [
      { type: 'instruction', text: 'CENTERING EXERCISE', subtext: 'Latihan relaksasi mendalam José Silva', duration: 6000 },
      { type: 'instruction', text: 'Duduk atau berbaring dengan nyaman...', duration: 5000 },
      { type: 'instruction', text: 'Tutup mata...', duration: 4000 },

      // Progressive Relaxation
      { type: 'instruction', text: '=== RELAKSASI PROGRESIF ===', duration: 4000 },
      { type: 'instruction', text: 'Fokus pada kulit kepalamu...', subtext: 'Rasakan dan rilekskan', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan dahi... alis... kelopak mata...', duration: 8000 },
      { type: 'instruction', text: 'Rilekskan pipi... hidung... bibir... rahang...', duration: 8000 },
      { type: 'instruction', text: 'Rilekskan leher... tenggorokan...', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan bahu... biarkan turun...', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan lengan atas... siku... lengan bawah...', duration: 8000 },
      { type: 'instruction', text: 'Rilekskan pergelangan tangan... telapak... jari-jari...', duration: 8000 },
      { type: 'instruction', text: 'Rilekskan dada... rasakan napas mengalir bebas...', duration: 8000 },
      { type: 'instruction', text: 'Rilekskan perut... organ dalam...', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan punggung atas... tengah... bawah...', duration: 8000 },
      { type: 'instruction', text: 'Rilekskan pinggul... panggul...', duration: 6000 },
      { type: 'instruction', text: 'Rilekskan paha... lutut... betis...', duration: 8000 },
      { type: 'instruction', text: 'Rilekskan pergelangan kaki... telapak kaki... jari kaki...', duration: 8000 },

      // Deepening
      { type: 'instruction', text: '=== DEEPENING ===', duration: 4000 },
      { type: 'instruction', text: '3... tubuh rileks sepenuhnya...', duration: 5000 },
      { type: 'instruction', text: '2... pikiran tenang dan damai...', duration: 5000 },
      { type: 'instruction', text: '1... di pusat ketenangan...', duration: 5000 },
      { type: 'instruction', text: '10... 9... 8... lebih dalam...', duration: 6000 },
      { type: 'instruction', text: '7... 6... 5... semakin dalam...', duration: 6000 },
      { type: 'instruction', text: '4... 3... 2... 1...', duration: 6000 },

      // Affirmations
      { type: 'instruction', text: '=== AFIRMASI SILVA ===', duration: 4000 },
      { type: 'instruction', text: '"Setiap hari, dalam segala hal..."', duration: 6000 },
      { type: 'instruction', text: '"Saya semakin baik, dan semakin baik."', duration: 6000 },
      { type: 'instruction', text: '"Pikiran positif membawa hasil positif."', duration: 6000 },
      { type: 'instruction', text: '"Saya memiliki kendali penuh atas pikiran saya."', duration: 6000 },

      { type: 'instruction', text: 'Nikmati ketenangan ini...', duration: 20000 },

      // Exit
      { type: 'instruction', text: '=== KEMBALI ===', duration: 4000 },
      { type: 'instruction', text: '1... 2... 3...', duration: 5000 },
      { type: 'instruction', text: 'Merasa segar, sehat, dan berenergi...', duration: 5000 },
      { type: 'instruction', text: '4... 5... buka mata.', duration: 5000 },

      { type: 'completion', text: 'Centering Exercise Selesai!', subtext: 'Latihan ini memperkuat koneksi Alpha.' },
      { type: 'insight', text: 'Pengalaman centering:', placeholder: 'Sensasi dan insight...' }
    ]
  },

  // ==================== LEVEL 3: PROBLEM SOLVING ====================

  // 7. Glass of Water Technique
  'glassOfWater': {
    title: 'Glass of Water Technique',
    description: 'Teknik untuk mendapatkan solusi masalah melalui mimpi atau intuisi',
    level: 3,
    duration: '10 menit',
    steps: [
      { type: 'instruction', text: 'GLASS OF WATER TECHNIQUE', subtext: 'Mendapatkan solusi melalui pikiran bawah sadar', duration: 6000 },
      { type: 'instruction', text: 'Siapkan segelas air di samping tempat tidur...', subtext: 'Atau bayangkan dalam pikiran', duration: 8000 },
      { type: 'input', text: 'Apa MASALAH yang ingin kamu pecahkan?', placeholder: 'Tulis masalah atau pertanyaan...' },

      // Programming
      { type: 'instruction', text: '=== PROGRAMMING ===', duration: 4000 },
      { type: 'instruction', text: 'Tutup mata... 3... 2... 1...', duration: 6000 },
      { type: 'instruction', text: 'Bayangkan masalahmu di layar mental...', duration: 8000 },
      { type: 'instruction', text: 'Minum SETENGAH gelas air...', subtext: 'Atau bayangkan minum', duration: 8000 },
      { type: 'instruction', text: 'Sambil minum, ucapkan dalam hati:', duration: 5000 },
      { type: 'instruction', text: '"Ini semua yang perlu saya lakukan..."', duration: 6000 },
      { type: 'instruction', text: '"Untuk menemukan solusi masalah ini."', duration: 6000 },

      { type: 'instruction', text: 'Percaya bahwa solusi akan datang...', subtext: 'Melalui mimpi, intuisi, atau ide tiba-tiba', duration: 8000 },
      { type: 'instruction', text: 'Lepaskan dan tidurlah...', duration: 6000 },

      // Morning
      { type: 'instruction', text: '=== PAGI HARI ===', duration: 4000 },
      { type: 'instruction', text: 'Saat bangun, minum SISA air...', duration: 6000 },
      { type: 'instruction', text: 'Perhatikan ide atau insight yang muncul...', duration: 8000 },
      { type: 'instruction', text: 'Solusi mungkin datang sebagai:', duration: 5000 },
      { type: 'instruction', text: '- Mimpi yang memberi petunjuk', duration: 4000 },
      { type: 'instruction', text: '- Ide yang muncul tiba-tiba', duration: 4000 },
      { type: 'instruction', text: '- Intuisi yang kuat', duration: 4000 },
      { type: 'instruction', text: '- Kebetulan yang bermakna', duration: 4000 },

      { type: 'completion', text: 'Glass of Water Programming Selesai!', subtext: 'Perhatikan solusi yang akan datang dalam 1-3 hari.' },
      { type: 'insight', text: 'Catatan:', placeholder: 'Masalah yang di-program dan ekspektasi...' }
    ]
  },

  // 8. Mirror of the Mind
  'mirrorOfMind': {
    title: 'Mirror of the Mind',
    description: 'Teknik visualisasi untuk mencapai goal dengan mengubah gambar mental',
    level: 3,
    duration: '20 menit',
    steps: [
      { type: 'instruction', text: 'MIRROR OF THE MIND', subtext: 'Teknik powerful untuk mencapai tujuan', duration: 6000 },
      { type: 'input', text: 'Apa TUJUAN yang ingin kamu capai?', placeholder: 'Tulis tujuan spesifik...' },

      { type: 'instruction', text: 'Tutup mata... 3... 2... 1...', duration: 6000 },
      { type: 'instruction', text: '10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', duration: 15000 },

      // Blue-Framed Mirror (Current)
      { type: 'instruction', text: '=== CERMIN BINGKAI BIRU ===', subtext: 'Kondisi saat ini', duration: 5000 },
      { type: 'instruction', text: 'Bayangkan sebuah cermin dengan BINGKAI BIRU...', duration: 6000 },
      { type: 'instruction', text: 'Di cermin ini, lihat kondisi SAAT INI...', subtext: 'Masalah atau situasi yang ingin diubah', duration: 10000 },
      { type: 'instruction', text: 'Lihat dengan jelas kondisi ini...', duration: 8000 },
      { type: 'instruction', text: 'Akui bahwa ini adalah titik awalmu...', duration: 6000 },

      // Erase and Move
      { type: 'instruction', text: 'Sekarang, HAPUS gambar ini dari cermin...', subtext: 'Geser ke kiri dan buang', duration: 8000 },
      { type: 'instruction', text: 'Cermin bingkai biru menghilang...', duration: 5000 },

      // White-Framed Mirror (Desired)
      { type: 'instruction', text: '=== CERMIN BINGKAI PUTIH ===', subtext: 'Kondisi yang diinginkan', duration: 5000 },
      { type: 'instruction', text: 'Bayangkan cermin baru dengan BINGKAI PUTIH...', duration: 6000 },
      { type: 'instruction', text: 'Di cermin ini, lihat HASIL yang kamu inginkan...', subtext: 'Tujuanmu sudah tercapai', duration: 10000 },
      { type: 'instruction', text: 'Lihat dirimu dalam kondisi ideal...', duration: 8000 },
      { type: 'instruction', text: 'Lihat ekspresi bahagia di wajahmu...', duration: 6000 },
      { type: 'instruction', text: 'Lihat orang-orang di sekitarmu...', duration: 6000 },
      { type: 'instruction', text: 'Dengar ucapan selamat dari mereka...', duration: 6000 },
      { type: 'instruction', text: 'RASAKAN perasaan sukses dan bahagia...', duration: 10000 },

      // Lock In
      { type: 'instruction', text: 'Kunci gambar ini di cermin putih...', duration: 5000 },
      { type: 'instruction', text: '"Ini atau sesuatu yang lebih baik akan terwujud."', duration: 6000 },
      { type: 'instruction', text: 'Terima kasih karena sudah terwujud...', duration: 6000 },

      // Exit
      { type: 'instruction', text: '1... 2... 3... 4... 5... buka mata.', duration: 8000 },

      { type: 'completion', text: 'Mirror of the Mind Selesai!', subtext: 'Ulangi setiap hari. HANYA visualisasikan cermin putih setelah ini.' },
      { type: 'insight', text: 'Deskripsi cermin putihmu:', placeholder: 'Detail visualisasi hasil...' }
    ]
  },

  // 9. Mental Video
  'mentalVideo': {
    title: 'Mental Video',
    description: 'Membuat film mental tentang pencapaian goal',
    level: 3,
    duration: '20 menit',
    steps: [
      { type: 'instruction', text: 'MENTAL VIDEO', subtext: 'Membuat film kesuksesanmu', duration: 6000 },
      { type: 'input', text: 'Apa PENCAPAIAN yang ingin kamu filmkan?', placeholder: 'Goal atau situasi sukses...' },

      { type: 'instruction', text: 'Tutup mata... masuk Alpha...', duration: 6000 },
      { type: 'instruction', text: '3... 2... 1... 10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', duration: 18000 },

      // Create Video
      { type: 'instruction', text: '=== MEMBUAT FILM ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan layar besar di depanmu...', duration: 5000 },
      { type: 'instruction', text: 'Film akan dimulai...', duration: 4000 },

      { type: 'instruction', text: 'SCENE 1: Lihat dirimu MEMPERSIAPKAN diri...', subtext: 'Awal perjalanan', duration: 10000 },
      { type: 'instruction', text: 'SCENE 2: Lihat dirimu BERAKSI...', subtext: 'Melakukan yang diperlukan', duration: 10000 },
      { type: 'instruction', text: 'SCENE 3: Lihat dirimu menghadapi TANTANGAN...', subtext: 'Dan mengatasinya dengan sukses', duration: 10000 },
      { type: 'instruction', text: 'SCENE 4: Lihat KLIMAKS kesuksesan...', subtext: 'Momen pencapaian goal', duration: 12000 },
      { type: 'instruction', text: 'SCENE 5: Lihat PERAYAAN...', subtext: 'Orang-orang memberikan selamat', duration: 10000 },

      // Step In
      { type: 'instruction', text: '=== MASUK KE FILM ===', duration: 4000 },
      { type: 'instruction', text: 'Sekarang MASUK ke dalam film...', subtext: 'Jadilah aktor utama', duration: 8000 },
      { type: 'instruction', text: 'Lihat dari MATAMU sendiri...', duration: 6000 },
      { type: 'instruction', text: 'RASAKAN emosi kesuksesan...', duration: 10000 },
      { type: 'instruction', text: 'DENGAR suara-suara di sekitarmu...', duration: 8000 },
      { type: 'instruction', text: 'Biarkan perasaan ini meresap...', duration: 10000 },

      // Exit
      { type: 'instruction', text: '1... 2... 3... 4... 5... buka mata.', duration: 8000 },

      { type: 'completion', text: 'Mental Video Selesai!', subtext: 'Putar film ini setiap hari di level Alpha.' },
      { type: 'insight', text: 'Deskripsi filmmu:', placeholder: 'Scene favorit dan perasaan...' }
    ]
  },

  // ==================== LEVEL 4: ADVANCED ====================

  // 10. Dream Control
  'dreamControl': {
    title: 'Dream Control',
    description: 'Memprogram mimpi untuk insight dan problem solving',
    level: 4,
    duration: '15 menit',
    steps: [
      { type: 'instruction', text: 'DREAM CONTROL', subtext: 'Memprogram dan mengingat mimpi', duration: 6000 },
      { type: 'instruction', text: 'Lakukan ini sebelum tidur...', duration: 5000 },

      { type: 'input', text: 'Apa yang ingin kamu dapatkan dari mimpi?', subtext: 'Insight, solusi, atau jawaban', placeholder: 'Tulis tujuan mimpi...' },

      { type: 'instruction', text: 'Tutup mata... 3... 2... 1...', duration: 6000 },
      { type: 'instruction', text: '10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', duration: 15000 },

      // Programming
      { type: 'instruction', text: '=== PROGRAMMING MIMPI ===', duration: 4000 },
      { type: 'instruction', text: 'Ucapkan dalam hati:', duration: 4000 },
      { type: 'instruction', text: '"Saya akan bermimpi tentang..."', subtext: 'Topik yang kamu inginkan', duration: 8000 },
      { type: 'instruction', text: '"Dan saya akan MENGINGAT mimpi ini saat bangun."', duration: 8000 },
      { type: 'instruction', text: 'Ulangi 3 kali dengan keyakinan...', duration: 15000 },

      { type: 'instruction', text: '=== TRIGGER RECALL ===', duration: 4000 },
      { type: 'instruction', text: '"Saat saya bangun, saya langsung ingat mimpi..."', duration: 6000 },
      { type: 'instruction', text: '"Dan saya akan mencatatnya."', duration: 5000 },

      { type: 'instruction', text: 'Siapkan buku catatan di samping tempat tidur...', duration: 6000 },
      { type: 'instruction', text: 'Saat bangun, JANGAN BERGERAK dulu...', subtext: 'Ingat mimpi sebelum membuka mata', duration: 8000 },

      { type: 'instruction', text: 'Sekarang tidurlah dengan programming ini...', duration: 6000 },

      { type: 'completion', text: 'Dream Programming Selesai!', subtext: 'Catat mimpimu segera setelah bangun.' },
      { type: 'insight', text: 'Tujuan mimpi malam ini:', placeholder: 'Apa yang ingin didapat dari mimpi...' }
    ]
  },

  // 11. Habit Control
  'habitControl': {
    title: 'Habit Control',
    description: 'Mengubah kebiasaan buruk dan membangun kebiasaan baru',
    level: 4,
    duration: '20 menit',
    steps: [
      { type: 'instruction', text: 'HABIT CONTROL', subtext: 'Mengubah kebiasaan di level Alpha', duration: 6000 },
      { type: 'input', text: 'Kebiasaan BURUK apa yang ingin dihilangkan?', placeholder: 'Contoh: Menunda, makan berlebihan...' },
      { type: 'input', text: 'Kebiasaan BARU apa yang menggantikannya?', placeholder: 'Contoh: Langsung bertindak, makan sehat...' },

      { type: 'instruction', text: 'Tutup mata... masuk Alpha dalam...', duration: 5000 },
      { type: 'instruction', text: '3... 2... 1... 10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', duration: 18000 },

      // Identify Trigger
      { type: 'instruction', text: '=== IDENTIFIKASI TRIGGER ===', duration: 4000 },
      { type: 'input', text: 'Apa yang MEMICU kebiasaan buruk?', placeholder: 'Situasi, emosi, waktu...' },
      { type: 'instruction', text: 'Bayangkan trigger itu di layar mental...', duration: 8000 },

      // Disassociate
      { type: 'instruction', text: '=== LEPASKAN ASOSIASI ===', duration: 4000 },
      { type: 'instruction', text: 'Lihat kebiasaan buruk menjadi abu-abu...', duration: 6000 },
      { type: 'instruction', text: 'Gambar mengecil... memudar...', duration: 6000 },
      { type: 'instruction', text: 'Semakin kecil... semakin kabur...', duration: 6000 },
      { type: 'instruction', text: 'Menghilang dari layar...', duration: 5000 },

      // New Habit
      { type: 'instruction', text: '=== PROGRAM KEBIASAAN BARU ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan dirimu dengan kebiasaan BARU...', duration: 8000 },
      { type: 'instruction', text: 'Lihat gambar berwarna cerah, besar, jelas...', duration: 6000 },
      { type: 'instruction', text: 'Lihat dirimu melakukan kebiasaan baru...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan KEBANGGAAN dan KEPUASAN...', duration: 8000 },
      { type: 'instruction', text: 'Lihat MANFAAT dari kebiasaan baru ini...', duration: 8000 },

      // Affirmation
      { type: 'instruction', text: '=== AFIRMASI ===', duration: 4000 },
      { type: 'instruction', text: '"Saya memilih kebiasaan baru ini..."', duration: 6000 },
      { type: 'instruction', text: '"Dengan mudah dan alami."', duration: 5000 },
      { type: 'instruction', text: 'Ulangi 3 kali...', duration: 12000 },

      // Exit
      { type: 'instruction', text: '1... 2... 3... 4... 5... buka mata.', duration: 8000 },

      { type: 'completion', text: 'Habit Control Selesai!', subtext: 'Ulangi setiap hari selama 21 hari.' },
      { type: 'insight', text: 'Komitmen kebiasaan baru:', placeholder: 'Action plan dan komitmen...' }
    ]
  },

  // 12. Healing Visualization
  'healingVisualization': {
    title: 'Healing Visualization',
    description: 'Visualisasi untuk mendukung kesehatan dan penyembuhan',
    level: 4,
    duration: '20 menit',
    steps: [
      { type: 'instruction', text: 'HEALING VISUALIZATION', subtext: 'Mendukung penyembuhan dengan pikiran', duration: 6000 },
      { type: 'instruction', text: 'DISCLAIMER: Ini BUKAN pengganti pengobatan medis.', subtext: 'Selalu konsultasi dengan dokter.', duration: 8000 },

      { type: 'input', text: 'Area tubuh atau kondisi apa yang ingin didukung penyembuhannya?', placeholder: 'Deskripsi area/kondisi...' },

      { type: 'instruction', text: 'Tutup mata... rileks...', duration: 5000 },
      { type: 'instruction', text: '3... 2... 1... 10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', duration: 18000 },

      // Body Scan
      { type: 'instruction', text: '=== BODY SCAN ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan cahaya putih keemasan di atas kepalamu...', duration: 8000 },
      { type: 'instruction', text: 'Cahaya ini mengandung energi penyembuhan...', duration: 6000 },
      { type: 'instruction', text: 'Cahaya masuk melalui ubun-ubun...', duration: 6000 },
      { type: 'instruction', text: 'Mengalir ke seluruh tubuh...', duration: 8000 },

      // Healing
      { type: 'instruction', text: '=== HEALING ===', duration: 4000 },
      { type: 'instruction', text: 'Arahkan cahaya ke area yang butuh penyembuhan...', duration: 8000 },
      { type: 'instruction', text: 'Lihat cahaya menyelimuti area tersebut...', duration: 8000 },
      { type: 'instruction', text: 'Bayangkan sel-sel yang sehat dan kuat...', duration: 8000 },
      { type: 'instruction', text: 'Lihat tubuh bekerja dengan sempurna...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan kehangatan penyembuhan...', duration: 10000 },

      // Visualization
      { type: 'instruction', text: '=== VISUALISASI SEHAT ===', duration: 4000 },
      { type: 'instruction', text: 'Lihat dirimu dalam kondisi SEHAT SEMPURNA...', duration: 8000 },
      { type: 'instruction', text: 'Aktif, berenergi, bahagia...', duration: 6000 },
      { type: 'instruction', text: 'Melakukan aktivitas yang kamu sukai...', duration: 8000 },
      { type: 'instruction', text: 'Tubuhmu berfungsi dengan optimal...', duration: 8000 },

      // Affirmation
      { type: 'instruction', text: '=== AFIRMASI KESEHATAN ===', duration: 4000 },
      { type: 'instruction', text: '"Setiap sel dalam tubuhku bekerja sempurna..."', duration: 6000 },
      { type: 'instruction', text: '"Tubuhku memiliki kemampuan menyembuhkan diri..."', duration: 6000 },
      { type: 'instruction', text: '"Saya sehat, kuat, dan berenergi."', duration: 6000 },

      // Exit
      { type: 'instruction', text: '1... 2... 3... 4... 5... buka mata.', duration: 8000 },

      { type: 'completion', text: 'Healing Visualization Selesai!', subtext: 'Ulangi 2-3x sehari untuk hasil optimal.' },
      { type: 'insight', text: 'Pengalaman healing:', placeholder: 'Sensasi dan visualisasi...' }
    ]
  },

  // 13. Case Working (Intuition)
  'caseWorking': {
    title: 'Case Working (Intuisi)',
    description: 'Mengembangkan intuisi dan kemampuan membaca situasi',
    level: 4,
    duration: '25 menit',
    steps: [
      { type: 'instruction', text: 'CASE WORKING', subtext: 'Mengembangkan intuisi di level Alpha', duration: 6000 },
      { type: 'instruction', text: 'Teknik advance untuk membaca energi dan situasi...', duration: 6000 },

      { type: 'input', text: 'Siapa atau situasi apa yang ingin kamu "baca"?', subtext: 'Nama orang, situasi, atau keputusan', placeholder: 'Subjek case working...' },

      { type: 'instruction', text: 'Tutup mata... masuk ke Alpha dalam...', duration: 5000 },
      { type: 'instruction', text: '3... 2... 1... 10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', duration: 18000 },
      { type: 'instruction', text: 'Turun lebih dalam... 10... 9... 8... 7... 6... 5... 4... 3... 2... 1...', duration: 15000 },

      // Projection
      { type: 'instruction', text: '=== PROYEKSI ===', duration: 4000 },
      { type: 'instruction', text: 'Bayangkan subjek di layar mental...', duration: 8000 },
      { type: 'instruction', text: 'Jika orang, lihat wajah dan tubuhnya...', duration: 8000 },
      { type: 'instruction', text: 'Jika situasi, lihat scene-nya...', duration: 8000 },

      // Scanning
      { type: 'instruction', text: '=== SCANNING ===', duration: 4000 },
      { type: 'instruction', text: 'Scan dari atas ke bawah...', duration: 6000 },
      { type: 'instruction', text: 'Apa yang kamu LIHAT?', duration: 8000 },
      { type: 'instruction', text: 'Apa yang kamu RASAKAN?', duration: 8000 },
      { type: 'instruction', text: 'Apa yang kamu DENGAR?', duration: 8000 },
      { type: 'instruction', text: 'Ada warna, simbol, atau gambar yang muncul?', duration: 8000 },

      // Questions
      { type: 'instruction', text: '=== PERTANYAAN ===', duration: 4000 },
      { type: 'instruction', text: 'Ajukan pertanyaan dalam hati...', duration: 6000 },
      { type: 'instruction', text: 'Tunggu jawaban... bisa berupa gambaran, perasaan, atau knowing...', duration: 15000 },
      { type: 'instruction', text: 'Percaya informasi pertama yang muncul...', duration: 8000 },

      // Record
      { type: 'input', text: 'Apa yang kamu terima? (lihat, rasakan, ketahui)', placeholder: 'Catat semua impressi...' },

      // Exit
      { type: 'instruction', text: '1... 2... 3... 4... 5... kembali.', duration: 8000 },

      { type: 'completion', text: 'Case Working Selesai!', subtext: 'Verifikasi hasil untuk melatih akurasi.' },
      { type: 'insight', text: 'Impressi dan insight:', placeholder: 'Detail apa yang diterima...' }
    ]
  }
};

// ==================== INITIALIZE SCRIPTS ====================
function initSilvaScripts() {
  if (typeof ReleasingEngine !== 'undefined') {
    Object.keys(silvaScripts).forEach(function(key) {
      ReleasingEngine.getScripts()[key] = silvaScripts[key];
    });
    console.log('Silva scripts loaded:', Object.keys(silvaScripts).length);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSilvaScripts);
} else {
  initSilvaScripts();
}

// ==================== START SILVA FUNCTION ====================
function startSilva(scriptId) {
  if (typeof ReleasingEngine !== 'undefined') {
    if (!ReleasingEngine.getScript(scriptId)) {
      ReleasingEngine.getScripts()[scriptId] = silvaScripts[scriptId];
    }

    ReleasingEngine.init({
      onComplete: function(result) {
        showToast('Sesi ' + silvaScripts[scriptId].title + ' selesai!', 'success');
      }
    });

    ReleasingEngine.startReleasing(scriptId);
  } else {
    showToast('ReleasingEngine tidak tersedia', 'error');
  }
}

// ==================== RANDOM SILVA QUOTE ====================
function getRandomSilvaQuote() {
  return silvaQuotes[Math.floor(Math.random() * silvaQuotes.length)];
}
