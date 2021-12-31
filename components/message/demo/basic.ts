import {Component} from '@angular/core';
import {NSMessageService} from "monsta-design/message";

@Component({
  selector: 'ns-demo-message-basic',
  template: `
    <button class="bs-btn bs-btn-primary" (click)="tip('info')">提示</button>
    <button class="bs-btn bs-btn-primary" (click)="tip('success')">成功</button>
    <button class="bs-btn bs-btn-primary" (click)="tip('warn')">警告</button>
    <button class="bs-btn bs-btn-primary" (click)="tip('error')">错误</button>
  `,
  styles: [`
  `],
})
export class NSDemoMessageBasicComponent {

  constructor(
    private message: NSMessageService,
  ) {
  }

  tip(type) {
    this.message[type]('Hello world', null)
  }
}
