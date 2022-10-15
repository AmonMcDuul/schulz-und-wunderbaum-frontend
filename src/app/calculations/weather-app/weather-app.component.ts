import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {
  cities: string[];
  chosenCity: string = '';
  data$!: Observable<any>;

  constructor(private api: WeatherService, private route: ActivatedRoute) {
    this.cities = ['Amsterdam','Bergen op Zoom','Halsteren','Breda','New York','London'];
   }

  ngOnInit(): void {
  }

  getWeather(city: string){
    this.data$ = this.route.params.pipe( n => this.api.getWeatherForCity(city));
  }

}
