# Justin Hartford - Personal Website

Clean, minimal personal website with hidden portfolio page and NBA Jam easter egg.

## What's Inside

- **index.html** - Your homepage
- **portfolio.html** - Hidden portfolio page (share link directly)
- **styles.css** - Homepage styling
- **portfolio-styles.css** - Portfolio styling
- **profile-photo.jpg** - Add your photo here (the site will work without it)

## Quick Setup

### Step 1: Add Your Photo (Optional)
Drop a photo named `profile-photo.jpg` in this folder. If you don't, the site still works fine.

### Step 2: Push to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. Click "Add" → "Add Existing Repository"
4. Browse to this folder
5. Click "Publish repository"
6. Make sure it's named `personal-website`
7. Click "Publish repository"

**Option B: Using Command Line**
1. Open Command Prompt or PowerShell
2. Navigate to this folder:
   ```
   cd C:\Users\YourName\Downloads\personal-website
   ```
   (Replace with your actual path)

3. Run these commands one at a time:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/justinhartford/personal-website.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to: https://github.com/justinhartford/personal-website/settings/pages
2. Under "Branch", select `main` and `/ (root)`
3. Click "Save"
4. Wait 1-2 minutes

Your site will be live at: `https://justinhartford.github.io/personal-website/`

## Easter Egg

Click the 🏀 in the footer to activate NBA Jam mode!

## Share Your Portfolio

The portfolio page isn't linked from the homepage. Share it directly:
`https://justinhartford.github.io/personal-website/portfolio.html`

## Need Help?

If you get stuck:
1. Make sure Git is installed: https://git-scm.com/download/win
2. Or use GitHub Desktop (much easier): https://desktop.github.com/
3. Email yourself the folder and try from another computer if needed

## Update Your Site Later

Make changes to the HTML/CSS files, then:
```
git add .
git commit -m "Updated site"
git push
```

Wait 1-2 minutes and your changes will be live!
