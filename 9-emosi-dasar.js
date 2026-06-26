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
      { type: 'instruction', text: 'Perhatikan - apakah ada KEINGINAN untuk tetap apatis?', subtext: 'Kadang apati terasa "aman" — sering terkait wanting Approval/Security (butuh diterima & merasa aman)', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN untuk tetap apatis?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', label: 'rel', text: 'Sekarang tarik napas dalam...', subtext: 'Dan saat menghembuskan, bayangkan apati itu keluar bersama napas', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas perasaan apati itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'intensity', text: 'Seberapa kuat apati terasa sekarang? (0–10)', store: 'i_apati' },
      { type: 'loop', text: 'Mau melepaskan lagi?', subtext: 'Kalau masih terasa (di atas 1), kita ulangi pelepasannya.', backTo: 'rel', whileVar: 'i_apati', whileGt: 1 },
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
      { type: 'instruction', text: 'Kesedihan sering berkaitan dengan KEINGINAN akan sesuatu yang tidak ada...', subtext: 'Atau penolakan terhadap apa yang sudah terjadi — biasanya wanting Approval/Security', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN akan apa yang tidak ada?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', label: 'rel', text: 'Tarik napas dalam... dan saat menghembuskan...', subtext: 'Biarkan kesedihan itu mengalir keluar', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas kesedihan itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'intensity', text: 'Seberapa kuat kesedihan terasa sekarang? (0–10)', store: 'i_sedih' },
      { type: 'loop', text: 'Mau melepaskan lagi?', subtext: 'Kalau masih terasa (di atas 1), kita ulangi pelepasannya.', backTo: 'rel', whileVar: 'i_sedih', whileGt: 1 },
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
      { type: 'instruction', label: 'rel', text: 'Tarik napas dalam...', subtext: 'Dan hembuskan ketakutan itu keluar', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas ketakutan itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'intensity', text: 'Seberapa kuat ketakutan terasa sekarang? (0–10)', store: 'i_takut' },
      { type: 'loop', text: 'Mau melepaskan lagi?', subtext: 'Kalau masih terasa (di atas 1), kita ulangi pelepasannya.', backTo: 'rel', whileVar: 'i_takut', whileGt: 1 },
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
      { type: 'instruction', text: 'Nafsu adalah KELANGKAAN dalam menyamar...', subtext: 'Pikiran bahwa kamu KURANG tanpa hal itu — biasanya wanting Security/Approval (rasa aman & diakui lewat benda/orang)', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas KEINGINAN akan hal itu?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'instruction', label: 'rel', text: 'Tarik napas dalam...', subtext: 'Dan hembuskan keinginan yang memperbudak itu', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas nafsu/craving itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'intensity', text: 'Seberapa kuat keinginan/craving terasa sekarang? (0–10)', store: 'i_nafsu' },
      { type: 'loop', text: 'Mau melepaskan lagi?', subtext: 'Kalau masih terasa (di atas 1), kita ulangi pelepasannya.', backTo: 'rel', whileVar: 'i_nafsu', whileGt: 1 },
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
      { type: 'instruction', label: 'rel', text: 'Tarik napas dalam...', subtext: 'Dan hembuskan kemarahan itu keluar', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas kemarahan itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'intensity', text: 'Seberapa kuat kemarahan terasa sekarang? (0–10)', store: 'i_marah' },
      { type: 'loop', text: 'Mau melepaskan lagi?', subtext: 'Kalau masih terasa (di atas 1), kita ulangi pelepasannya.', backTo: 'rel', whileVar: 'i_marah', whileGt: 1 },
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
      { type: 'instruction', label: 'rel', text: 'Tarik napas dalam...', subtext: 'Dan hembuskan kebanggaan yang memisahkan itu', duration: 10000 },
      { type: 'yesno', text: 'Bisakah kamu melepas kebanggaan/ego itu sekarang?', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepasnya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'intensity', text: 'Seberapa kuat kebanggaan/ego terasa sekarang? (0–10)', store: 'i_bangga' },
      { type: 'loop', text: 'Mau melepaskan lagi?', subtext: 'Kalau masih terasa (di atas 1), kita ulangi pelepasannya.', backTo: 'rel', whileVar: 'i_bangga', whileGt: 1 },
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
      { type: 'instruction', label: 'deepen', text: 'Rasakan bahwa keberanian ini TIDAK TERBATAS...', subtext: 'Selalu tersedia, selalu ada — biarkan makin meluas, makin halus', duration: 10000 },
      { type: 'loop', text: 'Bisa terasa lebih baik lagi nggak?', subtext: 'Pertanyaan khas Lester — selalu bisa lebih baik. Jika ya, kita perdalam.', backTo: 'deepen', yesText: '✨ Bisa, perdalam', noText: '🙏 Cukup, sudah penuh' },
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
      { type: 'instruction', label: 'deepen', text: 'Rasakan bahwa penerimaan ini TIDAK TERBATAS...', subtext: 'Selalu tersedia, selalu ada — biarkan makin meluas, makin halus', duration: 10000 },
      { type: 'loop', text: 'Bisa terasa lebih baik lagi nggak?', subtext: 'Pertanyaan khas Lester — selalu bisa lebih baik. Jika ya, kita perdalam.', backTo: 'deepen', yesText: '✨ Bisa, perdalam', noText: '🙏 Cukup, sudah penuh' },
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
      { type: 'instruction', label: 'deepen', text: 'Kamu ADALAH kedamaian itu sendiri...', subtext: 'Biarkan kedamaian makin dalam, makin halus, makin penuh', duration: 10000 },
      { type: 'loop', text: 'Bisa terasa lebih baik lagi nggak?', subtext: 'Pertanyaan khas Lester — selalu bisa lebih baik. Jika ya, kita perdalam.', backTo: 'deepen', yesText: '✨ Bisa, perdalam', noText: '🙏 Cukup, sudah penuh' },
      { type: 'completion', text: 'Selamat! Kamu telah memenuhi alam semesta dengan kedamaian.', subtext: 'Kedamaian ini selalu tersedia. Kamu hanya perlu mengingat.' },
      { type: 'insight', text: 'Insight tentang kedamaian:', placeholder: 'Tulis insight...' }
    ]
  },

  // ==================== QUICK RELEASE - SEMUA EMOSI SEKALIGUS ====================
};

// ==================== FULL RELEASE (Coach Lia sweep) ====================
// Sapu lengkap 9 emosi: lepas 6 negatif dengan Bisakah/Maukah/Kapan + cek
// intensitas (boleh ulang sapuan), lalu penuhi 3 positif + "bisa lebih baik?".
function buildFullReleaseScript() {
  const neg = [
    { name: 'APATI', emoji: '😶', feel: 'rasa tidak berdaya, "aku tidak bisa"', wanting: 'keinginan untuk menyerah / tetap apatis' },
    { name: 'KESEDIHAN', emoji: '😢', feel: 'duka, kehilangan, kerinduan', wanting: 'keinginan akan apa yang tidak ada (Approval/Security)' },
    { name: 'KETAKUTAN', emoji: '😨', feel: 'cemas, khawatir tentang masa depan', wanting: 'keinginan untuk merasa aman (Security)' },
    { name: 'NAFSU', emoji: '😋', feel: 'craving, "harus punya", obsesi', wanting: 'keinginan yang memperbudak (Security/Approval)' },
    { name: 'KEMARAHAN', emoji: '😠', feel: 'frustrasi, dendam, kesal', wanting: 'keinginan untuk mengontrol (Control)' },
    { name: 'KEBANGGAAN', emoji: '😤', feel: 'ego, merasa lebih atau lebih benar', wanting: 'keinginan untuk merasa terpisah & lebih (Separation)' }
  ];
  const pos = [
    { name: 'KEBERANIAN', emoji: '💪', quality: 'kepercayaan diri & kesediaan untuk bertindak' },
    { name: 'PENERIMAAN', emoji: '😌', quality: 'damai dengan apa adanya, tanpa perlawanan' },
    { name: 'KEDAMAIAN', emoji: '🕊️', quality: 'ketenangan sempurna, sifat sejatimu' }
  ];
  const steps = [];

  steps.push({ type: 'instruction', text: 'Stop sebentar... tarik napas dalam, hembuskan perlahan.', subtext: 'Biarkan tubuh rileks dan hadir di sini.', duration: 8000 });
  steps.push({ type: 'instruction', text: 'Kita akan menyapu naik skala emosi — melepas yang berat satu per satu, lalu memenuhi diri dengan yang ringan.', subtext: 'Lembut saja. Releasing adalah keputusan; ketuk "Lanjut" kapan pun siap.', duration: 9000 });
  steps.push({ type: 'input', text: 'Apa yang paling terasa mengganjal saat ini?', subtext: 'Boleh satu situasi, boleh perasaan umum.', placeholder: 'Tuliskan...' });

  neg.forEach(function (e, idx) {
    const welcome = { type: 'instruction', text: e.emoji + ' ' + e.name, subtext: 'Perhatikan ' + e.feel + '. Izinkan ia hadir... sambut saja, jangan dilawan.', duration: 8000 };
    if (idx === 0) welcome.label = 'sweep'; // loop target for re-sweep
    steps.push(welcome);
    steps.push({ type: 'yesno', text: 'Bisakah kamu melepaskan ' + e.wanting + '?', subtext: 'Kedua jawaban valid. Yang penting jujur.', highlight: 'Bisa' });
    steps.push({ type: 'yesno', text: 'Maukah kamu melepaskannya?', highlight: 'Mau' });
    steps.push({ type: 'when', text: 'Kapan?' });
    steps.push({ type: 'instruction', text: 'Tarik napas... hembuskan ' + e.name.toLowerCase() + ' itu keluar. Biarkan pergi.', duration: 6000 });
  });

  steps.push({ type: 'intensity', text: 'Setelah menyapu keenamnya, seberapa berat lagi rasanya? (0–10)', store: 'i' });
  steps.push({ type: 'loop', text: 'Mau menyapu sekali lagi?', subtext: 'Kalau masih berat (di atas 1), kita ulangi dari atas.', backTo: 'sweep', whileVar: 'i', whileGt: 1, yesText: '🔄 Sapu lagi', noText: '✅ Cukup, lanjut' });

  steps.push({ type: 'instruction', text: 'Emosi berat sudah lebih ringan. Sekarang kita PENUHI diri dengan yang positif.', duration: 7000 });
  pos.forEach(function (e) {
    steps.push({ type: 'instruction', text: e.emoji + ' Rasakan ' + e.name + ' — ' + e.quality + ' — yang sudah ada di dalammu.', subtext: 'Biarkan ia tumbuh di hati.', duration: 8000 });
    steps.push({ type: 'instruction', text: 'Biarkan ' + e.name + ' MELUAS... mengisi tubuh, ruangan, lalu seluruh alam semesta.', duration: 8000 });
  });

  steps.push({ type: 'instruction', label: 'deepen', text: 'Rasakan ketiganya — keberanian, penerimaan, kedamaian — memenuhi segalanya tanpa batas.', duration: 9000 });
  steps.push({ type: 'loop', text: 'Bisa terasa lebih baik lagi nggak?', subtext: 'Pertanyaan khas Lester — selalu bisa lebih baik. Jika ya, kita perdalam.', backTo: 'deepen', yesText: '✨ Bisa, perdalam', noText: '🙏 Cukup, sudah penuh' });
  steps.push({ type: 'completion', text: '🎉 Full Release Selesai!', subtext: 'Kamu sudah menyapu dari apati menuju kedamaian. Lakukan rutin untuk menjaga kebersihan emosional.' });
  steps.push({ type: 'insight', text: 'Ada insight dari sesi penuh ini?', placeholder: 'Tulis insight...' });

  return { title: 'Full Emotional Release', description: 'Sapu lengkap 9 emosi gaya Coach Lia', steps: steps };
}
emosiScripts.fullRelease = buildFullReleaseScript();

// ==================== JEDA PIKIRAN (Coach Lia) ====================
// Pikiran sering ikut campur saat releasing. Setelah tiap akhir ronde
// pelepasan ("Kapan?"), sisipkan undangan lembut untuk mengistirahatkan pikiran.
const MIND_REST_PROMPTS = [
  { text: 'Bisakah kamu mengizinkan pikiranmu beristirahat sejenak?', subtext: 'Tidak perlu memikirkan apa pun. Cukup hadir di sini.' },
  { text: 'Maukah kamu membiarkan pikiran diam sebentar?', subtext: 'Kalau pikiran datang, biarkan lewat seperti awan — tak perlu diikuti.' },
  { text: 'Bisakah kamu berhenti berusaha, dan hanya... ada?', subtext: 'Lepaskan juga keinginan untuk "melakukannya dengan benar".' },
  { text: 'Perhatikan keheningan di antara dua pikiran.', subtext: 'Di ruang itu, kamu boleh beristirahat.' },
  { text: 'Izinkan pikiran melembut, seperti air yang menjadi tenang.', subtext: 'Tidak ada yang perlu dipecahkan sekarang. Aman untuk berhenti berpikir.' }
];

// Sisipkan jeda pikiran setelah setiap langkah 'when' (akhir satu ronde).
function injectMindRest(script) {
  if (!script || !script.steps || script._restInjected) return script;
  const out = [];
  let ri = 0;
  script.steps.forEach(function (step) {
    out.push(step);
    if (step.type === 'when') {
      const p = MIND_REST_PROMPTS[ri % MIND_REST_PROMPTS.length];
      ri++;
      out.push({ type: 'breathing', text: p.text, subtext: p.subtext, duration: 9000 });
    }
  });
  script.steps = out;
  script._restInjected = true;
  return script;
}

// ==================== MODE PERJALANAN (hands-free / travel) ====================
// Logika transform skrip kini terpusat di releasing-engine.js (berlaku untuk
// semua modul). Di sini hanya wrapper tipis untuk membaca status toggle.
function isTravelMode() {
  if (typeof ReleasingEngine !== 'undefined' && ReleasingEngine.isTravelMode) {
    return ReleasingEngine.isTravelMode();
  }
  try { return localStorage.getItem('sedonaTravelMode') === 'true'; } catch (e) { return false; }
}

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

  // Auto-advance toggle (default ON). Stored globally so the engine reads it.
  var autoToggle = document.getElementById('autoAdvanceToggle');
  if (autoToggle) {
    autoToggle.checked = localStorage.getItem('sedonaAutoAdvance') !== 'false';
    autoToggle.addEventListener('change', function () {
      localStorage.setItem('sedonaAutoAdvance', autoToggle.checked ? 'true' : 'false');
    });
  }

  // Travel mode toggle: when on, every session runs hands-free (timer + voice).
  var travelToggle = document.getElementById('travelModeToggle');
  if (travelToggle) {
    travelToggle.checked = isTravelMode();
    travelToggle.addEventListener('change', function () {
      if (typeof ReleasingEngine !== 'undefined' && ReleasingEngine.setTravelMode) {
        ReleasingEngine.setTravelMode(travelToggle.checked);
      } else {
        localStorage.setItem('sedonaTravelMode', travelToggle.checked ? 'true' : 'false');
      }
      if (travelToggle.checked) {
        // Hands-free needs the safety timer on; reflect it in the other toggle UI.
        if (autoToggle) autoToggle.checked = true;
        showToast('🚗 Mode Perjalanan aktif — sesi berjalan otomatis dengan suara', 'success');
      }
    });
  }

  // Initialize ReleasingEngine with emosi scripts
  if (typeof ReleasingEngine !== 'undefined') {
    Object.keys(emosiScripts).forEach(function(key) {
      ReleasingEngine.getScripts()[key] = injectMindRest(emosiScripts[key]);
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
function startEmosi(emosiId, forceTravel) {
  if (typeof ReleasingEngine === 'undefined') {
    showToast('ReleasingEngine tidak tersedia', 'error');
    return;
  }

  // Register the base script once; the engine applies the hands-free transform
  // itself when travel mode is on (global toggle) or forced for this run.
  if (!ReleasingEngine.getScript(emosiId)) {
    ReleasingEngine.getScripts()[emosiId] = injectMindRest(emosiScripts[emosiId]);
  }

  ReleasingEngine.startReleasing(emosiId, {
    travel: !!forceTravel,
    onComplete: function(result) {
      emosiProgress[emosiId]++;
      emosiProgress.totalSessions++;
      saveEmosiProgress();
      renderEmosiProgress();
      showToast('Sesi ' + emosiScripts[emosiId].title + ' selesai!', 'success');
    }
  });
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
