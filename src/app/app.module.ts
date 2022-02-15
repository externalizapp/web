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
import { SearchComponent } from './search/search/search.component';

import { ResultsComponent } from './results//results.component';
import { ResultsTableComponent } from './results/results-table/results-table.component';
import { PageNotFoundComponentComponent } from './errors/page-not-found-component/page-not-found-component.component';
import { SearchContainerComponent } from './search/search-container.component';
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



@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    ResultsTableComponent,
    PageNotFoundComponentComponent,
    SearchComponent,
    SearchContainerComponent,
    SidebarComponent,
    ViewerComponent, AboutComponent, ApiComponent, FooterComponent, ViewerContainerComponent, HttpErrorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DockModule,
    DropdownModule,
    FileSaverModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    TableModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })    
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
