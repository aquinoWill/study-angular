import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-class',
  templateUrl: './directive-ng-class.component.html',
  styleUrls: ['./directive-ng-class.component.sass']
})
export class DirectiveNgClassComponent implements OnInit {

  constructor() { }

  toogleClass: boolean = false

  ngOnInit(): void {
  }

  onClick() {
    this.toogleClass = !this.toogleClass
  }

}
