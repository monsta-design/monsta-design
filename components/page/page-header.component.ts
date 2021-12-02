import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'ns-page-header',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./page-header.component.scss']
})
export class NSPageHeaderComponent implements OnInit {

  @Input() _intro: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
