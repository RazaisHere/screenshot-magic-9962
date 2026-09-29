/**
 * Writes Goldcrest Views inquiries into this spreadsheet.
 *
 * Setup (once):
 * 1. Open the sheet → Extensions → Apps Script.
 * 2. Replace the editor contents with this file and save.
 * 3. Deploy → New deployment → type: Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 4. Copy the web app URL (it ends in /exec) into INQUIRY_SHEET_URL
 *    in src/lib/inquiry-sheet.ts, then restart the dev server.
 *
 * Columns, in order:
 * Full Name | Phone/Whatsapp | Email | City/Country | Preferred Unit Type | Optional message
 */
var SPREADSHEET_ID = "1fGANxX5zKrGz0OzvYH_qSqqFdRZlIPDNrYUeBpAqP40";

var HEADERS = [
  "Full Name",
  "Phone/Whatsapp",
  "Email",
  "City/Country",
  "Preferred Unit Type",
  "Optional message",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var data = readBody_(e);
    var sheet = getSheet_();
    ensureHeaders_(sheet);
    sheet.appendRow([
      text_(data.fullName),
      text_(data.phone),
      text_(data.email),
      text_(data.cityCountry),
      text_(data.unitType),
      text_(data.message),
    ]);
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheets()[0];
}

function ensureHeaders_(sheet) {
  var first = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  if (first.join("") === "") {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function readBody_(e) {
  var raw = e && e.postData && e.postData.contents;
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (ignore) {}
  }
  return (e && e.parameter) || {};
}

function text_(value) {
  return value == null ? "" : String(value).trim();
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
