import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  total = signal(0);

  @Input({ required: true }) cart: Product[] = [];
  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    // console.log(cart);
    if (cart) {
      this.total.set(
        this.cart.reduce((acumulator, product) => acumulator + product.price, 0)
      );
    }
  }

  // mala practica ejecutar una funcion en el template :S
  // totalPrice() {
  //   const total = this.cart.reduce(
  //     (acumulator, product) => acumulator + product.price,
  //     0
  //   );
  //   return total;
  // }
}
