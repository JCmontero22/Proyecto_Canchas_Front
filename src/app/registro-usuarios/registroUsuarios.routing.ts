import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './page/registro/registro.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'registroUsuarios', component: RegistroComponent},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class registroUsuarioRouting{}
