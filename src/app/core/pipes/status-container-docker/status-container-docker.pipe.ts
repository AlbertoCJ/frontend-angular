import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'statusContainerDocker',
  pure: false
})
export class StatusContainerDockerPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: string): string {
    let statusContanerDocker = '';

    switch (value) {
      case 'exited':
        statusContanerDocker = this.translate.instant('status.exited');
        break;
      case 'running':
        statusContanerDocker = this.translate.instant('status.running');
        break;
      case 'created':
        statusContanerDocker = this.translate.instant('status.created');
        break;
      case 'paused':
        statusContanerDocker = this.translate.instant('status.paused');
        break;
      case 'restarting':
        statusContanerDocker = this.translate.instant('status.restarting');
        break;
      case 'removing':
        statusContanerDocker = this.translate.instant('status.removing');
        break;
      case 'dead':
        statusContanerDocker = this.translate.instant('status.dead');
        break;
    }

    return statusContanerDocker;
  }

}
