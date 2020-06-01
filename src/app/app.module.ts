import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatesComponent } from './states/states.component';
import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './home/home.component';
import { MediateService } from './mediate.service';
import { DistrictsComponent } from './districts/districts.component';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { ChartsComponent } from './charts/charts.component';
import { DailyChartComponent } from './charts/daily-chart/daily-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    HomeComponent,
    DistrictsComponent,
    DistrictDetailsComponent,
    ChartsComponent,
    DailyChartComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [MediateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
