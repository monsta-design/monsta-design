import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-basic',
  template: `
    <ns-alert [type]="'secondary'">
      A simple primary alert—check it out!
    </ns-alert>
  `,
  styles: [`
  `]
})
export class NsDemoAlertBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
