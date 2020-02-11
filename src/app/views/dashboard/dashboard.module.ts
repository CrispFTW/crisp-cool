import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent, DashboardTileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule { }
