import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent {
  product: Product = {
    product_name: '',
    category_id: 0,
    category: {
      category_id: 0,
      category_name: '',
    },
    price: '',
    quantity: 0,
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //protection de la route
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getOneProductById(productIdFromRoute)
      .subscribe((product) => {
        this.product = product;
      });
  }

  onSubmit() {
    this.productService.deleteProduct(this.product.product_id!).subscribe({
      next: (response) => {
        this.router.navigate(['home']);
      },
      error: (error) => {        
        alert(error);
      },
    });
  }
}
