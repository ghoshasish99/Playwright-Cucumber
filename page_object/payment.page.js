const { expect } = require("chai");

class PaymentPage{

    async enterAddressDetails(title,fname,lname,addr1,addr2,city,state,zip){
        await Promise.all([
            page.waitForNavigation({timeout:10000}),
            page.click('text="Proceed to checkout"')
        ]);
        await page.fill('//div[normalize-space(.)=\'Title *\']/div/input[normalize-space(@type)=\'text\']', title);
        await page.fill('//div[normalize-space(.)=\'First name *\']/div/input[normalize-space(@type)=\'text\']', fname);
        await page.fill('//div[normalize-space(.)=\'Last name *\']/div/input[normalize-space(@type)=\'text\']', lname);
        await page.fill('//div[normalize-space(.)=\'Address line1 *\']/div/input[normalize-space(@type)=\'text\']', addr1);
        await page.fill('//div[normalize-space(.)=\'Address line2 *\']/div/input[normalize-space(@type)=\'text\']', addr2);
        await page.fill('//div[normalize-space(.)=\'City *\']/div/input[normalize-space(@type)=\'text\']', city);
        await page.fill('//div[normalize-space(.)=\'State/Province/Region *\']/div/input[normalize-space(@type)=\'text\']', state);
        await page.fill('//div[normalize-space(.)=\'ZIP/Postcode *\']/div/input[normalize-space(@type)=\'text\']', zip);
    }

    async enterPaymentDetails(cardNo,name,month,year,code){
        await page.click('text="Next"')
        await page.fill('//div[normalize-space(.)=\'Card number *\']/div/input[normalize-space(@type)=\'text\']', cardNo);
        await page.fill('//div[normalize-space(.)=\'Name on card *\']/div/input[normalize-space(@type)=\'text\']', name);
        await page.fill('//div[normalize-space(.)=\'Expiry month *\']/div/input[normalize-space(@type)=\'text\']', month);
        await page.fill('//div[normalize-space(.)=\'Expiry year *\']/div/input[normalize-space(@type)=\'text\']', year);
        await page.fill('//div[normalize-space(.)=\'Security code *\']/div/input[normalize-space(@type)=\'text\']', code);
        await page.click('text="Confirm"');
    }
}

module.exports = { PaymentPage };