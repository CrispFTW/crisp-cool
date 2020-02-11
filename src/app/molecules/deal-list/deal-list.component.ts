import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DealStatus } from '@app/types/DealStatus';
import { IDeal } from '@models/IDeal.model';
import { IDealsSortOptions } from '@models/IDealSortOptions.model';

@Component({
  selector: 'deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss']
})
export class DealListComponent implements OnInit {

  @Input() dataSource: IDeal[];
  @Input() displayedColumns: string[] = [
    'address',
    'offMarketAsk'
  ];
  @Output() sortDealsBy: EventEmitter<DealStatus> = new EventEmitter();
  sortOptions: IDealsSortOptions[] = [
    { value: DealStatus.Draft, viewValue: 'Draft' },
    { value: DealStatus.Submitted, viewValue: 'Submitted' },
    { value: DealStatus.Pending, viewValue: 'Pending' },
    { value: DealStatus.Active, viewValue: 'Active' },
    { value: DealStatus.Archived, viewValue: 'Archived' },
  ];

  constructor (private router: Router) { }

  ngOnInit () {
    console.log(this.dataSource);
  }

  public goToDealDetail (dealId: string): void {
    this.router.navigate(['/deal-detail', dealId]);
  }

  public changeViewableDeals (value: DealStatus) {
    console.log(value);
    this.sortDealsBy.emit(value);
  }

}
