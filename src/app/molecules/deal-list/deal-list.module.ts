import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { PipesModule } from '@pipes/pipes.module';
import { DealListComponent } from './deal-list.component';


@NgModule({
  declarations: [DealListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
  ],
  exports: [DealListComponent]
})
export class DealListModule { }
