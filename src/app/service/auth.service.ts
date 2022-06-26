import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signup(data:any) :Observable<any> {
    return this.http.post('http://localhost:4000/auth/signup', data);
  }
  signin(data:any) :Observable<any> {
    return this.http.post('http://localhost:4000/auth/login', data);
  }
  getProfile() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization" : "Bearer " +  localStorage.getItem('token')
    });
    return this.http.get(
      'http://localhost:4000/api/auth',
      {headers: headers}
      ) 
  }
}