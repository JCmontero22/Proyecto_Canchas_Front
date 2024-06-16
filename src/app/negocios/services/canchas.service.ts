  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GetAllCanchasNegocios } from '../interfaces/get-all-canchas-negocios';

  @Injectable({
    providedIn: 'root'
  })
  export class CanchasService {

      private url:string = environment.urlCanchas;

      constructor(private httpCanchas: HttpClient) { }

      consultaCanchasNegocios(idNegocio: number):Observable<GetAllCanchasNegocios>{
          let urlFinal = this.url + idNegocio;
          return this.httpCanchas.get<GetAllCanchasNegocios>(urlFinal);
      }
  }
