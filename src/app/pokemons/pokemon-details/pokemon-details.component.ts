import {Component, Input} from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  public selectedPokemonDetail: any;
  private selectPokemon: any;
  public color: string = '#ed03a5';
  public displayedColumns: any;

  constructor(private http: HttpClient,
              private routes: ActivatedRoute,
              private pokemonService: PokemonService,
              private router: Router
  ) {
  }

  ngOnInit() {
    // console.log('OnInit on DetailsComponent');
    this.routes.params.subscribe((parameters) => {
      const name = parameters['id'];

      this.pokemonService.getPokemonByName(name).then((Pokemon: any) => {
        this.selectedPokemonDetail = Pokemon;
        this.color = this.getColor(this.selectedPokemonDetail.types[0].type.name);
        this.selectPokemon = Pokemon;
        console.log(this.selectedPokemonDetail);
        console.log(this.selectPokemon);
      });
    });
  }

  getColor(type: string) {
    let color: string = '#ffffff';

    switch (type) {
      case 'grass':
        color = '#9bcc50';
        break;
      case 'fire':
        color = '#a30c0c';
        break;
      case 'flying':
        color = '#3dc7ef';
        break;
      case 'water':
        color = '#4592c4';
        break;
      case 'electric':
        color = '#eed535';
        break;
      case 'normal':
        color = '#8b8f93';
        break;
      case 'bug':
        color = '#162a01';
    }

    return  color;
  }


  goBack() {
    this.router.navigate(['/pokemons']);
  }
}
