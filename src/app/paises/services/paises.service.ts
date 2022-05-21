import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisHTTP } from '../../interface/pais-http.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  apiURL:string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPaises(termino: string): Observable<PaisHTTP[]>{
      const url = `${ this.apiURL }/name/${ termino }`;
      return this.http.get<PaisHTTP[]>(url);
  }

  paisesAll():Observable<PaisHTTP[]>{
    const url = `${ this.apiURL }/all`;
    return this.http.get<PaisHTTP[]>(url);
  }

}
