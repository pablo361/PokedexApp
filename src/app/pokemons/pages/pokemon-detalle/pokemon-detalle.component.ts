import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, switchMap, tap, map } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonDescripcion } from '../../interfaces/pokemonDescripcion.interface';
import { DamageRelations, Generation, PokemonTipo } from '../../interfaces/pokemonTipo.interface';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit{


  pokemon! : Pokemon;
  pokemonDescripcion! : PokemonDescripcion;
  pokemonTipo!: PokemonTipo;
  pokeId : string = "";
  pokemonTipos : PokemonTipo[] = [];
  miListaFinal! : DamageRelations;
  listaResistenciasFinal : string[] = [];
  listasDebilidadesFinal : string[] = [];


  constructor(private pokeService: PokeService, private activatedRoute : ActivatedRoute){}


  color = "primary";
  ngOnInit(): void {
    /* this.activatedRoute.params
    .pipe(
      switchMap(({id}) => {
         return this.pokeService.getDetallePokemon(id)
        }
      )
    )
    .subscribe(pokemon => {
      this.pokemon = pokemon;
      this.pokeService.getPokemonDescripcion(this.pokemon.id)

      .subscribe(pokeDesc => {
        console.log(pokeDesc);
        this.pokemonDescripcion = pokeDesc;
        
      });
    }); */
    this.activatedRoute.params.forEach(param => this.pokeId = param['id']); 
    forkJoin(
      [this.pokeService.getDetallePokemon(this.pokeId),
      this.pokeService.getPokemonDescripcion(this.pokeId)]
    )
    .pipe(
      switchMap(([pokemon,descripcion,])=>{
        this.pokemon = pokemon;
        this.pokemonDescripcion = descripcion
       
        
        return  this.pokeService.getTipos(pokemon.types)
      })
    )
    .subscribe(result => {
      console.log(result);
      
      this.pokemonTipos = result;
      this.listaTodoslosTipos()
    })


  }



  listaTodoslosTipos(){
    if(this.pokemonTipos.length === 1){
      let tipoUnico = this.pokemonTipos.pop()!;
      this.listaResistenciasFinal = this.listaSinDuplicados(tipoUnico?.damage_relations.half_damage_from)
      this.listasDebilidadesFinal = this.listaSinDuplicados(tipoUnico?.damage_relations.double_damage_from)
    }
    else {
      const [h1,h2] = this.pokemonTipos;
      this.miListaFinal = h1.damage_relations;
      this.miListaFinal.double_damage_from = h1.damage_relations.double_damage_from.concat(h2.damage_relations.double_damage_from);
      this.miListaFinal.half_damage_from = h1.damage_relations.half_damage_from.concat(h2.damage_relations.half_damage_from);
      this.listaResistenciasFinal = this.listaSinDuplicados(this.miListaFinal.half_damage_from);
      this.listasDebilidadesFinal = this.listaSinDuplicados(this.miListaFinal.double_damage_from);
      this.purgarListas()
    }
    
  }

  listaSinDuplicados(tipos : Generation[]) : string[]{
    let lista : string[]=  [];
    tipos.forEach(element => {
      if(lista.indexOf(element.name) === -1){
        lista.push(element.name)
      }
    });
    return lista;

  }


  purgarListas(){
    let i = 0;
    while(i< this.listasDebilidadesFinal.length){
      const tipoActual = this.listasDebilidadesFinal[i];
      console.log(tipoActual);
      let posicionDuplicado = this.listaResistenciasFinal.indexOf(tipoActual)
      if(posicionDuplicado !== -1){
        console.log('si esta',tipoActual);
        this.listasDebilidadesFinal.splice(i,1)
        this.listaResistenciasFinal.splice(posicionDuplicado,1)
      } else {
        i = i+1;
      }
      
      
       
      }
    }
  

 









}
