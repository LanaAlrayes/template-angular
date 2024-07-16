import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {
  dataReceived: any
  url: any
  constructor(private asd: AuthadminService, private route: Router , private aruter:ActivatedRoute) { }

  ngOnInit() {
    this.url=this.aruter.snapshot.queryParams['returnUrl']  || '/admin/'
  }

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



