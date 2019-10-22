import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {Categorie} from './components/categorie';
import {NewCategorie} from './components/newCategorie';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './components/product';
import { EditCategorie } from './components/edtiCategorie';
import {NewProduct} from './components/newProdcut';
import { EditProduct } from './components/editProduct';
import {ClientComponent} from './components/client';
import {CommandeComponent} from './components/commande';
import {NewCommande} from './components/newCommande';
import { NewClient } from './components/newClient';


const routes: Routes = [
{path: 'categories', component: Categorie	},
{path: 'categorie/new', component: NewCategorie	},
{path: 'produit', component: ProductComponent	},
{path: 'editCategorie', component: EditCategorie},
{path: 'product/new', component: NewProduct},
{path: 'editproduct', component: EditProduct},
{path: 'clients', component: ClientComponent},
{path: 'commandes', component: CommandeComponent},
{path: 'commande/new', component: NewCommande},
{path: 'client/new', component: NewClient}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutes { }

