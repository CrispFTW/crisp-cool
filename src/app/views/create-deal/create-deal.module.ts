import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DealComposerModule } from '@molecules/deal-composer/deal-composer.module';
import { CreateDealRoutingModule } from './create-deal-routing.module';
import { CreateDealComponent } from './create-deal.component';


@NgModule({
  declarations: [CreateDealComponent],
  imports: [
    CommonModule,
    CreateDealRoutingModule,
    DealComposerModule,
  ],
})
export class CreateDealModule { }
