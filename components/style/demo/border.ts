import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-style-border',
  template: `
    <span border="all">all</span>
    <span border="top">top</span>
    <span border="bottom">bottom</span>
    <span border="start">start</span>
    <span border="end">end</span>
    <hr>
    <span border="none">none</span>
    <span border="no-top">top</span>
    <span border="no-bottom">bottom</span>
    <span border="no-start">start</span>
    <span border="no-end">end</span>
    <hr>
    <span border="all" border_color="primary">primary</span>
    <span border="all" border_color="secondary">secondary</span>
    <span border="all" border_color="success">success</span>
    <span border="all" border_color="danger">danger</span>
    <span border="all" border_color="warning">warning</span>
    <span border="all" border_color="info">info</span>
    <span border="all" border_color="light">light</span>
    <span border="all" border_color="dark">dark</span>
    <span border="all" border_color="white">white</span>
    <span border="all" border_color="#0dcaf0">#0dcaf0</span>
    <hr>
    <span border="all" border_width="1">1</span>
    <span border="all" border_width="2">2</span>
    <span border="all" border_width="3">3</span>
    <span border="all" border_width="4">4</span>
    <span border="all" border_width="5">5</span>
    <span border="all" border_width="10px">10px</span>
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
