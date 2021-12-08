import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-layout2',
  template: `
    <ns-layout>
      <ns-aside>aside</ns-aside>
      <ns-layout>
        <ns-header>header</ns-header>
        <ns-content>content</ns-content>
        <ns-footer>footer</ns-footer>
      </ns-layout>
    </ns-layout>
  `,
  styles: [`
    ns-layout, ns-aside, ns-header, ns-footer {
      background-color: rgba(86, 61, 124, 0.15);
      border: 1px solid rgba(86, 61, 124, 0.15);
    }
  `]
})
export class NSDemoLayoutLayout2Component {
}
