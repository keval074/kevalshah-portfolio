/**
 * Contact Form Testing Script
 * Run this in the browser console to test form validation and submission
 */

console.log('=== Contact Form Test Suite ===\n');

// Get form elements
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const messageInput = document.getElementById('contact-message');
const form = document.querySelector('form[aria-label="Contact form"]');

if (!form) {
  console.error('❌ Contact form not found! Make sure you are on the contact section.');
} else {
  console.log('✓ Contact form found\n');

  // Test 1: Validation - Empty fields
  console.log('Test 1: Empty Field Validation');
  console.log('Instructions: Submit the form with all fields empty');
  console.log('Expected: Error message "Please enter your name"\n');

  // Test 2: Validation - Invalid email
  console.log('Test 2: Invalid Email Validation');
  console.log('Instructions: Enter name, invalid email (e.g., "test"), and message');
  console.log('Expected: Error message "Please enter a valid email address"\n');

  // Test 3: Validation - Short message
  console.log('Test 3: Short Message Validation');
  console.log('Instructions: Enter name, valid email, and message < 10 characters');
  console.log('Expected: Error message "Please enter a message (at least 10 characters)"\n');

  // Test 4: Successful submission
  console.log('Test 4: Successful Submission');
  console.log('Instructions: Fill all fields correctly and submit');
  console.log('Expected:');
  console.log('  - Loading spinner appears');
  console.log('  - Submit button is disabled');
  console.log('  - Success message appears');
  console.log('  - Form fields are cleared');
  console.log('  - Alert auto-dismisses after 5 seconds\n');

  // Test 5: Network error
  console.log('Test 5: Network Error Handling');
  console.log('Instructions: Disconnect internet or use invalid endpoint, then submit');
  console.log('Expected:');
  console.log('  - Error message appears');
  console.log('  - Form data is preserved');
  console.log('  - Alert auto-dismisses after 5 seconds\n');

  // Check form endpoint configuration
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  console.log('Configuration Check:');
  console.log('Form Endpoint:', formEndpoint || '❌ NOT CONFIGURED');
  
  if (!formEndpoint) {
    console.warn('\n⚠️  Form endpoint is not configured!');
    console.log('To configure:');
    console.log('1. Choose a service (Formspree or Web3Forms)');
    console.log('2. Create .env.local file');
    console.log('3. Add: NEXT_PUBLIC_FORM_ENDPOINT=your-endpoint-url');
    console.log('4. Restart dev server\n');
  }

  // Accessibility checks
  console.log('\nAccessibility Checks:');
  console.log('Form aria-label:', form.getAttribute('aria-label') ? '✓' : '❌');
  console.log('Name input label:', nameInput?.labels?.length > 0 ? '✓' : '❌');
  console.log('Email input label:', emailInput?.labels?.length > 0 ? '✓' : '❌');
  console.log('Message input label:', messageInput?.labels?.length > 0 ? '✓' : '❌');
  console.log('Name required:', nameInput?.required ? '✓' : '❌');
  console.log('Email required:', emailInput?.required ? '✓' : '❌');
  console.log('Message required:', messageInput?.required ? '✓' : '❌');

  // Helper function to test validation
  window.testFormValidation = function(name, email, message) {
    console.log('\n--- Running Validation Test ---');
    if (nameInput) nameInput.value = name;
    if (emailInput) emailInput.value = email;
    if (messageInput) messageInput.value = message;
    console.log('Form filled with:');
    console.log('  Name:', name || '(empty)');
    console.log('  Email:', email || '(empty)');
    console.log('  Message:', message || '(empty)');
    console.log('Now click the Submit button to see validation result.');
  };

  console.log('\n=== Helper Functions ===');
  console.log('testFormValidation(name, email, message) - Fill form with test data');
  console.log('\nExample usage:');
  console.log('  testFormValidation("", "", "") - Test empty fields');
  console.log('  testFormValidation("John", "invalid", "Hi") - Test invalid email and short message');
  console.log('  testFormValidation("John Doe", "john@example.com", "This is a test message") - Test valid data');
}
