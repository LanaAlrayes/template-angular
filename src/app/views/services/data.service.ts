import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token: any = localStorage.getItem('token')

  headerAdmin = new HttpHeaders()
    .set('authorization', this.token)
    .set('role', 'admin ')

  params = new HttpParams()
    .set('secret', 'wiopapa')
    .set('client', '12456987')

  headerall = new HttpHeaders()
    .set('authorization', this.token)

  constructor(private http: HttpClient) { }

  getAllstudents() {
    return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: this.headerall, params: this.params })
  }

  Addstudents(profile: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', profile, { headers: this.headerAdmin, params: this.params })
  }

  deletestudent(id: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users' + id, { headers: this.headerAdmin, params: this.params })
  }

  updateStudent(id: string, newProfile: any) {
    return this.http.patch('https://jsonplaceholder.typicode.com/users' + id, newProfile, { headers: this.headerAdmin, params: this.params })
  }

  getOnestudent(id: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/users' + id, { headers: this.headerall, params: this.params })
  }
}
