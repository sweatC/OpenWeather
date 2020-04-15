import { InjectionToken } from '@angular/core';
import { AppConfig } from './interfaces/appConfig';

export const WEATHER_DI_CONFIG: AppConfig = {
  endpoint: 'http://api.openweathermap.org/data/2.5/weather',
  appId: '71883d403614a59b663a47450233f05e'
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
