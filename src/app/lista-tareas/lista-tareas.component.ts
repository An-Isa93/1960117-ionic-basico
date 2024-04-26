import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionTareasService } from '../action-tareas.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { Tarea } from '../modulos/tarea';
import { TareaDetallesComponent } from '../tarea-detalles/tarea-detalles.component';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent  implements OnInit {
  private idTarea=0;
  constructor(private modalController: ModalController, private tareaServicio:ActionTareasService) { }
  tareaServicioArray: Tarea[]=this.tareaServicio.tareas;
  tarea: Tarea = {
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
  
  async verDetalles(tarea: Tarea) {
    const modal = await this.modalController.create({
      component: TareaDetallesComponent,
      componentProps: {
        tarea: tarea // Pasa la tarea seleccionada como parámetro al modal
      }
    });
    return await modal.present();
  }

  eliminarTarea(idTareas:number){
    this.tareaServicio.deleteTareas(idTareas);
  }
 
}
