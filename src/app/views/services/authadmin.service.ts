import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post('https://myfakeapi.com/api/login', data)
  }

  saveDataProfil(token: any) {
    localStorage.setItem('token', token)
  }

  getUsername() {
    let token: any = localStorage.getItem('token')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.username
  }

  loggedIn() {
    let token: any = localStorage.getItem('token')
    if (!token) {
      return false
    }
    
    let decodeToken = this.helper.decodeToken(token)
    if (decodeToken.role !== 'admin') {
      return false
    }

    if (this.helper.isTokenExpired(token)) {
      return false
    }
    return true
  }
}
