import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  NgZone,
  OnDestroy, Renderer2,
  EventEmitter,
} from "@angular/core";
import {BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal} from "@angular/cdk/portal";
import {OverlayRef} from "@angular/cdk/overlay";
import {NsModalConfig, NsModalRef} from "monsta-design/modal/types";


// import {isTypedArray} from "lodash";

@Directive()
export class NsModalBaseComponent extends BasePortalOutlet implements OnDestroy {
  portalOutlet!: CdkPortalOutlet;
  triggerCancel = new EventEmitter<void>();
  triggerOk = new EventEmitter<void>();
  modalRef: NsModalRef = null;

  constructor(
    protected ngZone: NgZone,
    protected elementRef: ElementRef,
    protected cd: ChangeDetectorRef,
    protected render: Renderer2,
    protected overlayRef: OverlayRef,
    public config: NsModalConfig,
  ) {
    super();
  }

  close() {
    this.triggerCancel.emit()
  }

  ok() {
    this.triggerOk.emit()
  }


  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
// isTypedArray()

    if (this.portalOutlet.hasAttached()) {
      // throwNzModalContentAlreadyAttachedError();
    }
    // this.savePreviouslyFocusedElement();
    // this.setZIndexForBackdrop();
    return this.portalOutlet.attachComponentPortal(portal);

  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    if (this.portalOutlet.hasAttached()) {
      // throwNzModalContentAlreadyAttachedError();
    }
    // this.savePreviouslyFocusedElement();
    // this.setZIndexForBackdrop();
    return this.portalOutlet.attachTemplatePortal(portal);
  }

  ngOnDestroy(): void {
  }
}
