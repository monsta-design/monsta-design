import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  QueryList,
  TemplateRef, ViewChild
} from '@angular/core';

@Component({
  selector: 'ns-menu-item',
  template: `
    <a class="ns-menu-item-link" [href]="nsLink" [target]="nsTarget" (click)="switch()">
      <span>
        <i class="ns-menu-icon" *ngIf="nsIcon" [class]="nsIcon"></i>
        <span>{{nsTitle}}</span>
      </span>
      <i *ngIf="items.length>0" class="bi bi-chevron-down"></i>
    </a>
    <div *ngIf="items.length>0" #wrap class="ns-menu-items hide">
      <ng-content #content></ng-content>
    </div>
  `,
  styleUrls: ['./menu-item.component.scss']
})
export class NSMenuItemComponent implements OnInit, AfterViewInit {

  @ContentChildren(NSMenuItemComponent) items: QueryList<NSMenuItemComponent>;
  @ViewChild('wrap') wrap: ElementRef;
  @Input('nsIcon') nsIcon: string | TemplateRef<any> = null;
  @Input('nsTitle') nsTitle: string | TemplateRef<any> = '';
  @Input('nsLink') nsLink: string = 'javascript:void(0);';
  @Input('nsTarget') nsTarget: '_blank' | '_parent' | '_self' | '_top' = '_self';

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // console.log('content:', this.items);
  }

  switch() {
    if (this.wrap) {
      if (this.wrap.nativeElement.classList.contains('hide')) {
        this.wrap.nativeElement.classList.remove('hide');
      } else {
        this.wrap.nativeElement.classList.add('hide');
      }
      return false;
    }
  }

}

