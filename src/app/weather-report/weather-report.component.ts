import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { concatMap } from 'rxjs/internal/operators/concatMap';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { WeatherService } from '../subtracting/subtracting.component';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})

export class WeatherReportComponent implements OnInit {
  data$!: Observable<any>;
  today = new Date();

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      map(params => params["locationName"]),
      filter(name => !!name),
      concatMap(name => this.weatherService.getWeatherForCity(name))
    );
  }
}