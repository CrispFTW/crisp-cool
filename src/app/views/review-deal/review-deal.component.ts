import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { DealService } from '@app/services/deal.service';
import { DealStatus } from '@app/types/DealStatus';
import { IDeal } from '@models/IDeal.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'review-deal',
  templateUrl: './review-deal.component.html',
  styleUrls: ['./review-deal.component.scss']
})
export class ReviewDealComponent implements OnInit, OnDestroy {

  private dealSub$: Subscription;
  public deals: IDeal[];
  public dealView: FormControl = new FormControl(DealStatus.Submitted);

  constructor (private dealsService: DealService) { }

  ngOnInit () {
    this.dealSub$ = this.dealsService
      .getSubmittedDeals()
      .valueChanges()
      .subscribe(deals => this.deals = deals);
  }

  private getRequestedDealView (dealType: DealStatus): AngularFirestoreCollection<IDeal> {
    switch (dealType) {
      case DealStatus.Active:
        return this.dealsService.getActiveDeals();
      case DealStatus.Pending:
        return this.dealsService.getPendingDeals();
      case DealStatus.Submitted:
      default:
        return this.dealsService.getSubmittedDeals();
    }
  }

  public logDeal (dealPath: string): void {
    console.log(dealPath);
  }

  public getDealsBy (value: DealStatus): void {
    this.dealSub$ = this.getRequestedDealView(value)
      .valueChanges()
      .subscribe(deals => this.deals = deals);
  }

  logDeals (): void {
    console.log(this.deals);
  }

  ngOnDestroy (): void {
    this.dealSub$.unsubscribe();
  }

}
