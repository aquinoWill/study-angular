import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.sass']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  inputValue = '';
  inputSalveValue = ''

  eventClick () {
    alert('click')
  }

  eventKeyUp ($event: any) {
    this.inputValue = $event.target.value;
  }

  handleEnter ($event: any) {
    this.inputSalveValue = $event;
  }

  ngOnInit(): void {
  }

}
