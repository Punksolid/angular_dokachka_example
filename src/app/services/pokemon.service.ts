import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {lastValueFrom, mergeMap, Observable, take} from "rxjs";

interface Pokemon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  // getPokemonsList(): Observable<Pokemon[]>
  // {
  //   return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon');
  // }
  // getPokemonList(): Observable<Pokemon[]> {
  //   return this.http.get('https://pokeapi.co/api/v2/pokemon')
  //     .pipe(mergeMap((res: Object[]) => {
  //       return res.map(pokemon => {
  //         return { name: pokemon.name, url: pokemon.url }
  //       });
  //   }));
  // }

  getPokemonsList(): Promise<any> {
    return lastValueFrom(this.http.get<any>('https://pokeapi.co/api/v2/pokemon').pipe(take(1)));
  }

  getPokemonByName(name: string): Promise<any> {
    console.log('getPokemonByName');
    return lastValueFrom(this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + name).pipe(take(1)));
  }

  fetchPokemonDetails(pokemon: any) {
    this.http.get(pokemon.url).subscribe((data: any) => {
      return data;
    });
  }
}
