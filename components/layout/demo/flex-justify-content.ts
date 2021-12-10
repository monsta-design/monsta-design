import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-flex-justify-content',
  template: `
    <div _flex>
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <hr>
    <div _flex _flex_direction="row-reverse">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <hr>
    <div _flex _flex_direction="column">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <hr>
    <div _flex _flex_direction="column-reverse">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
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
export class NSDemoLayoutFlexJustifyContentComponent {
}
