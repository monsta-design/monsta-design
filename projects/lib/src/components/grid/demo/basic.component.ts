import {Component} from '@angular/core';

@Component({
  selector: 'ns-basic',
  template: `
    <div ns-container>
      <div ns-row>
        <div class="c1" ns-col [nsSpan]="6">
          1
        </div>
        <div class="c2" ns-col [nsSpan]="6">
          2
        </div>
      </div>
    </div>
  `,
  styles: [`
    .c1 {
      background: red;
    }

    .c2 {
      background: gray;
    }
  `]
})
export class NSDemoGridBasicComponent {
}
