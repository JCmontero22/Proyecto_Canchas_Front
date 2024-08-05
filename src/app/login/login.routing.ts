import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'inicioLogin', component:LoginComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class loginRouting{}
