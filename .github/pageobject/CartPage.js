const { expect } = require("@playwright/test");

class CartPage {

    constructor(page) {
        this.page = page;
        this.cartproducts = page.locator("div li");
        this.checkoutbutton = page.locator("button[type=button]").last();
    }

    async verifyProductIsDisplayed(productname) {

        console.log("Current URL:", this.page.url());

        const product = this.cartproducts.filter({
            hasText: productname
        });

        console.log("Product count:", await product.count());

        await expect(product).toBeVisible();
    }

    async checkout() {
        await this.checkoutbutton.click();
    }
}

module.exports = { CartPage };