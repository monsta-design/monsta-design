import {Component, HostBinding, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'ns-card',
  templateUrl: './card.component.html',
})
export class NSCardComponent implements OnInit {

  @HostBinding() class = 'bs-card';
  @Input('_img') nsImg: TemplateRef<any> | string | null = null;
  @Input('_title') nsTitle: TemplateRef<any> | string | null = null;
  @Input('_content') nsBody: TemplateRef<any> | string | null = null;

  isTitleRef: boolean = false;
  isBodyRef: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.isTitleRef = this.nsTitle instanceof TemplateRef;
    this.isBodyRef = this.nsBody instanceof TemplateRef;
  }

}
