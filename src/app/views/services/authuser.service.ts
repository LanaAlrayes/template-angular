import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  constructor(private http: HttpClient) { }

  register(body: any) {
    return this.http.post('https://jsonplaceholder.typicode.com', body)
  }

  login(body: any) {
    return this.http.post('https://jsonplaceholder.typicode.com', body)
  }
}
