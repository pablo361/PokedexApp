import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _getOptionScrollPosition } from '@angular/material/core';
import { combineLatest, Observable } from 'rxjs';
import { Pokemon,Type } from '../interfaces/pokemon.interface';
import { PokemonDescripcion } from '../interfaces/pokemonDescripcion.interface';
import { PokemonLista, Result } from '../interfaces/pokemonLista.interface';
import { PokemonTipo } from '../interfaces/pokemonTipo.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {


url : string = 'https://pokeapi.co/api/v2/';


  constructor(private http: HttpClient) { }


  getPokemons(limit: number): Observable<PokemonLista>{
    const urlPeticion = `${this.url}pokemon?limit=${limit}`
    return this.http.get<PokemonLista>(urlPeticion);
  }

  getDetallePokemon(name: string): Observable<Pokemon>{
    const urlPeticion = `${this.url}pokemon/${name}`
    return this.http.get<Pokemon>(urlPeticion);
  }


  getImagenPokemon(resultados: Result[]): Observable<Pokemon[]>{
    const dataPokemones  : Observable<Pokemon>[] = [];
    resultados.forEach(resultado => {
      dataPokemones.push(this.http.get<Pokemon>(resultado.url));
    })
   
    return combineLatest(dataPokemones);
  } 


  getPokemonDescripcion(name : string): Observable<PokemonDescripcion>{
    const urlPeticion = `${this.url}pokemon-species/${name}`
    return this.http.get<PokemonDescripcion>(urlPeticion);
  }

  getPokemonTipo(name : string): Observable<PokemonTipo>{
    const urlPeticion = `${this.url}type/${name}`
    return this.http.get<PokemonTipo>(urlPeticion);

  }


  getTipos(tipos: Type[]): Observable<PokemonTipo[]>{
    //un array de observables del tipo PokemonTipo
    const peticiones : Observable<PokemonTipo>[] = [];
    tipos.forEach(tipos => {
      //hago la peticion con cada uno de los tipos de pokemon
      const peticion = this.getPokemonTipo(tipos.type.name);
      //los coloco en el array
      peticiones.push(peticion);
    });
    //combineLatests combina los valores de todos los observables y CREA UN SOLO OBSERVABLE
    return combineLatest(peticiones)
  }
}
