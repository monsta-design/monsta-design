import {Injectable, Injector} from '@angular/core';
import {Overlay} from "@angular/cdk/overlay";
import {NSMessageServiceModule} from "./message.service.module";
import {ComponentPortal, DomPortal} from "@angular/cdk/portal";
import {NSMessageComponent} from "monsta-design/message/message.component";

export interface MessageOptions {
  nsDuration?: number,
}

@Injectable({
  providedIn: NSMessageServiceModule,
})
export class NSMessageService {

  constructor(
    protected overlay: Overlay,
    private injector: Injector,
  ) {

  }

  success(content: string, options?: MessageOptions) {
    // let overlayRef = this.overlay.create({
    //   hasBackdrop: false,
    //   scrollStrategy: this.overlay.scrollStrategies.noop(),
    //   positionStrategy: this.overlay.position().global()
    // })
    // overlayRef.attach(`ns`)
    const overlayRef = this.overlay.create({
      height: '400px',
      width: '600px',
    });
    // 注入 component
    // const componentPortal = new ComponentPortal(NSMessageComponent, null, this.injector);
    // const componentRef = overlayRef.attach(componentPortal);

    // 注入 dom
    // const componentPortal = new ComponentPortal(NSMessageComponent, null, this.injector);
    let div = document.createElement('div')
    div.innerHTML = 'Hello world!'
    document.body.append(div) // 必须添加到 BODY 中
    console.log(div)
    const componentRef = overlayRef.attach(new DomPortal(div));

  }

  private pushMessage(level: string, content: string, options?: MessageOptions) {

  }

  private renderMessage() {

  }
}
