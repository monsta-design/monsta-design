import {Component, Input, OnInit} from '@angular/core';
import {faCheckCircle, faExclamationTriangle, faInfoCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'ns-message',
  template: `
    <div class="bs-toast bs-show" role="alert" aria-live="assertive" aria-atomic="true">
      <!--      <div class="bs-toast-header">-->
      <!--        &lt;!&ndash;        <img src="..." class="rounded me-2" alt="...">&ndash;&gt;-->
      <!--        <strong class="bs-me-auto">Bootstrap</strong>-->
      <!--        <small>11 mins ago</small>-->
      <!--        <button type="button" class="bs-btn-close" data-bs-dismiss="toast" aria-label="Close"></button>-->
      <!--      </div>-->
      <div class="bs-toast-body">
        <fa-icon *ngIf="nsType == 'info'" class="ns-info" [icon]="icon.info"></fa-icon>
        <fa-icon *ngIf="nsType == 'success'" class="ns-success" [icon]="icon.success"></fa-icon>
        <fa-icon *ngIf="nsType == 'warn'" class="ns-warn" [icon]="icon.warn"></fa-icon>
        <fa-icon *ngIf="nsType == 'error'" class="ns-error" [icon]="icon.error"></fa-icon>
        {{ nsMessage }}
      </div>
    </div>
  `,
})
export class NSMessageComponent {
  icon = {
    info: faInfoCircle,
    success: faCheckCircle,
    warn: faExclamationTriangle,
    error: faTimesCircle,
  }
  @Input() nsType: 'info' | 'success' | 'warn' | 'error' = 'info'
  @Input() nsMessage: string;
}
