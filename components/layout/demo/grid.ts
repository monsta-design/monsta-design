import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-grid',
  template: `
    <ns-row cols="3" gx="10px" gy="10px">
      <ns-col><div w="100" h="100" bg="primary">1</div></ns-col>
      <ns-col><div w="100" h="100" bg="secondary">2</div></ns-col>
      <ns-col><div w="100" h="100" bg="success">3</div></ns-col>
      <ns-col><div w="100" h="100" bg="warning">4</div></ns-col>
      <ns-col><div w="100" h="100" bg="danger">5</div></ns-col>
      <ns-col><div w="100" h="100" bg="info">6</div></ns-col>
      <ns-col><div w="100" h="100" bg="light">7</div></ns-col>
      <ns-col><div w="100" h="100" bg="dark" color="light">8</div></ns-col>
      <ns-col><div w="100" h="100" bg="body">9</div></ns-col>
    </ns-row>
  `,
})
export class NSDemoLayoutGridComponent {
}
