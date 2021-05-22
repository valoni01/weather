import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConvertTempPipe } from 'src/shared/pipes/convert-temp.pipe';
import { ReqInterceptor } from 'src/core/req-interceptor';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,WeatherListComponent,WeatherForecastComponent,ConvertTempPipe],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ReqInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
