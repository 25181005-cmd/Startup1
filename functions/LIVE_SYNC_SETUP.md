# 🚀 Live Firebase → Google Sheets Sync Setup Guide

## Overview
This guide will set up **real-time synchronization** from Firebase Firestore to Google Sheets. Every pledge submitted will instantly appear in your Google Sheet.

**Your Google Sheet ID**: `1CxLF50r7TC4DG4HIhz7OMuUBI_Z8Ygwcq405oGEW28o`

---

## Step 1: Create Google Cloud Service Account

### 1.1 Go to Firebase Console
1. Open [Firebase Console](https://console.firebase.google.com)
2. Select your project: **rechargearth-d1f7d**
3. Click **⚙️ Settings** (top left) → **Project Settings**
4. Go to **Service Accounts** tab

### 1.2 Generate Private Key
1. Click **Generate New Private Key**
2. A JSON file will download (save it safely!)
3. Open the downloaded JSON file and look for:
   ```
   "client_email": "firebase-adminsdk-xxxxx@rechargearth-d1f7d.iam.gserviceaccount.com"
   ```

---

## Step 2: Share Google Sheet with Service Account

### 2.1 Grant Sheets Access
1. Go to your [RechargEarth Pledges Google Sheet](https://docs.google.com/spreadsheets/d/1CxLF50r7TC4DG4HIhz7OMuUBI_Z8Ygwcq405oGEW28o/edit)
2. Click **Share** (top right)
3. Copy the `client_email` from Step 1.2
4. Paste it in the Share dialog
5. Select **Editor** role
6. Click **Share**

---

## Step 3: Enable Google Sheets API

### 3.1 In Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select project: **rechargearth-d1f7d**
3. Search for "Google Sheets API"
4. Click **Enable**

---

## Step 4: Configure Environment Variables

### 4.1 Create .env file in functions/ folder

Create a new file: `functions/.env` with:

```env
GOOGLE_SHEET_ID=1CxLF50r7TC4DG4HIhz7OMuUBI_Z8Ygwcq405oGEW28o
GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_url_here
```

### 4.2 Add to .env.local (for local development)

Create `functions/.env.local` with the same content.

---

## Step 5: Install Dependencies

### 5.1 Install npm packages

```bash
cd functions
npm install
```

This will install the newly added `googleapis` library.

---

## Step 6: Deploy Cloud Functions

### 6.1 Deploy to Firebase

```bash
firebase deploy --only functions
```

Wait for deployment to complete. You should see:
```
✔  Deploy complete!

Function URL (syncFirestoreToSheetsLive): ...
```

---

## Step 7: Test the Setup

### 7.1 Submit a Test Pledge
1. Go to [RechargEarth Form](https://probable-bassoon-r4pr6rppq494c5v6w-8080.app.github.dev)
2. Fill out the pledge form
3. Submit the form

### 7.2 Verify Data Appears in Sheet
1. Open your [Google Sheet](https://docs.google.com/spreadsheets/d/1CxLF50r7TC4DG4HIhz7OMuUBI_Z8Ygwcq405oGEW28o/edit)
2. Check if a new row appeared with your data
3. It should appear within **1-2 seconds**

### 7.3 Check Cloud Function Logs
```bash
firebase functions:log
```

Look for success messages like:
```
Live sync to Google Sheets successful {
  pledgeId: 'xxx',
  updatedRange: 'Sheet1!A2:G2',
  updatedRows: 1
}
```

---

## Troubleshooting

### Problem: "GOOGLE_SHEET_ID not configured"
**Solution**: Make sure `.env` file exists in `functions/` folder with the Sheet ID

### Problem: "Error syncing to Google Sheets Live"
**Possible Causes**:
- Service account doesn't have Editor access to the sheet
- Google Sheets API not enabled
- Invalid Sheet ID

**Fix**:
1. Verify service account email is shared with Editor role
2. Enable Google Sheets API in Cloud Console
3. Double-check Sheet ID

### Problem: Data appears in Firestore but not in Sheet
**Solution**: Check Cloud Function logs:
```bash
firebase functions:log --tail
```

---

## How It Works

```
┌─────────────────────────────────────────────────────┐
│  User submits pledge form                           │
└──────────────────┬──────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────────────────┐
│  Data saved to Firestore                            │
└──────────────────┬──────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────────────────┐
│  onDocumentCreated trigger fires (INSTANT)          │
└──────────────────┬──────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────────────────┐
│  syncFirestoreToSheetsLive Cloud Function runs      │
│  - Reads pledge data from Firestore                 │
│  - Authenticates with Google Sheets API             │
│  - Appends row to Google Sheet                      │
└──────────────────┬──────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────────────────┐
│  Google Sheet updated with new row (1-2 seconds)    │
└─────────────────────────────────────────────────────┘
```

---

## Files Modified

✅ `functions/index.js` - Added `syncFirestoreToSheetsLive` function
✅ `functions/package.json` - Added `googleapis` dependency
⏳ `.env` - Environment variables (to be created)

---

## Support

If you encounter issues:
1. Check Firebase Console → Functions → Logs
2. Verify service account permissions
3. Ensure Google Sheets API is enabled
4. Run: `firebase functions:log --tail` for real-time logs

---

**Setup Time**: ~15 minutes
**Complexity**: Medium (service account creation is the main step)
**Benefit**: True real-time Google Sheets sync ✨