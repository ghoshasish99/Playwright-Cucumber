
![Playwright Test Execution](https://github.com/ghoshasish99/Playwright-Cucumber/workflows/Playwright%20Test%20Execution/badge.svg)
    
# Playwright (execution on Moon) with CucumberJS
    
Playwright end-to-end test automation with CucumberJS
    
## Getting Started

* To install Playwright : `npm install playwright --save-dev`
* To install Cucumber   : `npm install cucumber --save-dev`
* To install Junit Reporter : `npm install cucumberjs-junitxml --save-dev`
* To install Chai : `npm install chai --save-dev`
 
## To execute the tests

Define the scripts in package.json as follows :
```json
"scripts": {
    "test": "cucumber-js --parallel 1 -f json:report/report.json && node report.js && cat report/report.json | npx cucumber-junit > report/junitreport.xml"
  }
```
Finally execute the tests with `npm test`

### Create a global browser for the test session
```Javascript
BeforeAll(async() =>{
        if (moonHost){
                global.browser = await chromium.connect({
                timeout: 0,
                wsEndpoint: 'ws://'+moonHost+':4444/playwright/chromium'
            });
        }
        else{
            global.browser = await chromium.launch();
        }
});
```
### Create a fresh browser context for each test
```Javascript
Before(async() =>{
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});
```
### A sample Feature file
```gherkin
Scenario Outline: Login to the E-Shop Application with Wrong Password
    Given User launched eshop login page
    When User logged in eshop using the invalid emailid "<EmailID>" and the invalid password "<Password>"
    Then User should not get logged in

    Examples:
      | EmailID                    | Password  |
      | testuser_negative@shop.com | Testing$1 |
```
### A sample stepdefinition
```Javascript
When('User logged in eshop using the invalid emailid {string} and the invalid password {string}',async(username,password) =>{
    await loginpage.login(username,password);
});
```
### Example of how a Playwright code snippet looks
```Javascript
const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.example.com/');
  await page.screenshot({ path: 'page.png', fullPage: true });

  await browser.close();
})();
```
For more on Playwright click [here](https://playwright.dev/)

To know about Moon, how to deploy and use Moon, read the article below :
https://ghoshasish99.medium.com/deploy-moon-on-azure-and-google-cloud-607a9604bccc
