import { Component, OnInit } from '@angular/core';
import { Modelo } from 'src/app/interfaces/modelo.interface';
import { AutosComponent } from '../autos.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  modelos: Modelo[];
  constructor(private father: AutosComponent) { }
  ngOnInit(): void {  
    this.modelos = this.father.modelos;
  }

}
 