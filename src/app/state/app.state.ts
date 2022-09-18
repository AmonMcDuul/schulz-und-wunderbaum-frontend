import { Note } from '../notes/notes.model';

export interface AppState {
  notes: ReadonlyArray<Note>;
  collection: ReadonlyArray<string>;
}