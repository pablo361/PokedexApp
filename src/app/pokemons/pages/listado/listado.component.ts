import { Component, OnInit } from '@angular/core';
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

  constructor(private pokeService : PokeService){}


  ngOnInit(): void {

   this.pokeService.getPokemons(151).subscribe(pokemons =>{
    console.log(pokemons);
    
    this.pokemones = pokemons.results;
   })
  }


  
  

}
