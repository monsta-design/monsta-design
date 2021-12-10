import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-flex-direction',
  template: `
    <div flex>
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <hr>
    <div flex flex_direction="row-reverse">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <hr>
    <div flex flex_direction="column">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <hr>
    <div flex flex_direction="column-reverse">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
  `,
  styles: [`
    hr {
      opacity: 1;
      background: #f0f0f0;
    }

    div {
      background-color: rgba(86, 61, 124, 0.15);
      border: 1px solid rgba(86, 61, 124, 0.15);
    }

    :host > div {
      margin-bottom: 1rem;
    }
  `]
})
export class NSDemoLayoutFlexDirectionComponent {
}
