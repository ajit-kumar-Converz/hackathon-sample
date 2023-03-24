import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { dummyTable, dummyChart } from '../../static';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any;
  dataFromId: any[];
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'timestamp',
  ];
  dataSource: any;
  dummyChartData = dummyChart;

  constructor(private dataService: DataService) {
    this.data = [];
    this.dataFromId = [];
    this.dummyChartData = [] as any;
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.data = dummyTable.data;
      this.dataSource = JSON.parse(dummyTable.data.functions);
      console.log(this.data);
    });
  }

  // dummy with payload
  test() {
    this.dataService.getDataById('id').subscribe((data) => {
      this.dataFromId = data;
      console.log(this.data);
    });
  }
}
