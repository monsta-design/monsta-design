import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-grid',
  template: `
    <div row row_cols="3" gx="10px" gy="10px">
      <div col><div w="100" h="100" nsBackground="primary">1</div></div>
      <div col><div w="100" h="100" nsBackground="secondary">2</div></div>
      <div col><div w="100" h="100" nsBackground="success">3</div></div>
      <div col><div w="100" h="100" nsBackground="warning">4</div></div>
      <div col><div w="100" h="100" nsBackground="danger">5</div></div>
      <div col><div w="100" h="100" nsBackground="info">6</div></div>
      <div col><div w="100" h="100" nsBackground="light">7</div></div>
      <div col><div w="100" h="100" nsBackground="dark" nsColor="light">8</div></div>
      <div col><div w="100" h="100" nsBackground="body">9</div></div>
    </div>
  `,
})
export class NSDemoLayoutGridComponent {
}
