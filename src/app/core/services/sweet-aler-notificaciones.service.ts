import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class SweetAlerNotificacionesService {

  constructor() { }

  mostrarAlerta(icon: string, titulo: string, mensaje: string){
      Swal.fire({
          icon:   icon as 'success' | 'error' | 'warning' | 'info' | 'question',
          title:  titulo,
          text:   mensaje
      });
  }
}
