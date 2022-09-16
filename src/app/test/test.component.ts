import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../services/weather-forecast.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  WeatherForecast: any = [];
  constructor(
    public weatherForecastService: WeatherForecastService
  ) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    return this.weatherForecastService.GetWeatherForecast().subscribe((data: {}) => {
      this.WeatherForecast = data;
      console.log(this.WeatherForecast)
    })
  }
}
