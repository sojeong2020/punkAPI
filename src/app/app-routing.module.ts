import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoductionsComponent } from './poductions/poductions.component';
import { ProductionDetailComponent } from './production-detail/production-detail.component';

const routes: Routes = [
  
  {path: 'productions', component:PoductionsComponent}, 
  {path: 'production/:id', component:ProductionDetailComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
