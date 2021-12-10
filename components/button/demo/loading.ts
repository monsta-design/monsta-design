import {Component} from '@angular/core';


@Component({
  selector: 'ns-demo-button-loading',
  template: `
    <button nsButton="primary" [nsButtonLoading]="loading" (click)="clickHandler()" disabled>Click Me</button>
    <button class="bs-btn bs-btn-primary bs-btn-sm bs-rounded-circle" type="button" disabled>
      <span class="bs-spinner-border bs-spinner-border-sm bs-me-1" role="status" aria-hidden="true"></span>
      <span class="bs-visually-hidden">Loading...</span>
      OK
    </button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonLoadingComponent {
  loading = false

  clickHandler() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
