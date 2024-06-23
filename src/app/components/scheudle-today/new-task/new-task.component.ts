import { Component } from '@angular/core';
import { SvgIconComponent } from '@components/svg/svg-icon.component';
import { PRODUCTION_ASSETS_PATH } from 'src/app/constants/paths';
interface Collaborator{
  srcImage: string,
  name:string,
  color:string,
}
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  emotions: string[] = ['🎉', '😍', '😁', '🔥', '😘', '😉', '😎', '👩', '🙄'];
  assetsPath = PRODUCTION_ASSETS_PATH;
  collaborators : Collaborator[] = [
    {
      name: 'Yassine',
      srcImage : 'person6',
      color: '#5051f9'
    },
    {
      name: 'Noah',
      srcImage : 'person5',
      color : '#1EA7FF'
    },
  ]
}
