// ==========================================================================
// SEDONA METHOD - CENTRAL CONFIGURATION
// ==========================================================================
// Single source of truth for deployment-specific settings. Edit these values
// when you fork the app or re-deploy the Apps Script Web App.
//
// Load this file BEFORE common.js / manifesting-app.js in each HTML page:
//   <script src="config.js"></script>
//   <script src="common.js"></script>
//
// If this file is missing, common.js / manifesting-app.js fall back to their
// own built-in defaults, so the app keeps working.
//
// Tip: to keep these values out of the repo, add `config.js` to .gitignore and
// commit a `config.example.js` template instead.
// ==========================================================================
window.SEDONA_CONFIG = {
  // Google Apps Script Web App URL (Deploy > Web App > exec URL)
  apiUrl: 'https://script.google.com/macros/s/AKfycbx2i2bl-uyoDPZ30r6QZ0tvA3qYMf0ajTbLKGWXzuQPs_lyTKOOBg7-nDLJqoi9T-h7LA/exec',

  // Default name pre-filled for sessions (leave '' to require the user to type it)
  defaultName: 'Firdaus Dabamona'
};
