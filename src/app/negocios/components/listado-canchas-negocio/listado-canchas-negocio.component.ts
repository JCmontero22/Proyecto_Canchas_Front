  import { Component, OnInit } from '@angular/core';
import { GetAllCanchasNegocios } from '../../interfaces/get-all-canchas-negocios';
import { HttpClient } from '@angular/common/http';
import { NegociosService } from '../../services/negocios.service';
import { CanchasService } from '../../services/canchas.service';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-listado-canchas-negocio',
    templateUrl: './listado-canchas-negocio.component.html',
    styleUrls: ['./listado-canchas-negocio.component.css']
  })
  export class ListadoCanchasNegocioComponent implements OnInit{

      public canchas!: GetAllCanchasNegocios;
      public idNegocio: number = 0;

      constructor(private httCanchas: CanchasService, private route:Router, private route2:Router){
          const dataRuta = route.getCurrentNavigation();
          if (dataRuta?.extras?.state?.['idNegocio']) {
              this.idNegocio = dataRuta.extras.state['idNegocio'];
          }
      }

      ngOnInit(): void {



          this.listadoCanchas();
      }

      listadoCanchas():void{
          this.httCanchas.consultaCanchasNegocios(this.idNegocio).subscribe(canchas => {
              if (canchas.error == false) {
                  this.canchas = canchas;
              }
          });
      }

      calendarioCancha(idCancha: number):void{
          this.route2.navigate(['negocios/calendarioCanchas'], {state: {'idCancha': idCancha}});
      }
  }
