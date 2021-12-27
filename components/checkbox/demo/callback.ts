import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ns-demo-checkbox-callback',
  template: `
    <!--    <input nsCheckbox [checked]="checked" [nsCheckboxCheck]="check">-->
    <!--    {{ checked }}-->
<!--    <input nsCheckbox [checked]="checked" >-->
<!--    {{ checked }}-->
  `,
  styles: [`
  `]
})
export class NSDemoCheckboxCallbackComponent implements OnInit, OnChanges {

  checked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  check(val): boolean {
    console.log(`收到值:${val}，但是要禁用选它，返回了 false`)
    return false
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
