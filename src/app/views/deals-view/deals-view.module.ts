import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DealsViewRoutingModule } from './deals-view-routing.module';
import { DealsViewComponent } from './deals-view.component';

import { MaterialModule } from '@app/material.module';
import { DealCardModule } from '@molecules/deal-card/deal-card.module';
import { DealListModule } from '@molecules/deal-list/deal-list.module';


@NgModule({
  declarations: [DealsViewComponent],
  imports: [
    CommonModule,
    DealsViewRoutingModule,
    MaterialModule,
    DealCardModule,
    DealListModule,
  ],
})
export class DealsViewModule { }
