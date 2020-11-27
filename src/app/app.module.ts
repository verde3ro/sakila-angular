import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// nuestros compenentes
import { HomeComponent } from './components/home.component';
import { CityCreateComponent } from './components/city/city-create.component';
import { CityListComponent } from './components/city/city-list.component';
import { CityDetailComponent } from './components/city/city-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityCreateComponent,
    CityListComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
