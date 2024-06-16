  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GetAllNegocios } from '../interfaces/get-all-negocios';

  @Injectable({
    providedIn: 'root'
  })
  export class NegociosService {

      public url: string = environment.urlNegocios;

      constructor(private httpNegocios: HttpClient) { }

      consultaListadoNegocios():Observable<GetAllNegocios>{
          return this.httpNegocios.get<GetAllNegocios>(this.url);
      }
  }
