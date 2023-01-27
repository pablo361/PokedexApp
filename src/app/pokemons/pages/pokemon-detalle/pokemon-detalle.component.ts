import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, switchMap, tap, map } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonDescripcion } from '../../interfaces/pokemonDescripcion.interface';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit{


  pokemon! : Pokemon;
  pokemonDescripcion! : PokemonDescripcion;
  pokeId : string = "";


  constructor(private pokeService: PokeService, private activatedRoute : ActivatedRoute){}


  color = "primary";
  ngOnInit(): void {
    /* this.activatedRoute.params
    .pipe(
      switchMap(({id}) => {
         return this.pokeService.getDetallePokemon(id)
        }
      )
    )
    .subscribe(pokemon => {
      this.pokemon = pokemon;
      this.pokeService.getPokemonDescripcion(this.pokemon.id)

      .subscribe(pokeDesc => {
        console.log(pokeDesc);
        this.pokemonDescripcion = pokeDesc;
        
      });
    }); */
    this.activatedRoute.params.forEach(param => this.pokeId = param['id']);
    console.log(this.pokeId);   
    forkJoin(
      [this.pokeService.getDetallePokemon(this.pokeId),
      this.pokeService.getPokemonDescripcion(this.pokeId)]
    )
    .subscribe(([pokemon,descripcion]) => {
      this.pokemon = pokemon;
      this.pokemonDescripcion = descripcion;
      
      
    })
    

    
 
     
    
    
    //this.pokeService.getDetallePokemon()
  }


  darColorChip(typo: string) : string{
    return `var(--${typo})`;
  }



}
