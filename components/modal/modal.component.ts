import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef, ViewChild
} from '@angular/core';
import Modal from 'monsta-bootstrap/js/src/modal.js';
import {isTrue, NS_BOOL, InputBoolean} from 'monsta-design/core';
import {isNumeric} from "rxjs/internal-compatibility";

@Component({
  selector: 'ns-modal',
  template: `
    <div class="bs-modal-backdrop bs-fade bs-show" style="z-index: 0;"></div>
    <div class="bs-modal-dialog" [style.maxWidth]="getWidth">
      <div class="bs-modal-content">
        <div class="bs-modal-header">
          <h5 class="bs-modal-title">
            <ng-template [ngIf]="isTplTitle">
              <!--          <ng-container [ngTemplateOutlet]="nsTitle"></ng-container>-->
            </ng-template>
            <ng-template [ngIf]="!isTplTitle">
              {{ nsTitle }}
            </ng-template>
          </h5>
          <button *ngIf="nsClose" type="button" class="bs-btn-close" (click)="hide()"></button>
        </div>
        <div class="bs-modal-body">
          <ng-content></ng-content>
        </div>
        <div *ngIf="nsFooter" class="bs-modal-footer">
          <button type="button" class="bs-btn bs-btn-secondary" (click)="cancel()">
            {{ nsCancelText }}
          </button>
          <button type="button" class="bs-btn bs-btn-primary" (click)="ok()">
            {{ nsOkText }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss'],
})
export class NSModalComponent implements AfterViewInit, OnChanges, OnInit {

  @HostBinding() class = 'bs-modal bs-fade';
  @HostBinding() tabindex = -1;
  @Input() nsHeader: TemplateRef<any> | null = null;
  @Input() nsFooter: TemplateRef<any> | string | boolean = true;
  @Input() nsButton: TemplateRef<any> | string | null = null;
  @Input() nsTitle: TemplateRef<any> | string | null = null;
  @Input() nsClose: TemplateRef<any> | boolean = true;
  @Input() nsOk: boolean = true;
  @Input() nsOkText: string = '确定';
  @Input() nsCancelText: string = '取消';
  @Input() nsCancel: boolean = true;
  @Input() @InputBoolean() nsShow: boolean = false;
  @Input() scrollable: boolean = true;
  @Input() centered: boolean = false;
  @Input() nsSize: string | null = null;
  @Input() nsWidth: string | number = 500;
  @Output() nsOnClose: EventEmitter<null> = new EventEmitter<null>();
  @Output() nsOnOK: EventEmitter<null> = new EventEmitter<null>();
  @Output() nsOnCancel: EventEmitter<null> = new EventEmitter<null>();
  @Output() nsShowChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  get getWidth() {
    if (isNumeric(this.nsWidth)) {
      return `${this.nsWidth}px`
    }
    return this.nsWidth
  }

  isTplTitle: boolean = false;

  // @ViewChild('modal') modal: ElementRef;

  modal: Modal = null;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    // this.isTplTitle = this.nsTitle instanceof TemplateRef;
  }


  ngAfterViewInit() {
    if (this.nsShow) {
      // this.modal.show()
      this.show()
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {nsShow} = changes;
    if (nsShow) {
      if (isTrue(changes.nsShow.currentValue)) {
        this.show();
      } else {
        this.hide();
      }
      // this.nsShowChange.emit(nsShow.currentValue)
    }
  }

  getModal() {
    if (this.modal == null) {
      this.modal = new Modal(this.el.nativeElement);
    }
    return this.modal
  }

  show() {
    this.getModal().show()
  }

  hide() {
    this.getModal().hide()
    this.nsShowChange.emit(false)
  }

  cancel() {
    this.nsOnCancel.emit();
  }

  ok() {
    this.nsOnOK.emit();
  }
}
