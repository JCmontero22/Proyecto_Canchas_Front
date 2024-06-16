  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GetAllCanchas } from '../interfaces/get-all-canchas';
import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class CanchasService {

      public url: string = environment.urlCanchas;

      constructor(private httCanchas: HttpClient) { }

      consultarListadoCanchas():Observable<GetAllCanchas>{
          return this.httCanchas.get<GetAllCanchas>(this.url);
      }
  }
