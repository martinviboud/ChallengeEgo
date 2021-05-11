import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/interfaces/modelo.interface';
import { AutosComponent } from '../autos.component';

@Component({
  selector: 'app-pickups',
  templateUrl: './pickups.component.html',
  styleUrls: ['./pickups.component.css']
})
export class PickupsComponent implements OnInit {

  modelos: Modelo[];
  constructor(private father: AutosComponent) { }
  ngOnInit(): void {  
    this.modelos = this.father.modelos;
  }
}
