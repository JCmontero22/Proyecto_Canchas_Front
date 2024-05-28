import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header-component/header-component.component';



@NgModule({
  declarations: [
      HeaderComponentComponent
  ],
  imports: [
      CommonModule
  ],
  exports:[
      HeaderComponentComponent
  ]
})
export class MainModule { }
