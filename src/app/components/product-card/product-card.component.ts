import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  isLog = false;
  
  ngOnInit() {
    if (sessionStorage.getItem('token')) {
      this.isLog = true;
    }   
  }
}