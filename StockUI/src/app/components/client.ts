import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import {Product} from '../models/Product';
import { CategoryService } from '../service/category.service';
import { Category } from '../models/Category';
import { ClientService } from '../service/client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-client',
  templateUrl: '../pages/client.html'
})
export class ClientComponent implements OnInit {

  clients: Client[];
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

edit(client: Client): void {
localStorage.setItem('id', client.id.toString());
this.router.navigate(['/editproduct']);
}

delete(client: Client) {
 this.clientService.delete(client).subscribe();
 this.clients = this.clients.filter(c => c != client);
}

}
