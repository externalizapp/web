import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contrato } from '../../models/contrato.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  private dateSubscription: Subscription | undefined;
  private amountSubscription: Subscription | undefined;
  
  public contracts: Array<Contrato> | undefined;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.dateSubscription){
      this.dateSubscription.unsubscribe();
    }
    if (this.amountSubscription){
      this.amountSubscription.unsubscribe();
    }
  }

  handleChange(e: any) {
    if (e.index == 0){
      this.doRetrieveByDate();
    }else{
      this.doRetrieveByAmount();
    }
    
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
  
}
