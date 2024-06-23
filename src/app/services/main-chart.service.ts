import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainChartService {
  constructor() {}

  getMainChartOtions() {
    return {
      series: [
        {
          name: 'Team A',
          data: [15, 100, 210, 310, 190, 220, 30, 60, 20, 75, 175, 110],
        },
        {
          name: 'Team B',
          data: [60, 150, 100, 390, 260, 180, 210, 120, 205, 300, 350, 140],
        },
      ],
      colors: ['#1EA7FF', '#5051F9'],
      chart: {
        height: 247,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 1,
      },
      markers: {
        size: 5,
        colors: ['#1EA7FF', '#5051F9'],
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      xaxis: {
        categories: [
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
          'Jan',
          'Feb',
          'Mar',
          'Apr',
        ],
        labels: {
          style: {
            colors: '#768396',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#768396',
          },
        },
      },
      tooltip: {
        theme: 'dark',
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 100],
        },
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    };
  }
}
