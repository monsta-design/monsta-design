import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-responsive',
  template: `
    <ns-row>
      <ns-col span="1"><div w="100" h="100" bg="primary">1</div></ns-col>
      <ns-col span="2"><div w="100" h="100" bg="secondary">2</div></ns-col>
      <ns-col span="3"><div w="100" h="100" bg="success">3</div></ns-col>
      <ns-col span="6"><div w="100" h="100" bg="warning">4</div></ns-col>
    </ns-row>
  `,
})
export class NSDemoLayoutResponsiveComponent {
}
