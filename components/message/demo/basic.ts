import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-message-basic',
  template: `
    <div class="bs-toast bs-show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="bs-toast-header">
        <img src="..." class="bs-rounded bs-me-2" alt="...">
        <strong class="bs-me-auto">Bootstrap</strong>
        <small class="bs-text-muted">11 mins ago</small>
        <button type="button" class="bs-btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="bs-toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class NSDemoMessageBasicComponent {

  show = false

  toggle() {
    this.show = !this.show
  }
}
