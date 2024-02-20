import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  productList = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartServices = inject(CartService);
  private productServices = inject(ProductService);
  private categoryServices = inject(CategoryService);

  constructor() {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  // metodo que recibe el evento del hijo
  fromChild(e: string) {
    console.log('en el componente padre');
    console.log(e);
  }
  addToCart(product: Product) {
    this.cartServices.addToCart(product);
  }
  getProducts() {
    this.productServices.getProduct().subscribe({
      next: (product) => {
        this.productList.set(product);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getCategories() {
    this.categoryServices.getAllCategories().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
