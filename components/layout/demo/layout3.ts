import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-layout3',
  template: `
    <ns-layout>
      <ns-header h="45px">header</ns-header>
      <ns-layout>
        <ns-aside w="200px" h="200px">aside</ns-aside>
        <ns-layout>
          <ns-content>content</ns-content>
          <ns-footer h="45px">footer</ns-footer>
        </ns-layout>
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
export class NSDemoLayoutLayout3Component {
}
