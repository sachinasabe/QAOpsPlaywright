const {test, expect}=require('@playwright/test');
const{customtest}=require('../utils/test-base')
const {POManager}=require('../.github/pageobject/POManager');
const { DashboardPage } = require('../.github/pageobject/DashboardPage');
const{cartPage}=require('../.github/pageobject/CartPage');
const{OrderReviewPage}=require('../.github/pageobject/OrderReviewPage');
const{orderHistoryPage}=require('../.github/pageobject/OrderHistoryPage');
// json=> Sring => Js object
const dataset =JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));


for(const data of dataset)
{
test(`Client App login for ${data.productname}`, async({page}) =>
{
    const poManager=new POManager(page);
//    js file-login js ,dashboard page
    const products=page.locator(".card-body");
    const loginPage=poManager.getLoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
    const dashboardPage=poManager.getDashboardPage(page);
    await dashboardPage.searchProductAddCart(data.productname);
    await dashboardPage.navigateToCart();

    const cartPage=poManager.getCartPage();
    await cartPage.verifyProductIsDisplayed(data.productname);
    await cartPage.checkout();

    const orderReviewPage=poManager.getOrderReviewPage();
    await orderReviewPage.searchCountryandSelect("ind","India");
    const orderId=await orderReviewPage.SubmitandGetOrderId(data.username);
    console.log(orderId);
    await dashboardPage.navigateToOrders();
    const orderHistoryPage=poManager.getOrderHistoryPage();
    await orderHistoryPage.searchOrderandSelect(orderId);
    expect(orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();


 
});
}
customtest('Client App login', async({page,testDataforOrder}) =>
{
    const poManager=new POManager(page);
//    js file-login js ,dashboard page
    const products=page.locator(".card-body");
    const loginPage=poManager.getLoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(testDataforOrder.username,testDataforOrder.password);
    const dashboardPage=poManager.getDashboardPage(page);
    await dashboardPage.searchProductAddCart(testDataforOrder.productname);
    await dashboardPage.navigateToCart();

    const cartPage=poManager.getCartPage();
    await cartPage.verifyProductIsDisplayed(testDataforOrder.productname);
    await cartPage.checkout();
});

