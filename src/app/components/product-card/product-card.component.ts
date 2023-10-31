import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  isLog = false;

  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    if (sessionStorage.getItem('token')) {
      this.isLog = true;
    }
  }

  onSubmit() {
    this.productService.deleteProduct(this.product.product_id!).subscribe((response) => {
      console.log(response);
      location.reload()
    })
  }
}