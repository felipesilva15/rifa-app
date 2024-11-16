import { CustomDynamicDialogService } from './../service/custom-dynamic-dialog.service';
import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private customDynamicDialogService: CustomDynamicDialogService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.token && this.authService.token != ''){
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.authService.token}`
        }
      });
    }

    return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          console.error(err);

          if (err instanceof HttpErrorResponse) {
            if (err.status == 401 && !this.router.url.includes('/auth')) {
              this.router.navigate(['/auth/login']);
              return;
            }

            let message = err.error.message ? err.error.message : 'Erro inesperado. Tente novamente mais tarde ou entre em contato com o administrador do sistema.';
            this.customDynamicDialogService.showError(message);
          }
        }
      )
    );
  }
}
