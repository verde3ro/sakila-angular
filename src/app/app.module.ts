import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// nuestros compentes
import { HomeComponent } from './components/home.component';
import { CityCreateComponent } from './components/city/city-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
