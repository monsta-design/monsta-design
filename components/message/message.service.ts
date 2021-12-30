import {Injectable} from '@angular/core';
import {Overlay} from "@angular/cdk/overlay";
import {NSMessageServiceModule} from "./message.service.module";

export interface MessageOptions {
  nsDuration?: number,
}

@Injectable({
  providedIn: NSMessageServiceModule,
})
export class NSMessageService {

  constructor(
    protected overlay: Overlay,
  ) {

  }

  success(content: string, options?: MessageOptions) {
    let overlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global()
    })
    console.log(overlayRef)
  }

  private pushMessage(level: string, content: string, options?: MessageOptions) {

  }

  private renderMessage() {

  }
}
