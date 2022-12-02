import { Component } from '@angular/core';
import { PokemonsListService } from '../pokemons-list.service';
import pokemons from '../pokemons.json';
import activityLog from '../activity-log.json';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  public pokemons: any;
  public selectedPokemon: any;
  constructor() {}

  ngOnInit() {
    this.pokemons = pokemons;
  }


  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
    activityLog.addActivity('Selected Pokemon: ' + pokemon.name);
  }
}
