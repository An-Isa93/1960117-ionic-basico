import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionTareasService } from '../action-tareas.service';
import { Tarea } from '../modulos/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent  implements OnInit {
 tareaNueva:Tarea=
  {
    titulo:'',
    dia:0,
    mes:0,
    anio:0,
    descripcion:''
  };
 
 constructor(private modalController: ModalController, private tareaServicio:ActionTareasService) {}

 ngOnInit() {}
 submitForm(){   //Funcion para enviar el formulario
  if(this.tareaNueva.dia!=0 && this.tareaNueva.mes!=0 && this.tareaNueva.anio!=0){
    this.tareaServicio.agregarTarea(this.tareaNueva);
    this.modalController.dismiss();
  }
   else{
    alert("Formulario no valido");
   }
 }
 
 cerrarModal() {
  this.modalController.dismiss();
}
}
