import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: "full"},
    {path: 'inicio', loadChildren: () => import ('./inicio/inicio.module').then(iR => iR.InicioModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
