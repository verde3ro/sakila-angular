import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city.model';
import {CityService} from 'src/app/services/city.service';


@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styles: [
  ]
})
export class CityCreateComponent implements OnInit {

  public city!: City;
  public nombre = '';
  public submitted = false;
  public id = 0;

  constructor(
    private cityService: CityService,
    private activateRoute: ActivatedRoute,
    private router: Router
    ) {
    console.log(this.nombre);
  }

  ngOnInit(): void {
    const cityId = this.activateRoute.snapshot.params.id;

    if (cityId !== undefined) {
          this.obtenerCiudad(cityId);
    }
  }

  guardar(): void {
    console.log(this.nombre);
    this.city = new City(this.nombre, new Date().toISOString(), 2, 'AC');

    console.log(this.city);

    if (this.id === 0) {
      this.cityService.crear(this.city) // Manejo de obervable
      .subscribe(
        response => { // esto es si no falla
          console.log('guarda');
          console.log(response);
          this.submitted = true;
        },
        err => { // esto es si ocurre un error
          console.log(err.error);
        }
     );
    } else {
      this.cityService.actualizar(this.id, this.city)
      .subscribe(
        response => { // esto es si no falla
          console.log('Actualiza');
          console.log(response);
          this.submitted = true;
        },
        err => { // esto es si ocurre un error
          console.log(err.error);
        }
      );
    }
  }

  obtenerCiudad(cityId: number): void {
    this.cityService.obtenerPorId(cityId)
    .subscribe(
      resp => {
        this.city = resp;
        console.log(this.city);

        this.id = this.city.cityId || 0;
        this.nombre = this.city.city;
      },
      err => {
        console.log(err);
      }
    );
  }

  nueva(): void {
    this.submitted = false;
    this.nombre = '';
  }

  regresaListado(): void {
    this.router.navigateByUrl(`list`);
  }

}
