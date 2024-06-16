import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: "full"},
    {path: 'inicio', loadChildren: () => import ('./inicio/inicio.module').then(iR => iR.InicioModule)},
    {path: 'canchas', loadChildren: () => import ('./canchas/canchas.module').then(iR => iR.CanchasModule)},
    {path: 'negocios', loadChildren: () => import ('./negocios/negocios.module').then(iR => iR.NegociosModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
