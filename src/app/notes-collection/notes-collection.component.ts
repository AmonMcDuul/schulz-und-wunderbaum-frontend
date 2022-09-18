import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Note } from '../notes/notes.model';

@Component({
  selector: 'app-notes-collection',
  templateUrl: './notes-collection.component.html',
  styleUrls: ['./notes-collection.component.scss']
})
export class NotesCollectionComponent implements OnInit {
  @Input() notes: ReadonlyArray<Note | undefined> | null= [];
  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}