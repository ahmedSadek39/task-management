import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SvgIconComponent } from './svg-icon.component';
import { Observable, map } from 'rxjs';
import { SafeHtmlPipe } from './safe-html.pipe';
import { PRODUCTION_ASSETS_PATH } from 'src/app/constants/paths';

@Component({
  selector: 'app-svg-chart',
  standalone: true,
  imports: [HttpClientModule, SvgIconComponent, SafeHtmlPipe],
  template: ` <div [innerHTML]="svgContent | safeHtml"></div> `,
})
export class SvgChartComponent implements OnChanges {
  @Input() color: string = '';
  svgContent: string = '';
  assetsPath = PRODUCTION_ASSETS_PATH;

  constructor(private http: HttpClient, private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['color']) {
      this.loadAndModifySvg();
    }
  }

  private loadAndModifySvg() {
    this.getModifiedSvg(
      this.assetsPath +'svgs/line-chart.svg',
      this.color
    ).subscribe((svg) => {
      this.svgContent = svg;
    });
  }

  private getModifiedSvg(url: string, color: string): Observable<string> {
    return this.http
      .get(url, { responseType: 'text' })
      .pipe(map((svgContent: any) => this.modifySvgColor(svgContent, color)));
  }

  private modifySvgColor(svgContent: string, color: string): string {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(svgContent, 'image/svg+xml');
    const svgElement = xmlDoc.getElementsByTagName('path')[0];
    if (svgElement) {
      svgElement.setAttribute('stroke', color);
    }
    return new XMLSerializer().serializeToString(xmlDoc);
  }
}
