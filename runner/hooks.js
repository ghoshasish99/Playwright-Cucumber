const {BeforeAll, Before, AfterAll, After} = require ('cucumber')
const { chromium } = require('playwright');
const fs = require ('fs')
var path = require('path');
//let moonHost = process.env.moonHostIp;
//let moonHost = '52.186.103.162';
let moonHost = '';

// Create a global browser for the test session.
BeforeAll(async() =>{
        if (moonHost){
                console.log(moonHost)
                global.browser = await chromium.connect({
                timeout: 0,
                wsEndpoint: 'ws://'+moonHost+':4444/playwright/chromium',
                headless:false
            });
        }
        else{
            console.log(moonHost)  
            global.browser = await chromium.launch();
        }
});

AfterAll(async() => {
     await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async(scenario) =>{
    global.context = await global.browser.newContext({
        recordVideo : {
          dir : 'videos/'+scenario.pickle.name,
        }
    });
    global.page = await global.context.newPage();
});

After(async() => {
    await global.page.close();
    //global.context.close();
});
