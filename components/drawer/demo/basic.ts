import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-drawer-basic',
  template: `
    <button nsButton="secondary" nsButtonOutline="true" nsButtonSize="sm" (click)="toggle()">打开</button>
    <div class="container">
      <div class="main">main</div>
      <ns-drawer [nsVisible]="visible" (nsOnClose)="visible = false">drawer</ns-drawer>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 1rem;
      display: flex;
      overflow: hidden;
      position: relative;
      height: 100px;
    }

    .main {
      background: #b3d4fc;
      width: 100%;
    }

    ns-drawer {
      background: #657eae;
      height: 100%;
    }
  `]
})
export class NSDemoDrawerBasicComponent implements OnInit {

  visible = false

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.visible = !this.visible
  }
}
