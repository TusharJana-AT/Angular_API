import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';
import { Product } from './services/productDataTypes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productData=signal<Product[]|undefined>(undefined)
  constructor(public productServices:Products){}

  ngOnInit(){
    this.productServices.getProducts().subscribe((data)=>{
      // console.log(data.products);
      this.productData.set(data.products)
    })
  }
}
