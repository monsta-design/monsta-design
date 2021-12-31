import {Injectable, Injector} from '@angular/core';
import {Overlay} from "@angular/cdk/overlay";
import {NSMessageServiceModule} from "./message.service.module";
import {ComponentPortal, DomPortal} from "@angular/cdk/portal";
import {NSMessageComponent} from "./message.component";
import {OverlayConfig} from "@angular/cdk/overlay/overlay-config";
import {MessageOptions} from "./types";


@Injectable({
  providedIn: NSMessageServiceModule,
})
export class NSMessageService {

  constructor(
    protected overlay: Overlay,
    private injector: Injector,
  ) {

  }

  info(message: string, options?: MessageOptions) {
    this.createInstance('info', message, options)
  }

  success(message: string, options?: MessageOptions) {
    this.createInstance('success', message, options)
  }

  warn(message: string, options?: MessageOptions) {
    this.createInstance('warn', message, options)
  }

  error(message: string, options?: MessageOptions) {
    this.createInstance('error', message, options)
  }

  private createInstance(type: 'info' | 'success' | 'warn' | 'error', message: string, options?: MessageOptions) {

    // let overlayRef = this.overlay.create({
    //   hasBackdrop: false,
    //   scrollStrategy: this.overlay.scrollStrategies.noop(),
    //   positionStrategy: this.overlay.position().global()
    // })
    // overlayRef.attach(`ns`)
    const overlayConfig: OverlayConfig = {
      hasBackdrop: false,
      panelClass: 'ns-message'

    }
    const overlayRef = this.overlay.create(overlayConfig);
    // 注入 component
    const componentPortal = new ComponentPortal(NSMessageComponent, null, this.injector);
    const componentRef = overlayRef.attach(componentPortal);
    componentRef.instance.nsType = type
    componentRef.instance.nsMessage = message
    const timeout = setTimeout(() => {
      componentRef.destroy()
      clearTimeout(timeout)
    }, options?.nsDuration || 2000)
    // 注入 dom
    // const componentPortal = new ComponentPortal(NSMessageComponent, null, this.injector);
    // let div = document.createElement('div')
    // div.innerHTML = 'Hello world!'
    // document.body.append(div) // 必须添加到 BODY 中
    // console.log(div)
    // const componentRef = overlayRef.attach(new DomPortal(div));
  }
}
