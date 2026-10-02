
import{LoginPage} from './LoginPage';
import{DashboardPage} from './DashboardPage';
import{OrderHistoryPage} from './OrderHistoryPage';
import{CartPage} from './CartPage';
import{OrderReviewPage} from './OrderReviewPage';
import{Page} from '@playwright/test';


export class POManager{
loginPage:LoginPage;
dashboardPage:DashboardPage;
cartPage:CartPage;
orderReviewPage:OrderReviewPage;
orderHistoryPage:OrderHistoryPage;
page:Page;



    constructor(page:Page){
        this.page=page;
       this.loginPage=new LoginPage(this.page);
        this.dashboardPage=new DashboardPage(this.page);
        this.cartPage=new CartPage(this.page);
        this.orderReviewPage=new OrderReviewPage(this.page);
        this.orderHistoryPage=new OrderHistoryPage(this.page);
    }
    getLoginPage(){
       return this.loginPage;
    }
    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getOrderReviewPage(){
        return this.orderReviewPage;
    }
    getOrderHistoryPage(){
        return this.orderHistoryPage;
    }
}
