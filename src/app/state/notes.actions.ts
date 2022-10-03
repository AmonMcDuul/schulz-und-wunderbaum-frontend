import { createAction, props } from '@ngrx/store';
import { Note } from '../notes/notes.model';
 
export const addNote = createAction(
  '[Note List] Add Note',
  props<{ noteId: string }>()
);
 
export const removeNote = createAction(
  '[Note Collection] Remove Note',
  props<{ noteId: string }>()
);
 
export const retrievedNoteList = createAction(
  '[Note List/API] Retrieve Note Success',
  props<{ notes: ReadonlyArray<Note> }>()
);