import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [HttpClientModule],
  template: ''
})
export class SvgIconComponent {
  @Input() src: string = '';

  constructor(private http: HttpClient, private el: ElementRef) {}

  ngOnInit() {
    this.http.get(this.src, { responseType: 'text' }).subscribe(svg => {
      this.el.nativeElement.innerHTML = svg;
    });
  }
}
