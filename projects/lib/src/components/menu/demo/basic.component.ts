import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-basic',
  template: `
    <ns-menu style="width: 300px; border: 1px solid #f0f0f0;">
      <ns-menu-group nsTitle="通用">
        <ns-menu-item nsIcon="bi bi-suit-heart-fill" nsTitle="Button 按钮"></ns-menu-item>
        <ns-menu-item nsIcon="bi bi-bag-check" nsTitle="Icon 图标"></ns-menu-item>
        <ns-menu-item nsTitle="Typography 排版"></ns-menu-item>
      </ns-menu-group>
      <ns-menu-group nsTitle="布局">
        <ns-menu-item nsTitle="Divider 分割线"></ns-menu-item>
        <ns-menu-item nsTitle="Grid 栅栏"></ns-menu-item>
        <ns-menu-item nsTitle="Layout 布局"></ns-menu-item>
        <ns-menu-item nsTitle="Space 间距">
          <ns-menu-item nsTitle="间距1"></ns-menu-item>
          <ns-menu-item nsTitle="间距2"></ns-menu-item>
          <ns-menu-item nsTitle="间距3"></ns-menu-item>
        </ns-menu-item>
      </ns-menu-group>
    </ns-menu>
  `,
})
export class NSDemoMenuBasicComponent {
}
