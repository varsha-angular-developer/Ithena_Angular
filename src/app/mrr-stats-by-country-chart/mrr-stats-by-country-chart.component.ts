import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HCMore from 'highcharts/highcharts-more';
HCMore(Highcharts);

@Component({
  selector: 'app-mrr-stats-by-country-chart',
  templateUrl: './mrr-stats-by-country-chart.component.html',
  styleUrls: ['./mrr-stats-by-country-chart.component.scss']
})


 export class MrrStatsByCountryChartComponent implements OnInit{
   
    constructor() { }
  
    ngOnInit(): void {
      this.renderBubbleChart();
    }
  
    renderBubbleChart() {
      const container = document.getElementById('container');
      if (!container) {
        console.error('Container element not found.');
        return;
      }
  
      const options: Highcharts.Options = { 
        chart: {
          type: 'bubble',
          plotBorderWidth: 1
        },
        title: {
          text: 'MRR State by Country'
        },
        xAxis: {
          gridLineWidth: 1,
          title: {
            text: 'Country'
          },

          
          labels: {
         
            format: '{value} $'
          }
          
        },
        yAxis: {
          startOnTick: false,
          endOnTick: false,
          title: {
            text: 'MRR'
          },
          labels: {
            format: '{value} $'
          }
        },
        series: [
          {
            type: 'bubble',
            name: 'Country MRR', 
            data: [
              { name: 'United States', x: 0, y: 10000, z: 500, color: 'pink' },
              { name: 'Australia', x: 100, y: 8000, z: 400, color: 'yellow' },
              { name: 'Canada', x: 200, y: 6000, z: 300, color: 'blue' },
              { name: 'United Kingdom', x: 300, y: 7000, z: 350, color: 'orange' }
            ]
          },
         
        ]
      }
  
      Highcharts.chart(container as HTMLElement, options); 
    }
  }
  


