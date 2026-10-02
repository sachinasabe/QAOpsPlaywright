
const { test, expect, request } = require('@playwright/test');

test('Security test request intercept', async ({ page }) => {
    //login & go to orders page
    const email = "asabesachin2@gmail.com";
    const productname = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //login-asabesachin2@gmail.com
    //pwd-Sachin@1988
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Sachin@1988");
    await page.locator("[value='Login']").click();
    // await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.locator("button[routerlink$='/dashboard/myorders']").click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator(".blink_me").first()).toHaveText("You are not authorize to view this order");

})