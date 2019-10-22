import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/Category';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
// import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class CategoryService {
  private headers: Headers;
  actionUrl =  'http://localhost:8081/';

  constructor(private httpClient: HttpClient) {

  }


public register(category: Category): Observable<Category> {
  const actionUrl = this.actionUrl + 'category/register';
  const toAdd = JSON.stringify(category);
  return this.httpClient.post<Category>(actionUrl, toAdd, {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'})
    });
}

public delete(categorie: Category): Observable<String>  {
  const actionUrl =  this.actionUrl + 'category/delete/' + categorie.id;
  return this.httpClient.get<String>(actionUrl);
}

public getAllCategory(): Observable<Category[]> {
 const actionUrl = this.actionUrl + 'category/getAll';
 return this.httpClient.get<Category[]>(actionUrl);
}

public getCategoryById(id: number) {
 const actionUrl = this.actionUrl + 'category/getCategory' + '/' + id
 return this.httpClient.get<Category>(actionUrl);
}

}
