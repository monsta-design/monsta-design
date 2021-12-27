import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-checkbox-basic',
  template: `
    <ns-checkbox nsLabel="是否同意"  [(ngModel)]="agree" name="agree"></ns-checkbox> {{ agree }}
  `,
  styles: [`
  `]
})
export class NSDemoCheckboxBasicComponent implements OnInit {

  agree = true

  constructor() {
  }

  ngOnInit(): void {
  }

}
