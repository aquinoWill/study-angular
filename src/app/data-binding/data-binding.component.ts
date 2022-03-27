import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  name: string = 'Willian'
  courseName: string = 'Angular'

  onChageValue($event: any) {
    console.log($event.newValue)
  }

  ngOnInit(): void {
  }

}
