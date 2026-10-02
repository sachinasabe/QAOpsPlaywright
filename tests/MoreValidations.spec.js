const {test,expect}=require('@playwright/test')

// test.describe.configure({mode:'parallel'});
test.describe.configure({mode:'serial'});
test("@Web popup validations",async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com/");
    // await page.goBack();
    // await page.goForward();
   await  expect(page.locator("#displayed-text")).toBeVisible();
   await page.locator("#hide-textbox").click();
   await  expect(page.locator("#displayed-text")).toBeHidden();
//    await page.pause();
   page.on('dialog',dialog => dialog.accept());
   await page.locator("#confirmbtn").click();
   await page.locator("#mousehover").hover();
   const framespage= page.frameLocator("#courses-iframe");
   await framespage.locator("li a[href='lifetime-access']:visible").click();
   const textcheck=await framespage.locator(".text h2").textContent();
   console.log(textcheck.split(" ")[1]);
   

    
});
test("Screenshot & visual comparison",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await  expect(page.locator("#displayed-text")).toBeVisible();
   await page.locator('#displayed-text').screenshot({path:'partialscreenshot.png'});
   await page.locator("#hide-textbox").click();
   await page.screenshot({path:'Screenshot.png'});
   await  expect(page.locator("#displayed-text")).toBeHidden();
});
test('visual',async({page})=>{
   await page.goto("https://www.google.com/");
   expect(await page.screenshot()).toMatchSnapshot('landing.png');

});