import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.scss'],
})
export class ListaTarjetasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
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
  ]

}
