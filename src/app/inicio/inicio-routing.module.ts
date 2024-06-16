import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './page/inicio-page/inicio-page.component';


const routes: Routes = [
    {path: 'publicaciones', component: InicioPageComponent},
    //, canActivate: [sesionGuardsGuard, routingGuard]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class inicioRouting { }
