#!/bin/bash

# Push changes as v3
cd /workspaces/RechargEarth.org

echo "📦 Staging all changes..."
git add -A

echo "💾 Creating commit..."
git commit -m "v3: Admin panel enhancements + Excel export

- Changed 'DoB' to 'Birthday' in pledge form
- Added Export to Excel functionality in admin panel
- Improved admin table layout with separate Birthday column
- Enhanced error handling for admin panel data loading
- Added global pledges storage for export functionality
- CSV export with all fields: Date, First Name, Last Name, Full Name, Email, Phone, Birthday
- Better null checks and error messages in setupAdminListeners
- Shows proper error states when database connection fails
"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! v3 pushed successfully"
