import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-breadcrumb-basic',
  template: `
    <ns-breadcrumb>
      <ns-breadcrumb-item>Home</ns-breadcrumb-item>
      <ns-breadcrumb-item [nsActive]="true">Library</ns-breadcrumb-item>
    </ns-breadcrumb>
  `,
  styles: [`
  `]
})
export class NSDemoBreadcrumbBasicComponent {
}
