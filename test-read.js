import fs from 'fs';
const content = fs.readFileSync('tests/e2e/your_mechanic.test.jsx', 'utf8');
const lines = content.split('\n');
console.log('LINE 375:', JSON.stringify(lines[374]));
console.log('LINE 412:', JSON.stringify(lines[411]));
console.log('LINE 464:', JSON.stringify(lines[463]));
