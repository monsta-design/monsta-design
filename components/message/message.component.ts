import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-message',
  template: `
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class NSMessageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
