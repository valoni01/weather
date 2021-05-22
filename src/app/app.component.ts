import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { weatherForcast, weatherResponse } from 'src/shared/model/weatherModel';
import { EuWeatherService } from './eu-weather.service';
import { environment } from '../environments/environment'
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  recentWeather:weatherResponse;
  weatherCities = environment.cities;
  recentCityData: Observable<weatherResponse>[] = [];
  forecastRes = new weatherForcast();
  isOpen=false;
  realTimeWeather =[];
  // forcastRe$:Subscription;

  @ViewChild('tpl',{static: true}) myDiv: ElementRef;



  constructor(private weatherserv: EuWeatherService){

  }

  ngOnInit(){
    this.getMapt(this.weatherCities);
 }


//This itereates through the 5 cities and return the weather details
 getMapt(cities){
  for(let a = 0; a < cities.length; a++ ){
      this.weatherserv.getCityWeather(cities[a]).subscribe((r)=>{
       this.realTimeWeather.push(r)
      })
   }
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


