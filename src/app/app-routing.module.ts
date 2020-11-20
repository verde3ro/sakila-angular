import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityCreateComponent } from './components/city/city-create.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CityCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
