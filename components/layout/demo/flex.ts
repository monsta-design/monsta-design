import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-flex',
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
    <hr>
    <div flex flex_justify_content="start">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <div flex flex_justify_content="end">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <div flex flex_justify_content="center">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <div flex flex_justify_content="between">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <div flex flex_justify_content="around">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <div flex flex_justify_content="evenly">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <hr>
    <div flex h="100px" flex_align_items="start">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <div flex h="100px" flex_align_items="end">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <div flex h="100px" flex_align_items="center">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <div flex h="100px" flex_align_items="stretch">
      <div p="2">Flex item 1</div>
      <div p="2">Flex item 2</div>
      <div p="2">Flex item 3</div>
    </div>
    <hr>
    <div flex>
      <div p="2" me="auto">Flex item</div>
      <div p="2">Flex item</div>
      <div p="2">Flex item</div>
    </div>
    <div flex>
      <div p="2">Flex item</div>
      <div p="2">Flex item</div>
      <div p="2" ms="auto">Flex item</div>
    </div>
    <hr>
    <div h="200px" flex flex_direction="column" flex_align_items="start">
      <div p="2" mb="auto">Flex item</div>
      <div p="2">Flex item</div>
      <div p="2">Flex item</div>
    </div>
    <div h="200px" flex flex_direction="column" flex_align_items="end">
      <div p="2">Flex item</div>
      <div p="2">Flex item</div>
      <div p="2" mt="auto">Flex item</div>
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
