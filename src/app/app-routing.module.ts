import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';

const routes: Routes = [
  {
    path: '', component: FrontLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./views/front/home/home.module').then(m => m.HomeModule) },
      { path: 'loginuser', loadChildren: () => import('./views/front/loginuser/loginuser.module').then(m => m.LoginuserModule) },
      { path: 'register', loadChildren: () => import('./views/front/register/register.module').then(m => m.RegisterModule) },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'loginadmin', loadChildren: () => import('./views/admin/loginadmin/loginadmin.module').then(m => m.LoginadminModule) },
      { path: 'allstudents', loadChildren: () => import('./views/admin/allstudents/allstudents.module').then(m => m.AllstudentsModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
