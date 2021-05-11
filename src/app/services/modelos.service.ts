import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modelo } from '../interfaces/modelo.interface';
import { ModeloDetalle } from '../interfaces/modeloDetalle.interface';



@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  constructor(private http: HttpClient) { }

  getModels(){
    return this.http.get<Modelo[]>('https://challenge.agenciaego.tech/models');
  }
  getModelDetail(id: number){
    return this.http.get<ModeloDetalle>('https://challenge.agenciaego.tech/models/'+id);
  }

  
}
