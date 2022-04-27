import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-clycle',
  templateUrl: './live-clycle.component.html',
  styleUrls: ['./live-clycle.component.sass']
})
export class LiveClycleComponent implements OnInit {

  @Input() initValue: number = 10

  constructor() {
    this.log('Contrutor')
  }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.log('ngOnChanges')
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.log('ngAfterContentChecked')
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.log('ngOnDestroy')
  }

  private log (hook: string) {
    console.log(hook)
  }
}
