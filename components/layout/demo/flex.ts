import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-flex',
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
    <hr>
    <div _flex _flex_justify_content="start">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <div _flex _flex_justify_content="end">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <div _flex _flex_justify_content="center">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <div _flex _flex_justify_content="between">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <div _flex _flex_justify_content="around">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <div _flex _flex_justify_content="evenly">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <hr>
    <div _flex _h="100px" _flex_align_items="start">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <div _flex _h="100px" _flex_align_items="end">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <div _flex _h="100px" _flex_align_items="center">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <div _flex _h="100px" _flex_align_items="stretch">
      <div _p="2">Flex item 1</div>
      <div _p="2">Flex item 2</div>
      <div _p="2">Flex item 3</div>
    </div>
    <hr>
    <div _flex>
      <div _p="2" _me="auto">Flex item</div>
      <div _p="2">Flex item</div>
      <div _p="2">Flex item</div>
    </div>
    <div _flex>
      <div _p="2">Flex item</div>
      <div _p="2">Flex item</div>
      <div _p="2" _ms="auto">Flex item</div>
    </div>
    <hr>
    <div _h="200px" _flex _flex_direction="column" _flex_align_items="start">
      <div _p="2" _mb="auto">Flex item</div>
      <div _p="2">Flex item</div>
      <div _p="2">Flex item</div>
    </div>
    <div _h="200px" _flex _flex_direction="column" _flex_align_items="end">
      <div _p="2">Flex item</div>
      <div _p="2">Flex item</div>
      <div _p="2" _mt="auto">Flex item</div>
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
export class NSDemoLayoutFlexComponent {
}
