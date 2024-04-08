import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FormularioComponent } from './formulario/formulario.component';
@NgModule({
  declarations: [AppComponent,ListaTarjetasComponent,ListaTareasComponent,FormularioComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
