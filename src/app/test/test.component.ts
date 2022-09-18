import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { WeatherForecast } from '../shared/WeatherForecast';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  WeatherForecast$: any = this.weatherForecastService.GetWeatherForecast().subscribe((data: {}) => {
    this.WeatherForecast$ = data;
  })

  constructor(
    public weatherForecastService: WeatherForecastService,
  ) { }

  ngOnInit(): void {
  }
}
