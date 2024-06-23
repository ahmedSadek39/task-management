import { Component } from '@angular/core';
import { SvgIconComponent } from '@components/svg/svg-icon.component';
import { PRODUCTION_ASSETS_PATH } from 'src/app/constants/paths';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  assetsPath = PRODUCTION_ASSETS_PATH;

}
