import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../app/app.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'ns-demo',
  template: `
    <div>
      <div>
        <button (click)="getCode()">获取源码</button>
      </div>
      <ng-content></ng-content>
      <div class="code" *ngIf="codeLoaded">
        <ns-highlight [_code]="highlightCode"></ns-highlight>
      </div>
    </div>`,
})
export class DemoComponent implements OnInit {

  @Input() _title: string;
  @Input() _id: string;
  @Input() _selector: string;
  @Input() _link: string;
  @Input() _command: string;
  @Input() _name: string;
  @Input() _iframe_source: string;
  @Input() _iframe_height: string;
  @Input() _href: string;

  highlightCode: string;
  codeLoaded: boolean;

  constructor(
    private appService: AppService,
  ) {
  }

  ngOnInit() {
  }

  getCode() {
    if (this.codeLoaded) {
      return
    }
    this.appService.getCode(this._id).subscribe((res: any) => {
      this.highlightCode = res.highlightCode
      this.codeLoaded = true
    })
  }
}
