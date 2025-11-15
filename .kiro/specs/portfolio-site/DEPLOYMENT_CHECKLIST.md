# Deployment Checklist

Use this checklist to ensure your portfolio is ready for production deployment.

## Pre-Deployment

### Code Quality
- [ ] All TypeScript errors resolved (`npm run build` succeeds)
- [ ] No console errors or warnings in browser
- [ ] All linting issues resolved (`npm run lint`)
- [ ] Code is committed to Git repository

### Content
- [ ] Personal information updated in `src/content.ts`
- [ ] All project descriptions and links are accurate
- [ ] Resume file added to `public/` directory
- [ ] All project images optimized and added to `public/projects/`
- [ ] Testimonial images added to `public/testimonials/`
- [ ] Social media links are correct

### Configuration
- [ ] `.env.local` created with placeholder values
- [ ] `.env.local` is in `.gitignore` (should not be committed)
- [ ] `.env.example` is up to date with all required variables
- [ ] `package.json` has correct build scripts

### Testing
- [ ] Site works correctly in development mode (`npm run dev`)
- [ ] Production build works locally (`npm run build && npm start`)
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Theme toggle works and persists
- [ ] Contact form validation works
- [ ] All images load correctly
- [ ] Resume downloads correctly
- [ ] Mobile responsive design verified

## Deployment

### Platform Setup
- [ ] Hosting platform account created (Vercel or Netlify)
- [ ] Repository connected to hosting platform
- [ ] Build settings configured correctly

### Environment Variables
- [ ] `NEXT_PUBLIC_SITE_URL` set to production domain
- [ ] `NEXT_PUBLIC_FORM_ENDPOINT` configured with form service
- [ ] Form service account created (Formspree or Web3Forms)
- [ ] Form service tested and working

### Initial Deployment
- [ ] First deployment triggered
- [ ] Build completed successfully
- [ ] No build errors in deployment logs
- [ ] Production URL accessible

## Post-Deployment Verification

### Functionality Testing
- [ ] Homepage loads correctly
- [ ] Navigation links work and scroll smoothly
- [ ] Active section highlighting works
- [ ] Theme toggle works
- [ ] Theme preference persists after refresh
- [ ] Mobile menu opens and closes correctly
- [ ] Contact form submits successfully
- [ ] Form validation works correctly
- [ ] Success/error messages display correctly
- [ ] Resume downloads correctly
- [ ] All external links open in new tabs
- [ ] Back to top button appears and works

### Visual Testing
- [ ] All images load correctly
- [ ] No broken images or 404 errors
- [ ] Layout looks correct on mobile (360px)
- [ ] Layout looks correct on tablet (768px)
- [ ] Layout looks correct on desktop (1024px+)
- [ ] No horizontal scrolling on any device
- [ ] Fonts load correctly
- [ ] Colors match design in both light and dark modes

### Performance Testing
- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] Lighthouse Best Practices score ≥ 90
- [ ] Lighthouse SEO score ≥ 90
- [ ] Page loads in under 3 seconds
- [ ] Images are optimized and lazy-loaded

### SEO Verification
- [ ] Page title is correct
- [ ] Meta description is present and accurate
- [ ] Open Graph tags are present
- [ ] Twitter Card tags are present
- [ ] Canonical URL is correct
- [ ] JSON-LD structured data is present
- [ ] robots.txt is accessible
- [ ] sitemap.xml is accessible
- [ ] Favicon loads correctly

### Accessibility Testing
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus indicators are visible
- [ ] Skip to content link works
- [ ] ARIA labels are present on icon buttons
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader compatibility verified

### Cross-Browser Testing
- [ ] Works in Chrome/Edge
- [ ] Works in Firefox
- [ ] Works in Safari (if available)
- [ ] Works on iOS Safari (if available)
- [ ] Works on Android Chrome (if available)

## Documentation Updates

- [ ] README.md updated with production URL
- [ ] DEPLOYMENT_GUIDE.md reviewed and accurate
- [ ] Environment variables documented
- [ ] Any custom configuration documented

## Custom Domain (Optional)

- [ ] Custom domain purchased
- [ ] DNS records configured
- [ ] Domain added to hosting platform
- [ ] SSL certificate issued (automatic)
- [ ] `NEXT_PUBLIC_SITE_URL` updated to custom domain
- [ ] Site accessible via custom domain
- [ ] HTTPS working correctly

## Monitoring & Maintenance

- [ ] Deployment notifications configured
- [ ] Analytics set up (if desired)
- [ ] Error monitoring configured (if desired)
- [ ] Regular update schedule planned
- [ ] Backup strategy in place (Git repository)

## Final Steps

- [ ] Share production URL with stakeholders
- [ ] Update LinkedIn/resume with portfolio link
- [ ] Submit to search engines (optional)
- [ ] Share on social media (optional)
- [ ] Add to GitHub profile README (optional)

---

## Notes

Use this space to track any issues or observations during deployment:

```
Date: ___________
Deployed to: ___________
Production URL: ___________

Issues encountered:
-

Resolutions:
-

Performance scores:
- Performance: ___
- Accessibility: ___
- Best Practices: ___
- SEO: ___
```

---

**Status:** 
- [ ] Ready for deployment
- [ ] Deployed to staging
- [ ] Deployed to production
- [ ] Verified and live

**Deployed by:** ___________
**Date:** ___________
**Production URL:** ___________
