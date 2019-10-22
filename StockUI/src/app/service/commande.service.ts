 import { Injectable } from '@angular/core';
 import { Http, Response, Headers } from '@angular/http';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Category } from '../models/Category';
// tslint:disable-next-line:import-blacklist
 import { Observable } from 'rxjs';
 import { Product } from '../models/Product';
 import { Commande } from '../models/Commande';
// import { Cookie } from 'ng2-cookies/ng2-cookies';

 @Injectable()
export class CommandeService {
  private headers: Headers;
  actionUrl = 'http://localhost:8081/';

  constructor(private httpClient: HttpClient) {

  }


public register(commande: Commande): Observable<Commande> {
  const actionUrl =   this.actionUrl + 'commande/register';
  const toAdd = JSON.stringify(commande);
  return this.httpClient.post<Commande>(actionUrl, toAdd, {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'})
    });
}

public delete(commande: Commande): Observable<String>  {
  const actionUrl = this.actionUrl + 'commande/delete/' + commande.id;
  return this.httpClient.get<String>(actionUrl);
}

public getAllCommande(): Observable<Commande[]> {
 const actionUrl =   this.actionUrl + 'commande/getAll';
 return this.httpClient.get<Commande[]>(actionUrl);
}

public getCommandeById(id: number) {
  const actionUrl  = this.actionUrl + 'commande/getCommande' + '/' + id;
  return this.httpClient.get<Commande>(actionUrl);
}

}
