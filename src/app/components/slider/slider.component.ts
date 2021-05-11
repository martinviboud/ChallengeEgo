import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import {  ModelFeature } from '../../interfaces/modeloDetalle.interface';
import SwiperCore, {
  Pagination,
} from 'swiper/core';
SwiperCore.use([Pagination])
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() modelFeatures: ModelFeature[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container',{
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
      },
      spaceBetween: 20,
      breakpoints: {
        '350': {
          slidesPerView: 1.3,
          spaceBetween: 15
        },
        '640': {
          slidesPerView: 2.3,
          spaceBetween: 20
        },
        '800': {
          slidesPerView: 4.3,
          spaceBetween: 40
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
