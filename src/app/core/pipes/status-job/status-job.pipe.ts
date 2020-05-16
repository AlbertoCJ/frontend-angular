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
    if (value === 'COMPLETED') {
      statusJob = this.translate.instant('status.completed');
    } else if (value === 'RUNNING') {
      statusJob = this.translate.instant('status.running');
    } else if (value === 'PARTIAL') {
      statusJob = this.translate.instant('status.partial');
    } else if (value === 'ERROR') {
      statusJob = this.translate.instant('status.error');
    }
    return statusJob;
  }

}
