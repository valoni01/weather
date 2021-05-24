import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EuWeatherService } from './eu-weather.service';
import { environment } from '../environments/environment'
import { forkJoin, Observable } from 'rxjs';
import { weatherForcast, weatherResponse } from './shared/model/weatherModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  weatherCities = environment.cities;
  forecastRes = new weatherForcast();
  isOpen=false;
  realTimeWeather:Observable<weatherResponse>[];
  refereshInterval = 1000;
  cityWeatherReqObs$ : Observable<weatherResponse>[] = [];


  @ViewChild('tpl',{static: true}) myDiv: ElementRef;


  constructor(private weatherserv: EuWeatherService){

  }

  ngOnInit(){
    this.getMapt(this.weatherCities);
 }


// Iterate through the 5 cities and use the forkJoin to ensure all request are resolved before rendering
 getMapt(cities){
  for(let a = 0; a < cities.length; a++ ){
    this.cityWeatherReqObs$.push(this.weatherserv.getCityWeather(cities[a]));
  }
  forkJoin(this.cityWeatherReqObs$).subscribe((res:any)=>{
    this.realTimeWeather = res
  })
 }

//This returns the forecast of a particular weather for the next few hours
getMapFocast(city){
 this.weatherserv.getCountryFocust(city).subscribe(
   (res)=>{
     this.forecastRes.city.name = res.city.name;
     this.forecastRes.list = res.list;
   }
 )
}

//opens the side nav that deplays the forcast
openNav(city) {
  this.getMapFocast(city);
  this.myDiv.nativeElement.style.width = "100%";
  this.isOpen = true;
}

 closeNav() {
  this.myDiv.nativeElement.style.width = "0";
  this.isOpen = false;
}



}


