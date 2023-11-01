import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() productsTab!: Product[];
  //initialisation de l'état de la connexion
  isLog!:boolean;

  ngOnInit() {
    if (sessionStorage.getItem('token')) { this.isLog = true;}
  }
}
