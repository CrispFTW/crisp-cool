import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrationComponent } from './celebration.component';


const routes: Routes = [
  { path: '', component: CelebrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebrationRoutingModule { }
