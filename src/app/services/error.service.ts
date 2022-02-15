import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorSubject: BehaviorSubject<HttpErrorResponse | undefined> = new BehaviorSubject<HttpErrorResponse | undefined>(undefined);
  private readonly errorSubjectObservable: Observable<HttpErrorResponse | undefined> = this.errorSubject.asObservable();

  private isErrorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly isError: Observable<boolean> = this.isErrorSubject.asObservable();

  constructor() { }

  public notifyErrorObject(errorResponse: HttpErrorResponse): void {
    this.errorSubject.next(errorResponse);
  }

  public notifyErrorStatus(): void {
    this.isErrorSubject.next(true);
  }

  public getErrorObservable(): Observable<HttpErrorResponse | undefined> {
    return this.errorSubjectObservable;
  }

  public isErrorObservable(): Observable<boolean> {
    return this.isError;
  }
}
