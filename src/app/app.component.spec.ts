import { createComponent } from '@angular/compiler/src/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { weatherForcast } from 'src/shared/model/weatherModel';
import { AppComponent } from './app.component';
import { EuWeatherService } from './eu-weather.service';
import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';

describe('AppComponent', () => {
  let fixture
  let MOCKweatherService;
  let MOCKServiceResponse;
  let MockForecast = new  weatherForcast;

  beforeEach(()=>{
    MOCKServiceResponse = [{
      name:'London',
      wind:{speed:12,deg:43,gust:3},
      main:{temp:45}
    }]

    MockForecast = {
       city: {id:'1',name:'LONDON'},
       list:{
              main:{temp:2},
              wind:{speed:'12',deg:'43',gust:'3'},
              dt_txt:''
            }
    }

  })
  beforeEach(async () => {
    MOCKweatherService = jasmine.createSpyObj(['getCityWeather','getCountryFocust']);
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        {provide:EuWeatherService, useValue:MOCKweatherService}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent)
  });

  it('should call the getCityWeather service',()=>{
      MOCKweatherService.getCityWeather.and.returnValue(of(MOCKServiceResponse))

      fixture.componentInstance.getMapt(['LONDON'])

      expect(MOCKweatherService.getCityWeather).toHaveBeenCalled();

  })

  it('should call the getCountryFocust service',()=>{
    MOCKweatherService.getCountryFocust.and.returnValue(of(MockForecast))

    fixture.componentInstance.getMapFocast('LONDON')

    expect(MOCKweatherService.getCountryFocust).toHaveBeenCalled();

})

  it('should return the city name as LONDON when you retrieve the current whether details',()=>{
      MOCKweatherService.getCountryFocust.and.returnValue(of(MockForecast))

      fixture.componentInstance.getMapFocast('LONDON')

      expect(fixture.componentInstance.forecastRes['city'].name).toEqual('LONDON')
  })

  it('should make the width of the sidenav 100% when openSide nav is clicked',()=>{
    MOCKweatherService.getCountryFocust.and.returnValue(of(MockForecast))

    fixture.componentInstance.openNav('LONDON')

    expect(fixture.nativeElement.querySelector(".sidenav").style.width).toBe('100%')

  })





});
