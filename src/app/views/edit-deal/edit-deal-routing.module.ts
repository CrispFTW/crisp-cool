import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDealComponent } from './edit-deal.component';


const routes: Routes = [
  { path: '', component: EditDealComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDealRoutingModule { }
