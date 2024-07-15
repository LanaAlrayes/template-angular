import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent {
  dataReceived: any

  constructor(private asd: AuthadminService, private route: Router) { }

  loginadmin(f: any) {
    let data = f.value

    this.asd.login(data).subscribe(response => {
      this.dataReceived = response
      this.asd.saveDataProfil(this.dataReceived.token)

      this.route.navigate(['/admin'])
      
      // console.log(this.dataReceived)
    }, err => console.log('error'))
  }
}



