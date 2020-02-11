// tslint:disable
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripSpecialChars'
})
export class StripSpecialCharsPipe implements PipeTransform {

  transform (value: any, ...args: any[]): number {
    if (value) {
      return parseFloat(
        typeof value === 'number'
          ? value
          : value.replace(/[^\w\s.]/gi, '')
      );
    }
  }

}
// tslint:enable
