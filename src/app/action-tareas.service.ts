import { Injectable } from '@angular/core';
import { Tarea } from './modulos/tarea';

@Injectable({
  providedIn: 'root'
})
export class ActionTareasService {

  constructor() { }
  tareas:Tarea[]=[];

  getTareas(){
    return this.tareas;
  }
  agregarTarea(tareaNueva: Tarea){
    this.tareas.push(tareaNueva);
  }
  deleteTareas(id:number){
    this.tareas.splice(id,1);
  }
}
