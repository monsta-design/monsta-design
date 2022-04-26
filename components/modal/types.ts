import {EventEmitter, TemplateRef, Type, ViewContainerRef} from "@angular/core";
import {NsModalBaseComponent} from "./base.component";
import {OverlayRef} from "@angular/cdk/overlay";

export type OnClickCallback<T> = (instance: T) => (false | void | {}) | Promise<false | void | {}>;


export class NsModalConfig {
  nsCentered?: boolean = false // 是否绝对居中
  nsClosable?: boolean = true // 是否可关闭
  nsEscapable?: boolean = false // 是否支持 Esc 关闭
  nsOkLoading?: boolean = false
  nsOkDisabled?: boolean = false
  nsOkType?: string = 'primary'
  nsOkText?: string = 'OK'
  nsCancelLoading?: boolean = false
  nsCancelDisabled?: boolean = false
  nsCancelType?: string = 'default'
  nsCancelText?: string = 'Cancel'
  nsAutoFocus?: 'ok' | 'cancel' | 'auto' | null = 'auto'
  nsMask?: boolean = false
  nsMaskClosable?: boolean = false
  nsKeyboard?: boolean = false
  nsZIndex?: boolean = false
  nsWidth?: number | string = 640
  nsCloseIcon?: string | TemplateRef<void> = 'close'
  nsOnCancel?: EventEmitter<void> | OnClickCallback<void> = null;
  nsOnOk?: EventEmitter<void> | OnClickCallback<void> = null;
  nsAfterOpen?: EventEmitter<void>;
  nsAfterClose?: EventEmitter<void>;

  nsStyle?: object;
  nsTitle?: string | TemplateRef<{}>;
  nsContent?: string | TemplateRef<void> | Type<any>;
  nsFooter?: string | TemplateRef<void>;
  nsViewContainerRef?: ViewContainerRef;
}


export class NsModalRef {
  dialogInstance: any;
  contentInstance: any;
  overlayRef: OverlayRef;
  config: NsModalConfig;

  constructor(config: NsModalConfig) {
    this.config = config
  }

  wait() {
    this.dialogInstance.triggerCancel.subscribe(() => {
      this.close()
      this.trigger(this.config.nsOnCancel)
    })
  }

  destroy() {

  }

  close() {
    console.log('触发关闭')
    this.overlayRef.detachBackdrop();
    this.overlayRef.dispose();
  }

  trigger(trigger) {
    if (!trigger) {
      return
    }
    if (trigger instanceof EventEmitter) {
      trigger.emit()
    }
  }

}
