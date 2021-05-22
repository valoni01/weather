import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { weatherForcast } from 'src/shared/model/weatherModel';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class WeatherForecastComponent implements OnInit {
  @Input() forecast: weatherForcast

  constructor() { }

  ngOnInit(): void {
  }



}


