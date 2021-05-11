import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/interfaces/modelo.interface';
import { AutosComponent } from '../autos.component';

@Component({
  selector: 'app-suv',
  templateUrl: './suv.component.html',
  styleUrls: ['./suv.component.css']
})
export class SUVComponent implements OnInit {

  modelos: Modelo[];
  constructor(private father: AutosComponent) { }
  ngOnInit(): void {  
    this.modelos = this.father.modelos;
  }

}
  