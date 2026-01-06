// ==========================================================================
// RESISTANCE AREAS DATA
// Comprehensive data for 8 resistance areas - Sedona Method
// ==========================================================================

const resistanceAreas = {
  // =========================================================================
  // AREA 1: UANG (Money)
  // =========================================================================
  uang: {
    id: 'uang',
    name: 'Uang',
    icon: '💰',
    color: '#27ae60',
    day: 3,
    definition: 'Resistensi terhadap uang adalah penolakan terhadap kelimpahan finansial, baik dalam bentuk keinginan berlebihan maupun penolakan terhadap uang itu sendiri.',
    keyInsight: 'Uang adalah energi netral. Resistensi terhadap uang (baik menginginkan maupun menolaknya) menciptakan hambatan terhadap aliran kelimpahan alami.',

    resistanceChecklist: [
      { id: 'u1', question: 'Apakah saya merasa tidak layak memiliki uang lebih?', category: 'worthiness' },
      { id: 'u2', question: 'Apakah saya takut kehilangan uang yang sudah ada?', category: 'fear' },
      { id: 'u3', question: 'Apakah saya menghakimi orang kaya atau miskin?', category: 'judgment' },
      { id: 'u4', question: 'Apakah saya merasa bersalah ketika memiliki lebih dari orang lain?', category: 'guilt' },
      { id: 'u5', question: 'Apakah saya percaya uang adalah sumber masalah?', category: 'belief' },
      { id: 'u6', question: 'Apakah saya terobsesi mengejar uang?', category: 'attachment' },
      { id: 'u7', question: 'Apakah saya menolak membicarakan atau memikirkan uang?', category: 'avoidance' },
      { id: 'u8', question: 'Apakah saya merasa cemas tentang keuangan masa depan?', category: 'anxiety' }
    ],

    techniques: [
      {
        name: 'Welcoming Kedua Sisi',
        steps: [
          'Rasakan resistensi terhadap MEMILIKI uang lebih',
          'Biarkan dan sambut perasaan itu sepenuhnya',
          'Rasakan resistensi terhadap TIDAK MEMILIKI uang',
          'Biarkan dan sambut perasaan itu sepenuhnya',
          'Lepaskan keinginan mengontrol keuangan',
          'Istirahat dalam keberadaan yang sudah lengkap'
        ]
      },
      {
        name: 'Inquiry Kelimpahan',
        steps: [
          'Siapa yang menginginkan uang? Apakah itu siapa Anda sebenarnya?',
          'Apakah keberadaan Anda membutuhkan uang untuk lengkap?',
          'Bisakah Anda membiarkan kelimpahan mengalir tanpa menggenggamnya?',
          'Apa yang tersisa jika keinginan akan uang dilepaskan?'
        ]
      }
    ],

    analogies: [
      {
        title: 'Air yang Mengalir',
        description: 'Uang seperti air - semakin Anda menggenggamnya, semakin cepat ia mengalir keluar dari tangan. Biarkan ia mengalir dengan bebas.'
      },
      {
        title: 'Napas Finansial',
        description: 'Seperti napas yang masuk dan keluar secara alami, biarkan uang datang dan pergi tanpa menahan atau menolaknya.'
      }
    ],

    inquiries: [
      'Apakah kekayaan sejati ada di luar diri Anda?',
      'Siapa yang akan Anda jadi tanpa kekhawatiran tentang uang?',
      'Bisakah keberadaan Anda diperkaya atau dimiskinkan oleh uang?',
      'Apa yang lebih berharga - uang atau kedamaian batin?'
    ],

    quotes: [
      { text: 'Kelimpahan adalah sifat alami keberadaan, bukan sesuatu yang harus dicapai.', author: 'Lester Levenson' },
      { text: 'Ketika Anda melepaskan keinginan akan uang, uang sering datang dengan sendirinya.', author: 'Hale Dwoskin' },
      { text: 'Kemakmuran sejati adalah keadaan pikiran, bukan saldo rekening.', author: 'Sedona Method' }
    ],

    testimonials: [
      {
        text: 'Setelah melepaskan resistensi terhadap uang, penghasilan saya meningkat 3x dalam setahun tanpa usaha tambahan.',
        name: 'Andi P.',
        location: 'Jakarta'
      },
      {
        text: 'Saya berhenti khawatir tentang uang dan paradoksnya, situasi keuangan saya membaik dengan sendirinya.',
        name: 'Sinta R.',
        location: 'Surabaya'
      }
    ]
  },

  // =========================================================================
  // AREA 2: HUBUNGAN (Relationships)
  // =========================================================================
  hubungan: {
    id: 'hubungan',
    name: 'Hubungan',
    icon: '💑',
    color: '#e91e63',
    day: 4,
    definition: 'Resistensi dalam hubungan adalah penolakan terhadap kedekatan atau jarak dengan orang lain, sering termanifestasi sebagai kebutuhan akan persetujuan atau ketakutan akan penolakan.',
    keyInsight: 'Semua resistensi dalam hubungan berakar pada kebutuhan akan persetujuan (approval), kontrol, atau keamanan. Lepaskan kebutuhan ini untuk hubungan yang lebih autentik.',

    resistanceChecklist: [
      { id: 'h1', question: 'Apakah saya takut ditolak atau ditinggalkan?', category: 'fear' },
      { id: 'h2', question: 'Apakah saya mencari persetujuan berlebihan dari orang lain?', category: 'approval' },
      { id: 'h3', question: 'Apakah saya ingin mengontrol perilaku pasangan/orang lain?', category: 'control' },
      { id: 'h4', question: 'Apakah saya menyimpan dendam atau tidak bisa memaafkan?', category: 'resentment' },
      { id: 'h5', question: 'Apakah saya takut keintiman atau kedekatan emosional?', category: 'intimacy' },
      { id: 'h6', question: 'Apakah saya merasa tidak layak dicintai?', category: 'worthiness' },
      { id: 'h7', question: 'Apakah saya terus mencari pasangan "sempurna"?', category: 'perfectionism' },
      { id: 'h8', question: 'Apakah saya menghindari komitmen atau tanggung jawab?', category: 'avoidance' }
    ],

    techniques: [
      {
        name: 'Melepas Kebutuhan Approval',
        steps: [
          'Identifikasi orang yang persetujuannya Anda cari',
          'Rasakan kebutuhan akan persetujuan mereka',
          'Tanya: Bisakah saya melepaskan kebutuhan akan persetujuan ini?',
          'Biarkan perasaan itu pergi sebanyak yang Anda bisa',
          'Ulangi sampai perasaan menghilang atau berkurang signifikan'
        ]
      },
      {
        name: 'Memaafkan dengan Releasing',
        steps: [
          'Pikirkan orang yang ingin Anda maafkan',
          'Rasakan perasaan yang muncul (marah, sakit, dll)',
          'Sambut perasaan itu sepenuhnya',
          'Lepaskan keinginan untuk mengubah masa lalu',
          'Lepaskan keinginan untuk menghukum atau membalas',
          'Istirahat dalam kebebasan dari masa lalu'
        ]
      }
    ],

    analogies: [
      {
        title: 'Tangan Terbuka',
        description: 'Seperti kupu-kupu yang hinggap di tangan terbuka, hubungan berkembang saat kita tidak mencoba menggenggamnya.'
      },
      {
        title: 'Dua Pohon',
        description: 'Dua pohon yang tumbuh berdampingan - masing-masing berakar sendiri namun saling berbagi cahaya dan udara.'
      }
    ],

    inquiries: [
      'Apakah cinta Anda bergantung pada respons orang lain?',
      'Siapa Anda tanpa kebutuhan akan persetujuan?',
      'Bisakah Anda mencintai tanpa syarat apapun?',
      'Apakah kebahagiaan Anda bergantung pada hubungan tertentu?'
    ],

    quotes: [
      { text: 'Cinta sejati adalah membiarkan orang lain menjadi seperti mereka, bukan seperti yang kita inginkan.', author: 'Lester Levenson' },
      { text: 'Ketika Anda melepaskan kebutuhan akan cinta, cinta datang dari segala arah.', author: 'Hale Dwoskin' },
      { text: 'Hubungan terbaik terjadi ketika dua orang yang utuh memilih untuk berbagi hidup.', author: 'Sedona Method' }
    ],

    testimonials: [
      {
        text: 'Setelah melepaskan kebutuhan approval dari istri, hubungan kami justru menjadi lebih intim.',
        name: 'Budi S.',
        location: 'Bandung'
      },
      {
        text: 'Saya akhirnya bisa memaafkan orang tua setelah 20 tahun menyimpan dendam. Bebas!',
        name: 'Maya L.',
        location: 'Yogyakarta'
      }
    ]
  },

  // =========================================================================
  // AREA 3: TUBUH (Body)
  // =========================================================================
  tubuh: {
    id: 'tubuh',
    name: 'Tubuh',
    icon: '🧘',
    color: '#00bcd4',
    day: 5,
    definition: 'Resistensi terhadap tubuh adalah penolakan terhadap sensasi fisik, penampilan, kesehatan, atau penuaan. Ini menciptakan ketegangan dan dapat memperburuk kondisi fisik.',
    keyInsight: 'Tubuh merespons resistensi dengan menciptakan lebih banyak ketegangan. Menyambut sensasi apapun memungkinkan tubuh untuk rileks dan menyembuhkan dirinya sendiri.',

    resistanceChecklist: [
      { id: 't1', question: 'Apakah saya menolak sensasi tidak nyaman di tubuh?', category: 'sensation' },
      { id: 't2', question: 'Apakah saya tidak menerima penampilan fisik saya?', category: 'appearance' },
      { id: 't3', question: 'Apakah saya takut penyakit atau sakit?', category: 'health' },
      { id: 't4', question: 'Apakah saya melawan proses penuaan?', category: 'aging' },
      { id: 't5', question: 'Apakah saya terobsesi dengan berat badan atau bentuk tubuh?', category: 'obsession' },
      { id: 't6', question: 'Apakah saya mengabaikan kebutuhan tubuh (istirahat, makanan)?', category: 'neglect' },
      { id: 't7', question: 'Apakah saya membandingkan tubuh saya dengan orang lain?', category: 'comparison' },
      { id: 't8', question: 'Apakah saya merasa terpisah dari tubuh saya?', category: 'disconnection' }
    ],

    techniques: [
      {
        name: 'Body Welcoming',
        steps: [
          'Fokuskan perhatian pada area tubuh yang tegang atau tidak nyaman',
          'Sambut sensasi itu sepenuhnya tanpa ingin mengubahnya',
          'Tanya: Bisakah saya membiarkan sensasi ini ada?',
          'Biarkan sensasi itu sepenuhnya, tanpa resistensi',
          'Perhatikan bagaimana sensasi berubah atau larut'
        ]
      },
      {
        name: 'Scanning Release',
        steps: [
          'Mulai dari puncak kepala',
          'Perlahan scan ke bawah, perhatikan setiap area',
          'Di setiap area tegang, berhenti dan sambut',
          'Lepaskan keinginan untuk memperbaiki atau mengubah',
          'Lanjutkan sampai seluruh tubuh discan',
          'Istirahat dalam kesadaran tubuh yang rileks'
        ]
      }
    ],

    analogies: [
      {
        title: 'Es yang Mencair',
        description: 'Ketegangan seperti es - dengan kehangatan penerimaan, ia secara alami mencair menjadi air yang mengalir.'
      },
      {
        title: 'Anak yang Menangis',
        description: 'Sensasi tidak nyaman seperti anak menangis - ia butuh perhatian dan penerimaan, bukan diabaikan atau dimarahi.'
      }
    ],

    inquiries: [
      'Siapa yang mengalami sensasi ini? Apakah itu benar-benar Anda?',
      'Apakah kesadaran Anda terpengaruh oleh kondisi tubuh?',
      'Bisakah Anda menjadi saksi tubuh tanpa menjadi tubuh?',
      'Apa yang tersisa jika semua ketakutan tentang tubuh dilepaskan?'
    ],

    quotes: [
      { text: 'Tubuh adalah instrumen kesadaran, bukan penjara.', author: 'Lester Levenson' },
      { text: 'Yang kita tolak dalam tubuh akan bertahan. Yang kita terima akan menyembuh.', author: 'Sedona Method' },
      { text: 'Kesehatan sejati dimulai dengan menerima tubuh apa adanya saat ini.', author: 'Hale Dwoskin' }
    ],

    testimonials: [
      {
        text: 'Sakit punggung kronis saya berkurang 80% setelah belajar menyambut alih-alih melawan rasa sakit.',
        name: 'Dian K.',
        location: 'Semarang'
      },
      {
        text: 'Setelah menerima penampilan saya, paradoksnya saya justru lebih termotivasi untuk merawat tubuh.',
        name: 'Rini M.',
        location: 'Medan'
      }
    ]
  },

  // =========================================================================
  // AREA 4: PIKIRAN (Mind)
  // =========================================================================
  pikiran: {
    id: 'pikiran',
    name: 'Pikiran',
    icon: '🧠',
    color: '#9c27b0',
    day: 6,
    definition: 'Resistensi terhadap pikiran adalah perang dengan aktivitas mental - mencoba menghentikan, mengontrol, atau menghakimi pikiran yang muncul.',
    keyInsight: 'Pikiran bukanlah musuh. Semakin kita melawan pikiran, semakin kuat ia menjadi. Membiarkan pikiran datang dan pergi tanpa perlawanan adalah kuncinya.',

    resistanceChecklist: [
      { id: 'p1', question: 'Apakah saya mencoba menghentikan atau mengontrol pikiran?', category: 'control' },
      { id: 'p2', question: 'Apakah saya percaya semua pikiran saya?', category: 'belief' },
      { id: 'p3', question: 'Apakah saya terjebak dalam overthinking?', category: 'overthinking' },
      { id: 'p4', question: 'Apakah saya menghakimi pikiran negatif saya?', category: 'judgment' },
      { id: 'p5', question: 'Apakah saya takut pikiran tertentu?', category: 'fear' },
      { id: 'p6', question: 'Apakah saya mengidentifikasi diri dengan pikiran saya?', category: 'identification' },
      { id: 'p7', question: 'Apakah saya terobsesi dengan masa lalu atau masa depan?', category: 'time' },
      { id: 'p8', question: 'Apakah saya merasa pikiran mengontrol hidup saya?', category: 'dominance' }
    ],

    techniques: [
      {
        name: 'Welcoming Thoughts',
        steps: [
          'Perhatikan pikiran yang sedang muncul',
          'Jangan mencoba mengubah atau menghentikannya',
          'Sambut pikiran itu seperti tamu yang berkunjung',
          'Biarkan pikiran ada tanpa mengikuti atau melawan',
          'Perhatikan bagaimana pikiran datang dan pergi sendiri',
          'Istirahat sebagai kesadaran yang mengamati'
        ]
      },
      {
        name: 'Inquiry Pikiran',
        steps: [
          'Pilih pikiran yang mengganggu',
          'Tanya: Apakah pikiran ini benar? Apakah saya 100% yakin?',
          'Tanya: Siapa saya tanpa pikiran ini?',
          'Tanya: Bisakah saya melepaskan pikiran ini?',
          'Istirahat dalam keheningan di antara pikiran'
        ]
      }
    ],

    analogies: [
      {
        title: 'Awan di Langit',
        description: 'Pikiran seperti awan yang melintas di langit kesadaran - datang dan pergi tanpa mempengaruhi langit itu sendiri.'
      },
      {
        title: 'Kereta yang Lewat',
        description: 'Pikiran seperti kereta - Anda tidak harus naik setiap kereta yang lewat. Biarkan saja lewat.'
      }
    ],

    inquiries: [
      'Siapa yang menyadari pikiran? Apakah itu juga pikiran?',
      'Bisakah kesadaran terganggu oleh pikiran apapun?',
      'Apakah Anda adalah pemikir atau saksi dari pikiran?',
      'Apa yang ada sebelum pikiran pertama muncul hari ini?'
    ],

    quotes: [
      { text: 'Pikiran adalah majikan yang buruk tapi pelayan yang luar biasa.', author: 'Lester Levenson' },
      { text: 'Anda bukan pikiran Anda. Anda adalah kesadaran yang menyadari pikiran.', author: 'Sedona Method' },
      { text: 'Kedamaian bukan tidak adanya pikiran, tapi tidak terganggu oleh pikiran apapun.', author: 'Hale Dwoskin' }
    ],

    testimonials: [
      {
        text: 'Kecemasan saya berkurang drastis setelah berhenti melawan pikiran dan mulai menyambutnya.',
        name: 'Agus T.',
        location: 'Malang'
      },
      {
        text: 'Overthinking yang dulu menghantui saya kini bukan masalah. Pikiran tetap datang, tapi tidak lagi mengontrol saya.',
        name: 'Lina S.',
        location: 'Denpasar'
      }
    ]
  },

  // =========================================================================
  // AREA 5: KEBIASAAN (Habits)
  // =========================================================================
  kebiasaan: {
    id: 'kebiasaan',
    name: 'Kebiasaan',
    icon: '🔄',
    color: '#ff9800',
    day: 8,
    definition: 'Resistensi terhadap kebiasaan muncul baik dalam bentuk melawan kebiasaan buruk maupun memaksakan kebiasaan baik, keduanya menciptakan perjuangan internal.',
    keyInsight: 'Kebiasaan bertahan karena resistensi. Semakin kita melawan kebiasaan buruk, semakin kuat ia menjadi. Lepaskan resistensi, dan kebiasaan kehilangan kekuatannya.',

    resistanceChecklist: [
      { id: 'k1', question: 'Apakah saya terus melawan kebiasaan tertentu tanpa berhasil?', category: 'fighting' },
      { id: 'k2', question: 'Apakah saya merasa bersalah setelah melakukan kebiasaan buruk?', category: 'guilt' },
      { id: 'k3', question: 'Apakah saya memaksakan diri untuk kebiasaan baik?', category: 'forcing' },
      { id: 'k4', question: 'Apakah saya menghakimi diri ketika gagal mengubah kebiasaan?', category: 'judgment' },
      { id: 'k5', question: 'Apakah saya percaya kebiasaan mendefinisikan siapa saya?', category: 'identity' },
      { id: 'k6', question: 'Apakah saya takut kembali ke kebiasaan lama?', category: 'fear' },
      { id: 'k7', question: 'Apakah saya menunda-nunda mengubah kebiasaan?', category: 'procrastination' },
      { id: 'k8', question: 'Apakah saya terobsesi dengan self-improvement?', category: 'obsession' }
    ],

    techniques: [
      {
        name: 'Holistic Release untuk Kebiasaan',
        steps: [
          'Identifikasi kebiasaan yang ingin diubah',
          'Rasakan resistensi terhadap MELAKUKAN kebiasaan itu',
          'Sambut dan lepaskan resistensi itu',
          'Rasakan resistensi terhadap TIDAK MELAKUKAN kebiasaan itu',
          'Sambut dan lepaskan resistensi itu',
          'Lepaskan keinginan untuk mengubah diri',
          'Istirahat dalam kebebasan dari keharusan berubah'
        ]
      },
      {
        name: 'Releasing Dorongan',
        steps: [
          'Saat dorongan kebiasaan muncul, STOP',
          'Sambut dorongan itu tanpa menindaklanjuti',
          'Tanya: Bisakah saya membiarkan dorongan ini ada?',
          'Perhatikan dorongan tanpa melawan atau mengikuti',
          'Biarkan dorongan mencapai puncak dan turun sendiri',
          'Lanjutkan dengan kesadaran penuh'
        ]
      }
    ],

    analogies: [
      {
        title: 'Gelombang',
        description: 'Dorongan seperti gelombang - ia memuncak dan kemudian surut. Anda tidak perlu melawan atau mengikutinya, cukup biarkan berlalu.'
      },
      {
        title: 'Jalur di Rumput',
        description: 'Kebiasaan seperti jalur yang terbentuk di rumput. Berhenti menggunakannya, rumput akan tumbuh kembali dengan sendirinya.'
      }
    ],

    inquiries: [
      'Siapa Anda tanpa kebiasaan ini?',
      'Apakah kebiasaan mendefinisikan siapa Anda sebenarnya?',
      'Bisakah Anda menerima diri apa adanya, dengan atau tanpa kebiasaan ini?',
      'Apa yang sebenarnya Anda cari melalui kebiasaan ini?'
    ],

    quotes: [
      { text: 'Kebiasaan hanya bertahan selama kita memberi energi padanya melalui resistensi.', author: 'Lester Levenson' },
      { text: 'Perubahan sejati terjadi bukan karena perjuangan, tapi karena pembebasan.', author: 'Sedona Method' },
      { text: 'Lepaskan kebutuhan untuk berubah, dan perubahan terjadi dengan sendirinya.', author: 'Hale Dwoskin' }
    ],

    testimonials: [
      {
        text: 'Setelah 10 tahun mencoba berhenti merokok dengan willpower, akhirnya berhasil dengan releasing. Tanpa perjuangan!',
        name: 'Hendra W.',
        location: 'Makassar'
      },
      {
        text: 'Kebiasaan menunda saya berkurang 90% setelah melepaskan resistensi terhadap pekerjaan.',
        name: 'Dewi A.',
        location: 'Tangerang'
      }
    ]
  },

  // =========================================================================
  // AREA 6: USAHA (Effort)
  // =========================================================================
  usaha: {
    id: 'usaha',
    name: 'Usaha',
    icon: '💪',
    color: '#f44336',
    day: 10,
    definition: 'Resistensi terhadap usaha adalah perjuangan internal baik dalam bentuk memaksakan diri berlebihan maupun menghindari tindakan yang diperlukan.',
    keyInsight: '"Effort is ego in action." - Lester Levenson. Usaha berlebihan menunjukkan resistensi. Tindakan yang tepat mengalir tanpa perjuangan.',

    resistanceChecklist: [
      { id: 'us1', question: 'Apakah saya percaya harus berjuang keras untuk sukses?', category: 'belief' },
      { id: 'us2', question: 'Apakah saya memaksakan diri melampaui batas?', category: 'overexertion' },
      { id: 'us3', question: 'Apakah saya menghindari tindakan karena takut gagal?', category: 'avoidance' },
      { id: 'us4', question: 'Apakah saya merasa guilty ketika tidak produktif?', category: 'guilt' },
      { id: 'us5', question: 'Apakah saya terobsesi dengan achievement?', category: 'obsession' },
      { id: 'us6', question: 'Apakah saya menunda-nunda karena overwhelmed?', category: 'procrastination' },
      { id: 'us7', question: 'Apakah saya percaya istirahat adalah kemalasan?', category: 'rest' },
      { id: 'us8', question: 'Apakah saya mengukur nilai diri dari produktivitas?', category: 'self-worth' }
    ],

    techniques: [
      {
        name: 'Effortless Action',
        steps: [
          'Sebelum bertindak, berhenti sejenak',
          'Rasakan dorongan atau resistensi terhadap tindakan',
          'Sambut perasaan itu sepenuhnya',
          'Lepaskan kebutuhan untuk memaksakan hasil',
          'Lepaskan kebutuhan untuk menghindari tindakan',
          'Bertindak dari keheningan, bukan dari dorongan ego'
        ]
      },
      {
        name: 'Releasing Burnout',
        steps: [
          'Akui kelelahan tanpa menghakimi',
          'Sambut semua perasaan (exhaustion, frustration, dll)',
          'Lepaskan kebutuhan untuk selalu produktif',
          'Lepaskan rasa bersalah tentang istirahat',
          'Istirahat sebagai keberadaan yang sudah lengkap',
          'Biarkan energi kembali secara alami'
        ]
      }
    ],

    analogies: [
      {
        title: 'Mengapung di Air',
        description: 'Semakin Anda berjuang di air, semakin Anda tenggelam. Rileks dan biarkan air menopang Anda.'
      },
      {
        title: 'Bamboo vs Oak',
        description: 'Pohon oak yang kaku patah dalam badai, sementara bamboo yang lentur bertahan karena tidak melawan.'
      }
    ],

    inquiries: [
      'Apa yang akan terjadi jika Anda berhenti berjuang?',
      'Siapa Anda tanpa achievement apapun?',
      'Bisakah keberadaan Anda gagal?',
      'Apa yang mengalir ketika perjuangan berhenti?'
    ],

    quotes: [
      { text: 'Effort is ego in action.', author: 'Lester Levenson' },
      { text: 'Tindakan yang benar mengalir tanpa resistensi, seperti air mengalir ke laut.', author: 'Sedona Method' },
      { text: 'Sukses sejati datang dari berada, bukan dari melakukan.', author: 'Hale Dwoskin' }
    ],

    testimonials: [
      {
        text: 'Setelah melepaskan kebutuhan untuk berjuang, pekerjaan saya justru lebih produktif dan menyenangkan.',
        name: 'Fajar R.',
        location: 'Bekasi'
      },
      {
        text: 'Burnout saya sembuh bukan dengan liburan, tapi dengan melepaskan kebutuhan untuk selalu perform.',
        name: 'Citra P.',
        location: 'Bogor'
      }
    ]
  },

  // =========================================================================
  // AREA 7: WAKTU (Time)
  // =========================================================================
  waktu: {
    id: 'waktu',
    name: 'Waktu',
    icon: '⏰',
    color: '#607d8b',
    day: 12,
    definition: 'Resistensi terhadap waktu adalah perang dengan saat ini - baik terburu-buru mengejar masa depan maupun terjebak di masa lalu.',
    keyInsight: 'Waktu adalah konstruksi pikiran. Yang nyata hanya saat ini. Semua resistensi terhadap waktu adalah resistensi terhadap saat ini.',

    resistanceChecklist: [
      { id: 'w1', question: 'Apakah saya selalu merasa kekurangan waktu?', category: 'scarcity' },
      { id: 'w2', question: 'Apakah saya terjebak menyesali masa lalu?', category: 'past' },
      { id: 'w3', question: 'Apakah saya cemas tentang masa depan?', category: 'future' },
      { id: 'w4', question: 'Apakah saya tidak sabar menunggu sesuatu?', category: 'impatience' },
      { id: 'w5', question: 'Apakah saya terobsesi dengan deadline?', category: 'deadline' },
      { id: 'w6', question: 'Apakah saya takut penuaan atau kematian?', category: 'mortality' },
      { id: 'w7', question: 'Apakah saya merasa hidup terlalu cepat berlalu?', category: 'rushing' },
      { id: 'w8', question: 'Apakah saya menunda kebahagiaan untuk nanti?', category: 'postponement' }
    ],

    techniques: [
      {
        name: 'Present Moment Release',
        steps: [
          'Perhatikan pikiran tentang masa lalu atau masa depan',
          'Sambut pikiran itu tanpa mengikutinya',
          'Tanya: Apa yang sebenarnya ada saat ini?',
          'Lepaskan keinginan untuk mengubah masa lalu',
          'Lepaskan keinginan untuk mengontrol masa depan',
          'Istirahat dalam saat ini yang selalu ada'
        ]
      },
      {
        name: 'Releasing Urgency',
        steps: [
          'Rasakan urgency atau ketidaksabaran',
          'Sambut perasaan itu sepenuhnya',
          'Tanya: Apa yang sebenarnya terburu-buru?',
          'Lepaskan kebutuhan untuk hasil segera',
          'Biarkan semuanya terjadi dalam waktunya',
          'Nikmati perjalanan, bukan hanya tujuan'
        ]
      }
    ],

    analogies: [
      {
        title: 'Mata Air',
        description: 'Saat ini seperti mata air - selalu segar, selalu baru. Anda tidak bisa menyimpannya, hanya menikmatinya.'
      },
      {
        title: 'Layar Bioskop',
        description: 'Waktu seperti film di layar - gambar terus berubah, tapi layar (kesadaran) selalu tetap.'
      }
    ],

    inquiries: [
      'Kapan "sekarang" pernah tidak ada?',
      'Apakah kesadaran Anda berumur?',
      'Di mana masa lalu berada sekarang selain di pikiran?',
      'Bisakah Anda menemukan masa depan di luar imajinasi?'
    ],

    quotes: [
      { text: 'Tidak ada yang salah dengan saat ini, kecuali kamu memikirkannya.', author: 'Sailor Bob' },
      { text: 'Satu-satunya waktu yang ada adalah sekarang. Semua lainnya adalah pikiran.', author: 'Lester Levenson' },
      { text: 'Waktu adalah cara pikiran membagi yang tak terbagi.', author: 'Sedona Method' }
    ],

    testimonials: [
      {
        text: 'Kecemasan tentang masa depan hilang setelah menyadari hanya saat ini yang nyata.',
        name: 'Gunawan H.',
        location: 'Surabaya'
      },
      {
        text: 'Saya berhenti menunda kebahagiaan untuk nanti. Sekarang saya bahagia tanpa alasan.',
        name: 'Nia K.',
        location: 'Bandung'
      }
    ]
  },

  // =========================================================================
  // AREA 8: CINTA (Love)
  // =========================================================================
  cinta: {
    id: 'cinta',
    name: 'Cinta',
    icon: '❤️',
    color: '#e91e63',
    day: 13,
    definition: 'Resistensi terhadap cinta adalah penolakan untuk memberi atau menerima cinta tanpa syarat, sering karena ketakutan akan kerentanan atau penolakan.',
    keyInsight: 'Cinta adalah sifat alami keberadaan kita. Kita tidak perlu mencari cinta - kita hanya perlu melepaskan resistensi yang menghalanginya.',

    resistanceChecklist: [
      { id: 'c1', question: 'Apakah saya takut mencintai karena takut kehilangan?', category: 'fear' },
      { id: 'c2', question: 'Apakah saya merasa tidak layak dicintai?', category: 'worthiness' },
      { id: 'c3', question: 'Apakah saya kesulitan menerima cinta dari orang lain?', category: 'receiving' },
      { id: 'c4', question: 'Apakah saya menahan cinta sebagai perlindungan?', category: 'withholding' },
      { id: 'c5', question: 'Apakah cinta saya bersyarat (hanya jika...)?', category: 'conditional' },
      { id: 'c6', question: 'Apakah saya mencari cinta dari luar diri?', category: 'seeking' },
      { id: 'c7', question: 'Apakah saya menyamakan cinta dengan attachment?', category: 'attachment' },
      { id: 'c8', question: 'Apakah saya kesulitan mencintai diri sendiri?', category: 'self-love' }
    ],

    techniques: [
      {
        name: 'Opening to Love',
        steps: [
          'Rasakan area hati di dada',
          'Perhatikan kontraksi atau ketegangan',
          'Sambut apapun yang ada di sana',
          'Lepaskan kebutuhan untuk melindungi diri',
          'Lepaskan kebutuhan untuk mendapatkan cinta',
          'Biarkan cinta yang sudah ada mengalir keluar'
        ]
      },
      {
        name: 'Self-Love Release',
        steps: [
          'Pikirkan tentang diri Anda',
          'Perhatikan perasaan yang muncul (kritik, penolakan, dll)',
          'Sambut semua perasaan itu',
          'Tanya: Bisakah saya menerima diri apa adanya?',
          'Lepaskan kebutuhan untuk berbeda dari sekarang',
          'Istirahat dalam penerimaan tanpa syarat'
        ]
      }
    ],

    analogies: [
      {
        title: 'Matahari',
        description: 'Cinta seperti matahari - selalu bersinar tanpa memilih siapa yang menerima kehangatannya.'
      },
      {
        title: 'Sumber Air',
        description: 'Anda adalah sumber cinta, bukan wadah yang perlu diisi. Cinta mengalir dari Anda, bukan ke Anda.'
      }
    ],

    inquiries: [
      'Apakah cinta membutuhkan objek untuk ada?',
      'Siapa Anda ketika mencintai tanpa alasan?',
      'Bisakah cinta sejati berkurang karena dibagi?',
      'Apa yang menghalangi cinta mengalir saat ini?'
    ],

    quotes: [
      { text: 'Cintai, cintai, cintai, dan kamu akan bahagia, sehat, dan sejahtera.', author: 'Lester Levenson' },
      { text: 'Cinta bukan sesuatu yang Anda dapatkan, tapi sesuatu yang Anda izinkan mengalir.', author: 'Hale Dwoskin' },
      { text: 'Cinta tanpa syarat adalah sifat alami Anda, bukan sesuatu yang harus dicapai.', author: 'Sedona Method' }
    ],

    testimonials: [
      {
        text: 'Setelah melepaskan ketakutan akan kerentanan, saya akhirnya bisa menerima cinta dari suami.',
        name: 'Yuni S.',
        location: 'Solo'
      },
      {
        text: 'Belajar mencintai diri sendiri adalah breakthrough terbesar. Semua hubungan lain membaik setelahnya.',
        name: 'Andre M.',
        location: 'Jakarta'
      }
    ]
  }
};

// ==========================================================================
// HELPER FUNCTIONS
// ==========================================================================

function getAreaById(areaId) {
  return resistanceAreas[areaId] || null;
}

function getAllAreas() {
  return Object.values(resistanceAreas);
}

function getAreasByDay() {
  const areasByDay = {};
  Object.values(resistanceAreas).forEach(area => {
    if (area.day) {
      areasByDay[area.day] = area;
    }
  });
  return areasByDay;
}

function getRandomQuoteFromArea(areaId) {
  const area = resistanceAreas[areaId];
  if (!area || !area.quotes.length) return null;
  return area.quotes[Math.floor(Math.random() * area.quotes.length)];
}

function getRandomInquiryFromArea(areaId) {
  const area = resistanceAreas[areaId];
  if (!area || !area.inquiries.length) return null;
  return area.inquiries[Math.floor(Math.random() * area.inquiries.length)];
}

// Export for use
if (typeof window !== 'undefined') {
  window.ResistanceAreasData = {
    areas: resistanceAreas,
    getAreaById,
    getAllAreas,
    getAreasByDay,
    getRandomQuoteFromArea,
    getRandomInquiryFromArea
  };
}
