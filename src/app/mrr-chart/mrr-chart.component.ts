import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-mrr-chart',
  templateUrl: './mrr-chart.component.html',
  styleUrls: ['./mrr-chart.component.scss']
})


export class MrrChartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const categories = ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'];
    const mrrData = [1000,2000,3000, 4000,  5000, 6000, ];

    Highcharts.chart('mrr-chart-container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Recurring Revenue (MRR)'
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: 'MRR ($)'
        }
      },
      series: [{
        name: 'MRR',
        data: categories.map((category, index) => [category, mrrData[index]]),
        type: 'column' 
      }]
    });
  }
}