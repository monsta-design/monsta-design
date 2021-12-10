import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-responsive',
  template: `
    <div _row>
      <div _col="1"><div _w="100" _h="100" _bg="primary">1</div></div>
      <div _col="2"><div _w="100" _h="100" _bg="secondary">2</div></div>
      <div _col="3"><div _w="100" _h="100" _bg="success">3</div></div>
      <div _col="6"><div _w="100" _h="100" _bg="warning">4</div></div>
    </div>
  `,
})
export class NSDemoLayoutResponsiveComponent {
}
