import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
      private authService: AuthService
      ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        /*
        console.log("intercept-hola");
        console.log(request);
        console.log(next);
        */

        const token = this.authService.getToken();
        if (token !== '') {
            request = request.clone({
                setHeaders: {
                    token
                }
            });
        }

        return next.handle(request);
    }
}
