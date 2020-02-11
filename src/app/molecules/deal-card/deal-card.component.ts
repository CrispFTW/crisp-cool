import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealService } from '@app/services/deal.service';
import { IDeal } from '@models/IDeal.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss'],
})
export class DealCardComponent implements OnInit {

  @HostBinding('class.deal-card') klassName = true;
  @Input() deal: IDeal;
  // tslint:disable-next-line
  primaryPhoto: Observable<any>;
  @HostListener('click')
  onSelectDeal () {
    this.goToDealDetail(this.deal.path);
  }

  constructor (public dealService: DealService, private router: Router) { }

  ngOnInit () {
    // this.deal && this.getImage(this.deal.primaryPhoto.path);
    // this.primaryPhoto = this.deal && this.dealService.getDealPhoto(this.deal.primaryPhoto.path).valueChanges();
  }

  public goToDealDetail (dealId: string): void {
    this.router.navigate(['/deal-detail', dealId]);
  }
}
