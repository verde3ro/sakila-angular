import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styles: [
  ]
})
export class CityDetailComponent implements OnInit {

  public city!: City;

  constructor(
    private cityService: CityService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const cityId = this.activateRoute.snapshot.params.id;

    if (cityId !== undefined) {
          this.obtenerCiudad(cityId);
    }
  }

  obtenerCiudad(cityId: number): void {
    this.cityService.obtenerPorId(cityId)
    .subscribe(
      resp => {
        this.city = resp;
        console.log(this.city);
      },
      err => {
        console.log(err);
      }
    );
  }

}
