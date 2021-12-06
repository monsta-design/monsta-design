import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-gutter-x',
  template: `
    <ns-button type="primary" (click)="addGutter()">+10px</ns-button>
    <ns-row [gx_lg]="lg+'px'" [gx_xl]="xl+'px'" [gx_xxl]="xxl+'px'" [gx_md]="md+'px'" [gx_sm]="sm+'px'">
      <ns-col>
        <div w="100" h="100" bg="primary">1</div>
      </ns-col>
      <ns-col>
        <div w="100" h="100" bg="secondary">2</div>
      </ns-col>
      <ns-col>
        <div w="100" h="100" bg="success">3</div>
      </ns-col>
      <ns-col>
        <div w="100" h="100" bg="warning">4</div>
      </ns-col>
      <ns-col>
        <div w="100" h="100" bg="danger">5</div>
      </ns-col>
    </ns-row>
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
