/**
 * Test script to verify reduced motion implementation
 * This script can be run in the browser console to test reduced motion behavior
 */

console.log('=== Reduced Motion Test ===\n');

// Check if prefers-reduced-motion is enabled
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
console.log('1. Prefers Reduced Motion:', prefersReducedMotion ? '✓ ENABLED' : '✗ DISABLED');

// Check CSS smooth scrolling
const htmlElement = document.documentElement;
const scrollBehavior = window.getComputedStyle(htmlElement).scrollBehavior;
console.log('2. Scroll Behavior:', scrollBehavior);
console.log('   Expected:', prefersReducedMotion ? 'auto' : 'smooth');

// Check if animations are disabled via CSS
const testElement = document.querySelector('section');
if (testElement) {
  const styles = window.getComputedStyle(testElement);
  const transitionDuration = styles.transitionDuration;
  console.log('3. Transition Duration:', transitionDuration);
  console.log('   Expected:', prefersReducedMotion ? '~0.01ms' : '>0.5s');
}

// Test animation hook behavior
console.log('\n4. Animation Hook Test:');
console.log('   - If reduced motion is enabled, elements should appear immediately (isVisible = true)');
console.log('   - If reduced motion is disabled, elements should fade in when scrolled into view');

// Check localStorage theme persistence
const savedTheme = localStorage.getItem('themeMode');
console.log('\n5. Theme Persistence:');
console.log('   Saved theme:', savedTheme || 'Not set (using system preference)');

// Instructions
console.log('\n=== Test Instructions ===');
console.log('To enable reduced motion:');
console.log('  Windows: Settings > Accessibility > Visual effects > Animation effects (Off)');
console.log('  macOS: System Preferences > Accessibility > Display > Reduce motion');
console.log('  Linux: Settings > Accessibility > Reduce animation');
console.log('\nAfter enabling, refresh the page and run this script again.');
console.log('\nExpected behavior with reduced motion:');
console.log('  ✓ Sections appear immediately without fade-in');
console.log('  ✓ Smooth scrolling is disabled (instant scroll)');
console.log('  ✓ All transitions are nearly instant (~0.01ms)');
console.log('  ✓ Site remains fully functional');
