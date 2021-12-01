import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  mt = 3
  p = 3
  md = '10px';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeMT() {
    if (this.mt == 3) {
      this.mt = 5
      this.p = 5
      this.md = '10px';
    } else {
      this.md = '30px';
      this.mt = 3
      this.p = 3
    }
  }
}
