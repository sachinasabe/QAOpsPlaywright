const { expect } = require('@playwright/test');

const { eventHubTest } = require('../utils/EventHubFixture');


eventHubTest(
    'Verify event created through fixture is visible',
    async ({ authenticatedPage, createEvent }) => {

        await authenticatedPage.goto('https://eventhub.rahulshettyacademy.com/events');

        await expect(
            authenticatedPage.getByText(createEvent.data.title, { exact: true })
        ).toBeVisible();

    }
);