import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import {Product} from '../models/Product';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-product',
  templateUrl: '../pages/product.html'
})
export class ProductComponent implements OnInit {

  products: Product[];
  categories: Category[];

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct()
      .subscribe(result => {
        this.products = result;
      });
  }

edit(pro: Product): void {
localStorage.setItem('id', pro.id.toString());
this.router.navigate(['/editproduct']);
}

delete(prod: Product) {
 this.productService.delete(prod).subscribe();
 this.products = this.products.filter(p => p != prod);
}

}
