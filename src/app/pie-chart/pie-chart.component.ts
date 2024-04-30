import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

  export class PieChartComponent implements OnInit {
  

  ngOnInit(): void {
    this.renderDonutChart();
  }

  renderDonutChart() {
    Highcharts.chart('container', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Page Views'
      },
      plotOptions: {
        pie: {
          innerSize: '50%', 
          depth: 45 
        }
      },
      series: [{
        type: 'pie',
        name: 'Page Views',
        data: [
          { name: 'Referral', y: 10 }, 
          { name: 'Direct', y: 20 },
          { name: 'Organic Search', y: 70 }
        ]
      }],
      colors: [ 'yellow','blue' ,'green'] 
    });
  }
  }
  