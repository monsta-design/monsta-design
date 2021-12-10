import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-space-split',
  template: `
    <div _h_stack _h_split="center">
      <button _button="link">link1</button>
      <button _button="link">link2</button>
      <button _button="link">link3</button>
    </div>
    <div _v_stack>
      <button _button="link">link1</button>
      <button _button="link">link2</button>
      <button _button="link">link3</button>
    </div>
  `,
})
export class NSDemoLayoutSpaceSplitComponent {
}
