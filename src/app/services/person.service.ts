import { Injectable } from '@angular/core';
import { PERSONS } from '@constants/persons';
import { Person } from '@models/global.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  getPersons(): Person[] {
    return PERSONS;
  }
}
