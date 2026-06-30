import fs from 'fs';
import path from 'path';

function walk(dir, cb) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, cb);
    } else {
      cb(fullPath);
    }
  });
}

walk('src', (filePath) => {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('data-lottie-url') || line.includes('LottieLoader')) {
        console.log(`${filePath}:${idx+1}: ${line.trim()}`);
      }
    });
  }
});
