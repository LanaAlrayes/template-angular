import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {


  IsLoggedIn: boolean = false

  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post('https://myfakeapi.com/api/login', data)
  }

  saveDataProfil(token: any) {

    let decodeToken = this.helper.decodeToken(token)

    localStorage.setItem('token', token)
    // console.log(decodeToken)
  }

  getUsername() {
    let token: any = localStorage.getItem('token')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.username
  }

  loggedIn(){
    
  }
}
