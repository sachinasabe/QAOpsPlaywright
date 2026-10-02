const {test, expect}=require('@playwright/test');
const { text } = require('node:stream/consumers');
test('Event Booking refund test',async({page}) =>
{
   const email="asabesachin2@gmail.com";
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await page.getByPlaceholder("you@email.com").fill(email);
    await page.locator("#password").fill("Sachin@1988");
    await page.getByRole("button",{name:'Sign In'}).click();
    await page.getByRole("link",{name:'Browse Events →'}).waitFor();
    expect(await page.getByRole("link",{name:'Browse Events →'})).toBeVisible();
    await page.getByRole("link",{name:'Browse Events →'}).click();
    await page.locator("#event-card").last().waitFor();
    await page.locator("#book-now-btn").first().click();
     await page.getByPlaceholder("Your full name").waitFor();
    await page.getByPlaceholder("Your full name").fill("Asabe Sachin");
    await page.getByLabel("Email").fill("asabesachin@gmail.com");
    await page.getByLabel("Phone Number").fill("+91 9673729330");
    await page.getByRole("button",{name:'Confirm Booking'}).click();
    await page.locator("[ type='button']").first().click();
    await page.locator("#booking-card").first().waitFor();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
    await page.locator("#booking-card").first().getByRole('button',{hasText:'View Details'}).first().click();
    await page.locator("button").last().waitFor();
    await expect(page.locator(".text-base").filter({hasText:"Booking Information"})).toBeVisible();
    const bookingref=await page.locator(".font-mono").first().textContent();
    const bookinrf1char=bookingref.trim().split("-")[0][0];
    const eventTitle=await page.locator("h1").textContent();
    console.log("eventTitle:", eventTitle);
    const eventTitle1char=await eventTitle.trim()[0];
    await expect(bookinrf1char).toBe(eventTitle1char);
    await page.locator("#check-refund-btn").click();
    await expect(page.locator("#refund-spinner")).toBeVisible();
    await expect(page.locator("#refund-spinner")).toBeHidden({timeout:7000});
    await expect( page.locator("#refund-result")).toBeVisible();
    await expect( page.locator("#refund-result")).toContainText("Eligible for refund.");
    await expect( page.locator("#refund-result")).toContainText("Single-ticket bookings qualify for a full refund.");

});

test('Event Booking nonrefund test',async({page}) =>
{
   const email="asabesachin2@gmail.com";
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await page.getByPlaceholder("you@email.com").fill(email);
    await page.locator("#password").fill("Sachin@1988");
    await page.getByRole("button",{name:'Sign In'}).click();
    await page.getByRole("link",{name:'Browse Events →'}).waitFor();
    expect(await page.getByRole("link",{name:'Browse Events →'})).toBeVisible();
    await page.getByRole("link",{name:'Browse Events →'}).click();
    await page.locator("#event-card").last().waitFor();
    await page.locator("#book-now-btn").first().click();
    await page.getByPlaceholder("Your full name").waitFor();
    await page.getByRole('button').filter({hasText:"+"}).click();
   await page.getByRole('button').filter({hasText:"+"}).click();
    await page.getByPlaceholder("Your full name").fill("Asabe Sachin");
    await page.getByLabel("Email").fill("asabesachin@gmail.com");
    await page.getByLabel("Phone Number").fill("+91 9673729330");
    await page.getByRole("button",{name:'Confirm Booking'}).click();
    await page.locator("[ type='button']").first().click();
    await page.locator("#booking-card").first().waitFor();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
    await page.locator("#booking-card").first().getByRole('button',{hasText:'View Details'}).first().click();
    await page.locator("button").last().waitFor();
    await expect(page.locator(".text-base").filter({hasText:"Booking Information"})).toBeVisible();
    const bookingref=await page.locator(".font-mono").first().textContent();
    const bookinrf1char=bookingref.trim().split("-")[0][0];
    const eventTitle=await page.locator("h1").textContent();
    console.log("eventTitle:", eventTitle);
    const eventTitle1char=await eventTitle.trim()[0];
    await expect(bookinrf1char).toBe(eventTitle1char);
    await page.locator("#check-refund-btn").click();
    await expect(page.locator("#refund-spinner")).toBeVisible();
    await expect(page.locator("#refund-spinner")).toBeHidden({timeout:7000});
    await expect( page.locator("#refund-result")).toBeVisible();
    await expect( page.locator("#refund-result")).toContainText("Not eligible for refund.");
    await expect( page.locator("#refund-result")).toContainText("Group bookings (3 tickets) are non-refundable.");






});