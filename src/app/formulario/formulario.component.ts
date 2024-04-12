import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent  implements OnInit {
  @ViewChild('form', { static: true }) form!: NgForm; //busca el elemento form en HTML
  public tareaForm = { //Objeto que contiene las propiedades, utilizadas para almacenar los datos del formulario
    nombreTarea: '',
    descripcion: '',
    diaTarea:'',
    mesTarea:'',
    yearTarea:''
  };
  constructor() {}

  ngOnInit() {}
  submitForm(){ //Funcion para enviar el formulario
  
    if (this.form.valid) {
      console.log('Formulario enviado:', this.tareaForm);
      this.tareaForm.nombreTarea = '';
      this.tareaForm.descripcion = '';

    } else {
      console.log('El formulario no es válido');
    }
    this.form.resetForm();
  }

}
