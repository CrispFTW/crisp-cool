import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDealComponent } from './create-deal.component';


const routes: Routes = [
  { path: '', component: CreateDealComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDealRoutingModule { }
