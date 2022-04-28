import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products = 'https://6b2f1990-c93e-41b3-9640-936b49d7d4f2.mock.pstmn.io/product';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('assets/images/products/products.json');
  }

}
