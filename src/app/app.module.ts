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
import { NotesService } from './services/notes.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SubtractingComponent,
    NotesComponent,
    NotesCollectionComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'subtracting', component: SubtractingComponent},
      {path: 'test', component: TestComponent},
    ]),
    StoreModule.forRoot({ notes: notesReducer, collection: collectionReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, }),
  ],
  //providers: [WeatherForecastService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
