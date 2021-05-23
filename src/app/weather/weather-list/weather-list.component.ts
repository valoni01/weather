import { Component, OnInit,Input } from '@angular/core';
import { weatherResponse } from 'src/app/shared/model/weatherModel';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {


  @Input() weather:weatherResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
