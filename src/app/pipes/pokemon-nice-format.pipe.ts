import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNiceFormat'
})
export class PokemonNiceFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    let first_letter = value.charAt(0).toUpperCase();
    let rest_of_the_word = value.slice(1);

    return first_letter + rest_of_the_word;

  }

}
