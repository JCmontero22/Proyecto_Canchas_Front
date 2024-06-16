import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './page/inicio-page/inicio-page.component';
import { inicioRouting } from './inicio-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';



@NgModule({
  declarations: [
    InicioPageComponent,
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    inicioRouting,
    RouterLink,
    RouterModule,
    
  ]
})
export class InicioModule { }
