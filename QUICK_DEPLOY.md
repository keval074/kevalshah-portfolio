# Quick Deploy Reference

## 🚀 Deploy in 5 Minutes

### Prerequisites
- [ ] Code pushed to GitHub
- [ ] `.env.local` configured locally (not committed)
- [ ] Build succeeds: `npm run build`

### Vercel Deployment (Recommended)

1. **Go to [vercel.com](https://vercel.com) and sign in with GitHub**

2. **Click "Add New..." → "Project"**

3. **Import your repository**

4. **Add Environment Variables:**
   ```
   NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app
   NEXT_PUBLIC_FORM_ENDPOINT = https://formspree.io/f/your-form-id
   ```

5. **Click "Deploy"**

6. **Done!** Your site is live at `https://your-project.vercel.app`

### Netlify Deployment

1. **Go to [netlify.com](https://netlify.com) and sign in with GitHub**

2. **Click "Add new site" → "Import an existing project"**

3. **Select your repository**

4. **Build settings are auto-detected from `netlify.toml`**

5. **Add Environment Variables:**
   ```
   NEXT_PUBLIC_SITE_URL = https://your-site.netlify.app
   NEXT_PUBLIC_FORM_ENDPOINT = https://formspree.io/f/your-form-id
   NODE_VERSION = 18
   ```

6. **Click "Deploy site"**

7. **Done!** Your site is live at `https://your-site.netlify.app`

## 📧 Form Setup (Required)

### Option 1: Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form
3. Copy the endpoint: `https://formspree.io/f/xyzabc123`
4. Use this as `NEXT_PUBLIC_FORM_ENDPOINT`

### Option 2: Web3Forms (No signup)

1. Get access key at [web3forms.com](https://web3forms.com)
2. Use `https://api.web3forms.com/submit` as endpoint
3. Add access key to ContactForm component

## ✅ Post-Deployment Checklist

- [ ] Site loads at production URL
- [ ] Navigation works
- [ ] Theme toggle works
- [ ] Contact form submits
- [ ] All images load
- [ ] Resume downloads
- [ ] Run Lighthouse audit (scores ≥ 90)

## 🔧 Common Issues

**Build fails?**
- Run `npm run build` locally to see errors
- Check all dependencies are in `package.json`

**Form doesn't work?**
- Verify `NEXT_PUBLIC_FORM_ENDPOINT` is set
- Check form service is configured correctly

**Images don't load?**
- Ensure images are in `public/` directory
- Check paths in `src/content.ts`

## 📚 Need More Help?

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🎉 You're Live!

Once deployed:
1. Update README.md with your production URL
2. Share your portfolio link
3. Add to LinkedIn/resume
4. Celebrate! 🎊
