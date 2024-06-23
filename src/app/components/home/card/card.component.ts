import { Component } from '@angular/core';
import { SvgChartComponent } from '@components/svg/svg-chart.component';
import { SvgIconComponent } from '@components/svg/svg-icon.component';
import { PRODUCTION_ASSETS_PATH } from '@constants/paths';
import { Card } from '@models/global.model';
import { CardService } from '@services/card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SvgIconComponent, SvgChartComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cards: Card[] = [];
  assetsPath = PRODUCTION_ASSETS_PATH;

  constructor(private cardService: CardService) {}
  ngOnInit() {
    this.cards = this.cardService.getCards();
  }
}
