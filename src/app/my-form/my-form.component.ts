import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.sass']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  name: string = 'abc'

  ngOnInit(): void {
  }

}
