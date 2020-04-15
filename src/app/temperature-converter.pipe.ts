import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number, unit: string): string {
    let temperature;
    if(value && !isNaN(value)) {
      switch(unit) {
        case 'C':
          temperature = (value - 273.15).toFixed(2);
          break;
        case 'K':
          temperature = (value + 273.15).toFixed(2);
          break;
      }
    }
    return `${temperature}`;
  }

}
