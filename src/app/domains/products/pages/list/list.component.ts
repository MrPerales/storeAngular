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
        price: 100,
        image: 'https://picsum.photos/640/640?r=02',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'producto 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=03',
        creationAt: new Date().toISOString(),
      },
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
        price: 100,
        image: 'https://picsum.photos/640/640?r=02',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'producto 3',
        price: 100,
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
}
