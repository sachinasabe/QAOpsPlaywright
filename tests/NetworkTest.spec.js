const { test, expect, request } = require('@playwright/test');
const { APiUtils } = require('../utils/APiUtils');
const loginPayload = { userEmail: "asabesachin2@gmail.com", userPassword: "Sachin@1988" };
const orderpayload = { orders: [{ country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };

let response;
test.beforeAll(async () => {
   const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext, loginPayload);
   response = await apiUtils.createOrder(orderpayload);

});
test('place the order', async ({ page }) => {

   await page.addInitScript(value => {
      window.localStorage.setItem('token', value);
   }, response.token);
   await page.goto("https://rahulshettyacademy.com/client/");
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
      async route => {
         const response = await page.request.fetch(route.request());
         let body = JSON.stringify(fakePayLoadOrders);
         route.fulfill({
            response,
            body,
         })
         //intercepting response --Apiresponse-> {playwright fakeresponse}-->browser->renderdata
      }
   )

   await page.locator("[routerlink*='myorders']").first().click();
   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
   console.log(await page.locator(".mt-4").textContent());



});