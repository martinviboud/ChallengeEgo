import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/interfaces/modelo.interface';
import { AutosComponent } from '../autos.component';

@Component({
  selector: 'app-solo-autos',
  templateUrl: './solo-autos.component.html',
  styleUrls: ['./solo-autos.component.css']
})
export class SoloAutosComponent implements OnInit {
  modelos: Modelo[];
  constructor(private father: AutosComponent) { }

  ngOnInit(): void {
    // this.modelos = this.padre.modelos.filter(modelo => modelo.segment === 'Autos');
    this.modelos = this.father.modelos;
    
      

  }

}