import { Injectable } from '@angular/core';
import { CARDS } from '../constants/cards';
import { Card } from '@models/global.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  getCards(): Card[] {
    return CARDS;
  }
}
