import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WeatherService } from '../subtracting/subtracting.component';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})

export class WeatherReportComponent implements OnInit {
  data$!: Observable<any> | null;
  today = new Date();
  @Input() cityName: string | null = "";

  constructor(
    private weatherService: WeatherService,
  ) {}

  ngOnInit() {
    this.data$ = this.weatherService.getWeatherForCity(this.cityName!)
  }
}