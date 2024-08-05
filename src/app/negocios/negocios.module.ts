import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegociosComponent } from './page/negocios/negocios.component';
import { ListadoNegociosComponent } from './components/listado-negocios/listado-negocios.component';
import { negociosRouting } from './negocios-routing.module';
import { CanchasComponent } from './page/canchas/canchas.component';
import { ListadoCanchasNegocioComponent } from './components/listado-canchas-negocio/listado-canchas-negocio.component';
import { SepararCanchasComponent } from './page/separar-canchas/separar-canchas.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    NegociosComponent,
    ListadoNegociosComponent,
    CanchasComponent,
    ListadoCanchasNegocioComponent,
    SepararCanchasComponent,
  ],
  imports: [
    CommonModule,
    negociosRouting,
    SharedModule
  ]
})
export class NegociosModule { }
