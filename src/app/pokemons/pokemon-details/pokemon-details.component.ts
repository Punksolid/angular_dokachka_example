import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {

  public color: string = '#ed03a5';

  @Input() pokemon: any;
  @Output() pokemonSavedInPokeball: EventEmitter<any>
    = new EventEmitter<any>();

  constructor(private http: HttpClient,
              private routes: ActivatedRoute,
              private pokemonService: PokemonService,
              private router: Router,
              private snackBar: MatSnackBar
  ) {}

  goBack() {
    this.router.navigate(['/pokemons']);
  }

  savePokemon(pokemon: any) {
    this.snackBar.open('Pokemon saved in pokeball', 'Close', {
      duration: 2000,
    });
    this.pokemonSavedInPokeball.emit(pokemon);
  }
}
