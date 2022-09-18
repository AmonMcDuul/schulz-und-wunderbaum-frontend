import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';


import { WeatherForecastService } from './services/weather-forecast.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { SubtractingComponent } from './subtracting/subtracting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherReportComponent } from './weather-report/weather-report.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SubtractingComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: 'subtracting', component: SubtractingComponent},
      {path: 'test', component: TestComponent},
      {path: "", component: WeatherReportComponent},
      {path: ":locationName", component: WeatherReportComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [WeatherForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
