class DashboardPage{

    constructor(page){
          this.page=page;
          this.products=page.locator(".card-body");
          this.productText=page.locator(".card-body b");
          this.cart=page.locator("[routerlink*=cart]");
          this.orderDetails=page.locator("[routerlink*='myorders']").first();
         
    }
    async searchProductAddCart(productname){

    await this.products.first().waitFor();

    const titles = await this.productText.allTextContents();
    console.log("Products:", titles);

    const count = await this.products.count();
    console.log("Product count:", count);

    console.log("Looking for:", productname);

    for(let i = 0; i < count; i++){

        const actualProductName =
            await this.products.nth(i).locator("b").textContent();

        console.log("Checking:", actualProductName);

        if(actualProductName.trim() === productname.trim()){

            console.log("PRODUCT FOUND");

            const addToCartButton =
                this.products.nth(i).locator("text= Add To Cart");

            console.log("Add To Cart buttons:",
                await addToCartButton.count());

            await addToCartButton.click();

            console.log("ADD TO CART CLICKED");

            break;
        }
    }
}
    // async searchProductAddCart(productname){
    //     await this.products.first().waitFor();
    //     const titles=await this.productText.allTextContents();
    //     console.log(titles);
    //     const count=await this.products.count();
    //     console.log(count);
    //     for(let i=0;i<count;i++){
    //        if( await this.products.nth(i).locator("b").textContent()===productname){
    //         //add to cart 

    //         await this.products.nth(i).locator("text= Add To Cart").click();
    //         break;
        
    //        }
    //     }
    // }
    async navigateToCart() { 
    const spinner = this.page.locator(".ngx-spinner-overlay");

    console.log("Spinner count:", await spinner.count());

    if (await spinner.count() > 0) {
        await spinner.waitFor({ state: "detached", timeout: 10000 });
        console.log("Spinner detached");
    }

    await this.cart.click();
}
 async navigateToOrders(){
    await this.orderDetails.click();
    }
}
module.exports={DashboardPage};