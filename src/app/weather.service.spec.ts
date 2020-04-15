import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { APP_CONFIG, WEATHER_DI_CONFIG } from './app.config';

describe('WeatherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [{ provide: APP_CONFIG, useValue: WEATHER_DI_CONFIG }]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
