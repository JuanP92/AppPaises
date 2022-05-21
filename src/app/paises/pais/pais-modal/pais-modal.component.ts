import { Component, Input } from '@angular/core';

import { Pais } from 'src/app/interface/pais.interface';
import { PaisHTTP } from '../../../interface/pais-http.interface';

@Component({
  selector: 'app-pais-modal',
  templateUrl: './pais-modal.component.html',
  styles: [
  ]
})
export class PaisModalComponent {

  @Input() pais!:PaisHTTP;

  /*
  @Input() pais:Pais={
    nombre: "",
    bandera: "",
    poblacion: 0,
    idioma: "",
    descripcion: "",
    capital: "",
    masPoblada: "",
    escudo: "",
    moneda:""
  };
  */
  constructor() { }

}
