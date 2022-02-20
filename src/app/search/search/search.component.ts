import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchQuery } from 'src/app/models/search_query.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchInput: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }  

  isIdMode(): boolean {
    return this.searchInput.length > 0 && this.searchInput.charAt(0) === '#';
  }

  performSearch(showAll: boolean = false) : void {
    if (!showAll){
      const searchQuery: SearchQuery = {
        query: this.searchInput 
      };
  
      this.router.navigate(['/results'], { queryParams: searchQuery});
    }else{
      this.router.navigate(['/results']);
    }

  }

  performVisor(): void {
    const visorId: string = this.searchInput.substring(1, this.searchInput.length);
    this.router.navigate(['/view'], { queryParams: {'idContract': visorId}});
  }

}
