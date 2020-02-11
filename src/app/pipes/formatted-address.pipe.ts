// tslint:disable
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedAddress'
})
export class FormattedAddressPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      const textNodes = value.split(',');
      return `${textNodes.shift()}\n${textNodes.slice(1)}`;
    }
  }

}
// tslint:enable
