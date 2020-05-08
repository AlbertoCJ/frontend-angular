import { Component, OnInit } from '@angular/core';

import { GlobalConfig } from '../../entities/global-config';
import { GlobalConfigService } from '../../../core/services/global-config/global-config.service';

@Component({
  selector: 'app-controller-global-config',
  templateUrl: './controller-global-config.component.html',
  styleUrls: ['./controller-global-config.component.css']
})
export class ControllerGlobalConfigComponent implements OnInit {

  globalConfig: GlobalConfig;

  constructor(private globalConfigService: GlobalConfigService) { }

  ngOnInit() {
    this.globalConfig = this.globalConfigService.getGlobalConfigSessionStorage();
  }

}
