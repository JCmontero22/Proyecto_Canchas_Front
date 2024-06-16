import { Component, OnInit } from '@angular/core';
import { InicioSerivcesService } from '../../services/inicio-serivces.service';
import { GetAllPublicaciones } from '../../interfaces/get-all-publicaciones';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit{

    public dataPublicaciones!: GetAllPublicaciones;
    constructor(private httpIncio: InicioSerivcesService){}

    ngOnInit(): void {
        this.consultaPublicaciones();
    }

    consultaPublicaciones():void{
        this.httpIncio.consultaPublicaciones().subscribe(publicaciones =>{
            if (publicaciones.error == false) {
                this.dataPublicaciones = publicaciones;
            }
        });
    }

}
