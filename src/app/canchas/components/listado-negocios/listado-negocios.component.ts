  import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { GetAllNegocios } from 'src/app/negocios/interfaces/get-all-negocios';
import { NegociosService } from 'src/app/negocios/services/negocios.service';

  @Component({
    selector: 'app-listado-negocios',
    templateUrl: './listado-negocios.component.html',
    styleUrls: ['./listado-negocios.component.css']
  })
  export class ListadoNegociosComponent implements OnInit{

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

  }
