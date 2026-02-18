# Sunbeam Website - CMS Setup Guide

## 🎉 Your site now has an easy-to-use admin panel!

You can edit your website content through a user-friendly dashboard without touching any code.

---

## Quick Start Guide

### Option 1: Deploy to Netlify (Recommended - FREE)

**Step 1: Create Netlify Account**
1. Go to https://www.netlify.com
2. Sign up for free (use GitHub, GitLab, or email)

**Step 2: Deploy Your Site**
1. Drag and drop your `sunbeam-website` folder into Netlify
2. Wait for it to deploy (takes ~1 minute)
3. Your site will be live at: `your-site-name.netlify.app`

**Step 3: Enable Netlify Identity**
1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select **Invite only**
4. Under **Services** → **Git Gateway**, click **Enable Git Gateway**

**Step 4: Create Your Admin Account**
1. Go to your site: `your-site-name.netlify.app/admin`
2. Netlify will prompt you to create an account
3. Check your email and set your password

**Step 5: Start Editing!**
Go to: `your-site-name.netlify.app/admin`
Log in and start editing your content!

---

### Option 2: Local Development (For Testing)

1. Install Node.js from https://nodejs.org
2. Open terminal in the `sunbeam-website` folder
3. Run:
```bash
npx decap-server
```
4. In another terminal:
```bash
npx http-server
```
5. Open http://localhost:8080/admin

---

## What You Can Edit in the CMS

### 🏢 **Site Settings**
- Business name, phone, email
- Address
- Business hours
- Brand colors

### 🏠 **Home Page**
- Hero section (headline, badge, image)
- Stats (years in business, etc.)
- Services (add/remove/edit services)

### 📄 **All Pages**
- Windows page products
- Doors page content
- Window treatments
- Awnings & shades
- About page content

### ⭐ **Customer Reviews**
- Add new reviews
- Edit existing reviews
- Mark reviews as featured
- Set ratings (1-5 stars)

### 📸 **Photo Gallery**
- Upload new images
- Organize by category
- Add descriptions
- Feature images on homepage

---

## How to Edit Content

1. **Log in** to `yoursite.com/admin`
2. **Click on a section** (e.g., "Site Settings" or "Home Page")
3. **Edit the content** in the form fields
4. **Click "Save"** - your changes go live immediately!

### Example: Changing Business Hours
1. Go to admin panel
2. Click **Site Settings** → **General Settings**
3. Find **Business Hours** section
4. Change "Monday-Friday" to your new hours
5. Click **Save**
6. Done! Hours updated across entire site

### Example: Adding a Customer Review
1. Go to admin panel
2. Click **Customer Reviews**
3. Click **New Review**
4. Fill in:
   - Customer Name
   - Review Text
   - Rating (1-5)
   - Source (Google, Yelp, etc.)
5. Click **Publish**
6. Review appears on homepage!

---

## Custom Domain Setup

Once deployed to Netlify:

1. In Netlify: **Domain settings** → **Add custom domain**
2. Enter: `sunbeamwindow.com`
3. Follow DNS instructions from Netlify
4. Update your domain registrar (GoDaddy, Namecheap, etc.)
5. Wait 24-48 hours for DNS to propagate

Your admin panel will be at: `sunbeamwindow.com/admin`

---

## Security

✅ **Admin panel is password-protected**
✅ **Only invited users can access**
✅ **All changes are tracked**
✅ **Can revert to previous versions**

To add more editors:
1. Netlify dashboard → **Identity**
2. Click **Invite users**
3. Enter their email
4. They'll get an invitation link

---

## Troubleshooting

**Can't log in?**
- Make sure you've enabled Netlify Identity
- Check your email for invitation/verification
- Clear browser cache and try again

**Changes not showing?**
- Click "Save" then "Publish"
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check if you're editing the right environment

**Need help?**
- Netlify Support: https://www.netlify.com/support/
- Decap CMS Docs: https://decapcms.org/docs/

---

## File Structure

```
sunbeam-website/
├── admin/
│   ├── index.html          # CMS admin panel
│   └── config.yml          # What you can edit
├── content/
│   ├── settings/
│   │   └── general.json    # Business info, hours, colors
│   ├── pages/
│   │   ├── home.json       # Homepage content
│   │   ├── about.json      # About page
│   │   ├── windows.json    # Windows page
│   │   └── ...
│   ├── reviews/            # Customer reviews (add/edit here)
│   └── gallery/            # Photo uploads
├── images/
│   └── uploads/            # Your uploaded images go here
├── css/
├── js/
└── *.html                  # Your website pages
```

---

## Benefits of This Setup

✅ **No monthly CMS fees** - Decap CMS is free  
✅ **Fast site** - Static HTML loads instantly  
✅ **Easy editing** - No code required  
✅ **Secure** - Password protected admin  
✅ **Scalable** - Can add more content types anytime  
✅ **Version control** - All changes tracked  

---

## Next Steps

1. Deploy to Netlify (takes 5 minutes)
2. Set up your admin account
3. Start editing!
4. Point your domain to Netlify
5. You're live! 🚀

Questions? The setup is designed to be simple, but reach out if you need help!
