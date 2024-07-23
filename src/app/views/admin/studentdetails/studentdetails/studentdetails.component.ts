import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  id = ''
  dataObject: any
  messageErr = ''
  constructor(private route: ActivatedRoute, private ds: DataService) {
    this.route.params.subscribe(params => this.id = params['id'])

    this.ds.getOnestudent(this.id).subscribe(res => this.dataObject = res
      , (err: HttpErrorResponse) =>
        this.messageErr = 'error')
  }

}
