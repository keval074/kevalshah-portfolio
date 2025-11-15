// Script to verify database icon CDN URLs are accessible
const https = require('https');

const iconUrls = [
  {
    name: 'MongoDB',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    expectedColor: 'green'
  },
  {
    name: 'MySQL',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    expectedColor: 'blue and orange'
  },
  {
    name: 'DBeaver',
    url: 'https://cdn.simpleicons.org/dbeaver/382923',
    expectedColor: 'brown (#382923)'
  }
];

console.log('🔍 Verifying Database Icon CDN URLs...\n');

iconUrls.forEach(({ name, url, expectedColor }) => {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log(`✅ ${name}: CDN URL is accessible`);
      console.log(`   URL: ${url}`);
      console.log(`   Expected Color: ${expectedColor}`);
      console.log(`   Status: ${res.statusCode}\n`);
    } else {
      console.log(`❌ ${name}: CDN URL returned status ${res.statusCode}`);
      console.log(`   URL: ${url}\n`);
    }
  }).on('error', (err) => {
    console.log(`❌ ${name}: Failed to access CDN URL`);
    console.log(`   URL: ${url}`);
    console.log(`   Error: ${err.message}\n`);
  });
});

console.log('📝 Manual Testing Checklist:');
console.log('1. Navigate to http://localhost:3000');
console.log('2. Scroll to the Skills section');
console.log('3. Find the "Database" category');
console.log('4. Verify MongoDB displays with green leaf logo');
console.log('5. Verify MySQL displays with blue/orange dolphin logo');
console.log('6. Verify DBeaver displays with brown logo');
console.log('7. Test responsive behavior (resize browser window)');
console.log('8. Toggle dark/light theme mode');
console.log('9. Test fallback by temporarily breaking a CDN URL in SkillsGrid.tsx\n');
