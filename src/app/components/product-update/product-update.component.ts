import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  categoriesTab!: Category[];
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

  updateForm!: FormGroup;
  patternPrice = '^([0-9])+(.[0-9]{1,2})?$';
  patternQuantity = '^[0-9]*[1-9][0-9]*$';

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.updateForm = this.fb.group({
      product_name: [this.product.product_name, Validators.required],
      category_id: [this.product.category_id, Validators.required],
      price: [
        this.product.price,
        [Validators.required, Validators.pattern(this.patternPrice)],
      ],
      quantity: [
        this.product.quantity,
        [Validators.required, Validators.pattern(this.patternQuantity)],
      ],
    });
  }

  ngOnInit() {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    console.log(productIdFromRoute);

    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categoriesTab = categories;
      console.log(this.categoriesTab);
    });

    this.productService
      .getOneProductById(productIdFromRoute)
      .subscribe((product) => {
        this.product = product;
        // console.log(this.product);
        this.updateForm.patchValue({
          product_name: this.product.product_name,
          category_id: this.product.category_id,
          price: this.product.price,
          quantity: this.product.quantity,
        });
      });
  }

  onSubmit() {
    console.log(this.updateForm.value);
    
    if (this.updateForm.valid) {
      this.updateForm.value.price = this.updateForm.value.price.toString()
      this.productService
        .updateProduct(this.product.product_id!, this.updateForm.value)
        .subscribe({
          next: (response) => {
            this.router.navigate(['home']);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}
