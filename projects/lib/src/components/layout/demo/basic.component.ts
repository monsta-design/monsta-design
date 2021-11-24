import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-basic',
  template: `
    <ns-layout>
      <ns-header>
        这是header
      </ns-header>
      <ns-layout>
        <ns-sider [nsCollapsedWidth]="100" [nsCollapsible]="true" [nsTheme]="'light'">
          这是sider
        </ns-sider>
        <ns-content>
          <div style="min-height: 200px;margin:16px;background:#fff">这是内容</div>
        </ns-content>
      </ns-layout>
    </ns-layout>
  `,
})
export class NSDemoLayoutBasicComponent{
}
