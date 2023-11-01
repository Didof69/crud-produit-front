import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  categoriesTab!: Category[];

  createForm!: FormGroup;
  patternPrice = '^([0-9])+(.[0-9]{1,2})?$';
  patternQuantity = '^[0-9]*[1-9][0-9]*$';


  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      product_name: ["", Validators.required],
      category_id: ["", Validators.required],
      price: [
        "",
        [Validators.required, Validators.pattern(this.patternPrice)],
      ],
      quantity: [
        "",
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
  }

  onSubmit() {
    console.log(this.createForm.value);

    if (this.createForm.valid) {
      this.createForm.value.price = this.createForm.value.price.toString();
      this.productService
        .createProduct(this.createForm.value)
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
