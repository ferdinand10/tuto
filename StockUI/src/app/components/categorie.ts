import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: '../pages/categorie.html'
})
export class Categorie implements OnInit {
cols: any[];
categories: Category[];
categorie: Category = new Category();
error: String = '';
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory()
      .subscribe(result => {
        this.categories = result;
      });
  }

  register() {
    if (this.categorie.name != null) {
      this.categoryService.register(this.categorie).subscribe(
      (data: Category) => {
        console.log(data);
      }
    );
      this.router.navigate(['/categories']);
    } else {
      this.error = 'Veuillez saisir le nom';
    }
}
update() {
  this.router.navigate(['/editCategorie', this.categorie.id]);
}

edit(cat: Category): void {
localStorage.setItem('id', cat.id.toString());
this.router.navigate(['/editCategorie']);
}

delete(cat: Category) {
 this.categoryService.delete(cat).subscribe();
 this.categories = this.categories.filter(p => p != cat);
}

}
