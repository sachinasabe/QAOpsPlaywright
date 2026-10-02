const { expect } = require("@playwright/test");

class OrderReviewPage{

    constructor(page){
        this.page=page;
        this.country=page.locator("[placeholder*='Country']");
        this.dropdown=page.locator(".ta-results");
        this.emailId=page.locator(".user__name [type='text']").first();
        this.submit=page.locator(".action__submit");
        this.orderConfirmationText=page.locator(".hero-primary");
        this.orderId=page.locator(".em-spacer-1 .ng-star-inserted");
    }
    async searchCountryandSelect(countryCode,countryName){
        await this.country.type(countryCode,{delay:100});
        await this.dropdown.waitFor();
        const optionscount=await this.dropdown.locator("button").count();
        for(let i=1;i<optionscount;i++){
 const text=await this.dropdown.locator("button").nth(i).textContent();
 console.log(text);
 if( text === ' India'){
await this.dropdown.locator("button").nth(i).click();
break;
  }

        }
    }
    async SubmitandGetOrderId(username){
        await expect(this.emailId).toHaveText(username);
await this.submit.click();
await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
// const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").first().textContent();
const orderid = (await this.orderId.first().textContent())
    .replace(/\|/g, "")
    .trim();
    return orderid;
    }
}
module.exports={OrderReviewPage};