import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contrato } from '../models/contrato.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-viewer-container',
  templateUrl: './viewer-container.component.html',
  styleUrls: ['./viewer-container.component.css']
})
export class ViewerContainerComponent implements OnInit, OnDestroy {
  contract: Contrato | undefined;
  
  private queryParametersSubscription: Subscription;
  private dataRetrievalSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { 
    this.queryParametersSubscription =  this.route.queryParams.subscribe(
      (queryParameters: Params ) => {    
        this.retrieveData(queryParameters);  
      }
    );
  }
  
  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.queryParametersSubscription.unsubscribe();
    if(this.dataRetrievalSubscription){
      this.dataRetrievalSubscription.unsubscribe();
    }
  }
  

  private retrieveData(queryParameters: Params): void {
    const contractId: number = queryParameters['idContract'];

    this.dataRetrievalSubscription = this.searchService.queryContract(contractId).subscribe(
      (response: Contrato) => {
        this.contract = response;
      }
    );
  }
}
