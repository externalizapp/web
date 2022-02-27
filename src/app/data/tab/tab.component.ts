import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchQuery } from 'src/app/models/search_query.model';
import { Contrato } from '../../models/contrato.model';
import { SearchService } from '../../services/search.service';

enum TabModeEnum {
  DATE = 0,
  QUANTITY = 1,
  ALL = 2,
  SEARCH = 3,
  CONTRACT = 4,
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnDestroy {

  public searchQuery: SearchQuery | undefined;
  public idContract: number | undefined = undefined;
  public tabModeEnum = TabModeEnum;

  public currentIndex: TabModeEnum = TabModeEnum.DATE;
  private dateSubscription: Subscription | undefined;
  private amountSubscription: Subscription | undefined;
  private queryParametersSubscription: Subscription;
  private searchServiceSubscription: Subscription | undefined;
  
  public contracts: Array<Contrato> | undefined;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) {  
    this.queryParametersSubscription = this.route.queryParams.subscribe(
      (queryParameters: Params ) => {   
        if ('query' in queryParameters) {
          this.searchQuery = queryParameters as SearchQuery;
          this.doSearch();
          this.currentIndex = TabModeEnum.SEARCH;
        }else if('idContract' in queryParameters){
          this.idContract = queryParameters['idContract'];
          this.currentIndex = TabModeEnum.CONTRACT;
        }
      }
    );
  }

  ngOnInit(): void {
    this.loadTab();
  }

  ngOnDestroy(): void {
    if (this.dateSubscription){
      this.dateSubscription.unsubscribe();
    }
    if (this.amountSubscription){
      this.amountSubscription.unsubscribe();
    }

    this.queryParametersSubscription?.unsubscribe();

    if(this.searchServiceSubscription){
      this.searchServiceSubscription.unsubscribe();
    }
  }

  loadTab(): void {
    if (this.currentIndex == TabModeEnum.DATE){
      this.doRetrieveByDate();
    }else if (this.currentIndex == TabModeEnum.QUANTITY){
      this.doRetrieveByAmount();
    }else if (this.currentIndex == TabModeEnum.SEARCH){
      this.doSearch();
    }
  }

  handleChange(e: any) {
    switch(e.index){
      case 0:
        this.currentIndex = this.tabModeEnum.DATE;
        break;
      case 1:
        this.currentIndex = this.tabModeEnum.QUANTITY;
        break;
      case 2:
        this.currentIndex = this.tabModeEnum.ALL;
        break;
      case 3:
        this.currentIndex = this.tabModeEnum.SEARCH;
        break;
      case 4:
        this.currentIndex = this.tabModeEnum.CONTRACT;
        break;
    }
    this.loadTab();
  }

  private doRetrieveByDate(): void {    
    this.dateSubscription = this.searchService.retriveByDate().subscribe(
      (response: Array<Contrato>) => {
        this.contracts = response;
      }
    );
  }

  private doRetrieveByAmount(): void {    
    this.dateSubscription = this.searchService.retriveByAmount().subscribe(
      (response: Array<Contrato>) => {
        this.contracts = response;
      }
    );
  }
  
  private doSearch(): void {
    if (!this.searchQuery){
      return;
    }
    this.searchServiceSubscription = this.searchService.querySearch(this.searchQuery).subscribe(
      (response: Array<Contrato>) => {
        this.contracts = response;
      }
    );
  }
}
