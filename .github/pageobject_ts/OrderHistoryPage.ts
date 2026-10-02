
import{test,expect,Locator,Page} from '@playwright/test';
export class OrderHistoryPage{
    ordersTable:Locator;
    rows:Locator;
    orderIdDetails:Locator;
    page:Page;

    constructor(page:Page){
      this.page=page;
      this.ordersTable=page.locator("tbody");
      this.rows=page.locator("tbody tr");
      this.orderIdDetails=page.locator(".col-text"); 
    }
    async searchOrderandSelect(orderId:any){
await this.ordersTable.waitFor();
for(let i=0;i<await this.rows.count();i++){
    const actualorder:any=await this.rows.nth(i).textContent();
    console.log(actualorder);
    if(actualorder.includes(orderId)){
       await this.rows.nth(i).locator("button").first().click();
       break;
    }
    }
}
async getOrderId(){
    return await this.orderIdDetails.textContent();
}
}
