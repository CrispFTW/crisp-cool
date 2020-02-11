import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';
import { DealCardComponent } from './deal-card.component';


@NgModule({
  declarations: [DealCardComponent],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [DealCardComponent]
})
export class DealCardModule { }
