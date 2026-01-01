// ==========================================================================
// CLEAN UP TRACKER - GOOGLE APPS SCRIPT BACKEND
// ==========================================================================
// SETUP:
// 1. Buka Google Sheets baru
// 2. Extensions > Apps Script
// 3. Paste kode ini
// 4. Deploy > New Deployment > Web App
// 5. Execute as: Me, Who has access: Anyone
// 6. Copy URL dan paste ke app.js
// ==========================================================================

// ==========================================================================
// CONFIGURATION
// ==========================================================================
function getSpreadsheet() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

function getOrCreateSheet(name, headers) {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(name);

  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers && headers.length > 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
  }

  return sheet;
}

// ==========================================================================
// SHEET HEADERS
// ==========================================================================
const TRACKER_HEADERS = [
  'No', 'Timestamp', 'SesiId', 'Nama', 'Issue', 'Kategori',
  'SurfaceKeyakinan', 'SurfaceLokasi', 'SurfaceIntensity',
  'L1Pertanyaan', 'L1Jawaban', 'L1Emosi', 'L1IntensityAwal', 'L1Bisakah', 'L1Mau', 'L1Kapan', 'L1ReleaseData', 'L1IntensityAfter',
  'L2Pertanyaan', 'L2Jawaban', 'L2Emosi', 'L2IntensityAwal', 'L2Bisakah', 'L2Mau', 'L2Kapan', 'L2ReleaseData', 'L2IntensityAfter',
  'L3Pertanyaan', 'L3Jawaban', 'L3Emosi', 'L3IntensityAwal', 'L3Bisakah', 'L3Mau', 'L3Kapan', 'L3ReleaseData', 'L3IntensityAfter',
  'RootPertanyaan', 'RootWanting', 'RootIntensityAwal', 'RootDeskripsi', 'RootBisakah', 'RootMau', 'RootKapan', 'RootReleaseData', 'RootIntensityAfter',
  'HasilStatus', 'EmotionalState', 'HasilInsight', 'HasilNextStep',
  'LayerStuck', 'CurrentIntensity', 'Status'
];

const DRAFT_HEADERS = [
  'SesiId', 'TerakhirEdit', 'Nama', 'Issue', 'Kategori',
  'LayerStuck', 'CurrentIntensity', 'RootWanting', 'Status', 'FullData'
];

// ==========================================================================
// WEB APP HANDLER
// ==========================================================================
function doGet(e) {
  const action = e.parameter.action || '';
  const data = e.parameter.data ? JSON.parse(e.parameter.data) : null;
  const sesiId = e.parameter.sesiId || '';

  let result = { success: false, message: 'Unknown action' };

  try {
    switch (action) {
      case 'saveDraft':
        result = saveDraft(data);
        break;
      case 'getDrafts':
        result = getDrafts();
        break;
      case 'deleteDraft':
        result = deleteDraft(sesiId);
        break;
      case 'saveComplete':
        result = saveComplete(data);
        break;
      case 'getTracker':
        result = getTracker();
        break;
      case 'getStats':
        result = getStats();
        break;
      case 'ping':
        result = { success: true, message: 'API is working!' };
        break;
      default:
        result = { success: false, message: 'Invalid action: ' + action };
    }
  } catch (error) {
    result = { success: false, message: error.toString() };
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ==========================================================================
// DRAFT FUNCTIONS
// ==========================================================================
function saveDraft(data) {
  if (!data || !data.sesiId) {
    return { success: false, message: 'Invalid data' };
  }

  const sheet = getOrCreateSheet('Drafts', DRAFT_HEADERS);
  const sesiId = data.sesiId;

  // Check if draft exists
  const existingRow = findRowBySesiId(sheet, sesiId);

  const draftRow = [
    sesiId,
    new Date().toISOString(),
    data.nama || '',
    data.issue || '',
    data.kategori || '',
    data.layerStuck || '',
    data.currentIntensity || '',
    data.rootWanting || '',
    data.status || 'IN PROGRESS',
    JSON.stringify(data) // Store full data as JSON
  ];

  if (existingRow > 0) {
    // Update existing draft
    sheet.getRange(existingRow, 1, 1, draftRow.length).setValues([draftRow]);
  } else {
    // Add new draft
    sheet.appendRow(draftRow);
  }

  return { success: true, message: 'Draft saved', sesiId: sesiId };
}

function getDrafts() {
  const sheet = getOrCreateSheet('Drafts', DRAFT_HEADERS);
  const data = sheet.getDataRange().getValues();

  if (data.length <= 1) {
    return { success: true, drafts: [] };
  }

  const drafts = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    let fullData = {};

    try {
      fullData = JSON.parse(row[9] || '{}');
    } catch (e) {
      fullData = {};
    }

    drafts.push({
      sesiId: row[0],
      terakhirEdit: row[1],
      nama: row[2],
      issue: row[3],
      kategori: row[4],
      layerStuck: row[5],
      currentIntensity: row[6],
      rootWanting: row[7],
      status: row[8],
      fullData: fullData
    });
  }

  // Sort by terakhirEdit descending
  drafts.sort((a, b) => new Date(b.terakhirEdit) - new Date(a.terakhirEdit));

  return { success: true, drafts: drafts };
}

function deleteDraft(sesiId) {
  if (!sesiId) {
    return { success: false, message: 'SesiId required' };
  }

  const sheet = getOrCreateSheet('Drafts', DRAFT_HEADERS);
  const row = findRowBySesiId(sheet, sesiId);

  if (row > 0) {
    sheet.deleteRow(row);
    return { success: true, message: 'Draft deleted' };
  }

  return { success: false, message: 'Draft not found' };
}

// ==========================================================================
// TRACKER FUNCTIONS
// ==========================================================================
function saveComplete(data) {
  if (!data || !data.sesiId) {
    return { success: false, message: 'Invalid data' };
  }

  const sheet = getOrCreateSheet('Tracker', TRACKER_HEADERS);
  const lastRow = sheet.getLastRow();
  const no = lastRow > 0 ? lastRow : 1;

  // Serialize release data arrays to JSON strings
  const l1ReleaseData = Array.isArray(data.l1ReleaseData) ? JSON.stringify(data.l1ReleaseData) : '';
  const l2ReleaseData = Array.isArray(data.l2ReleaseData) ? JSON.stringify(data.l2ReleaseData) : '';
  const l3ReleaseData = Array.isArray(data.l3ReleaseData) ? JSON.stringify(data.l3ReleaseData) : '';
  const rootReleaseData = Array.isArray(data.rootReleaseData) ? JSON.stringify(data.rootReleaseData) : '';

  // Calculate layer stuck and current intensity
  const layerStuck = determineLayerStuck(data);
  const currentIntensity = data.rootIntensityAfter || data.l3IntensityAfter || data.l2IntensityAfter || data.l1IntensityAfter || data.surfaceIntensity || 0;

  const trackerRow = [
    no,
    new Date().toISOString(),
    data.sesiId,
    data.nama || '',
    data.issue || '',
    data.kategori || '',
    data.surfaceKeyakinan || '',
    data.surfaceLokasi || '',
    data.surfaceIntensity || '',
    data.l1Pertanyaan || '',
    data.l1Jawaban || '',
    data.l1Emosi || '',
    data.l1IntensityAwal || '',
    data.l1Bisakah || '',
    data.l1Mau || '',
    data.l1Kapan || '',
    l1ReleaseData,
    data.l1IntensityAfter || '',
    data.l2Pertanyaan || '',
    data.l2Jawaban || '',
    data.l2Emosi || '',
    data.l2IntensityAwal || '',
    data.l2Bisakah || '',
    data.l2Mau || '',
    data.l2Kapan || '',
    l2ReleaseData,
    data.l2IntensityAfter || '',
    data.l3Pertanyaan || '',
    data.l3Jawaban || '',
    data.l3Emosi || '',
    data.l3IntensityAwal || '',
    data.l3Bisakah || '',
    data.l3Mau || '',
    data.l3Kapan || '',
    l3ReleaseData,
    data.l3IntensityAfter || '',
    data.rootPertanyaan || '',
    data.rootWanting || '',
    data.rootIntensityAwal || '',
    data.rootDeskripsi || '',
    data.rootBisakah || '',
    data.rootMau || '',
    data.rootKapan || '',
    rootReleaseData,
    data.rootIntensityAfter || '',
    data.hasilStatus || '',
    data.emotionalState || '',
    data.hasilInsight || '',
    data.hasilNextStep || '',
    layerStuck,
    currentIntensity,
    data.hasilStatus || 'COMPLETED'
  ];

  sheet.appendRow(trackerRow);

  // Delete from drafts if exists
  deleteDraft(data.sesiId);

  return { success: true, message: 'Session saved', no: no };
}

function getTracker() {
  const sheet = getOrCreateSheet('Tracker', TRACKER_HEADERS);
  const data = sheet.getDataRange().getValues();

  if (data.length <= 1) {
    return { success: true, sessions: [] };
  }

  const sessions = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    sessions.push({
      no: row[0],
      timestamp: row[1],
      sesiId: row[2],
      nama: row[3],
      issue: row[4],
      kategori: row[5],
      rootWanting: row[37], // RootWanting column
      emotionLevel: row[46], // EmotionalState column
      status: row[51] // Status column
    });
  }

  // Sort by timestamp descending
  sessions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return { success: true, sessions: sessions };
}

// ==========================================================================
// STATS FUNCTIONS
// ==========================================================================
function getStats() {
  const trackerSheet = getOrCreateSheet('Tracker', TRACKER_HEADERS);
  const draftSheet = getOrCreateSheet('Drafts', DRAFT_HEADERS);

  const trackerData = trackerSheet.getDataRange().getValues();
  const draftData = draftSheet.getDataRange().getValues();

  const totalSesi = trackerData.length > 1 ? trackerData.length - 1 : 0;
  const pendingDrafts = draftData.length > 1 ? draftData.length - 1 : 0;

  // Count successes and emotion distribution
  let totalSukses = 0;
  const emotionCount = {};
  const wantingCount = {};

  for (let i = 1; i < trackerData.length; i++) {
    const row = trackerData[i];
    const status = row[45]; // HasilStatus
    const emotion = row[46]; // EmotionalState
    const wanting = row[37]; // RootWanting

    if (status === 'SUKSES') {
      totalSukses++;
    }

    // Count emotions
    const emotionLevel = parseInt(emotion) || 0;
    if (emotionLevel >= 1 && emotionLevel <= 9) {
      emotionCount[emotionLevel] = (emotionCount[emotionLevel] || 0) + 1;
    }

    // Count wanting
    if (wanting) {
      wantingCount[wanting] = (wantingCount[wanting] || 0) + 1;
    }
  }

  // Find primary wanting
  let primaryWanting = '-';
  let maxWantingCount = 0;
  for (const [wanting, count] of Object.entries(wantingCount)) {
    if (count > maxWantingCount) {
      maxWantingCount = count;
      primaryWanting = wanting;
    }
  }

  const successRate = totalSesi > 0 ? Math.round((totalSukses / totalSesi) * 100) : 0;

  return {
    success: true,
    stats: {
      totalSesi: totalSesi,
      totalSukses: totalSukses,
      successRate: successRate,
      pendingDrafts: pendingDrafts,
      primaryWanting: primaryWanting,
      emotionCount: emotionCount,
      wantingCount: wantingCount
    }
  };
}

// ==========================================================================
// HELPER FUNCTIONS
// ==========================================================================
function findRowBySesiId(sheet, sesiId) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === sesiId) {
      return i + 1; // Return 1-based row number
    }
  }
  return -1;
}

function determineLayerStuck(data) {
  const vals = [
    { name: 'ROOT', val: parseInt(data.rootIntensityAfter) || 99 },
    { name: 'L3', val: parseInt(data.l3IntensityAfter) || 99 },
    { name: 'L2', val: parseInt(data.l2IntensityAfter) || 99 },
    { name: 'L1', val: parseInt(data.l1IntensityAfter) || 99 }
  ];

  for (let v of vals) {
    if (v.val > 2 && v.val < 99) {
      return `${v.name} (${v.val})`;
    }
  }

  return 'DONE';
}

// ==========================================================================
// TEST FUNCTION
// ==========================================================================
function testAPI() {
  // Test ping
  Logger.log('Testing ping...');
  const pingResult = doGet({ parameter: { action: 'ping' } });
  Logger.log(pingResult.getContent());

  // Test getDrafts
  Logger.log('Testing getDrafts...');
  const draftsResult = doGet({ parameter: { action: 'getDrafts' } });
  Logger.log(draftsResult.getContent());

  // Test getTracker
  Logger.log('Testing getTracker...');
  const trackerResult = doGet({ parameter: { action: 'getTracker' } });
  Logger.log(trackerResult.getContent());

  // Test getStats
  Logger.log('Testing getStats...');
  const statsResult = doGet({ parameter: { action: 'getStats' } });
  Logger.log(statsResult.getContent());
}
