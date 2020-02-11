import { Component, Input, OnInit } from '@angular/core';
import { IDashboardTile } from '../IDashboardTile';

@Component({
  selector: 'dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit {

  @Input() tile: IDashboardTile;

  constructor () { }

  ngOnInit () {
  }

}
