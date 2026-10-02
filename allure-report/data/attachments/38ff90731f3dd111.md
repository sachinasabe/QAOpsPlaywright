# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasics.spec.js >> @Web UI Controls
- Location: tests\UIBasics.spec.js:43:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/loginpagePractise/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e4] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]: "Username:"
        - textbox "Username:" [ref=e17]
      - generic [ref=e18]:
        - generic [ref=e19]: "Password:"
        - textbox "Password:" [ref=e20]
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [checked] [ref=e24]
        - generic [ref=e26] [cursor=pointer]:
          - text: User
          - radio "User" [ref=e27]
      - combobox [ref=e30]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e31]:
        - generic [ref=e32]:
          - checkbox "I Agree to the terms and conditions" [ref=e34]
          - generic [ref=e35]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e36] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e37] [cursor=pointer]
      - paragraph [ref=e39]:
        - text: (username is
        - generic [ref=e40]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e41]: Learning@830$3mK2
        - text: )
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | 
  4  | test('@Web Browser Context  playwright test', async ({ browser }) => {
  5  |   // chrome - Plugin/cookies
  6  | 
  7  |   const context = await browser.newContext();
  8  |   const page = await context.newPage();
  9  |   //  page.route('**/*.{jpg,png,jpeg}',route=>route.abort());
  10 |   const userName = page.locator('#username');
  11 |   const signIn = page.locator("[value='Sign In']");
  12 |   const cardTitles = page.locator(".card-body a");
  13 |   page.on('request', request => console.log(request.url()));
  14 |   page.on('response', Response => console.log(Response.url(), Response.status()));
  15 |   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  16 |   await console.log(await page.title());
  17 |   await userName.fill("RahulShetty");
  18 |   await page.locator("[name='password']").fill("Learning@830$3mK2");
  19 |   await signIn.click();
  20 |   console.log(await page.locator("[style*='block']").textContent());
  21 |   await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  22 |   await userName.fill("");
  23 |   await userName.fill("rahulshettyacademy");
  24 |   await signIn.click();
  25 |   console.log(await cardTitles.first().textContent());
  26 |   console.log(await cardTitles.nth(1).textContent());
  27 |   const allTitles = await cardTitles.allTextContents();
  28 |   console.log(allTitles);
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | });
  35 | test('First playwright test', async ({ page }) => {
  36 | 
  37 |   await page.goto("https://google.com");
  38 |   //get title and assertion
  39 |   console.log(await page.title());
  40 |   await expect(page).toHaveTitle("Google");
  41 |   //css xpath
  42 | });
  43 | test('@Web UI Controls', async ({ page }) => {
> 44 |   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     |              ^ Error: page.goto: Test timeout of 60000ms exceeded.
  45 |   const userName = page.locator('#username');
  46 |   const signIn = page.locator("[value='Sign In']");
  47 |   const dropdown = page.locator("select.form-control");
  48 |   const documentlink = page.locator("[href*=documents-request]");
  49 |   await dropdown.selectOption("consult");
  50 |   await page.locator(".radiotextsty").last().click();
  51 |   await page.locator("#okayBtn").click();
  52 |   console.log(await page.locator(".radiotextsty").last().isChecked());
  53 |   await expect(page.locator(".radiotextsty").last()).toBeChecked();
  54 |   await page.locator("#terms").click();
  55 |   await expect(page.locator("#terms")).toBeChecked();
  56 |   await page.locator("#terms").uncheck();
  57 |   expect(await page.locator("#terms").isChecked()).toBeFalsy();
  58 |   await expect(documentlink).toHaveAttribute("class", "blinkingText");
  59 | 
  60 | 
  61 |   // await page.pause();
  62 | });
  63 | test('Child window handl', async ({ browser }) => {
  64 |   const context = await browser.newContext();
  65 |   const page = await context.newPage();
  66 |   const userName = page.locator('#username');
  67 |   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  68 |   const documentlink = page.locator("[href*=documents-request]");
  69 |   const [newPage] = await Promise.all(
  70 |     [context.waitForEvent('page'),//listen for any new page pending,rejected,fullfilled
  71 |     documentlink.click(),
  72 |     ])//new page opened
  73 |   const text = await newPage.locator(".red").textContent();
  74 |   const arrayText = text.split("@");
  75 |   const domain = arrayText[1].split(" ")[0];
  76 |   //  console.log(domain);
  77 |   await page.locator('#username').fill(domain);
  78 |   //  await page.pause();
  79 |   console.log(await page.locator('#username').inputValue(domain));
  80 | 
  81 | });
  82 | 
```