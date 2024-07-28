import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  register(body: any) {
    return this.http.post('https://jsonplaceholder.typicode.com', body)
  }

  login(body: any) {
    return this.http.post('https://jsonplaceholder.typicode.com', body)
  }

  saveToken(token: any) {
    localStorage.setItem('tokenUser', token)
  }

  userLoggedIn() {
    let token: any = localStorage.getItem('token')
    if (!token) {
      return false
    }

    let decodeToken = this.helper.decodeToken(token)
    if (decodeToken.role) {
      return false
    }

    if (this.helper.isTokenExpired(token)) {
      return false
    }
    return true
  }
}

