import fs from 'fs';
const content = fs.readFileSync('src/pages/Pricing.jsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('lottie')) {
    console.log(`${idx + 1}: ${line}`);
  }
});
