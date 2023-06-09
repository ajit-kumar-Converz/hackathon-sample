import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements AfterViewInit {
  @Input() data: any = [];
  @Input() type: any = 'string';
  constructor() {}

  ngAfterViewInit(): void {
    this.createChart();
  }
  createChart(): void {
    Chart.register(...registerables);

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false,
        },
      },
    };
    const config: ChartConfiguration = {
      type: this.type,
      data: this.data,
      options: options,
    };

    const chartItem: ChartItem = document.getElementById(
      'pieChart'
    ) as ChartItem;
    new Chart(chartItem, config);
  }
}
