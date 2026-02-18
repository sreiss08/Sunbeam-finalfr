# 📸 GALLERY - HOW IT WORKS

## ✅ YES - Gallery Can Hold UNLIMITED Photos!

The CMS is already set up to handle unlimited gallery images.

---

## 📋 How to Add Photos:

### Step 1: Go to Admin
- Visit `yoursite.com/admin`
- Log in

### Step 2: Add New Photo
- Click **"Gallery"** in the sidebar
- Click **"New Gallery Item"**

### Step 3: Upload & Categorize
- **Title:** "Kitchen Window Installation - Cherry Hill"
- **Category:** Choose from dropdown (Windows, Doors, Treatments, Awnings, Before/After)
- **Image:** Click to upload your photo
- **Description:** Optional details about the project
- **Featured:** Check if you want it highlighted

### Step 4: Publish
- Click **"Publish"**
- Photo is live!

---

## 🎯 Current Gallery Page:

**Right now:** Shows hardcoded placeholder images  
**You can:** Upload photos through CMS (they're stored)  
**To display them:** Requires a build step or static site generator

---

## 🔧 Two Options to Make Gallery Dynamic:

### Option A: Manual (Current)
- Upload photos via CMS
- They get saved to `/content/gallery/`
- You can manually add them to gallery.html

### Option B: Automatic (Needs Build Process)
- Use a static site generator (Eleventy, Hugo, Jekyll)
- Gallery auto-loads from CMS
- Rebuilds when you add photos

---

## 💡 Recommended Approach:

**For Now:**
1. Upload 10-20 of your best project photos via CMS
2. I can create a simple script that auto-loads them
3. Or you manually add best ones to gallery.html

**Long Term:**
- Set up Netlify Build with a static site generator
- Gallery becomes fully automatic
- Just upload via CMS and it appears

---

## 📸 Photo Requirements:

**Format:** JPG or PNG  
**Size:** 1200x800px recommended  
**Quality:** High resolution  
**Categories:**
- Windows
- Doors  
- Window Treatments (Treatments)
- Awnings
- Before/After

---

## 🎨 Gallery Features:

✅ Category filtering  
✅ Responsive grid  
✅ Lightbox view (can be added)  
✅ Unlimited uploads  
✅ Image descriptions  
✅ Featured tagging  

---

## Want me to make it fully automatic?

I can add a build process that:
1. Reads all photos from CMS
2. Auto-generates gallery page
3. Updates when you add new photos

Takes about 15 minutes to set up.

**Want me to do it?**
