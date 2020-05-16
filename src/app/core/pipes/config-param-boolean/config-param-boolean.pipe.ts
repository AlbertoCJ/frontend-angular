import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'configParamBoolean'
})
export class ConfigParamBooleanPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {

    let newValue = args[0];

    const paramsList = [
      'windowSize',
      'crossValidate',
      'meanSquared',
      'eliminateColinearAttributes',
      'unpruned', 'useUnsmoothed',
      'buildRegressionTree'
    ];
    // Si existe en la lista
    if (paramsList.indexOf(value) >= 0) {
        if (newValue === 1 || newValue === '1') {
          newValue = true;
        } else {
          newValue = false;
        }
    }


    return newValue;
  }

}
