import { ErrorService } from './../../services/error.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faCarCrash } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.css']
})
export class HttpErrorComponent implements OnInit, OnDestroy {

  private errorServiceSubscription: Subscription;
  public errorReceived: HttpErrorResponse | undefined = undefined;
  public faCarCrash = faCarCrash;

  constructor(private errorService: ErrorService) { 
    this.errorServiceSubscription = this.errorService.getErrorObservable().subscribe(
      (response: HttpErrorResponse | undefined) => {        
        this.errorReceived = response;        
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.errorServiceSubscription){
      this.errorServiceSubscription.unsubscribe();
    }
  }

}
