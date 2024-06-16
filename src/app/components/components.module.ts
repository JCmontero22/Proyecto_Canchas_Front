import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
    CalendarioComponent
  ],exports: [
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule
  ]
})
export class ComponentsModule { }
