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
    if (value === 'exited') {
      statusContanerDocker = this.translate.instant('status.exited');
    } else if (value === 'running') {
      statusContanerDocker = this.translate.instant('status.running');
    } else if (value === 'created') {
      statusContanerDocker = this.translate.instant('status.created');
    } else if (value === 'paused') {
      statusContanerDocker = this.translate.instant('status.paused');
    } else if (value === 'restarting') {
      statusContanerDocker = this.translate.instant('status.restarting');
    } else if (value === 'removing') {
      statusContanerDocker = this.translate.instant('status.removing');
    } else if (value === 'dead') {
      statusContanerDocker = this.translate.instant('status.dead');
    }
    return statusContanerDocker;
  }

}