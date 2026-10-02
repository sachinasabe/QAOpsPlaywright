const {test}=require('@playwright/test');

exports.customtest=test.extend(
    {
        testDataforOrder:{
    username:"asabesachin2@gmail.com",
    password:"Sachin@1988",
    productname:"ZARA COAT 3"
}
    }
)