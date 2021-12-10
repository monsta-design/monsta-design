import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-padding',
  template: `
    <button (click)="changeSize()">切换</button>
    <div>
      <div m="5px" [m_sm]="m_sm" [m_md]="m_md" _w="100px" _h="100px" _bg="secondary">2</div>
    </div>
  `,
})
export class NSDemoLayoutPaddingComponent {
  m_sm = '10px'
  m_md = '30px'

  changeSize() {
    if (this.m_sm === '10px') {
      this.m_sm = '30px'
    } else {
      this.m_sm = '10px'
    }

    if (this.m_md === '30px') {
      this.m_md = '60px'
    } else {
      this.m_md = '30px'
    }
  }
}
