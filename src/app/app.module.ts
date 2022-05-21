import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';
import { PaisComponent } from './paises/pais/pais.component';
import { PaisModalComponent } from './paises/pais/pais-modal/pais-modal.component';
import { NavegacionComponent } from './paises/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    PaisComponent,
    PaisModalComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
