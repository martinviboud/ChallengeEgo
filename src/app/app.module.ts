import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutosComponent } from './components/autos/autos.component';
import { FichaTecnicaComponent } from './components/ficha-tecnica/ficha-tecnica.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { HttpClientModule } from '@angular/common/http';
// ROUTES
import { APPROUTING } from './app.routes';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ImgPipe } from './pipes/img.pipe';
import { SoloAutosComponent } from './components/autos/solo-autos/solo-autos.component';
import { PickupsComponent } from './components/autos/pickups/pickups.component';
import { SUVComponent } from './components/autos/suv/suv.component';
import { TodosComponent } from './components/autos/todos/todos.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    FichaTecnicaComponent,
    NavbarComponent,
    TarjetaComponent,
    ImgPipe,
    SoloAutosComponent,
    PickupsComponent,
    SUVComponent,
    TodosComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
