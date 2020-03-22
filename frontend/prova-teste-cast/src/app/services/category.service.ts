import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Category[]>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    )
    return this.httpClient.get<Category[]>('http://localhost:8080/api/v1/categories',{headers})
  }

  get(id): Observable<Category>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    )
    return this.httpClient.get<Category>('http://localhost:8080/api/v1/category/'+{id},{headers})
  }
  
  add(category): Observable<Category>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.post<Category>('http://localhost:8080/api/v1/categories', category, {headers})
  }
  update(id, category): Observable<Category>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.put<Category>('http://localhost:8080/api/v1/category/'+id, category, {headers})
  }

  delete(id){
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    this.httpClient.delete('http://localhost:8080/api/v1/category/'+id, {headers})
  }
}
