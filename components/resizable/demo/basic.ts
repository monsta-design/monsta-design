import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-resizable-basic',
  template: `
    <div nsResizable [nsResizableMinHeight]="60" [nsResizableMinWidth]="60" nsResizableHandles="b"> I'm now resizable</div>
  `,
  styles: [`
    div {
      height: 60px;
      background: gray;
    }
  `]
})
export class NSDemoResizableBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
