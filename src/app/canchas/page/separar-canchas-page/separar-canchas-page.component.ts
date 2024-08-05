  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-separar-canchas-page',
    templateUrl: './separar-canchas-page.component.html',
    styleUrls: ['./separar-canchas-page.component.css']
  })
  export class SepararCanchasPageComponent implements OnInit{

      public idCancha: number = 0;

      constructor(private route: Router){
          const dataRuta = route.getCurrentNavigation();

          if (dataRuta?.extras?.state?.['idCancha']) {
              this.idCancha = dataRuta.extras.state['idCancha'];
          }
      }

      ngOnInit(): void {
          console.log(this.idCancha);
      }
  }
