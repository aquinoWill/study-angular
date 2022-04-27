import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-style',
  templateUrl: './directive-ng-style.component.html',
  styleUrls: ['./directive-ng-style.component.sass']
})
export class DirectiveNgStyleComponent implements OnInit {

  active: boolean = false
  fontSize: number = 10

  constructor() { }

  ngOnInit(): void {
  }

  onClickActive() {
    this.active = !this.active
    this.fontSize = this.fontSize + 2
  }

}
