import { Component } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  dataArray: any
  
  constructor(private serve: DataService) {
    this.serve.getAllstudents().subscribe(data => this.dataArray = data)
  }
}
