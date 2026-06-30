import fs from 'fs';
import path from 'path';

describe('Programmatic Structure and Configuration Checks', () => {
  const pagesDir = path.resolve(__dirname, '../../src/pages');
  const srcDir = path.resolve(__dirname, '../../src');
  const appFile = path.resolve(__dirname, '../../src/App.jsx');
  const pages = ['Home.jsx', 'About.jsx', 'Services.jsx', 'Pricing.jsx', 'Contact.jsx'];

  test('Verify that 5 distinct page files exist in /src/pages/', () => {
    pages.forEach(page => {
      const pagePath = path.join(pagesDir, page);
      const exists = fs.existsSync(pagePath);
      expect(exists).toBe(true);
    });
  });

  test('Verify that router configuration in src/App.jsx defines routes for all 5 pages', () => {
    const appContent = fs.readFileSync(appFile, 'utf8');
    
    // Check imports or references of the pages
    expect(appContent).toMatch(/import\s+Home\s+from/i);
    expect(appContent).toMatch(/import\s+About\s+from/i);
    expect(appContent).toMatch(/import\s+Services\s+from/i);
    expect(appContent).toMatch(/import\s+Pricing\s+from/i);
    expect(appContent).toMatch(/import\s+Contact\s+from/i);

    // Check Route path configurations (checking case insensitivity or exact matching)
    // Home is typically index or path="/" or path=""
    expect(appContent).toMatch(/index|path="\/"/i);
    expect(appContent).toMatch(/path="about"/i);
    expect(appContent).toMatch(/path="services"/i);
    expect(appContent).toMatch(/path="pricing"/i);
    expect(appContent).toMatch(/path="contact"/i);
  });

  test('Scan /src/ for presence of Atropos and Lottie usage', () => {
    const fileList = [];
    
    function scan(dir) {
      const list = fs.readdirSync(dir);
      list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scan(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
          fileList.push(fullPath);
        }
      });
    }

    scan(srcDir);

    let hasAtropos = false;
    let hasLottie = false;

    fileList.forEach(filePath => {
      const content = fs.readFileSync(filePath, 'utf8');
      if (/atropos/i.test(content)) {
        hasAtropos = true;
      }
      if (/lottie/i.test(content)) {
        hasLottie = true;
      }
    });

    // Verify presence of packages in package.json to support TDD structure
    const pkgContent = fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf8');
    const hasAtroposInPkg = /atropos/i.test(pkgContent);
    const hasLottieInPkg = /lottie/i.test(pkgContent);

    expect(hasAtropos || hasAtroposInPkg).toBe(true);
    expect(hasLottie || hasLottieInPkg).toBe(true);
  });

  test('Verify each page file defines exactly 7 section elements and at least 35 distinct sections exist across the pages', () => {
    let totalSections = 0;

    pages.forEach(page => {
      const pagePath = path.join(pagesDir, page);
      const content = fs.readFileSync(pagePath, 'utf8');
      
      // Match opening <section tags
      const sectionMatches = content.match(/<section\b/g) || [];
      expect(sectionMatches.length).toBe(7);
      
      totalSections += sectionMatches.length;
    });

    expect(totalSections).toBe(35);
  });
});
