import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ActionTareasService } from '../action-tareas.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { Tarea } from '../modulos/tarea';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent  implements OnInit {
  private idTarea=0;
  constructor(private modalController: ModalController, private tareaServicio:ActionTareasService, private router: Router) { }
  tareaServicioArray: Tarea[]=this.tareaServicio.tareas;
  tarea: Tarea = {
    id:0,
    titulo: '',
    dia: 0,
    mes: 0,
    anio: 0,
    descripcion: ''
  };
  ngOnInit() {}
    
  async mostrarFormulario() {
    const modal = await this.modalController.create({
      component: FormularioComponent
    });
    await modal.present();
    
  }
  
  eliminarTarea(idTareas:number){
    this.tareaServicio.deleteTareas(idTareas);
  }
 
}
