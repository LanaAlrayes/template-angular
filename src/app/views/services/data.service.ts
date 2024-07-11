import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllstudents() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  Addstudents(profile: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', profile)
  }
}

// id:number,name:string ,username:string , email:string