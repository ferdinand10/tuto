import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: '../pages/newproduct.html'
})
export class NewProduct implements OnInit {
cols: any[];
categories: Category[];
product: Product = new Product();
selectedCategory = null;
error: String = '';
  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.getAllCategories();
  }

  register() {
    console.log(this.product);
    this.product.category = this.selectedCategory;
    this.productService.register(this.product).subscribe(
      (data: Product) => {
        console.log(data);
        this.router.navigate(['/produit']);
      }
    );
}

anuuler() {
  this.router.navigate(['/produit']);
}

getAllCategories() {
    this.categoryService.getAllCategory()
      .subscribe(result => {
        this.categories = result;
      });
  }


}
