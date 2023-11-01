import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  //initialisation de l'état de la connexion
  isLog = false;
  
  ngOnInit() {
    //vérifie si l'on possède un token
    if (sessionStorage.getItem('token')) { this.isLog = true };
  }
}