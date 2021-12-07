import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-gutter-y',
  template: `
    <ns-row cols="2" gy="20px">
      <ns-col><div w="100" h="100" bg="primary">1</div></ns-col>
      <ns-col><div w="100" h="100" bg="secondary">2</div></ns-col>
      <ns-col><div w="100" h="100" bg="success">3</div></ns-col>
      <ns-col><div w="100" h="100" bg="warning">4</div></ns-col>
      <ns-col><div w="100" h="100" bg="danger">5</div></ns-col>
    </ns-row>
  `,
})
export class NSDemoLayoutGutterYComponent {
}