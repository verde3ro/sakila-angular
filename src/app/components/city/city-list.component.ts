import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styles: [
  ]
})
export class CityListComponent implements OnInit {

  public cities!: Array<City>;
  public size = 20;

  constructor(
    private cityService: CityService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  obtenerTodos(): void {
    this.cityService.obtenerTodos(this.size)
    .subscribe(
      resp => {
        this.cities = resp._embedded.ciudad; // coresponde al Json
        console.log(this.cities);
      },
      err => {
        console.log(err);
      }
    );
  }

  cargaCiudades(): void {
    this.obtenerTodos();
  }

  editarCiudad(cityId: number | undefined = 0): void {
    console.log(cityId);
    this.router.navigateByUrl(`create/${cityId}`); // Redirecciona al rura correspondiente
  }

  borrarCiudad(cityId: number | undefined = 0): void {
    this.cityService.borrar(cityId)
    .subscribe(
      resp => {
        this.obtenerTodos(); // recarga tabla
      },
      err => {
        console.log(err);
      }
    );
  }

  detalleCiudad(cityId: number | undefined = 0): void {
    this.router.navigateByUrl(`detail/${cityId}`);
  }

}
