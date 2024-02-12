import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // metodo que recibe el evento del hijo
  fromChild(e: string) {
    console.log('en el componente padre');
    console.log(e);
  }
}
