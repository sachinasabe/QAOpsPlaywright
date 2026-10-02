const base= require('@playwright/test');

const {APiUtils}= require('./APiUtils.js');
const {request}=require('@playwright/test');

const loginPayload={userEmail: "asabesachin2@gmail.com", userPassword: "Sachin@1988"};
const orderpayload={orders: [{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
exports.custometest=base.test.extend(
    {
    authinticatedPage: async({browser},use)=>{
    
const context= await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("asabesachin2@gmail.com");
await page.locator("#userPassword").fill("Sachin@1988");
await page.locator("[value='Login']").click();
await page.waitForLoadState('networkidle');
await use(page);
await context.close();
   
},
createOrder:async({},use)=>
{
const apiContext= await request.newContext();
const apiUtils=new APiUtils(apiContext,loginPayload);
const response=await apiUtils.createOrder(orderpayload);
await use(response);
await apiContext.dispose();
},
testDataForOrder:{
    productName:'Adidas Original'
}
}
)