import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-alert-second',
  template: `
    <ns-alert [nsType]="'danger'">
      A simple primary alert—check it out!
    </ns-alert>
  `,
  styles: [`
  `]
})
export class NSDemoAlertSecondComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
