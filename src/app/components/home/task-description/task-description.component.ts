import { Component } from '@angular/core';
import { SvgIconComponent } from '@components/svg/svg-icon.component';
import { PRODUCTION_ASSETS_PATH } from '@constants/paths';
import { Task } from '@models/global.model';
import { TaskService } from '@services/task.service';

@Component({
  selector: 'app-task-description',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './task-description.component.html',
  styleUrl: './task-description.component.scss',
})
export class TaskDescriptionComponent {
  tasks: Task[] = [];
  assetsPath = PRODUCTION_ASSETS_PATH;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
