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

  deletestudent(id: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users' + id)
  }

  updateStudent(id: string, newProfile: any) {
    return this.http.patch('https://jsonplaceholder.typicode.com/users' + id, newProfile)
  }
}
