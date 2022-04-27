import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-app'
  numberValue: number = 5

  changeNumberValue() {
    this.numberValue++
  }
}
