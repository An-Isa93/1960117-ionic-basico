import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../modulos/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent  implements OnInit {
  @ViewChild('form', { static: true }) form!: NgForm; //busca el elemento form en HTML
  tareaNueva: Tarea = { //Objeto que contiene las propiedades, utilizadas para almacenar los datos del formulario
   titulo: '',
   descripcion: '',
   dia:0,
   mes:0,
   anio:0
 };
 constructor(private modalController: ModalController) {}

 ngOnInit() {}
 submitForm(){ //Funcion para enviar el formulario
  this.modalController.dismiss(this.tareaNueva);
  console.log("Formulario enviado", this.tareaNueva);
 }
 
 

}
