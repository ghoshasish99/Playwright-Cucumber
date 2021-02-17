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
Before(async() =>{
    global.context = await global.browser.newContext({
        recordVideo : {
          dir : 'videos/',
        }
    });
    global.page = await global.context.newPage();
});

After(async() => {
    const directoryPath = path.join(__dirname, 'videos');
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
        });
    });
    global.page.close();
    //global.context.close();
});
