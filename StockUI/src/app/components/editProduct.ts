import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/Category';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-newcategorie',
  templateUrl: '../pages/editproduct.html'
})
export class EditProduct implements OnInit {
cols: any[];
categories: Category[];
product: Product = new Product();
categorie: Category = new Category();
error: String = '';
selectedCategory = null;
activeCategorie = '';
  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.edit();
    this.getAllCategories();
  }

  register() {
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

edit() {
  let id = localStorage.getItem('id');
  console.log('id prod ' + id);
  this.productService.getProductById(+id).subscribe(
    data => {
      this.product = data;
      this.selectedCategory = this.product.category;
      this.activeCategorie = this.selectedCategory.name;
      console.log(this.selectedCategory.name);
    }
  );
}

}
