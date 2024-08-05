import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { loginRouting } from './login.routing';



@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterLink,
      loginRouting
  ],exports:[
      LoginComponent
  ]
})
export class LoginModule { }
