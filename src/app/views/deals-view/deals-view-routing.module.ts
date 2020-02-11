import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsViewComponent } from './deals-view.component';


const routes: Routes = [
  { path: '', component: DealsViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsViewRoutingModule { }
