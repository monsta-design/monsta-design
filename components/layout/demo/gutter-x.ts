import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-gutter-x',
  template: `
    <button _button (click)="addGutter()">+10px</button>
    <div _row [_gx_lg]="lg+'px'" [_gx_xl]="xl+'px'" [_gx_xxl]="xxl+'px'" [_gx_md]="md+'px'" [_gx_sm]="sm+'px'" gx="0">
      <div _col>
        <div _w="100" _h="100" _bg="primary">1</div>
      </div>
      <div _col>
        <div _w="100" _h="100" _bg="secondary">2</div>
      </div>
      <div _col>
        <div _w="100" _h="100" _bg="success">3</div>
      </div>
      <div _col>
        <div _w="100" _h="100" _bg="warning">4</div>
      </div>
      <div _col>
        <div _w="100" _h="100" _bg="danger">5</div>
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
