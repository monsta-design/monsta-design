import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ContentChild, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, Type,
} from '@angular/core';
import {NsModalService} from "./modal.service";
import {InputBoolean} from "monsta-design/core";
import {NsModalConfig, NsModalRef} from "./types";
import {ViewContainerRef} from '@angular/core';
import {NsModalContentDirective} from "./modal-content.directive";


@Component({
  selector: 'ns-modal',
  template: '',
  styleUrls: ['./modal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NsModalComponent implements OnChanges, AfterContentInit {

  @Input() nsHeader
  @Input() nsContent?: string | TemplateRef<any> | Type<any>;
  @Input() nsFooter
  @Input() nsTitle
  @Input() nsClose
  @Input() @InputBoolean() nsVisible: boolean;
  @Output() nsVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ContentChild(NsModalContentDirective, {static: true, read: TemplateRef}) contentFromContentChild!: TemplateRef<any>;
  // @ContentChild(NsModalContentComponent) contentFromContentChild!: Type<any>;

  private modalRef: NsModalRef = null

  constructor(
    private cd: ChangeDetectorRef,
    private nsModalService: NsModalService,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngAfterContentInit(): void {
    console.log(this.contentFromContentChild)
  }

  open() {
    if (!this.nsVisible) {
      this.nsVisible = true
      this.nsVisibleChange.emit(true)
    }
    if (!this.modalRef) {
      const config = this.getConfig();
      this.modalRef = this.nsModalService.create(config);
    }
  }

  close() {
    console.log('触发关闭21',this.nsVisible)
    if (this.nsVisible) {
      this.nsVisible = false
      console.log('触发关闭222')
      this.nsVisibleChange.emit(false)
    }

    if(this.modalRef){
      this.modalRef.close()
      this.modalRef = null
    }
  }

  private getConfig(): NsModalConfig {
    const componentConfig = new NsModalConfig()
    componentConfig.nsViewContainerRef = this.viewContainerRef;
    console.log(this.contentFromContentChild)
    componentConfig.nsContent = this.nsContent || this.contentFromContentChild;
    // componentConfig.nsContent = this.nsContent;
    return componentConfig;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {nsVisible} = changes
    if (nsVisible) {
      if (this.nsVisible) {
        this.open()
      } else {
        this.close()
      }
    }
  }


}
