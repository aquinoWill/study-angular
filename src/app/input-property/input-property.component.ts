import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.sass']
})
export class InputPropertyComponent implements OnInit {

  constructor() { }

  @Input() course: string = ''

  ngOnInit(): void {
  }

}
