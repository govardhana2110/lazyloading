import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'login', loadChildren:()=>import('../login/login.module').then(m=>m.LoginModule)},
  {path:'register', loadChildren:()=>import('../register/register.module').then(m=>m.RegisterModule)},
  {path:'home', loadChildren:()=>import('../home/home.module').then(m=>m.HomeModule)},
  {path:'', redirectTo:'/login'},
  {path:'**', redirectTo:'/login'}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SharedModule { }
