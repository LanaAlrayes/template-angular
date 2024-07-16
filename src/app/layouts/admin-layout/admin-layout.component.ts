import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  username: any

  constructor(private asd: AuthadminService, private route: Router) {
    if (!localStorage.getItem('token')) {
      this.route.navigate(['/login'])
    }
    
    this.username = asd.getUsername()
    console.log(this.asd.loggedIn())
  }
}
