import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ReviewDealRoutingModule } from './review-deal-routing.module';
import { ReviewDealComponent } from './review-deal.component';

import { MaterialModule } from '@app/material.module';
import { DealCardModule } from '@molecules/deal-card/deal-card.module';
import { DealListModule } from '@molecules/deal-list/deal-list.module';

@NgModule({
  declarations: [ReviewDealComponent],
  imports: [
    CommonModule,
    ReviewDealRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    DealCardModule,
    DealListModule,
  ],
})
export class ReviewDealModule { }
