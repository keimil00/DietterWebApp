import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8000/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login/', {
      username,
      password
    }, httpOptions);
  }

  register(username: string,
           first_name: string,
           last_name: string,
           email: string,
           password: string,
           confirm_password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/', {
      username,
      first_name,
      last_name,
      email,
      password,
      confirm_password
    }, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout/', { }, httpOptions);
  }
}
