import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-gutter',
  template: `
    <div row gx="0">
      <div col>
        <div w="100" h="100" nsBackground="primary">1</div>
      </div>
      <div>
        <div col w="100" h="100" nsBackground="secondary">1</div>
      </div>
    </div>
    <div row gx="1">
      <div col>
        <div w="100" h="100" nsBackground="primary">1</div>
      </div>
      <div col>
        <div w="100" h="100" nsBackground="secondary">1</div>
      </div>
    </div>
    <div row gx="3">
      <div col>
        <div w="100" h="100" nsBackground="primary">1</div>
      </div>
      <div col>
        <div w="100" h="100" nsBackground="secondary">1</div>
      </div>
    </div>
    <div row gx="20px">
      <div col>
        <div w="100" h="100" nsBackground="primary">1</div>
      </div>
      <div col>
        <div w="100" h="100" nsBackground="secondary">1</div>
      </div>
    </div>
  `,
})
export class NSDemoLayoutGutterComponent {
}
