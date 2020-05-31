import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'states', component: StatesComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
