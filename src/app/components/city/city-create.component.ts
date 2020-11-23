import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.model';
import {CityService} from 'src/app/services/city.service';


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

  constructor(private cityService: CityService) {
    console.log(this.nombre);
  }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log(this.nombre);
    this.city = new City(this.nombre, new Date().toISOString(), 2, 'AC');

    console.log(this.city);

    this.cityService.crear(this.city) // Manejo de obervable
    .subscribe(
      response => { // esto es si no falla
        console.log('Resultado');
        console.log(response);
        this.submitted = true;
      },
      err => { // esto es si ocurre un error
        console.log(err.error);
      }
    );
  }

}
