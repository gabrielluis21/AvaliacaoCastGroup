import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Students } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Students[]>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    )
    return this.httpClient.get<Students[]>('http://localhost:8080/api/v1/students',{headers})
  }

  get(): Observable<Students>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    )
    return this.httpClient.get<Students>('http://localhost:8080/api/v1/students',{headers})
  }
  
  add(student): Observable<Students>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.post<Students>('http://localhost:8080/api/v1/students', student, {headers})
  }
  update(id, student): Observable<Students>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.put<Students>('http://localhost:8080/api/v1/student/'+id, student, {headers})
  }

  delete(id){
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    this.httpClient.delete('http://localhost:8080/api/v1/student/'+id, {headers})
  }
}
