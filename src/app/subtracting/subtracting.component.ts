import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './subtracting.component.html',
  styleUrls: ['./subtracting.component.scss']
})

export class SubtractingComponent implements OnInit {
  cities = ["Bergen op Zoom", "Amsterdam", "Tilburg", "Den Haag"];

  cityControl!: FormControl;
  chosenCity$!: Observable<string>;

  constructor() {}

  setCity(){
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges
      .subscribe(value => {
        this.chosenCity$ = value;
    });
  }

  ngOnInit() {
    this.setCity()
  }
}

@Injectable({ providedIn: "root" })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get(path);
  }
}