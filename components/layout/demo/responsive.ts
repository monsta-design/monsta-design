import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-responsive',
  template: `
    <div row>
      <div col="1"><div w="100" h="100" nsBackground="primary">1</div></div>
      <div col="2"><div w="100" h="100" nsBackground="secondary">2</div></div>
      <div col="3"><div w="100" h="100" nsBackground="success">3</div></div>
      <div col="6"><div w="100" h="100" nsBackground="warning">4</div></div>
    </div>
  `,
})
export class NSDemoLayoutResponsiveComponent {
}
