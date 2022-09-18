import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { Store } from '@ngrx/store';
 
import {
  retrievedNoteList,
  addNote,
  removeNote,
} from '../state/notes.actions';
import { selectNoteCollection, selectNotes } from '../state/notes.selector';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  WeatherForecast$: any = this.weatherForecastService.GetWeatherForecast().subscribe((data: {}) => {
    this.WeatherForecast$ = data;
  })

  notes$ = this.store.select(selectNotes);
  noteCollection$ = this.store.select(selectNoteCollection);
 
  x$ : any = this.notesService.getNotes().subscribe((notes) => this.store.dispatch(retrievedNoteList({ notes })));

  onAdd(noteId: string) {
    this.store.dispatch(addNote({ noteId }));
  }
 
  onRemove(noteId: string) {
    this.store.dispatch(removeNote({ noteId }));
  }
 

  constructor(
    public weatherForecastService: WeatherForecastService,
    private notesService: NotesService,
    private store: Store 
  ) { }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((notes) => this.store.dispatch(retrievedNoteList({ notes })));
  }
}