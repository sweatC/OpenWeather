import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { APP_CONFIG, WEATHER_DI_CONFIG } from './app.config';
import { TemperatureConverterPipe } from './temperature-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: WEATHER_DI_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
