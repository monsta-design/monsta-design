import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-layout3',
  template: `
    <ns-layout>
      <ns-layout-header h="45px">header</ns-layout-header>
      <ns-layout>
        <ns-layout-aside w="200px" h="200px">aside</ns-layout-aside>
        <ns-layout>
          <ns-layout-content>content</ns-layout-content>
          <ns-layout-footer h="45px">footer</ns-layout-footer>
        </ns-layout>
      </ns-layout>
    </ns-layout>
  `,
  styles: [`
    ns-layout, ns-layout-aside, ns-layout-header, ns-layout-footer {
      background-color: rgba(86, 61, 124, 0.15);
      border: 1px solid rgba(86, 61, 124, 0.15);
      color: #4b3e5a;
    }
  `]
})
export class NSDemoLayoutLayout3Component {
}
