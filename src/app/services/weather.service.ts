import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({ providedIn: 'root' })
export class WeatherService {
    //stupid construction for city
  baseurl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  baseurlend = '&units=metric&APPID=';
  apikey = '695ed9f29c4599b7544d0db5c211d499';

  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getWeatherForCity(city: string): Observable<Array<any>> {
    return this.http
    .get<any[]>(this.baseurl + city + this.baseurlend + this.apikey)
    .pipe(map((items) => items || []));
    }

}