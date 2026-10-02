
import{test,expect,Locator,Page} from '@playwright/test';

export class CartPage{
    cartproducts:Locator;
    producttext:Locator;
    cart:Locator;
    orders:Locator;
    checkoutbutton:Locator;
    page:Page;

    constructor(page:Page){
     this.page=page;
     this.cartproducts=page.locator("div li").first();
     this.producttext=page.locator(".card-body b");
     this.cart=page.locator("[routerlink*='cart']");
     this.orders=page.locator("button[routerlink*='myorders']");
     this.checkoutbutton=page.locator("button[type=button]").last();

     
    }
    
   async verifyProductIsDisplayed(productname:string){ 
    await this.cartproducts.waitFor(); 
    const bool = await this.getproductLocator(productname).isVisible(); 
    expect(bool).toBeTruthy(); 
}
    async checkout(){
        await this.checkoutbutton.click();
    }
 getproductLocator(productname:string){
    return this.page.locator("h3:has-text('"+productname+"')");

}
}
