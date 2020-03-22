import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Employees } from '../models/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employees[]>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    )
    return this.httpClient.get<Employees[]>('http://localhost:8080/api/v1/employees',{headers})
  }

  get(id): Observable<Employees>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    )
    return this.httpClient.get<Employees>('http://localhost:8080/api/v1/employee/'+id,{headers})
  }
  
  add(employee): Observable<Employees>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.post<Employees>('http://localhost:8080/api/v1/employees', employee, {headers})
  }
  update(id, employee): Observable<Employees>{
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    return this.httpClient.put<Employees>('http://localhost:8080/api/v1/employee/'+id, employee, {headers})
  }

  delete(id){
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(sessionStorage.getItem('userName'))}
    );
    this.httpClient.delete('http://localhost:8080/api/v1/employee/'+id, {headers})
  }
}
