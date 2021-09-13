import { TokenizeResult } from "@angular/compiler/src/ml_parser/lexer";
import { Component } from "@angular/core";
import { CustomerService } from "./customer.service";
import { Customer } from "./model/customer";
import { Order } from "./order";
import { OrderService } from "./orders.service";

@Component({
    selector: 'customer-app',
    template:`
    <h1>Order Details</h1>
<div >
    <ul>

    <li *ngFor="let order of orders">
        <h3> {{order.orderId}}-{{order.customerName}}-{{order.orderDate}}-{{order.productName}}-{{order.orderValue}}</h3>
    </li>
    </ul>
</div>

    <hr/>
    <h1>This is Customer Application</h1>
   
    <div *ngIf="showCustomer">
        <ul>
    
        <li *ngFor="let cust of customers">
            <h3> {{cust.customerId}}-{{cust.customerName}}-{{cust.billAmount}}</h3>
        </li>
        </ul>
    </div>
    
        <button (click)="hideShowCustomer()">{{showCustomer ? "Hide Customers" : "Show Customers"}}</button>
    
    
    
    `


    
})
export class CustomerComponent{
public showCustomer=true;
   
    customers:Customer[]=[]
    orders:Order[]=[]
    //Dependency Injection
    constructor(public customerService:CustomerService,public orderService:OrderService){}
        
    ngOnInit():void{
        this.customers=this.customerService.getCustomers();
        this.orders=this.orderService.getOrderDetails();
    }
    hideShowCustomer(){
        if(this.showCustomer==true)
            this.showCustomer=false
        else
            this.showCustomer=true
    }

}