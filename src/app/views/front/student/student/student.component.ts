import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  dataArray: any

  constructor(private serve: DataService , private router:Router) {
    this.serve.getAllstudents().subscribe(data => this.dataArray = data)
  }

  Godetails(id:any){
    this.router.navigate(['student/'+id])
  }
}
