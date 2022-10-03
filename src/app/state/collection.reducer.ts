import { createReducer, on } from '@ngrx/store';
import { addNote, removeNote } from './notes.actions';
 
export const initialState: ReadonlyArray<string> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(removeNote, (state, { noteId }) => state.filter((id) => id !== noteId)),
  on(addNote, (state, { noteId }) => {
    if (state.indexOf(noteId) > -1) return state;
 
    return [...state, noteId];
  })
);