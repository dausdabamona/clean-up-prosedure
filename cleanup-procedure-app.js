// ==========================================================================
// CLEAN UP PROCEDURE — Guided releasing (Coach Lia style)
// One question per screen, breath interstitials, TAP-to-advance.
// Renders by building DOM nodes (createElement) — never touches body.innerHTML.
// Name tokens ({nama}) are substituted per-string and assigned via textContent.
// Depends on common.js (apiCall, showToast, saveToStorage, loadFromStorage,
// getApiUrl, getDefaultName).
// ==========================================================================
(function () {
  'use strict';

  // ====================== QUESTION DATA (token {nama}) ======================
  const WANTING_ORDER = ['control', 'approval', 'security', 'separation'];

  const WANTINGS = {
    control: {
      label: 'Control', color: '#2874a6', icon: '🎮',
      intro: 'Bayangkan {nama} ada di depanmu. Sekarang kita lihat soal kontrol — ingin mengendalikan, atau merasa dikendalikan.',
      setA: {
        trigger: 'Pernahkah {nama} mencoba mengendalikan kamu? Atau rasanya seperti itu?',
        releases: [
          'Bisakah kamu melepaskan keinginan untuk balik mengontrol {nama}?',
          'Bisakah kamu melepaskan keinginan untuk menolak {nama}?'
        ]
      },
      setB: {
        trigger: 'Pernahkah kamu mencoba mengontrol {nama}? Atau rasanya seperti itu?',
        releases: ['Bisakah kamu melepaskan keinginan untuk mengontrol {nama}?']
      },
      completion: [
        'Bisakah kamu mengizinkan {nama} menjadi seperti apa adanya?',
        'Maukah kamu membiarkan {nama} seperti apa adanya?',
        'Apakah saat ini kamu memberi {nama} hak atas dirinya sendiri untuk menjadi seperti apa adanya?'
      ]
    },
    approval: {
      label: 'Approval', color: '#9b59b6', icon: '💕',
      intro: 'Sekarang soal approval — cinta, persetujuan, penerimaan.',
      setA: {
        trigger: 'Pernahkah kamu tidak menyukai atau tidak menyetujui {nama}?',
        releases: [
          'Bisakah kamu melepaskan ketidaksukaan atau ketidaksetujuan terhadap {nama}?',
          'Bisakah kamu melepaskan keinginan untuk menahan rasa welas asih untuk {nama}?'
        ]
      },
      setB: {
        trigger: 'Pernahkah {nama} tidak menyukai atau tidak menyetujui apa pun dalam diri kamu? Atau rasanya seperti itu?',
        releases: ['Bisakah kamu melepaskan keinginan untuk mendapatkan persetujuan atau approval dari {nama}?']
      },
      completion: [
        'Bisakah kamu hanya memiliki perasaan welas asih dan penerimaan terhadap {nama}?',
        'Maukah kamu hanya memiliki perasaan welas asih dan penerimaan untuk {nama}?',
        'Apakah saat ini kamu hanya memiliki perasaan welas asih untuk {nama}?'
      ]
    },
    security: {
      label: 'Security', color: '#e67e22', icon: '🛡️',
      intro: 'Sekarang soal keamanan — rasa terancam, melindungi diri, atau ingin membalas.',
      setA: {
        trigger: 'Pernahkah {nama} menantang, menentang, atau mengancam kamu? Atau rasanya seperti itu?',
        releases: [
          'Bisakah kamu melepaskan keinginan untuk menantang, melawan, atau mengancam {nama} sebagai balasannya?',
          'Bisakah kamu melepaskan keinginan untuk melindungi diri kamu dari {nama}?'
        ]
      },
      setB: {
        trigger: 'Pernahkah kamu menantang, menentang, atau mengancam {nama}? Atau rasanya seperti itu?',
        releases: [
          'Bisakah kamu melepaskan keinginan untuk menantang, melawan, atau mengancam {nama}?',
          'Bisakah kamu melepaskan keinginan untuk melindungi diri kamu dari {nama}?'
        ]
      },
      completion: [
        'Bisakah kamu hanya memiliki perasaan sejahtera, aman, dan percaya terhadap {nama}?',
        'Maukah kamu hanya memiliki perasaan sejahtera, aman, dan percaya terhadap {nama}?',
        'Apakah saat ini kamu hanya memiliki perasaan nyaman, aman, dan percaya dengan {nama}?'
      ]
    },
    separation: {
      label: 'Separation', color: '#8e44ad', icon: '🔗',
      intro: 'Yang terakhir, soal keterpisahan — ingin menjauh, atau ingin menyatu.',
      setA: {
        trigger: 'Pernahkah {nama} menolak, ingin jauh-jauh, atau mencoba berpisah dari kamu? Atau rasanya seperti itu?',
        releases: [
          'Bisakah kamu melepaskan keinginan untuk melakukan hal yang sama terhadap {nama}?',
          'Bisakah kamu melepaskan keinginan untuk menjadi satu atau terhubung dengan {nama}?'
        ]
      },
      setB: {
        trigger: 'Pernahkah kamu menolak, ingin jauh-jauh, atau mencoba memisahkan diri dari {nama}?',
        releases: ['Bisakah kamu melepaskan keinginan untuk menolak, jauh-jauh, atau mencoba berpisah dari {nama}?']
      },
      completion: [
        'Bisakah kamu mengizinkan diri kamu hanya memiliki perasaan oneness, bahwa "saya adalah kamu dan kamu adalah saya, hanya ada satu", dengan {nama}?',
        'Maukah kamu mengizinkan diri kamu hanya memiliki perasaan oneness dengan {nama}?',
        'Apakah saat ini kamu hanya memiliki perasaan oneness, bahwa "saya adalah kamu dan kamu adalah saya, hanya ada satu", dengan {nama}?'
      ]
    }
  };

  // Triple Welcoming content (token {emosi}, {resistensi})
  const TW_EMOTIONS = [
    { key: 'fear', emoji: '😨', label: 'Takut (Fear)' },
    { key: 'anger', emoji: '😠', label: 'Marah (Anger)' },
    { key: 'grief', emoji: '😢', label: 'Sedih (Grief)' },
    { key: 'shame', emoji: '😳', label: 'Malu (Shame)' },
    { key: 'guilt', emoji: '😔', label: 'Bersalah (Guilt)' },
    { key: 'pride', emoji: '😤', label: 'Gengsi (Pride)' },
    { key: 'apathy', emoji: '😶', label: 'Apatis (Apathy)' }
  ];
  const TW_WELCOME_EMOSI = [
    'Bisakah kamu mengizinkan {emosi} ini hadir, apa adanya?',
    'Bisakah kamu menyambut {emosi} ini sepenuhnya?',
    'Bisakah kamu membiarkan {emosi} ini ada tanpa perlu mengubahnya?'
  ];
  const TW_WELCOME_RESIST = [
    'Bisakah kamu mengizinkan rasa "{resistensi}" ini hadir?',
    'Bisakah kamu menyambut resistensi ini tanpa melawannya?',
    'Bisakah kamu membiarkannya ada apa adanya?'
  ];
  const TW_WELCOME_EGO = [
    'Sadari ada "saya" yang sedang mengalami ini. Bisakah kamu mengizinkan rasa keakuan itu hadir?',
    'Bisakah kamu menyambut ego atau rasa "saya" ini?',
    'Bisakah kamu melepaskan kebutuhan ego untuk menjadi benar, aman, atau terpisah?'
  ];

  const RELASI_OPTIONS = ['Orang Tua', 'Saudara', 'Anak', 'Pasangan', 'Mantan Pasangan', 'Teman Dekat',
    'Teman', 'Rekan Kerja', 'Atasan', 'Bawahan', 'Klien', 'Tetangga', 'Guru/Mentor', 'Murid', 'Orang Asing', 'Lainnya'];

  // ====================== STATE ======================
  function freshWanting() { return { rounds: 0, twCount: 0, releases: 0, complete: false }; }

  function freshState() {
    return {
      sessionId: null, userName: '', targetPerson: '', relasi: '', targetStatus: '', konteks: '',
      mode: 'guided', status: 'ongoing', currentWanting: 'control', startTime: null,
      wantings: {
        control: freshWanting(), approval: freshWanting(),
        security: freshWanting(), separation: freshWanting()
      },
      insight: '', feelingAfter: '',
      createdAt: '', updatedAt: '', completedAt: ''
    };
  }

  let state = freshState();
  // transient (not persisted): current triple-welcoming working data
  let tw = null;

  const DRAFT_KEY = 'cleanupProcedure_draft';
  const SETTINGS_KEY = 'cleanupProcedure_settings';

  function defaultSettings() {
    return { grounding: true, breath: true, tts: true, voiceURI: '', rate: 0.95 };
  }
  let settings = defaultSettings();

  // ====================== DOM HELPERS ======================
  // Tiny element builder. props: {class, text, onClick, attrs:{}}; children: array.
  function el(tag, props, children) {
    const node = document.createElement(tag);
    props = props || {};
    if (props.class) node.className = props.class;
    if (props.text != null) node.textContent = props.text; // token-safe assignment
    if (props.html != null) node.innerHTML = props.html;    // only for trusted static markup (never name tokens)
    if (props.onClick) node.addEventListener('click', props.onClick);
    if (props.attrs) Object.keys(props.attrs).forEach(function (k) { node.setAttribute(k, props.attrs[k]); });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function token(str) {
    return String(str)
      .replace(/\{nama\}/g, state.targetPerson || 'orang ini')
      .replace(/\{emosi\}/g, (tw && tw.emotionLabel) || 'perasaan ini')
      .replace(/\{resistensi\}/g, (tw && tw.resistance) || 'hambatan ini');
  }

  function stage() { return document.getElementById('cup-stage'); }
  function clearStage() { const s = stage(); while (s.firstChild) s.removeChild(s.firstChild); return s; }

  // ---- Safety auto-advance (shared global 'sedonaAutoAdvance', default ON) ----
  // Passive screens advance on their own after a max time (Coach Lia pacing) if
  // the user doesn't tap, so a session never stalls when the phone is out of reach.
  let cupAutoTimer = null;
  function clearCupAuto() { if (cupAutoTimer) { clearTimeout(cupAutoTimer); cupAutoTimer = null; } }
  function cupAutoEnabled() { try { return localStorage.getItem('sedonaAutoAdvance') !== 'false'; } catch (e) { return true; } }
  // Travel mode: hands-free — even question screens advance on a timer (via each
  // screen's travelAction). Shares the global 'sedonaTravelMode' flag.
  function cupTravelEnabled() { try { return localStorage.getItem('sedonaTravelMode') === 'true'; } catch (e) { return false; } }
  function cupAutoBar(ms) {
    const bar = el('div', { class: 'cup-autobar' });
    const fill = el('div', { class: 'cup-autobar-fill' });
    fill.style.animationDuration = ms + 'ms';
    bar.appendChild(fill);
    return bar;
  }

  // Build a standard guided screen: optional eyebrow, big question, controls.
  function screen(opts) {
    clearCupAuto();
    const s = clearStage();
    const card = el('div', { class: 'cup-screen' });
    if (opts.eyebrow) card.appendChild(el('div', { class: 'cup-eyebrow', text: opts.eyebrow }));
    if (opts.icon) card.appendChild(el('div', { class: 'cup-screen-icon', text: opts.icon }));
    const q = opts.question ? token(opts.question) : '';
    if (q) {
      card.appendChild(el('div', { class: 'cup-question', text: q }));
      if (ttsSupported) {
        card.appendChild(el('button', { class: 'cup-speaker', text: '🔊 Dengar lagi', onClick: function () { speakNow(q); } }));
      }
    }
    if (opts.sub) card.appendChild(el('div', { class: 'cup-sub', text: token(opts.sub) }));
    if (opts.body) card.appendChild(opts.body);
    if (opts.controls) {
      const row = el('div', { class: 'cup-controls' });
      opts.controls.forEach(function (b) { if (b) row.appendChild(b); });
      card.appendChild(row);
    }
    // Safety auto-advance: after a paced delay (if not tapped), run an action.
    // Normal mode only auto-advances passive screens (autoMs + autoAction).
    // Travel mode advances EVERY screen hands-free: it prefers the screen's
    // travelAction (the forward path), else falls back to the first control.
    // Paced 1.5x longer than the base, with a 20s floor for a calm rhythm.
    let action = opts.autoAction;
    let baseMs = opts.autoMs || 0;
    if (cupTravelEnabled()) {
      if (opts.travelAction) { action = opts.travelAction; baseMs = opts.travelMs || baseMs || 11000; }
      else if (!action && opts.controls && opts.controls.length) {
        const primary = opts.controls.find(function (b) { return b; });
        action = function () { if (primary) primary.click(); };
        baseMs = baseMs || 11000;
      } else if (action) {
        baseMs = baseMs || 11000;
      }
    }
    if (cupAutoEnabled() && action && baseMs) {
      const ms = Math.max(Math.round(baseMs * 1.5), 20000);
      card.appendChild(cupAutoBar(ms));
      card.appendChild(el('div', { class: 'cup-sub', text: 'Lanjut otomatis bila tidak diketuk' }));
      cupAutoTimer = setTimeout(function () { clearCupAuto(); action(); }, ms);
    }
    // fade-in
    card.classList.add('cup-fade');
    s.appendChild(card);
    requestAnimationFrame(function () { card.classList.add('cup-in'); });
    if (q) speak(q); // read the question aloud (if TTS is on)
    return card;
  }

  function btn(label, onClick, variant) {
    return el('button', { class: 'cup-btn ' + (variant || 'cup-btn-primary'), text: label, onClick: onClick });
  }

  // ====================== TEXT-TO-SPEECH (Web Speech API) ======================
  // Reads each question aloud in a calm Indonesian voice. No external library.
  const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  let ttsVoice = null;
  let ttsVoices = [];

  // Resolve the active voice: user's chosen voice if set, else first Indonesian.
  function resolveVoice() {
    ttsVoice = null;
    if (settings.voiceURI) {
      ttsVoice = ttsVoices.find(function (v) { return v.voiceURI === settings.voiceURI; }) || null;
    }
    if (!ttsVoice) {
      ttsVoice = ttsVoices.find(function (v) { return /id[-_]?id/i.test(v.lang); }) ||
                 ttsVoices.find(function (v) { return /^id/i.test(v.lang); }) || null;
    }
  }
  function loadVoices() {
    if (!ttsSupported) return;
    ttsVoices = window.speechSynthesis.getVoices() || [];
    resolveVoice();
    populateVoiceSelect();
  }
  // Fill the Settings voice dropdown (Indonesian voices first). Safe if absent.
  function populateVoiceSelect() {
    const sel = document.getElementById('cup-set-voice');
    if (!sel) return;
    const cur = settings.voiceURI || '';
    while (sel.firstChild) sel.removeChild(sel.firstChild);
    const auto = document.createElement('option');
    auto.value = ''; auto.textContent = '(Otomatis — Bahasa Indonesia)';
    sel.appendChild(auto);
    const idVoices = ttsVoices.filter(function (v) { return /^id/i.test(v.lang); });
    const rest = ttsVoices.filter(function (v) { return !/^id/i.test(v.lang); });
    idVoices.concat(rest).forEach(function (v) {
      const o = document.createElement('option');
      o.value = v.voiceURI;
      o.textContent = v.name + ' (' + v.lang + ')';
      sel.appendChild(o);
    });
    sel.value = cur;
  }
  if (ttsSupported) {
    loadVoices();
    // Voices load asynchronously in most browsers.
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  function stopSpeak() {
    if (ttsSupported) { try { window.speechSynthesis.cancel(); } catch (e) {} }
  }
  // Force-speak (used by the "Dengar lagi" button — ignores the auto toggle).
  function speakNow(text) {
    if (!ttsSupported || !text) return;
    stopSpeak();
    const u = new SpeechSynthesisUtterance(String(text));
    u.lang = (ttsVoice && ttsVoice.lang) || 'id-ID';
    if (ttsVoice) u.voice = ttsVoice;
    u.rate = settings.rate || 0.95;   // dapat diatur di Settings
    u.pitch = 1.0;
    try { window.speechSynthesis.speak(u); } catch (e) {}
  }
  // Auto-speak (respects the on/off setting).
  function speak(text) {
    if (!settings.tts) return;
    speakNow(text);
  }
  function updateTtsBtn() {
    const b = document.getElementById('cup-tts-toggle');
    if (!b) return;
    b.textContent = settings.tts ? '🔊' : '🔇';
    b.setAttribute('aria-label', settings.tts ? 'Matikan suara' : 'Nyalakan suara');
  }

  // ====================== PROGRESS HEADER ======================
  function renderProgress() {
    const bar = document.getElementById('cup-progress');
    if (!bar) return;
    while (bar.firstChild) bar.removeChild(bar.firstChild);
    WANTING_ORDER.forEach(function (w) {
      const wd = WANTINGS[w], st = state.wantings[w];
      const pill = el('div', { class: 'cup-progress-pill' + (state.currentWanting === w ? ' active' : '') + (st.complete ? ' done' : '') });
      pill.appendChild(el('span', { class: 'cup-pill-icon', text: st.complete ? '✓' : wd.icon }));
      pill.appendChild(el('span', { class: 'cup-pill-label', text: wd.label }));
      pill.style.setProperty('--pill-color', wd.color);
      bar.appendChild(pill);
    });
  }

  // ====================== FLOW: SESSION SETUP ======================
  function showTargetSetup() {
    state = freshState();
    renderProgress();
    const form = el('div', { class: 'cup-form' });

    const nameIn = el('input', { class: 'cup-input', attrs: { type: 'text', placeholder: 'Nama orang yang akan di-cleanup', id: 'cup-target-name' } });
    form.appendChild(field('Nama Target', nameIn));

    const relSel = el('select', { class: 'cup-input', attrs: { id: 'cup-relasi' } });
    relSel.appendChild(el('option', { text: '— Pilih relasi —', attrs: { value: '' } }));
    RELASI_OPTIONS.forEach(function (r) { relSel.appendChild(el('option', { text: r, attrs: { value: r } })); });
    form.appendChild(field('Relasi', relSel));

    const statusWrap = el('div', { class: 'cup-radio-row' });
    [['hidup', 'Masih hidup'], ['meninggal', 'Sudah meninggal'], ['tidak_tahu', 'Tidak tahu / belum pernah ketemu']]
      .forEach(function (o, i) {
        const id = 'cup-status-' + o[0];
        const lab = el('label', { class: 'cup-radio' });
        const r = el('input', { attrs: { type: 'radio', name: 'cup-status', value: o[0], id: id } });
        if (i === 0) r.checked = true;
        lab.appendChild(r); lab.appendChild(el('span', { text: o[1] }));
        statusWrap.appendChild(lab);
      });
    form.appendChild(field('Status', statusWrap));

    const ctx = el('textarea', { class: 'cup-input', attrs: { rows: '2', placeholder: 'Konteks singkat (opsional)', id: 'cup-konteks' } });
    form.appendChild(field('Konteks (opsional)', ctx));

    screen({
      eyebrow: 'Langkah 0 — Pilih Target',
      question: 'Siapa yang ingin kamu bersihkan hari ini?',
      sub: 'Pilih satu orang. Kita akan melepas resistensi terhadapnya, satu lapis demi satu.',
      body: form,
      controls: [btn('Mulai Cleanup →', startFromSetup)]
    });
  }

  function field(label, input) {
    return el('div', { class: 'cup-field' }, [el('label', { class: 'cup-label', text: label }), input]);
  }

  function startFromSetup() {
    const name = (document.getElementById('cup-target-name').value || '').trim();
    if (!name) { showToast('Isi nama target dulu ya', 'error'); return; }
    state.sessionId = 'CUP-' + Date.now();
    state.userName = getDefaultName ? getDefaultName() : '';
    state.targetPerson = name;
    state.relasi = document.getElementById('cup-relasi').value || '';
    const checked = document.querySelector('input[name="cup-status"]:checked');
    state.targetStatus = checked ? checked.value : 'hidup';
    state.konteks = (document.getElementById('cup-konteks').value || '').trim();
    state.mode = settings.mode === 'worksheet' ? 'worksheet' : 'guided';
    state.startTime = Date.now();
    state.createdAt = new Date().toISOString();
    state.currentWanting = 'control';
    saveDraft();
    renderProgress();
    if (settings.grounding) showGrounding(); else startWanting('control');
  }

  function showGrounding() {
    const circle = el('div', { class: 'cup-breath-circle' }, [el('span', { text: 'napas' })]);
    screen({
      eyebrow: 'Grounding',
      question: 'Tarik napas dalam-dalam.',
      sub: 'Bayangkan ' + (state.targetPerson || 'orang ini') + ' ada di depanmu — wajahnya, suaranya. Izinkan semuanya apa adanya.',
      body: circle,
      controls: [btn('Saya Siap', function () { startWanting('control'); }),
                 btn('Lewati', function () { startWanting('control'); }, 'cup-btn-ghost')],
      autoMs: 10000,
      autoAction: function () { startWanting('control'); }
    });
  }

  // ====================== FLOW: PER-WANTING ======================
  function startWanting(w) {
    state.currentWanting = w;
    saveDraft();
    renderProgress();
    if (state.mode === 'worksheet') { renderWorksheet(w); return; }
    const wd = WANTINGS[w];
    screen({
      eyebrow: wd.icon + ' ' + wd.label,
      question: wd.intro,
      sub: 'Tempo dipegang kamu. Maju kalau sudah terasa pas.',
      controls: [btn('Mulai', function () { breath(function () { showTrigger(w, 'setA'); }); })],
      autoMs: 9000,
      autoAction: function () { breath(function () { showTrigger(w, 'setA'); }); }
    });
  }

  // A round = Set A then Set B. Trigger → (Ya: releases) / (Tidak: skip).
  function showTrigger(w, set) {
    const wd = WANTINGS[w];
    screen({
      eyebrow: wd.icon + ' ' + wd.label + ' · ' + (set === 'setA' ? 'Bagian A' : 'Bagian B'),
      question: wd[set].trigger,
      controls: [
        btn('Ya / Mungkin', function () { showRelease(w, set, 0); }),
        btn('Tidak', function () { afterSet(w, set); }, 'cup-btn-ghost')
      ],
      travelAction: function () { showRelease(w, set, 0); }
    });
  }

  function showRelease(w, set, idx) {
    const wd = WANTINGS[w];
    const list = wd[set].releases;
    const countEl = el('div', { class: 'cup-release-count' }, [
      el('span', { class: 'cup-count-num', text: String(state.wantings[w].releases), attrs: { id: 'cup-relcount' } }),
      el('span', { class: 'cup-count-label', text: 'total releases' })
    ]);
    function bumpRelease() {
      state.wantings[w].releases++;
      const n = document.getElementById('cup-relcount');
      if (n) n.textContent = String(state.wantings[w].releases);
      saveDraft();
    }
    screen({
      eyebrow: wd.icon + ' ' + wd.label + ' · pelepasan ' + (idx + 1) + '/' + list.length,
      question: list[idx],
      sub: 'Rasakan, lalu lepaskan. Ulangi kalau perlu.',
      body: countEl,
      controls: [
        btn('🕊️ Lepaskan', bumpRelease),
        btn('Lepaskan lagi', bumpRelease, 'cup-btn-secondary'),
        btn('Lanjut →', function () {
          if (idx + 1 < list.length) breath(function () { showRelease(w, set, idx + 1); });
          else afterSet(w, set);
        }, 'cup-btn-ghost')
      ],
      // Hands-free: count one release, then move forward.
      travelAction: function () {
        bumpRelease();
        if (idx + 1 < list.length) breath(function () { showRelease(w, set, idx + 1); });
        else afterSet(w, set);
      }
    });
  }

  // After finishing a set: A → B, B → end of round.
  function afterSet(w, set) {
    if (set === 'setA') { breath(function () { showTrigger(w, 'setB'); }); }
    else { endRound(w); }
  }

  function endRound(w) {
    state.wantings[w].rounds++;
    saveDraft();
    renderProgress();
    // Soft safety after 5 rounds in this wanting.
    if (state.wantings[w].rounds >= 5) {
      screen({
        eyebrow: WANTINGS[w].icon + ' ' + WANTINGS[w].label,
        question: 'Tidak apa-apa kalau belum tuntas hari ini.',
        sub: 'Kamu sudah ' + state.wantings[w].rounds + ' ronde di lapis ini. Mau lanjut, atau simpan dan istirahat dulu?',
        controls: [
          btn('Lanjut', function () { roundChoice(w); }),
          btn('Simpan & Lanjut Nanti', saveAndExit, 'cup-btn-ghost')
        ],
        travelAction: function () { roundChoice(w); }
      });
      return;
    }
    roundChoice(w);
  }

  function roundChoice(w) {
    screen({
      eyebrow: WANTINGS[w].icon + ' ' + WANTINGS[w].label + ' · ronde ' + state.wantings[w].rounds,
      question: 'Bagaimana rasanya sekarang?',
      sub: 'Kalau masih ada yang mengganjal, ulangi ronde. Kalau sudah lega, lanjut ke pertanyaan completion.',
      controls: [
        btn('Ulangi ronde', function () { breath(function () { showTrigger(w, 'setA'); }); }, 'cup-btn-secondary'),
        btn('Saya siap Completion →', function () { breath(function () { showCompletion(w, 0); }); })
      ],
      // Hands-free: move toward completion rather than looping forever.
      travelAction: function () { breath(function () { showCompletion(w, 0); }); }
    });
  }

  // ====================== FLOW: COMPLETION ======================
  function showCompletion(w, idx) {
    const wd = WANTINGS[w];
    screen({
      eyebrow: wd.icon + ' ' + wd.label + ' · completion ' + (idx + 1) + '/3',
      question: wd.completion[idx],
      controls: [
        btn('Ya', function () {
          if (idx + 1 < wd.completion.length) showCompletion(w, idx + 1);
          else completeWanting(w);
        }),
        btn('Belum / Tidak', function () { startTripleWelcoming(w); }, 'cup-btn-ghost')
      ],
      // Hands-free: answer "Ya" path (avoids the input-heavy Triple Welcoming
      // while driving). The user can always run TW manually later.
      travelAction: function () {
        if (idx + 1 < wd.completion.length) showCompletion(w, idx + 1);
        else completeWanting(w);
      }
    });
  }

  function completeWanting(w) {
    state.wantings[w].complete = true;
    saveDraft();
    renderProgress();
    const nextW = WANTING_ORDER[WANTING_ORDER.indexOf(w) + 1];
    if (!nextW) { showSummary(); return; }
    screen({
      eyebrow: '✓ ' + WANTINGS[w].label + ' selesai',
      question: 'Bagus. ' + WANTINGS[w].label + ' selesai. Tarik napas.',
      sub: 'Sekarang kita masuk ke ' + WANTINGS[nextW].label + '.',
      controls: [btn('Lanjut →', function () { breath(function () { startWanting(nextW); }); })],
      autoMs: 9000,
      autoAction: function () { breath(function () { startWanting(nextW); }); }
    });
  }

  // ====================== TRIPLE WELCOMING ======================
  function startTripleWelcoming(w) {
    tw = { wanting: w, resistance: '', emotionKey: '', emotionLabel: '', intensityBefore: null, intensityAfter: null };
    twIdentify(w);
  }

  // TW step 1 — identify resistance + emotion + intensity.
  function twIdentify(w) {
    const resIn = el('textarea', { class: 'cup-input', attrs: { rows: '2', placeholder: 'Apa yang terasa mengganjal...', id: 'cup-tw-res' } });
    const emoWrap = el('div', { class: 'cup-emo-grid' });
    TW_EMOTIONS.forEach(function (e) {
      const b = el('button', { class: 'cup-emo-btn', onClick: function () {
        emoWrap.querySelectorAll('.cup-emo-btn').forEach(function (x) { x.classList.remove('selected'); });
        b.classList.add('selected'); tw.emotionKey = e.key; tw.emotionLabel = e.label;
      } }, [el('span', { text: e.emoji }), el('span', { class: 'cup-emo-label', text: e.label })]);
      emoWrap.appendChild(b);
    });
    const slider = el('input', { class: 'cup-slider', attrs: { type: 'range', min: '0', max: '10', value: '7', id: 'cup-tw-int' } });
    const sliderVal = el('span', { class: 'cup-slider-val', text: '7' });
    slider.addEventListener('input', function () { sliderVal.textContent = slider.value; });

    const body = el('div', {}, [
      el('label', { class: 'cup-label', text: 'Tuliskan hambatannya:' }), resIn,
      el('label', { class: 'cup-label', text: 'Emosi yang paling terasa:' }), emoWrap,
      el('label', { class: 'cup-label', text: 'Seberapa kuat (0–10)?' }),
      el('div', { class: 'cup-slider-row' }, [slider, sliderVal])
    ]);

    // Shared so both the button and travel mode use the same logic. In travel
    // mode the fields keep their defaults (empty text -> "hambatan ini",
    // emotion -> "perasaan ini", intensity slider default).
    const proceed = function () {
      tw.resistance = (document.getElementById('cup-tw-res').value || '').trim() || 'hambatan ini';
      tw.intensityBefore = parseInt(document.getElementById('cup-tw-int').value, 10);
      if (!tw.emotionLabel) tw.emotionLabel = 'perasaan ini';
      twSequence('🌊 Menyambut Emosi', TW_WELCOME_EMOSI, 0, function () {
        twSequence('🛡️ Menyambut Resistensi', TW_WELCOME_RESIST, 0, function () {
          twSequence('🪞 Menyambut Ego', TW_WELCOME_EGO, 0, twAwareness);
        });
      });
    };
    screen({
      eyebrow: '🔄 Triple Welcoming',
      question: 'Apa yang menghalangi kamu menjawab "ya"?',
      sub: cupTravelEnabled() ? 'Mode Perjalanan: nilai default dipakai otomatis — lanjut sendiri.' : undefined,
      body: body,
      controls: [btn('Lanjut →', proceed)],
      travelAction: proceed
    });
  }

  // Generic welcoming sequence (one prompt per screen, TAP to advance).
  function twSequence(title, list, idx, onDone) {
    const advance = function () {
      if (idx + 1 < list.length) breath(function () { twSequence(title, list, idx + 1, onDone); });
      else onDone();
    };
    screen({
      eyebrow: title + ' · ' + (idx + 1) + '/' + list.length,
      question: list[idx],
      sub: 'Sambut saja. Tidak perlu mengubah apa pun.',
      controls: [btn('Lanjut →', advance)],
      autoMs: 8000,
      autoAction: advance
    });
  }

  // TW step 5 — awareness + melting animation + when + intensity-after.
  function twAwareness() {
    screen({
      eyebrow: '✨ Kesadaran',
      question: 'Apakah kamu adalah emosi, resistensi, dan ego itu — atau kamu yang SADAR akan semuanya?',
      sub: 'Mundur selangkah. Jadilah yang menyaksikan.',
      controls: [btn('Lanjut →', twMelting)],
      autoMs: 9000,
      autoAction: twMelting
    });
  }

  function twMelting() {
    const circles = el('div', { class: 'cup-melt' }, [
      el('div', { class: 'cup-melt-c c1', text: '😤' }),
      el('div', { class: 'cup-melt-c c2', text: '🛡️' }),
      el('div', { class: 'cup-melt-c c3', text: '🪞' })
    ]);
    const card = screen({
      eyebrow: '🫧 Peleburan',
      question: 'Biarkan ketiganya melebur ke dalam kesadaran...',
      body: circles,
      controls: [btn('Sudah melebur →', twWhen)],
      autoMs: 7000,
      autoAction: twWhen
    });
    requestAnimationFrame(function () { card.querySelector('.cup-melt').classList.add('melting'); });
  }

  function twWhen() {
    screen({
      eyebrow: '🕊️ Pelepasan',
      question: 'Kapan kamu mau melepaskannya?',
      controls: [
        btn('🌟 Sekarang', twAfterIntensity),
        btn('Nanti', twAfterIntensity, 'cup-btn-ghost')
      ],
      travelAction: twAfterIntensity
    });
  }

  function twAfterIntensity() {
    const slider = el('input', { class: 'cup-slider', attrs: { type: 'range', min: '0', max: '10', value: '2', id: 'cup-tw-after' } });
    const sliderVal = el('span', { class: 'cup-slider-val', text: '2' });
    slider.addEventListener('input', function () { sliderVal.textContent = slider.value; });
    const proceed = function () {
      tw.intensityAfter = parseInt(document.getElementById('cup-tw-after').value, 10);
      finishTripleWelcoming();
    };
    screen({
      eyebrow: '📉 Cek Intensitas',
      question: 'Sekarang, seberapa kuat lagi rasanya (0–10)?',
      sub: cupTravelEnabled() ? 'Mode Perjalanan: nilai default dipakai otomatis — lanjut sendiri.' : undefined,
      body: el('div', { class: 'cup-slider-row' }, [slider, sliderVal]),
      controls: [btn('Selesai Triple Welcoming →', proceed)],
      travelAction: proceed
    });
  }

  // After TW: count it, then force a full round (Set A+B) before completion retry.
  function finishTripleWelcoming() {
    const w = tw.wanting;
    state.wantings[w].twCount++;
    saveDraft();
    tw = null;
    screen({
      eyebrow: '🔄 Triple Welcoming selesai',
      question: 'Mantap. Sekarang kita ulangi satu ronde penuh dulu, lalu coba completion lagi.',
      controls: [btn('Lanjut →', function () { breath(function () { showTrigger(w, 'setA'); }); })],
      autoMs: 9000,
      autoAction: function () { breath(function () { showTrigger(w, 'setA'); }); }
    });
  }

  // ====================== BREATH INTERSTITIAL ======================
  function breath(onDone) {
    if (!settings.breath) { onDone(); return; }
    clearCupAuto();
    const s = clearStage();
    const card = el('div', { class: 'cup-screen cup-breath cup-fade' });
    card.appendChild(el('div', { class: 'cup-breath-circle big' }, [el('span', { text: 'tarik · hembus' })]));
    card.appendChild(el('div', { class: 'cup-sub', text: 'Tarik napas... hembuskan perlahan. Ketuk kalau sudah siap.' }));
    const go = function () { clearCupAuto(); onDone(); };
    card.addEventListener('click', go);
    // Safety auto-advance after a calm breath (20s floor) if not tapped.
    if (cupAutoEnabled()) {
      card.appendChild(cupAutoBar(20000));
      cupAutoTimer = setTimeout(go, 20000);
    }
    s.appendChild(card);
    requestAnimationFrame(function () { card.classList.add('cup-in'); });
    speak('Tarik napas. Hembuskan perlahan.');
  }

  // ====================== WORKSHEET MODE ======================
  function renderWorksheet(w) {
    const wd = WANTINGS[w];
    const wrap = el('div', { class: 'cup-worksheet' });
    function relBlock(setKey, label) {
      const block = el('div', { class: 'cup-ws-block' });
      block.appendChild(el('div', { class: 'cup-ws-trigger', text: label + ': ' + token(wd[setKey].trigger) }));
      wd[setKey].releases.forEach(function (r) {
        const line = el('div', { class: 'cup-ws-line' }, [
          el('span', { class: 'cup-ws-q', text: token(r) }),
          el('button', { class: 'cup-btn cup-btn-secondary cup-btn-sm', text: '🕊️ Lepas', onClick: function () {
            state.wantings[w].releases++; cnt.textContent = String(state.wantings[w].releases); saveDraft();
          } })
        ]);
        block.appendChild(line);
      });
      return block;
    }
    const cnt = el('span', { class: 'cup-count-num', text: String(state.wantings[w].releases) });
    wrap.appendChild(el('div', { class: 'cup-release-count' }, [cnt, el('span', { class: 'cup-count-label', text: 'releases' })]));
    wrap.appendChild(relBlock('setA', 'Bagian A'));
    wrap.appendChild(relBlock('setB', 'Bagian B'));

    screen({
      eyebrow: wd.icon + ' ' + wd.label + ' · Worksheet',
      question: wd.intro,
      body: wrap,
      controls: [btn('Cek Completion →', function () { showCompletion(w, 0); })]
    });
  }

  // ====================== SUMMARY / FINISH ======================
  function showSummary() {
    state.status = 'complete';
    state.completedAt = new Date().toISOString();
    state.durationMin = state.startTime ? Math.round((Date.now() - state.startTime) / 60000) : 0;
    saveDraft();
    renderProgress();

    const totals = totalsOf(state);
    const grid = el('div', { class: 'cup-summary-grid' });
    WANTING_ORDER.forEach(function (w) {
      const st = state.wantings[w], wd = WANTINGS[w];
      grid.appendChild(el('div', { class: 'cup-summary-card' }, [
        el('div', { class: 'cup-summary-icon', text: wd.icon }),
        el('div', { class: 'cup-summary-name', text: wd.label }),
        el('div', { class: 'cup-summary-meta', text: st.rounds + ' ronde · ' + st.releases + ' release · ' + st.twCount + ' TW' })
      ]));
    });

    const insightIn = el('textarea', { class: 'cup-input', attrs: { rows: '3', placeholder: 'Insight atau catatan dari sesi ini...', id: 'cup-insight' } });
    insightIn.value = state.insight || '';
    const feelSlider = el('input', { class: 'cup-slider', attrs: { type: 'range', min: '0', max: '10', value: '8', id: 'cup-feel' } });
    const feelVal = el('span', { class: 'cup-slider-val', text: '8' });
    feelSlider.addEventListener('input', function () { feelVal.textContent = feelSlider.value; });

    const body = el('div', {}, [
      el('div', { class: 'cup-summary-totals', text: totals.releases + ' total release · ' + totals.tw + ' Triple Welcoming · ' + state.durationMin + ' menit' }),
      grid,
      el('label', { class: 'cup-label', text: '💡 Insight / Catatan' }), insightIn,
      el('label', { class: 'cup-label', text: 'Perasaanmu terhadap ' + state.targetPerson + ' sekarang (0–10):' }),
      el('div', { class: 'cup-slider-row' }, [feelSlider, feelVal])
    ]);

    screen({
      eyebrow: '🎉 Cleanup Selesai',
      question: 'Kamu sudah melepas keempat lapis terhadap ' + state.targetPerson + '.',
      body: body,
      controls: [
        btn('Simpan & Selesai', finishAndSave),
        btn('Cleanup Orang Lain', function () { clearDraft(); showTargetSetup(); }, 'cup-btn-ghost')
      ]
    });
  }

  function totalsOf(s) {
    let releases = 0, tw = 0;
    WANTING_ORDER.forEach(function (w) { releases += s.wantings[w].releases; tw += s.wantings[w].twCount; });
    return { releases: releases, tw: tw };
  }

  async function finishAndSave() {
    state.insight = (document.getElementById('cup-insight').value || '').trim();
    state.feelingAfter = document.getElementById('cup-feel').value;
    await persistSession();
    clearDraft();
    showToast('Sesi tersimpan 🎉', 'success');
    showTargetSetup();
    switchTab('riwayat');
  }

  function saveAndExit() {
    state.status = 'ongoing';
    saveDraft();
    persistSession();
    showToast('Disimpan. Lanjutkan kapan saja 🌿', 'success');
    showSummaryPartial();
  }

  function showSummaryPartial() {
    const totals = totalsOf(state);
    screen({
      eyebrow: '🌿 Disimpan',
      question: 'Sesi disimpan sebagai "ongoing".',
      sub: totals.releases + ' release sejauh ini. Kamu bisa melanjutkan dari tab Sesi kapan saja.',
      controls: [btn('Mulai Sesi Baru', function () { clearDraft(); showTargetSetup(); }, 'cup-btn-ghost')]
    });
  }

  // ====================== PERSISTENCE ======================
  function saveDraft() {
    state.updatedAt = new Date().toISOString();
    saveToStorage(DRAFT_KEY, state);
  }
  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
  }

  async function persistSession() {
    state.updatedAt = new Date().toISOString();
    try {
      const res = await apiCall('saveCleanupProcedure', state);
      if (!res || !res.success) {
        // Backend off/unconfigured — local copy still kept.
        saveLocalHistory(state);
      }
    } catch (e) {
      console.error('persist error', e);
      saveLocalHistory(state);
      showToast('Tersimpan lokal (server tidak terjangkau)', 'error');
    }
  }

  function saveLocalHistory(s) {
    const hist = loadFromStorage('cleanupProcedure_history', []);
    const i = hist.findIndex(function (x) { return x.sessionId === s.sessionId; });
    if (i >= 0) hist[i] = s; else hist.unshift(s);
    saveToStorage('cleanupProcedure_history', hist);
  }

  async function loadSessions() {
    try {
      const res = await apiCall('getCleanupProcedures');
      if (res && res.success && Array.isArray(res.data)) return res.data;
    } catch (e) { console.error('load error', e); }
    return loadFromStorage('cleanupProcedure_history', []);
  }

  // ====================== TABS ======================
  function switchTab(name) {
    stopSpeak();
    clearCupAuto();
    document.querySelectorAll('.cup-tab').forEach(function (b) { b.classList.toggle('active', b.dataset.tab === name); });
    document.querySelectorAll('.cup-panel').forEach(function (p) { p.classList.toggle('active', p.id === 'cup-tab-' + name); });
    if (name === 'riwayat') renderRiwayat();
    if (name === 'people') renderPeople();
    if (name === 'dashboard') renderDashboard();
  }

  async function renderRiwayat() {
    const box = document.getElementById('cup-riwayat-list');
    box.textContent = 'Memuat...';
    const sessions = await loadSessions();
    while (box.firstChild) box.removeChild(box.firstChild);
    if (!sessions.length) { box.appendChild(emptyState('📜', 'Belum ada riwayat sesi')); return; }
    sessions.forEach(function (s) {
      const t = totalsOf2(s);
      const card = el('div', { class: 'cup-list-card' }, [
        el('div', { class: 'cup-list-top' }, [
          el('strong', { text: s.targetPerson || '(tanpa nama)' }),
          el('span', { class: 'cup-badge ' + (s.status === 'complete' ? 'done' : 'ongoing'), text: s.status === 'complete' ? 'Selesai' : 'Ongoing' })
        ]),
        el('div', { class: 'cup-list-meta', text: (s.relasi || '-') + ' · ' + fmtDate(s.createdAt) + ' · ' + t.releases + ' release · ' + t.tw + ' TW' })
      ]);
      box.appendChild(card);
    });
  }

  async function renderPeople() {
    const box = document.getElementById('cup-people-list');
    box.textContent = 'Memuat...';
    const sessions = await loadSessions();
    const map = {};
    sessions.forEach(function (s) {
      const n = s.targetPerson; if (!n) return;
      if (!map[n]) map[n] = { name: n, relasi: s.relasi || '', sessions: 0, releases: 0 };
      map[n].sessions++; map[n].releases += totalsOf2(s).releases;
    });
    const people = Object.keys(map).map(function (k) { return map[k]; });
    while (box.firstChild) box.removeChild(box.firstChild);
    if (!people.length) { box.appendChild(emptyState('👥', 'Belum ada orang yang di-cleanup')); return; }
    people.forEach(function (p) {
      box.appendChild(el('div', { class: 'cup-list-card' }, [
        el('div', { class: 'cup-list-top' }, [
          el('div', { class: 'cup-avatar', text: (p.name[0] || '?').toUpperCase() }),
          el('div', {}, [el('strong', { text: p.name }), el('div', { class: 'cup-list-meta', text: (p.relasi || '-') + ' · ' + p.sessions + ' sesi' })])
        ]),
        el('div', { class: 'cup-list-stat', text: p.releases + ' releases' })
      ]));
    });
  }

  async function renderDashboard() {
    const box = document.getElementById('cup-dashboard-body');
    box.textContent = 'Memuat...';
    const sessions = await loadSessions();
    const per = { control: 0, approval: 0, security: 0, separation: 0 };
    const people = {};
    let totalReleases = 0, totalTW = 0, complete = 0;
    sessions.forEach(function (s) {
      if (s.targetPerson) people[s.targetPerson] = (people[s.targetPerson] || 0) + 1;
      if (s.status === 'complete') complete++;
      WANTING_ORDER.forEach(function (w) {
        const r = (s.wantings && s.wantings[w] && s.wantings[w].releases) || 0;
        per[w] += r; totalReleases += r; totalTW += (s.wantings && s.wantings[w] && s.wantings[w].twCount) || 0;
      });
    });
    let topPerson = '-', topN = 0;
    Object.keys(people).forEach(function (k) { if (people[k] > topN) { topN = people[k]; topPerson = k; } });

    while (box.firstChild) box.removeChild(box.firstChild);
    const stats = el('div', { class: 'cup-stat-grid' }, [
      statCard(sessions.length, 'Total Sesi'),
      statCard(complete, 'Selesai'),
      statCard(Object.keys(people).length, 'Orang'),
      statCard(totalReleases, 'Total Release'),
      statCard(totalTW, 'Total TW'),
      statCard(topPerson, 'Paling Sering')
    ]);
    box.appendChild(stats);
    box.appendChild(el('h3', { class: 'cup-h3', text: 'Release per Wanting' }));
    const maxv = Math.max(1, per.control, per.approval, per.security, per.separation);
    WANTING_ORDER.forEach(function (w) {
      const wd = WANTINGS[w];
      const barFill = el('div', { class: 'cup-bar-fill' });
      barFill.style.width = Math.round((per[w] / maxv) * 100) + '%';
      barFill.style.background = wd.color;
      box.appendChild(el('div', { class: 'cup-bar-row' }, [
        el('span', { class: 'cup-bar-label', text: wd.icon + ' ' + wd.label }),
        el('div', { class: 'cup-bar', text: '' }, [barFill]),
        el('span', { class: 'cup-bar-val', text: String(per[w]) })
      ]));
    });
  }

  function statCard(v, label) {
    return el('div', { class: 'cup-stat-card' }, [el('div', { class: 'cup-stat-val', text: String(v) }), el('div', { class: 'cup-stat-label', text: label })]);
  }
  function emptyState(icon, msg) {
    return el('div', { class: 'cup-empty' }, [el('div', { class: 'cup-empty-icon', text: icon }), el('p', { text: msg })]);
  }
  function totalsOf2(s) {
    let releases = 0, tw = 0;
    WANTING_ORDER.forEach(function (w) {
      releases += (s.wantings && s.wantings[w] && s.wantings[w].releases) || 0;
      tw += (s.wantings && s.wantings[w] && s.wantings[w].twCount) || 0;
    });
    return { releases: releases, tw: tw };
  }
  function fmtDate(iso) {
    if (!iso) return '-';
    try { return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }); }
    catch (e) { return '-'; }
  }

  // ====================== REFERENCE ======================
  function renderReference() {
    const box = document.getElementById('cup-reference-body');
    if (!box || box.dataset.done) return;
    WANTING_ORDER.forEach(function (w) {
      const wd = WANTINGS[w];
      const sec = el('div', { class: 'cup-ref-section' });
      sec.appendChild(el('h3', { class: 'cup-h3', text: wd.icon + ' ' + wd.label }));
      sec.appendChild(el('p', { class: 'cup-ref-intro', text: wd.intro.replace(/\{nama\}/g, '[Nama]') }));
      [['Bagian A', wd.setA], ['Bagian B', wd.setB]].forEach(function (pair) {
        sec.appendChild(el('div', { class: 'cup-ref-sub', text: pair[0] + ' — ' + pair[1].trigger.replace(/\{nama\}/g, '[Nama]') }));
        const ul = el('ul', { class: 'cup-ref-list' });
        pair[1].releases.forEach(function (r) { ul.appendChild(el('li', { text: r.replace(/\{nama\}/g, '[Nama]') })); });
        sec.appendChild(ul);
      });
      sec.appendChild(el('div', { class: 'cup-ref-sub', text: 'Completion' }));
      const ulc = el('ul', { class: 'cup-ref-list' });
      wd.completion.forEach(function (c) { ulc.appendChild(el('li', { text: c.replace(/\{nama\}/g, '[Nama]') })); });
      sec.appendChild(ulc);
      box.appendChild(sec);
    });
    box.dataset.done = '1';
  }

  // ====================== SETTINGS ======================
  function loadSettings() {
    settings = Object.assign(defaultSettings(), loadFromStorage(SETTINGS_KEY, {}));
    if (settings.mode !== 'worksheet') settings.mode = settings.mode || 'guided';
  }
  function persistSettings() { saveToStorage(SETTINGS_KEY, settings); }

  function initSettingsTab() {
    const apiIn = document.getElementById('cup-set-api');
    const nameIn = document.getElementById('cup-set-name');
    const modeIn = document.getElementById('cup-set-mode');
    const groundIn = document.getElementById('cup-set-grounding');
    const breathIn = document.getElementById('cup-set-breath');
    const ttsIn = document.getElementById('cup-set-tts');
    if (apiIn) apiIn.value = (typeof getApiUrl === 'function' ? getApiUrl() : '') || '';
    if (nameIn) nameIn.value = (typeof getDefaultName === 'function' ? getDefaultName() : '') || '';
    if (modeIn) modeIn.value = settings.mode || 'guided';
    if (groundIn) groundIn.checked = settings.grounding !== false;
    if (breathIn) breathIn.checked = settings.breath !== false;
    if (ttsIn) ttsIn.checked = settings.tts !== false;

    const saveBtn = document.getElementById('cup-set-save');
    if (saveBtn) saveBtn.addEventListener('click', function () {
      if (apiIn && apiIn.value.trim()) localStorage.setItem('cleanupApiUrl', apiIn.value.trim());
      if (nameIn) localStorage.setItem('cleanupDefaultName', nameIn.value.trim());
      settings.mode = modeIn ? modeIn.value : 'guided';
      settings.grounding = groundIn ? groundIn.checked : true;
      settings.breath = breathIn ? breathIn.checked : true;
      settings.tts = ttsIn ? ttsIn.checked : true;
      persistSettings();
      updateTtsBtn();
      if (!settings.tts) stopSpeak();
      showToast('Pengaturan disimpan', 'success');
    });

    // TTS voice + rate controls
    const ttsOptions = document.getElementById('cup-tts-options');
    if (ttsOptions && !ttsSupported) ttsOptions.style.display = 'none';

    const voiceSel = document.getElementById('cup-set-voice');
    if (voiceSel) {
      populateVoiceSelect();
      voiceSel.addEventListener('change', function () {
        settings.voiceURI = voiceSel.value;
        persistSettings();
        resolveVoice();
      });
    }

    const rateIn = document.getElementById('cup-set-rate');
    const rateVal = document.getElementById('cup-set-rate-val');
    if (rateIn) {
      rateIn.value = settings.rate || 0.95;
      if (rateVal) rateVal.textContent = (settings.rate || 0.95).toFixed(2) + '×';
      rateIn.addEventListener('input', function () {
        settings.rate = parseFloat(rateIn.value);
        if (rateVal) rateVal.textContent = settings.rate.toFixed(2) + '×';
        persistSettings();
      });
    }

    const testBtn = document.getElementById('cup-set-voice-test');
    if (testBtn) testBtn.addEventListener('click', function () {
      speakNow('Halo. Ini contoh suara untuk sesi pelepasan. Bisakah kamu melepaskannya?');
    });

    const clearBtn = document.getElementById('cup-set-clear');
    if (clearBtn) clearBtn.addEventListener('click', function () {
      if (!confirm('Hapus semua data cleanup (draft + riwayat lokal)? Tindakan ini tidak bisa dibatalkan.')) return;
      clearDraft();
      try { localStorage.removeItem('cleanupProcedure_history'); } catch (e) {}
      showToast('Data lokal dihapus', 'success');
    });
  }

  // ====================== INIT ======================
  function init() {
    loadSettings();
    if (ttsSupported) loadVoices(); // apply saved voice + populate dropdown

    // Wire tabs
    document.querySelectorAll('.cup-tab').forEach(function (b) {
      b.addEventListener('click', function () { switchTab(b.dataset.tab); });
    });

    // Travel mode toggle (hands-free), inserted above the stage.
    const stageEl = document.getElementById('cup-stage');
    if (stageEl && !document.getElementById('cup-travel-toggle')) {
      const cb = el('input', { attrs: { type: 'checkbox', id: 'cup-travel-toggle' } });
      cb.checked = cupTravelEnabled();
      cb.addEventListener('change', function () {
        try {
          localStorage.setItem('sedonaTravelMode', cb.checked ? 'true' : 'false');
          if (cb.checked) {
            localStorage.setItem('sedonaAutoAdvance', 'true');
            localStorage.setItem('sedonaTTS', 'true');
          }
        } catch (e) {}
        if (cb.checked) {
          // Hands-free needs voice on; enable Clean Up's own TTS too.
          settings.tts = true; persistSettings(); updateTtsBtn();
          showToast('🚗 Mode Perjalanan aktif — sesi berjalan otomatis dengan suara', 'success');
        }
      });
      const wrap = el('label', {}, [cb,
        el('span', { text: '🚗 Mode Perjalanan (hands-free) — semua langkah otomatis dengan timer & suara, tanpa perlu mengetuk. Cocok saat di jalan.' })]);
      wrap.style.cssText = 'display:flex;align-items:center;gap:.5rem;font-size:.82rem;color:#555;'
        + 'margin:0 auto 1rem;max-width:760px;padding:.6rem .8rem;cursor:pointer;'
        + 'background:rgba(40,116,166,.06);border:1px solid rgba(40,116,166,.2);border-radius:10px;';
      stageEl.parentNode.insertBefore(wrap, stageEl);
    }

    // Wire TTS header toggle (hidden if the browser has no speech synthesis)
    const ttsBtn = document.getElementById('cup-tts-toggle');
    if (ttsBtn) {
      if (!ttsSupported) { ttsBtn.style.display = 'none'; }
      else {
        updateTtsBtn();
        ttsBtn.addEventListener('click', function () {
          settings.tts = !settings.tts;
          persistSettings();
          updateTtsBtn();
          const set = document.getElementById('cup-set-tts');
          if (set) set.checked = settings.tts;
          if (!settings.tts) stopSpeak();
        });
      }
    }

    renderReference();
    initSettingsTab();

    // Resume draft if ongoing
    const draft = loadFromStorage(DRAFT_KEY, null);
    if (draft && draft.sessionId && draft.status === 'ongoing') {
      offerResume(draft);
    } else {
      showTargetSetup();
    }
  }

  function offerResume(draft) {
    screen({
      eyebrow: '🔄 Sesi Belum Selesai',
      question: 'Lanjutkan cleanup untuk ' + (draft.targetPerson || 'sesi sebelumnya') + '?',
      sub: 'Kamu sedang di lapis ' + (WANTINGS[draft.currentWanting] ? WANTINGS[draft.currentWanting].label : draft.currentWanting) + '.',
      controls: [
        btn('Lanjutkan', function () { state = draft; renderProgress(); resumeFlow(); }),
        btn('Mulai Baru', function () { clearDraft(); showTargetSetup(); }, 'cup-btn-ghost')
      ]
    });
  }

  // Resume re-enters at the current wanting's intro (safe, never mid-screen).
  function resumeFlow() {
    const w = WANTING_ORDER.indexOf(state.currentWanting) >= 0 ? state.currentWanting : 'control';
    startWanting(w);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // Expose only switchTab for any inline needs (kept minimal).
  window.CleanupProcedure = { switchTab: switchTab };
})();
