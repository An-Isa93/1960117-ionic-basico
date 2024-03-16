import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  ngOnInit (){}
  verdadero: boolean=false;
  tarjetas= [
   
    {
      nombre:'Arturo Alejandro Arellano',
      numero: 456789123456,
      vigenciaInicio:'08',
      vigenciaFin:'27',
      CVV:'088'
    },
    {
      nombre:'Cesar Daniel Vidal',
      numero: 490578645126,
      vigenciaInicio:'08',
      vigenciaFin:'27',
      CVV:'088'
    }
  ];//mis tarjetas 

}
