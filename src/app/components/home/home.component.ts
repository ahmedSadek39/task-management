import { Component } from '@angular/core';
import { TaskDescriptionComponent } from '@components/home/task-description/task-description.component';
import { CardComponent } from './card/card.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, TaskDetailsComponent, TaskDescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}