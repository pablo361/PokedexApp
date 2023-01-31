import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenesPokemon'
})
export class ImagenesPokemonPipe implements PipeTransform {

  transform(value: string): string {

    let id = value.split('/')[6];
    
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

}
