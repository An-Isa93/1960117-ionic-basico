import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  tareas=[
    {
      titulo: 'Llevar a Bruno al veterinario',
      fecha:'05/24'
    },
    {
      titulo: 'Recordar Tarea de Aplicaciones Moviles',
      fecha:'05/24'
    }
  ]
}
