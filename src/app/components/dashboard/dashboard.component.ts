import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { dummyTable, dummyChart } from '../../static';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = dummyTable;

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  dummyChartData = dummyChart;

  constructor(private dataService: DataService) {
    this.data = [];
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
