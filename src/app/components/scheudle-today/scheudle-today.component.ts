import { Component } from '@angular/core';
import { TodayScheudleComponent } from './today-scheudle/today-scheudle.component';
import { MessagesComponent } from './messages/messages.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-scheudle-today',
  standalone: true,
  imports: [TodayScheudleComponent, MessagesComponent, NewTaskComponent],
  templateUrl: './scheudle-today.component.html',
  styleUrl: './scheudle-today.component.scss'
})
export class ScheudleTodayComponent {

}
