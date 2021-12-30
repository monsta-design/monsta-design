import {Component} from '@angular/core';
import {NSMessageService} from "monsta-design/message";

@Component({
  selector: 'ns-demo-message-basic',
  template: `
    <button class="bs-btn bs-btn-primary" (click)="tip()">消息提示</button>
    <ns-message></ns-message>
  `,
  styles: [`
  `],
})
export class NSDemoMessageBasicComponent {

  constructor(
    private message: NSMessageService,
  ) {
  }

  tip() {
    this.message.success('', null)
  }
}
