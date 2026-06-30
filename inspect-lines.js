import fs from 'fs';
const content = fs.readFileSync('tests/e2e/your_mechanic.test.jsx', 'utf8');
const lines = content.split('\n');
for (let i = 370; i <= 380; i++) {
  console.log(`${i}: ${lines[i-1]}`);
}
