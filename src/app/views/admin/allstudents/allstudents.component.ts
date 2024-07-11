import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {

  dataArray: any = []
  dataStudent = {
    id: '',
    name: '',
    username: '',
    email: ''
  }

  messageSuccess = ''

  constructor(private serve: DataService) {
    this.serve.getAllstudents().subscribe(data => this.dataArray = data)
  }

  delete(id: any, i: number) {
    this.serve.deletestudent(id).subscribe(response => {
      console.log(response)
      this.dataArray.splice(i, 1)
    })
  }
// get old data
  getdata(id: string, name: string, username: string, email: string) {
    this.messageSuccess = ''
    this.dataStudent.id = id
    this.dataStudent.name = name
    this.dataStudent.username = username
    this.dataStudent.email = email
  }

// update Student
  updatenewStudent(f: any) {
    let data = f.value
    this.serve.updateStudent(this.dataStudent.id, data).subscribe(response => {
      console.log(response)
      
      let indexId = this.dataArray.findIndex((obj: any) =>
        obj.id == this.dataStudent.id
      )

      this.dataArray[indexId].name = data.name
      this.dataArray[indexId].username = data.username
      this.dataArray[indexId].email = data.email

      this.messageSuccess = `this student ${this.dataArray[indexId].name} is updated`

    }, (err: HttpErrorResponse) => {
      console.log(err.error)
    }
    )
  }


}
