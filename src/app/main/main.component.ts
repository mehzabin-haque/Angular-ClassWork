import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  products:Product[]=[];
  productName:string="";
  productPrice:number=0;
  productStock:number=0;

  originalProduct: Product = new Product()
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  increment(i:number){
    this.productService.increment(i);
  }
  decrement(i:number){
    this.productService.decrement(i);
  }

  add(name:string,price:number,stock:number){
    this.productService.addProduct(name,price,stock)
  }
  update(name:string,price:number,stock:number){
    this.productService.update(name,price,stock)
  }

  isUpdate(product:Product):boolean{
    if(this.originalProduct==product) return true;
    return false;
  }

  updateProductInfo(){
    this.productService.update(this.productName, this.productPrice,this.productStock);
    this.originalProduct = new Product();
  }
  informUpdate(product:Product){
    this.originalProduct = product;
    this.productName = product.name;
    this.productStock = product.stock;
    this.productPrice = product.price;
   
  }
  delete(product:Product){
    this.productService.deleteProduct(product)
  }

}
