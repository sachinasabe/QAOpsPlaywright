const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_URL = 'https://api.eventhub.rahulshettyacademy.com/api';

// Yahoo user
const YAHOO_USER = {
    email: 'priyanka.kawade92@yahoo.com',
    password: 'Priyanka@92'
};

// Gmail user
const GMAIL_USER = {
    email: 'asabesachin2@gmail.com',
    password: 'Sachin@1988'
};


async function loginAs(page, user) {

    await page.goto(BASE_URL);

    await page.getByPlaceholder('you@email.com').fill(user.email);

    await page.locator('#password').fill(user.password);

    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('link', { name: 'Browse Events →' }).waitFor();
}


test('Yahoo booking should not be accessible by Gmail user', async ({ page, request }) => {

    // ============================================================
    // STEP 1 - Login as Yahoo user via API
    // ============================================================

   const loginRes = await request.post(API_URL + '/auth/login', {
    data: {
        email: YAHOO_USER.email,
        password: YAHOO_USER.password
    }
});

    await expect(loginRes.ok()).toBeTruthy();

    const loginData = await loginRes.json();

    console.log('Yahoo login response:', loginData);

    const token = loginData.token;

    await expect(token).toBeTruthy();

    console.log('Yahoo token received successfully');


    // ============================================================
    // STEP 2 - Fetch events via API
    // ============================================================

    const eventsRes = await request.get(API_URL + '/events', {
    headers: {
        Authorization: 'Bearer ' + token
    }
});

   await expect(eventsRes.ok()).toBeTruthy();

    const eventsData = await eventsRes.json();

    console.log('Events response:', eventsData);

    const eventId = eventsData.data[0].id;

    await expect(eventId).toBeTruthy();

    console.log('Selected eventId:', eventId);


    // ============================================================
    // STEP 3 - Create booking as Yahoo user via API
    // ============================================================

    const bookingRes = await request.post(API_URL + '/bookings', {
    headers: {
        Authorization: 'Bearer ' + token
    },
    data: {
        eventId: eventId,
        customerName: 'Yahoo User',
        customerEmail: YAHOO_USER.email,
        customerPhone: '9876543210',
        quantity: 1
    }
});
    await expect(bookingRes.ok()).toBeTruthy();

    const bookingData = await bookingRes.json();

    console.log('Booking response:', bookingData);

    const yahooBookingId = bookingData.data.id;

   await expect(yahooBookingId).toBeTruthy();

    console.log('Yahoo bookingId:', yahooBookingId);


    // ============================================================
    // STEP 4 - Login as Gmail user via browser UI
    // ============================================================

    await loginAs(page, GMAIL_USER);


    // ============================================================
    // STEP 5 - Navigate directly to Yahoo booking URL
    // ============================================================

    await page.goto(BASE_URL + '/bookings/' + yahooBookingId, {
    waitUntil: 'networkidle'
});

    // ============================================================
    // STEP 6 - Validate Access Denied
    // ============================================================

    await expect(
        page.getByText('Access Denied', { exact: true })
    ).toBeVisible();

    await expect(
    page.getByText('You are not authorized to view this booking.', {
        exact: true
    })
).toBeVisible();

});