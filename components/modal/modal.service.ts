import {Injectable, Injector, TemplateRef} from '@angular/core';
import {NsModalConfig, NsModalRef} from "./types";
import {ComponentType, Overlay, OverlayConfig, OverlayRef} from "@angular/cdk/overlay";
import {NsModalBaseComponent} from "./base.component";
import {ComponentPortal, TemplatePortal} from "@angular/cdk/portal";
import {NsModalDialogComponent} from "./dialog.component";

type ContentType<T> = ComponentType<T> | TemplateRef<T> | string;

@Injectable()
export class NsModalService {

  constructor(
    private overlay: Overlay,
    private injector: Injector,
  ) {
  }

  create(config: NsModalConfig): NsModalRef {
    console.log(config, '创建 modal')
    const modalRef = this.open(config.nsContent as ContentType<any>, config)
    return modalRef
  }

  private open(nsContent: ContentType<any>, config: NsModalConfig): NsModalRef {
    // 1. 合并默认配置
    // 2. 创建 overlayRef
    let modalRef = new NsModalRef(config)
    modalRef.overlayRef = this.createOverlay(modalRef);
    modalRef.dialogInstance = this.attachModalDialog(modalRef)
    this.attachModalContent(modalRef, nsContent)
    modalRef.wait()
    return modalRef
  }

  private createOverlay(modalRef: NsModalRef) {
    // const globalConfig: any = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global(),
      // disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true),
      // direction: getValueWithConfig(config.nzDirection, globalConfig.nzDirection, this.directionality.value)
    });
    // if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
    //   overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
    // }

    return this.overlay.create(overlayConfig);
  }

  private attachModalDialog(modalRef): NsModalBaseComponent {

    const injector = Injector.create({
      // parent: userInjector || this.injector,
      parent: this.injector,
      providers: [
        {provide: OverlayRef, useValue: modalRef.overlayRef},
        {provide: NsModalConfig, useValue: modalRef.config}
      ]
    });

    const component = NsModalDialogComponent

    const dialogPortal = new ComponentPortal<NsModalBaseComponent>(
      component,
      modalRef.config.nsViewContainerRef,
      injector
    );

    // @ts-ignore
    const dialogRef = modalRef.overlayRef.attach<NsModalBaseComponent>(dialogPortal)
    return dialogRef.instance
  }

  private attachModalContent(modalRef: NsModalRef, nsContent: ContentType<any>) {

    const injector = this.injector;

    if (nsContent instanceof TemplateRef) {
      modalRef.contentInstance = modalRef.dialogInstance.attach(new TemplatePortal(
        nsContent,
        modalRef.config.nsViewContainerRef,
      ))
    } else if (nsContent && typeof nsContent !== 'string') {
      // 注册 Component
      const dialogPortal = new ComponentPortal(
        // @ts-ignore
        nsContent,
        modalRef.config.nsViewContainerRef,
        injector
      );
      // @ts-ignore
      const dialogRef = modalRef.dialogInstance.attach<NsModalBaseComponent>(dialogPortal)
      modalRef.contentInstance = dialogRef.instance;
    } else {
      // 绑定字符串
    }

  }
}
