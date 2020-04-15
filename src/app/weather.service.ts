import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './interfaces/city';
import { AppConfig } from './interfaces/appConfig';
import { APP_CONFIG } from './app.config';
import { cityWeatherResponse } from './interfaces/cityWeatherResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  cities: City[] = [];
  appId: string;
  endpoint: string;

  constructor(
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) config: AppConfig
  ) {
    this.appId = config.appId;
    this.endpoint = config.endpoint;
    this.httpClient.get<City[]>('./city.list.json').subscribe(cities => this.cities = cities);
  }

  getCurrentWeather(value: string): Observable<cityWeatherResponse> {
    const id = this.getCityIdBy(value);
    return this.httpClient.get<cityWeatherResponse>(this.endpoint, {params: { id, appid: this.appId }});
  }

  private getCityIdBy(value: string): string {
    let parsed = parseInt(value).toString();
    if(parsed === 'NaN') {
      const city = this.cities.find((city: City) => city.name.toLowerCase() === value.toLowerCase());
      if(city)
        parsed = city.id.toString();
    }
    return parsed;
  }
}
