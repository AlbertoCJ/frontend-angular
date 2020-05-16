import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'statusAlgorithm',
  pure: false
})
export class StatusAlgorithmPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: string): string {
    let statusAlgorithm = '';
    if (value === 'COMPLETED') {
      statusAlgorithm = this.translate.instant('status.completed');
    } else if (value === 'RUNNING') {
      statusAlgorithm = this.translate.instant('status.running');
    } else if (value === 'ERROR') {
      statusAlgorithm = this.translate.instant('status.error');
    }
    return statusAlgorithm;
  }

}
