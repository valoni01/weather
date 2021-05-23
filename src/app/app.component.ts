import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { weatherForcast, weatherResponse } from 'src/shared/model/weatherModel';
import { EuWeatherService } from './eu-weather.service';
import { environment } from '../environments/environment'
import { forkJoin, Observable, Subscription, timer} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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

  @ViewChild('tpl',{static: true}) myDiv: ElementRef;


  constructor(private weatherserv: EuWeatherService){

  }

  ngOnInit(){
    this.getMapt(this.weatherCities);
 }


// Iterate through the 5 cities and use the forkJoin to ensure all request are resolved before rendering
 getMapt(cities){
  let mreqObs$ : Observable<weatherResponse>[] = [];
  for(let a = 0; a < cities.length; a++ ){
    mreqObs$.push(this.weatherserv.getCityWeather(cities[a]));
  }
  forkJoin(mreqObs$).subscribe((res:any)=>{
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
  this.isOpen = true;
}

// ngOnDestroy(): void {
//   this.forcastRe$.unsubscribe();
// }


}


