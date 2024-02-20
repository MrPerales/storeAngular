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

  getProduct(categoryId?: string) {
    // la volvemos un obj url de javaScript
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    // si llega el query cambia el endPoint para pedir otros datos, si no lo deja igual
    if (categoryId) {
      url.searchParams.set('categoryId', categoryId);
    }
    // lo volvemos a combertir en string
    return this.http.get<Product[]>(url.toString());
  }

  getProductById(id: string) {
    const product = this.http.get<Product>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return product;
  }
}
