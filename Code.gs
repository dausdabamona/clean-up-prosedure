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

// ==========================================================================
// SHEET HEADERS
// ==========================================================================
const TRACKER_HEADERS = [
  'No', 'Timestamp', 'Sesi_ID', 'Nama', 'Issue', 'Kategori',
  'Surface_Keyakinan', 'Surface_Lokasi', 'Surface_Intensity',
  'L1_Sessions', 'L1_Total_Sesi', 'L1_IntAkhir',
  'L2_Sessions', 'L2_Total_Sesi', 'L2_IntAkhir',
  'L3_Sessions', 'L3_Total_Sesi', 'L3_IntAkhir',
  'Root_Sessions', 'Root_Total_Sesi', 'Root_IntAkhir', 'Root_Wanting',
  'Status', 'Emotional_State', 'Emotion_Level',
  'Insight', 'Next_Step', 'Durasi_Hari',
  'L1_Resist_Count', 'L2_Resist_Count', 'L3_Resist_Count', 'Root_Resist_Count',
  'Triple_Welcoming_Used'
];

const DRAFT_HEADERS = [
  'Sesi_ID', 'Tanggal_Mulai', 'Terakhir_Edit', 'Nama', 'Issue', 'Kategori',
  'Root_Wanting', 'Int_Awal', 'Current_Int', 'Layer_Stuck', 'Status', 'Full_Data'
];

// ==========================================================================
// SETUP FUNCTION - Run once to initialize sheets
// ==========================================================================
function setup() {
  const ss = getSpreadsheet();

  // Create Tracker sheet
  let trackerSheet = ss.getSheetByName('Tracker');
  if (!trackerSheet) {
    trackerSheet = ss.insertSheet('Tracker');
  }
  trackerSheet.clear();
  trackerSheet.getRange(1, 1, 1, TRACKER_HEADERS.length).setValues([TRACKER_HEADERS]);
  trackerSheet.getRange(1, 1, 1, TRACKER_HEADERS.length).setFontWeight('bold').setBackground('#1a5276').setFontColor('#ffffff');
  trackerSheet.setFrozenRows(1);

  // Create Draft sheet
  let draftSheet = ss.getSheetByName('Draft');
  if (!draftSheet) {
    draftSheet = ss.insertSheet('Draft');
  }
  draftSheet.clear();
  draftSheet.getRange(1, 1, 1, DRAFT_HEADERS.length).setValues([DRAFT_HEADERS]);
  draftSheet.getRange(1, 1, 1, DRAFT_HEADERS.length).setFontWeight('bold').setBackground('#f39c12').setFontColor('#ffffff');
  draftSheet.setFrozenRows(1);

  return { success: true, message: 'Sheets initialized successfully!' };
}

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
      case 'setup':
        result = setup();
        break;
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
        result = { success: true, message: 'API is working!', timestamp: new Date().toISOString() };
        break;
      default:
        result = { success: false, message: 'Invalid action: ' + action };
    }
  } catch (error) {
    result = { success: false, message: error.toString(), stack: error.stack };
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  return doGet(e);
}

// ==========================================================================
// HELPER: Get or Create Sheet
// ==========================================================================
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
// HELPER: Find Row by Sesi ID
// ==========================================================================
function findRowBySesiId(sheet, sesiId) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === sesiId) {
      return i + 1;
    }
  }
  return -1;
}

// ==========================================================================
// HELPER: Parse Sessions Array
// ==========================================================================
function parseSessionsArray(data) {
  if (!data || !Array.isArray(data)) return [];
  return data.filter(v => v !== '' && v !== null && v !== undefined)
             .map((val, idx) => ({ sesi: idx + 1, intAfter: parseInt(val) || 0 }));
}

// ==========================================================================
// HELPER: Get Session Stats
// ==========================================================================
function getSessionStats(sessions) {
  if (!sessions || sessions.length === 0) {
    return { totalSesi: 0, intAkhir: null };
  }
  const lastSession = sessions[sessions.length - 1];
  return {
    totalSesi: sessions.length,
    intAkhir: lastSession.intAfter
  };
}

// ==========================================================================
// DRAFT FUNCTIONS
// ==========================================================================
function saveDraft(data) {
  if (!data || !data.sesiId) {
    return { success: false, message: 'Invalid data - sesiId required' };
  }

  const sheet = getOrCreateSheet('Draft', DRAFT_HEADERS);
  const sesiId = data.sesiId;
  const existingRow = findRowBySesiId(sheet, sesiId);

  // Parse sessions
  const l1Sessions = parseSessionsArray(data.l1ReleaseData);
  const l2Sessions = parseSessionsArray(data.l2ReleaseData);
  const l3Sessions = parseSessionsArray(data.l3ReleaseData);
  const rootSessions = parseSessionsArray(data.rootReleaseData);

  // Determine current state
  const intAwal = parseInt(data.surfaceIntensity) || 0;
  const currentInt = data.rootIntensityAfter || data.l3IntensityAfter ||
                     data.l2IntensityAfter || data.l1IntensityAfter ||
                     data.surfaceIntensity || 0;
  const layerStuck = determineLayerStuck(data);

  const draftRow = [
    sesiId,
    data.tanggalMulai || new Date().toISOString(),
    new Date().toISOString(),
    data.nama || '',
    data.issue || '',
    data.kategori || '',
    data.rootWanting || '',
    intAwal,
    currentInt,
    layerStuck,
    data.status || 'IN PROGRESS',
    JSON.stringify(data)
  ];

  if (existingRow > 0) {
    sheet.getRange(existingRow, 1, 1, draftRow.length).setValues([draftRow]);
  } else {
    sheet.appendRow(draftRow);
  }

  return { success: true, message: 'Draft saved!', sesiId: sesiId };
}

function getDrafts() {
  const sheet = getOrCreateSheet('Draft', DRAFT_HEADERS);
  const data = sheet.getDataRange().getValues();

  if (data.length <= 1) {
    return { success: true, drafts: [] };
  }

  const drafts = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    let fullData = {};

    try {
      fullData = JSON.parse(row[11] || '{}');
    } catch (e) {
      fullData = {};
    }

    drafts.push({
      sesiId: row[0],
      tanggalMulai: row[1],
      terakhirEdit: row[2],
      nama: row[3],
      issue: row[4],
      kategori: row[5],
      rootWanting: row[6],
      intAwal: row[7],
      currentInt: row[8],
      layerStuck: row[9],
      status: row[10],
      fullData: fullData
    });
  }

  drafts.sort((a, b) => new Date(b.terakhirEdit) - new Date(a.terakhirEdit));

  return { success: true, drafts: drafts };
}

function deleteDraft(sesiId) {
  if (!sesiId) {
    return { success: false, message: 'SesiId required' };
  }

  const sheet = getOrCreateSheet('Draft', DRAFT_HEADERS);
  const row = findRowBySesiId(sheet, sesiId);

  if (row > 0) {
    sheet.deleteRow(row);
    return { success: true, message: 'Draft deleted!' };
  }

  return { success: false, message: 'Draft not found' };
}

// ==========================================================================
// TRACKER FUNCTIONS
// ==========================================================================
function saveComplete(data) {
  if (!data || !data.sesiId) {
    return { success: false, message: 'Invalid data - sesiId required' };
  }

  const sheet = getOrCreateSheet('Tracker', TRACKER_HEADERS);
  const lastRow = Math.max(sheet.getLastRow(), 1);
  const no = lastRow;

  // Parse sessions
  const l1Sessions = parseSessionsArray(data.l1ReleaseData);
  const l2Sessions = parseSessionsArray(data.l2ReleaseData);
  const l3Sessions = parseSessionsArray(data.l3ReleaseData);
  const rootSessions = parseSessionsArray(data.rootReleaseData);

  const l1Stats = getSessionStats(l1Sessions);
  const l2Stats = getSessionStats(l2Sessions);
  const l3Stats = getSessionStats(l3Sessions);
  const rootStats = getSessionStats(rootSessions);

  // Calculate duration
  const startDate = data.tanggalMulai ? new Date(data.tanggalMulai) : new Date();
  const endDate = new Date();
  const durasiHari = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) || 1;

  // Count resistances
  const l1ResistCount = countResistances(data.l1Resistance);
  const l2ResistCount = countResistances(data.l2Resistance);
  const l3ResistCount = countResistances(data.l3Resistance);
  const rootResistCount = countResistances(data.rootResistance);

  // Check Triple Welcoming
  const twUsed = !!(data.l1TripleWelcoming || data.l2TripleWelcoming || data.l3TripleWelcoming);

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
    JSON.stringify(l1Sessions),
    l1Stats.totalSesi,
    l1Stats.intAkhir,
    JSON.stringify(l2Sessions),
    l2Stats.totalSesi,
    l2Stats.intAkhir,
    JSON.stringify(l3Sessions),
    l3Stats.totalSesi,
    l3Stats.intAkhir,
    JSON.stringify(rootSessions),
    rootStats.totalSesi,
    rootStats.intAkhir,
    data.rootWanting || '',
    data.hasilStatus || '',
    data.emotionalState || '',
    getEmotionLevel(data.emotionalState),
    data.hasilInsight || '',
    data.hasilNextStep || '',
    durasiHari,
    l1ResistCount,
    l2ResistCount,
    l3ResistCount,
    rootResistCount,
    twUsed
  ];

  sheet.appendRow(trackerRow);

  // Delete from drafts
  deleteDraft(data.sesiId);

  return { success: true, message: 'Session completed!', no: no };
}

// Count resistances in resistance data
function countResistances(resistanceData) {
  if (!resistanceData) return 0;
  let count = 0;
  if (resistanceData.Bisakah && resistanceData.Bisakah.released) count++;
  if (resistanceData.Mau && resistanceData.Mau.released) count++;
  if (resistanceData.Kapan && resistanceData.Kapan.released) count++;
  return count;
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
      surfaceIntensity: row[8],
      l1TotalSesi: row[10],
      l1IntAkhir: row[11],
      l2TotalSesi: row[13],
      l2IntAkhir: row[14],
      l3TotalSesi: row[16],
      l3IntAkhir: row[17],
      rootTotalSesi: row[19],
      rootIntAkhir: row[20],
      rootWanting: row[21],
      status: row[22],
      emotionalState: row[23],
      emotionLevel: row[24],
      insight: row[25],
      nextStep: row[26],
      durasiHari: row[27]
    });
  }

  sessions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return { success: true, sessions: sessions };
}

// ==========================================================================
// STATS FUNCTIONS
// ==========================================================================
function getStats() {
  const trackerSheet = getOrCreateSheet('Tracker', TRACKER_HEADERS);
  const draftSheet = getOrCreateSheet('Draft', DRAFT_HEADERS);

  const trackerData = trackerSheet.getDataRange().getValues();
  const draftData = draftSheet.getDataRange().getValues();

  const totalSesi = trackerData.length > 1 ? trackerData.length - 1 : 0;
  const pendingDrafts = draftData.length > 1 ? draftData.length - 1 : 0;

  let totalSukses = 0;
  const emotionCount = {};
  const wantingCount = {};
  let totalL1Sesi = 0, countL1 = 0;
  let totalL2Sesi = 0, countL2 = 0;
  let totalL3Sesi = 0, countL3 = 0;
  let totalRootSesi = 0, countRoot = 0;

  // Resistance tracking
  let totalResistance = 0;
  let l1ResistTotal = 0, l2ResistTotal = 0, l3ResistTotal = 0, rootResistTotal = 0;
  let twCount = 0;

  for (let i = 1; i < trackerData.length; i++) {
    const row = trackerData[i];
    const status = row[22];
    const emotionalState = row[23];
    const emotionLevel = row[24];
    const wanting = row[21];
    const l1Total = parseInt(row[10]) || 0;
    const l2Total = parseInt(row[13]) || 0;
    const l3Total = parseInt(row[16]) || 0;
    const rootTotal = parseInt(row[19]) || 0;

    // Resistance columns (28-32)
    const l1Resist = parseInt(row[28]) || 0;
    const l2Resist = parseInt(row[29]) || 0;
    const l3Resist = parseInt(row[30]) || 0;
    const rootResist = parseInt(row[31]) || 0;
    const twUsed = row[32];

    if (status === 'SUKSES') totalSukses++;

    // Count emotions
    if (emotionLevel >= 1 && emotionLevel <= 9) {
      emotionCount[emotionLevel] = (emotionCount[emotionLevel] || 0) + 1;
    }

    // Count wanting
    if (wanting) {
      wantingCount[wanting] = (wantingCount[wanting] || 0) + 1;
    }

    // Session averages
    if (l1Total > 0) { totalL1Sesi += l1Total; countL1++; }
    if (l2Total > 0) { totalL2Sesi += l2Total; countL2++; }
    if (l3Total > 0) { totalL3Sesi += l3Total; countL3++; }
    if (rootTotal > 0) { totalRootSesi += rootTotal; countRoot++; }

    // Resistance totals
    l1ResistTotal += l1Resist;
    l2ResistTotal += l2Resist;
    l3ResistTotal += l3Resist;
    rootResistTotal += rootResist;
    totalResistance += (l1Resist + l2Resist + l3Resist + rootResist);
    if (twUsed) twCount++;
  }

  // Primary wanting
  let primaryWanting = '-';
  let maxWantingCount = 0;
  for (const [wanting, count] of Object.entries(wantingCount)) {
    if (count > maxWantingCount) {
      maxWantingCount = count;
      primaryWanting = wanting;
    }
  }

  // Layer with most resistance
  const resistByLayer = { L1: l1ResistTotal, L2: l2ResistTotal, L3: l3ResistTotal, ROOT: rootResistTotal };
  let maxResistLayer = '-';
  let maxResist = 0;
  for (const [layer, count] of Object.entries(resistByLayer)) {
    if (count > maxResist) {
      maxResist = count;
      maxResistLayer = layer;
    }
  }

  const successRate = totalSesi > 0 ? Math.round((totalSukses / totalSesi) * 100) : 0;
  const twRate = totalSesi > 0 ? Math.round((twCount / totalSesi) * 100) : 0;

  // Calculate positive vs negative sessions
  let positiveCount = 0;
  let negativeCount = 0;
  for (const [level, count] of Object.entries(emotionCount)) {
    if (parseInt(level) >= 7) {
      positiveCount += count;
    } else {
      negativeCount += count;
    }
  }
  const totalEmotions = positiveCount + negativeCount;
  const positiveRate = totalEmotions > 0 ? Math.round((positiveCount / totalEmotions) * 100) : 0;

  return {
    success: true,
    stats: {
      totalSesi: totalSesi,
      totalSukses: totalSukses,
      successRate: successRate,
      pendingDrafts: pendingDrafts,
      primaryWanting: primaryWanting,
      emotionCount: emotionCount,
      wantingCount: wantingCount,
      avgL1Sesi: countL1 > 0 ? (totalL1Sesi / countL1).toFixed(1) : '-',
      avgL2Sesi: countL2 > 0 ? (totalL2Sesi / countL2).toFixed(1) : '-',
      avgL3Sesi: countL3 > 0 ? (totalL3Sesi / countL3).toFixed(1) : '-',
      avgRootSesi: countRoot > 0 ? (totalRootSesi / countRoot).toFixed(1) : '-',
      positiveRate: positiveRate,
      positiveCount: positiveCount,
      negativeCount: negativeCount,
      totalResistance: totalResistance,
      maxResistLayer: maxResistLayer,
      twCount: twCount,
      twRate: twRate
    }
  };
}

// ==========================================================================
// HELPER FUNCTIONS
// ==========================================================================
function determineLayerStuck(data) {
  const rootInt = parseInt(data.rootIntensityAfter);
  const l3Int = parseInt(data.l3IntensityAfter);
  const l2Int = parseInt(data.l2IntensityAfter);
  const l1Int = parseInt(data.l1IntensityAfter);

  if (!isNaN(rootInt) && rootInt > 1) return `ROOT (${rootInt})`;
  if (!isNaN(l3Int) && l3Int > 1) return `L3 (${l3Int})`;
  if (!isNaN(l2Int) && l2Int > 1) return `L2 (${l2Int})`;
  if (!isNaN(l1Int) && l1Int > 1) return `L1 (${l1Int})`;

  if (!isNaN(rootInt) && rootInt <= 1) return 'DONE';
  if (!isNaN(l3Int) && l3Int <= 1) return 'L3 Done';
  if (!isNaN(l2Int) && l2Int <= 1) return 'L2 Done';
  if (!isNaN(l1Int) && l1Int <= 1) return 'L1 Done';

  return 'SURFACE';
}

function getEmotionLevel(emotionalState) {
  if (!emotionalState) return 0;
  const match = emotionalState.toString().match(/^(\d)/);
  return match ? parseInt(match[1]) : 0;
}

// ==========================================================================
// TEST FUNCTIONS
// ==========================================================================
function testAPI() {
  Logger.log('=== Testing API ===');

  Logger.log('Testing ping...');
  const ping = doGet({ parameter: { action: 'ping' } });
  Logger.log(ping.getContent());

  Logger.log('Testing getDrafts...');
  const drafts = doGet({ parameter: { action: 'getDrafts' } });
  Logger.log(drafts.getContent());

  Logger.log('Testing getTracker...');
  const tracker = doGet({ parameter: { action: 'getTracker' } });
  Logger.log(tracker.getContent());

  Logger.log('Testing getStats...');
  const stats = doGet({ parameter: { action: 'getStats' } });
  Logger.log(stats.getContent());
}

function testSaveDraft() {
  const testData = {
    sesiId: 'TEST-123',
    nama: 'Test User',
    issue: 'Test Issue',
    kategori: 'Keyakinan Negatif',
    surfaceIntensity: '8',
    l1ReleaseData: ['8', '6', '3'],
    l1IntensityAfter: 3,
    rootWanting: 'Control'
  };

  const result = saveDraft(testData);
  Logger.log(result);
}
