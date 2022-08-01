import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const routes:Routes=[
  {
    path:'',loadChildren:()=>import ('./shared/shared.module').then(m=>m.SharedModule)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
