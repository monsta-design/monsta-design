import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-style-rounded',
  template: `
    <span _rounded="all">all</span>
    <span _rounded="top">top</span>
    <span _rounded="bottom">bottom</span>
    <span _rounded="start">start</span>
    <span _rounded="end">end</span>
    <span _rounded="circle">circle</span>
    <span _rounded="pill" style="width:100px;">pill</span>
    <hr>
    <span _rounded="all" _rounded_size="0">0</span>
    <span _rounded="all" _rounded_size="1">1</span>
    <span _rounded="all" _rounded_size="2">2</span>
    <span _rounded="all" _rounded_size="3">3</span>
    <span _rounded="all" _rounded_size="4">4</span>
    <span _rounded="all" _rounded_size="5">5</span>
    <span _rounded="all" _rounded_size="50px">50px</span>
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
      background-color: #868e96;
      font-size: 14px;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class NSDemoStyleRoundedComponent {
}
