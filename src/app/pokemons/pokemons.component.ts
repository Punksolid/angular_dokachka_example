import {
  AfterContentInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit, ViewChild
} from '@angular/core';
import {ActivityLogComponent} from '../activity-log/activity-log.component';
import {PokemonService} from "../services/pokemon.service";
import {UserSessionService} from "../services/user-session.service";
import {Router} from "@angular/router";
import { PokemonInterface } from "../interfaces/pokemon-interface";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";
import {PokeBallComponent} from "./poke-ball/poke-ball.component";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnChanges, OnInit, DoCheck,AfterContentInit {

  @ViewChild(PokeBallComponent, {static: false})
  public pokeBallComponent?: PokeBallComponent;


  public pokemons?: any;
  public selectedPokemon: any;
  public showDetail: any;
  public dataSource: any;
  public displayedColumns: any;
  public shouldShowPokemonDetail: boolean = false
  public selectedPokemonDetail: any;
  public ownedPokemons: Array<any> = [];


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
    console.log('On init pokemons list');
    console.log('Is user logged? ' + this.userSessionService.isUserLogged());
    // @ts-ignore
    this.pokemonDetailsComponent.selectedPokemonDetail = {};
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


  viewPokemonDetail(name: string) {

    this.shouldShowPokemonDetail = true;

    this.pokemonService.getPokemonByName(name).then((Pokemon: any) => {
      this.selectedPokemonDetail = Pokemon;
    });
  }

  pokemonOwned(event: any) {
    this.ownedPokemons.push(event);
  }

  throwPokemon(pokemon: any) {

  }

  discardAllPokemons() {
    this.pokeBallComponent?.releaseAllPokemons();
  }
}
