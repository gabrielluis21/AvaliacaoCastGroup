import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Courses } from '../models/courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Courses[]>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.get<Courses[]>('http://localhost:8080/api/v1/courses',{headers})
  }
  
  get(id): Observable<Courses>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.get<Courses>('http://localhost:8080/api/v1/course'+{id},{headers})
  }

  getByAbout(abaout): Observable<Courses>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.get<Courses>('http://localhost:8080/api/v1/course'+{abaout},{headers})
  }
  
  add(course): Observable<Courses>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.post<Courses>('http://localhost:8080/api/v1/courses', course, {headers})
  }
  
  update(id, course): Observable<Courses>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.put<Courses>('http://localhost:8080/api/v1/course/'+id, course, {headers})
  }
  
  delete(id){
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    this.httpClient.post('http://localhost:8080/api/v1/course/'+id, {headers})
  }

}
