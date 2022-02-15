import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchQuery } from '../models/search_query.model';
import { Contrato } from '../models/contrato.model';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private searchUrl: string = Config.SEARCH_URL;
  private contractUrl: string = Config.VIEWER_URL;

  constructor(private http: HttpClient) { }

  private replaceParameter(url: string, key: string, value: string): string{
    return url.replace("{"+key+"}",value);
  }

  public querySearch(searchQuery: SearchQuery) : Observable<Array<Contrato>> {
    // return this.http.get<SearchResponse>(this.configUrl, {params: searchQuery as any});
    return this.http.get<Array<Contrato>>(this.searchUrl);
  }

  public queryContract(idContract: number) : Observable<Contrato> {
    // return this.http.get<Contrato>(this.contractUrl, {params: {'id'}});
    return this.http.get<Contrato>(this.replaceParameter(this.contractUrl, 'idContract', idContract.toString()));
  }
}
