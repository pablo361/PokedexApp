import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PokemonDetalleComponent } from './pages/pokemon-detalle/pokemon-detalle.component';
import { TipoDetalleComponent } from './pages/tipo-detalle/tipo-detalle.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children:[
    {
      path: 'todos',
      component: ListadoComponent
    },
    {
      path: ':id',
      component: PokemonDetalleComponent
    },
    {
      path: 'tipo/:tipoId',
      component: TipoDetalleComponent
    },
    {
      path: '**',
      redirectTo: 'todos'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
