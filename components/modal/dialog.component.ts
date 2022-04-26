import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  HostBinding,
  Input, NgZone,
  OnChanges,
  OnInit,
  Output, Renderer2,
  SimpleChanges,
  TemplateRef, ViewChild
} from '@angular/core';
import {NsModalBaseComponent} from "./base.component";
import {CdkPortalOutlet} from "@angular/cdk/portal";
import {OverlayRef} from "@angular/cdk/overlay";
import {NsModalConfig} from "./types";

@Component({
  selector: 'ns-modal-dialog',
  template: `
    <div #modalDialog class="bs-modal-dialog">
      <div class="bs-modal-content">
        <div class="bs-modal-header">
          <h5 class="bs-modal-title">
            你好
          </h5>
          <button type="button" class="bs-btn-close" (click)="close()"></button>
        </div>
        <div class="bs-modal-body">
          <ng-template cdkPortalOutlet></ng-template>
        </div>
        <!--        <div *ngIf="nsFooter" class="bs-modal-footer">-->
        <!--          <button type="button" class="bs-btn bs-btn-secondary" (click)="cancel()">-->
        <!--            {{ nsCancelText }}-->
        <!--          </button>-->
        <!--          <button type="button" class="bs-btn bs-btn-primary" (click)="ok()">-->
        <!--            {{ nsOkText }}-->
        <!--          </button>-->
        <!--        </div>-->
      </div>
    </div>
  `,
  styleUrls: ['./modal.scss'],
  host: {
    class: 'bs-modal bs-show',
  }
})
export class NsModalDialogComponent extends NsModalBaseComponent {

  @ViewChild(CdkPortalOutlet, {static: true}) portalOutlet!: CdkPortalOutlet;
  @ViewChild('modalDialog', {static: true}) modalElementRef!: ElementRef<HTMLDivElement>;

  @HostBinding('style') get getStyle() {
    return {
      display: 'block',
    }
  }

  constructor(
    protected ngZone: NgZone,
    protected elementRef: ElementRef,
    protected cd: ChangeDetectorRef,
    protected render: Renderer2,
    protected overlayRef: OverlayRef,
    public config: NsModalConfig,
  ) {
    super(
      ngZone,
      elementRef,
      cd,
      render,
      overlayRef,
      config,
    )
  }
}
