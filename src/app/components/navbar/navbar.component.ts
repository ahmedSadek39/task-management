import { Component } from '@angular/core';
import { SvgIconComponent } from '@components/svg/svg-icon.component';
import { PRODUCTION_ASSETS_PATH } from 'src/app/constants/paths';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  assetsPath = PRODUCTION_ASSETS_PATH;

}
