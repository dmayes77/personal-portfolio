const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const url = process.argv[2];
  const out = process.argv[3];
  const width = Number(process.argv[4] || 1440);
  const height = Number(process.argv[5] || 900);
  const full = process.argv[6] !== 'viewport';
  const page = await browser.newPage();
  await page.setViewportSize({ width, height });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: out, fullPage: full });
  await browser.close();
})();
