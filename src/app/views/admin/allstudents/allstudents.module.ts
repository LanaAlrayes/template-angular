import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AllstudentsRoutingModule } from './allstudents-routing.module';
import { AllstudentsComponent } from './allstudents.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllstudentsComponent
  ],
  imports: [
    CommonModule,
    AllstudentsRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class AllstudentsModule { }
