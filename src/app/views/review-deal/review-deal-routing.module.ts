import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewDealComponent } from './review-deal.component';


const routes: Routes = [
  { path: '', component: ReviewDealComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewDealRoutingModule { }
