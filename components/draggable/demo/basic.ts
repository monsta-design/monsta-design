import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-draggable-basic',
  template: `
    <div nsDraggable>Drag me!</div>
  `,
  styles: [`
    div {
      width: 200px;
      height: 200px;
      background-color: #20a8d8;
      color: #fff;
      padding: 75px 0;
      line-height: 50px;
      text-align: center;
    }
  `]
})
export class NSDemoDraggableBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
