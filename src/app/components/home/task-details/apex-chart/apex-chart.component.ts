import { Component } from '@angular/core';
import { MainChartService } from '@services/main-chart.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexYAxis,
  NgApexchartsModule,
  ApexTitleSubtitle,
  ApexTooltip,
} from 'ng-apexcharts';

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any;
  dataLabels: any;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-apex-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './apex-chart.component.html',
  styleUrl: './apex-chart.component.scss',
})
export class ApexChartComponent {
  public chartOptions!: ChartOptions | any;

  constructor(private mainChartService: MainChartService) {}
  ngOnInit() {
    this.chartOptions = this.mainChartService.getMainChartOtions();
  }
}
