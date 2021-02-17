const {Given, When, Then} = require ('cucumber')
const {LoginPage} = require('../../page_object/login.page')
const {ProductPage} = require('../../page_object/product.page')
const {PaymentPage} = require('../../page_object/payment.page')

const loginpage = new LoginPage();
const productpage = new ProductPage();
const paymentpage = new PaymentPage();


Given('User launched eshop login page', async()=>{
    await loginpage.navigate();
 });

When('User logged in eshop using the invalid emailid {string} and the invalid password {string}',async(username,password) =>{
    await loginpage.login(username,password);
});

Then('User should not get logged in', async()=>{
    await loginpage.loginFailed();
});

When('User create account with {string}, {string}, {string} and {string}', async(fname, lname, email, password) => {
    let random = Math.floor(Math.random()*90000) + 10000;
    email = email.replace('Ashish','Ashish'+random);
    await loginpage.createAccount(fname,lname,email,password);
});

Then('User account should get created', async()=> {
    await loginpage.loginSuccessful();
});

When('User logged in eshop using the valid emailid {string} and the valid password {string}', async (email, password) =>{
    await loginpage.alreadyLoggedin(email,password); 
});

When('User searches for the {string}', async (item) =>{
    await productpage.searchProduct(item);
    await productpage.productSearchSuccessful(item);
});

When('User adds {string} product to the cart', async (item) =>{
    await productpage.addProduct(item);
});

Then('User should be able to view and add the listed product {string}', async (item) =>{
    await productpage.productAddSuccessful(item);
});

Given('User enters Address details with {string},{string}, {string}, {string},{string},{string},{string}, {string}', async (title,fname,lname,addr1,addr2,city,state,zip)=> {
    await paymentpage.enterAddressDetails(title,fname,lname,addr1,addr2,city,state,zip);
});

Given('User enters Payment details with {string}, {string}, {string},{string},{string}', async(cardNo,name,month,year,code) => {
    await paymentpage.enterPaymentDetails(cardNo,name,month,year,code);
});
 
Then('User should get the Confirmation of Order', async ()=> {
    await page.screenshot({ path: 'page.png', fullPage: true });
});

