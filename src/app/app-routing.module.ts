import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoductionsComponent } from './poductions/poductions.component';
import { ProductionDetailComponent } from './production-detail/production-detail.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'login', component:LoginComponent},
  {path: 'productions', component:PoductionsComponent}, 
  {path: 'production/:id', component:ProductionDetailComponent},
  {path: '**', component: PageNotFoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
