import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  public saludo = "Bienvenidos al proyecto de Angular con Spring Boot 2";

  constructor() {
    console.log(this.saludo);
  }

}
