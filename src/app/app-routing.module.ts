import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';

const routes: Routes = [
  {
    path: '', component: FrontLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule) },
      { path: 'loginuser', loadChildren: () => import('./views/front/loginuser/loginuser.module').then(m => m.LoginuserModule) },
      { path: 'register', loadChildren: () => import('./views/front/register/register.module').then(m => m.RegisterModule) },
      { path: 'student', loadChildren: () => import('./views/front/student/student.module').then(m => m.StudentModule) },
      { path: 'student/:id', loadChildren: () => import('./views/front/studentdetails/studentdetails.module').then(m => m.StudentdetailsModule) },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [GuardadminGuard],
    children: [
      { path: 'dashboard', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'allstudents', loadChildren: () => import('./views/admin/allstudents/allstudents.module').then(m => m.AllstudentsModule) },
      { path: 'studentdetails/:id', loadChildren: () => import('./views/admin/studentdetails/studentdetails.module').then(m => m.StudentdetailsModule) },
      { path: 'addstudents', loadChildren: () => import('./views/admin/addstudents/addstudents.module').then(m => m.AddstudentsModule) },
    ]
  },
  {
    path: 'login', component: AuthAdminLayoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
