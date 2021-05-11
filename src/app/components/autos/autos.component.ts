import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/interfaces/modelo.interface';
import { ModelosService } from '../../services/modelos.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  mouseOver1: boolean = false;
  mouseOver2: boolean = false;
  modelos: Modelo[];

  constructor(private servicio: ModelosService) {
  }
  ngOnInit(): void {
  this.getAutos();
  }
  getAutos(){
    this.servicio.getModels().subscribe(data => {
      this.modelos = data;
    })
    }
  // PARA VOLVER A ORDENARLO COMO ESTABA
  deNada(){
    this.modelos.sort( (a, b) => a.id - b.id );
  }

  deMasaMenosP(){
    this.modelos.sort( (a, b) =>{
      return b.price - a.price;
    })
  }
  deMenosaMasp(){
    this.modelos.sort( (a, b) =>{
      return a.price - b.price;
    })
  }
  deMasaMenosA(){
    this.modelos.sort( (a, b) =>{
      return b.year - a.year;
    })
  }
  deMenosaMasA(){
    this.modelos.sort( (a, b) =>{
      return a.year - b.year;
    })
  }
}
