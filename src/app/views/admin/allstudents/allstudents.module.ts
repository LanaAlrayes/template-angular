import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AllstudentsRoutingModule } from './allstudents-routing.module';
import { AllstudentsComponent } from './allstudents.component';


@NgModule({
  declarations: [
    AllstudentsComponent
  ],
  imports: [
    CommonModule,
    AllstudentsRoutingModule,
    HttpClientModule
  ]
})
export class AllstudentsModule { }
