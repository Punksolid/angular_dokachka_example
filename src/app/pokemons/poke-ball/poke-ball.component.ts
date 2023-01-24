import {Component, Input} from '@angular/core';
import {PokemonInterface} from "../../interfaces/pokemon-interface";

@Component({
  selector: 'app-poke-ball',
  templateUrl: './poke-ball.component.html',
  styleUrls: ['./poke-ball.component.scss']
})
export class PokeBallComponent {
  @Input() ownedPokemons: Array<PokemonInterface> = [];

  constructor() { }

  releasePokemon(_pokemon: any)
  {
    this.ownedPokemons = this.ownedPokemons.filter((pokemon: any) => {
      return pokemon.name !== _pokemon.name;
    });
    console.log('Release pokemon');
  }

  releaseAllPokemons()
  {
    this.ownedPokemons = [];
  }

}
