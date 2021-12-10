import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-padding',
  template: `
    <button (click)="changeSize()">切换</button>
    <div>
      <div m="5px" [m_sm]="m_sm" [m_md]="mmd" w="100px" h="100px" nsBackground="secondary">2</div>
    </div>
  `,
})
export class NSDemoLayoutPaddingComponent {
  m_sm = '10px'
  mmd = '30px'

  changeSize() {
    if (this.m_sm === '10px') {
      this.m_sm = '30px'
    } else {
      this.m_sm = '10px'
    }

    if (this.mmd === '30px') {
      this.mmd = '60px'
    } else {
      this.mmd = '30px'
    }
  }
}
