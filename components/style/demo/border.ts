import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-style-border',
  template: `
    <span _border="all">all</span>
    <span _border="top">top</span>
    <span _border="bottom">bottom</span>
    <span _border="start">start</span>
    <span _border="end">end</span>
    <hr>
    <span _border="none">none</span>
    <span _border="no-top">top</span>
    <span _border="no-bottom">bottom</span>
    <span _border="no-start">start</span>
    <span _border="no-end">end</span>
    <hr>
    <span _border="all" _border_color="primary">primary</span>
    <span _border="all" _border_color="secondary">secondary</span>
    <span _border="all" _border_color="success">success</span>
    <span _border="all" _border_color="danger">danger</span>
    <span _border="all" _border_color="warning">warning</span>
    <span _border="all" _border_color="info">info</span>
    <span _border="all" _border_color="light">light</span>
    <span _border="all" _border_color="dark">dark</span>
    <span _border="all" _border_color="white">white</span>
    <span _border="all" _border_color="#0dcaf0">#0dcaf0</span>
    <hr>
    <span _border="all" _border_width="1">1</span>
    <span _border="all" _border_width="2">2</span>
    <span _border="all" _border_width="3">3</span>
    <span _border="all" _border_width="4">4</span>
    <span _border="all" _border_width="5">5</span>
    <span _border="all" _border_width="10px">10px</span>
  `,
  styles: [`
    hr {
      opacity: 1;
      background: #f0f0f0;
    }

    span {
      display: inline-flex;
      width: 6rem;
      height: 6rem;
      margin: 0.25rem;
      background-color: #f5f5f5;
      font-size: 14px;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class NSDemoStyleBorderComponent {
}
