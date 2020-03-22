import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  signUp(newUser){
    return this.httpClient.post<any>('http://localhost:8080/authentication/register', newUser).pipe(
        map(
          userData => {
            sessionStorage.setItem('username',userData.userName);
            let tokenStr= 'Bearer '+userData.token;
            sessionStorage.setItem('token', tokenStr);
            return userData;
           }
        )
      )
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<any>('http://localhost:8080/authtentication/login',{username, password} ,{headers}).pipe(
     map(
      userData => {
        sessionStorage.setItem('username',userData.userName);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }
}
