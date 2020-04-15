import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TemperatureConverterPipe } from './temperature-converter.pipe';
import { APP_CONFIG, WEATHER_DI_CONFIG } from './app.config';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        TemperatureConverterPipe
      ],
      providers: [{ provide: APP_CONFIG, useValue: WEATHER_DI_CONFIG }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
