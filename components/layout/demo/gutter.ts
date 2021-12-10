import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-gutter',
  template: `
    <div _row _gx="0">
      <div _col>
        <div _w="100" _h="100" _bg="primary">1</div>
      </div>
      <div>
        <div _col _w="100" _h="100" _bg="secondary">1</div>
      </div>
    </div>
    <div _row _gx="1">
      <div _col>
        <div _w="100" _h="100" _bg="primary">1</div>
      </div>
      <div _col>
        <div _w="100" _h="100" _bg="secondary">1</div>
      </div>
    </div>
    <div _row _gx="3">
      <div _col>
        <div _w="100" _h="100" _bg="primary">1</div>
      </div>
      <div _col>
        <div _w="100" _h="100" _bg="secondary">1</div>
      </div>
    </div>
    <div _row _gx="20px">
      <div _col>
        <div _w="100" _h="100" _bg="primary">1</div>
      </div>
      <div _col>
        <div _w="100" _h="100" _bg="secondary">1</div>
      </div>
    </div>
  `,
})
export class NSDemoLayoutGutterComponent {
}
