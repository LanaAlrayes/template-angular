import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {
  messageError: any
  datatoken: any
  constructor(private asd: AuthuserService) { }

  login(f: any) {
    let data = f.value
    this.asd.login(data).subscribe(data => {
      this.datatoken = data
      this.asd.saveToken(this.datatoken.token)
    }, (err: HttpErrorResponse) => this.messageError=err.error.error)
  }
}
