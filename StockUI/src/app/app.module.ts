import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Categorie} from './components/categorie';
import {NewCategorie} from './components/newCategorie';
import {AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ProductComponent } from './components/product';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {CategoryService} from './service/category.service';
import {EditCategorie} from './components/edtiCategorie';
import { ProductService } from './service/product.service';
import {NewProduct} from './components/newProdcut';
import {EditProduct} from './components/editProduct';
import {ClientComponent} from './components/client';
import {ClientService} from './service/client.service';
import {CommandeService} from './service/commande.service';
import {CommandeComponent} from './components/commande';
import {NewCommande} from './components/newCommande';
import {NewClient} from './components/newClient';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent, Categorie, ProductComponent, NewCategorie, EditCategorie, NewProduct, EditProduct
    , ClientComponent, CommandeComponent, NewCommande, NewClient
  ],
  imports: [
    BrowserModule, AppRoutes, TableModule, HttpClientModule, FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}, CategoryService, ProductService, ClientService
, CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
