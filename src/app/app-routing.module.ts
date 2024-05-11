import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TareaDetallesComponent } from './tarea-detalles/tarea-detalles.component';

const routes: Routes = [
  {
    path: 'lista-tareas',
    component:ListaTareasComponent
  },
  {
    path: '',
    redirectTo: 'lista-tareas',
    pathMatch: 'full'
  },
  {
    path: 'tarea-detalle/:id',
    component: TareaDetallesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
