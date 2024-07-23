import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  messageError: any

  constructor(private aus: AuthuserService, private router: Router) { }


  register(f: any) {
    let data = f.value

    this.aus.register(data).subscribe(data => {
      this.router.navigate(['/login'])
      console.log(data)
    }, (err: HttpErrorResponse) => {
      console.log('message error')
      this.messageError = "Error"
    })
  }
}
