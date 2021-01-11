const {BeforeAll, Before, AfterAll, After} = require ('cucumber')
const { chromium } = require('playwright');
let moonHost = process.env.moonHostIp;
//let moonHost = '52.188.219.208';

// Create a global browser for the test session.
BeforeAll(async() =>{
        global.browser = await chromium.connect({
        timeout: 0,
        wsEndpoint: 'ws://'+moonHost+':4444/playwright/chromium'
    });
});

AfterAll(async() => {
     await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async() =>{
    global.context = await global.browser.newContext(/*{
        recordVideo : {
          dir : 'videos/'
        }
    }*/);
    global.page = await global.context.newPage();
});

After(async() => {
    global.page.close();
    global.context.close();
});
