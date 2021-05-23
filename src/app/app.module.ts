import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';
import { ReqInterceptor } from './core/req-interceptor';
import { ConvertTempPipe } from './shared/pipes/convert-temp.pipe';

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
