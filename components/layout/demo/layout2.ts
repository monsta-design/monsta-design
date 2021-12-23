import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-layout2',
  template: `
    <ns-layout>
      <ns-layout-aside>aside</ns-layout-aside>
      <ns-layout>
        <ns-layout-header>header</ns-layout-header>
        <ns-layout-content>content</ns-layout-content>
        <ns-layout-footer>footer</ns-layout-footer>
      </ns-layout>
    </ns-layout>
  `,
  styles: [`
    ns-layout, ns-layout-aside, ns-layout-header, ns-layout-footer {
      background-color: rgba(86, 61, 124, 0.15);
      border: 1px solid rgba(86, 61, 124, 0.15);
    }
  `]
})
export class NSDemoLayoutLayout2Component {
}
