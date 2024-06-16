import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { canchasRouting } from './canchas-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { CanchasPageComponent } from './page/canchas-page/canchas-page.component';
import { ListadoCanchasComponent } from './components/listado-sitios/listado-canchas.component';
import { SepararCanchasPageComponent } from './page/separar-canchas-page/separar-canchas-page.component';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ListadoNegociosComponent } from './components/listado-negocios/listado-negocios.component';




@NgModule({
    declarations: [
    CanchasPageComponent,
    ListadoCanchasComponent,
    SepararCanchasPageComponent,
    ListadoNegociosComponent
  ],
    imports: [
        CommonModule,
        canchasRouting,
        RouterLink,
        RouterModule,
        FormsModule,
        FullCalendarModule

    ],
    exports: [

    ],

})
export class CanchasModule { }
