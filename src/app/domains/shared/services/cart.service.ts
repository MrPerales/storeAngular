import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cartList = this.cart();
    const total = cartList.reduce(
      (acumulator, product) => acumulator + product.price,
      0
    );
    return total;
  });

  addToCart(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }
}
