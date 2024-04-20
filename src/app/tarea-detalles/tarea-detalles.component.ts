import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../modulos/tarea';

@Component({
  selector: 'app-tarea-detalles',
  templateUrl: './tarea-detalles.component.html',
  styleUrls: ['./tarea-detalles.component.scss'],
})
export class TareaDetallesComponent  implements OnInit {
  
  @Input() tarea: Tarea | undefined;
  

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  cerrarModal() {
    this.modalController.dismiss();
  }
}
