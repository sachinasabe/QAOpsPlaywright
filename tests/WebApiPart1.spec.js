const {test, expect,request}=require('@playwright/test');
const {APiUtils }=require('../utils/APiUtils');
const loginPayload={userEmail: "asabesachin2@gmail.com", userPassword: "Sachin@1988"};
const orderpayload={orders: [{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};

let response;
test.beforeAll(async()=>
{
const apiContext= await request.newContext();
const apiUtils=new APiUtils(apiContext,loginPayload);
response=await apiUtils.createOrder(orderpayload);

});
test('@API place the order',async({page}) =>
{
    
 await page.addInitScript(value =>{
    window.localStorage.setItem('token',value);
 },response.token);
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("[routerlink*='myorders']").first().click();
await page.locator("tbody").waitFor();
const row =await page.locator("tbody tr");
for(let i=0;i<await row.count();i++){
    const rowOrderId=await row.nth(i).locator("th").textContent();
    if(response.orderId.includes(rowOrderId)){
       await row.nth(i).locator("button").first().click();
       break;
    }
}
const orderiddetails=await page.locator(".col-text").textContent();
await page.pause();
await expect(response.orderId.includes(orderiddetails)).toBeTruthy();



 





 
});