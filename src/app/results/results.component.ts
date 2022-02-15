import { NavigationService } from './../services/navigation.service';
import { SearchService } from './../services/search.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SearchQuery } from '../models/search_query.model';
import { Contrato } from '../models/contrato.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  public contracts: Array<Contrato> = [];
  public query: string = "";

  private queryParametersSubscription: Subscription;
  private routerSubscription: Subscription;
  private searchServiceSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService,
              private navigationService: NavigationService,
              private router: Router) {
    this.queryParametersSubscription = this.route.queryParams.subscribe(
      (queryParameters: Params ) => {   
        const querySearch: SearchQuery = queryParameters as SearchQuery;
        this.query = querySearch['query'];
        this.doSearch(querySearch);  
      }
    );

    this.routerSubscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: object) => {  
      const navigationEvent: NavigationEnd = (event as NavigationEnd);
      if(navigationEvent.url !== undefined){
        this.navigationService.setBackLink(navigationEvent.url);
      }      
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.queryParametersSubscription.unsubscribe();
    if(this.searchServiceSubscription){
      this.searchServiceSubscription.unsubscribe();
    }

    if(this.routerSubscription){
      this.routerSubscription.unsubscribe();
    }
  }

  private doSearch(queryParameters: SearchQuery): void {
    const searchQuery: SearchQuery = queryParameters as SearchQuery;
    this.searchServiceSubscription = this.searchService.querySearch(searchQuery).subscribe(
      (response: Array<Contrato>) => {
        this.contracts = response;
      }
    );
  }

}
