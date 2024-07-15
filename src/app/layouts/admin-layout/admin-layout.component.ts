import { Component } from '@angular/core';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  username: any

  constructor(private asd: AuthadminService) {
    this.username = asd.getUsername
  }
}
