import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("AppComponent: Constructor");
  }
  ngOnChanges(){
    console.log("AppComponent: OnChanges");
  }
  ngOnInit() {
    console.log("AppComponent: OnInit");
  }
  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }
  ngAfterContentInit(){
   console.log("AppComponent: AfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("AppComponent: AfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("AppComponent: AfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("AppComponent: AfterViewChecked");
  }
  title: string= 'Pagina Principal';
  hazmeClic(): void{
    alert("Hiciste clic :D");
  }
 /* ngOnInit (){}
  verdadero: boolean=true;*/
 /* tarjetas= [
   
    {
      nombre:'Arturo Alejandro Arellano',
      numero: 456789123456,
      vigenciaInicio:'08',
      vigenciaFin:'27',
      CVV:'088'
    },
    {
      nombre:'Cesar Daniel Vidal',
      numero: 490578645126,
      vigenciaInicio:'08',
      vigenciaFin:'27',
      CVV:'088'
    }
  ];//mis tarjetas */
   imgUrl: string="https://i.pinimg.com/originals/57/61/5b/57615b8c0092a66c1d4058b1692955cc.gif"
   nombreAlumno: string='';
  }
