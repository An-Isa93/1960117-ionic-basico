import { Injectable } from '@angular/core';
import { Tarea } from './modulos/tarea';

@Injectable({
  providedIn: 'root'
})
export class ActionTareasService {
  private contadorId = 1;
  constructor() { }
  tareas:Tarea[]=[];


  agregarTarea(tareaNueva: Tarea): void{
    tareaNueva.id = this.contadorId++;
    this.tareas.push(tareaNueva);
    console.log(tareaNueva.id);
  }
  deleteTareas(id:number){
    this.tareas.splice(id,1);
  }
  getTarea(id:number){
    return this.tareas[id]
  }
}
