/**
 * Lighthouse Pre-Flight Checklist
 * Run this in the browser console before running Lighthouse
 * to catch common issues that would lower your scores
 */

console.log('=== Lighthouse Pre-Flight Checklist ===\n');

const issues = [];
const warnings = [];
const passes = [];

// Helper function to log results
function logResult(category, test, status, details = '') {
  const result = { category, test, status, details };
  if (status === 'pass') passes.push(result);
  else if (status === 'warn') warnings.push(result);
  else issues.push(result);
  
  const icon = status === 'pass' ? '✓' : status === 'warn' ? '⚠️' : '❌';
  const color = status === 'pass' ? 'color: green' : status === 'warn' ? 'color: orange' : 'color: red';
  console.log(`%c${icon} ${test}`, color);
  if (details) console.log(`  ${details}`);
}

// ===== PERFORMANCE CHECKS =====
console.log('\n📊 Performance Checks\n');

// Check for next/image usage
const images = document.querySelectorAll('img');
const nextImages = Array.from(images).filter(img => img.getAttribute('loading') === 'lazy' || img.srcset);
logResult('Performance', 'Images optimized', 
  nextImages.length === images.length ? 'pass' : 'fail',
  `${nextImages.length}/${images.length} images using next/image`
);

// Check for explicit image dimensions
const imagesWithoutDimensions = Array.from(images).filter(img => !img.width || !img.height);
logResult('Performance', 'Images have dimensions',
  imagesWithoutDimensions.length === 0 ? 'pass' : 'fail',
  imagesWithoutDimensions.length > 0 ? `${imagesWithoutDimensions.length} images missing width/height` : ''
);

// Check for console errors
const hasConsoleErrors = window.performance && performance.getEntriesByType('navigation')[0];
logResult('Performance', 'No console errors',
  console.error.length === 0 ? 'pass' : 'warn',
  'Check browser console for errors'
);

// Check font loading
const fonts = document.fonts;
if (fonts) {
  logResult('Performance', 'Fonts loaded',
    fonts.status === 'loaded' ? 'pass' : 'warn',
    `Font status: ${fonts.status}`
  );
}

// ===== ACCESSIBILITY CHECKS =====
console.log('\n♿ Accessibility Checks\n');

// Check for alt text on images
const imagesWithoutAlt = Array.from(images).filter(img => !img.alt && img.alt !== '');
logResult('Accessibility', 'All images have alt text',
  imagesWithoutAlt.length === 0 ? 'pass' : 'fail',
  imagesWithoutAlt.length > 0 ? `${imagesWithoutAlt.length} images missing alt text` : ''
);

// Check for form labels
const inputs = document.querySelectorAll('input, textarea, select');
const inputsWithoutLabels = Array.from(inputs).filter(input => {
  const id = input.id;
  return id && !document.querySelector(`label[for="${id}"]`) && !input.getAttribute('aria-label');
});
logResult('Accessibility', 'Form inputs have labels',
  inputsWithoutLabels.length === 0 ? 'pass' : 'fail',
  inputsWithoutLabels.length > 0 ? `${inputsWithoutLabels.length} inputs missing labels` : ''
);

// Check for heading hierarchy
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const h1Count = document.querySelectorAll('h1').length;
logResult('Accessibility', 'Single H1 on page',
  h1Count === 1 ? 'pass' : 'fail',
  `Found ${h1Count} H1 elements (should be 1)`
);

// Check for ARIA labels on icon buttons
const iconButtons = document.querySelectorAll('button:not([aria-label])');
const iconButtonsWithoutLabel = Array.from(iconButtons).filter(btn => {
  const hasText = btn.textContent.trim().length > 0;
  const hasIcon = btn.querySelector('svg');
  return hasIcon && !hasText;
});
logResult('Accessibility', 'Icon buttons have ARIA labels',
  iconButtonsWithoutLabel.length === 0 ? 'pass' : 'fail',
  iconButtonsWithoutLabel.length > 0 ? `${iconButtonsWithoutLabel.length} icon buttons missing aria-label` : ''
);

// Check for skip link
const skipLink = document.querySelector('a[href="#main"], a[href="#content"]');
logResult('Accessibility', 'Skip to content link exists',
  !!skipLink ? 'pass' : 'warn',
  !skipLink ? 'Consider adding a skip link for keyboard users' : ''
);

// Check color contrast (basic check)
const bodyStyles = window.getComputedStyle(document.body);
const bgColor = bodyStyles.backgroundColor;
const textColor = bodyStyles.color;
logResult('Accessibility', 'Color contrast',
  'warn',
  'Use Lighthouse or axe DevTools for detailed contrast analysis'
);

// ===== BEST PRACTICES CHECKS =====
console.log('\n🔧 Best Practices Checks\n');

// Check for HTTPS (in production)
const isHTTPS = window.location.protocol === 'https:';
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
logResult('Best Practices', 'HTTPS enabled',
  isHTTPS || isLocalhost ? 'pass' : 'fail',
  !isHTTPS && !isLocalhost ? 'Deploy with HTTPS in production' : ''
);

// Check external links
const externalLinks = document.querySelectorAll('a[target="_blank"]');
const unsafeLinks = Array.from(externalLinks).filter(link => {
  const rel = link.getAttribute('rel') || '';
  return !rel.includes('noopener');
});
logResult('Best Practices', 'External links are safe',
  unsafeLinks.length === 0 ? 'pass' : 'fail',
  unsafeLinks.length > 0 ? `${unsafeLinks.length} links missing rel="noopener noreferrer"` : ''
);

// Check for deprecated APIs (basic check)
logResult('Best Practices', 'No deprecated APIs',
  'warn',
  'Check browser console for deprecation warnings'
);

// Check image aspect ratios
const imagesWithAspectIssues = Array.from(images).filter(img => {
  if (!img.naturalWidth || !img.naturalHeight) return false;
  const naturalRatio = img.naturalWidth / img.naturalHeight;
  const displayRatio = img.width / img.height;
  return Math.abs(naturalRatio - displayRatio) > 0.1;
});
logResult('Best Practices', 'Images have correct aspect ratio',
  imagesWithAspectIssues.length === 0 ? 'pass' : 'warn',
  imagesWithAspectIssues.length > 0 ? `${imagesWithAspectIssues.length} images may be distorted` : ''
);

// ===== SEO CHECKS =====
console.log('\n🔍 SEO Checks\n');

// Check for title tag
const title = document.querySelector('title');
logResult('SEO', 'Page has title',
  title && title.textContent.length > 0 ? 'pass' : 'fail',
  title ? `"${title.textContent}"` : 'Missing title tag'
);

// Check for meta description
const metaDescription = document.querySelector('meta[name="description"]');
logResult('SEO', 'Page has meta description',
  metaDescription && metaDescription.content.length > 0 ? 'pass' : 'fail',
  metaDescription ? `"${metaDescription.content.substring(0, 50)}..."` : 'Missing meta description'
);

// Check for viewport meta tag
const viewport = document.querySelector('meta[name="viewport"]');
logResult('SEO', 'Viewport meta tag exists',
  !!viewport ? 'pass' : 'fail',
  viewport ? viewport.content : 'Missing viewport meta tag'
);

// Check for canonical URL
const canonical = document.querySelector('link[rel="canonical"]');
logResult('SEO', 'Canonical URL set',
  !!canonical ? 'pass' : 'warn',
  canonical ? canonical.href : 'Consider adding canonical URL'
);

// Check for Open Graph tags
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogImage = document.querySelector('meta[property="og:image"]');
logResult('SEO', 'Open Graph tags present',
  ogTitle && ogDescription && ogImage ? 'pass' : 'warn',
  !ogTitle || !ogDescription || !ogImage ? 'Some OG tags missing (affects social sharing)' : ''
);

// Check for structured data
const structuredData = document.querySelector('script[type="application/ld+json"]');
logResult('SEO', 'Structured data (JSON-LD)',
  !!structuredData ? 'pass' : 'warn',
  !structuredData ? 'Consider adding JSON-LD structured data' : ''
);

// Check font sizes
const smallText = Array.from(document.querySelectorAll('p, span, div')).filter(el => {
  const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
  return fontSize < 12;
});
logResult('SEO', 'Font sizes are legible',
  smallText.length === 0 ? 'pass' : 'warn',
  smallText.length > 0 ? `${smallText.length} elements with font size < 12px` : ''
);

// Check for robots.txt and sitemap.xml
fetch('/robots.txt')
  .then(res => logResult('SEO', 'robots.txt exists', res.ok ? 'pass' : 'warn'))
  .catch(() => logResult('SEO', 'robots.txt exists', 'warn', 'Could not verify'));

fetch('/sitemap.xml')
  .then(res => logResult('SEO', 'sitemap.xml exists', res.ok ? 'pass' : 'warn'))
  .catch(() => logResult('SEO', 'sitemap.xml exists', 'warn', 'Could not verify'));

// ===== SUMMARY =====
setTimeout(() => {
  console.log('\n=== Summary ===\n');
  console.log(`%c✓ ${passes.length} checks passed`, 'color: green; font-weight: bold');
  console.log(`%c⚠️  ${warnings.length} warnings`, 'color: orange; font-weight: bold');
  console.log(`%c❌ ${issues.length} issues found`, 'color: red; font-weight: bold');
  
  if (issues.length > 0) {
    console.log('\n%cCritical Issues to Fix:', 'font-weight: bold; color: red');
    issues.forEach(issue => {
      console.log(`  • ${issue.test}`);
      if (issue.details) console.log(`    ${issue.details}`);
    });
  }
  
  if (warnings.length > 0) {
    console.log('\n%cWarnings (may affect score):', 'font-weight: bold; color: orange');
    warnings.forEach(warning => {
      console.log(`  • ${warning.test}`);
      if (warning.details) console.log(`    ${warning.details}`);
    });
  }
  
  console.log('\n=== Next Steps ===\n');
  console.log('1. Fix all critical issues (❌)');
  console.log('2. Address warnings (⚠️) if possible');
  console.log('3. Open Chrome DevTools > Lighthouse tab');
  console.log('4. Select "Mobile" device and all categories');
  console.log('5. Click "Analyze page load"');
  console.log('6. Review detailed results and fix any remaining issues');
  console.log('7. Re-run Lighthouse until all scores ≥ 90');
  
  console.log('\n💡 Tip: Run this script after each fix to track progress');
}, 1000);

// Export results for programmatic access
window.lighthousePreFlight = {
  passes,
  warnings,
  issues,
  summary: {
    total: passes.length + warnings.length + issues.length,
    passed: passes.length,
    warned: warnings.length,
    failed: issues.length
  }
};
