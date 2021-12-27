import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-checkbox-inline',
  template: `
      <ns-checkbox nsLabel="1" nsInline="true"></ns-checkbox>
      <ns-checkbox nsLabel="2" nsInline="true"></ns-checkbox>
      <ns-checkbox nsLabel="3" nsInline="true" [nsToggleCheck]="check"></ns-checkbox>
  `,
  styles: [`
  `]
})
export class NSDemoCheckboxInlineComponent {
  check(): boolean {
    return false
  };
}
