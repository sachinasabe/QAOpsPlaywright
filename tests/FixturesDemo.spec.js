
const{expect}= require('@playwright/test');
const {custometest} = require("../utils/Fixture");


custometest("Fixtures demo",async({authinticatedPage,createOrder,testDataForOrder})=> 
{
await authinticatedPage.goto("https://rahulshettyacademy.com/client");
await authinticatedPage.locator("[routerlink*='myorders']").first().click();
await authinticatedPage.locator("tbody").waitFor();
await expect(authinticatedPage.getByText(createOrder.orderId)).toBeVisible();
console.log(testDataForOrder.productName);
    
})