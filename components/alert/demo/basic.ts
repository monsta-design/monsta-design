import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-alert-basic',
  template: `
    <ns-alert [nsType]="'secondary'">
      A simple primary alert—check it out!
    </ns-alert>
  `,
  styles: [`
  `]
})
export class NSDemoAlertBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
