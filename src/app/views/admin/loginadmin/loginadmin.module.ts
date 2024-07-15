import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginadminRoutingModule } from './loginadmin-routing.module';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginadminComponent
  ],
  imports: [
    CommonModule,
    LoginadminRoutingModule,
    FormsModule
  ]
})
export class LoginadminModule { }
