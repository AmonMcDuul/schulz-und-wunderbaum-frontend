import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { WeatherForecastService } from './services/weather-forecast.service';


import { SubtractingComponent } from './subtracting/subtracting.component';
import { StoreModule } from '@ngrx/store';
import { NotesComponent } from './notes/notes.component';
import { notesReducer } from './state/notes.reducer';
import { collectionReducer } from './state/collection.reducer';
import { NotesCollectionComponent } from './notes-collection/notes-collection.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DrugwarsComponent } from './drugwars/drugwars.component';
import { Seeding } from './drugwars/seeding';
import { StartgameComponent } from './drugwars/startgame/startgame.component';
import { MatDialogModule } from '@angular/material/dialog';
import { 
  MatInputModule
} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SubtractingComponent,
    NotesComponent,
    NotesCollectionComponent,
    DrugwarsComponent,
    StartgameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'subtracting', component: SubtractingComponent},
      {path: 'test', component: TestComponent},
      {path: 'drugwars', component: DrugwarsComponent},
    ]),
    StoreModule.forRoot({ notes: notesReducer, collection: collectionReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, }),
  ],
  providers: [Seeding],
  bootstrap: [AppComponent]
})
export class AppModule { }
