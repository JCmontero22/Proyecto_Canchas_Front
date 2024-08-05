import { Component, OnInit } from '@angular/core';
import { DataUserLoginService } from './core/services/data-user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'front_AdministracionCanchas';

    public login: boolean = false;

    constructor(private dataUsuario: DataUserLoginService){}
    ngOnInit(): void {
        if (this.dataUsuario.dataUsuario != '') {
            this.login = true;
        }else{
            this.login = false;
        }
    }
}
