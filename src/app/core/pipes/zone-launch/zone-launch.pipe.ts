import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'zoneLaunch',
  pure: false
})
export class ZoneLaunchPipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(value: any): any {
    let label = '';
    switch (value) {
      case 1:
        label = this.translate.instant('controllerLaunchConfirm.valueAWS');
        break;
      case 2:
        label = this.translate.instant('controllerLaunchConfirm.valueLocal');
        break;
    }
    return label;
  }

}
