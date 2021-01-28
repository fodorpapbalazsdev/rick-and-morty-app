import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appCharacterStatusDirective]'
})
export class CharacterStatusDirectiveDirective implements OnInit, OnChanges {

  private element: ElementRef;

  @Input('appCharacterStatusDirective') status: string;
  @Input('appCharacterStatusStyle') style: string;


  constructor(el: ElementRef) {
    this.element = el;
  }

  ngOnInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  render(): void {
    this.element.nativeElement.style.width = '50px';
    this.element.nativeElement.style.height = '50px';
    this.element.nativeElement.style.backgroundPosition = 'center';
    this.element.nativeElement.style.backgroundRepeat = 'no-repeat';
    this.element.nativeElement.style.backgroundSize = 'cover';

    switch (this.status.toLowerCase()) {
      case 'alive':
        if (this.style === 'mouse-over') {
          this.element.nativeElement.style.backgroundImage = 'url(/assets/character-status-icons/alive-status-icon-white.png)';
        } else {
          this.element.nativeElement.style.backgroundImage = 'url(/assets/character-status-icons/alive-status-icon.png)';
        }
        break;
      case 'dead':
        this.element.nativeElement.style.backgroundImage = 'url(/assets/character-status-icons/dead-status-icon.png)';
        break;
      default:
        if (this.style === 'mouse-over') {
          this.element.nativeElement.style.backgroundImage = 'url(/assets/character-status-icons/unknown-status-icon-white.png)';
        } else {
          this.element.nativeElement.style.backgroundImage = 'url(/assets/character-status-icons/unknown-status-icon.png)';
        }
    }
  }


}
