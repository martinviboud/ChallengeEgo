import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(img: string ): string {
    if(img == undefined){
      return;
    }  
    return `http://challenge.agenciaego.tech${img}`;
  }

}
