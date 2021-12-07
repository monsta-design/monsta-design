import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-style-rounded',
  template: `
    <span rounded="all">all</span>
    <span rounded="top">top</span>
    <span rounded="bottom">bottom</span>
    <span rounded="start">start</span>
    <span rounded="end">end</span>
    <span rounded="circle">circle</span>
    <span rounded="pill" start="width:100px;">pill</span>
    <hr>
    <span rounded="all" rounded_size="0">0</span>
    <span rounded="all" rounded_size="1">1</span>
    <span rounded="all" rounded_size="2">2</span>
    <span rounded="all" rounded_size="3">3</span>
    <span rounded="all" rounded_size="4">4</span>
    <span rounded="all" rounded_size="5">5</span>
    <span rounded="all" rounded_size="50px">50px</span>
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
