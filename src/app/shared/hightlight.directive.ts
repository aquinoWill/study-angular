import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._rendenrer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'purple'
    // )
    this.backgroundColor = 'purple'
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._rendenrer.setStyle(
      //   this._elementRef.nativeElement,
      //   'background-color',
      //   'white'
      // )
      this.backgroundColor = 'white'
  }

  // @HostBinding('style.background-color') backgroundColor: string

  @HostBinding('style.background-color') get setColor() {
    return this.backgroundColor
  }

  private backgroundColor: string

  constructor(
    // private _elementRef: ElementRef,
    // private _rendenrer: Renderer2
  ) { }
}
