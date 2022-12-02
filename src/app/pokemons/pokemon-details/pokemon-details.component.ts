import {Component, Input} from '@angular/core';
import {Pokemon} from "./pokemon";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  @Input() selectedPokemon: Pokemon | any;
  constructor() { }

  ngOnInit() {

  }
  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
  }

  getColor(type: string) {
    switch (type) {
      case 'Grass':
        return '#9bcc50';
      case 'Fire':
        return '#fd7d24';
      case 'Flying':
        return '#3dc7ef';
      case 'Water':
        return '#4592c4';
      case 'Electric':
        return '#eed535';
    }

    return '#fff';
  }
}
