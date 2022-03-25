import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  // templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass'],
  template: `
    <section>
      <h3>Propety binding</h3>
      <article>
        <p>Olá {{ name }}</p>
      </article>
    </section>
  `
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  name: string = 'Willian'

  ngOnInit(): void {
  }

}
