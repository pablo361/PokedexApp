import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonTipo } from '../../interfaces/pokemonTipo.interface';

import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-tipo-detalle',
  templateUrl: './tipo-detalle.component.html',
  styleUrls: ['./tipo-detalle.component.css']
})


export class TipoDetalleComponent  implements OnInit{

  tipo! : PokemonTipo;
  

  constructor(private pokemonService : PokeService, private activatedRoute : ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({tipoId}) => {
        return this.pokemonService.getPokemonTipo(tipoId);
      })
    )
    .subscribe(data => {
      this.tipo = data;
    }
    ) 
  }

}
