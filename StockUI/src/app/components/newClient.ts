import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import {Product} from '../models/Product';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/Category';
import { ClientService } from '../service/client.service';
import { Client } from '../models/client';
@Component({
  selector: 'app-newclient',
  templateUrl: '../pages/newclient.html'
})
export class NewClient implements OnInit {

  clients: Client[];
  client: Client = new Client();
  categories: Category[];

  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClient()
      .subscribe(result => {
        this.clients = result;
      });
  }

  register() {
    this.clientService.register(this.client).subscribe(
      (data: Client) => {
        this.router.navigate(['/clients']);
      }
    );
}
annuler() {
  this.router.navigate(['/clients']);
}

edit(client: Client): void {
localStorage.setItem('id', client.id.toString());
this.router.navigate(['/editproduct']);
}

delete(client: Client) {
 this.clientService.delete(client).subscribe();
 this.clients = this.clients.filter(c => c != client);
}

}
