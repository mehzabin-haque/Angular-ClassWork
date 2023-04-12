import { Injectable, OnInit } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  public products:Product[] = [
    {name: "Watermelon", price: 50000, stock: 10},
    {name: "Apple", price: 20000, stock: 27},
    {name: "Banana", price: 30000, stock: 33},
    {name: "Orange", price: 40000, stock: 41},
  ]
  
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getProducts(): Product[]{
    return this.products;
  }

  addProduct(productName:string, price:number, stock:number):void{
    this.products.push({
      name:productName,price:price,stock:stock
    })
  }

  deleteProduct(product:Product){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].name == product.name){
        delete this.products[i];
      }
    }
  }

  update(productName:string,price:number,stock:number){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].name==productName){
        this.products[i].name = productName;
        this.products[i].price=price;
        this.products[i].stock=stock;
      }
    }
  }

  increment(i:number){
    this.products[i].stock++;
  }
  decrement(i:number){
    this.products[i].stock--;
  }
}
