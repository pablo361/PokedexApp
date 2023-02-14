import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, take, tap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { Lista, Result } from '../../interfaces/pokemonLista.interface';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  pokemones: Result[] = []

  //imagenes pokemons
  imagenes: string[] = []

  urlImagen: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

  region = new FormControl('');

  regiones = [
    {
      id: 1,
      name: 'Kanto'
    },
    {
      id: 2,
      name: 'Johto'
    },
    {
      id: 3,
      name: 'Hoenn'
    },
    {
      id: 4,
      name: 'Sinnoh'
    },
    {
      id: 5,
      name: 'Unova'
    },
    {
      id: 6,
      name: 'Kalos'
    },
    {
      id: 7,
      name: 'Alola'
    },
    {
      id: 8,
      name: 'Galar'
    },
    {
      id: 9,
      name: 'Paldea'
    },

  ]

  listaTipos: Result[] = [];

  tipo = new FormControl('');

  constructor(private pokeService: PokeService) { }


  ngOnInit(): void {
    this.pokeService.getTodosLosTipos()
    .subscribe(tipos => this.listaTipos = tipos.results)
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

      .subscribe(pokemons => {
        console.log(pokemons);

        this.pokemones = pokemons.results;
      })



  }


  cambioRegion() {
    console.log(this.region.value);
    this.pokeService.getPokemonPorRegion(this.region.value!)
      .subscribe(generation => {
        this.pokemones = generation.pokemon_species.sort((poke1, poke2) => {
          return Number(poke1.url.split('/')[6]) - Number(poke2.url.split('/')[6])


        })

      })
  }

  cambioTipo(){
    this.pokeService.getPokemonTipo(this.tipo.value!)
    .subscribe(tipo => {
      console.log(tipo);
      this.pokemones = tipo.pokemon.map(pokemon =>  pokemon.pokemon)
      
    })
    
  }
}
