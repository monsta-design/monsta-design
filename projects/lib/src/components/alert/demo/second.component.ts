import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-basic',
  template: `
    <ns-alert [type]="'danger'">
      A simple primary alert—check it out!
    </ns-alert>
  `,
  styles: [`
  `]
})
export class NsDemoAlertSecondComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
