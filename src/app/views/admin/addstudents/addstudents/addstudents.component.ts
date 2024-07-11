import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent {

  messageErr=""
  constructor(private ds: DataService, private router: Router) { }
  add(f: any) {
    let data = f.value
    console.log(data)

    this.ds.Addstudents(data).subscribe(response => {
      // console.log(response)
      this.router.navigate(['/admin/allstudents'])
    }, (err: HttpErrorResponse) => {
      this.messageErr=err.error

      // console.log(err.error) // text error
      // console.log(err.status) // 400
    })

  }
}
