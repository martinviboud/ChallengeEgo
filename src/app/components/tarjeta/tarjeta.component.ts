import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from '../../interfaces/modelo.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() modelo: Modelo;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickenModelo(id:number){
    this.router.navigate(['/ficha', id]);
  }
}
