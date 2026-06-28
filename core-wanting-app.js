// ============================================================================
// 4 WANTING RELEASE — Coach Lia / Sedona style, via ReleasingEngine
// Setiap wanting dilepas dengan: welcome → Bisakah/Maukah/Kapan → loop
// intensitas → perasaan completion. Tap-or-timer, TTS, huruf besar ikut engine.
// ============================================================================

const CORE_WANTINGS = {
  control: {
    label: 'Control', icon: '🎮', color: '#2874a6',
    desc: 'Keinginan mengendalikan situasi, orang, atau hasil.',
    intro: 'Sekarang soal CONTROL — keinginan untuk mengendalikan situasi, orang, atau hasil.',
    situation: 'Pikirkan satu situasi di mana kamu ingin MENGONTROL — atau merasa DIKONTROL.',
    wantingPhrase: 'keinginan untuk mengontrol',
    completion: 'Bisakah kamu memberi situasi atau orang itu hak untuk menjadi seperti apa adanya?',
    closing: 'Semakin lepas kontrol, semakin kamu memegang kendali sejati.'
  },
  approval: {
    label: 'Approval', icon: '❤️', color: '#9b59b6',
    desc: 'Keinginan dicintai, diterima, dan disetujui.',
    intro: 'Sekarang soal APPROVAL — keinginan untuk dicintai, diterima, dan disetujui.',
    situation: 'Pikirkan di mana kamu menginginkan CINTA atau PERSETUJUAN — atau takut ditolak.',
    wantingPhrase: 'keinginan untuk disetujui dan dicintai',
    completion: 'Bisakah kamu hanya memiliki perasaan welas asih dan penerimaan?',
    closing: 'Sumber cinta sudah ada di dalam dirimu.'
  },
  security: {
    label: 'Security', icon: '🛡️', color: '#e67e22',
    desc: 'Keinginan merasa aman, terlindungi, dan stabil.',
    intro: 'Sekarang soal SECURITY — keinginan untuk merasa aman, terlindungi, dan stabil.',
    situation: 'Pikirkan situasi yang memunculkan rasa takut, cemas, atau tidak aman.',
    wantingPhrase: 'keinginan untuk merasa aman',
    completion: 'Bisakah kamu hanya memiliki perasaan sejahtera, aman, dan percaya?',
    closing: 'Keamanan sejati datang dari dalam, bukan dari luar.'
  },
  separation: {
    label: 'Separation', icon: '🔗', color: '#8e44ad',
    desc: 'Keinginan berbeda/terpisah, atau justru ingin menyatu.',
    intro: 'Yang terakhir, soal SEPARATION — keinginan untuk berbeda/terpisah, atau justru ingin menyatu.',
    situation: 'Pikirkan di mana kamu ingin BERPISAH atau berbeda — atau ingin MENYATU dengan seseorang.',
    wantingPhrase: 'keinginan untuk terpisah atau menyatu',
    completion: 'Bisakah kamu mengizinkan perasaan ONENESS — "saya adalah kamu, kamu adalah saya, hanya ada satu"?',
    closing: 'Kamu sudah terhubung dengan segalanya.'
  }
};

// Build a Coach Lia–style guided script for one wanting.
function buildWantingScript(w) {
  return {
    title: 'Release Wanting ' + w.label,
    wantingType: w.label,
    steps: [
      { type: 'instruction', text: 'Stop sebentar... tarik napas dalam, lalu hembuskan perlahan.', subtext: 'Biarkan tubuh rileks dan hadir di sini.', duration: 8000 },
      { type: 'instruction', text: w.intro, subtext: 'Tidak ada yang perlu dipaksa. Releasing adalah keputusan.', duration: 9000 },
      { type: 'input', text: w.situation, subtext: 'Satu situasi saja.', placeholder: 'Tuliskan situasinya...' },
      { type: 'instruction', text: 'Izinkan ' + w.wantingPhrase + ' itu HADIR sepenuhnya...', subtext: 'Sambut saja. Jangan dilawan, jangan diubah.', duration: 9000 },
      { type: 'instruction', label: 'rel', text: 'Rasakan keinginan itu... lalu, dengan lembut, izinkan untuk dilepaskan.', duration: 7000 },
      { type: 'yesno', text: 'Bisakah kamu melepaskan ' + w.wantingPhrase + '?', subtext: 'Kedua jawaban valid. Yang penting jujur.', highlight: 'Bisa' },
      { type: 'yesno', text: 'Maukah kamu melepaskannya?', highlight: 'Mau' },
      { type: 'when', text: 'Kapan?' },
      { type: 'intensity', text: 'Seberapa kuat keinginan itu terasa sekarang? (0–10)', store: 'i' },
      { type: 'loop', text: 'Mau melepaskan lagi?', subtext: 'Kalau masih terasa (di atas 1), kita ulangi pelepasannya.', backTo: 'rel', whileVar: 'i', whileGt: 1 },
      { type: 'instruction', text: w.completion, subtext: 'Izinkan perasaan yang lebih lega itu mengisi.', duration: 9000 },
      { type: 'completion', text: '🕊️ Wanting ' + w.label + ' Dilepaskan!', subtext: w.closing },
      { type: 'insight', text: 'Ada insight yang ingin dicatat?', placeholder: 'Tulis insight...' }
    ]
  };
}

// ==================== PROGRESS ====================
let cwProgress = (function () {
  try { return JSON.parse(localStorage.getItem('coreWantingProgress')) || {}; } catch (e) { return {}; }
})();

function saveCwProgress() {
  localStorage.setItem('coreWantingProgress', JSON.stringify(cwProgress));
}

function renderCwProgress() {
  const grid = document.getElementById('cwProgressGrid');
  if (!grid) return;
  grid.innerHTML = Object.keys(CORE_WANTINGS).map(function (k) {
    return '<div class="cw-prog"><div class="cw-prog-num">' + (cwProgress[k] || 0) + '</div>' +
           '<div class="cw-prog-lbl">' + CORE_WANTINGS[k].label + '</div></div>';
  }).join('');
}

// Engine script id (prefixed so it never collides with the engine's built-in
// wanting->script map, e.g. 'control' -> 'wanting-control').
function cwEngineId(id) { return 'cw-' + id; }

// ==================== INIT + START ====================
document.addEventListener('DOMContentLoaded', function () {
  if (typeof ReleasingEngine !== 'undefined') {
    Object.keys(CORE_WANTINGS).forEach(function (k) {
      ReleasingEngine.getScripts()[cwEngineId(k)] = buildWantingScript(CORE_WANTINGS[k]);
    });
  }
  renderCwProgress();
});

function startWanting(id) {
  if (typeof ReleasingEngine === 'undefined') { showToast('ReleasingEngine tidak tersedia', 'error'); return; }
  const eid = cwEngineId(id);
  if (!ReleasingEngine.getScript(eid)) {
    ReleasingEngine.getScripts()[eid] = buildWantingScript(CORE_WANTINGS[id]);
  }
  ReleasingEngine.init({
    onComplete: function () {
      cwProgress[id] = (cwProgress[id] || 0) + 1;
      cwProgress.total = (cwProgress.total || 0) + 1;
      saveCwProgress();
      renderCwProgress();
      showToast('Sesi ' + CORE_WANTINGS[id].label + ' selesai!', 'success');
    }
  });
  ReleasingEngine.startReleasing(eid);
}

// Release the 4 wantings back-to-back (sequential) in a single session.
// forceTravel = true menjalankan seluruh sesi hands-free (timer + suara,
// tanpa perlu mengetuk) — "mode lengkap mode perjalanan".
function startAllWantings(forceTravel) {
  if (typeof ReleasingEngine === 'undefined') { showToast('ReleasingEngine tidak tersedia', 'error'); return; }
  const order = ['control', 'approval', 'security', 'separation'];
  // Ensure scripts are registered, then run by their prefixed engine ids.
  order.forEach(function (k) {
    if (!ReleasingEngine.getScript(cwEngineId(k))) {
      ReleasingEngine.getScripts()[cwEngineId(k)] = buildWantingScript(CORE_WANTINGS[k]);
    }
  });
  if (forceTravel) {
    showToast('🚗 Mode Perjalanan — keempat wanting berjalan otomatis dengan suara', 'success');
  }
  ReleasingEngine.startSequentialReleasing(order.map(cwEngineId), {
    travel: !!forceTravel,
    onSequenceComplete: function () {
      order.forEach(function (k) { cwProgress[k] = (cwProgress[k] || 0) + 1; });
      cwProgress.total = (cwProgress.total || 0) + 4;
      saveCwProgress();
      renderCwProgress();
      showToast('🎉 Keempat wanting selesai di-release!', 'success');
    }
  });
}
