import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-gutter-x',
  template: `
    <button _button (click)="addGutter()">+10px</button>
    <div row [gx_lg]="lg+'px'" [gx_xl]="xl+'px'" [gx_xxl]="xxl+'px'" [gx_md]="md+'px'" [gx_sm]="sm+'px'" gx="0">
      <div col>
        <div w="100" h="100" nsBackground="primary">1</div>
      </div>
      <div col>
        <div w="100" h="100" nsBackground="secondary">2</div>
      </div>
      <div col>
        <div w="100" h="100" nsBackground="success">3</div>
      </div>
      <div col>
        <div w="100" h="100" nsBackground="warning">4</div>
      </div>
      <div col>
        <div w="100" h="100" nsBackground="danger">5</div>
      </div>
    </div>
  `,
})
export class NSDemoLayoutGutterXComponent {
  sm = 10
  md = 20
  lg = 40
  xl = 80
  xxl = 120

  addGutter() {
    this.sm += 10
    this.md += 20
    this.lg += 40
    this.xl += 80
    this.xxl += 120
  }
}
