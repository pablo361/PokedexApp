import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material/material.module';
import { PokemonDetalleComponent } from './pages/pokemon-detalle/pokemon-detalle.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { TipoDetalleComponent } from './pages/tipo-detalle/tipo-detalle.component';
import { ChipTipoComponent } from './components/chip-tipo/chip-tipo.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { ImagenesPokemonPipe } from './pipes/imagenes-pokemon.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    PokemonDetalleComponent,
    PokemonCardComponent,
    TipoDetalleComponent,
    ChipTipoComponent,
    ImagenesPipe,
    ImagenesPokemonPipe
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PokemonsModule { }
