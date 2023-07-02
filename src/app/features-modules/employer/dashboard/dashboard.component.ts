import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexMarkers,
} from 'ng-apexcharts';

export type ChartOptions = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  markers: ApexMarkers[] | any;
};
export type radialChartOptions = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  markers: string[] | any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;
  public radialchartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'profile view',
          data: [100, 150, 200, 250, 200, 250, 200, 200, 200, 200, 300, 350],
          colors: ['#2d93a9'],
        },
      ],
      chart: {
        height: 360,

        type: 'line',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },

      stroke: {
        colors: ['#2d93a9'],
        curve: 'straight',
        width: [1],
      },
      grid: {
        position: 'front',
        borderColor: '#ddd',
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },

      markers: {
        size: 4,
        colors: ['#2d93a9'],
        strokeColors: '#2d93a9',
        strokeWidth: 1,
        hover: {
          size: 7,
        },
      },
    };

    this.radialchartOptions = {
      series: [85, 75, 60, 40],
      chart: {
        toolbar: {
          show: false,
        },
        height: 250,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '50%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ['#7B46BE', '#FA6CA4', '#FACD3A', '#24C0DC'],
      labels: ['Applied Jobs', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: false,
        floating: true,
        fontSize: '16px',
        position: 'bottom',
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },

        itemMargin: {
          vertical: 3,
        },
      },
    };
  }
}
