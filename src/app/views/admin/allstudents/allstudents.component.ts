import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {

  dataArray: any
  constructor(private serve: DataService) {
    this.serve.getAllstudents().subscribe(data => this.dataArray = data)
  }

}
