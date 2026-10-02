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

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link:
      - /url: https://www.rahulshettyacademy.com/
    - link "🎯 I’ll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e4] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - generic [ref=e5]:
      - link [ref=e6] [cursor=pointer]:
        - /url: https://www.rahulshettyacademy.com/
        - button "Home" [ref=e7]
      - button "Practice" [ref=e8]
      - button "Login" [ref=e9]
      - button "Signup" [ref=e10]
  - heading "Practice Page" [level=1] [ref=e11]
  - generic [ref=e12]:
    - group "Radio Button Example" [ref=e14]:
      - generic [ref=e16] [cursor=pointer]:
        - radio [ref=e17]
        - text: Radio1
      - generic [ref=e18] [cursor=pointer]:
        - radio [ref=e19]
        - text: Radio2
      - generic [ref=e20] [cursor=pointer]:
        - radio [ref=e21]
        - text: Radio3
    - group "Suggession Class Example" [ref=e23]:
      - textbox "Type to Select Countries" [ref=e25]
    - group "Dropdown Example" [ref=e27]:
      - combobox [ref=e29]:
        - option "Select" [selected]
        - option "Option1"
        - option "Option2"
        - option "Option3"
    - group "Checkbox Example" [ref=e31]:
      - generic [ref=e33] [cursor=pointer]:
        - checkbox [ref=e34]
        - text: Option1
      - generic [ref=e35] [cursor=pointer]:
        - checkbox [ref=e36]
        - text: Option2
      - generic [ref=e37] [cursor=pointer]:
        - checkbox [ref=e38]
        - text: Option3
  - generic [ref=e39]:
    - group "Switch Window Example" [ref=e41]:
      - button "Open Window" [ref=e43] [cursor=pointer]
    - group "Switch Tab Example" [ref=e45]:
      - link "Open Tab" [ref=e47] [cursor=pointer]:
        - /url: https://www.qaclickacademy.com
    - group "Switch To Alert Example" [ref=e49]:
      - textbox "Enter Your Name" [ref=e51]
      - button "Alert" [ref=e52] [cursor=pointer]
      - button "Confirm" [ref=e53] [cursor=pointer]
  - generic [ref=e54]:
    - group "Web Table Example" [ref=e56]:
      - table [ref=e58]:
        - rowgroup [ref=e59]:
          - row [ref=e60]:
            - columnheader "Instructor" [ref=e61]
            - columnheader "Course" [ref=e62]
            - columnheader "Price" [ref=e63]
          - row [ref=e64]:
            - cell "Rahul Shetty" [ref=e65]
            - cell "Selenium Webdriver with Java Basics + Advanced + Interview Guide" [ref=e66]
            - cell "30" [ref=e67]
          - row [ref=e68]:
            - cell "Rahul Shetty" [ref=e69]
            - cell "Learn SQL in Practical + Database Testing from Scratch" [ref=e70]
            - cell "25" [ref=e71]
          - row [ref=e72]:
            - cell "Rahul Shetty" [ref=e73]
            - cell "Appium (Selenium) - Mobile Automation Testing from Scratch" [ref=e74]
            - cell "30" [ref=e75]
          - row [ref=e76]:
            - cell "Rahul Shetty" [ref=e77]
            - cell "WebSecurity Testing for Beginners-QA knowledge to next level" [ref=e78]
            - cell "20" [ref=e79]
          - row [ref=e80]:
            - cell "Rahul Shetty" [ref=e81]
            - cell "Learn JMETER from Scratch - (Performance + Load) Testing Tool" [ref=e82]
            - cell "25" [ref=e83]
          - row [ref=e84]:
            - cell "Rahul Shetty" [ref=e85]
            - cell "WebServices / REST API Testing with SoapUI" [ref=e86]
            - cell "35" [ref=e87]
          - row [ref=e88]:
            - cell "Rahul Shetty" [ref=e89]
            - cell "QA Expert Course :Software Testing + Bugzilla + SQL + Agile" [ref=e90]
            - cell "25" [ref=e91]
          - row [ref=e92]:
            - cell "Rahul Shetty" [ref=e93]
            - cell "Master Selenium Automation in simple Python Language" [ref=e94]
            - cell "25" [ref=e95]
          - row [ref=e96]:
            - cell "Rahul Shetty" [ref=e97]
            - cell "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C" [ref=e98]
            - cell "20" [ref=e99]
          - row [ref=e100]:
            - cell "Rahul Shetty" [ref=e101]
            - cell "Write effective QA Resume that will turn to interview call" [ref=e102]
            - cell "0" [ref=e103]
    - generic [ref=e104]:
      - group "Element Displayed Example" [ref=e105]:
        - button "Hide" [ref=e107] [cursor=pointer]
        - button "Show" [ref=e108] [cursor=pointer]
        - textbox "Hide/Show Example" [ref=e109]
      - group "Web Table Fixed header" [ref=e110]:
        - table [ref=e113]:
          - rowgroup [ref=e114]:
            - row [ref=e115]:
              - columnheader "Name" [ref=e116]
              - columnheader "Position" [ref=e117]
              - columnheader "City" [ref=e118]
              - columnheader "Amount" [ref=e119]
          - rowgroup [ref=e120]:
            - row [ref=e121]:
              - cell "Alex" [ref=e122]
              - cell "Engineer" [ref=e123]
              - cell "Chennai" [ref=e124]
              - cell "28" [ref=e125]
            - row [ref=e126]:
              - cell "Ben" [ref=e127]
              - cell "Mechanic" [ref=e128]
              - cell "Bengaluru" [ref=e129]
              - cell "23" [ref=e130]
            - row [ref=e131]:
              - cell "Dwayne" [ref=e132]
              - cell "Manager" [ref=e133]
              - cell "Kolkata" [ref=e134]
              - cell "48" [ref=e135]
            - row [ref=e136]:
              - cell "Ivory" [ref=e137]
              - cell "Receptionist" [ref=e138]
              - cell "Chennai" [ref=e139]
              - cell "18" [ref=e140]
            - row [ref=e141]:
              - cell "Jack" [ref=e142]
              - cell "Engineer" [ref=e143]
              - cell "Pune" [ref=e144]
              - cell "32" [ref=e145]
            - row [ref=e146]:
              - cell "Joe" [ref=e147]
              - cell "Postman" [ref=e148]
              - cell "Chennai" [ref=e149]
              - cell "46" [ref=e150]
            - row [ref=e151]:
              - cell "Raymond" [ref=e152]
              - cell "Businessman" [ref=e153]
              - cell "Mumbai" [ref=e154]
              - cell "37" [ref=e155]
            - row [ref=e156]:
              - cell "Ronaldo" [ref=e157]
              - cell "Sportsman" [ref=e158]
              - cell "Chennai" [ref=e159]
              - cell "31" [ref=e160]
            - row [ref=e161]:
              - cell "Smith" [ref=e162]
              - cell "Cricketer" [ref=e163]
              - cell "Delhi" [ref=e164]
              - cell "33" [ref=e165]
        - generic [ref=e166]: "Total Amount Collected: 296"
  - group "Mouse Hover Example" [ref=e169]:
    - button "Mouse Hover" [ref=e172]
  - group "iFrame Example" [ref=e174]:
    - iframe [ref=e176]
  - table [ref=e178]:
    - rowgroup [ref=e179]:
      - row [ref=e180]:
        - cell [ref=e181]:
          - list [ref=e182]:
            - listitem [ref=e183]:
              - heading [level=3] [ref=e184]:
                - link "Discount Coupons" [ref=e185] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e186]:
              - link "REST API" [ref=e187] [cursor=pointer]:
                - /url: http://www.restapitutorial.com/
            - listitem [ref=e188]:
              - link "SoapUI" [ref=e189] [cursor=pointer]:
                - /url: https://www.soapui.org/
            - listitem [ref=e190]:
              - link "Appium" [ref=e191] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/p/appium-tutorial
            - listitem [ref=e192]:
              - link "JMeter" [ref=e193] [cursor=pointer]:
                - /url: https://jmeter.apache.org/
        - cell [ref=e194]:
          - list [ref=e195]:
            - listitem [ref=e196]:
              - heading [level=3] [ref=e197]:
                - link "Latest News" [ref=e198] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e199]:
              - link "Broken Link" [ref=e200] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com/brokenlink
            - listitem [ref=e201]:
              - link "Dummy Content for Testing." [ref=e202] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e203]:
              - link "Dummy Content for Testing." [ref=e204] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e205]:
              - link "Dummy Content for Testing." [ref=e206] [cursor=pointer]:
                - /url: "#"
        - cell [ref=e207]:
          - list [ref=e208]:
            - listitem [ref=e209]:
              - heading [level=3] [ref=e210]:
                - link "Contact info" [ref=e211] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e212]:
              - link "Dummy Content for Testing." [ref=e213] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e214]:
              - link "Dummy Content for Testing." [ref=e215] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e216]:
              - link "Dummy Content for Testing." [ref=e217] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e218]:
              - link "Dummy Content for Testing." [ref=e219] [cursor=pointer]:
                - /url: "#"
        - cell [ref=e220]:
          - list [ref=e221]:
            - listitem [ref=e222]:
              - heading [level=3] [ref=e223]:
                - link "Social Media" [ref=e224] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e225]:
              - link "Facebook" [ref=e226] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e227]:
              - link "Twitter" [ref=e228] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e229]:
              - link "Google+" [ref=e230] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e231]:
              - link "Youtube" [ref=e232] [cursor=pointer]:
                - /url: "#"
  - generic [ref=e233]:
    - text: © 2019 Powered by
    - strong [ref=e234]:
      - link "Medianh Consulting" [ref=e235] [cursor=pointer]:
        - /url: http://www.medianhconsulting.com
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