const {BeforeAll, Before, AfterAll, After, setDefaultTimeout} = require ('cucumber')
const { chromium } = require('playwright');

setDefaultTimeout(15000);
// Create a global browser for the test session.
BeforeAll(async() =>{
  
            global.browser = await chromium.launch({
                headless:false
            });

});

AfterAll(async() => {
     await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async(scenario) =>{
    global.context = await global.browser.newContext({
       //needed for websites that navigate automated requests to Captha page.
       javaScriptEnabled: true
    });
    global.page = await global.context.newPage();
    
});

After(async() => {
    await global.page.close();
});