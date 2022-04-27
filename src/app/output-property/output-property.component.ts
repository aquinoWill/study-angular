import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.sass']
})
export class OutputPropertyComponent implements OnInit {

  @Output() changeValue = new EventEmitter;
  @Input() totalCounte: number = 0
  @ViewChild('fieldValue') inputField: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  increment() {
    this.inputField.nativeElement.value++;
    this.totalCounte++;
    this.changeValue.emit({newValue: this.totalCounte})
  }

  decrement() {
    this.inputField.nativeElement.value--;
    this.totalCounte--;
    this.changeValue.emit({newValue: this.totalCounte})
  }
}
