# Portfolio Site Design Document

## Overview

This document describes the architecture and design of a modern, single-page portfolio website built with Next.js (Pages Router), React 18, Material UI v5+, and TypeScript. The site is designed to be mobile-first, accessible, performant, and SEO-optimized.

## Architecture

### Technology Stack

- **Framework**: Next.js 14 with Pages Router
- **Language**: TypeScript 5.x
- **UI Library**: Material-UI (MUI) v7
- **Styling**: Emotion (CSS-in-JS) with MUI's sx prop
- **Icons**: @mui/icons-material
- **Font Loading**: next/font with Inter font family
- **State Management**: React hooks (useState, useEffect, useContext)
- **Animations**: CSS animations with IntersectionObserver API

### Application Structure

```
portfolio-site/
├── pages/
│   ├── _app.tsx          # App wrapper with ThemeProvider
│   ├── _document.tsx     # Custom document for MUI SSR
│   └── index.tsx         # Main single-page application
├── src/
│   ├── components/       # Reusable UI components
│   ├── sections/         # Page section wrappers
│   ├── utils/            # Utility functions
│   ├── content.ts        # Centralized content configuration
│   └── theme.ts          # MUI theme configuration
├── styles/
│   └── globals.css       # Global CSS utilities
└── public/               # Static assets
```

## Components and Interfaces

### Core Components

#### 1. NavBar Component

Sticky navigation header with section links and mobile drawer.

**Features**:

- Active section highlighting using IntersectionObserver
- Smooth scroll navigation
- Mobile drawer for viewports < 768px
- Theme toggle integration
- Skip-to-content link for accessibility

#### 2. Hero Component

Full-viewport hero section with name, title, and CTA buttons.

**Features**:

- Gradient background with animated elements
- Staggered fade-in animations
- Responsive typography
- Scroll indicator

#### 3. Section Component

Reusable wrapper for content sections with reveal animations.

**Features**:

- Consistent padding and max-width
- Fade-in/slide-up animation on scroll
- Alternate background color support

#### 4. SkillsGrid Component

Display skills in responsive grid layout grouped by category.

#### 5. ExperienceTimeline Component

Vertical timeline of work experience using MUI Timeline components.

#### 6. ProjectCard Component

Card display for portfolio projects with images, descriptions, and links.

#### 7. Testimonials Component

Grid display of testimonials with avatars and quotes.

#### 8. ContactForm Component

Contact form with validation and submission to third-party service.

**Features**:

- Client-side validation (name, email, message)
- Loading state with CircularProgress
- Success/error alerts with auto-dismiss
- Alternative contact methods

#### 9. Footer Component

Site footer with social links, copyright, and quick navigation.

#### 10. ThemeToggle Component

Button to toggle between light and dark themes with persistence.

#### 11. BackToTop Component

Floating action button to scroll to top, appears after scrolling.

## Data Models

### Content Configuration

All content is centralized in `src/content.ts`:

```typescript
interface ContentConfig {
  name: string;
  title: string;
  email: string;
  summary: string;
  resumeUrl?: string;
  hero: { tagline: string; ctaButtons: CTAButton[] };
  about: { bio: string; highlights: string[] };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  socialLinks: SocialLink[];
}
```

### Theme Configuration

Theme defined in `src/theme.ts` with light and dark mode palettes:

**Light Mode**: Primary #445B66, Secondary #7AA6C2, Accent #FF6B35
**Dark Mode**: Primary #90A4AE, Secondary #A6D3E3, Accent #FF8C5A

## Error Handling

### Form Validation

- Name: Required, non-empty
- Email: Required, valid format
- Message: Required, minimum 10 characters

### Form Submission

- Success: Show success message, clear form
- Error: Show error message, preserve form data

### Image Loading

- next/image with lazy loading
- Responsive sizes attribute
- Width/height to prevent layout shifts

## Testing Strategy

### Integration Testing

Browser console scripts for:

- Reduced motion preferences
- Form validation and submission
- Theme toggle persistence
- Lighthouse pre-flight checks

### Cross-Browser Testing

Test in Chrome/Edge, Firefox, and Safari

### Accessibility Testing

- Keyboard navigation
- Screen reader compatibility
- Color contrast (WCAG AA)
- ARIA labels and semantic HTML

### Performance Testing

Lighthouse audits with target scores ≥ 90 for:

- Performance
- Accessibility
- Best Practices
- SEO

### Responsive Testing

Test at 360px, 768px, 1024px, and 1440px viewports

## Performance Optimizations

- **Images**: next/image with automatic optimization
- **Fonts**: next/font with display: swap
- **Code Splitting**: Automatic by Next.js
- **Bundle Size**: Tree-shaking and minification
- **SSR**: Emotion cache for MUI server-side rendering

## Accessibility Features

- Semantic HTML (header, nav, main, section, footer)
- Logical heading hierarchy (single h1, then h2-h6)
- Keyboard navigation with visible focus indicators
- Skip-to-content link
- ARIA attributes (labels, live regions, expanded states)
- Color contrast meeting WCAG AA
- Reduced motion support

## SEO Optimization

### Meta Tags

- Title, description, viewport
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL

### Structured Data

- Person schema (JSON-LD)
- WebSite schema (JSON-LD)

### Files

- sitemap.xml
- robots.txt

## Deployment

### Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Production domain
- `NEXT_PUBLIC_FORM_ENDPOINT`: Form service endpoint

### Hosting Platforms

- **Vercel** (Recommended): One-click deployment, automatic HTTPS, global CDN
- **Netlify**: Git-based deployment, automatic HTTPS

### Build Process

```bash
npm run build
```

Generates optimized production build with static HTML and minified bundles.

## Security Considerations

- Client-side validation only (no sensitive data)
- Third-party form service (Formspree/Web3Forms)
- `rel="noopener noreferrer"` on external links
- No user-generated content
- Regular dependency updates

## Maintenance

### Content Updates

Edit `src/content.ts` for personal information, skills, projects, etc.

### Theme Updates

Edit `src/theme.ts` for colors, typography, component overrides.

### Dependency Updates

```bash
npm update
npm audit fix
```

## Future Enhancements

- Blog section with MDX
- Project filtering and search
- Analytics integration
- CMS integration
- Multi-language support (i18n)
- Progressive Web App (PWA) features
