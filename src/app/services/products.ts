import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productAPIResponse } from './productDataTypes';

@Injectable({
  providedIn: 'root',
})
export class Products {
  apiURL='https://dummyjson.com/products'
  constructor(public http:HttpClient){
    console.log(http);
    
  }

  getProducts(){
    console.log('shshs');
    return this.http.get<productAPIResponse>(this.apiURL)
    
  }
}
