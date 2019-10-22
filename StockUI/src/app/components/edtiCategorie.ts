import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcategorie',
  templateUrl: '../pages/editcategorie.html'
})
export class EditCategorie implements OnInit {
cols: any[];
categories: Category[];
categorie: Category = new Category();
error: String = '';
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.edit();
  }

anuuler() {
  this.router.navigate(['/categories']);
}

edit() {
  let id = localStorage.getItem('id');
  console.log('id cate ' + id);
  this.categoryService.getCategoryById(+id).subscribe(
    data => {
      this.categorie = data;
      console.log(this.categorie);
    }
  );
}
actualiser() {
 this.categoryService.register(this.categorie).subscribe(
   data => {
     this.categorie = data;
     this.router.navigate(['/categories']);
   }
 );
}

}
