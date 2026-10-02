import { expect, type Locator, type Page } from '@playwright/test';
let message1: string ="Hello";
message1="bye";
console.log(message1);
let age1:number = 20;
console.log(age1);
let isActive:boolean = false;
let numberArry:number[]=[1,2,3];
let data:any="this could be anything";
data=42;
function add(a:number,b:number):number
{
    return a+b;
}
add(3,4);
let user: { name: string, age: number, location: string } = {
    name: "bob",
    age: 34,
    location: "Delhi"
};

user.location = "Hyderabad";
class CartPage{
    page:Page;
    cartproducts:Locator;
    constructor(page:any){

     this.page=page;
     this.cartproducts=page.locator("div li").first();
     this.producttext=page.locator(".card-body b");
     this.cart=page.locator("[routerlink*='cart']");
     this.orders=page.locator("button[routerlink*='myorders']");
     this.checkoutbutton=page.locator("button[type=button]").last();

     
    }