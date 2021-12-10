import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-grid',
  template: `
    <div _row _row_cols="3" _gx="10px" _gy="10px">
      <div _col><div _w="100" _h="100" _bg="primary">1</div></div>
      <div _col><div _w="100" _h="100" _bg="secondary">2</div></div>
      <div _col><div _w="100" _h="100" _bg="success">3</div></div>
      <div _col><div _w="100" _h="100" _bg="warning">4</div></div>
      <div _col><div _w="100" _h="100" _bg="danger">5</div></div>
      <div _col><div _w="100" _h="100" _bg="info">6</div></div>
      <div _col><div _w="100" _h="100" _bg="light">7</div></div>
      <div _col><div _w="100" _h="100" _bg="dark" _color="light">8</div></div>
      <div _col><div _w="100" _h="100" _bg="body">9</div></div>
    </div>
  `,
})
export class NSDemoLayoutGridComponent {
}
