import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { RouterLink } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
      HeaderComponentComponent
  ],
  imports: [
      CommonModule,
      RouterLink
  ],
  exports:[
      HeaderComponentComponent,
      FullCalendarModule
  ]
})
export class MainModule { }
