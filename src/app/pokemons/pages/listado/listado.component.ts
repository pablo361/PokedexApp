import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonLista, Result } from '../../interfaces/pokemonLista.interface';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  pokemones : Result[] = []

  //imagenes pokemons
  imagenes : string[] = []

  urlImagen : string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

  constructor(private pokeService : PokeService){}


  ngOnInit(): void {

   this.pokeService.getPokemons(151)
   /* .pipe(
    tap(pokemons => {
      console.log(pokemons);
      this.pokeService.getImagenPokemon(pokemons.results)
      .subscribe(resultados => {
        resultados.forEach(element => {
          this.imagenes.push(element.sprites.other?.['official-artwork'].front_default!);
        });
        
      })
      
    })
   ) */
   
   .subscribe(pokemons =>{
    console.log(pokemons);
    
    this.pokemones = pokemons.results;
   })
  }





  
  

}
