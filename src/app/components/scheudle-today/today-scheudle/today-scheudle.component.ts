import { Component } from '@angular/core';
import { SvgIconComponent } from '@components/svg/svg-icon.component';
import { Person } from '@models/global.model';
import { PersonService } from '@services/person.service';
import { PRODUCTION_ASSETS_PATH } from 'src/app/constants/paths';

@Component({
  selector: 'app-today-scheudle',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './today-scheudle.component.html',
  styleUrl: './today-scheudle.component.scss',
})
export class TodayScheudleComponent {
  persons: Person[] = [];
  assetsPath = PRODUCTION_ASSETS_PATH;

  constructor(private personService: PersonService) {}
  ngOnInit() {
    this.persons = this.personService.getPersons();
  }
}
