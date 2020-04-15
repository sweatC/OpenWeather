import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { cityWeatherResponse } from './interfaces/cityWeatherResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private weatherService: WeatherService) {}
  cityId = '';
  loading = false;
  error = null;
  weatherInfo: cityWeatherResponse = <cityWeatherResponse>{};
  submit() {
    this.loading = true;
    this.error = null;
    this.weatherService.getCurrentWeather(this.cityId).subscribe(
      (response: cityWeatherResponse) => {
        this.weatherInfo = response;
        this.loading = false;
        this.cityId = '';
      },
      error => {
        this.loading = false;
        this.weatherInfo = <cityWeatherResponse>{};
        this.error = error.error;
        this.cityId = '';
      }
    );
  }
}
