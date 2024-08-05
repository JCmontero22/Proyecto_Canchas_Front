    import { Component, OnInit } from '@angular/core';
import { InicioSerivcesService } from '../../services/inicio-serivces.service';

    @Component({
      selector: 'app-inicio-page',
      templateUrl: './inicio-page.component.html',
      styleUrls: ['./inicio-page.component.css']
    })
    export class InicioPageComponent implements OnInit{


        constructor(private httpIncio: InicioSerivcesService){}

        ngOnInit(): void {
            this.consultaPublicaciones();
        }

        consultaPublicaciones():void{
            this.httpIncio.consultaPublicaciones().subscribe(publicaciones =>{
                console.log(publicaciones);
            });
        }

    }
