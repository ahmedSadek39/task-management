import { Component } from '@angular/core';
import { ApexChartComponent } from '@components/home/task-details/apex-chart/apex-chart.component';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [ApexChartComponent],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent {
  schedule: string = 'monthly';
}
