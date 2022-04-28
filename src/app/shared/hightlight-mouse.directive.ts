import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Directive({
  selector: '[appHightlightMouse]'
})
export class HightlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.hightlightColor
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.background-color') get setColor() {
    return this.backgroundColor
  }

  private backgroundColor: string

  @Input() defaultColor: string = 'white'
  @Input('appHightlightMouse') hightlightColor: string = 'yellow'

  ngOnInit(): void {
    this.defaultColor = this.defaultColor
  }

  constructor() { }

}
