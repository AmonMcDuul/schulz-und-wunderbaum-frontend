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
import { StoreModule } from '@ngrx/store';
import { NotesComponent } from './notes/notes.component';
import { notesReducer } from './state/notes.reducer';
import { collectionReducer } from './state/collection.reducer';
import { NotesCollectionComponent } from './notes-collection/notes-collection.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DrugwarsComponent } from './drugwars/drugwars.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SubtractingComponent,
    NotesComponent,
    NotesCollectionComponent,
    DrugwarsComponent,
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
      {path: 'drugwars', component: DrugwarsComponent},
    ]),
    StoreModule.forRoot({ notes: notesReducer, collection: collectionReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, }),
  ],
  //providers: [WeatherForecastService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
