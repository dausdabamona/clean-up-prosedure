// ============================================================================
// CLEANUP SCRIPTS - Advanced Clean Up Techniques (Shared Code)
// ============================================================================

// ==================== CLEANUP SCRIPTS ====================
const cleanupScripts = {

  // ==================== PRE-CLEAN UP ====================

  // Grounding & Centering
  'grounding': {
    title: 'Grounding & Centering',
    description: 'Persiapan sebelum memulai clean up',
    steps: [
      { type: 'instruction', text: 'Duduk dengan nyaman...', subtext: 'Punggung tegak, bahu rileks', duration: 8000 },
      { type: 'instruction', text: 'Tutup mata jika nyaman...', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... 4 detik', duration: 4000 },
      { type: 'breathing', text: 'Tahan... 4 detik', duration: 4000 },
      { type: 'breathing', text: 'Hembuskan perlahan... 6 detik', duration: 6000 },
      { type: 'instruction', text: 'Ulangi 2 kali lagi...', duration: 20000 },
      { type: 'instruction', text: 'Rasakan kedua kaki menapak di lantai...', subtext: 'Bayangkan akar tumbuh dari kaki ke bumi', duration: 10000 },
      { type: 'instruction', text: 'Rasakan energi bumi naik melalui kaki...', subtext: 'Memberi kestabilan dan kekuatan', duration: 10000 },
      { type: 'instruction', text: 'Rasakan kepala terhubung ke langit...', subtext: 'Terbuka pada kebijaksanaan universal', duration: 10000 },
      { type: 'instruction', text: 'Kamu sekarang berada di titik tengah...', subtext: 'Grounded, centered, siap untuk clean up', duration: 8000 },
      { type: 'completion', text: 'Grounding selesai.', subtext: 'Kamu siap memulai proses clean up.' }
    ]
  },

  // Set Intention
  'setIntention': {
    title: 'Set Intention',
    description: 'Menetapkan niat sebelum clean up',
    steps: [
      { type: 'instruction', text: 'Stop sejenak... tarik napas dalam...', duration: 8000 },
      { type: 'input', text: 'Siapa yang akan kamu clean up hari ini?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan orang itu di depanmu sekarang...', duration: 8000 },
      { type: 'input', text: 'Apa INTENTION kamu untuk sesi clean up ini?', subtext: 'Apa yang ingin kamu capai?', placeholder: 'Contoh: Melepas dendam, memaafkan sepenuhnya, merasa damai' },
      { type: 'instruction', text: 'Rasakan intention itu di dalam hatimu...', duration: 8000 },
      { type: 'yesno', text: 'Apakah kamu siap melakukan clean up dengan sepenuh hati?', highlight: 'Ya' },
      { type: 'instruction', text: 'Biarkan intention itu memandu prosesmu...', duration: 6000 },
      { type: 'completion', text: 'Intention sudah ditetapkan.', subtext: 'Lanjutkan ke proses clean up utama.' }
    ]
  },

  // Identify Emotion
  'identifyEmotion': {
    title: 'Identifikasi Emosi',
    description: 'Mengenali emosi spesifik terhadap orang tersebut',
    steps: [
      { type: 'instruction', text: 'Pikirkan orang yang akan di-clean up...', duration: 6000 },
      { type: 'input', text: 'Siapa orangnya?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan orang itu di depanmu...', subtext: 'Perhatikan apa yang muncul di tubuh dan perasaan', duration: 10000 },
      { type: 'input', text: 'Emosi APA yang paling kuat muncul?', placeholder: 'Contoh: Marah, kecewa, sedih, takut, benci, dll' },
      { type: 'instruction', text: 'Di mana kamu merasakan emosi itu di TUBUH?', subtext: 'Dada? Perut? Tenggorokan? Kepala?', duration: 10000 },
      { type: 'input', text: 'Lokasi di tubuh:', placeholder: 'Contoh: Dada terasa sesak, perut mual, dll' },
      { type: 'instruction', text: 'Pada skala 1-10, seberapa INTENS emosi ini?', duration: 8000 },
      { type: 'choice', text: 'Intensitas emosi:', options: ['1-3 (Ringan)', '4-6 (Sedang)', '7-10 (Kuat)'] },
      { type: 'instruction', text: 'Bagus, kamu sudah mengidentifikasi emosinya...', subtext: 'Sekarang kita siap untuk melepaskannya', duration: 8000 },
      { type: 'completion', text: 'Emosi sudah teridentifikasi.', subtext: 'Lanjutkan ke teknik releasing yang sesuai.' },
      { type: 'insight', text: 'Catatan tentang emosi ini:', placeholder: 'Tulis catatan...' }
    ]
  },

  // ==================== ADVANCED RELEASE TECHNIQUES ====================

  // Holistic Release for Person
  'holisticPerson': {
    title: 'Holistic Release - Orang',
    description: 'Teknik tolak-terima untuk melepas resistensi terhadap seseorang',
    steps: [
      { type: 'instruction', text: 'Stop dulu... rileks...', duration: 6000 },
      { type: 'input', text: 'Siapa orang yang ingin kamu release?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan orang itu di depanmu...', subtext: 'Perhatikan perasaan yang muncul', duration: 10000 },
      { type: 'instruction', text: 'Sekarang, TOLAK sebanyak-banyaknya orang itu...', subtext: 'Tolak kehadirannya, perilakunya, semuanya!', duration: 10000 },
      { type: 'yesno', text: 'Boleh gak DITOLAK sebanyak-banyaknya?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Sekarang kebalikannya - TERIMA sebanyak-banyaknya...', subtext: 'Terima apa adanya, tanpa syarat', duration: 10000 },
      { type: 'yesno', text: 'Boleh gak DITERIMA sebanyak-banyaknya?', highlight: 'Bisa' },
      { type: 'instruction', text: 'TOLAK lagi...', subtext: 'Dorong jauh-jauh', duration: 8000 },
      { type: 'instruction', text: 'TERIMA lagi...', subtext: 'Peluk, sambut', duration: 8000 },
      { type: 'instruction', text: 'TOLAK...', duration: 6000 },
      { type: 'instruction', text: 'TERIMA...', duration: 6000 },
      { type: 'instruction', text: 'Sekarang perhatikan...', subtext: 'Bisa menemukan orang yang menolak/menerima?', duration: 10000 },
      { type: 'yesno', text: 'Bisa menemukan yang menolak/menerima?', highlight: 'Tidak ada' },
      { type: 'instruction', text: 'Boleh gak dilepas keinginan untuk BEREAKSI terhadap orang ini?', duration: 8000 },
      { type: 'yesno', text: 'Mau gak melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Netral? Damai? Tidak ada apa-apa?', duration: 10000 },
      { type: 'completion', text: 'Holistic Release selesai.', subtext: 'Ulangi sampai benar-benar netral terhadap orang ini.' },
      { type: 'insight', text: 'Insight:', placeholder: 'Tulis insight...' }
    ]
  },

  // Love Release
  'loveRelease': {
    title: 'Love Release',
    description: 'Melihat orang tersebut dengan mata cinta',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', duration: 8000 },
      { type: 'input', text: 'Siapa orang yang ingin kamu lihat dengan cinta?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan orang itu di depanmu...', duration: 8000 },
      { type: 'instruction', text: 'Perhatikan semua resistensi yang muncul...', subtext: 'Kemarahan, kekecewaan, sakit hati', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut resistensi itu?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Sekarang, coba LIHAT orang itu dengan mata yang berbeda...', duration: 8000 },
      { type: 'instruction', text: 'Dia juga manusia yang ingin bahagia...', subtext: 'Sama seperti kamu', duration: 10000 },
      { type: 'instruction', text: 'Dia juga pernah menderita...', subtext: 'Punya luka yang mungkin kamu tidak tahu', duration: 10000 },
      { type: 'instruction', text: 'Dia melakukan yang terbaik yang dia bisa...', subtext: 'Dengan kesadaran yang dia miliki saat itu', duration: 10000 },
      { type: 'instruction', text: 'Bisakah kamu menemukan SATU hal baik dari orang ini?', subtext: 'Sekecil apapun', duration: 12000 },
      { type: 'input', text: 'Satu hal baik dari orang ini:', placeholder: 'Contoh: Pernah membantu, punya sisi lucu, dll' },
      { type: 'instruction', text: 'Bisakah kamu melepas RESISTENSI untuk melihat dia dengan cinta?', duration: 8000 },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang bayangkan CINTA mengalir dari hatimu ke orang itu...', subtext: 'Tidak harus menyukai perilakunya, cukup cintai esensinya', duration: 12000 },
      { type: 'instruction', text: 'Biarkan cinta itu memenuhi ruang antara kalian...', duration: 10000 },
      { type: 'completion', text: 'Love Release selesai.', subtext: 'Cinta adalah penyembuh terbesar. Terus praktikkan.' },
      { type: 'insight', text: 'Insight tentang cinta:', placeholder: 'Tulis insight...' }
    ]
  },

  // Forgiveness Release
  'forgivenessRelease': {
    title: 'Forgiveness Release',
    description: 'Melepas dendam dan memaafkan sepenuhnya',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', duration: 8000 },
      { type: 'input', text: 'Siapa yang ingin kamu maafkan?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan orang itu di depanmu...', duration: 8000 },
      { type: 'input', text: 'Apa yang dia lakukan yang menyakitimu?', placeholder: 'Tuliskan kejadian/perbuatan' },
      { type: 'instruction', text: 'Rasakan rasa sakit itu...', subtext: 'Izinkan hadir sepenuhnya', duration: 12000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut rasa sakit itu?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Perhatikan: Memegang dendam seperti memegang bara api...', subtext: 'Yang terbakar adalah kamu sendiri', duration: 10000 },
      { type: 'instruction', text: 'Memaafkan bukan berarti membenarkan perbuatannya...', subtext: 'Tapi membebaskan DIRIMU dari ikatan itu', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN untuk membalas dendam?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Bisakah kamu melepas KEINGINAN agar dia menderita?', duration: 8000 },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang katakan dalam hati:', subtext: '"Aku melepaskanmu. Aku membebaskan diriku."', duration: 12000 },
      { type: 'instruction', text: 'Bayangkan tali yang mengikatmu dengan orang itu...', subtext: 'Tali dendam, sakit hati, kemarahan', duration: 10000 },
      { type: 'instruction', text: 'Sekarang POTONG tali itu...', subtext: 'Biarkan pergi', duration: 10000 },
      { type: 'instruction', text: 'Kamu BEBAS. Dia BEBAS.', duration: 8000 },
      { type: 'completion', text: 'Forgiveness Release selesai.', subtext: 'Memaafkan adalah hadiah terbesar untuk dirimu sendiri.' },
      { type: 'insight', text: 'Insight tentang memaafkan:', placeholder: 'Tulis insight...' }
    ]
  },

  // Mirror Technique
  'mirrorTechnique': {
    title: 'Mirror Technique',
    description: 'Melihat diri sendiri di orang lain',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', duration: 8000 },
      { type: 'input', text: 'Siapa yang membuatmu terganggu?', placeholder: 'Nama orang' },
      { type: 'input', text: 'Sifat/perilaku APA yang paling mengganggumu dari orang itu?', placeholder: 'Contoh: Egois, pemarah, tidak jujur, dll' },
      { type: 'instruction', text: 'Sekarang perhatikan dengan jujur...', subtext: 'Ini mungkin tidak nyaman', duration: 8000 },
      { type: 'instruction', text: 'Apakah sifat itu JUGA ada di dalam dirimu?', subtext: 'Mungkin dalam bentuk yang berbeda', duration: 12000 },
      { type: 'instruction', text: 'Orang lain adalah CERMIN...', subtext: 'Yang kita tolak di luar sering adalah yang kita tolak di dalam', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melihat bahwa sifat itu juga ada di dirimu?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Bisakah kamu menyambut bagian dirimu yang memiliki sifat itu?', subtext: 'Tanpa menghakimi', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menerima bagian itu dari dirimu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepas PENOLAKAN terhadap bagian itu?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang lihat orang itu lagi...', subtext: 'Bagaimana perasaanmu sekarang?', duration: 10000 },
      { type: 'instruction', text: 'Dengan menerima bagian itu di dirimu...', subtext: 'Kamu juga menerima orang itu', duration: 10000 },
      { type: 'completion', text: 'Mirror Technique selesai.', subtext: 'Setiap orang adalah guru yang mengajarkan kita tentang diri sendiri.' },
      { type: 'insight', text: 'Insight tentang cermin:', placeholder: 'Tulis insight...' }
    ]
  },

  // ==================== POST-CLEAN UP ====================

  // Final Forgiveness
  'finalForgiveness': {
    title: 'Final Forgiveness',
    description: 'Ritual memaafkan dengan sepenuh hati',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam dan panjang...', duration: 10000 },
      { type: 'input', text: 'Siapa yang kamu maafkan dengan sepenuh hati?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan orang itu berdiri di depanmu...', subtext: 'Lihat wajahnya, matanya', duration: 10000 },
      { type: 'instruction', text: 'Katakan dalam hati:', duration: 4000 },
      { type: 'instruction', text: '"[Nama], aku memaafkanmu untuk semua yang telah terjadi."', duration: 10000 },
      { type: 'instruction', text: '"Aku melepaskan semua dendam, sakit hati, dan kemarahan."', duration: 10000 },
      { type: 'instruction', text: '"Aku membebaskanmu dan aku membebaskan diriku."', duration: 10000 },
      { type: 'instruction', text: '"Memaafkanmu bukan berarti aku setuju dengan perbuatanmu."', duration: 10000 },
      { type: 'instruction', text: '"Tapi aku memilih untuk tidak lagi membawa beban ini."', duration: 10000 },
      { type: 'instruction', text: '"Aku mendoakan kebaikan untukmu."', duration: 10000 },
      { type: 'instruction', text: '"Dan aku bergerak maju dengan hati yang ringan."', duration: 10000 },
      { type: 'instruction', text: 'Bayangkan cahaya putih menyelimuti kalian berdua...', subtext: 'Cahaya pengampunan dan kedamaian', duration: 12000 },
      { type: 'instruction', text: 'Biarkan orang itu pergi dengan damai...', subtext: 'Dia bebas, kamu bebas', duration: 10000 },
      { type: 'completion', text: 'Final Forgiveness selesai.', subtext: 'Kamu telah memberikan hadiah terbesar untuk dirimu sendiri - kebebasan.' },
      { type: 'insight', text: 'Perasaan setelah memaafkan:', placeholder: 'Tulis perasaanmu...' }
    ]
  },

  // Sending Love
  'sendingLove': {
    title: 'Sending Love',
    description: 'Mengirim cinta ke orang tersebut',
    steps: [
      { type: 'instruction', text: 'Stop dulu... duduk dengan nyaman...', duration: 8000 },
      { type: 'input', text: 'Siapa yang ingin kamu kirimi cinta?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan orang itu di depanmu...', duration: 8000 },
      { type: 'instruction', text: 'Sekarang rasakan CINTA di dalam hatimu...', subtext: 'Cinta yang murni, tanpa syarat', duration: 10000 },
      { type: 'instruction', text: 'Bayangkan cinta itu sebagai cahaya merah muda di hatimu...', duration: 10000 },
      { type: 'instruction', text: 'Biarkan cahaya itu TUMBUH dan MELUAS...', duration: 10000 },
      { type: 'instruction', text: 'Sekarang KIRIM cahaya cinta itu ke orang tersebut...', subtext: 'Dari hatimu ke hatinya', duration: 12000 },
      { type: 'instruction', text: 'Bayangkan cinta itu menyelimutinya...', subtext: 'Memberi kedamaian, penyembuhan, kebahagiaan', duration: 12000 },
      { type: 'instruction', text: 'Katakan dalam hati: "Aku mengirim cinta kepadamu."', duration: 8000 },
      { type: 'instruction', text: '"Semoga kamu bahagia."', duration: 6000 },
      { type: 'instruction', text: '"Semoga kamu damai."', duration: 6000 },
      { type: 'instruction', text: '"Semoga kamu terbebas dari penderitaan."', duration: 8000 },
      { type: 'instruction', text: 'Biarkan cinta terus mengalir...', subtext: 'Tanpa mengharapkan apapun kembali', duration: 10000 },
      { type: 'completion', text: 'Sending Love selesai.', subtext: 'Cinta yang dikirim akan kembali berlipat ganda.' },
      { type: 'insight', text: 'Perasaan setelah mengirim cinta:', placeholder: 'Tulis perasaanmu...' }
    ]
  },

  // Completion Letter
  'completionLetter': {
    title: 'Completion Letter',
    description: 'Menulis surat penutupan (tidak dikirim)',
    steps: [
      { type: 'instruction', text: 'Stop dulu... siapkan dirimu...', subtext: 'Ini adalah proses yang powerful', duration: 8000 },
      { type: 'input', text: 'Kepada siapa surat ini ditujukan?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Kamu akan menulis surat yang TIDAK akan dikirim...', subtext: 'Ini untuk proses pelepasanmu sendiri', duration: 10000 },
      { type: 'input', text: 'Apa yang INGIN kamu katakan tapi tidak pernah terucap?', subtext: 'Tuliskan dengan jujur, tanpa sensor', placeholder: 'Tulis apa yang ada di hati...' },
      { type: 'instruction', text: 'Sekarang tuliskan apa yang kamu RASAKAN...', duration: 6000 },
      { type: 'input', text: 'Perasaan yang ingin kamu ungkapkan:', placeholder: 'Marah karena..., Sedih karena..., Kecewa karena...' },
      { type: 'instruction', text: 'Sekarang tuliskan apa yang kamu BUTUHKAN darinya (dulu)...', duration: 6000 },
      { type: 'input', text: 'Yang kamu butuhkan:', placeholder: 'Aku butuh kamu untuk...' },
      { type: 'instruction', text: 'Sekarang tuliskan PELEPASAN...', duration: 6000 },
      { type: 'input', text: 'Pelepasanmu:', placeholder: 'Aku melepaskanmu dari... Aku memaafkan... Aku merelakan...' },
      { type: 'instruction', text: 'Terakhir, tuliskan HARAPAN atau DOA...', duration: 6000 },
      { type: 'input', text: 'Harapan/doa:', placeholder: 'Aku mendoakan... Semoga kamu...' },
      { type: 'instruction', text: 'Surat sudah selesai...', subtext: 'Baca ulang dalam hati jika mau', duration: 10000 },
      { type: 'instruction', text: 'Bayangkan kamu MELEPASKAN surat ini ke alam semesta...', subtext: 'Biarkan energinya pergi', duration: 10000 },
      { type: 'completion', text: 'Completion Letter selesai.', subtext: 'Kamu tidak perlu mengirim surat ini. Prosesnya sudah selesai di dalam dirimu.' },
      { type: 'insight', text: 'Perasaan setelah menulis surat:', placeholder: 'Tulis perasaanmu...' }
    ]
  },

  // Gratitude Release
  'gratitudeRelease': {
    title: 'Gratitude Release',
    description: 'Menemukan hal yang bisa disyukuri dari orang tersebut',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', duration: 8000 },
      { type: 'input', text: 'Siapa orangnya?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Mungkin ini terasa sulit...', subtext: 'Tapi setiap orang mengajarkan sesuatu', duration: 10000 },
      { type: 'instruction', text: 'Pikirkan: Apa yang kamu PELAJARI dari hubungan dengan orang ini?', duration: 10000 },
      { type: 'input', text: 'Pelajaran yang kamu dapat:', placeholder: 'Contoh: Belajar boundaries, belajar mandiri, dll' },
      { type: 'instruction', text: 'Bagaimana pengalaman ini membuatmu LEBIH KUAT atau BIJAK?', duration: 10000 },
      { type: 'input', text: 'Kekuatan/kebijaksanaan yang kamu dapat:', placeholder: 'Contoh: Lebih mengenal diri, lebih tegas, dll' },
      { type: 'instruction', text: 'Apakah ada HAL BAIK yang pernah dilakukan orang ini untukmu?', subtext: 'Sekecil apapun', duration: 10000 },
      { type: 'input', text: 'Hal baik yang pernah dia lakukan:', placeholder: 'Jika ada...' },
      { type: 'instruction', text: 'Sekarang coba rasakan SYUKUR...', subtext: 'Untuk pelajaran, pertumbuhan, atau kebaikan sekecil apapun', duration: 10000 },
      { type: 'instruction', text: 'Katakan dalam hati: "Terima kasih untuk pelajaran ini."', duration: 8000 },
      { type: 'instruction', text: '"Terima kasih telah membuatku lebih kuat."', duration: 8000 },
      { type: 'instruction', text: '"Aku bersyukur bisa bertumbuh dari pengalaman ini."', duration: 8000 },
      { type: 'yesno', text: 'Bisakah kamu melepas RESISTENSI untuk bersyukur?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'completion', text: 'Gratitude Release selesai.', subtext: 'Syukur mengubah energi dari negatif ke positif.' },
      { type: 'insight', text: 'Insight tentang syukur:', placeholder: 'Tulis insight...' }
    ]
  },

  // ==================== ADDITIONAL DIMENSIONS ====================

  // Clean Up by Situation
  'cleanUpSituation': {
    title: 'Clean Up Situasi/Kejadian',
    description: 'Membersihkan resistensi terhadap kejadian spesifik',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', duration: 8000 },
      { type: 'input', text: 'Situasi/kejadian apa yang ingin kamu clean up?', placeholder: 'Deskripsikan kejadian spesifik' },
      { type: 'input', text: 'Siapa yang terlibat dalam kejadian ini?', placeholder: 'Nama orang-orang yang terlibat' },
      { type: 'instruction', text: 'Bayangkan kejadian itu seperti film...', subtext: 'Kamu menontonnya dari luar', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan emosi apa yang muncul...', duration: 10000 },
      { type: 'input', text: 'Emosi yang muncul:', placeholder: 'Marah, sedih, malu, takut, dll' },
      { type: 'yesno', text: 'Bisakah kamu menyambut emosi itu?', highlight: 'Bisa' },
      { type: 'instruction', text: 'CONTROL: Apakah ada keinginan untuk mengontrol situasi itu?', duration: 8000 },
      { type: 'yesno', text: 'Bisakah melepas keinginan untuk mengontrol?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'APPROVAL: Apakah ada keinginan akan persetujuan dalam situasi itu?', duration: 8000 },
      { type: 'yesno', text: 'Bisakah melepas keinginan akan approval?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'SECURITY: Apakah ada ketakutan/keinginan akan keamanan?', duration: 8000 },
      { type: 'yesno', text: 'Bisakah melepas keinginan akan security?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'SEPARATION: Apakah ada keinginan untuk merasa berbeda/lebih baik?', duration: 8000 },
      { type: 'yesno', text: 'Bisakah melepas keinginan akan separation?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang lihat film kejadian itu lagi...', subtext: 'Bagaimana perasaanmu sekarang?', duration: 10000 },
      { type: 'completion', text: 'Clean Up Situasi selesai.', subtext: 'Ulangi jika masih ada resistensi.' },
      { type: 'insight', text: 'Insight tentang situasi ini:', placeholder: 'Tulis insight...' }
    ]
  },

  // Clean Up Past Version
  'cleanUpPast': {
    title: 'Clean Up Versi Masa Lalu',
    description: 'Membersihkan resistensi terhadap versi masa lalu seseorang',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', duration: 8000 },
      { type: 'input', text: 'Siapa orangnya?', placeholder: 'Nama orang' },
      { type: 'input', text: 'Kapan periode waktu yang ingin kamu clean up?', placeholder: 'Contoh: Saat aku kecil, 10 tahun lalu, saat pacaran, dll' },
      { type: 'instruction', text: 'Bayangkan orang itu di WAKTU itu...', subtext: 'Versi masa lalu dia', duration: 10000 },
      { type: 'instruction', text: 'Ingat bahwa DIA di waktu itu berbeda dengan DIA sekarang...', subtext: 'Orang berubah seiring waktu', duration: 10000 },
      { type: 'instruction', text: 'Perhatikan emosi apa yang muncul terhadap versi masa lalu dia...', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut emosi itu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Bisakah kamu melepaskan emosi terhadap versi masa lalu dia?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Katakan: "Aku melepaskan versi masa lalu kamu."', duration: 8000 },
      { type: 'instruction', text: '"Kamu di waktu itu melakukan yang terbaik dengan kesadaranmu saat itu."', duration: 10000 },
      { type: 'instruction', text: '"Aku tidak lagi menghakimi kamu berdasarkan masa lalu."', duration: 10000 },
      { type: 'instruction', text: 'Bayangkan versi masa lalu dia LARUT dan PERGI...', duration: 10000 },
      { type: 'instruction', text: 'Yang tersisa hanya SAAT INI...', duration: 8000 },
      { type: 'completion', text: 'Clean Up Versi Masa Lalu selesai.', subtext: 'Masa lalu tidak bisa diubah, tapi responsmu bisa.' },
      { type: 'insight', text: 'Insight:', placeholder: 'Tulis insight...' }
    ]
  },

  // Clean Up Future Expectations
  'cleanUpFuture': {
    title: 'Clean Up Ekspektasi Masa Depan',
    description: 'Membersihkan ekspektasi dan proyeksi terhadap orang tersebut',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', duration: 8000 },
      { type: 'input', text: 'Siapa orangnya?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Pikirkan tentang MASA DEPAN dengan orang ini...', duration: 8000 },
      { type: 'input', text: 'Apa EKSPEKTASI yang kamu punya tentang orang ini?', placeholder: 'Contoh: Berharap dia berubah, takut dia mengulangi, dll' },
      { type: 'instruction', text: 'Perhatikan: Ekspektasi adalah RESISTENSI terhadap apa yang mungkin terjadi...', duration: 10000 },
      { type: 'instruction', text: 'Ekspektasi positif = attachment pada hasil tertentu', duration: 8000 },
      { type: 'instruction', text: 'Ekspektasi negatif = ketakutan akan hasil tertentu', duration: 8000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut ekspektasi itu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Bisakah kamu melepas ekspektasi terhadap orang ini?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Katakan: "Aku melepaskan semua ekspektasi."', duration: 8000 },
      { type: 'instruction', text: '"Aku membiarkan dia menjadi siapapun dia."', duration: 8000 },
      { type: 'instruction', text: '"Aku tidak perlu mengontrol masa depan."', duration: 8000 },
      { type: 'instruction', text: 'Bagaimana jika masa depan sudah SEMPURNA apa adanya?', subtext: 'Apapun yang terjadi', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menerima apapun yang akan terjadi?', highlight: 'Bisa' },
      { type: 'completion', text: 'Clean Up Ekspektasi selesai.', subtext: 'Dengan melepas ekspektasi, kamu mendapat kebebasan.' },
      { type: 'insight', text: 'Insight:', placeholder: 'Tulis insight...' }
    ]
  },

  // ==================== MAINTENANCE TOOLS ====================

  // Daily Love Sending (Quick)
  'dailyLove': {
    title: 'Daily Love Sending',
    description: 'Kirim cinta singkat setiap hari',
    steps: [
      { type: 'instruction', text: 'Tarik napas dalam...', duration: 6000 },
      { type: 'input', text: 'Kepada siapa kamu mengirim cinta hari ini?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan cinta di hatimu...', duration: 6000 },
      { type: 'instruction', text: 'Kirim ke orang itu...', subtext: '"Aku mengirim cinta kepadamu"', duration: 8000 },
      { type: 'instruction', text: '"Semoga kamu bahagia dan damai"', duration: 6000 },
      { type: 'completion', text: 'Cinta terkirim!', subtext: 'Lakukan setiap hari untuk menjaga hubungan bersih.' }
    ]
  },

  // Quick Check-in
  'quickCheckIn': {
    title: 'Quick Check-in',
    description: 'Cek singkat apakah masih ada resistensi',
    steps: [
      { type: 'instruction', text: 'Stop sejenak...', duration: 4000 },
      { type: 'input', text: 'Siapa yang ingin kamu cek?', placeholder: 'Nama orang' },
      { type: 'instruction', text: 'Bayangkan orang itu sekilas...', duration: 6000 },
      { type: 'instruction', text: 'Perhatikan tubuhmu - ada ketegangan?', duration: 6000 },
      { type: 'choice', text: 'Bagaimana perasaanmu sekarang terhadap orang ini?', options: ['😊 Netral/Damai', '😐 Sedikit terganggu', '😤 Masih ada resistensi'] },
      { type: 'instruction', text: 'Jika masih ada resistensi, lakukan clean up lebih lanjut...', duration: 6000 },
      { type: 'completion', text: 'Check-in selesai.', subtext: 'Jika masih ada resistensi, pilih teknik clean up yang sesuai.' }
    ]
  },

  // ==================== COMPLETE CLEAN UP SESSION ====================
  'completeSession': {
    title: 'Complete Clean Up Session',
    description: 'Sesi clean up lengkap dari awal sampai akhir',
    steps: [
      // Pre-Clean Up
      { type: 'instruction', text: '=== FASE 1: PERSIAPAN ===', duration: 4000 },
      { type: 'instruction', text: 'Duduk nyaman, tutup mata jika mau...', duration: 6000 },
      { type: 'breathing', text: 'Tarik napas dalam... 4 detik', duration: 4000 },
      { type: 'breathing', text: 'Tahan... 4 detik', duration: 4000 },
      { type: 'breathing', text: 'Hembuskan... 6 detik', duration: 6000 },
      { type: 'input', text: 'Siapa yang akan kamu clean up?', placeholder: 'Nama orang' },
      { type: 'input', text: 'Emosi utama apa yang muncul?', placeholder: 'Marah, sedih, kecewa, takut, dll' },

      // 4 Wanting Release (Simplified)
      { type: 'instruction', text: '=== FASE 2: 4 WANTING RELEASE ===', duration: 4000 },
      { type: 'instruction', text: 'CONTROL - Keinginan mengontrol orang ini...', duration: 6000 },
      { type: 'yesno', text: 'Bisakah melepas keinginan untuk mengontrol?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'APPROVAL - Keinginan akan persetujuan dari orang ini...', duration: 6000 },
      { type: 'yesno', text: 'Bisakah melepas keinginan akan approval?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'SECURITY - Ketakutan/keinginan akan keamanan terkait orang ini...', duration: 6000 },
      { type: 'yesno', text: 'Bisakah melepas keinginan akan security?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'SEPARATION - Keinginan merasa berbeda/lebih baik dari orang ini...', duration: 6000 },
      { type: 'yesno', text: 'Bisakah melepas keinginan akan separation?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },

      // Love & Forgiveness
      { type: 'instruction', text: '=== FASE 3: CINTA & MAAF ===', duration: 4000 },
      { type: 'instruction', text: 'Lihat orang ini dengan cinta...', subtext: 'Dia juga manusia yang ingin bahagia', duration: 10000 },
      { type: 'instruction', text: 'Katakan: "Aku memaafkanmu."', duration: 8000 },
      { type: 'instruction', text: '"Aku melepaskanmu."', duration: 6000 },
      { type: 'instruction', text: '"Aku membebaskan diriku."', duration: 6000 },
      { type: 'instruction', text: 'Kirim cinta dari hatimu ke hatinya...', duration: 10000 },

      // Completion
      { type: 'instruction', text: '=== FASE 4: PENYELESAIAN ===', duration: 4000 },
      { type: 'instruction', text: 'Bagaimana perasaanmu sekarang terhadap orang ini?', duration: 10000 },
      { type: 'instruction', text: 'Tarik napas dalam sekali lagi...', duration: 6000 },
      { type: 'instruction', text: 'Kamu telah melakukan clean up yang powerful.', duration: 6000 },
      { type: 'completion', text: 'Complete Clean Up Session selesai!', subtext: 'Ulangi sampai benar-benar bersih. Setiap sesi membawa kemajuan.' },
      { type: 'insight', text: 'Insight dari sesi ini:', placeholder: 'Tulis insight...' }
    ]
  }
};

// ==================== CLEANUP QUOTES ====================
const cleanupQuotes = [
  { text: "Memaafkan adalah memberikan hadiah untuk dirimu sendiri.", author: "Coach Lia" },
  { text: "Yang kamu tolak di orang lain adalah yang kamu tolak di dirimu.", author: "Coach Lia" },
  { text: "Clean up bukan untuk orang lain, tapi untuk kebebasanmu.", author: "Coach Lia" },
  { text: "Setiap orang adalah guru yang mengajarkan sesuatu.", author: "Lester Levenson" },
  { text: "Cinta adalah pembersih paling powerful.", author: "Coach Lia" },
  { text: "Dendam adalah racun yang kamu minum sendiri.", author: "Coach Lia" },
  { text: "Orang lain adalah cermin dirimu.", author: "Coach Lia" },
  { text: "Melepaskan bukan berarti menyetujui.", author: "Lester Levenson" },
  { text: "Kebebasan sejati adalah tidak bereaksi.", author: "Coach Lia" },
  { text: "Kirim cinta, terima cinta. Sesederhana itu.", author: "Lester Levenson" }
];

// ==================== INITIALIZE SCRIPTS ====================
function initCleanupScripts() {
  if (typeof ReleasingEngine !== 'undefined') {
    Object.keys(cleanupScripts).forEach(function(key) {
      ReleasingEngine.getScripts()[key] = cleanupScripts[key];
    });
    console.log('Cleanup scripts loaded:', Object.keys(cleanupScripts).length);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCleanupScripts);
} else {
  initCleanupScripts();
}

// ==================== START ADVANCED CLEANUP FUNCTION ====================
function startAdvancedCleanup(scriptId) {
  if (typeof ReleasingEngine !== 'undefined') {
    if (!ReleasingEngine.getScript(scriptId)) {
      ReleasingEngine.getScripts()[scriptId] = cleanupScripts[scriptId];
    }

    ReleasingEngine.init({
      onComplete: function(result) {
        showToast('Sesi ' + cleanupScripts[scriptId].title + ' selesai!', 'success');
      }
    });

    ReleasingEngine.startReleasing(scriptId);
  } else {
    showToast('ReleasingEngine tidak tersedia', 'error');
  }
}
