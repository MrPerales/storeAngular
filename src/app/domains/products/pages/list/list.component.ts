import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  productList = signal<Product[]>([]);
  cart = signal<Product[]>([]);
  constructor() {
    const initalProducts: Product[] = [
      {
        id: Date.now(),
        title: 'producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=01',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'producto 2',
        price: 10,
        image: 'https://picsum.photos/640/640?r=02',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'producto 3',
        price: 20,
        image: 'https://picsum.photos/640/640?r=03',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'producto 1',
        price: 50,
        image: 'https://picsum.photos/640/640?r=01',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'producto 2',
        price: 70,
        image: 'https://picsum.photos/640/640?r=02',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'producto 3',
        price: 12,
        image: 'https://picsum.photos/640/640?r=03',
        creationAt: new Date().toISOString(),
      },
    ];
    this.productList.set(initalProducts);
  }
  // metodo que recibe el evento del hijo
  fromChild(e: string) {
    console.log('en el componente padre');
    console.log(e);
  }
  addToCart(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }
}
