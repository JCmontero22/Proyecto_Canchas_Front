import { Component, OnInit } from '@angular/core';
import { GetAllCanchas } from '../../interfaces/get-all-canchas';
import { CanchasService } from '../../services/canchas.service';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-listado-canchas',
    templateUrl: './listado-canchas.component.html',
    styleUrls: ['./listado-canchas.component.css']
  })
  export class ListadoCanchasComponent implements OnInit{

      public listadoCanchas!: GetAllCanchas;
      constructor(private httCanchas: CanchasService, private router:Router){}

      ngOnInit(): void {
          this.consultaListadoCanchas();
      }

      consultaListadoCanchas():void{
          this.httCanchas.consultarListadoCanchas().subscribe(listadoCanchas => {
              if (listadoCanchas.error == false) {
                  this.listadoCanchas = listadoCanchas;
              }
          });
      }

      abrirSeparar(idCancha: number):void{
          this.router.navigate(['canchas/separarCanchas'], {state: {'idCancha':idCancha}});
      }

  }
