import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-layout1',
  template: `
    <div row>
      <div col><div w="100" h="100" nsBackground="primary">1</div></div>
      <div col><div w="100" h="100" nsBackground="secondary">2</div></div>
      <div col><div w="100" h="100" nsBackground="success">3</div></div>
      <div col><div w="100" h="100" nsBackground="warning">4</div></div>
      <div col><div w="100" h="100" nsBackground="danger">5</div></div>
    </div>
  `,
})
export class NSDemoLayoutLayout1Component {
}
