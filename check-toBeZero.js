import fs from 'fs';
const content = fs.readFileSync('tests/e2e/your_mechanic.test.jsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('toBe(0)')) {
    console.log(`${idx + 1}: ${line}`);
  }
});
