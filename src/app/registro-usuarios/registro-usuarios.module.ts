import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './page/registro/registro.component';
import { registroUsuarioRouting } from './registroUsuarios.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    registroUsuarioRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroUsuariosModule { }
