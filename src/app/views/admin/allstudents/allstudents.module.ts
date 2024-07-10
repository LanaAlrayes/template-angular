import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllstudentsRoutingModule } from './allstudents-routing.module';
import { AllstudentsComponent } from './allstudents.component';


@NgModule({
  declarations: [
    AllstudentsComponent
  ],
  imports: [
    CommonModule,
    AllstudentsRoutingModule
  ]
})
export class AllstudentsModule { }
