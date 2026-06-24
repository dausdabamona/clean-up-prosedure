// ============================================================================
// 9 EMOSI DASAR - Release & Expansion Techniques
// ============================================================================

// ==================== GUIDED SCRIPTS ====================
const emosiScripts = {
  // ==================== EMOSI NEGATIF (DILEPAS) ====================

  // 1. APATI (Apathy) - Emosi Terendah
  'apati': {
    title: 'Melepas Apati',
    description: 'Apati adalah perasaan tidak berdaya, putus asa, "tidak bisa"',
    type: 'negative',
    steps: [
      { type: 'instruction', text: 'Stop dulu sebentar... tarik napas dalam...', subtext: 'Biarkan tubuh rileks', duration: 8000 },
      { type: 'instruction', text: 'Apati adalah perasaan "Aku tidak bisa", "Tidak ada gunanya", "Aku menyerah"...', subtext: 'Perasaan terberat yang membuat kita merasa tidak berdaya', duration: 10000 },
      { type: 'input', text: 'Di area mana dalam hidupmu kamu merasa APATIS?', subtext: 'Merasa tidak berdaya, menyerah, tidak ada harapan', placeholder: 'Contoh: Karir, kesehatan, hubungan, keuangan...' },
      { type: 'instruction', text: 'Izinkan perasaan apati itu HADIR sepenuhnya...', subtext: 'Jangan dilawan, jangan ditekan. Biarkan saja ada.', duration: 10000 },
      { type: 'instruction', text: 'Rasakan di mana APATI itu berada di tubuhmu...', subtext: 'Mungkin di dada, perut, atau seluruh tubuh terasa berat', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut perasaan apati ini?', subtext: 'Mengizinkannya hadir tanpa perlawanan', highlight: 'Bisa' },
      { type: 'instruction', text: 'Perhatikan - apakah ada KEINGINAN untuk tetap apatis?', subtext: 'Kadang apati terasa "aman" karena tidak perlu berusaha', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN untuk tetap apatis?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang tarik napas dalam...', subtext: 'Dan saat menghembuskan, bayangkan apati itu keluar bersama napas', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas perasaan apati itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Biarkan apati itu PERGI...', subtext: 'Seperti awan gelap yang bergerak meninggalkan langit', duration: 10000 },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Perhatikan... mungkin ada sedikit lebih ringan? Sedikit lebih terbuka?', duration: 10000 },
      { type: 'completion', text: 'Bagus! Kamu telah melepas sebagian apati.', subtext: 'Ulangi proses ini sampai apati benar-benar terangkat. Setiap kali melepas, kamu naik ke emosi yang lebih tinggi.' },
      { type: 'insight', text: 'Insight tentang apati ini:', placeholder: 'Tulis insight...' }
    ]
  },

  // 2. KESEDIHAN (Grief)
  'kesedihan': {
    title: 'Melepas Kesedihan',
    description: 'Kesedihan adalah perasaan kehilangan, duka, dan keputusasaan',
    type: 'negative',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', subtext: 'Biarkan diri hadir di sini', duration: 8000 },
      { type: 'instruction', text: 'Kesedihan adalah perasaan kehilangan, duka, keputusasaan...', subtext: 'Lebih tinggi dari apati karena setidaknya ada perasaan', duration: 10000 },
      { type: 'input', text: 'Apa yang membuatmu SEDIH?', subtext: 'Bisa berupa kehilangan, kekecewaan, atau kerinduan', placeholder: 'Contoh: Kehilangan seseorang, mimpi yang tidak tercapai...' },
      { type: 'instruction', text: 'Izinkan kesedihan itu HADIR sepenuhnya...', subtext: 'Tidak apa-apa untuk merasakan sedih. Biarkan air mata mengalir jika perlu.', duration: 12000 },
      { type: 'instruction', text: 'Rasakan di mana kesedihan itu berada di tubuhmu...', subtext: 'Mungkin di dada, tenggorokan, atau mata', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut kesedihan ini?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Kesedihan sering berkaitan dengan KEINGINAN akan sesuatu yang tidak ada...', subtext: 'Atau PENOLAKAN terhadap apa yang sudah terjadi', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN akan apa yang tidak ada?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Tarik napas dalam... dan saat menghembuskan...', subtext: 'Biarkan kesedihan itu mengalir keluar', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas kesedihan itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Biarkan kesedihan itu PERGI...', subtext: 'Seperti air yang mengalir, membawa serta beban', duration: 10000 },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Perhatikan... mungkin ada keringanan? Penerimaan?', duration: 10000 },
      { type: 'completion', text: 'Bagus! Kamu telah melepas sebagian kesedihan.', subtext: 'Melepas kesedihan bukan berarti melupakan. Justru kamu bisa mengingat dengan lebih damai.' },
      { type: 'insight', text: 'Insight tentang kesedihan ini:', placeholder: 'Tulis insight...' }
    ]
  },

  // 3. KETAKUTAN (Fear)
  'ketakutan': {
    title: 'Melepas Ketakutan',
    description: 'Ketakutan adalah kecemasan, khawatir, dan panik tentang masa depan',
    type: 'negative',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam dan perlahan...', subtext: 'Biarkan tubuh rileks', duration: 8000 },
      { type: 'instruction', text: 'Ketakutan adalah proyeksi ke masa depan...', subtext: 'Membayangkan hal buruk yang MUNGKIN terjadi', duration: 10000 },
      { type: 'input', text: 'Apa yang kamu TAKUTKAN?', subtext: 'Bisa berupa ketakutan nyata atau khayalan', placeholder: 'Contoh: Takut gagal, takut ditolak, takut sakit...' },
      { type: 'instruction', text: 'Izinkan ketakutan itu HADIR...', subtext: 'Jangan dilawan. Rasakan sepenuhnya.', duration: 10000 },
      { type: 'instruction', text: 'Rasakan di mana ketakutan itu berada di tubuhmu...', subtext: 'Mungkin di perut, dada, atau kepala', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut ketakutan ini?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Tanyakan pada diri sendiri: Apakah yang ditakutkan sedang terjadi SEKARANG?', subtext: 'Atau hanya dalam pikiran?', duration: 10000 },
      { type: 'instruction', text: 'Ketakutan adalah KEINGINAN untuk merasa aman...', subtext: 'Wanting security yang berlebihan', duration: 8000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN untuk merasa aman dari hal ini?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Tarik napas dalam...', subtext: 'Dan hembuskan ketakutan itu keluar', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas ketakutan itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Biarkan ketakutan itu PERGI...', subtext: 'Seperti bayangan yang menghilang saat cahaya datang', duration: 10000 },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Perhatikan... mungkin ada ketenangan? Keberanian?', duration: 10000 },
      { type: 'completion', text: 'Bagus! Kamu telah melepas sebagian ketakutan.', subtext: 'Di balik ketakutan selalu ada keberanian. Kamu sudah selangkah lebih berani.' },
      { type: 'insight', text: 'Insight tentang ketakutan ini:', placeholder: 'Tulis insight...' }
    ]
  },

  // 4. NAFSU/KEINGINAN (Lust)
  'nafsu': {
    title: 'Melepas Nafsu/Keinginan',
    description: 'Nafsu adalah keinginan kuat yang memperbudak, craving, obsesi',
    type: 'negative',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', subtext: 'Biarkan diri hadir', duration: 8000 },
      { type: 'instruction', text: 'Nafsu adalah keinginan yang MEMPERBUDAK...', subtext: 'Craving, obsesi, "harus punya" yang membuat tidak tenang', duration: 10000 },
      { type: 'input', text: 'Apa yang sangat kamu INGINKAN sampai memperbudak?', subtext: 'Bisa berupa benda, orang, pengalaman, atau status', placeholder: 'Contoh: Uang, pasangan, makanan tertentu, validasi...' },
      { type: 'instruction', text: 'Izinkan keinginan itu HADIR...', subtext: 'Rasakan intensitasnya', duration: 10000 },
      { type: 'instruction', text: 'Rasakan di mana keinginan itu berada di tubuhmu...', subtext: 'Mungkin di dada, perut, atau kepala', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut keinginan ini?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Perhatikan: Apakah mendapatkan hal itu akan membuatmu BENAR-BENAR puas?', subtext: 'Atau akan muncul keinginan baru?', duration: 10000 },
      { type: 'instruction', text: 'Nafsu adalah KELANGKAAN dalam menyamar...', subtext: 'Pikiran bahwa kamu KURANG tanpa hal itu', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN akan hal itu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Tarik napas dalam...', subtext: 'Dan hembuskan keinginan yang memperbudak itu', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas nafsu/craving itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Biarkan keinginan itu PERGI...', subtext: 'Kamu tetap utuh tanpanya', duration: 10000 },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Perhatikan... mungkin ada kepuasan? Kecukupan?', duration: 10000 },
      { type: 'completion', text: 'Bagus! Kamu telah melepas sebagian nafsu.', subtext: 'Melepas keinginan bukan berarti tidak boleh punya. Justru dari tempat yang bebas, kamu bisa memilih dengan lebih bijak.' },
      { type: 'insight', text: 'Insight tentang keinginan ini:', placeholder: 'Tulis insight...' }
    ]
  },

  // 5. KEMARAHAN (Anger)
  'kemarahan': {
    title: 'Melepas Kemarahan',
    description: 'Kemarahan adalah frustrasi, dendam, dan ketidakpuasan',
    type: 'negative',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', subtext: 'Biarkan diri hadir', duration: 8000 },
      { type: 'instruction', text: 'Kemarahan adalah energi yang kuat...', subtext: 'Lebih tinggi dari ketakutan karena setidaknya ada tenaga untuk melawan', duration: 10000 },
      { type: 'input', text: 'Apa atau siapa yang membuatmu MARAH?', subtext: 'Bisa berupa orang, situasi, atau diri sendiri', placeholder: 'Contoh: Atasan, pasangan, pemerintah, diri sendiri...' },
      { type: 'instruction', text: 'Izinkan kemarahan itu HADIR...', subtext: 'Jangan ditekan. Rasakan intensitasnya.', duration: 10000 },
      { type: 'instruction', text: 'Rasakan di mana kemarahan itu berada di tubuhmu...', subtext: 'Mungkin di rahang, dada, tangan, atau perut', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut kemarahan ini?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Kemarahan adalah KEINGINAN untuk MENGONTROL...', subtext: 'Ingin sesuatu berbeda dari yang sekarang', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN untuk mengontrol situasi/orang itu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Tarik napas dalam...', subtext: 'Dan hembuskan kemarahan itu keluar', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas kemarahan itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Biarkan kemarahan itu PERGI...', subtext: 'Seperti api yang padam, meninggalkan kehangatan', duration: 10000 },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Perhatikan... mungkin ada ketenangan? Pengertian?', duration: 10000 },
      { type: 'completion', text: 'Bagus! Kamu telah melepas sebagian kemarahan.', subtext: 'Di balik kemarahan selalu ada cinta yang terluka. Melepas kemarahan membuka jalan untuk cinta.' },
      { type: 'insight', text: 'Insight tentang kemarahan ini:', placeholder: 'Tulis insight...' }
    ]
  },

  // 6. KEBANGGAAN/EGO (Pride)
  'kebanggaan': {
    title: 'Melepas Kebanggaan/Ego',
    description: 'Kebanggaan adalah ego, arogansi, dan merasa lebih dari orang lain',
    type: 'negative',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', subtext: 'Biarkan diri hadir', duration: 8000 },
      { type: 'instruction', text: 'Kebanggaan adalah emosi negatif tertinggi...', subtext: 'Terasa "baik" tapi sebenarnya memisahkan kamu dari orang lain', duration: 10000 },
      { type: 'input', text: 'Di area mana kamu merasa BANGGA berlebihan?', subtext: 'Merasa lebih baik, lebih benar, atau lebih layak dari orang lain', placeholder: 'Contoh: Prestasi, pengetahuan, status, penampilan...' },
      { type: 'instruction', text: 'Izinkan perasaan bangga itu HADIR...', subtext: 'Tanpa menghakimi diri sendiri', duration: 10000 },
      { type: 'instruction', text: 'Rasakan bagaimana kebanggaan itu terasa di tubuhmu...', subtext: 'Mungkin ada rasa superioritas di dada atau kepala', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu menyambut perasaan bangga ini?', highlight: 'Bisa' },
      { type: 'instruction', text: 'Kebanggaan adalah KEINGINAN untuk merasa TERPISAH dan LEBIH BAIK...', subtext: 'Wanting separation - ingin berbeda dari orang lain', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN untuk merasa lebih baik dari orang lain?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Tarik napas dalam...', subtext: 'Dan hembuskan kebanggaan yang memisahkan itu', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas kebanggaan/ego itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Biarkan kebanggaan itu PERGI...', subtext: 'Meninggalkan kerendahan hati yang sejati', duration: 10000 },
      { type: 'instruction', text: 'Yang tersisa apa?', subtext: 'Perhatikan... mungkin ada koneksi? Kesetaraan?', duration: 10000 },
      { type: 'completion', text: 'Bagus! Kamu telah melepas sebagian kebanggaan.', subtext: 'Kerendahan hati sejati bukan merasa rendah, tapi merasa SETARA dengan semua makhluk.' },
      { type: 'insight', text: 'Insight tentang kebanggaan ini:', placeholder: 'Tulis insight...' }
    ]
  },

  // ==================== EMOSI POSITIF (DILEPAS & DIPENUHI) ====================

  // 7. KEBERANIAN (Courage)
  'keberanian': {
    title: 'Memenuhi Keberanian',
    description: 'Keberanian adalah kepercayaan diri, kesediaan untuk bertindak',
    type: 'positive',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', subtext: 'Biarkan diri hadir sepenuhnya', duration: 8000 },
      { type: 'instruction', text: 'Keberanian adalah emosi positif pertama dalam skala emosi...', subtext: 'Dari sini, kita mulai MENCIPTAKAN bukan hanya bereaksi', duration: 10000 },
      { type: 'instruction', text: 'Rasakan KEBERANIAN yang sudah ada di dalam dirimu...', subtext: 'Kepercayaan diri, kesediaan untuk menghadapi apapun', duration: 10000 },
      { type: 'instruction', text: 'Biarkan keberanian itu TUMBUH di hatimu...', subtext: 'Rasakan kehangatan dan kekuatan di dada', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas apapun yang MENGHALANGI keberanian?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang biarkan keberanian itu MEMENUHI seluruh HATI...', duration: 10000 },
      { type: 'instruction', text: 'Biarkan keberanian MENYEBAR ke seluruh TUBUH...', subtext: 'Dari kepala sampai ujung kaki', duration: 10000 },
      { type: 'instruction', text: 'Biarkan keberanian MEMENUHI JIWA...', subtext: 'Esensi terdalam dirimu', duration: 10000 },
      { type: 'instruction', text: 'Sekarang biarkan keberanian MEMANCAR keluar...', subtext: 'Memenuhi RUMAH tempat kamu tinggal', duration: 10000 },
      { type: 'instruction', text: 'Biarkan keberanian terus MELUAS...', subtext: 'Memenuhi KANTOR atau tempat kerja', duration: 8000 },
      { type: 'instruction', text: 'Keberanian terus MENYEBAR...', subtext: 'Memenuhi KOMPLEKS, lingkungan sekitar', duration: 8000 },
      { type: 'instruction', text: 'Keberanian MELUAS...', subtext: 'Memenuhi seluruh KOTA', duration: 8000 },
      { type: 'instruction', text: 'Keberanian terus BERKEMBANG...', subtext: 'Memenuhi seluruh PROVINSI', duration: 8000 },
      { type: 'instruction', text: 'Keberanian MENYEBAR lebih jauh...', subtext: 'Memenuhi seluruh PULAU', duration: 8000 },
      { type: 'instruction', text: 'Keberanian terus MELUAS...', subtext: 'Memenuhi seluruh NEGARA', duration: 8000 },
      { type: 'instruction', text: 'Keberanian MENYEBAR ke seluruh DARAT dan LAUT...', duration: 8000 },
      { type: 'instruction', text: 'Dan akhirnya, keberanian MEMENUHI SELURUH ALAM SEMESTA...', subtext: 'Dari ujung ke ujung, tanpa batas', duration: 12000 },
      { type: 'instruction', text: 'Rasakan bahwa keberanian ini TIDAK TERBATAS...', subtext: 'Selalu tersedia, selalu ada', duration: 10000 },
      { type: 'completion', text: 'Selamat! Kamu telah memenuhi alam semesta dengan keberanian.', subtext: 'Keberanian ini selalu ada di dalam dirimu. Kapan saja butuh, tinggal akses.' },
      { type: 'insight', text: 'Insight tentang keberanian:', placeholder: 'Tulis insight...' }
    ]
  },

  // 8. PENERIMAAN (Acceptance)
  'penerimaan': {
    title: 'Memenuhi Penerimaan',
    description: 'Penerimaan adalah damai dengan apa yang ada, tanpa perlawanan',
    type: 'positive',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', subtext: 'Biarkan diri hadir sepenuhnya', duration: 8000 },
      { type: 'instruction', text: 'Penerimaan adalah kondisi damai dengan APAPUN yang terjadi...', subtext: 'Bukan pasrah, tapi aktif menerima tanpa perlawanan', duration: 10000 },
      { type: 'instruction', text: 'Rasakan PENERIMAAN yang sudah ada di dalam dirimu...', subtext: 'Kedamaian, ketenangan, "ini sudah baik"', duration: 10000 },
      { type: 'instruction', text: 'Biarkan penerimaan itu TUMBUH di hatimu...', subtext: 'Rasakan ketenangan yang dalam', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas apapun yang MENGHALANGI penerimaan?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang biarkan penerimaan itu MEMENUHI seluruh HATI...', duration: 10000 },
      { type: 'instruction', text: 'Biarkan penerimaan MENYEBAR ke seluruh TUBUH...', subtext: 'Setiap sel menerima dengan damai', duration: 10000 },
      { type: 'instruction', text: 'Biarkan penerimaan MEMENUHI JIWA...', subtext: 'Inti terdalam dirimu', duration: 10000 },
      { type: 'instruction', text: 'Sekarang biarkan penerimaan MEMANCAR keluar...', subtext: 'Memenuhi RUMAH dengan kedamaian', duration: 10000 },
      { type: 'instruction', text: 'Biarkan penerimaan terus MELUAS...', subtext: 'Memenuhi KANTOR atau tempat kerja', duration: 8000 },
      { type: 'instruction', text: 'Penerimaan terus MENYEBAR...', subtext: 'Memenuhi KOMPLEKS, lingkungan sekitar', duration: 8000 },
      { type: 'instruction', text: 'Penerimaan MELUAS...', subtext: 'Memenuhi seluruh KOTA', duration: 8000 },
      { type: 'instruction', text: 'Penerimaan terus BERKEMBANG...', subtext: 'Memenuhi seluruh PROVINSI', duration: 8000 },
      { type: 'instruction', text: 'Penerimaan MENYEBAR lebih jauh...', subtext: 'Memenuhi seluruh PULAU', duration: 8000 },
      { type: 'instruction', text: 'Penerimaan terus MELUAS...', subtext: 'Memenuhi seluruh NEGARA', duration: 8000 },
      { type: 'instruction', text: 'Penerimaan MENYEBAR ke seluruh DARAT dan LAUT...', duration: 8000 },
      { type: 'instruction', text: 'Dan akhirnya, penerimaan MEMENUHI SELURUH ALAM SEMESTA...', subtext: 'Segala yang ada diterima dengan damai', duration: 12000 },
      { type: 'instruction', text: 'Rasakan bahwa penerimaan ini TIDAK TERBATAS...', subtext: 'Selalu tersedia, selalu ada', duration: 10000 },
      { type: 'completion', text: 'Selamat! Kamu telah memenuhi alam semesta dengan penerimaan.', subtext: 'Dari tempat penerimaan, segala sesuatu menjadi lebih mudah.' },
      { type: 'insight', text: 'Insight tentang penerimaan:', placeholder: 'Tulis insight...' }
    ]
  },

  // 9. KEDAMAIAN (Peace)
  'kedamaian': {
    title: 'Memenuhi Kedamaian',
    description: 'Kedamaian adalah ketenangan sempurna, keseimbangan, dan harmoni',
    type: 'positive',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam dan perlahan...', subtext: 'Biarkan diri hadir sepenuhnya', duration: 10000 },
      { type: 'instruction', text: 'Kedamaian adalah emosi tertinggi dalam skala emosi...', subtext: 'Ketenangan sempurna, tidak terganggu oleh apapun', duration: 10000 },
      { type: 'instruction', text: 'Rasakan KEDAMAIAN yang sudah ada di inti terdalam dirimu...', subtext: 'Selalu ada, tidak pernah pergi', duration: 12000 },
      { type: 'instruction', text: 'Biarkan kedamaian itu TUMBUH di hatimu...', subtext: 'Rasakan ketenangan yang sangat dalam', duration: 12000 },
      { type: 'yesno', text: 'Bisakah kamu melepas apapun yang MENGHALANGI kedamaian?', highlight: 'Bisa' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', text: 'Sekarang biarkan kedamaian itu MEMENUHI seluruh HATI...', subtext: 'Setiap ruang hati dipenuhi kedamaian', duration: 12000 },
      { type: 'instruction', text: 'Biarkan kedamaian MENYEBAR ke seluruh TUBUH...', subtext: 'Dari kepala, dada, perut, tangan, kaki...', duration: 12000 },
      { type: 'instruction', text: 'Biarkan kedamaian MEMENUHI JIWA...', subtext: 'Esensi terdalam, inti sejati dirimu', duration: 12000 },
      { type: 'instruction', text: 'Sekarang biarkan kedamaian MEMANCAR keluar...', subtext: 'Memenuhi RUMAH dengan ketenangan', duration: 10000 },
      { type: 'instruction', text: 'Biarkan kedamaian terus MELUAS...', subtext: 'Memenuhi KANTOR atau tempat kerja dengan harmoni', duration: 10000 },
      { type: 'instruction', text: 'Kedamaian terus MENYEBAR...', subtext: 'Memenuhi KOMPLEKS, lingkungan sekitar', duration: 10000 },
      { type: 'instruction', text: 'Kedamaian MELUAS...', subtext: 'Memenuhi seluruh KOTA dengan ketenangan', duration: 10000 },
      { type: 'instruction', text: 'Kedamaian terus BERKEMBANG...', subtext: 'Memenuhi seluruh PROVINSI', duration: 10000 },
      { type: 'instruction', text: 'Kedamaian MENYEBAR lebih jauh...', subtext: 'Memenuhi seluruh PULAU', duration: 10000 },
      { type: 'instruction', text: 'Kedamaian terus MELUAS...', subtext: 'Memenuhi seluruh NEGARA', duration: 10000 },
      { type: 'instruction', text: 'Kedamaian MENYEBAR ke seluruh DARAT dan LAUT...', subtext: 'Semua makhluk merasakan kedamaian', duration: 10000 },
      { type: 'instruction', text: 'Dan akhirnya, kedamaian MEMENUHI SELURUH ALAM SEMESTA...', subtext: 'Dari ujung ke ujung, tanpa batas, tanpa akhir', duration: 15000 },
      { type: 'instruction', text: 'Rasakan bahwa kedamaian ini adalah SIFAT SEJATI dirimu...', subtext: 'Tidak bisa hilang, tidak bisa berkurang', duration: 12000 },
      { type: 'instruction', text: 'Kamu ADALAH kedamaian itu sendiri...', duration: 10000 },
      { type: 'completion', text: 'Selamat! Kamu telah memenuhi alam semesta dengan kedamaian.', subtext: 'Kedamaian ini selalu tersedia. Kamu hanya perlu mengingat.' },
      { type: 'insight', text: 'Insight tentang kedamaian:', placeholder: 'Tulis insight...' }
    ]
  },

  // ==================== QUICK RELEASE - SEMUA EMOSI SEKALIGUS ====================
  'fullRelease': {
    title: 'Full Emotional Release',
    description: 'Melepas semua emosi negatif dan memenuhi dengan positif',
    steps: [
      { type: 'instruction', text: 'Stop dulu... tarik napas dalam...', duration: 8000 },
      { type: 'instruction', text: 'Rasakan apapun emosi yang sedang ada...', duration: 8000 },
      { type: 'instruction', text: 'APATI - lepaskan...', subtext: 'Perasaan tidak berdaya', duration: 8000 },
      { type: 'instruction', text: 'KESEDIHAN - lepaskan...', subtext: 'Duka dan kehilangan', duration: 8000 },
      { type: 'instruction', text: 'KETAKUTAN - lepaskan...', subtext: 'Kecemasan dan khawatir', duration: 8000 },
      { type: 'instruction', text: 'NAFSU - lepaskan...', subtext: 'Keinginan yang memperbudak', duration: 8000 },
      { type: 'instruction', text: 'KEMARAHAN - lepaskan...', subtext: 'Frustrasi dan dendam', duration: 8000 },
      { type: 'instruction', text: 'KEBANGGAAN - lepaskan...', subtext: 'Ego dan arogansi', duration: 8000 },
      { type: 'instruction', text: 'Sekarang, izinkan KEBERANIAN memenuhi...', duration: 8000 },
      { type: 'instruction', text: 'Izinkan PENERIMAAN memenuhi...', duration: 8000 },
      { type: 'instruction', text: 'Izinkan KEDAMAIAN memenuhi...', duration: 8000 },
      { type: 'instruction', text: 'Biarkan ketiga emosi positif itu MENYEBAR ke seluruh alam semesta...', duration: 12000 },
      { type: 'completion', text: 'Full Release selesai!', subtext: 'Lakukan ini secara rutin untuk menjaga kebersihan emosional.' }
    ]
  }
};

// ==================== QUOTES ====================
const emosiQuotes = [
  { text: "Emosi adalah energi yang ingin bergerak. Biarkan bergerak.", author: "Coach Lia" },
  { text: "Tidak ada emosi yang buruk. Hanya ada emosi yang belum dilepas.", author: "Lester Levenson" },
  { text: "Dari apati ke kedamaian, perjalananmu adalah naik.", author: "Coach Lia" },
  { text: "Ketakutan adalah keberanian yang belum dikenali.", author: "Coach Lia" },
  { text: "Kemarahan adalah cinta yang terluka.", author: "Coach Lia" },
  { text: "Kedamaian bukan tujuan. Kedamaian adalah sifat sejatimu.", author: "Lester Levenson" },
  { text: "Melepas emosi negatif membuka ruang untuk emosi positif.", author: "Coach Lia" },
  { text: "Penerimaan adalah pintu menuju kedamaian.", author: "Coach Lia" },
  { text: "Keberanian adalah merasakan takut dan tetap melangkah.", author: "Lester Levenson" },
  { text: "Semakin kamu melepas, semakin ringan hidupmu.", author: "Coach Lia" }
];

// ==================== PROGRESS TRACKING ====================
let emosiProgress = JSON.parse(localStorage.getItem('emosiDasarProgress')) || {
  apati: 0,
  kesedihan: 0,
  ketakutan: 0,
  nafsu: 0,
  kemarahan: 0,
  kebanggaan: 0,
  keberanian: 0,
  penerimaan: 0,
  kedamaian: 0,
  fullRelease: 0,
  totalSessions: 0
};

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
  // Rotate quote
  rotateEmosiQuote();
  setInterval(rotateEmosiQuote, 30000);

  // Render progress
  renderEmosiProgress();

  // Initialize ReleasingEngine with emosi scripts
  if (typeof ReleasingEngine !== 'undefined') {
    Object.keys(emosiScripts).forEach(function(key) {
      ReleasingEngine.getScripts()[key] = emosiScripts[key];
    });
  }
});

// ==================== QUOTE ROTATION ====================
function rotateEmosiQuote() {
  const randomIndex = Math.floor(Math.random() * emosiQuotes.length);
  const quote = emosiQuotes[randomIndex];

  const quoteText = document.getElementById('emosiQuoteText');
  const quoteAuthor = document.getElementById('emosiQuoteAuthor');

  if (quoteText && quoteAuthor) {
    quoteText.textContent = '"' + quote.text + '"';
    quoteAuthor.textContent = '— ' + quote.author;
  }
}

// ==================== START FUNCTIONS ====================
function startEmosi(emosiId) {
  if (typeof ReleasingEngine !== 'undefined') {
    // Add script if not exists
    if (!ReleasingEngine.getScript(emosiId)) {
      ReleasingEngine.getScripts()[emosiId] = emosiScripts[emosiId];
    }

    ReleasingEngine.init({
      onComplete: function(result) {
        emosiProgress[emosiId]++;
        emosiProgress.totalSessions++;
        saveEmosiProgress();
        renderEmosiProgress();
        showToast('Sesi ' + emosiScripts[emosiId].title + ' selesai!', 'success');
      }
    });

    ReleasingEngine.startReleasing(emosiId);
  } else {
    showToast('ReleasingEngine tidak tersedia', 'error');
  }
}

// ==================== PROGRESS ====================
function saveEmosiProgress() {
  localStorage.setItem('emosiDasarProgress', JSON.stringify(emosiProgress));
}

function renderEmosiProgress() {
  // Negative emotions
  const negativeGrid = document.getElementById('negativeProgressGrid');
  if (negativeGrid) {
    const negativeItems = [
      { id: 'apati', name: 'Apati' },
      { id: 'kesedihan', name: 'Sedih' },
      { id: 'ketakutan', name: 'Takut' },
      { id: 'nafsu', name: 'Nafsu' },
      { id: 'kemarahan', name: 'Marah' },
      { id: 'kebanggaan', name: 'Bangga' }
    ];

    negativeGrid.innerHTML = negativeItems.map(function(item) {
      return '<div class="progress-item">' +
        '<div class="count">' + (emosiProgress[item.id] || 0) + '</div>' +
        '<div class="label">' + item.name + '</div>' +
      '</div>';
    }).join('');
  }

  // Positive emotions
  const positiveGrid = document.getElementById('positiveProgressGrid');
  if (positiveGrid) {
    const positiveItems = [
      { id: 'keberanian', name: 'Berani' },
      { id: 'penerimaan', name: 'Terima' },
      { id: 'kedamaian', name: 'Damai' }
    ];

    positiveGrid.innerHTML = positiveItems.map(function(item) {
      return '<div class="progress-item">' +
        '<div class="count">' + (emosiProgress[item.id] || 0) + '</div>' +
        '<div class="label">' + item.name + '</div>' +
      '</div>';
    }).join('');
  }
}
