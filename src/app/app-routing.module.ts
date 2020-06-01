import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component'
import { HomeComponent } from './home/home.component';
import { DistrictsComponent } from './districts/districts.component';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { ChartsComponent } from './charts/charts.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'states', component: StatesComponent, canActivate : [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate : [AuthGuard]},
  {path: 'districts', component: DistrictsComponent, children: [{
    path: ':name', component: DistrictDetailsComponent
  }], canActivate : [AuthGuard]},
  {path:'chart1', component:ChartsComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
