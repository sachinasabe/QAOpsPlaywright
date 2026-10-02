
import{test, expect} from '@playwright/test';
import{customTest} from '../utils_ts/test-base'
import{POManager} from '../.github/pageobject_ts/POManager'
import dataset from '../utils_ts/placeorderTestData.json'




for(const data of dataset)
{
test(`Client App login for ${data.productname}`, async({page}) =>
{
    const poManager=new POManager(page);
//    js file-login js ,dashboard page
    const products=page.locator(".card-body");
    const loginPage=poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productname);
    await dashboardPage.navigateToCart();

    const cartPage=poManager.getCartPage();
    await cartPage.verifyProductIsDisplayed(data.productname);
    await cartPage.checkout();

    const orderReviewPage=poManager.getOrderReviewPage();
    await orderReviewPage.searchCountryandSelect("ind","India");
    let orderId:any;
     orderId=await orderReviewPage.SubmitandGetOrderId(data.username);
    console.log(orderId);
    await dashboardPage.navigateToOrders();
    const orderHistoryPage=poManager.getOrderHistoryPage();
    await orderHistoryPage.searchOrderandSelect(orderId);
    expect(orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();


 
});
}
customTest('Client App login', async({page,testDataforOrder}) =>
{
    const poManager=new POManager(page);
//    js file-login js ,dashboard page
    const products=page.locator(".card-body");
    const loginPage=poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataforOrder.username,testDataforOrder.password);
    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataforOrder.productname);
    await dashboardPage.navigateToCart();

    const cartPage=poManager.getCartPage();
    await cartPage.verifyProductIsDisplayed(testDataforOrder.productname);
    await cartPage.checkout();
});

