const base = require('@playwright/test');

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_URL = 'https://api.eventhub.rahulshettyacademy.com/api';

const GMAIL_USER = {
    email: 'asabesachin2@gmail.com',
    password: 'Sachin@1988'
};


exports.eventHubTest = base.test.extend({

    // ============================================================
    // FIXTURE 1 - authenticatedPage
    // ============================================================

    authenticatedPage: async ({ browser }, use) => {

        const context = await browser.newContext();

        const page = await context.newPage();

     
        await page.goto(BASE_URL + '/login');

        await page.getByPlaceholder('you@email.com').fill(GMAIL_USER.email);

        await page.locator('#password').fill(GMAIL_USER.password);

        await page.getByRole('button', { name: 'Sign In' }).click();

        await page.getByRole('link', { name: 'Browse Events →' }).waitFor();

        // Give already authenticated page to the test
        await use(page);

        // Cleanup
        await context.close();
    },


    // ============================================================
    // FIXTURE 2 - createEvent
    // ============================================================

    createEvent: async ({ request }, use) => {

        // --------------------------------------------------------
        // First login through API to obtain token
        // --------------------------------------------------------

        const loginResponse = await request.post(
            API_URL + '/auth/login',
            {
                data: {
                    email: GMAIL_USER.email,
                    password: GMAIL_USER.password
                }
            }
        );

        if (!loginResponse.ok()) {
            console.log(
                'Login failed:',
                loginResponse.status(),
                await loginResponse.text()
            );
        }

        await base.expect(loginResponse.ok()).toBeTruthy();

        const loginData = await loginResponse.json();

        const token = loginData.token;

        await base.expect(token).toBeTruthy();


        // --------------------------------------------------------
        // Event data
        // --------------------------------------------------------

        const eventPayload = {
            title: 'Playwright Fixture Event',
            description: 'Event created using Playwright custom fixture',
            category: 'Workshop',
            eventDate: '2026-12-20T10:00:00.000Z',
            venue: 'Playwright Test Venue',
            city: 'Bangalore',
            price: '500',
            totalSeats: 100
        };


        // --------------------------------------------------------
        // Create event through API
        // --------------------------------------------------------

        const response = await request.post(
            API_URL + '/events',
            {
                headers: {
                    Authorization: 'Bearer ' + token
                },

                data: eventPayload
            }
        );


        // --------------------------------------------------------
        // Validate API response
        // --------------------------------------------------------

        if (!response.ok()) {
            console.log(
                'Create event failed:',
                response.status(),
                await response.text()
            );
        }

        await base.expect(response.ok()).toBeTruthy();


        // Parse response
        const responseData = await response.json();

        console.log('Created event response:', responseData);


        // Give response to test
        await use(responseData);
    }

});