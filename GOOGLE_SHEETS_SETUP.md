# Connect Pledge Form to Google Sheets - Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet: "RechargEarth Pledges"
3. Add headers in row 1:
   ```
   Date | Type | ID | First Name | Last Name | Full Name | Email | Phone | Birthday
   ```

### Step 2: Create Google Apps Script Webhook
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete default code, paste this:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Add new row with pledge data
    sheet.appendRow([
      new Date(),
      data.type || 'pledge',
      data.id || '',
      data.firstName || '',
      data.lastName || '',
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.birthday || ''
    ]);
    
    return ContentService.createTextOutput(
      JSON.stringify({success: true, message: 'Data received'})
    ).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(
      JSON.stringify({success: false, error: err.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save (Ctrl+S)
4. Click **Deploy** → **New deployment**
5. Select type: **Web app**
6. "Execute as": Your Google account
7. "Who has access": **Anyone**
8. Click **Deploy**
9. **Copy the URL** that appears (looks like):
   ```
   https://script.google.com/macros/d/[ID]/usercopy?state=CODE
   ```

### Step 3: Add to Cloud Functions
1. Open [Firebase Console](https://console.firebase.google.com)
2. Go to **Functions**
3. Add environment variable:
   - Name: `GOOGLE_SHEETS_WEBHOOK_URL`
   - Value: Paste the URL from Step 2

### Step 4: Deploy Functions
```bash
firebase deploy --only functions
```

## How It Works

### Automatic Sync (Every New Pledge)
- User submits pledge on website
- Firestore saves the data
- Cloud Function `syncPledgeToSheets` automatically triggers
- Data sent to Google Sheet in real-time

### Manual Sync (All Pledges)
If you need to backfill existing pledges:

**Option A: Using Firebase Console**
1. Go to Functions tab
2. Find `syncPledgesToSheets` function
3. Click **Test the Function**
4. Click **Execute**
5. See results in console

**Option B: Using Command Line**
```bash
curl -X POST https://YOUR_PROJECT.cloudfunctions.net/syncPledgesToSheets
```

## Testing

### Test the Webhook Connection
1. Submit a new pledge on the website
2. Check your Google Sheet
3. New row should appear within 2-3 seconds

### If It Doesn't Work
1. Check Firebase Cloud Functions logs:
   ```bash
   firebase functions:log
   ```
2. Look for errors related to webhook URL
3. Verify the Google Apps Script URL is correct
4. Make sure Google Sheet has proper headers

## What Gets Synced

Each pledge includes:
- ✅ Date submitted
- ✅ Full name
- ✅ Email address
- ✅ Phone number
- ✅ Birthday
- ✅ Unique ID
- ✅ Timestamp

## Troubleshooting

### "Webhook URL error"
→ Copy the Apps Script URL again, make sure it ends with the full path

### "Cannot read property 'seconds'"
→ Firestore timestamp not set properly, check database

### "Google Sheets not updating"
→ Check Firebase logs: `firebase functions:log --tail`

### "403 Forbidden"
→ Make sure Google Apps Script deployment has "Anyone" access

## Success!
✅ Every new pledge automatically syncs to your Google Sheet
✅ You can export to Excel anytime
✅ All data backed up in Google Drive
