# Deployment Guide

This guide will walk you through deploying your portfolio site to production using Vercel (recommended) or Netlify.

## Pre-Deployment Checklist

Before deploying, ensure you have completed the following:

- [ ] All code is committed to your Git repository (GitHub, GitLab, or Bitbucket)
- [ ] `.env.local` is configured with placeholder values (this file should NOT be committed)
- [ ] Production build runs successfully: `npm run build`
- [ ] All tests pass and Lighthouse scores are ≥ 90
- [ ] Content in `src/content.ts` is updated with your information
- [ ] Resume file is added to `public/` directory
- [ ] Project images are optimized and added to `public/projects/`

## Option 1: Deploy to Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js and offers the best integration.

### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub, GitLab, or Bitbucket account
3. Authorize Vercel to access your repositories

### Step 2: Import Your Project

1. Click "Add New..." → "Project"
2. Select your portfolio repository from the list
3. Click "Import"

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js. Configure the following:

**Framework Preset:** Next.js (auto-detected)
**Root Directory:** `./` (leave as default)
**Build Command:** `npm run build` (auto-detected)
**Output Directory:** `.next` (auto-detected)

### Step 4: Configure Environment Variables

Add the following environment variables in the Vercel dashboard:

1. Click "Environment Variables"
2. Add each variable:

| Name                        | Value                                  | Environment         |
| --------------------------- | -------------------------------------- | ------------------- |
| `NEXT_PUBLIC_SITE_URL`      | `https://your-domain.vercel.app`       | Production, Preview |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Your form service endpoint (see below) | Production, Preview |

**Setting up Form Endpoint:**

**Option A: Formspree (Recommended)**

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy the endpoint URL (e.g., `https://formspree.io/f/xyzabc123`)
4. Use this as `NEXT_PUBLIC_FORM_ENDPOINT`

**Option B: Web3Forms**

1. Get an access key at [web3forms.com](https://web3forms.com)
2. Use `https://api.web3forms.com/submit` as the endpoint
3. You'll need to modify the ContactForm component to include the access key

### Step 5: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll receive a production URL (e.g., `https://your-portfolio.vercel.app`)

### Step 6: Configure Custom Domain (Optional)

1. Go to your project settings → "Domains"
2. Add your custom domain (e.g., `yourname.com`)
3. Follow the DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

### Step 7: Verify Deployment

1. Visit your production URL
2. Test all functionality:
   - [ ] Navigation works and highlights active sections
   - [ ] Theme toggle works and persists
   - [ ] All images load correctly
   - [ ] Contact form submits successfully
   - [ ] Resume downloads correctly
   - [ ] All external links work
   - [ ] Mobile responsive design works

### Step 8: Run Lighthouse Audit

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Mobile" and all categories
4. Click "Analyze page load"
5. Verify all scores are ≥ 90:
   - Performance: ≥ 90
   - Accessibility: ≥ 90
   - Best Practices: ≥ 90
   - SEO: ≥ 90

If any scores are below 90, review the recommendations and make necessary fixes.

## Option 2: Deploy to Netlify

### Step 1: Create a Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub, GitLab, or Bitbucket account

### Step 2: Import Your Project

1. Click "Add new site" → "Import an existing project"
2. Choose your Git provider
3. Select your portfolio repository

### Step 3: Configure Build Settings

**Build command:** `npm run build`
**Publish directory:** `.next`
**Node version:** 18 or higher (set in `netlify.toml` or environment variables)

### Step 4: Configure Environment Variables

1. Go to "Site settings" → "Environment variables"
2. Add the following variables:

| Name                        | Value                             |
| --------------------------- | --------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Your Netlify URL or custom domain |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Your form service endpoint        |
| `NODE_VERSION`              | `18` or higher                    |

### Step 5: Deploy

1. Click "Deploy site"
2. Wait for the build to complete
3. Your site will be live at `https://random-name.netlify.app`

### Step 6: Configure Custom Domain (Optional)

1. Go to "Domain settings"
2. Add your custom domain
3. Follow the DNS configuration instructions

### Step 7: Verify Deployment

Follow the same verification steps as Vercel (Step 7 above).

## Post-Deployment Tasks

### Update README with Production URL

1. Open `README.md`
2. Find the deployment section
3. Add your production URL:

```markdown
## 🌐 Live Demo

Visit the live site: [https://your-production-url.com](https://your-production-url.com)
```

### Set up Continuous Deployment

Both Vercel and Netlify automatically redeploy when you push to your main branch. To deploy:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. Your site will automatically rebuild and deploy

### Monitor Your Site

**Vercel:**

- View deployment logs in the Vercel dashboard
- Monitor analytics (if enabled)
- Check for build errors

**Netlify:**

- View deployment logs in the Netlify dashboard
- Monitor analytics (if enabled)
- Check for build errors

## Troubleshooting

### Build Fails

**Issue:** Build fails with TypeScript errors
**Solution:** Run `npm run build` locally to identify and fix errors

**Issue:** Build fails with missing dependencies
**Solution:** Ensure all dependencies are in `package.json`, not just `devDependencies`

### Environment Variables Not Working

**Issue:** Environment variables are undefined
**Solution:**

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding/changing environment variables
- Check that variables are set for the correct environment (Production/Preview)

### Images Not Loading

**Issue:** Images return 404 errors
**Solution:**

- Ensure images are in the `public/` directory
- Check image paths in `src/content.ts`
- Verify image file names match exactly (case-sensitive)

### Form Not Submitting

**Issue:** Contact form doesn't submit
**Solution:**

- Verify `NEXT_PUBLIC_FORM_ENDPOINT` is set correctly
- Check browser console for errors
- Test the form endpoint directly with a tool like Postman
- Ensure CORS is enabled on your form service

### Custom Domain Not Working

**Issue:** Custom domain shows SSL error or doesn't resolve
**Solution:**

- Wait 24-48 hours for DNS propagation
- Verify DNS records are configured correctly
- Check that SSL certificate is issued (automatic on Vercel/Netlify)

## Performance Optimization Tips

1. **Optimize Images:** Use WebP format and compress images before uploading
2. **Enable Caching:** Both Vercel and Netlify handle this automatically
3. **Monitor Bundle Size:** Use `npm run build` to check bundle sizes
4. **Use CDN:** Both platforms provide global CDN automatically
5. **Enable Compression:** Gzip/Brotli compression is automatic

## Security Best Practices

1. **Never commit `.env.local`:** Add it to `.gitignore`
2. **Use HTTPS:** Automatic on Vercel and Netlify
3. **Keep Dependencies Updated:** Run `npm audit` regularly
4. **Validate Form Input:** Already implemented in ContactForm component
5. **Use Environment Variables:** For all sensitive configuration

## Maintenance

### Regular Updates

1. Update dependencies monthly:

   ```bash
   npm update
   npm audit fix
   ```

2. Test locally after updates:

   ```bash
   npm run build
   npm start
   ```

3. Deploy updates:
   ```bash
   git add .
   git commit -m "Update dependencies"
   git push origin main
   ```

### Content Updates

1. Edit `src/content.ts` with new projects, skills, or experience
2. Add new project images to `public/projects/`
3. Test locally
4. Commit and push to deploy

## Support

If you encounter issues:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review [Vercel Documentation](https://vercel.com/docs) or [Netlify Documentation](https://docs.netlify.com)
3. Check the browser console for errors
4. Review deployment logs in your hosting platform dashboard

---

**Congratulations!** Your portfolio is now live and accessible to the world. 🎉
