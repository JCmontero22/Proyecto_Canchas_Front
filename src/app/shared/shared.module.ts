import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
      CalendarioComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule
  ],exports:[
      CalendarioComponent
  ]
})
export class SharedModule { }
