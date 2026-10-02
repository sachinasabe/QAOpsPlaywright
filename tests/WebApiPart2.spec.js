

const {test, expect}=require('@playwright/test');
let webContext;
test.beforeAll(async({browser})=>
{
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("asabesachin2@gmail.com");
await page.locator("#userPassword").fill("Sachin@1988");
await page.locator("[value='Login']").click();
await page.waitForLoadState('networkidle');
await context.storageState({path:'state.json'});
webContext=await browser.newContext({storageState:'state.json'});

});

test('Client App login',async({}) =>
{
    const email="asabesachin2@gmail.com";
    const productname="ZARA COAT 3";
    const page=await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const products=page.locator(".card-body");

await page.locator(".card-body b").first().waitFor();
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);
const count=await products.count();
for(let i=0;i<count;i++){
   if( await products.nth(i).locator("b").textContent()===productname){
    //add to cart 
    await products.nth(i).locator("text= Add To Cart").click();
    break;

   }
}
await page.locator("[routerlink*=cart]").click();
await page.locator("div li").first().waitFor();
const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("button[type=button]").last().click();
await page.locator("[placeholder*='Country']").pressSequentially("ind");
const dropdown=page.locator(".ta-results");
await dropdown.waitFor();
const optionscount=await dropdown.locator("button").count();
for(let i=1;i<optionscount;i++){
 const text=await dropdown.locator("button").nth(i).textContent();
 console.log(text);
 if( text === ' India'){
await dropdown.locator("button").nth(i).click();
break;
  }
}
await expect( page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
// const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").first().textContent();
const orderid = (await page.locator(".em-spacer-1 .ng-star-inserted").first().textContent())
    .replace(/\|/g, "")
    .trim();
console.log(orderid);
await page.locator("[routerlink*='myorders']").first().click();
await page.locator("tbody").waitFor();
const row =await page.locator("tbody tr");
for(let i=0;i<await row.count();i++){
    const actualorder=await row.nth(i).textContent();
    console.log(actualorder);
    if(actualorder.includes(orderid)){
       await row.nth(i).locator("button").first().click();
       break;
    }
}
const orderiddetails=await page.locator(".col-text").textContent();
await expect(orderid.includes(orderiddetails)).toBeTruthy();

 
});
test('@API Test case 2',async({}) =>
{
    const email="asabesachin2@gmail.com";
    const productname="ZARA COAT 3";
    const page=await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const products=page.locator(".card-body");

await page.locator(".card-body b").first().waitFor();
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);
});