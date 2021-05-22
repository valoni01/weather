/* This is a pipe that converts a temperature value the the specified measurement */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, measurement:string = '') {
    let temp:string;
    if(measurement === 'C'){
      temp =  ((value - 32) * 5/9).toFixed(2);
      return `${temp}°C`
    }
    else if(measurement === 'F'){
      temp =  ((value * 9/5) + 32).toFixed(2);
      return `${temp}°F`
    }
    else{
      return `${value}°`;
    }
  }

}
