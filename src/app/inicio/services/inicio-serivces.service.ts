    import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GetAllPublicaciones } from '../interfaces/get-all-publicaciones';

    @Injectable({
      providedIn: 'root'
    })
    export class InicioSerivcesService {

        public url:string = environment.urlInicio;

        constructor(private httpInicio: HttpClient ) { }

        consultaPublicaciones():Observable<GetAllPublicaciones>{
            return this.httpInicio.get<GetAllPublicaciones>(this.url);
        }
    }
