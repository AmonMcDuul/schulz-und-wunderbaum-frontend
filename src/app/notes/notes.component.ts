import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from './notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() notes: ReadonlyArray<Note> | null= [];
  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
