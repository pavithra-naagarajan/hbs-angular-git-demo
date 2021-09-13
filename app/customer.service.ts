import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CustomerService{
    constructor(){}
    getCustomers(){
        return[
        {customerId:777,customerName:"shruthi",billAmount:7000},
        {customerId:444,customerName:"ajay",billAmount:5000},
        {customerId:111,customerName:"harish",billAmount:1000},
        {customerId:222,customerName:"pavithra",billAmount:3000},
        {customerId:333,customerName:"kavi",billAmount:5000}
        ]
    }
}