import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-drawer-basic',
  template: `
    <button nsButton="secondary" nsButtonOutline="true" nsButtonSize="sm" (click)="toggle()">打开</button>
    <div class="container">
      <div class="main">村上春树说：你要记得那些大雨中为你撑伞的人，帮你挡住外来之物的人，黑暗中默默抱紧你的人，逗你笑的人，
        陪你彻夜聊天的人，坐车来看望你的人，陪你哭过的人，在医院陪你的人，总是以你为重的人，带着你四处游荡的人，说想念你的人，是这些人组成你生命中一点一滴的温暖，是这些温暖使你远离阴霾。
      </div>
      <ns-drawer [nsWidth]="500" [nsVisible]="visible" (nsOnClose)="visible = false" [nsMask]="true">drawer</ns-drawer>
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
      padding: 1rem;
    }

    ns-drawer {
      background: #b3d4fc;
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
