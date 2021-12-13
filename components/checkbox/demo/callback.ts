import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-checkbox-callback',
  template: `
    <ns-checkbox nsLabel="是否同意" [nsToggle]="check"></ns-checkbox>
  `,
  styles: [`
  `]
})
export class NSDemoCheckboxCallbackComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  check(): boolean {
    return true
  }

}
