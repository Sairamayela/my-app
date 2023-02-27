import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products:any=[
    {name:'pen',price:20,rating:4.5,isFreeDelivery:true},
    {name:'car',price:200000,rating:4.0,isFreeDelivery:false},
    {name:'cycle',price:20000,rating:3.4,isFreeDelivery:true},
    {name:'bike',price:100000,rating:3.0,isFreeDelivery:false},
    {name:'book',price:200,rating:5,isFreeDelivery:true},
    {name:'pencli',price:10,rating:4.8,isFreeDelivery:false},
    {name:'shirt',price:920,rating:4.1,isFreeDelivery:true},
    {name:'T shirt',price:320,rating:4.4,isFreeDelivery:false},
    {name:'mobile',price:25000,rating:3.2,isFreeDelivery:true},
    {name:'sim',price:250,rating:1.5,isFreeDelivery:false},
    {name:'laptop',price:82000,rating:5,isFreeDelivery:true},
    {name:'tab',price:32000,rating:4.5,isFreeDelivery:false},
    {name:'bag',price:2000,rating:2.5,isFreeDelivery:true},
    {name:'toy',price:200,rating:3.5,isFreeDelivery:false},
    {name:'tv',price:50000,rating:4.3,isFreeDelivery:true},

  ]
  delete(i:number){
    this.products.splice(i,1);
  }
  count(){
    alert("cart count is"+this.products.length)
  }
}
