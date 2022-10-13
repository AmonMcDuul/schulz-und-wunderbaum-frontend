import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { SubtractingComponent } from './subtracting/subtracting.component';
import { DrugwarsComponent } from './drugwars/drugwars.component';
import { Seeding } from './drugwars/seeding';
import { StartGameComponent } from './drugwars/startgame/startgame.component';
import { MatDialogModule } from '@angular/material/dialog';
import { 
  MatInputModule
} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CalculationsComponent } from './calculations/calculations.component';
import { TestcalcComponent } from './calculations/testcalc/testcalc.component';
import { KmMileComponent } from './calculations/km-mile/km-mile.component';
import { WeatherAppComponent } from './calculations/weather-app/weather-app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SubtractingComponent,
    DrugwarsComponent,
    StartGameComponent,
    CalculationsComponent,
    TestcalcComponent,
    KmMileComponent,
    WeatherAppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'subtracting', component: SubtractingComponent},
      {path: 'test', component: TestComponent},
      {path: 'drugwars', component: DrugwarsComponent},
      {path: 'calculations', component: CalculationsComponent},
    ]),
  ],
  providers: [Seeding],
  bootstrap: [AppComponent]
})
export class AppModule { }
