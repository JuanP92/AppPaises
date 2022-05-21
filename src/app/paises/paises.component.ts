import { Component, ViewChildren, QueryList, OnInit} from '@angular/core';


import { Pais } from '../interface/pais.interface';
import { PaisComponent } from './pais/pais.component';
import { PaisHTTP } from '../interface/pais-http.interface';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit{

  /*
  paises: Pais[] = [
      {
        nombre: 'China',
        bandera:
          'https://media.istockphoto.com/vectors/china-flag-vector-graphic-rectangle-chinese-flag-illustration-china-vector-id1220747626?k=20&m=1220747626&s=170667a&w=0&h=u8OqDcJhELiBuGHhGviVYmonADx2UTcZLCFGPn71tRY=',
        poblacion: 1415943000,
        idioma: ' Chino mandarín',
        descripcion:
          'La República Popular China, mayormente conocida como China, es un país soberano de Asia Oriental. Es el país más poblado del mundo, con más de 1400 millones de habitantes, y la primera potencia económica mundial por PIB en términos de paridad de poder adquisitivo.',
        capital: 'Pekín',
        masPoblada: 'Shanghái',
        escudo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/National_Emblem_of_the_People%27s_Republic_of_China_%282%29.svg/146px-National_Emblem_of_the_People%27s_Republic_of_China_%282%29.svg.png',
        moneda: 'Renminbi',
        visibilidad: true
      },
      {
        nombre: 'India',
        bandera: 'https://www.banderas-mundo.es/data/flags/w702/in.png',
        poblacion: 1408395000,
        idioma: 'Hindi e inglés',
        descripcion:
          'La India, oficialmente República de la India, es un país soberano ubicado en el sur del continente asiático. Con sus 1331 millones de habitantes, es el segundo país del mundo por población. Su superficie es de 3 287 263 km², lo cual lo ubica en el séptimo lugar entre los países más extensos del planeta.',
        capital: 'Nueva Delhi',
        masPoblada: 'Bombay',
        escudo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/97px-Emblem_of_India.svg.png',
        moneda: 'Rupia india',
        visibilidad: true
      },
      {
        nombre: 'Estados Unidos',
        bandera: 'https://www.banderas-mundo.es/data/flags/w702/us.png',
        poblacion: 332250000,
        idioma: 'Ninguno a nivel federal',
        descripcion:
          'Estados Unidos, cuyo nombre oficial es Estados Unidos de América, es un país soberano constituido en una república federal constitucional compuesta por cincuenta estados y un distrito federal. La mayor parte del país se ubica en el medio de América del Norte.',
        capital: 'Washington D. C.',
        masPoblada: 'Nueva York',
        escudo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg/158px-Great_Seal_of_the_United_States_%28obverse%29.svg.png',
        moneda: 'Dólar estadounidense',
        visibilidad: true
      },
      {
        nombre: 'Indonesia',
        bandera: 'https://www.banderas-mundo.es/data/flags/w702/id.png',
        poblacion: 275789000,
        idioma: ' Indonesio',
        descripcion:
          'Indonesia, oficialmente la República de Indonesia, es un país insular ubicado entre el Sudeste Asiático y Oceanía.',
        capital: 'Yakarta (futura Nusantara)',
        masPoblada: 'Yakarta',
        escudo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/National_emblem_of_Indonesia_Garuda_Pancasila.svg/145px-National_emblem_of_Indonesia_Garuda_Pancasila.svg.png',
        moneda: 'Rupia indonesia',
        visibilidad: false
      },
      {
        nombre: 'Pakistan',
        bandera: 'https://www.banderas-mundo.es/data/flags/w702/pk.png',
        poblacion: 235409000,
        idioma: 'Urdu e inglés',
        descripcion:
          'Pakistán o Paquistán, cuyo nombre oficial es República Islámica de Pakistán , es un Estado soberano ubicado en el sur de Asia. Con una población de más de 200 millones de personas, es el quinto país más poblado del mundo.',
        capital: 'Islamabad',
        masPoblada: 'Karachi',
        escudo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/State_emblem_of_Pakistan.svg/138px-State_emblem_of_Pakistan.svg.png',
        moneda: 'Rupia pakistaní PKR',
        visibilidad: false
      },
      {
        nombre: 'Brasil',
        bandera: 'https://www.banderas-mundo.es/data/flags/w702/br.png',
        poblacion: 215705000,
        idioma: 'Inglés',
        descripcion:
          'Nigeria, oficialmente República Federal de Nigeria, es un país de África occidental, que limita con Níger al norte, con Chad en el nordeste, con Camerún en el este y con Benín en el oeste. Su costate y con Benín en el oeste. Su costa sur está localizada en el Golfo de Guinea en el Océano Atlántico.',
          capital: 'Abuya',
          masPoblada: 'Lagos',
          escudo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_Nigeria.svg/165px-Coat_of_arms_of_Nigeria.svg.png',
          moneda: ' Naira',
          visibilidad: false
        },
        {
          nombre: 'Nigeria',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/ng.png',
          poblacion: 215512000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Bangladés',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/bd.png',
          poblacion: 174741000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Rusia',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/ru.png',
          poblacion: 145306000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'México',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/mx.png',
          poblacion: 128844000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Japón',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/jp.png',
          poblacion: 125065000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Filipinas',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/ph.png',
          poblacion: 1129117000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Republica Democratica del Congo',
          bandera:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1200px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png',
          poblacion: 109087000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Etiopía',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/et.png',
          poblacion: 105786000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Egipto',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/eg.png',
          poblacion: 104999000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Vietnam',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/vn.png',
          poblacion: 99549000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Irán',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/ir.png',
          poblacion: 85933000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Turquía',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/tr.png',
          poblacion: 85215000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Alemania',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/de.png',
          poblacion: 83445000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Tailandia',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/th.png',
          poblacion: 68710000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        },
        {
          nombre: 'Reino Unido',
          bandera: 'https://www.banderas-mundo.es/data/flags/w702/gb.png',
          poblacion: 67838000,
          idioma: '',
          descripcion: '',
          capital: '',
          masPoblada: '',
          escudo: '',
          moneda: '',
        }
  ];
*/

  paises:PaisHTTP[] = [];
  /*
  paisSelect: Pais = {
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

  paisSelect!:PaisHTTP;

  paisesPage:number = 1;

  cantidadPages!:number;

  @ViewChildren('pais') etPaises!: QueryList<PaisComponent>;

  constructor(private servicio:PaisesService) {
  }
  ngOnInit(): void {
    this.servicio.paisesAll().subscribe(resp => {
      for(let i=0;i<30;i++){
        this.paises.push(resp[i]);
        if(i<3){
          this.paises[i].visibilidad = true;
        }
      }
      this.paisSelect = resp[0];
      this.cantidadPages = Math.ceil(this.paises.length/3);
      console.log(this.paises.length);

    });

  }


  seleccionarPais(argumento: PaisHTTP){
    this.paisSelect=argumento;
  }

  cambiarPagina(pagina:number){
    //let datos = document.getElementsByClassName("pais");
    let cont = (this.paisesPage-1)*3;
    let cont2 = (pagina-1)*3;
    for(let i=0;i<3;i++){
      if(cont<this.paises.length){
        this.paises[cont].visibilidad = false;
        //datos[cont].nativeElement.setAttribute("Class","pais card border-primary mb-3 p-3 d-none");
      }
      if(cont2<this.paises.length){
        this.paises[cont2].visibilidad = true;
        //datos[cont2].nativeElement.setAttribute("Class","pais card border-primary mb-3 p-3");
      }
      cont++;
      cont2++;
    }
    this.paisesPage = pagina;
  }

}
