# Keval Shah - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Material-UI, showcasing my professional experience, skills, and projects.

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Performance Optimized**: Fast loading times with Next.js optimization
- **SEO Friendly**: Comprehensive SEO with meta tags, Open Graph, and JSON-LD structured data
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Smooth Scrolling**: Elegant scroll animations and section transitions
- **Contact Form**: Integrated contact form with validation

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Material-UI (MUI) v7](https://mui.com/)
- **Styling**: CSS-in-JS with MUI's sx prop
- **Icons**: [@mui/icons-material](https://mui.com/material-ui/material-icons/)
- **Animations**: Custom CSS animations with Intersection Observer API
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) via next/font

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/keval074/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint
```

### Environment Variables

The following environment variables are required:

| Variable                      | Description                                                                                      | Example                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`        | The base URL of your site. Use `http://localhost:3000` for development, production URL for prod | `https://yourportfolio.com`                |
| `NEXT_PUBLIC_FORM_ENDPOINT`   | Contact form submission endpoint (Formspree, Web3Forms, or custom API)                          | `https://formspree.io/f/your-form-id`      |
| `NEXT_PUBLIC_GA_ID` (optional)| Google Analytics tracking ID                                                                     | `G-XXXXXXXXXX`                             |

**Setting up the Contact Form:**

1. **Formspree** (Recommended for beginners):
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form
   - Copy the form endpoint URL
   - Set `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id`

2. **Web3Forms** (No signup required):
   - Get an access key at [web3forms.com](https://web3forms.com)
   - Set `NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit`
   - Add the access key to your form component

3. **Custom API**:
   - Set up your own backend endpoint
   - Ensure it accepts POST requests with `name`, `email`, and `message` fields
   - Set `NEXT_PUBLIC_FORM_ENDPOINT` to your API URL

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

## 📝 Customization

### Update Personal Information

Edit `src/content.ts` to update your personal information:

- **Personal Info**: Name, title, email, summary
- **Hero Section**: Tagline and CTA buttons
- **About**: Bio and highlights
- **Skills**: Add/remove skills with proficiency levels
- **Experience**: Work history with descriptions
- **Projects**: Portfolio projects with links
- **Testimonials**: Client/colleague testimonials
- **Social Links**: GitHub, LinkedIn, etc.

### Customize Theme

Edit `src/theme.ts` to customize colors and styling:

- **Colors**: Primary, secondary, accent colors for light/dark modes
- **Typography**: Font sizes, weights, and families
- **Component Styles**: Button, Card, AppBar overrides

### Update Resume

Replace `public/Keval Resume 2.pdf` with your own resume file, or update the path in `src/content.ts`:

```typescript
resumeUrl: '/your-resume.pdf';
```

## 🧪 Testing

### Comprehensive Testing Suite

This project includes a complete testing infrastructure to ensure production readiness:

- **TESTING_CHECKLIST.md** - Master checklist for all testing scenarios
- **TESTING_SUMMARY.md** - Overview of testing infrastructure and results

### Test Scripts

Run these scripts in your browser console for automated testing:

1. **Reduced Motion Testing**

   ```javascript
   // Copy and paste contents of scripts/test-reduced-motion.js
   ```

2. **Contact Form Testing**

   ```javascript
   // Copy and paste contents of scripts/test-contact-form.js
   ```

3. **Theme Persistence Testing**

   ```javascript
   // Copy and paste contents of scripts/test-theme-persistence.js
   // Then run: runThemeTests()
   ```

4. **Lighthouse Pre-Flight Checks**
   ```javascript
   // Copy and paste contents of scripts/lighthouse-checklist.js
   ```

### Testing Documentation

- **docs/FORM_SETUP.md** - Complete guide for setting up the contact form
- **docs/LIGHTHOUSE_GUIDE.md** - Comprehensive Lighthouse testing guide

### Lighthouse Target Scores

All scores should be ≥ 90:

- ✅ Performance: ≥ 90
- ✅ Accessibility: ≥ 90
- ✅ Best Practices: ≥ 90
- ✅ SEO: ≥ 90

### Running Tests

1. **Build Verification**

   ```bash
   npm run build
   ```

   Verify no TypeScript errors or build warnings.

2. **Cross-Browser Testing**

   - Test in Chrome/Edge (Chromium)
   - Test in Firefox
   - Test in Safari (if available)

3. **Lighthouse Audit**
   - Open Chrome DevTools > Lighthouse
   - Select "Mobile" and all categories
   - Click "Analyze page load"
   - Verify all scores ≥ 90

See `TESTING_CHECKLIST.md` for complete testing procedures.

## 🌐 Deployment

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/keval074/portfolio-site)

### Deployment Resources

- **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** - Deploy in 5 minutes (quick reference)
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Comprehensive deployment guide
- **[DEPLOYMENT_CHECKLIST.md](./.kiro/specs/portfolio-site/DEPLOYMENT_CHECKLIST.md)** - Pre/post-deployment checklist

### Deployment Instructions

For comprehensive deployment instructions, including:
- Step-by-step guides for Vercel and Netlify
- Environment variable configuration
- Form service setup
- Custom domain setup
- Post-deployment verification
- Troubleshooting tips

**See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete instructions.**

### Quick Start

**Vercel (Recommended):**
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables (see DEPLOYMENT_GUIDE.md)
4. Deploy!

**Netlify:**
1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Configure environment variables (see DEPLOYMENT_GUIDE.md)
6. Deploy!

### Production URL

🌐 **Live Site:** [https://kevalshahportfolio.vercel.app](https://kevalshahportfolio.vercel.app)

Deployed on Vercel from the `main` branch.

## 📁 Project Structure

```
portfolio-site/
├── pages/
│   ├── _app.tsx          # App wrapper with theme provider
│   ├── _document.tsx     # Custom document for MUI SSR
│   ├── index.tsx         # Main page
│   └── 404.tsx           # Custom 404 page
├── src/
│   ├── components/       # Reusable components
│   ├── sections/         # Page sections
│   ├── utils/            # Utility functions
│   ├── content.ts        # Portfolio content data
│   └── theme.ts          # MUI theme configuration
├── styles/
│   └── globals.css       # Global styles
├── public/               # Static assets
│   ├── projects/         # Project images
│   ├── testimonials/     # Testimonial avatars
│   ├── robots.txt        # Search engine instructions
│   └── sitemap.xml       # Site structure for SEO
├── scripts/              # Testing and utility scripts
├── .env.example          # Environment variables template
├── .env.local            # Local environment variables (not committed)
├── vercel.json           # Vercel deployment configuration
├── netlify.toml          # Netlify deployment configuration
├── DEPLOYMENT_GUIDE.md   # Comprehensive deployment instructions
└── package.json
```

## 🎨 Color Scheme

**Light Mode:**

- Primary: Electric Sky Blue (#0EA5E9)
- Secondary: Bright Blue (#3B82F6)
- Accent: Cyan (#06B6D4)
- Background: Cool Light Slate (#F1F5F9)

**Dark Mode:**

- Primary: Lighter Electric Blue (#38BDF8)
- Secondary: Lighter Bright Blue (#60A5FA)
- Accent: Lighter Cyan (#22D3EE)
- Background: Dark Slate (#0F172A)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Keval Shah**

- GitHub: [@keval074](https://github.com/keval074)
- LinkedIn: [kevalshah6802](https://www.linkedin.com/in/kevalshah6802/)
- Email: kevalshah074@gmail.com

## 🔄 Continuous Integration

This project includes a GitHub Actions workflow that automatically:
- Runs linting checks
- Builds the project
- Tests on multiple Node.js versions (18.x, 20.x)

The CI workflow runs on:
- Every push to `main` or `develop` branches
- Every pull request to `main` or `develop` branches

See [.github/workflows/ci.yml](./.github/workflows/ci.yml) for configuration.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Material-UI Icons
- Font from Google Fonts (Inter)

---

Made with ❤️ by Keval Shah
