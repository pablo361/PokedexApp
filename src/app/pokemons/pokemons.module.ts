import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material/material.module';
import { PokemonDetalleComponent } from './pages/pokemon-detalle/pokemon-detalle.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    PokemonDetalleComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MaterialModule
  ]
})
export class PokemonsModule { }
