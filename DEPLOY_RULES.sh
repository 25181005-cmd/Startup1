#!/bin/bash

# Deploy Firestore Rules to Firebase
# Run this script to update your database security rules

echo "🚀 Deploying Firestore Rules..."
echo ""

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found!"
    echo ""
    echo "Install it with:"
    echo "  npm install -g firebase-tools"
    echo ""
    exit 1
fi

# Check if logged in
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Not logged in to Firebase"
    echo "Running: firebase login"
    firebase login
fi

# Deploy rules
echo "📤 Deploying rules to Firebase..."
firebase deploy --only firestore:rules --project rechargearth-d1f7d

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Rules deployed successfully!"
    echo ""
    echo "Your Firestore security rules are now active:"
    echo "  - pledges collection: Anyone can write, auth required to read"
    echo "  - products collection: Public read, admin write"
    echo "  - orders collection: Anyone can write, users read their own"
    echo ""
else
    echo ""
    echo "❌ Deployment failed!"
    echo "Check the error above and try again."
    echo ""
fi
