import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonLista } from '../interfaces/pokemonLista.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {


url : string = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  constructor(private http: HttpClient) { }


  getPokemons(limit: number): Observable<PokemonLista>{
    return this.http.get<PokemonLista>(this.url);
  }
}
