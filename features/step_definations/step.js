const { Given, When, Then } = require('@cucumber/cucumber')
const { POManager } = require('../../.github/pageobject/POManager');
const { expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
  this.username = username;
  const products = this.page.locator(".card-body");
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(username, password);
});
When('add {string} to Cart', { timeout: 100 * 1000 }, async function (productname) {
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productname);
  await this.dashboardPage.navigateToCart();
  console.log("Current URL:", this.dashboardPage.page.url());
});
Then('verify {string} is displayed in the Cart', { timeout: 100 * 1000 }, async function (productname) {
  // Write code here that turns the phrase above into concrete actions
  const cartPage = this.poManager.getCartPage();
  await cartPage.verifyProductIsDisplayed(productname);
  await cartPage.checkout();
});
When('Enter valid details and Place the Order', async function () {
  // Write code here that turns the phrase above into concrete actions
  const orderReviewPage = this.poManager.getOrderReviewPage();
  await orderReviewPage.searchCountryandSelect("ind", "India");
  this.orderId = await orderReviewPage.SubmitandGetOrderId(this.username);
  console.log(this.orderId);
});

Then('Verify Order is present in the OrderHistory', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.dashboardPage.navigateToOrders();
  const orderHistoryPage = this.poManager.getOrderHistoryPage();
  await orderHistoryPage.searchOrderandSelect(this.orderId);
  expect(this.orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();
});

Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
  const userName = this.page.locator('#username');
  const signIn = this.page.locator("[value='Sign In']");
  await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await console.log(await this.page.title());
  await userName.fill(username);
  await this.page.locator("[name='password']").fill(password);
  await signIn.click();
});
Then('Verify Error message is displayed', async function () {

  console.log(await this.page.locator("[style*='block']").textContent());
  await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
});

