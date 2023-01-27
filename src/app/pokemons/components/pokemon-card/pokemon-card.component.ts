import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { Result } from '../../interfaces/pokemonLista.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input() pokemon! : Result;
  @Input() imagenUrl: number = 0

}
