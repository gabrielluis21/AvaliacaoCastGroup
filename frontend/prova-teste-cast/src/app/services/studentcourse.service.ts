import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentCourse } from '../models/student-course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<StudentCourse[]>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    )
    return this.httpClient.get<StudentCourse[]>('http://localhost:8080/api/v1/student-courses',{headers})
  }

  get(): Observable<StudentCourse>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    )
    return this.httpClient.get<StudentCourse>('http://localhost:8080/api/v1/student-course',{headers})
  }
  
  add(student): Observable<StudentCourse>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.post<StudentCourse>('http://localhost:8080/api/v1/student-courses', student, {headers})
  }
  update(id, student): Observable<StudentCourse>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.put<StudentCourse>('http://localhost:8080/api/v1/student-course'+id, student, {headers})
  }

  delete(id){
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    this.httpClient.delete('http://localhost:8080/api/v1/student-courses'+id, {headers})
  }
}
