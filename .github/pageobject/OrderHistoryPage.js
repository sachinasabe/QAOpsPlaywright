const { expect } = require("@playwright/test");
class OrderHistoryPage{
    constructor(page){
      this.page=page;
      this.ordersTable=page.locator("tbody");
      this.rows=page.locator("tbody tr");
      this.orderIdDetails=page.locator(".col-text"); 
    }
    async searchOrderandSelect(orderId){
await this.ordersTable.waitFor();
for(let i=0;i<await this.rows.count();i++){
    const actualorder=await this.rows.nth(i).textContent();
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
module.exports={OrderHistoryPage};