import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit{


  pokemon! : Pokemon

  constructor(private pokeService: PokeService, private activatedRoute : ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => {
         return this.pokeService.getDetallePokemon(id)
        }
      )
    )
    .subscribe(pokemon => {
      this.pokemon = pokemon;
    })
    
    //this.pokeService.getDetallePokemon()
  }



}
