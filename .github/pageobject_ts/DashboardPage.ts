
import{test,expect,Locator,Page} from '@playwright/test';

export class DashboardPage{
    products:Locator;
    productText:Locator;
    cart:Locator;
    orderDetails:Locator;
    page:Page;


    constructor(page:Page){
          this.page=page;
          this.products=page.locator(".card-body");
          this.productText=page.locator(".card-body b");
          this.cart=page.locator("[routerlink*=cart]");
          this.orderDetails=page.locator("[routerlink*='myorders']").first();
          
    }
    async searchProductAddCart(productname:string){
        await this.products.first().waitFor();
        const titles=await this.productText.allTextContents();
        console.log(titles);
        const count=await this.products.count();
        for(let i=0;i<count;i++){
           if( await this.products.nth(i).locator("b").textContent()===productname){
            //add to cart 
            await this.products.nth(i).locator("text= Add To Cart").click();
            break;
        
           }
        }
    }
    async navigateToCart(){

        await this.cart.click();
    }
    async navigateToOrders(){
    await this.orderDetails.click();
    }
}
