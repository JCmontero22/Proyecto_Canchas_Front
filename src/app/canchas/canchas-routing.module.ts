import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanchasPageComponent } from './page/canchas-page/canchas-page.component';
import { SepararCanchasPageComponent } from './page/separar-canchas-page/separar-canchas-page.component';
import { ListadoNegociosComponent } from './components/listado-negocios/listado-negocios.component';


const routes: Routes = [
    {path: 'listadoNegocios', component: ListadoNegociosComponent},
    {path: 'separarCanchas', component: SepararCanchasPageComponent} //, canActivate: [sesionGuardsGuard, routingGuard]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class canchasRouting { }
