import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
 
  private backLinkSubject: BehaviorSubject<string | boolean> = new BehaviorSubject<string | boolean>(false);
  private readonly backLinkObservable: Observable<string | boolean> = this.backLinkSubject.asObservable();

  constructor() {  }

  public setBackLink(backLink: string): void{
    this.backLinkSubject.next(backLink);
  }

  public getBackLink(): Observable<string | boolean>{
    return this.backLinkObservable;
  }
}
