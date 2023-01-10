import {AfterContentInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
// import pokemons from '../pokemons.json';
import {ActivityLogComponent} from '../activity-log/activity-log.component';
import {HttpClient} from "@angular/common/http";
import {resolve} from "@angular/compiler-cli";
import {PokemonService} from "../services/pokemon.service";
import {UserSessionService} from "../services/user-session.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnChanges, OnInit, DoCheck,AfterContentInit {
  // public pokemons:any = [];
  public pokemons?: any;
  public selectedPokemon: any;
  public showDetail: any;
  public dataSource: any;
  public displayedColumns: any;

  constructor(private pokemonService: PokemonService,
              private router: Router,
              private userSessionService: UserSessionService) {
    this.pokemonService.getPokemonsList().then((pokemonList) => {
      this.pokemons = pokemonList.results;
      console.log(this.pokemons);
      this.dataSource = this.pokemons.map((pokemon: any) => {
        return {
          name: pokemon.name,
          url: pokemon.url,
          actions: 'actions'
        }
      });

    });
    console.log(this.userSessionService.isUserLogged());
  }

  ngOnInit() {
    this.displayedColumns= ['name', 'url', 'actions'];
  }

  ngAfterContentInit() {
  }

  ngOnChanges() {
    console.log('ngOnChanges ListComponent');
  }

  ngDoCheck() {
    // console.log('DoCheck List component')
  }

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
    ActivityLogComponent.addActivity('Selected Pokemon: ' + pokemon.name);
    this.showDetail = true;
  }

  closeDetail() {
    console.log('closeDetail');
    this.showDetail = false;
  }


}
