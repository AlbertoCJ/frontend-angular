import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'statusContainerDockerAws',
  pure: false
})
export class StatusContainerDockerAwsPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: string): string {
    let statusContanerDockerAws = '';

    switch (value) {
      case 'Launching':
        statusContanerDockerAws = this.translate.instant('statusAWS.launching');
        break;
      case 'Updating':
        statusContanerDockerAws = this.translate.instant('statusAWS.updating');
        break;
      case 'Ready':
        statusContanerDockerAws = this.translate.instant('statusAWS.ready');
        break;
      case 'Terminating':
        statusContanerDockerAws = this.translate.instant('statusAWS.terminating');
        break;
      case 'Terminated':
        statusContanerDockerAws = this.translate.instant('statusAWS.terminated');
        break;
    }

    return statusContanerDockerAws;
  }

}
