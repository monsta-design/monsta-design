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

@Component({
  selector: 'ns-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class NSModalComponent implements AfterViewInit, OnChanges, OnInit {

  @HostBinding() class = 'bs-modal bs-fade';
  @HostBinding() tabindex = -1;
  @Input() nsHeader: TemplateRef<any> | null = null;
  @Input() nsFooter: TemplateRef<any> | string | boolean | null = null;
  @Input() nsButton: TemplateRef<any> | string | null = null;
  @Input() nsTitle: TemplateRef<any> | string | null = null;
  @Input() nsClose: TemplateRef<any> | boolean = true;
  @Input() nsOk: boolean = true;
  @Input() nsOkText: string;
  @Input() nsCancel: boolean = true;
  @Input() nsCancelText: string;
  @Input() @InputBoolean() nsShow: boolean = false;
  @Input() scrollable: boolean = true;
  @Input() centered: boolean = false;
  @Input() nsSize: string | null = null;
  @Output() nsOnClose: EventEmitter<null> = new EventEmitter<null>();
  @Output() nsOnOK: EventEmitter<null> = new EventEmitter<null>();
  @Output() nsOnCancel: EventEmitter<null> = new EventEmitter<null>();
  @Output() nsShowChange: EventEmitter<boolean> = new EventEmitter<boolean>();
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
    this.hide();
  }

  ok() {
    this.hide();
  }
}
