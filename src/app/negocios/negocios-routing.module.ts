import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegociosComponent } from './page/negocios/negocios.component';
import { CanchasComponent } from './page/canchas/canchas.component';


const routes: Routes = [
    {path: 'listadoNegocios', component: NegociosComponent},
    {path: 'listadoCanchas', component: CanchasComponent},
    /* {path: 'separarCanchas', component: SepararCanchasPageComponent} */ //, canActivate: [sesionGuardsGuard, routingGuard]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class negociosRouting { }
