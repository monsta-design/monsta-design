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
  TemplateRef
} from '@angular/core';
// import Modal from 'projects/lib/src/js/modal.js';
import Modal from 'monsta-bootstrap/js/src/modal.js';
import {NS_SIZE} from 'projects/lib/src/types';

@Component({
  selector: 'ns-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
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
  @Input() nsShow: boolean = false;
  @Input() scrollable: boolean = true;
  @Input() centered: boolean = false;
  @Input() nsSize: NS_SIZE | null = null;
  @Output() nsOnClose: EventEmitter<null> = new EventEmitter<null>();
  @Output() nsOnOK: EventEmitter<null> = new EventEmitter<null>();
  @Output() nsOnCancel: EventEmitter<null> = new EventEmitter<null>();

  isTplTitle: boolean = false;

  modal: Modal = null;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.isTplTitle = this.nsTitle instanceof TemplateRef;

    console.log(this.nsTitle, this.isTplTitle);
  }


  ngAfterViewInit() {
    this.modal = new Modal(this.el.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.nsShow != 'undefined' && this.modal) {
    if (changes.nsShow) {
      this.modal.show();
    } else {
      this.modal.hide();
    }
    }
  }

  close() {
    // if (this.modal) {
    //   this.modal.hide();
    //   this.nsOnClose.emit();
    // }
  }

  handleUpdate() {
    // if (this.modal) {
    //   this.modal.handleUpdate();
    // }
  }

  cancel() {
    this.close();
  }

  ok() {
    this.close();
  }
}
