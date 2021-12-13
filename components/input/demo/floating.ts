import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-floating',
  template: `
    <ns-floating-input nsLabel="用户名"></ns-floating-input>
    <ns-floating-input nsLabel="*密码" nsType="password"></ns-floating-input>
  `,
  styles: [`
    ns-floating-input {
      margin-bottom: 1rem;
    }
  `]
})
export class NSDemoInputFloatingComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
