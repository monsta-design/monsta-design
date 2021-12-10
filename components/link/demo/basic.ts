import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-link-basic',
  template: `
    <a href="#" nsLink="primary">Primary link</a>
    <a href="#" nsLink="secondary">Secondary link</a>
    <a href="#" nsLink="success">Success link</a>
    <a href="#" nsLink="danger">Danger link</a>
    <a href="#" nsLink="warning">Warning link</a>
    <a href="#" nsLink="info">Info link</a>
    <a href="#" nsLink="light">Light link</a>
    <a href="#" nsLink="dark">Dark link</a>
  `,
  styles: [`
    a {
      margin-right: 0.5rem;
    }
  `]
})
export class NSDemoLinkBasicComponent {
}
