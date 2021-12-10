import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-basic',
  template: `
    <div _row>
      <div _col>
        <div _w="100" _w_sm="" _h="100" _bg="primary">1</div>
      </div>
      <div _col>
        <div _w="100" _w_sm="" _h="100" _bg="secondary">2</div>
      </div>
      <div _col>
        <div _w="100" _w_sm="" _h="100" _bg="success">3</div>
      </div>
      <div _col>
        <div _w="100" _w_sm="" _h="100" _bg="warning">4</div>
      </div>
      <div _col>
        <div _w="100" _w_sm="" _h="100" _bg="danger">5</div>
      </div>
    </div>
  `,
})
export class NSDemoLayoutBasicComponent {
}
