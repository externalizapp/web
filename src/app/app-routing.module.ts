import { AboutComponent } from './about/about.component';
import { DataContainerComponent } from './data/data-container.component';
import { ResultsGuardGuard } from './guards/results-guard.guard';
import { GlobalHttpInterceptorGuard } from './guards/global-http-interceptor.guard';
import { PageNotFoundComponentComponent } from './errors/page-not-found-component/page-not-found-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { ViewerContainerComponent } from './viewer/viewer-container.component';
import { ApiComponent } from './api/api.component';
import { HttpErrorComponent } from './errors/http-error/http-error.component';


const routes: Routes = [
  { path: 'results', component: ResultsComponent, canActivate: [ResultsGuardGuard] },
  { path: 'view', component: ViewerContainerComponent },
  { path: 'api', component: ApiComponent },
  { path: 'about', component: AboutComponent },
  { path: 'httperror', component: HttpErrorComponent, canActivate: [GlobalHttpInterceptorGuard] },
  { path: '', component: DataContainerComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
