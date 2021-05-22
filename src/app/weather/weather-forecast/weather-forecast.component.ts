import { Component, Input, NgModule, OnInit } from '@angular/core';
import { weatherForcast } from 'src/shared/model/weatherModel';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})


export class WeatherForecastComponent implements OnInit {
  @Input() forecast: weatherForcast

  constructor() { }

  ngOnInit(): void {
  }



}


