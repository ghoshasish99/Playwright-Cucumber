const { expect } = require("chai");

class ProductPage {
    async searchProduct(item){
        await page.fill('input[aria-label="Product search"]', item);
        await Promise.all([
            page.waitForNavigation({timeout:10000}),
            page.click('button[aria-label="Search"]')
        ]);
    }

    async productSearchSuccessful(item){
        await page.$('text="'+item+'"');
    }

    async addProduct(item){
        await page.click('text="'+item+'"');
        await page.click('text="Add to your basket"');
        await page.click('.MuiBadge-root .MuiSvgIcon-root path');
    }

    async productAddSuccessful(item){
        await page.$('text="Proceed to checkout"');
    }

    async proceedToCheckOut(){
        await page.click('text="Proceed to checkout"');        
    }   
}

module.exports = { ProductPage };