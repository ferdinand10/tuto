import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcategorie',
  templateUrl: '../pages/newcategorie.html'
})
export class NewCategorie implements OnInit {
cols: any[];
categories: Category[];
categorie: Category = new Category();
error: String = '';
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Nom'},
      { field: 'id', header: 'Identifiant'}
    ];
  }

  register() {
    if (this.categorie.name != null) {
      this.categoryService.register(this.categorie).subscribe(
      (data: Category) => {
        console.log(data);
        this.router.navigate(['/categories']);
      }
    );
    } else {
      this.error = 'Veuillez saisir le nom';
    }
}

anuuler() {
  this.router.navigate(['/categories']);
}



}
