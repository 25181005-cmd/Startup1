# Firebase Setup Guide for RechargEarth

## ✅ Firebase is Already Configured!

Your Firebase project `rechargearth-d1f7d` is connected in `index.html`.

## 📋 Quick Steps to Complete Setup:

### 1. Deploy Firestore Rules (Security)
Run these commands in your terminal:

```bash
# Install Firebase CLI (if not installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in this directory
firebase init

# When prompted, select:
# - Firestore (rules and indexes)
# - Hosting
# - Use existing project: rechargearth-d1f7d

# Deploy Firestore rules
firebase deploy --only firestore:rules
```

### 2. Install Email Extension (For Order Notifications)

Go to Firebase Console: https://console.firebase.google.com/project/rechargearth-d1f7d/extensions

**Option A: Trigger Email Extension (Recommended)**
1. Click "Extensions" in left menu
2. Click "Install Extension"
3. Search for "Trigger Email"
4. Install and configure with Gmail SMTP:
   - SMTP Connection URI: `smtps://rechargearthorganization@gmail.com:YOUR_APP_PASSWORD@smtp.gmail.com:465`
   - Default FROM: `rechargearthorganization@gmail.com`
   - Default REPLY-TO: `rechargearthorganization@gmail.com`

**Gmail App Password Setup:**
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Create App Password for "Mail"
4. Use that password in SMTP URI

**Option B: SendGrid (Alternative)**
1. Create SendGrid account
2. Get API key
3. Install SendGrid extension
4. Configure with API key

### 3. Test the Connection

Open your browser console while using the site and check:
```javascript
// Should show connected
console.log(db); // Firestore instance
console.log(auth); // Auth instance
```

### 4. Verify Email Sending

After installing the email extension:
1. Place a test order on the site
2. Check Firebase Console → Firestore → `mail` collection
3. Email should be sent automatically
4. Check `rechargearthorganization@gmail.com` inbox

## 🔒 Security Rules (Already Created)

- ✅ Products: Public read, admin-only write
- ✅ Pledges: Anyone can create, authenticated read, admin manage
- ✅ Orders: Anyone can create, admin can view all
- ✅ Mail: Create-only (for email trigger)

## 🚀 Deploy to Firebase Hosting (Optional)

```bash
# Deploy your site
firebase deploy

# Your site will be live at:
# https://rechargearth-d1f7d.web.app
# https://rechargearth-d1f7d.firebaseapp.com
```

## 📊 Monitor Orders

View all orders in Firebase Console:
https://console.firebase.google.com/project/rechargearth-d1f7d/firestore/data/~2Forders

## ✅ Current Status

- ✅ Firebase SDK configured
- ✅ Firestore rules created (`firestore.rules`)
- ✅ Firebase config created (`firebase.json`)
- ✅ Order system ready
- ✅ Email templates ready
- ⏳ Need to deploy rules
- ⏳ Need to install email extension

## 🆘 Troubleshooting

**Orders not saving?**
- Check browser console for errors
- Verify Firebase rules are deployed

**Emails not sending?**
- Verify email extension is installed
- Check `mail` collection in Firestore
- Check extension logs in Firebase Console

**Authentication not working?**
- Enable Email/Password auth in Firebase Console → Authentication
- Enable Google Sign-In provider
