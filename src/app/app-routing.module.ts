import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: ()=> import('./pokemons/pokemons.module').then(module =>module.PokemonsModule),
  },
  {
    path: '**',
    redirectTo: 'pokemons'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
