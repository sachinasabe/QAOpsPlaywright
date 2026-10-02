const {test, expect}=require('@playwright/test');
test('Playwright Special locators',async({page}) =>
    {
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page .getByLabel("Check me out if you Love IceCreams!").check();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Male");
await page.getByPlaceholder("Password").fill("abc123");
await page.getByRole("button",{name:'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
//5 second default timeout for expect assertion  timeout=10000 at step level
await (expect(page.getByText("Success! The Form has been submitted successfully!."))).toBeVisible({timeout:10_000});
await page.getByRole("link",{name:'Shop'}).click();
await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();

});
test('Playwright test level timeout',async({page}) =>
    {
        test.setTimeout(60000);
const slowExpect=expect.configure({timeout:9000});
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page .getByLabel("Check me out if you Love IceCreams!").check();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Male");
await page.getByPlaceholder("Password").fill("abc123");
await page.getByRole("button",{name:'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
//5 second default timeout for expect assertion  timeout=10000 at step level also in test level like slowexpect
await (slowExpect(page.getByText("Success! The Form has been submitted successfully!."))).toBeVisible();
//Global level=>test level=>step level
await page.getByRole("link",{name:'Shop'}).click()({timeout:15000});
await slowExpect (page.locator(".my-4").first()).toHaveText("Shop");
await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();

});