import { Component, OnInit } from '@angular/core';
import { AppDataService } from '@app/services/app-data.service';
import { DealService } from '@app/services/deal.service';
import { IDeal } from '@models/IDeal.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'deals-view',
  templateUrl: './deals-view.component.html',
  styleUrls: ['./deals-view.component.scss']
})
export class DealsViewComponent implements OnInit {

  private dealSub$: Subscription;
  public deals: IDeal[];

  constructor (private dealsService: DealService, private data: AppDataService) { }

  ngOnInit () {
    this.dealSub$ = this.dealsService
      .getActiveDeals()
      .valueChanges()
      .subscribe(deals => this.deals = deals);
  }

  public logDeal (dealPath: string) {
    console.log(dealPath);
  }

  logDeals (): void {
    console.log(this.deals);
  }

}
