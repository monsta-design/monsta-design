import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NSWindowsComponent} from "monsta-design/windows";

@Component({
  selector: 'ns-demo-windows-basic',
  template: `
    <button (click)="open()">打开</button>
    <ns-windows [nsView]="wv"></ns-windows>
    <ns-windows-view #wv></ns-windows-view>
  `,
  styles: [`
  `]
})
export class NSDemoWindowsBasicComponent implements AfterViewInit {

  @ViewChild(NSWindowsComponent) nsWindows: NSWindowsComponent

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.nsWindows)
  }

  async open() {
    await this.nsWindows.open({
      id: 'input',
      title: 'Input 输入框',
      module: (): Promise<any> => {
        return new Promise<any>(resolve => {
          import('../input/index.module').then(m => resolve(m.NSDemoInputModule))
        })
      },
      component: (): Promise<any> => {
        return new Promise<any>(resolve => {
          import('../input/zh.component').then(m => resolve(m.NSDemoInputZhComponent))
        })
      },
    })
    await this.nsWindows.open({
      id: 'loading',
      title: 'Loading',
      module: (): Promise<any> => {
        return new Promise<any>(resolve => {
          import('../loading/index.module').then(m => resolve(m.NSDemoLoadingModule))
        })
      },
      component: (): Promise<any> => {
        return new Promise<any>(resolve => {
          import('../loading/zh.component').then(m => resolve(m.NSDemoLoadingZhComponent))
        })
      },
    })
  }
}
