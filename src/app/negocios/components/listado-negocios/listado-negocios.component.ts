  import { Component } from '@angular/core';
import { NegociosService } from '../../services/negocios.service';
import { GetAllNegocios } from '../../interfaces/get-all-negocios';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-listado-negocios',
    templateUrl: './listado-negocios.component.html',
    styleUrls: ['./listado-negocios.component.css']
  })
  export class ListadoNegociosComponent {
      public listadoNegocios!: GetAllNegocios;

      constructor(private httNegocio: NegociosService, private router:Router){}

      ngOnInit(): void {
          this.consultaListadoNegocios();
      }

      consultaListadoNegocios():void{
          this.httNegocio.consultaListadoNegocios().subscribe(listaNegocios => {
              console.log(listaNegocios);

              if (listaNegocios.error == false) {
                  this.listadoNegocios = listaNegocios;
              }
          });
      }

      canchas(idNegocio: number):void{
          this.router.navigate(['negocios/listadoCanchas'], {state:{'idNegocio':idNegocio}});
      }
  }
