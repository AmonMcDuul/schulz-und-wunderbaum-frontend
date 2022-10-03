import { createReducer, on } from '@ngrx/store';

import { retrievedNoteList } from './notes.actions';
import { Note } from '../notes/notes.model';

export const initialState: ReadonlyArray<Note> = [];

export const notesReducer = createReducer(
  initialState,
  on(retrievedNoteList, (state, { notes }) => notes)
);