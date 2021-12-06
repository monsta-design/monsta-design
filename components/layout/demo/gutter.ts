import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-gutter',
  template: `
    <ns-row gx="0">
      <ns-col>
        <div w="100" h="100" bg="primary">1</div>
      </ns-col>
      <ns-col>
        <div w="100" h="100" bg="secondary">1</div>
      </ns-col>
    </ns-row>
    <ns-row gx="1">
      <ns-col>
        <div w="100" h="100" bg="primary">1</div>
      </ns-col>
      <ns-col>
        <div w="100" h="100" bg="secondary">1</div>
      </ns-col>
    </ns-row>
    <ns-row gx="3">
      <ns-col>
        <div w="100" h="100" bg="primary">1</div>
      </ns-col>
      <ns-col>
        <div w="100" h="100" bg="secondary">1</div>
      </ns-col>
    </ns-row>
    <ns-row gx="20px">
      <ns-col>
        <div w="100" h="100" bg="primary">1</div>
      </ns-col>
      <ns-col>
        <div w="100" h="100" bg="secondary">1</div>
      </ns-col>
    </ns-row>
  `,
})
export class NSDemoLayoutGutterComponent {
}
