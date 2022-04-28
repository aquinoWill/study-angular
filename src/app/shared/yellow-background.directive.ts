import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
