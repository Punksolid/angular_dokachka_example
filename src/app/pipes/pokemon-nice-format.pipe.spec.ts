import { PokemonNiceFormatPipe } from './pokemon-nice-format.pipe';

describe('PokemonNiceFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonNiceFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
