import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.model';


@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styles: [
  ]
})
export class CityCreateComponent implements OnInit {

  public city: City | undefined;
  public nombre = '';
  public submitted = false;

  constructor() {
    console.log(this.nombre);
  }

  ngOnInit(): void {
  }

  guardar(): void {
    // this.city = new City(this.nombre, new Date().toISOString(), 2, 'AC');
    console.log(this.nombre);
  }

}
