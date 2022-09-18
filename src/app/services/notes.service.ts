import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from '../notes/notes.model';
 
@Injectable({ providedIn: 'root' })
export class NotesService {
  baseurl = 'https://localhost:7124';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getNotes(): Observable<Array<Note>> {
    return this.http
    .get<Note[]>(this.baseurl + '/notes/')
    .pipe(map((notes) => notes || []));
  }
}