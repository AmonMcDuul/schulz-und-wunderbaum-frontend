import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Note } from '../notes/notes.model';
 
export const selectNotes = createFeatureSelector<ReadonlyArray<Note>>('notes');
 
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');
 
export const selectNoteCollection = createSelector(
  selectNotes,
  selectCollectionState,
  (notes, collection) => {
    return collection.map((id) => notes.find((note) => note.id === id));
  }
);