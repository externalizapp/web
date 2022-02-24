import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DockModule } from 'primeng/dock';
import { FileSaverModule } from 'ngx-filesaver';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { ResultsComponent } from './results//results.component';
import { ResultsTableComponent } from './results/results-table/results-table.component';
import { PageNotFoundComponentComponent } from './errors/page-not-found-component/page-not-found-component.component';
import { DataContainerComponent } from './data/data-container.component';
import { SidebarComponent } from './footer/sidebar/sidebar.component';
import { ViewerComponent } from './viewer/viewer/viewer.component';
import { AboutComponent } from './about/about.component';
import { ApiComponent } from './api/api.component';
import { FooterComponent } from './footer/footer.component';
import { ViewerContainerComponent } from './viewer/viewer-container.component';
import { DropdownModule } from 'primeng/dropdown';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpErrorComponent } from './errors/http-error/http-error.component';
import { GlobalHttpInterceptor } from './interceptors/global-http-interceptor.interceptor';
import { StatsComponent } from './stats/stats.component';
import { HeaderComponent } from './header/header.component';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import { TabComponent } from './data/tab/tab.component';
import { ContractBlockComponent } from './contract-block/contract-block.component';
import {SliderModule} from 'primeng/slider';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import { FilterComponent } from './filter/filter.component';




@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    ResultsTableComponent,
    PageNotFoundComponentComponent,
    SearchComponent,
    DataContainerComponent,
    SidebarComponent,
    ViewerComponent, AboutComponent, ApiComponent, FooterComponent, ViewerContainerComponent, HttpErrorComponent, StatsComponent, HeaderComponent, TabComponent, ContractBlockComponent, FilterComponent
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarModule,
    DockModule,
    DropdownModule,
    FileSaverModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ListboxModule,
    TableModule,
    TabViewModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  SliderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
