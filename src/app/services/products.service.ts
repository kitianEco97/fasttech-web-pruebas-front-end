import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from '../models/Products';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  // URI = 'http://localhost:4000/api/products';
  URI_PRODUCTS = environment.URI_PRODUCTS

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<IProducts>{
    return this.http.get<IProducts>(`${this.URI_PRODUCTS}`);
  }

  getProductById( id: string ){
    return this.http.get<IProducts>(`${this.URI_PRODUCTS}/${id}`);
  }

}
