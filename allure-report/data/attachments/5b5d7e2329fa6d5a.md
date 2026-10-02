# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidations.spec.js >> @Web popup validations
- Location: tests\MoreValidations.spec.js:5:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/AutomationPractice/", waiting until "load"

```

# Test source

```ts
  1  | const {test,expect}=require('@playwright/test')
  2  | 
  3  | // test.describe.configure({mode:'parallel'});
  4  | test.describe.configure({mode:'serial'});
  5  | test("@Web popup validations",async({page})=>
  6  | {
  7  | 
> 8  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     |                ^ Error: page.goto: Test timeout of 60000ms exceeded.
  9  |     // await page.goto("https://www.google.com/");
  10 |     // await page.goBack();
  11 |     // await page.goForward();
  12 |    await  expect(page.locator("#displayed-text")).toBeVisible();
  13 |    await page.locator("#hide-textbox").click();
  14 |    await  expect(page.locator("#displayed-text")).toBeHidden();
  15 | //    await page.pause();
  16 |    page.on('dialog',dialog => dialog.accept());
  17 |    await page.locator("#confirmbtn").click();
  18 |    await page.locator("#mousehover").hover();
  19 |    const framespage= page.frameLocator("#courses-iframe");
  20 |    await framespage.locator("li a[href='lifetime-access']:visible").click();
  21 |    const textcheck=await framespage.locator(".text h2").textContent();
  22 |    console.log(textcheck.split(" ")[1]);
  23 |    
  24 | 
  25 |     
  26 | });
  27 | test("Screenshot & visual comparison",async({page})=>
  28 | {
  29 | await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  30 |    await  expect(page.locator("#displayed-text")).toBeVisible();
  31 |    await page.locator('#displayed-text').screenshot({path:'partialscreenshot.png'});
  32 |    await page.locator("#hide-textbox").click();
  33 |    await page.screenshot({path:'Screenshot.png'});
  34 |    await  expect(page.locator("#displayed-text")).toBeHidden();
  35 | });
  36 | test('visual',async({page})=>{
  37 |    await page.goto("https://www.google.com/");
  38 |    expect(await page.screenshot()).toMatchSnapshot('landing.png');
  39 | 
  40 | });
```