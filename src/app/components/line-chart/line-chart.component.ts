import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements AfterViewInit {
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
          display: true,
        },
      },
    };
    const config: ChartConfiguration = {
      type: this.type,
      data: this.data,
      options: options,
    };

    const chartItem: ChartItem = document.getElementById(
      'my-chart'
    ) as ChartItem;
    new Chart(chartItem, config);
  }
}
