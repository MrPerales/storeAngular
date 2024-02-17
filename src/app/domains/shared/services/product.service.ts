import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  // httpClient para poder hacer peticiones
  private http = inject(HttpClient);

  getProduct() {
    const products = this.http.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return products;
  }
}
