// ============================================================================
// ADVANCED TECHNIQUES - Coach Lia's Methods
// ============================================================================

// ==================== GUIDED SCRIPTS ====================
const advancedScripts = {
  // TAB 1: HOLISTIC RELEASE
  'holistic': {
    title: 'Holistic Release - Ditolak Diterima Bergantian',
    description: 'Teknik untuk mengguncang struktur resistensi',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar... rileks...', subtext: 'Biarkan tubuh dan pikiran tenang', duration: 6000 },
      { type: 'input', text: 'Pikirkan satu hal yang sedang kamu resistensi...', subtext: 'Bisa berupa kebiasaan, ketakutan, situasi, atau perasaan', placeholder: 'Contoh: Takut tidak punya uang, kebiasaan menunda, dll' },
      { type: 'instruction', text: 'Rasakan emosi yang muncul dari hal tersebut...', subtext: 'Perhatikan di mana rasanya di tubuh', duration: 8000 },
      { type: 'instruction', text: 'Sekarang, TOLAK sebanyak-banyaknya perasaan itu...', subtext: "Gak pengen dipegang, gak pengen diapa-apain, kalau bisa jauh-jauh!", duration: 10000 },
      { type: 'yesno', text: 'Boleh gak DITOLAK sebanyak-banyaknya?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Bagus! Sekarang kebalikannya - TERIMA aja sebanyak yang bisa diterima...', subtext: 'Biarkan saja hadir, izinkan ada di sini', duration: 10000 },
      { type: 'yesno', text: 'Boleh gak DITERIMA sebanyak-banyaknya?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Sekali lagi - TOLAK sebanyak-banyaknya...', subtext: 'Dorong jauh-jauh', duration: 8000 },
      { type: 'instruction', text: 'Dan sekarang - TERIMA sebanyak-banyaknya...', subtext: 'Sambut, izinkan hadir', duration: 8000 },
      { type: 'instruction', text: 'TOLAK lagi...', duration: 6000 },
      { type: 'instruction', text: 'TERIMA lagi...', duration: 6000 },
      { type: 'instruction', text: 'Sekarang perhatikan...', subtext: 'Bisa gak menemukan orang yang menolak?', duration: 8000 },
      { type: 'yesno', text: 'Bisa menemukan orang yang menolak?', subtext: 'Perhatikan baik-baik...', highlight: 'Tidak ada' },
      { type: 'instruction', text: 'Boleh gak dilepas KEINGINAN untuk mau HIDUPKAN LAGI cerita seperti itu?', duration: 6000 },
      { type: 'yesno', text: 'Mau gak melepas keinginan itu?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Perhatikan... ringan? Tidak ada apa-apa?', duration: 10000 },
      { type: 'completion', text: 'Selamat! Kamu telah melakukan Holistic Release', subtext: 'Ulangi kapan saja diperlukan. Semakin sering, semakin mudah.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  // TAB 2: SUNGAI KEHIDUPAN
  'river': {
    title: 'Sungai Kehidupan',
    description: 'Teknik melebur ke dalam aliran kehidupan',
    steps: [
      { type: 'instruction', text: 'Bisakah kamu berhenti sejenak, STOP dulu...', subtext: 'Perhatikan yang sudah seapadanya', duration: 8000 },
      { type: 'instruction', text: 'Bisakah kamu terbuka pada kemungkinan bahwa INI sudah kebebasan?', subtext: 'Sudah keutuhan, sudah cukup, sudah tidak terbatas', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu biarkan diri merasakan SUNGAI KEHIDUPAN?', subtext: 'Aliran universal, kegairahan yang mengalir di sekitar dan di dalam diri kamu', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu biarkan sungai kehidupan itu MEMBAWA kamu?', subtext: 'Mengapung santai di atasnya, tidak perlu berusaha', duration: 10000 },
      { type: 'visualization', text: 'Bayangkan kamu sedang berendam di BATHTUB air hangat yang nyaman...', subtext: 'Suhu air tepat, kamu tinggal duduk santai. Air mendukung kamu. Ketegangan di tubuh menghilang.', duration: 15000 },
      { type: 'instruction', text: 'Bisakah kamu biarkan BATASAN antara kehidupan dan diri kamu...', subtext: 'LARUT... MELELEH... MELEBUR...', duration: 10000 },
      { type: 'instruction', text: 'Biarkan saja sungai kehidupan MENGURUS SEGALANYA...', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan - kamu bahkan tidak perlu melakukan apa-apa untuk INI menjadi INI.', subtext: 'Ini tidak berubah. Ini keberadaan. Keistimewaan itu sendiri.', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu beristirahat saja seperti itu?', highlight: 'Bisa' },
      { type: 'completion', text: 'Bagus! Kamu telah melebur ke sungai kehidupan.', subtext: 'Praktikkan ini kapan saja - terutama saat merasa harus berjuang.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  // TAB 3: GET HIGH TO RELEASE
  'getHigh': {
    title: 'Get High to Release',
    description: 'Teknik Lester: Menaikkan energi untuk melepaskan lebih dalam',
    steps: [
      { type: 'instruction', text: 'Pertama, biarkan diri kamu RILEKS dulu...', subtext: 'Duduk nyaman, napas perlahan', duration: 10000 },
      { type: 'instruction', text: 'Biarkan diri kamu merasakan KEMUDAHAN yang sudah ada...', subtext: 'Ketenangan, kedamaian yang alami', duration: 10000 },
      { type: 'instruction', text: 'Duduk santai di dalam ALIRAN KEHIDUPAN...', subtext: 'Merasa didukung, aman, nyaman', duration: 10000 },
      { type: 'instruction', text: 'Saat kamu merasa NYAMAN seperti ini...', subtext: 'Inilah saatnya untuk membersihkan lebih dalam', duration: 6000 },
      { type: 'instruction', text: 'Sekarang, TARIK resistensi dari sistem kamu ke PERMUKAAN...', subtext: 'Biarkan apapun yang tersembunyi naik ke kesadaran', duration: 10000 },
      { type: 'instruction', text: 'Apa yang muncul? Biarkan saja hadir...', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Bagus! Rasakan lebih RINGAN...', subtext: 'Sekarang, TARIK LAGI resistensi ke permukaan', duration: 10000 },
      { type: 'instruction', text: 'Lepaskan lagi...', duration: 8000 },
      { type: 'instruction', text: 'TARIK lagi ke atas...', duration: 8000 },
      { type: 'instruction', text: 'Lepaskan lagi...', duration: 8000 },
      { type: 'instruction', text: 'Terus ulangi: tarik... lepas... tarik... lepas...', subtext: 'Sampai tidak ada lagi yang muncul', duration: 15000 },
      { type: 'completion', text: 'Excellent! Kamu telah melakukan pembersihan proaktif.', subtext: 'Lakukan ini secara rutin, terutama saat sedang merasa baik - jangan tunggu sampai ada masalah.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  // TAB 4: STOP
  'stop': {
    title: 'STOP - Berhenti Sejenak',
    description: 'Teknik paling sederhana dan paling powerful',
    steps: [
      { type: 'instruction', text: 'STOP.', subtext: 'Berhenti sejenak dari apapun yang sedang kamu lakukan', duration: 6000 },
      { type: 'instruction', text: 'Jangan lakukan apa-apa...', subtext: 'Tidak perlu berpikir, tidak perlu merasakan, tidak perlu melakukan', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan yang SUDAH SEAPADANYA...', duration: 10000 },
      { type: 'instruction', text: 'Atau hanya JADI seapadanya...', duration: 10000 },
      { type: 'instruction', text: 'Bukan melihat ke cerita...', duration: 6000 },
      { type: 'instruction', text: 'Bukan melihat ke tubuh...', duration: 6000 },
      { type: 'instruction', text: 'Bukan melihat ke pikiran...', duration: 6000 },
      { type: 'instruction', text: 'Saat ini ada APA?', subtext: 'Biarkan jawaban muncul sendiri...', duration: 15000 },
      { type: 'instruction', text: 'Kalau LEBIH dari itu, ada apa saat ini?', duration: 10000 },
      { type: 'instruction', text: 'Kalau LEBIH DARI ITU LAGI, ada apa saat ini?', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan...', subtext: 'Ringan? Rasa aman? Keberadaan?', duration: 10000 },
      { type: 'instruction', text: 'Bagaimana kalau INI SUDAH KEBEBASAN?', subtext: 'Sudah keamanan absolut. Sudah tidak terbatas.', duration: 10000 },
      { type: 'completion', text: 'Itulah kekuatan BERHENTI.', subtext: 'Tidak ada yang hilang dari berhenti. Justru momentum terbangun untuk hidup yang lebih mudah.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  // TAB 5: INQUIRY
  'inquiry': {
    title: 'Inquiry: Aku Ini Apa?',
    description: 'Self-inquiry untuk mengenali diri sejati',
    steps: [
      { type: 'instruction', text: 'Bisakah kamu berhenti sejenak...', subtext: 'STOP dulu, perhatikan yang sudah seapadanya', duration: 8000 },
      { type: 'instruction', text: 'Tanyakan pada diri sendiri dengan HATI (bukan pikiran):', duration: 4000 },
      { type: 'instruction', text: 'AKU INI APA?', subtext: "Bukan 'siapa' - tapi 'apa'", duration: 15000 },
      { type: 'instruction', text: 'Kalau pikiran menjawab sesuatu...', subtext: "Tanyakan: 'Kalau aku BUKAN itu, atau LEBIH dari itu - aku ini APA?'", duration: 15000 },
      { type: 'instruction', text: 'Kalau melampaui semua itu...', subtext: 'Aku ini APA?', duration: 15000 },
      { type: 'instruction', text: 'Alternatif pertanyaan:', subtext: 'Apa SUMBER dari aku?', duration: 10000 },
      { type: 'instruction', text: 'Kalau lebih dari itu dan bukan itu...', subtext: 'Apa SUMBER dari aku?', duration: 15000 },
      { type: 'instruction', text: 'Perhatikan...', subtext: 'Tidak berwarna, tidak berdimensi, tidak bisa dideskripsikan - namun dialami setiap saat', duration: 15000 },
      { type: 'instruction', text: 'Bisakah kamu menemukan di mana KAMU berakhir dan KEBERADAAN dimulai?', duration: 10000 },
      { type: 'instruction', text: 'Atau di mana KEBERADAAN berakhir dan KAMU dimulai?', duration: 10000 },
      { type: 'instruction', text: 'Atau apakah HANYA ADA SATU SAJA?', subtext: 'Satu energi yang sudah segalanya', duration: 15000 },
      { type: 'completion', text: 'Kamu tidak perlu menemukan jawaban.', subtext: 'Pertanyaan itu sendiri yang membawa kamu pulang. Ulangi kapan saja.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  // TAB 6: TIME RESISTANCE
  'time': {
    title: 'Melepas Resistensi Terhadap Waktu',
    description: 'Membebaskan diri dari ilusi waktu',
    steps: [
      { type: 'instruction', text: 'Stop sejenak...', subtext: 'Perhatikan saat ini', duration: 6000 },
      { type: 'instruction', text: 'Perhatikan: Bernapas terjadi SEKARANG...', duration: 6000 },
      { type: 'instruction', text: 'Jantung berdetak SEKARANG...', duration: 6000 },
      { type: 'instruction', text: 'Melihat, mendengar, merasakan - semuanya terjadi SEKARANG...', duration: 8000 },
      { type: 'instruction', text: 'Coba BUKTIKAN: Bisakah kamu KELUAR dari saat ini?', subtext: 'Coba... bisa tidak?', duration: 10000 },
      { type: 'instruction', text: 'TIDAK BISA. Semua yang kamu pikirkan tentang masa lalu - dipikirin SEKARANG.', duration: 8000 },
      { type: 'instruction', text: 'Semua proyeksi masa depan - dipikirin SEKARANG juga.', duration: 8000 },
      { type: 'input', text: 'Di mana dalam hidupmu kamu merasa harus MENGATUR waktu?', subtext: 'Merasa tidak punya cukup waktu? Atau terlalu banyak waktu?', placeholder: 'Contoh: Deadline kerja, menunggu sesuatu, dll' },
      { type: 'instruction', text: 'Bisakah kamu menyambut RESISTENSI terhadap waktu itu?', subtext: 'Izinkan saja hadir...', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan resistensi terhadap waktu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Bisakah kamu KELUAR dari waktu?', subtext: 'Melepas KONSEP waktu? Karena kamu TIDAK PERNAH ADA di dalamnya.', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu bersantai saja dan JADI apa adanya?', subtext: 'Di luar waktu, tidak berdimensi, tidak tertampung oleh waktu', duration: 15000 },
      { type: 'completion', text: 'Kamu tidak pernah terikat waktu.', subtext: 'Waktu hanyalah berguna untuk urusan teknis. Waktu psikologis yang bikin menderita - itu ilusi.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  // TAB 7: HAPPINESS RESISTANCE
  'happiness': {
    title: 'Melepas Resistensi Terhadap Kebahagiaan',
    description: 'Menyadari bahwa kebahagiaan sudah ada di sini',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks...', subtext: 'Biarkan yang sudah seapadanya', duration: 8000 },
      { type: 'instruction', text: 'Terbuka pada kemungkinan bahwa INI sudah kebebasan...', subtext: 'Sudah keutuhan, sudah cukup, sudah tidak terbatas, sudah BAHAGIA itu sendiri', duration: 10000 },
      { type: 'instruction', text: 'Hanya dengan BERHENTI dan menyadari INI sudah keberadaan...', subtext: 'Ada kebahagiaan, kedamaian, kegembiraan yang lebih besar - apapun yang terjadi di luar', duration: 10000 },
      { type: 'input', text: 'Di mana dalam hidupmu kamu selama ini MENCARI kebahagiaan di tempat yang SALAH?', subtext: "Berpikir 'kalau punya X, baru bahagia' - padahal X tidak memberi kebahagiaan sejati", placeholder: 'Contoh: Kalau punya uang lebih banyak, kalau punya pasangan, dll' },
      { type: 'instruction', text: 'Sadari: MENCARI kebahagiaan di luar = MENOLAK kebahagiaan yang sudah ada di sini', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu menyambut RESISTENSI terhadap kebahagiaan itu?', subtext: 'Izinkan saja hadir...', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan KEINGINAN untuk mendapatkan kebahagiaan di tempat yang salah?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Bisakah kamu duduk santai SEBAGAI kebahagiaan?', subtext: 'Yang selalu sudah tersedia. INI, ini kebahagiaan. Ini semua yang kamu cari di luar sana.', duration: 15000 },
      { type: 'instruction', text: 'Biarkan resistensi atau ketidakbahagiaan yang tersisa LARUT ke dalam yang sudah seapadanya...', duration: 10000 },
      { type: 'completion', text: 'Bahagia yang sebenarnya dicari adalah BERHENTI MENCARI.', subtext: 'Ketika berhenti mencari bahagia, ITU bahagia. Karena mencari hanya akan menemukan mencari.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  // TAB 8: LOVE RESISTANCE
  'love': {
    title: 'Melepas Resistensi Terhadap Cinta',
    description: 'Menyadari bahwa kamu ADALAH cinta',
    steps: [
      { type: 'instruction', text: 'Stop sejenak... perhatikan yang sudah seapadanya...', duration: 8000 },
      { type: 'instruction', text: 'Terbuka pada kemungkinan bahwa INI sudah CINTA murni tanpa syarat...', duration: 10000 },
      { type: 'input', text: 'Ingat saat di mana kamu MENGINGINKAN cinta dan tidak merasa mendapatkannya...', subtext: 'Atau saat kamu merasa tidak mampu mencintai, menahan cinta', placeholder: 'Contoh: Merasa tidak dicintai, sulit memaafkan seseorang, dll' },
      { type: 'instruction', text: 'Bisakah kamu menyambut apa yang muncul?', subtext: 'Izinkan saja hadir...', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan: ada PENOLAKAN terhadap cinta dalam aktivitas atau perasaan itu.', subtext: 'Mencari cinta di luar = menolak cinta yang sudah ada', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan PENOLAKAN terhadap cinta?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Bisakah kamu melepaskan KEINGINAN akan cinta - yang merupakan resistensi terhadap cinta?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Bisakah kamu biarkan diri duduk saja SEBAGAI CINTA yang sudah sejatinya?', subtext: 'Beristirahat sebagai cinta murni tanpa syarat', duration: 15000 },
      { type: 'instruction', text: 'Tanyakan dengan hati: APA ITU CINTA?', subtext: 'Izinkan pertanyaan itu menarik kamu ke dalam cinta yang sebenarnya. Biarkan CINTA menjadi jawabannya.', duration: 15000 },
      { type: 'instruction', text: 'Kalau lebih dari itu... apa itu CINTA?', duration: 10000 },
      { type: 'instruction', text: 'Biarkan batasan antara kamu dan cinta MENGHILANG...', subtext: 'Larut, melebur, menguap', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan: Cinta tidak berakhir di kulit kamu atau kulit orang lain...', subtext: 'Cinta ini ada di dalam diri kamu, di sekitar kamu, di mana-mana', duration: 10000 },
      { type: 'completion', text: 'Kamu ADALAH cinta yang kamu cari di luar sana.', subtext: 'Bahkan kemarahan pun adalah cinta. Tidak ada yang terpisah dari cinta. Semuanya sudah cinta.' },
      { type: 'insight', text: 'Ada insight?', placeholder: 'Tulis insight...' }
    ]
  },

  // QUICK SCRIPTS
  'holisticQuick': {
    title: 'Quick Holistic Release',
    steps: [
      { type: 'instruction', text: 'Pikirkan hal yang diresistensi...', duration: 4000 },
      { type: 'instruction', text: 'TOLAK sebanyak-banyaknya...', duration: 6000 },
      { type: 'instruction', text: 'TERIMA sebanyak-banyaknya...', duration: 6000 },
      { type: 'instruction', text: 'TOLAK lagi...', duration: 4000 },
      { type: 'instruction', text: 'TERIMA lagi...', duration: 4000 },
      { type: 'instruction', text: 'Bisa menemukan yang menolak? Tidak ada.', duration: 6000 },
      { type: 'completion', text: 'Done! Ringan?', subtext: 'Ulangi kapan saja.' }
    ]
  },

  'stopQuick': {
    title: 'Quick STOP',
    steps: [
      { type: 'instruction', text: 'STOP.', duration: 4000 },
      { type: 'instruction', text: 'Tidak melihat ke pikiran, tubuh, cerita...', duration: 6000 },
      { type: 'instruction', text: 'Saat ini ada APA?', duration: 10000 },
      { type: 'completion', text: 'Itulah keberadaan.', subtext: 'Hanya INI.' }
    ]
  },

  'riverQuick': {
    title: 'Quick River of Life',
    steps: [
      { type: 'instruction', text: 'Rileks... biarkan diri mengapung...', duration: 6000 },
      { type: 'instruction', text: 'Sungai kehidupan membawa kamu...', duration: 6000 },
      { type: 'instruction', text: 'Tidak perlu berusaha...', duration: 6000 },
      { type: 'instruction', text: 'Biarkan mengurus segalanya...', duration: 6000 },
      { type: 'completion', text: 'Mengalir...', subtext: 'Kamu didukung.' }
    ]
  },

  'inquiryQuick': {
    title: 'Quick Inquiry',
    steps: [
      { type: 'instruction', text: 'Aku ini APA?', duration: 10000 },
      { type: 'instruction', text: 'Kalau lebih dari itu, aku ini APA?', duration: 10000 },
      { type: 'instruction', text: 'Apa SUMBER dari aku?', duration: 10000 },
      { type: 'completion', text: 'Tidak perlu jawaban.', subtext: 'Pertanyaan itu yang membawa pulang.' }
    ]
  },

  // TOOLS
  'realityCheck': {
    title: 'Reality Check',
    description: 'Untuk menyadari bahwa cerita tidak nyata',
    steps: [
      { type: 'input', text: 'Cerita apa yang sedang kamu hidupkan?', placeholder: 'Contoh: Dia tidak menghargai saya, Saya akan gagal, dll' },
      { type: 'instruction', text: 'Perhatikan SAAT INI...', duration: 6000 },
      { type: 'yesno', text: 'REAL atau ENGGAK REAL ceritanya?', subtext: 'Apakah itu sedang terjadi SEKARANG, detik ini?', highlight: 'Enggak real' },
      { type: 'instruction', text: 'Kalau tidak real, boleh gak dilepas KEINGINAN untuk MENJADIKAN cerita itu NYATA?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepas keinginan untuk menghidupkan cerita itu lagi?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'SAAT INI ada apa?', subtext: 'Kalau tidak melihat ke cerita...', duration: 10000 },
      { type: 'completion', text: 'Cerita adalah cerita. Tidak pernah terjadi pada siapa-siapa.', subtext: 'Yang ada hanya INI. Seapadanya.' }
    ]
  },

  'cleanUpPerson': {
    title: 'Clean Up - Orang Tertentu',
    description: 'Membersihkan emosi seputar seseorang',
    steps: [
      { type: 'input', text: 'Siapa orang yang ingin kamu bersihkan emosinya?', placeholder: 'Nama atau deskripsi orang' },
      { type: 'instruction', text: 'Bayangkan orang itu di depan kamu sekarang...', duration: 6000 },
      { type: 'input', text: 'Apa emosi yang muncul saat memikirkan orang ini?', placeholder: 'Contoh: Kesal, kecewa, sedih, marah' },
      { type: 'instruction', text: 'Izinkan emosi itu hadir...', duration: 8000 },
      { type: 'instruction', text: 'TOLAK sebanyak-banyaknya emosi itu...', duration: 8000 },
      { type: 'instruction', text: 'TERIMA sebanyak-banyaknya...', duration: 8000 },
      { type: 'instruction', text: 'TOLAK lagi...', duration: 6000 },
      { type: 'instruction', text: 'TERIMA lagi...', duration: 6000 },
      { type: 'instruction', text: 'Bisa menemukan yang menolak?', duration: 6000 },
      { type: 'instruction', text: 'Sekarang lihat orang itu...', subtext: 'Coba rasakan dengan CINTA. Apa kelebihan dia yang bisa dihargai?', duration: 10000 },
      { type: 'instruction', text: 'Apapun yang bukan cinta, coba dirasakan dengan cinta...', subtext: 'Mungkin di sisi dia itu cinta juga, hanya berbeda bentuk', duration: 10000 },
      { type: 'completion', text: 'Bagaimana perasaan kamu terhadap orang itu sekarang?', subtext: 'Lebih ringan? Lebih netral? Ulangi clean up ini sampai benar-benar bersih.' },
      { type: 'insight', text: 'Catatan tentang orang ini:', placeholder: 'Tulis catatan...' }
    ]
  },

  // ==================== MANIFESTING TECHNIQUES ====================

  // MANIFESTING 1: GOAL PROCESS
  'goalProcess': {
    title: 'Goal Process - Proses Goal',
    description: 'Langkah-langkah untuk manifesting goal dengan releasing',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar... rileks...', subtext: 'Biarkan tubuh dan pikiran tenang', duration: 6000 },
      { type: 'input', text: 'Apa GOAL yang ingin kamu manifestasikan?', subtext: 'Tuliskan dengan jelas dan spesifik', placeholder: 'Contoh: Penghasilan 100 juta per bulan, Hubungan yang harmonis, dll' },
      { type: 'instruction', text: 'Sekarang bayangkan goal itu SUDAH TERJADI...', subtext: 'Rasakan perasaannya seolah sudah tercapai', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan - apakah ada RESISTENSI yang muncul?', subtext: 'Mungkin berupa keraguan, ketakutan, atau ketidakpercayaan', duration: 8000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut resistensi itu?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Boleh gak dilepas keinginan untuk MENGONTROL cara goal ini tercapai?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepas keinginan untuk mengontrol?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Boleh gak dilepas KETAKUTAN bahwa goal tidak akan tercapai?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepas ketakutan itu?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Boleh gak dilepas KEINGINAN akan goal ini?', subtext: 'Bukan berarti tidak mau goal-nya, tapi melepas ATTACHMENT', duration: 10000 },
      { type: 'yesno', text: 'Mau gak melepas attachment terhadap goal?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang bayangkan TIDAK MENDAPATKAN goal itu...', subtext: 'Rasakan apa yang muncul', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu baik-baik saja bahkan tanpa goal itu?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Boleh gak dilepas keinginan untuk MEMBUKTIKAN sesuatu lewat goal ini?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang bayangkan lagi goal itu SUDAH TERJADI...', subtext: 'Bagaimana perasaannya sekarang?', duration: 10000 },
      { type: 'completion', text: 'Bagus! Goal Process selesai.', subtext: 'Ulangi proses ini secara rutin untuk membersihkan lebih banyak resistensi.' },
      { type: 'insight', text: 'Insight tentang goal ini:', placeholder: 'Tulis insight...' }
    ]
  },

  // MANIFESTING 2: HOLISTIC RELEASE UNTUK GOAL
  'holisticGoal': {
    title: 'Holistic Release untuk Goal',
    description: 'Menggunakan teknik holistic untuk membersihkan resistensi terhadap goal',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks...', duration: 6000 },
      { type: 'input', text: 'Apa GOAL yang ingin kamu bersihkan resistensinya?', placeholder: 'Tuliskan goal kamu' },
      { type: 'instruction', text: 'Bayangkan goal itu sudah tercapai...', subtext: 'Rasakan kegembiraan, kepuasan, kebebasan', duration: 10000 },
      { type: 'instruction', text: 'Sekarang, TOLAK sebanyak-banyaknya keinginan akan goal itu...', subtext: 'Gak pengen, gak mau, jauh-jauh!', duration: 10000 },
      { type: 'yesno', text: 'Boleh gak DITOLAK sebanyak-banyaknya?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Sekarang kebalikannya - TERIMA sebanyak-banyaknya...', subtext: 'Biarkan keinginan itu hadir, izinkan ada', duration: 10000 },
      { type: 'yesno', text: 'Boleh gak DITERIMA sebanyak-banyaknya?', highlight: 'Bisa' },
      { type: 'instruction', text: 'TOLAK lagi...', duration: 8000 },
      { type: 'instruction', text: 'TERIMA lagi...', duration: 8000 },
      { type: 'instruction', text: 'TOLAK...', duration: 6000 },
      { type: 'instruction', text: 'TERIMA...', duration: 6000 },
      { type: 'instruction', text: 'Sekarang perhatikan...', subtext: 'Bisa gak menemukan orang yang menginginkan goal itu?', duration: 8000 },
      { type: 'yesno', text: 'Bisa menemukan orang yang menginginkan?', highlight: 'Tidak ada' },
      { type: 'instruction', text: 'Boleh gak dilepas KEINGINAN untuk mau HIDUPKAN LAGI attachment seperti itu?', duration: 6000 },
      { type: 'yesno', text: 'Mau gak melepas keinginan itu?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Perhatikan... kekosongan? Kebebasan? Kedamaian?', duration: 10000 },
      { type: 'completion', text: 'Excellent! Holistic Release untuk Goal selesai.', subtext: 'Goal lebih mudah terwujud dari tempat yang bersih dan bebas attachment.' },
      { type: 'insight', text: 'Insight:', placeholder: 'Tulis insight...' }
    ]
  },

  // MANIFESTING 3: ACTION STEP BRAINSTORM
  'actionBrainstorm': {
    title: 'Action Step Brainstorm',
    description: 'Brainstorming aksi dengan releasing untuk goal',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks...', duration: 6000 },
      { type: 'input', text: 'Apa GOAL yang ingin kamu brainstorm action step-nya?', placeholder: 'Tuliskan goal kamu' },
      { type: 'instruction', text: 'Bayangkan goal itu SUDAH TERCAPAI dengan mudah dan gembira...', duration: 10000 },
      { type: 'instruction', text: 'Dari tempat goal sudah tercapai...', subtext: 'Apa SATU aksi yang bisa kamu lakukan HARI INI?', duration: 8000 },
      { type: 'input', text: 'Tulis aksi pertama yang muncul:', placeholder: 'Contoh: Telepon klien, Buat konten, dll' },
      { type: 'instruction', text: 'Perhatikan - ada resistensi terhadap aksi itu?', duration: 6000 },
      { type: 'yesno', text: 'Bisakah kamu melepas resistensi terhadap aksi itu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Apa aksi SELANJUTNYA yang bisa dilakukan?', duration: 8000 },
      { type: 'input', text: 'Tulis aksi kedua:', placeholder: 'Aksi selanjutnya...' },
      { type: 'instruction', text: 'Lepas resistensi terhadap aksi kedua...', duration: 8000 },
      { type: 'instruction', text: 'Apa aksi KETIGA yang muncul?', duration: 8000 },
      { type: 'input', text: 'Tulis aksi ketiga:', placeholder: 'Aksi ketiga...' },
      { type: 'instruction', text: 'Lepas resistensi terhadap aksi ketiga...', duration: 8000 },
      { type: 'instruction', text: 'Sekarang dari ketiga aksi itu, mana yang paling RINGAN dan MENYENANGKAN untuk dilakukan?', duration: 10000 },
      { type: 'instruction', text: 'Boleh gak dilepas keinginan untuk MENUNDA aksi itu?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepas keinginan untuk menunda?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: 'Bagus! Sekarang kamu punya action steps yang bersih.', subtext: 'Lakukan aksi dari tempat yang ringan dan bebas resistensi.' },
      { type: 'insight', text: 'Action steps yang akan dilakukan:', placeholder: 'Tulis rencana aksi...' }
    ]
  },

  // MANIFESTING 4: TURN IT OVER
  'turnItOver': {
    title: 'Turn It Over - Serahkan',
    description: 'Menyerahkan goal ke sungai kehidupan',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks...', subtext: 'Biarkan yang sudah seapadanya', duration: 8000 },
      { type: 'input', text: 'Apa GOAL atau situasi yang ingin kamu serahkan?', placeholder: 'Tuliskan goal atau situasi' },
      { type: 'instruction', text: 'Bayangkan goal itu seperti bola yang kamu pegang erat-erat...', duration: 8000 },
      { type: 'instruction', text: 'Perhatikan bagaimana rasanya MENGGENGGAM goal itu...', subtext: 'Mungkin terasa berat, tegang, atau khawatir', duration: 10000 },
      { type: 'instruction', text: 'Sekarang, bayangkan ada SUNGAI KEHIDUPAN yang mengalir...', subtext: 'Aliran universal yang tahu cara terbaik untuk mewujudkan segalanya', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu LETAKKAN bola goal itu di atas sungai kehidupan?', subtext: 'Biarkan sungai yang membawanya...', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyerahkan goal ini ke sungai kehidupan?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu menyerahkannya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Lihat bola itu mengapung dan dibawa oleh sungai...', subtext: 'Kamu tidak perlu tahu cara-nya, hanya percaya sungai akan membawanya ke tempat terbaik', duration: 12000 },
      { type: 'instruction', text: 'Boleh gak dilepas keinginan untuk MENGAMBIL KEMBALI goal itu dari sungai?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepas keinginan untuk mengambil kembali?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Bisakah kamu PERCAYA bahwa sungai kehidupan tahu cara terbaik?', duration: 10000 },
      { type: 'instruction', text: 'Biarkan diri kamu juga MENGAPUNG di sungai...', subtext: 'Didukung, dibawa, tanpa usaha', duration: 12000 },
      { type: 'completion', text: 'Selamat! Kamu telah menyerahkan goal ke sungai kehidupan.', subtext: 'Percaya bahwa yang terbaik akan terjadi, dengan cara yang mungkin tidak terduga.' },
      { type: 'insight', text: 'Insight:', placeholder: 'Tulis insight...' }
    ]
  },

  // MANIFESTING 5: FREEWAY
  'freeway': {
    title: 'Freeway - Jalan Bebas Hambatan',
    description: 'Membersihkan jalan menuju goal dari semua hambatan',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks...', duration: 6000 },
      { type: 'input', text: 'Apa GOAL yang ingin kamu bersihkan jalannya?', placeholder: 'Tuliskan goal kamu' },
      { type: 'instruction', text: 'Bayangkan ada JALAN dari tempat kamu sekarang ke goal itu...', duration: 8000 },
      { type: 'instruction', text: 'Perhatikan - apakah jalannya MULUS atau ada HAMBATAN?', subtext: 'Mungkin terlihat batu besar, lubang, atau penghalang', duration: 10000 },
      { type: 'input', text: 'Hambatan pertama apa yang terlihat di jalan itu?', placeholder: 'Contoh: Ketakutan gagal, tidak punya modal, dll' },
      { type: 'instruction', text: 'Bisakah kamu menyambut hambatan itu?', duration: 6000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan hambatan pertama itu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Lihat hambatan itu MENGHILANG dari jalan...', duration: 8000 },
      { type: 'input', text: 'Hambatan kedua apa yang terlihat?', placeholder: 'Hambatan selanjutnya...' },
      { type: 'yesno', text: 'Bisakah kamu melepaskan hambatan kedua?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Lihat hambatan itu juga MENGHILANG...', duration: 8000 },
      { type: 'input', text: 'Hambatan ketiga (jika ada)?', placeholder: 'Hambatan terakhir...' },
      { type: 'yesno', text: 'Bisakah kamu melepaskan hambatan ketiga?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang lihat JALAN itu...', subtext: 'Sudah bersih? Sudah mulus? Sudah bebas hambatan?', duration: 10000 },
      { type: 'instruction', text: 'Bayangkan kamu BERJALAN dengan mudah di jalan itu menuju goal...', duration: 10000 },
      { type: 'instruction', text: 'Boleh gak dilepas keinginan untuk MENCIPTAKAN hambatan baru di jalan?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: 'Excellent! Jalan menuju goal sudah bersih.', subtext: 'Kamu bisa berjalan dengan mudah dan ringan menuju goal kamu.' },
      { type: 'insight', text: 'Insight tentang hambatan yang dilepaskan:', placeholder: 'Tulis insight...' }
    ]
  },

  // MANIFESTING 6: MENGAKSES KEMAHAKUASAAN
  'allPower': {
    title: 'Mengakses Kemahakuasaan',
    description: 'Menyadari bahwa kamu sudah memiliki semua kekuatan untuk mewujudkan apapun',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks dalam...', subtext: 'Biarkan yang sudah seapadanya', duration: 8000 },
      { type: 'instruction', text: 'Terbuka pada kemungkinan bahwa INI sudah kebebasan...', subtext: 'Sudah keutuhan, sudah tidak terbatas', duration: 10000 },
      { type: 'input', text: 'Apa yang kamu ingin wujudkan?', placeholder: 'Tuliskan keinginan kamu' },
      { type: 'instruction', text: 'Perhatikan - ketika memikirkan keinginan itu...', subtext: 'Apakah kamu merasa KECIL, TERBATAS, atau TIDAK MAMPU?', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu menyambut perasaan terbatas itu?', duration: 8000 },
      { type: 'yesno', text: 'Bisakah kamu melepas perasaan KECIL dan TERBATAS?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang tanyakan pada diri sendiri...', subtext: 'Apakah keberadaan ini terbatas? Atau tidak terbatas?', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu merasakan ketidakterbatasan yang sudah menjadi sifat sejati kamu?', duration: 10000 },
      { type: 'instruction', text: 'Dari tempat yang tidak terbatas ini...', subtext: 'Apakah keinginan itu terasa mungkin?', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu melepas PEMBATASAN yang kamu letakkan pada diri sendiri?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepas pembatasan itu?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Tanyakan: Apakah aku ini TERPISAH dari kehidupan?', subtext: 'Atau apakah aku INI ADALAH kehidupan itu sendiri?', duration: 12000 },
      { type: 'instruction', text: 'Bisakah kamu duduk saja sebagai KEMAHAKUASAAN itu sendiri?', subtext: 'Yang sudah menjadi sifat sejati kamu', duration: 12000 },
      { type: 'instruction', text: 'Dari tempat ini - semua yang kamu inginkan sudah ada di sini...', subtext: 'Hanya tinggal izinkan manifestasinya terjadi', duration: 10000 },
      { type: 'completion', text: 'Kamu sudah adalah KEMAHAKUASAAN itu sendiri.', subtext: 'Tidak perlu mendapatkan apapun - hanya mengizinkan yang sudah ada untuk termanifestasi.' },
      { type: 'insight', text: 'Insight:', placeholder: 'Tulis insight...' }
    ]
  },

  // MANIFESTING TOOL 1: BELIEF CLEARING
  'beliefClearing': {
    title: 'Belief Clearing - Membersihkan Keyakinan',
    description: 'Membersihkan keyakinan yang menghalangi manifestasi',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks...', duration: 6000 },
      { type: 'input', text: 'Apa GOAL yang ingin kamu manifestasikan?', placeholder: 'Tuliskan goal kamu' },
      { type: 'instruction', text: 'Sekarang perhatikan...', subtext: 'Apa KEYAKINAN yang mengatakan bahwa goal ini tidak mungkin?', duration: 8000 },
      { type: 'input', text: 'Tulis keyakinan pembatas pertama:', placeholder: 'Contoh: Saya tidak cukup pintar, Ini terlalu sulit, dll' },
      { type: 'instruction', text: 'Perhatikan keyakinan itu...', subtext: 'Apakah itu FAKTA atau hanya CERITA?', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas keyakinan pembatas itu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'input', text: 'Keyakinan pembatas kedua (jika ada):', placeholder: 'Keyakinan lain...' },
      { type: 'yesno', text: 'Bisakah kamu melepas keyakinan kedua?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'input', text: 'Keyakinan pembatas ketiga (jika ada):', placeholder: 'Keyakinan terakhir...' },
      { type: 'yesno', text: 'Bisakah kamu melepas keyakinan ketiga?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang tanyakan: Apakah keinginan ini bisa saya izinkan untuk terwujud?', duration: 10000 },
      { type: 'instruction', text: 'Boleh gak dilepas keinginan untuk MEMPERTAHANKAN keyakinan pembatas?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: 'Keyakinan pembatas sudah dibersihkan.', subtext: 'Sekarang goal kamu memiliki ruang untuk terwujud.' },
      { type: 'insight', text: 'Keyakinan yang dilepaskan:', placeholder: 'Tulis keyakinan yang sudah dilepas...' }
    ]
  },

  // MANIFESTING TOOL 2: 4 WANTING CHECKER
  'wantingChecker': {
    title: '4 Wanting Checker',
    description: 'Mengecek apakah 4 keinginan dasar menghambat goal',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks...', duration: 6000 },
      { type: 'input', text: 'Apa GOAL yang ingin kamu cek?', placeholder: 'Tuliskan goal kamu' },
      { type: 'instruction', text: 'Sekarang kita akan cek 4 KEINGINAN DASAR yang mungkin menghambat goal ini...', duration: 6000 },
      { type: 'instruction', text: '1. WANTING APPROVAL', subtext: 'Apakah kamu menginginkan goal ini untuk MENDAPAT PERSETUJUAN atau PUJIAN dari orang lain?', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas keinginan untuk mendapat approval lewat goal ini?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: '2. WANTING CONTROL', subtext: 'Apakah kamu menginginkan goal ini untuk MENGONTROL sesuatu atau seseorang?', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas keinginan untuk mengontrol lewat goal ini?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: '3. WANTING SECURITY', subtext: 'Apakah kamu menginginkan goal ini karena TAKUT tidak aman tanpanya?', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas keinginan akan keamanan lewat goal ini?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: '4. WANTING SEPARATION', subtext: 'Apakah kamu menginginkan goal ini untuk MEMBUKTIKAN bahwa kamu BERBEDA atau LEBIH BAIK dari orang lain?', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas keinginan untuk berbeda/lebih baik lewat goal ini?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang rasakan goal itu lagi...', subtext: 'Bagaimana perasaannya setelah melepas keempat keinginan dasar?', duration: 10000 },
      { type: 'instruction', text: 'Dari tempat yang lebih bersih ini...', subtext: 'Apakah goal itu masih terasa penting? Atau kamu sudah merasa bebas baik dengan atau tanpanya?', duration: 10000 },
      { type: 'completion', text: 'Excellent! 4 Wanting sudah dicek dan dibersihkan.', subtext: 'Goal yang bersih dari 4 wanting lebih mudah terwujud karena tidak ada resistensi yang menghambat.' },
      { type: 'insight', text: 'Insight:', placeholder: 'Tulis insight...' }
    ]
  }
};

// ==================== QUOTES ====================
const quotes = [
  { text: "Keep it simple, sweetheart.", author: "Lester Levenson" },
  { text: "Semuanya hanyalah yang muncul saja.", author: "Coach Lia" },
  { text: "Bahagia yang dicari adalah berhenti mencari.", author: "Coach Lia" },
  { text: "Mencari hanya akan menemukan mencari.", author: "Coach Lia" },
  { text: "Tidak ada yang terpisah dari cinta.", author: "Coach Lia" },
  { text: "Cintai, cintai, cintai - dan kamu akan bahagia.", author: "Lester Levenson" },
  { text: "Waktu hanyalah ilusi. Hanya ada sekarang.", author: "Coach Lia" },
  { text: "Effort is ego in action.", author: "Lester Levenson" },
  { text: "Semakin bodoh, semakin gampang.", author: "Coach Lia" },
  { text: "Hidup bukan hitam atau putih, tapi abu-abu.", author: "Lester Levenson" },
  { text: "Empati yang salah adalah resistensi.", author: "Coach Lia" },
  { text: "Berbicara dari cinta, dayanya beda.", author: "Coach Lia" },
  { text: "Duit gak pernah abis kalau gak ada resistensi.", author: "Coach Lia" },
  { text: "Keberadaan tidak butuh bantuan kamu untuk jadi ada.", author: "Coach Lia" },
  { text: "Hanya ada INI. Tidak bisa ditambah, tidak bisa dikurang.", author: "Coach Lia" },
  // Manifesting Quotes
  { text: "Goal hanya alasan untuk melepas resistensi.", author: "Coach Lia" },
  { text: "Yang kamu inginkan sudah di sini. Hanya perlu melepas yang menghalangi.", author: "Lester Levenson" },
  { text: "Attachment pada goal adalah hambatan terbesar untuk goal itu terwujud.", author: "Coach Lia" },
  { text: "Turn it over to the river of life.", author: "Coach Lia" },
  { text: "Kamu tidak perlu tahu caranya. Sungai kehidupan tahu.", author: "Coach Lia" },
  { text: "Semakin kamu melepas, semakin goal mendekati kamu.", author: "Lester Levenson" },
  { text: "Manifesting bukan tentang mendapatkan, tapi tentang MENJADI.", author: "Coach Lia" },
  { text: "Goal yang bersih terwujud dengan sendirinya.", author: "Coach Lia" },
  { text: "Kamu sudah adalah kemahakuasaan itu sendiri.", author: "Lester Levenson" },
  { text: "Bukan tentang apakah kamu bisa, tapi apakah kamu MAU melepas.", author: "Coach Lia" },
  { text: "Keinginan yang tidak ter-attach adalah doa yang paling kuat.", author: "Coach Lia" },
  { text: "Semua yang kamu cari di luar sudah lengkap di dalam.", author: "Lester Levenson" }
];

// ==================== PROGRESS TRACKING ====================
let advancedProgress = JSON.parse(localStorage.getItem('advancedTechniquesProgress')) || {
  holistic: 0,
  river: 0,
  getHigh: 0,
  stop: 0,
  inquiry: 0,
  time: 0,
  happiness: 0,
  love: 0,
  realityCheck: 0,
  cleanUpPerson: 0,
  // Manifesting Progress
  goalProcess: 0,
  holisticGoal: 0,
  actionBrainstorm: 0,
  turnItOver: 0,
  freeway: 0,
  allPower: 0,
  beliefClearing: 0,
  wantingChecker: 0,
  totalSessions: 0
};

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
  // Rotate quote
  rotateQuote();
  setInterval(rotateQuote, 30000); // Change every 30 seconds

  // Render progress
  renderProgress();
  renderManifestingProgress();

  // Initialize ReleasingEngine with advanced scripts
  if (typeof ReleasingEngine !== 'undefined') {
    // Add advanced scripts to ReleasingEngine
    Object.keys(advancedScripts).forEach(function(key) {
      ReleasingEngine.getScripts()[key] = advancedScripts[key];
    });
  }
});

// ==================== QUOTE ROTATION ====================
function rotateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById('quoteText').textContent = '"' + quote.text + '"';
  document.getElementById('quoteAuthor').textContent = '— ' + quote.author;
}

// ==================== START FUNCTIONS ====================
function startTechnique(techniqueId) {
  if (typeof ReleasingEngine !== 'undefined') {
    // Add script if not exists
    if (!ReleasingEngine.getScript(techniqueId)) {
      ReleasingEngine.getScripts()[techniqueId] = advancedScripts[techniqueId];
    }

    ReleasingEngine.init({
      onComplete: function(result) {
        advancedProgress[techniqueId]++;
        advancedProgress.totalSessions++;
        saveProgress();
        renderProgress();
        showToast('Sesi ' + advancedScripts[techniqueId].title + ' selesai!', 'success');
      }
    });

    ReleasingEngine.startReleasing(techniqueId);
  } else {
    showToast('ReleasingEngine tidak tersedia', 'error');
  }
}

function startQuickRelease(scriptId) {
  if (typeof ReleasingEngine !== 'undefined') {
    // Add script if not exists
    if (!ReleasingEngine.getScript(scriptId)) {
      ReleasingEngine.getScripts()[scriptId] = advancedScripts[scriptId];
    }

    ReleasingEngine.init({
      onComplete: function(result) {
        advancedProgress.totalSessions++;
        saveProgress();
        renderProgress();
      }
    });

    ReleasingEngine.startReleasing(scriptId);
  } else {
    showToast('ReleasingEngine tidak tersedia', 'error');
  }
}

function startTool(toolId) {
  if (typeof ReleasingEngine !== 'undefined') {
    // Add script if not exists
    if (!ReleasingEngine.getScript(toolId)) {
      ReleasingEngine.getScripts()[toolId] = advancedScripts[toolId];
    }

    ReleasingEngine.init({
      onComplete: function(result) {
        advancedProgress[toolId]++;
        advancedProgress.totalSessions++;
        saveProgress();
        renderProgress();
        renderManifestingProgress();
        showToast('Tool selesai!', 'success');
      }
    });

    ReleasingEngine.startReleasing(toolId);
  } else {
    showToast('ReleasingEngine tidak tersedia', 'error');
  }
}

function startManifesting(scriptId) {
  if (typeof ReleasingEngine !== 'undefined') {
    // Add script if not exists
    if (!ReleasingEngine.getScript(scriptId)) {
      ReleasingEngine.getScripts()[scriptId] = advancedScripts[scriptId];
    }

    ReleasingEngine.init({
      onComplete: function(result) {
        advancedProgress[scriptId]++;
        advancedProgress.totalSessions++;
        saveProgress();
        renderProgress();
        renderManifestingProgress();
        showToast('Sesi ' + advancedScripts[scriptId].title + ' selesai!', 'success');
      }
    });

    ReleasingEngine.startReleasing(scriptId);
  } else {
    showToast('ReleasingEngine tidak tersedia', 'error');
  }
}

// ==================== PROGRESS ====================
function saveProgress() {
  localStorage.setItem('advancedTechniquesProgress', JSON.stringify(advancedProgress));
}

function renderProgress() {
  const grid = document.getElementById('progressGrid');
  if (!grid) return;

  const items = [
    { id: 'holistic', name: 'Holistic' },
    { id: 'river', name: 'Sungai' },
    { id: 'getHigh', name: 'Get High' },
    { id: 'stop', name: 'STOP' },
    { id: 'inquiry', name: 'Inquiry' },
    { id: 'time', name: 'Waktu' },
    { id: 'happiness', name: 'Bahagia' },
    { id: 'love', name: 'Cinta' }
  ];

  grid.innerHTML = items.map(function(item) {
    return '<div class="progress-item">' +
      '<div class="count">' + (advancedProgress[item.id] || 0) + '</div>' +
      '<div class="label">' + item.name + '</div>' +
    '</div>';
  }).join('');
}

function renderManifestingProgress() {
  const grid = document.getElementById('manifestingProgressGrid');
  if (!grid) return;

  const items = [
    { id: 'goalProcess', name: 'Goal Process' },
    { id: 'holisticGoal', name: 'Holistic Goal' },
    { id: 'actionBrainstorm', name: 'Action' },
    { id: 'turnItOver', name: 'Turn Over' },
    { id: 'freeway', name: 'Freeway' },
    { id: 'allPower', name: 'Kuasa' }
  ];

  grid.innerHTML = items.map(function(item) {
    return '<div class="progress-item">' +
      '<div class="count">' + (advancedProgress[item.id] || 0) + '</div>' +
      '<div class="label">' + item.name + '</div>' +
    '</div>';
  }).join('');
}
