/**
 * Theme Toggle Persistence Test Script
 * Run this in the browser console to test theme persistence
 */

console.log('=== Theme Persistence Test Suite ===\n');

// Check current theme
const currentTheme = localStorage.getItem('themeMode');
const htmlTheme = document.documentElement.getAttribute('data-theme');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

console.log('Current State:');
console.log('  localStorage theme:', currentTheme || 'Not set');
console.log('  HTML data-theme:', htmlTheme);
console.log('  System preference:', systemPreference);
console.log('  Match:', currentTheme === htmlTheme ? '✓' : '❌');

// Check if theme toggle button exists
const themeToggle = document.querySelector('button[aria-label*="mode"]');
console.log('\nTheme Toggle Button:', themeToggle ? '✓ Found' : '❌ Not found');

if (themeToggle) {
  const ariaLabel = themeToggle.getAttribute('aria-label');
  console.log('  ARIA Label:', ariaLabel);
  console.log('  Expected:', currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
}

// Test functions
window.testThemeToggle = function() {
  console.log('\n--- Theme Toggle Test ---');
  console.log('1. Click the theme toggle button (sun/moon icon in navbar)');
  console.log('2. Observe the theme change');
  console.log('3. Run this script again to verify localStorage updated');
  console.log('4. Refresh the page (F5)');
  console.log('5. Run this script again to verify theme persisted');
};

window.testSystemPreference = function() {
  console.log('\n--- System Preference Test ---');
  console.log('1. Clear localStorage: localStorage.removeItem("themeMode")');
  console.log('2. Refresh the page');
  console.log('3. Theme should match system preference:', systemPreference);
  console.log('4. Change system theme in OS settings');
  console.log('5. Refresh the page');
  console.log('6. Theme should match new system preference');
};

window.clearThemePreference = function() {
  localStorage.removeItem('themeMode');
  console.log('✓ Theme preference cleared from localStorage');
  console.log('Refresh the page to see system preference applied');
};

window.setTheme = function(mode) {
  if (mode !== 'light' && mode !== 'dark') {
    console.error('❌ Invalid mode. Use "light" or "dark"');
    return;
  }
  localStorage.setItem('themeMode', mode);
  console.log(`✓ Theme set to ${mode}`);
  console.log('Refresh the page to see the change');
};

// Automated test
window.runThemeTests = function() {
  console.log('\n=== Running Automated Theme Tests ===\n');
  
  const tests = [];
  
  // Test 1: localStorage exists and is valid
  const savedTheme = localStorage.getItem('themeMode');
  tests.push({
    name: 'localStorage theme is valid',
    pass: !savedTheme || savedTheme === 'light' || savedTheme === 'dark',
    actual: savedTheme,
    expected: 'light or dark or null'
  });
  
  // Test 2: HTML data-theme matches localStorage
  const htmlTheme = document.documentElement.getAttribute('data-theme');
  tests.push({
    name: 'HTML data-theme matches localStorage',
    pass: !savedTheme || htmlTheme === savedTheme,
    actual: htmlTheme,
    expected: savedTheme || systemPreference
  });
  
  // Test 3: Theme toggle button exists
  const toggleButton = document.querySelector('button[aria-label*="mode"]');
  tests.push({
    name: 'Theme toggle button exists',
    pass: !!toggleButton,
    actual: toggleButton ? 'Found' : 'Not found',
    expected: 'Found'
  });
  
  // Test 4: Theme toggle has correct ARIA label
  if (toggleButton) {
    const ariaLabel = toggleButton.getAttribute('aria-label');
    const expectedLabel = htmlTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
    tests.push({
      name: 'Theme toggle has correct ARIA label',
      pass: ariaLabel === expectedLabel,
      actual: ariaLabel,
      expected: expectedLabel
    });
  }
  
  // Test 5: Theme toggle has correct icon
  if (toggleButton) {
    const hasIcon = toggleButton.querySelector('svg');
    tests.push({
      name: 'Theme toggle has icon',
      pass: !!hasIcon,
      actual: hasIcon ? 'Found' : 'Not found',
      expected: 'Found'
    });
  }
  
  // Test 6: CSS variables are set correctly
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryColor = rootStyles.getPropertyValue('--color-primary').trim();
  tests.push({
    name: 'CSS variables are defined',
    pass: !!primaryColor,
    actual: primaryColor || 'Not set',
    expected: 'Color value'
  });
  
  // Display results
  let passed = 0;
  let failed = 0;
  
  tests.forEach((test, index) => {
    const status = test.pass ? '✓ PASS' : '❌ FAIL';
    const color = test.pass ? 'color: green' : 'color: red';
    console.log(`%c${status}%c Test ${index + 1}: ${test.name}`, color, '');
    if (!test.pass) {
      console.log(`  Expected: ${test.expected}`);
      console.log(`  Actual: ${test.actual}`);
    }
    test.pass ? passed++ : failed++;
  });
  
  console.log(`\n=== Results: ${passed}/${tests.length} tests passed ===`);
  
  if (failed === 0) {
    console.log('%c✓ All tests passed!', 'color: green; font-weight: bold');
  } else {
    console.log(`%c❌ ${failed} test(s) failed`, 'color: red; font-weight: bold');
  }
  
  return { passed, failed, total: tests.length };
};

// Manual test instructions
console.log('\n=== Manual Test Instructions ===\n');
console.log('Test 1: Toggle Theme');
console.log('  1. Note current theme');
console.log('  2. Click theme toggle button');
console.log('  3. Verify theme changes');
console.log('  4. Verify icon changes (sun ↔ moon)');
console.log('  5. Run: runThemeTests()');
console.log('  6. Verify localStorage updated\n');

console.log('Test 2: Persistence After Refresh');
console.log('  1. Toggle to dark mode');
console.log('  2. Refresh page (F5)');
console.log('  3. Verify dark mode persists');
console.log('  4. Toggle to light mode');
console.log('  5. Refresh page (F5)');
console.log('  6. Verify light mode persists\n');

console.log('Test 3: Persistence Across Sessions');
console.log('  1. Toggle to dark mode');
console.log('  2. Close browser tab');
console.log('  3. Open site in new tab');
console.log('  4. Verify dark mode persists\n');

console.log('Test 4: System Preference');
console.log('  1. Run: clearThemePreference()');
console.log('  2. Refresh page');
console.log('  3. Verify theme matches system preference');
console.log('  4. Toggle theme manually');
console.log('  5. Verify manual selection overrides system\n');

console.log('=== Helper Functions ===');
console.log('runThemeTests() - Run automated tests');
console.log('testThemeToggle() - Instructions for manual toggle test');
console.log('testSystemPreference() - Instructions for system preference test');
console.log('clearThemePreference() - Clear saved theme preference');
console.log('setTheme("light"|"dark") - Manually set theme preference');

console.log('\n💡 Tip: Run runThemeTests() to see current state');
