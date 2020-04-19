import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { LoadingScreenService } from './core/services/loading-screen/loading-screen.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

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

  constructor(private auth: AuthService,
              private loadingScreenService: LoadingScreenService) {
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
      (status: boolean) => {
        this.loading = status;
      }
    );
  }

  showMenu() {
    return this.auth.isAuth();
  }

}
