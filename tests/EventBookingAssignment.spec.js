const {test, expect}=require('@playwright/test');
const { text } = require('node:stream/consumers');
test('Event Booking test',async({page}) =>
{
   const email="asabesachin2@gmail.com";
   const eventTitle="MansoonTreak2026";
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await page.getByPlaceholder("you@email.com").fill(email);
    await page.locator("#password").fill("Sachin@1988");
    await page.getByRole("button",{name:'Sign In'}).click();
    await page.getByRole("link",{name:'Browse Events →'}).waitFor();
    expect(await page.getByRole("link",{name:'Browse Events →'})).toBeVisible();
    await page.getByRole("button",{name:'Admin'}).click();
    await page.locator("[href='/admin/events']").first().click();
    await page.getByPlaceholder("Event title").fill(eventTitle);
    await page.locator("textarea").fill("Mansoon Treak is great moment of happiness");
    await page.locator("#category").selectOption('Sports');
    await page.getByLabel('City').fill("Pune");
    await page.locator("#venue").fill("Rajmachi Fort");
    await page.getByLabel("Event Date & Time").fill("2026-09-06T06:15");
    await page.getByLabel('Price ($)').fill("300.00");
    await page.getByLabel('Total Seats').fill("50");
    await page.locator("[type='submit']").click();
    expect(await page.getByText("Event created!")).toBeVisible();
    await page.locator("#nav-events").click();
    await page.locator("#event-card ").first().waitFor();
    await expect(page.locator("#event-card ").first()).toBeVisible();
    const eventcard=await page.locator("#event-card ").filter({hasText:eventTitle});
    await expect(eventcard).toBeVisible({ timeout: 5000 });
    const seattext= await eventcard.locator("span").filter({hasText:' seats available'}).textContent();
    console.log("Seats text:", seattext);
    const seatsBeforeBooking = parseInt(seattext.match(/\d+/)[0]);
    console.log("Seats before booking:", seatsBeforeBooking);
    await eventcard.getByText('Book Now').click();
    await page.locator(".text-2xl").first().waitFor();
    await expect(page.locator("#ticket-count").filter({hasText:'1'})).toBeTruthy();
    await page.getByLabel("Full Name").fill("Nitin Asabe");
    await page.locator("#customer-email").fill("asabenitin@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("+91 9665958478");
    await page.locator("#confirm-booking").click();
    await page.locator(".text-xl").waitFor();
    await expect(page.locator(".booking-ref")).toBeVisible();
    const bookingref= (await page.locator(".booking-ref").textContent()).trim();
    await page.getByRole('button',{name:'View My Bookings'}).click();
    await page.locator("#booking-card").first().waitFor();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings");
    await expect(page.locator("#booking-card").first()).toBeVisible();
    const matchedcard=page.locator("#booking-card").filter({hasText:bookingref});
    await expect(matchedcard).toBeVisible();
    await expect(matchedcard.filter({hasText:eventTitle})).toBeTruthy();
    await page.locator("#nav-events").click();
    await page.locator("#event-card ").first().waitFor();
    await expect(page.locator("#event-card ").first()).toBeVisible();
    await expect(eventcard).toBeVisible();
    const newseattext=await eventcard.locator("span").filter({hasText:' seats available'}).textContent();
    console.log(" new Seats text:", newseattext);
    const seatsAfterBooking = parseInt(newseattext.match(/\d+/)[0]);
    console.log("Seats After booking:", seatsAfterBooking);
    await expect (seatsAfterBooking===seatsBeforeBooking-1).toBeTruthy();





    





    






});