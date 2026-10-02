
import{test as baseTest} from '@playwright/test';
interface TestDataforOrder {
    username: string;
    password: string;
    productname: string;
}

export const customTest=baseTest.extend<{testDataforOrder:TestDataforOrder}>(
    {
        testDataforOrder:{
    username:"asabesachin2@gmail.com",
    password:"Sachin@1988",
    productname:"ZARA COAT 3"
}
    }
)