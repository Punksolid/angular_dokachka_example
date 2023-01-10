import {Component, Input} from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  public selectedPokemonDetail: any;
  private selectPokemon: any;

  constructor(private http: HttpClient,
              private routes: ActivatedRoute,
              private pokemonService: PokemonService) {}

  ngOnInit() {
    // console.log('OnInit on DetailsComponent');
    this.routes.params.subscribe((parameters) => {
      const name = parameters['id'];

      this.pokemonService.getPokemonByName(name).then((Pokemon: any) => {
        this.selectedPokemonDetail = Pokemon;
        this.selectPokemon = Pokemon;
        console.log(this.selectedPokemonDetail);
        console.log(this.selectPokemon);
      });
    });
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
