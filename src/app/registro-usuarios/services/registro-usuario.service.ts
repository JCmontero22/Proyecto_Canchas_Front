import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SetRegistroUsuarios } from '../interfaces/set-registro-usuarios';
import { GetRegistroUsuarios } from '../interfaces/get-registro-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

    public url = environment.urlRegistroUsuario;

    constructor(private httRegistro: HttpClient) { }


    setRegistroUsuario(data: SetRegistroUsuarios):Observable<GetRegistroUsuarios>{
        return this.httRegistro.post<GetRegistroUsuarios>(this.url, data);
    }
}
