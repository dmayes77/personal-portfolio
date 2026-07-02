const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  const h = await page.evaluate(() => document.querySelector('#hero').getBoundingClientRect().height);
  console.log('desktop hero height:', h, '/ 900');
  await browser.close();
})();
