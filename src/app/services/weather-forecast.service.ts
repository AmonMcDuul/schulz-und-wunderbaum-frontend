import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherForecast } from '../shared/WeatherForecast';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  // Base url
  baseurl = 'https://localhost:7124';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetWeatherForecast(): Observable<WeatherForecast> {
    return this.http
      .get<WeatherForecast>(this.baseurl + '/WeatherForecast/');
      // .pipe(retry(1), catchError(this.errorHandl));
  }
   // Error handling
  //  errorHandl(error) {
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
}
