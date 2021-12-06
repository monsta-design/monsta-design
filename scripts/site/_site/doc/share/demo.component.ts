import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../app/app.service";
import {faCode} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'ns-demo',
  template: `
    <h3 class="ns-demo-title" id="{{_id}}">{{_title}}</h3>
    <div class="ns-demo">
      <div class="ns-demo-example">
        <ng-content></ng-content>
      </div>
      <div class="ns-demo-actions" (click)="getCode()">
        <fa-icon [icon]="codeIcon"></fa-icon>
      </div>
      <div class="ns-demo-code" *ngIf="show">
        <ns-highlight [_code]="highlightCode"></ns-highlight>
      </div>
    </div>`,
  styleUrls: ['./demo.component.scss']
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

  codeIcon = faCode
  highlightCode: string;
  codeLoaded: boolean;
  show: boolean;

  constructor(
    private appService: AppService,
  ) {
  }

  ngOnInit() {
  }

  getCode() {
    if (!this.codeLoaded) {
      this.appService.getCode(this._id).subscribe((res: any) => {
        this.highlightCode = res.highlightCode
        this.codeLoaded = true
        this.show = true
      })
    } else {
      this.show = !this.show
    }
  }
}
