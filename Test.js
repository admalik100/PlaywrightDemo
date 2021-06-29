const playwright = require('playwright');

  (async () => {
      const browser = await playwright["chromium"].launch({
          headless: false
      });
      const context = await browser.newContext({
          //needed for websites that navigate automated requests to Captha page.
          javaScriptEnabled: true
      });
      const page = await context.newPage();
      await page.goto("https://www.upwork.com/")



  })();