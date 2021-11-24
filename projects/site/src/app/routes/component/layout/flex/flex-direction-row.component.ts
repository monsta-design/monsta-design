import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flex-direction-row',
  template: `
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  `,
  styles: [`
    .container {
      height: 200px;
      background: antiquewhite;
      border: 1px solid #eee;
      display: flex;
      flex-direction: row;
    }

    .item {
      width: 30px;
      height: 30px;
      background: #6c757d;
    }
  `]
})
export class FlexDirectionRowComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
