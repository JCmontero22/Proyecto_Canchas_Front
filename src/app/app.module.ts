import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarioComponent } from './shared/components/calendario/calendario.component';
import { NegociosModule } from './negocios/negocios.module';
import { LoginModule } from './login/login.module';
import { RegistroUsuariosModule } from './registro-usuarios/registro-usuarios.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    NegociosModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    RegistroUsuariosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
