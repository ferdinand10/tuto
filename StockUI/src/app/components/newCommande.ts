import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';
import { CategoryService } from '../service/category.service';
import { Client } from '../models/client';
import { Commande } from '../models/Commande';
import { ClientService } from '../service/client.service';
import { LigneCommande } from '../models/LigneCommande';
import { CommandeService } from '../service/commande.service';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-newcommande',
  templateUrl: '../pages/newcommande.html'
})
export class NewCommande implements OnInit {
cols: any[];



total: number = 0;
unitPrice: number = 0;
qtt: number = 0;
selectedProduct = null;

selectedClient = null;

selectedCategory = null;
indice: number  = 0;
error: String = '';


editItem: boolean = false;
ligneCommandes: LigneCommande[] = [];
ligneCommande: LigneCommande = new LigneCommande();
products: Product[];
clients: Client[];
commande: Commande = new Commande();
  constructor(private productService: ProductService,
              private clientService: ClientService,
              private commandeService: CommandeService,
              private router: Router) { }

  ngOnInit() {
    this.getAllClients();
    this.getAllProducts();
  }

  register() {
    if (this.ligneCommandes.length > 0) {
    let tab = [];
    this.ligneCommandes.forEach(l =>{
      l.id = null;
      tab.push(l);
    })
    this.commande.ligneCommande = tab;
    this.commande.client = this.selectedClient;
    this.commandeService.register(this.commande).subscribe(
      (data: Commande) => {
        console.log(data);
        this.router.navigate(['/commandes']);
      }
    );
    } else {
      this.router.navigate(['/commandes']);
    }
}

anuuler() {
  this.router.navigate(['/commandes']);
}

getAllClients() {
    this.clientService.getAllClient()
      .subscribe(result => {
        this.clients = result;
      });
    }
  getAllProducts() {
    this.productService.getAllProduct()
    .subscribe(result => {
        this.products = result;
      });
  }

  addNewLine() {
    if (this.ligneCommande.product.id != null) {
      this.ligneCommande.id = this.ligneCommandes.length + 1;
      this.ligneCommande.totalCost = this.ligneCommande.unitPrice * this.ligneCommande.qty;
      this.ligneCommandes.push(this.ligneCommande);
      this.total = 0
      this.ligneCommandes.forEach(l=>{
        this.total += l.totalCost;
      });
      this.ligneCommande = new LigneCommande();
    }
  }

  removeItem(id: number) {
    this.ligneCommandes = this.ligneCommandes.filter(l => l.id != id);
    this.total = 0;
    this.ligneCommandes.forEach(l=>{
        this.total += l.totalCost;
      });
}

onProducChange() {
  }


  addItem() {
    this.editItem = true;
    this.addNewLine();
  }



}
