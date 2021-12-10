import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-link-basic',
  template: `
    <a href="#" _link="primary">Primary link</a>
    <a href="#" _link="secondary">Secondary link</a>
    <a href="#" _link="success">Success link</a>
    <a href="#" _link="danger">Danger link</a>
    <a href="#" _link="warning">Warning link</a>
    <a href="#" _link="info">Info link</a>
    <a href="#" _link="light">Light link</a>
    <a href="#" _link="dark">Dark link</a>
  `,
  styles: [`
    a {
      margin-right: 0.5rem;
    }
  `]
})
export class NSDemoLinkBasicComponent {
}
