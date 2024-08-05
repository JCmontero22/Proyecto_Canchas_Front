import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: "full"},
    {path: 'inicio', loadChildren: () => import ('./inicio/inicio.module').then(iR => iR.InicioModule)},
    {path: 'canchas', loadChildren: () => import ('./canchas/canchas.module').then(iR => iR.CanchasModule)},
    {path: 'negocios', loadChildren: () => import ('./negocios/negocios.module').then(iR => iR.NegociosModule)},
    {path: 'registro', loadChildren: () => import ('./registro-usuarios/registro-usuarios.module').then(iR => iR.RegistroUsuariosModule)},
    {path: 'login', loadChildren: () => import ('./login/login.module').then(iL => iL.LoginModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
