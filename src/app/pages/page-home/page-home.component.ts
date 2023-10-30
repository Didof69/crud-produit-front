import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent {
  productsTab!: Product[];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getAllProducts().subscribe((products) => {
      this.productsTab = [...products];
      console.log(this.productsTab);
    });
  }
}
