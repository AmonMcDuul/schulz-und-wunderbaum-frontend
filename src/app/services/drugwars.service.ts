import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Armor } from '../models/drugwars/armor';
import { Drug } from '../models/drugwars/drug';
import { HighScore } from '../models/drugwars/highscore';
import { Item } from '../models/drugwars/item';
import { Locations } from '../models/drugwars/locations';
import { Weapon } from '../models/drugwars/weapon';

 
@Injectable({ providedIn: 'root' })
export class DrugWarsService {
  baseurl = 'https://localhost:7124';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getDrugs(): Observable<Array<Drug>> {
    console.log("test farts   -- getDrugs()")
    return this.http
    .get<Drug[]>(this.baseurl + '/drugwars/drugs')
    .pipe(map((drugs) => drugs || []));
  }

  getArmor(): Observable<Array<Armor>> {
    return this.http
    .get<Armor[]>(this.baseurl + '/drugwars/armor')
    .pipe(map((armor) => armor || []));
  }
  //   errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }

  getWeapons(): Observable<Array<Weapon>> {
    return this.http
    .get<Weapon[]>(this.baseurl + '/drugwars/weapons')
    .pipe(map((weapons) => weapons || []));
  }

  getItems(): Observable<Array<Item>> {
    return this.http
    .get<Item[]>(this.baseurl + '/drugwars/items')
    .pipe(map((items) => items || []));
  }

  getLocations(): Observable<Array<Locations>> {
    return this.http
    .get<Locations[]>(this.baseurl + '/drugwars/locations')
    .pipe(map((locations) => locations || []));
  }

  getHighScores(): Observable<Array<HighScore>> {
    return this.http
    .get<HighScore[]>(this.baseurl + '/drugwars/highscores')
    .pipe(map((highScore) => highScore || []));
  }

}