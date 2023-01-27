import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonDescripcion } from '../interfaces/pokemonDescripcion.interface';
import { PokemonLista, Result } from '../interfaces/pokemonLista.interface';

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

  getPokemonTipo(name : string): Observable<PokemonDescripcion>{
    const urlPeticion = `${this.url}pokemon-species/${name}`
    return this.http.get<PokemonDescripcion>(urlPeticion);

  }
}
