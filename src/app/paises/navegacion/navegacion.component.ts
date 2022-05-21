import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styles: [
  ]
})
export class NavegacionComponent {

  @Input() paginas: number = 0;

  @Output() onPaisPagina: EventEmitter<number> = new EventEmitter();

  paginaActiva: number = 1;

  @ViewChild('pagina1') pActiva!: ElementRef;
  @ViewChild('previus') previus!: ElementRef;
  @ViewChild('next') next!: ElementRef;

  @ViewChildren('pagina') etPaginas!: QueryList<ElementRef>;

  constructor() { }

  crearNavegacion() {

    return new Array(this.paginas);
  }

  cambiarPagina(dato: string) {
    let numero = parseInt(dato);
    if (numero === this.paginaActiva) {
      return;
    }
    let d = document.getElementById("pagina-" + dato);
    let p = document.getElementById("pagina-" + this.paginaActiva);
    d?.setAttribute("Class", "page-item active");
    p?.setAttribute("Class", "page-item");
    this.paginaActiva = numero;
    let pre = document.getElementById("previous");
    let next = document.getElementById("next");
    if (this.paginaActiva === 1) {
      pre?.setAttribute("Class", "page-item disabled");
    } else {
      pre?.setAttribute("Class", "page-item");
    }
    if (this.paginaActiva === this.paginas) {
      next?.setAttribute("Class", "page-item disabled");
    } else {
      next?.setAttribute("Class", "page-item");
    }
    this.onPaisPagina.emit(numero);
  }

  cambiarPagina2(pagina: number) {
    let array = this.etPaginas.toArray();
    let d = array[pagina - 1];
    let p = array[this.paginaActiva - 1];
    d.nativeElement.setAttribute("Class", "page-item active");
    p.nativeElement.setAttribute("Class", "page-item");
    this.paginaActiva = pagina;
    if (this.paginaActiva === 1) {
      this.previus.nativeElement.setAttribute("Class", "page-item disabled");
    } else {
      this.previus.nativeElement.setAttribute("Class", "page-item");
    }
    if (this.paginaActiva === this.paginas) {
      this.next.nativeElement.setAttribute("Class", "page-item disabled");
    } else {
      this.next.nativeElement.setAttribute("Class", "page-item");
    }
    this.onPaisPagina.emit(pagina);
  }

  cambiarPagina3(pagina: number) {
    this.paginaActiva = pagina;
    this.onPaisPagina.emit(pagina);
  }

}
