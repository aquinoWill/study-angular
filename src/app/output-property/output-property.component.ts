import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.sass']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  changeValue = new EventEmitter;

  @Input()
  totalCounte: number = 0

  increment() {
    this.totalCounte++;
    this.changeValue.emit({newValue: this.totalCounte})
  }

  decrement() {
    this.totalCounte--;
    this.changeValue.emit({newValue: this.totalCounte})
  }
}
