 import { Injectable } from '@angular/core';
 import { Http, Response, Headers } from '@angular/http';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
 import { Observable } from 'rxjs';
 import { Product } from '../models/Product';
import { Client } from '../models/client';
// import { Cookie } from 'ng2-cookies/ng2-cookies';

 @Injectable()
export class ClientService {
  private headers: Headers;
  actionUrl = 'http://localhost:8081/';

  constructor(private httpClient: HttpClient) {

  }


public register(client: Client): Observable<Client> {
  console.log('clique me');
  const actionUrl =   this.actionUrl + 'client/register';
  const toAdd = JSON.stringify(client);
  return this.httpClient.post<Client>(actionUrl, toAdd, {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'})
    });
}

public delete(client: Client): Observable<String>  {
  const actionUrl = this.actionUrl + 'client/delete/' + client.id;
  return this.httpClient.get<String>(actionUrl);
}

public getAllClient(): Observable<Client[]> {
 const actionUrl =   this.actionUrl + 'client/getAll';
 return this.httpClient.get<Client[]>(actionUrl);
}

public getClientById(id: number) {
  const actionUrl  = this.actionUrl + 'client/getClient' + '/' + id;
  return this.httpClient.get<Client>(actionUrl);
}

}
