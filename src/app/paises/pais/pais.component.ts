import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Pais } from '../../interface/pais.interface';
import { PaisHTTP } from '../../interface/pais-http.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent  {

  /*
  @Input() pais: Pais={
    nombre: "",
    bandera: "",
    poblacion: 0,
    idioma: "",
    descripcion: "",
    capital: "",
    masPoblada: "",
    escudo: "",
    moneda:"",
    visibilidad: false
  };
  */

  @Input() pais!:PaisHTTP;

  @Output() onPaisModal: EventEmitter<PaisHTTP> = new EventEmitter();

  constructor() { }

  verMas(){
    this.onPaisModal.emit(this.pais);
  }

}
