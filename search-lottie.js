import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const files = fs.readdirSync(pagesDir);

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  const matches = content.match(/<LottieLoader|<Lottie/g) || [];
  console.log(`${file}: ${matches.length} matches`);
  
  // Also print the lines that contain them
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('LottieLoader') && !line.includes('import')) {
      console.log(`  Line ${idx+1}: ${line.trim()}`);
    }
  });
});
