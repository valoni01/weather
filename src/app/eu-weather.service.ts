import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {  tap } from 'rxjs/operators'
import { weatherForcast, weatherResponse } from 'src/shared/model/weatherModel';

@Injectable({
  providedIn: 'root'
})
export class EuWeatherService {

  base_url = environment.base_url;
  api_key = environment.api_key;
  cachedFocust = {};


  constructor(private _http: HttpClient) { }

 //Returns the weather details of a city
   getCityWeather(city:string):Observable<weatherResponse>{
     return this._http.get<weatherResponse>(`${this.base_url}/weather?q=${city}&appid=`).pipe(
     )}


  //This is our momozation implementation that either returns cache data or get new data
  getCountryFocust(city: string): Observable<weatherForcast> {
        if (this.cachedFocust[city]) {
           return of(this.cachedFocust[city])
        }
       return this._http.get<weatherForcast>(`${this.base_url}/forecast?q=${city}&appid=`).pipe(
        tap(resolvedValue => {
              this.cachedFocust[city] = resolvedValue;
          })
          )
      }


}




