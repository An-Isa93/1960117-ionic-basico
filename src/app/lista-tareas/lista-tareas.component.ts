import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormularioComponent } from '../formulario/formulario.component';
import { Tarea } from '../modulos/tarea';
import { TareaDetallesComponent } from '../tarea-detalles/tarea-detalles.component';


@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent  implements OnInit {

  constructor(private modalController: ModalController, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {}
  tareaN: Tarea={
    titulo:'',
    descripcion:'',
    dia:0,
    mes:0,
    anio:0
  }
  tareas: Tarea[]=[
    {
      titulo: 'Llevar a Bruno al veterinario',
      dia:5, 
      mes:3,
      anio:2024,
      descripcion:''
    },
    {
      titulo: 'Recordar Tarea de Aplicaciones Moviles',
      dia:7, 
      mes:4,
      anio:2024,
      descripcion:''
    }
  ]

  
  async mostrarFormulario() {
    const modal = await this.modalController.create({
      component: FormularioComponent
    });
   

    modal.onDidDismiss().then((dataReturned) => {
      console.log("Datos recibidos del modal:", dataReturned);
     
        this.tareaN=dataReturned.data;
        if(this.tareaN.titulo!='' && this.tareaN.descripcion!='' &&this.tareaN.dia!=0 && this.tareaN.mes!=0 && this.tareaN.anio!=0)
        {
          this.tareas.push(this.tareaN);
          this.changeDetectorRef.detectChanges();
        }
        else{
          console.log("ERROR");
        }
      
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
 
}
