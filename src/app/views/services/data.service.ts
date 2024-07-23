import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token: any = localStorage.getItem('token')

  headerAdmin = new HttpHeaders()
    .set('authorization', this.token)
    .set('role', 'admin ')

  params = new HttpParams()
    .set('secret', environment.secret)
    .set('client', environment.client)

  headerall = new HttpHeaders()
    .set('authorization', this.token)

  constructor(private http: HttpClient) { }

  // getAllstudents() {
  //   return this.http.get(`${environment.urlBackend}`, { headers: this.headerall, params: this.params })
  // }

  getAllstudents() {
    return this.http.get(`${environment.urlBackend}`)
  }

  Addstudents(profile: any) {
    return this.http.post(`${environment.urlBackend}`, profile, { headers: this.headerAdmin, params: this.params })
  }

  deletestudent(id: any) {
    return this.http.delete(`${environment.urlBackend}` + id, { headers: this.headerAdmin, params: this.params })
  }

  updateStudent(id: string, newProfile: any) {
    return this.http.patch(`${environment.urlBackend}` + id, newProfile, { headers: this.headerAdmin, params: this.params })
  }

  getOnestudent(id: any) {
    // return this.http.get(`${environment.urlBackend}` + id, { headers: this.headerall, params: this.params })
    return this.http.get(`${environment.urlBackend}` + id)
  }
}
