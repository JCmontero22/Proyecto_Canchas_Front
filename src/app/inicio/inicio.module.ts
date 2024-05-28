import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './page/inicio-page/inicio-page.component';
import { inicioRouting } from './inicio-routing.module';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InicioPageComponent
  ],
  imports: [
    CommonModule,
    inicioRouting,
    RouterLink,
    RouterModule
  ]
})
export class InicioModule { }
