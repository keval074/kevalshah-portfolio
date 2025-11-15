// Responsive Testing Script
// Run this in browser console to test responsive breakpoints

console.log('🔍 Starting Responsive Testing...\n');

// Define breakpoints
const breakpoints = {
  mobile: { width: 375, height: 667, name: 'Mobile (iPhone SE)' },
  mobileLarge: { width: 414, height: 896, name: 'Mobile Large (iPhone 11)' },
  tablet: { width: 768, height: 1024, name: 'Tablet (iPad)' },
  desktop: { width: 1280, height: 720, name: 'Desktop (HD)' },
  desktopLarge: { width: 1920, height: 1080, name: 'Desktop Large (Full HD)' },
};

// Test checklist
const testChecklist = {
  navigation: {
    name: 'Navigation',
    tests: [
      'Hamburger menu visible on mobile',
      'Navigation links accessible',
      'Logo visible and clickable',
      'Theme toggle accessible',
    ],
  },
  touchTargets: {
    name: 'Touch Targets',
    tests: [
      'All buttons minimum 44x44px',
      'Links have adequate spacing',
      'Form inputs are touch-friendly',
    ],
  },
  typography: {
    name: 'Typography',
    tests: [
      'Body text minimum 16px on mobile',
      'Headings scale appropriately',
      'Line height is readable',
      'No text overflow',
    ],
  },
  layout: {
    name: 'Layout',
    tests: [
      'No horizontal scrolling',
      'Content fits viewport',
      'Proper spacing on all devices',
      'Grid/flex layouts work correctly',
    ],
  },
  images: {
    name: 'Images',
    tests: [
      'Images load properly',
      'Images scale correctly',
      'Alt text present',
      'No broken images',
    ],
  },
  forms: {
    name: 'Forms',
    tests: [
      'Form fields are accessible',
      'Labels are visible',
      'Error messages display correctly',
      'Submit button is accessible',
    ],
  },
};

// Function to check touch target sizes
function checkTouchTargets() {
  console.log('\n📏 Checking Touch Target Sizes...');
  const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
  const smallTargets = [];

  interactiveElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      smallTargets.push({
        element: el.tagName,
        class: el.className,
        size: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
      });
    }
  });

  if (smallTargets.length > 0) {
    console.warn(`⚠️ Found ${smallTargets.length} elements smaller than 44x44px:`);
    console.table(smallTargets);
  } else {
    console.log('✅ All touch targets meet minimum size requirements');
  }
}

// Function to check font sizes
function checkFontSizes() {
  console.log('\n📝 Checking Font Sizes...');
  const textElements = document.querySelectorAll('p, span, a, button, input, label');
  const smallText = [];

  textElements.forEach((el) => {
    const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
    if (fontSize < 16 && el.textContent.trim().length > 0) {
      smallText.push({
        element: el.tagName,
        class: el.className,
        fontSize: `${fontSize}px`,
        text: el.textContent.substring(0, 30) + '...',
      });
    }
  });

  if (smallText.length > 0) {
    console.warn(`⚠️ Found ${smallText.length} text elements smaller than 16px:`);
    console.table(smallText.slice(0, 10)); // Show first 10
  } else {
    console.log('✅ All text meets minimum font size requirements');
  }
}

// Function to check for horizontal scroll
function checkHorizontalScroll() {
  console.log('\n↔️ Checking for Horizontal Scroll...');
  const bodyWidth = document.body.scrollWidth;
  const windowWidth = window.innerWidth;

  if (bodyWidth > windowWidth) {
    console.warn(`⚠️ Horizontal scroll detected: Body width (${bodyWidth}px) > Window width (${windowWidth}px)`);
    
    // Find elements causing overflow
    const elements = document.querySelectorAll('*');
    const overflowElements = [];
    
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.right > windowWidth) {
        overflowElements.push({
          element: el.tagName,
          class: el.className,
          right: Math.round(rect.right),
          overflow: Math.round(rect.right - windowWidth),
        });
      }
    });
    
    if (overflowElements.length > 0) {
      console.warn('Elements causing overflow:');
      console.table(overflowElements.slice(0, 5));
    }
  } else {
    console.log('✅ No horizontal scroll detected');
  }
}

// Function to check images
function checkImages() {
  console.log('\n🖼️ Checking Images...');
  const images = document.querySelectorAll('img');
  const issues = [];

  images.forEach((img) => {
    if (!img.alt) {
      issues.push({
        src: img.src.substring(0, 50),
        issue: 'Missing alt text',
      });
    }
    if (!img.complete || img.naturalHeight === 0) {
      issues.push({
        src: img.src.substring(0, 50),
        issue: 'Failed to load',
      });
    }
  });

  if (issues.length > 0) {
    console.warn(`⚠️ Found ${issues.length} image issues:`);
    console.table(issues);
  } else {
    console.log(`✅ All ${images.length} images are properly configured`);
  }
}

// Function to run all tests
function runAllTests() {
  console.log('═══════════════════════════════════════════════════');
  console.log(`📱 Testing at: ${window.innerWidth}x${window.innerHeight}`);
  console.log('═══════════════════════════════════════════════════');

  checkTouchTargets();
  checkFontSizes();
  checkHorizontalScroll();
  checkImages();

  console.log('\n═══════════════════════════════════════════════════');
  console.log('✅ Responsive Testing Complete!');
  console.log('═══════════════════════════════════════════════════\n');

  // Print manual testing checklist
  console.log('📋 Manual Testing Checklist:\n');
  Object.entries(testChecklist).forEach(([key, category]) => {
    console.log(`\n${category.name}:`);
    category.tests.forEach((test, index) => {
      console.log(`  ${index + 1}. [ ] ${test}`);
    });
  });

  console.log('\n\n💡 Tips:');
  console.log('- Open DevTools and toggle device toolbar (Ctrl+Shift+M)');
  console.log('- Test on actual devices when possible');
  console.log('- Check both portrait and landscape orientations');
  console.log('- Test with different zoom levels (100%, 150%, 200%)');
  console.log('- Verify touch interactions on mobile devices');
}

// Run tests
runAllTests();

// Export function for manual testing at different breakpoints
window.testResponsive = runAllTests;

console.log('\n💡 To re-run tests, type: testResponsive()');
