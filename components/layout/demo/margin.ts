import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-margin',
  template: `
    <a href="javascript:;" (click)="addMargin()">添加间距</a>
    <a href="javascript:;" (click)="subMargin()">减少间距</a>
    <div class="container" nsBorder="all">
      <div [m]="m" [m_sm]="m_sm" [m_md]="m_md" [m_lg]="m_lg" [m_xl]="m_xl" [m_xxl]="m_xxl" w="20px" h="20px"
           nsBackground="light">
      </div>
    </div>
  `,
  styles: [`
    .container {
      background: #58a;
      /*background-image: linear-gradient(rgba(255, 255, 255, .3) 1px, transparent 0),*/
      /*linear-gradient(90deg, rgba(255, 255, 255, .3) 1px, transparent 0),*/
      /*linear-gradient(white 1px, transparent 0),*/
      /*linear-gradient(90deg, white 1px, transparent 0);*/
      /*background-size: 15px 15px, 15px 15px, 75px 75px, 75px 75px;*/
    }
  `]
})
export class NSDemoLayoutMarginComponent {
  m = '1px'
  m_sm = '10px'
  m_md = '20px'
  m_lg = '30px'
  m_xl = '40px'
  m_xxl = '50px'

  addMargin() {
    this.m = parseInt(this.m) + 1 + 'px'
    this.m_sm = parseInt(this.m_sm) + 10 + 'px'
    this.m_md = parseInt(this.m_md) + 20 + 'px'
    this.m_lg = parseInt(this.m_lg) + 30 + 'px'
    this.m_xl = parseInt(this.m_xl) + 40 + 'px'
    this.m_xxl = parseInt(this.m_xxl) + 50 + 'px'
  }

  subMargin() {
    this.m = parseInt(this.m) - 1 + 'px'
    this.m_sm = parseInt(this.m_sm) - 10 + 'px'
    this.m_md = parseInt(this.m_md) - 20 + 'px'
    this.m_lg = parseInt(this.m_lg) - 30 + 'px'
    this.m_xl = parseInt(this.m_xl) - 40 + 'px'
    this.m_xxl = parseInt(this.m_xxl) - 50 + 'px'
  }
}
