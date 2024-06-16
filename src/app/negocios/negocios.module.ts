import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegociosComponent } from './page/negocios/negocios.component';
import { ListadoNegociosComponent } from './components/listado-negocios/listado-negocios.component';
import { negociosRouting } from './negocios-routing.module';
import { CanchasComponent } from './page/canchas/canchas.component';
import { ListadoCanchasNegocioComponent } from './components/listado-canchas-negocio/listado-canchas-negocio.component';



@NgModule({
  declarations: [
    NegociosComponent,
    ListadoNegociosComponent,
    CanchasComponent,
    ListadoCanchasNegocioComponent
  ],
  imports: [
    CommonModule,
    negociosRouting
  ]
})
export class NegociosModule { }
