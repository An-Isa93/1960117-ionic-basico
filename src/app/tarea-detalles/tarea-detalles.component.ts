import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionTareasService } from '../action-tareas.service';
import { Tarea } from '../modulos/tarea';

@Component({
  selector: 'app-tarea-detalles',
  templateUrl: './tarea-detalles.component.html',
  styleUrls: ['./tarea-detalles.component.scss'],
})
export class TareaDetallesComponent  implements OnInit {
  
 // @Input() tarea: Tarea | undefined;
  
 tarea: Tarea | undefined;


  constructor(private ruta : ActivatedRoute, private tareaS: ActionTareasService) { }
 
  ngOnInit() {
    const idTarea = Number(this.ruta.snapshot.params['id']); // Captura el id de la tarea de la URL
    this.tarea = this.tareaS.getTarea(idTarea); 
  }
 
 
 

}
