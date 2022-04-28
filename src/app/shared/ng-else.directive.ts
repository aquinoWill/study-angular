import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if(!condition) {
      this._viewContaninerRef.createEmbeddedView(this._templateRef)
    } else {
      this._viewContaninerRef.clear()
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContaninerRef: ViewContainerRef
  ) { }

}
