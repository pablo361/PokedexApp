import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

 
  //value es el valor que recibo, el objeto al que transformo
  transform(value: string): string {
    console.log('la imagen se procesó',value);

      return `/assets/pokemonTypes/${value}.svg`;
    }
   
  

}
