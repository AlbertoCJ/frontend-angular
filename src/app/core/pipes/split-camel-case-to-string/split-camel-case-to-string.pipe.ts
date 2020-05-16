import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitCamelCaseToString'
})
export class SplitCamelCaseToStringPipe implements PipeTransform {

  transform(value: any): any {
    return value.split(/(?=[A-Z])/).join(' ');
  }

}
