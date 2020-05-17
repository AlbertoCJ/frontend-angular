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

    switch (value) {
      case 'COMPLETED':
        statusAlgorithm = this.translate.instant('status.completed');
        break;
      case 'RUNNING':
        statusAlgorithm = this.translate.instant('status.running');
        break;
      case 'ERROR':
        statusAlgorithm = this.translate.instant('status.error');
        break;
    }

    return statusAlgorithm;
  }

}
