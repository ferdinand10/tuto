import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import {Product} from '../models/Product';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/Category';
import { ClientService } from '../service/client.service';
import { Client } from '../models/client';
import { Commande } from '../models/Commande';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: '../pages/commande.html'
})
export class CommandeComponent implements OnInit {

  commandes: Commande[];
  categories: Category[];

  constructor(private commandeService: CommandeService,
              private router: Router) { }

  ngOnInit() {
    this.getAllCommandes();
  }

  getAllCommandes() {
    this.commandeService.getAllCommande()
      .subscribe(result => {
        this.commandes = result;
      });
  }

edit(commande: Commande): void {
localStorage.setItem('id', commande.id.toString());
this.router.navigate(['/editproduct']);
}

delete(commande: Commande) {
 this.commandeService.delete(commande).subscribe();
 this.commandes = this.commandes.filter(c => c != commande);
}

}
