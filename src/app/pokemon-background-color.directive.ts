import {Directive, DoCheck, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPokemonBackgroundColor]'
})
export class PokemonBackgroundColorDirective {
  private _appPokemonBackgroundColor !: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.element.nativeElement.style.background = '#eed535';
    // this.renderer.setAttribute(this.element.nativeElement, 'style')
  }

  // ngDoCheck() {
  //   if (this.element)
  // }


  get appPokemonBackgroundColor(): string {
    return this._appPokemonBackgroundColor;
  }

  @Input()
  set appPokemonBackgroundColor(value: string) {
    console.log(value);
    this._appPokemonBackgroundColor = value;
    let color;
    if (value == null) {
      color = "#ffffff";
    } else {
      color = this.getColor(value);
    }
    console.log(color);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
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
}
