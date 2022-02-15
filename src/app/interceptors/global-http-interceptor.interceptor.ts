import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private errorService: ErrorService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError( (response: HttpErrorResponse)  => {
        this.errorService.notifyErrorStatus();
        this.errorService.notifyErrorObject(response);
        this.router.navigate(['/httperror']);
        return throwError(() => new Error(response.message));
      })
     )
    }
}
