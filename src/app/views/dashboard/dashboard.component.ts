import { Component, OnInit } from '@angular/core';
import { IDashboardTile } from './IDashboardTile';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tiles: IDashboardTile[] = [
    { title: 'Off Market Deals', icon: 'house-4', link: '/deals' },
    { title: 'My Pipeline', icon: 'house-2' },
    { title: 'Deal Maker Apply Form', icon: 'contract' },
    { title: 'New Deal File', icon: 'contract', link: '/create-deal' },
    { title: 'New Deal Builder', icon: 'house-13' },
    { title: 'Review/Approve Deals', icon: 'stamp', link: '/review-deal' },
    { title: 'Admin', icon: 'real-estate', link: '/user-admin' },
  ];

  constructor () { }

  ngOnInit () {
  }

}
