import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelosService } from '../../services/modelos.service';
import { ModeloDetalle, ModelFeature, ModelHighlight } from '../../interfaces/modeloDetalle.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.css']
})
export class FichaTecnicaComponent implements OnInit {
  miModelo: ModeloDetalle;
  modelFeatures: ModelFeature[];
  modelHighlights: ModelHighlight[];
  constructor(private activatedRoute: ActivatedRoute,
              private service: ModelosService,
              private location: Location ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    const id = this.activatedRoute.snapshot.params.id;
    this.service.getModelDetail(id).subscribe(data => {
      this.miModelo = data;
      this.modelFeatures = data.model_features; 
      this.modelHighlights = data.model_highlights;
    })
  }  
  back(){
    this.location.back();
  }
}
