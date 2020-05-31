import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component'
import { HomeComponent } from './home/home.component';
import { DistrictsComponent } from './districts/districts.component';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'states', component: StatesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'districts', component: DistrictsComponent, children: [{
    path: ':name', component: DistrictDetailsComponent
  }]},
  {path:'chart1', component:ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
