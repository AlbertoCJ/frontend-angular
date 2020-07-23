import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { LoadingScreenService } from './core/services/loading-screen/loading-screen.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import {TranslateService} from '@ngx-translate/core';
import { UserService } from './core/services/user/user.service';
import { GlobalConfigService } from './core/services/global-config/global-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  debounceTime = 200;
  loading = false;
  loadingSubscription: Subscription;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  config = {
    fullScreenBackdrop: true,
    // animationType: ngxLoadingAnimationTypes.none,
    // primaryColour: '#007ad9',
    // secondaryColour: '#007ad9',
    // tertiaryColour: '#007ad9'
  };

  // name: string;

  constructor(private auth: AuthService,
              private loadingScreenService: LoadingScreenService,
              public translate: TranslateService,
              private userService: UserService,
              private globalConfigService: GlobalConfigService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    const language = this.userService.getLanguage();
    if (language === null) {
      translate.use('en');
    } else {
      translate.use(language);
    }

    // if (this.auth.isAuth()) { this.name = this.auth.getUser().name; }
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
      (status: boolean) => {
        this.loading = status;
      }
    );
  }

  showName() {
    return this.auth.isAuth();
  }

  name() {
    let name = '';
    if (this.auth.isAuth()) { name = this.auth.getUser().name; }
    return name;
  }

  showMenuApp() {
    return this.auth.isAuth() && this.auth.getUser().role === 'USER_ROLE';
  }

  showMenuAdmin() {
    return this.auth.isAuth() && this.auth.getUser().role === 'ADMIN_ROLE' && this.globalConfigService.getGlobalConfigSessionStorage();
  }

}
