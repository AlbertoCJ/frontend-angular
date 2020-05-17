import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'statusJob',
  pure: false
})
export class StatusJobPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: string): string {
    let statusJob = '';

    switch (value) {
      case 'COMPLETED':
        statusJob = this.translate.instant('status.completed');
        break;
      case 'RUNNING':
        statusJob = this.translate.instant('status.running');
        break;
      case 'PARTIAL':
        statusJob = this.translate.instant('status.partial');
        break;
      case 'ERROR':
        statusJob = this.translate.instant('status.error');
        break;
    }

    return statusJob;
  }

}
