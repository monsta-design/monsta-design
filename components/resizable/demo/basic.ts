import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-resizable-basic',
  template: `
    <div nsResizable> I'm now resizable</div>
  `,
  styles: [`
  `]
})
export class NSDemoResizableBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
