import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-badge-basic',
  template: `
    <button type="button" class="bs-btn bs-btn-primary">
      Notifications <ns-badge>4</ns-badge>
    </button>
  `,
  styles: [`
  `]
})
export class NSDemoBadgeBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
