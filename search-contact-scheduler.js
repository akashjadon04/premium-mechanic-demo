import fs from 'fs';
const content = fs.readFileSync('src/pages/Contact.jsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('scheduler')) {
    console.log(`${idx + 1}: ${line}`);
  }
});
