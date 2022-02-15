import { ErrorService } from './../services/error.service';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorGuard implements CanActivate, OnDestroy {
  private isError: boolean = false;
  private interceptorSuscription: Subscription;

  constructor(private router: Router,
              private errorService: ErrorService) {
      this.interceptorSuscription = this.errorService.isErrorObservable().subscribe(
        (interceptorStatus : boolean) => {
          this.isError = interceptorStatus;          
        }
      );
   }

  ngOnDestroy(): void {
    if(this.interceptorSuscription){
      this.interceptorSuscription.unsubscribe();
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isError){
        this.router.navigate(['/']);
    }
    return this.errorService.isErrorObservable();
  }

}
