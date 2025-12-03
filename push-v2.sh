#!/bin/bash

# Push changes as v2
cd /workspaces/RechargEarth.org

echo "📦 Staging all changes..."
git add -A

echo "💾 Creating commit..."
git commit -m "v2: Backend fixes and improvements

- Fixed Firebase collection paths (simplified from nested artifacts to root collections)
- Updated appId configuration from 'default-app-id' to actual Firebase App ID
- Enhanced error handling with console logging and user-friendly messages
- Modified DoB field to DD-MM format (day-month only, no year)
- Updated admin panel to display all pledge fields (name, email, phone, birthday)
- Simplified Firestore security rules to match new collection structure
- Added deployment scripts and documentation (BACKEND_FIX.md, ADMIN_SETUP.md)
- Collections: pledges, products, orders (all at root level)
"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! Changes pushed as v2"
