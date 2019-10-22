 import { Injectable } from '@angular/core';
 import { Http, Response, Headers } from '@angular/http';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Category } from '../models/Category';
// tslint:disable-next-line:import-blacklist
 import { Observable } from 'rxjs';
 import { Product } from '../models/Product';
// import { Cookie } from 'ng2-cookies/ng2-cookies';

 @Injectable()
export class ProductService {
  private headers: Headers;
  actionUrl = 'http://localhost:8081/';

  constructor(private httpClient: HttpClient) {

  }


public register(product: Product): Observable<Product> {
  console.log('clique me');
  const actionUrl =   this.actionUrl + 'product/register';
  const toAdd = JSON.stringify(product);
  return this.httpClient.post<Product>(actionUrl, toAdd, {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'})
    });
}

public delete(product: Product): Observable<String>  {
  const actionUrl = this.actionUrl + 'product/delete/' + product.id;
  return this.httpClient.get<String>(actionUrl);
}

public getAllProduct(): Observable<Product[]> {
 const actionUrl =   this.actionUrl + 'product/getAll';
 return this.httpClient.get<Product[]>(actionUrl);
}

public getProductById(id: number) {
  console.log('avant url');
  const actionUrl  = this.actionUrl + 'product/getProduct' + '/' + id;
  return this.httpClient.get<Product>(actionUrl);
}

}
